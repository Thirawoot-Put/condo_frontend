import React, { createContext, useState, useEffect } from 'react';
import * as postApi from '../../../api/post-api';
import * as selectApi from '../../../api/select-api';
import * as roomApi from '../../../api/room-api';
import * as ipApi from '../../../api/ip-api';
import { useAsyncError } from 'react-router';
// import * as store from '../../../ultils/local-store';
// import { toast } from 'react-toastify';
import * as ipgeolocation from '../../../config/ipgeolocation';
import getDistanceFromLatLng from '../../../ultils/getDistanceFromLatLng';

export const SearchContext = createContext();

export default function SearchContextProvider({ children }) {
  const [initialPosts, setInitialPosts] = useState([]);
  const [sortedInitialPosts, setSortedInitialPosts] = useState([]);
  const [activePosts, setActivePosts] = useState([]);
  const [activeCondos, setActiveCondos] = useState([]);
  const [districts, setDistricts] = useState([]);
  //   const [provinces, setProvinces] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [selected, setSelected] = useState({
    name: '',
    prices: [0, 100000],
    districts: [],
    facilities: [],
    condoId: '',
  });
  const [minMaxPrice, setMinMaxPrice] = useState({});
  const [isPriceAscending, setIsPriceAscending] = useState(null);
  const [isDistanceAscending, setIsDistanceAscending] = useState(null);
  const [isViewAscending, setIsViewAscending] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [activeMarker, setActiveMarker] = useState(null);
  const [lat, setLat] = useState(13.715042359221808);
  const [lng, setLng] = useState(100.60007182984619);

  // useEffect(() => {
  //   getActiveCondos();
  // }, [activePosts]);

  // const fetchPostInCondo = async (condoId) => {
  //   try {
  //     setLoadingSideBar(true);
  //     const {
  //       data: { posts },
  //     } = await postApi.getPostInCondo(condoId);
  //     setPostsInCondo(posts);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoadingSideBar(false);
  //   }
  // };

  const handlePriceChange = (event, newPrice) => {
    setSelected({ ...selected, prices: newPrice });
  };

  const getActiveCondos = (posts) => {
    const condoMap = {};
    const newActiveCondos = [...posts].reduce((acc, post) => {
      if (!condoMap.hasOwnProperty(post?.room?.condo?.id)) {
        condoMap[post?.room?.condo?.id] = 1;
        acc.push(post?.room?.condo);
      }
      return acc;
    }, []);
    setActiveCondos(newActiveCondos);
  };

  const getCurrentLatLng = async () => {
    const promise = new Promise((resolve, reject) => {
      console.log('navigator.geolocation', navigator.geolocation);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log('position', position);
            const currentLocation = [
              +position?.coords?.latitude,
              +position?.coords?.longitude,
            ];
            console.log('first');
            resolve(currentLocation);
          },
          (error) => {
            console.log('error', error);
            resolve(null);
          }
        );
      } else {
        console.log('Geolocation is not supported by this browser.');
      }
    });
    return promise;
  };

  const getActivePosts = async () => {
    try {
      setLoading(true);
      const currentLocation = await getCurrentLatLng();
      const {
        data: { posts },
      } = await postApi.fetchAllActivePost();
      const postsWithFacilityMap = posts.map((post) => {
        let distance = null;
        if (currentLocation) {
          distance = getDistanceFromLatLng(
            +post?.room?.condo?.lat,
            +post?.room?.condo?.long,
            +currentLocation[0],
            +currentLocation[1]
          );
        }
        return {
          ...post,
          distance,
          roomFacilityMap: post.room?.roomFacilities?.reduce((acc, cur) => {
            acc[cur.facilityId] = 1;
            return acc;
          }, {}),
        };
      });
      setInitialPosts(postsWithFacilityMap);
      setSortedInitialPosts(postsWithFacilityMap);
      setActivePosts(postsWithFacilityMap);
      getActiveCondos(postsWithFacilityMap);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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

  const getMinMaxPrice = async () => {
    try {
      const {
        data: { price },
      } = await roomApi.getMinMaxPrice();
      setMinMaxPrice(price);
      setSelected({
        ...selected,
        prices: [+price?._min?.price, +price?._max?.price],
      });
    } catch (err) {
      console.log(err);
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
      (district) => district === +districtId
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

  const handleClickCondoMarker = (condo) => {
    setSelected({
      ...selected,
      condoId: condo.id,
    });
    setLat(+condo?.lat);
    setLng(+condo?.long);
    setActiveMarker(condo.id);
    setIsShow(true);
    filterBySelected([...initialPosts], condo.id);
  };

  const handleClickClearFilter = () => {
    setActivePosts(initialPosts);
    getActiveCondos(initialPosts);
    setSelected({
      ...selected,
      prices: [0, +minMaxPrice._max.price],
      districts: [],
      facilities: [],
      condoId: '',
    });
    setIsPriceAscending(null);
    setIsDistanceAscending(null);
    setIsViewAscending(null);
    setActiveMarker(null);
    setIsShow(false);
  };

  const filterBySelected = (posts, condoId = null) => {
    const clonedPost = posts
      ? posts
      : isPriceAscending
        ? [...sortedInitialPosts]
        : [...initialPosts];
    const filteredPosts = clonedPost.filter((post) => {
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
      const IsInSelectedFacilities = selected.facilities.every((facility) =>
        post.roomFacilityMap.hasOwnProperty(facility)
      );
      const IsInSelectedDistricts = selected.districts.includes(
        post.room?.condo?.districtId
      );
      return (
        (selected.name === '' || IsInSelectedName) &&
        // (selected.condoId === '' || IsInSelectedCondoId) &&
        (selected.districts.length === 0 || IsInSelectedDistricts) &&
        (selected.facilities.length === 0 || IsInSelectedFacilities) &&
        IsInSelectedPrices
      );
    });
    getActiveCondos(filteredPosts);
    // const IsInSelectedCondoId = selected.condoId === post.room?.condo?.id;
    const selectedCondoId = condoId || selected.condoId;
    if (selectedCondoId) {
      const filteredPostsByCondo = filteredPosts.filter(
        (post) => selectedCondoId === post.room?.condo?.id
      );
      setActivePosts(filteredPostsByCondo);
      return;
    }
    setActivePosts(filteredPosts);
  };

  const PriceSortCompareFunction = (a, b) => {
    const signConverter = isPriceAscending ? 1 : -1;
    if (+a?.room?.price > +b?.room?.price) {
      return -1 * signConverter;
    } else {
      return 1 * signConverter;
    }
  };

  const handlePriceSort = () => {
    const posts = [...initialPosts];
    posts.sort(PriceSortCompareFunction);
    setIsPriceAscending(isPriceAscending === null ? true : !isPriceAscending);
    setSortedInitialPosts(posts);
    filterBySelected(posts);
    setIsDistanceAscending(null);
    setIsViewAscending(null);
  };

  const DistanceSortCompareFunction = (a, b) => {
    const signConverter = isDistanceAscending ? 1 : -1;
    if (+a?.distance > +b?.distance) {
      return -1 * signConverter;
    } else {
      return 1 * signConverter;
    }
  };

  const handleDistanceSort = () => {
    const posts = [...initialPosts];
    posts.sort(DistanceSortCompareFunction);
    setIsDistanceAscending(
      isDistanceAscending === null ? true : !isDistanceAscending
    );
    setSortedInitialPosts(posts);
    filterBySelected(posts);
    setIsPriceAscending(null);
    setIsViewAscending(null);
  };

  const ViewSortCompareFunction = (a, b) => {
    const signConverter = isViewAscending ? 1 : -1;
    if (+a?.totalViewer > +b?.totalViewer) {
      return -1 * signConverter;
    } else {
      return 1 * signConverter;
    }
  };

  const handleViewSort = () => {
    const posts = [...initialPosts];
    posts.sort(ViewSortCompareFunction);
    setIsViewAscending(isViewAscending === null ? true : !isViewAscending);
    setSortedInitialPosts(posts);
    filterBySelected(posts);
    setIsPriceAscending(null);
    setIsDistanceAscending(null);
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
        handleClickCondoMarker,
        selected,
        filterBySelected,
        handleClickClearFilter,
        handleChangeInputName,
        handleSubmitInputName,
        initialPosts,
        minMaxPrice,
        getMinMaxPrice,
        handlePriceSort,
        isPriceAscending,
        handleDistanceSort,
        isDistanceAscending,
        handleViewSort,
        isViewAscending,
        activeCondos,
        loading,
        setIsShow,
        activeMarker,
        setActiveMarker,
        lat,
        lng,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
