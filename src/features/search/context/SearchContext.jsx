import React, { createContext, useState, useEffect } from 'react';
import * as postApi from '../../../api/post-api';
import * as selectApi from '../../../api/select-api';
// import * as store from '../../../ultils/local-store';
// import { toast } from 'react-toastify';

export const SearchContext = createContext();

export default function SearchContextProvider({ children }) {
  const [initialPosts, setInitialPosts] = useState([]);
  const [activePosts, setActivePosts] = useState([]);
  const [districts, setDistricts] = useState([]);
  //   const [provinces, setProvinces] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [selected, setSelected] = useState({
    name: '',
    prices: [0, 100000],
    districts: [],
    facilities: [],
  });

  const handlePriceChange = (event, newPrice) => {
    setSelected({ ...selected, prices: newPrice });
  };

  const getActivePosts = async () => {
    try {
      const {
        data: { posts },
      } = await postApi.fetchAllActivePost();
      const postsWithFacilityMap = posts.map((post) => {
        return {
          ...post,
          roomFacilityMap: post.room?.roomFacilities?.reduce((acc, cur) => {
            acc[cur.id] = 1;
            return acc;
          }, {}),
        };
      });
      setInitialPosts(postsWithFacilityMap);
      setActivePosts(postsWithFacilityMap);
    } catch (error) {
      console.log(error);
    }
  };

  const getSelected = async () => {
    try {
      const getDistrictsOption = await selectApi.getDistricts();
      setDistricts(getDistrictsOption.data.districts);
      //   const getProvincesOption = await selectApi.getProvinces();
      //   setProvinces(getProvincesOption.data.provinces);
      const getFacilitiesCheckBoxed = await selectApi.getFacilities();
      setFacilities(getFacilitiesCheckBoxed.data.facilities);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  const handleChangeInputName = (e) => {
    setSelected({ ...selected, name: e.target.value });
  };

  const handleSubmitInputName = () => {
    filterBySelected();
  };

  const handleClickFacilities = (facilityId) => {
    const facilityIndex = selected.facilities.findIndex(
      (facility) => facility === +facilityId
    );
    const newFacilities = [...selected.facilities];
    if (facilityIndex < 0) {
      newFacilities.push(+facilityId);
      setSelected({
        ...selected,
        facilities: newFacilities,
      });
    } else {
      const filteredFacilities = newFacilities.filter(
        (facility) => facility !== +facilityId
      );
      setSelected({
        ...selected,
        facilities: filteredFacilities,
      });
    }
  };

  const handleClickDistricts = (districtId) => {
    const districtIndex = selected.districts.findIndex(
      (facility) => facility === +districtId
    );
    const newDistricts = [...selected.districts];
    if (districtIndex < 0) {
      newDistricts.push(+districtId);
      setSelected({
        ...selected,
        districts: newDistricts,
      });
    } else {
      const filteredDistricts = newDistricts.filter(
        (district) => district !== +districtId
      );
      setSelected({
        ...selected,
        districts: filteredDistricts,
      });
    }
  };

  const handleClickClearFilter = () => {
    setActivePosts(initialPosts);
    setSelected({
      ...selected,
      prices: [0, 100000],
      districts: [],
      facilities: [],
    });
  };

  const filterBySelected = () => {
    const filterPosts = [...initialPosts].filter((post) => {
      const IsInSelectedName =
        post.room?.condo?.nameTh
          ?.toLowerCase()
          .includes(selected?.name?.toLowerCase()) ||
        post.room?.condo?.nameEn
          ?.toLowerCase()
          .includes(selected?.name?.toLowerCase());
      const IsInSelectedPrices =
        +post.room?.price >= +selected.prices[0] &&
        +post.room?.price <= +selected.prices[1];
      const IsInSelectedFacilities =
        selected.facilities.findIndex(
          (facility) => post.roomFacilityMap[facility]
        ) !== -1;
      const IsInSelectedDistricts = selected.districts.includes(
        post.room?.condo?.districtId
      );
      return (
        (selected.name === '' || IsInSelectedName) &&
        (selected.districts.length === 0 || IsInSelectedDistricts) &&
        (selected.facilities.length === 0 || IsInSelectedFacilities) &&
        IsInSelectedPrices
      );
    });
    setActivePosts(filterPosts);
  };

  return (
    <SearchContext.Provider
      value={{
        activePosts,
        getActivePosts,
        getSelected,
        districts,
        facilities,
        handleClickFacilities,
        handleClickDistricts,
        handlePriceChange,
        selected,
        filterBySelected,
        handleClickClearFilter,
        handleChangeInputName,
        handleSubmitInputName,
        initialPosts,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
