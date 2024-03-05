// import { nanoid } from 'nanoid';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { createContext } from 'react';
import * as postApi from '../../../api/post-api';
import * as condoApi from '../../../api/condo-api';
import { useState } from 'react';
import validatePostForm from '../validators/validate-postForm';
import { useNavigate } from 'react-router-dom';

export const PostFormContext = createContext();

export default function PostFormContextProvider({ children }) {
  const navigate = useNavigate();

  const initialPostFormObj = {
    nameTh: '',
    nameEn: '',
    location: '',
    districtId: '',
    provinceId: '',
    postCode: '',
    lat: '99.99',
    long: '100.1',
    price: '',
    contract: '',
    roomNumber: '',
    roomSize: '',
    bedroom: '',
    bathroom: '',
    floor: '',
    building: '',
    isAvailable: true,
    description: '',
    roomFacilityList: [],
    condoImage: { url: '', file: '' },
    roomImageList: [],
  };
  const [postFormObj, setPostFormObj] = useState(initialPostFormObj);
  const [error, setError] = useState({});
  const [condos, setCondos] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearchSelected = (name) => {
    const condoObj = condos.find(
      (condo) => condo.nameTh === name || condo.nameEn === name
    );

    if (condoObj) {
      setPostFormObj({
        ...postFormObj,
        ...condoObj,
        condoImage: { url: condoObj.condoImage, file: condoObj.condoImage },
      });
      setError({
        ...error,
        nameTh: '',
        nameEn: '',
        location: '',
        districtId: '',
        provinceId: '',
        postCode: '',
        lat: '',
        long: '',
        condoImageForValidate: '',
      });
      setDisabled(true);
    }
  };

  const handleSearchChange = (name, value) => {
    setPostFormObj({ ...postFormObj, [name]: value });
    setError({ ...error, [name]: '' });
    setDisabled(false);
  };

  const handleInputChange = (e) => {
    setPostFormObj({ ...postFormObj, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: '' });
  };

  const handleClickRoomFacility = (facilityId) => {
    const facilityIndex = postFormObj.roomFacilityList.findIndex(
      (facility) => facility === +facilityId
    );
    const newRoomFacilityList = [...postFormObj.roomFacilityList];
    if (facilityIndex < 0) {
      newRoomFacilityList.push(+facilityId);
      setPostFormObj({
        ...postFormObj,
        roomFacilityList: newRoomFacilityList,
      });
    } else {
      const filteredRoomFacilityList = newRoomFacilityList.filter(
        (facility) => facility !== +facilityId
      );
      setPostFormObj({
        ...postFormObj,
        roomFacilityList: filteredRoomFacilityList,
      });
    }
  };

  const handleCondoImageChange = (e) => {
    if (e.target.files[0]) {
      const newCondoImageObj = {
        url: URL.createObjectURL(e.target.files[0]),
        file: e.target.files[0],
      };
      setPostFormObj({
        ...postFormObj,
        condoImage: newCondoImageObj,
      });
      setError({ ...error, condoImageForValidate: '' });
    }
  };

  const handleCondoImageClear = (e) => {
    setPostFormObj({ ...postFormObj, condoImage: { url: '', file: '' } });
  };

  const handleRoomImageAdd = (e) => {
    const roomImageObj = {
      id: nanoid(),
      url: URL.createObjectURL(e.target.files[0]),
      file: e.target.files[0],
    };
    const newRoomImageList = [...postFormObj.roomImageList];
    newRoomImageList.push(roomImageObj);
    setPostFormObj({
      ...postFormObj,
      roomImageList: newRoomImageList,
    });
  };

  const handleRoomImageChange = (e, id) => {
    const newRoomImageList = [...postFormObj.roomImageList];
    if (e.target.files[0]) {
      const foundIndex = newRoomImageList.findIndex(
        (roomImageObj) => roomImageObj.id === id
      );
      const newRoomImageObj = {
        id: id,
        url: URL.createObjectURL(e.target.files[0]),
        file: e.target.files[0],
      };
      newRoomImageList.splice(foundIndex, 1, newRoomImageObj);
      setPostFormObj({
        ...postFormObj,
        roomImageList: newRoomImageList,
      });
    }
  };

  const handleRoomImageClear = (e, id) => {
    const newRoomImageList = [...postFormObj.roomImageList];
    const filteredRoomImageList = newRoomImageList.filter(
      (roomImageObj) => roomImageObj.id !== id
    );
    setPostFormObj({
      ...postFormObj,
      roomImageList: filteredRoomImageList,
    });
  };

  const handlePostFormSubmit = async (e) => {
    try {
      console.log('submit');
      e.preventDefault();
      setLoading(true);

      const newPostFormObj = { ...postFormObj };
      const formData = new FormData();

      delete newPostFormObj.condoImage;
      delete newPostFormObj.roomImages;
      if (postFormObj.description.trim() === '') {
        delete newPostFormObj.description;
      }

      const validateError = validatePostForm({
        ...newPostFormObj,
        condoImageForValidate: postFormObj.condoImage.url,
      });

      console.log('postFormObj.condoImage.file', postFormObj.condoImage);

      if (validateError) {
        toast.error('please fill out correctly');
        return setError(validateError);
      }

      for (let [key, value] of Object.entries(newPostFormObj)) {
        if (key === 'roomFacilityList' || key === 'roomImageList') {
          value = JSON.stringify(value);
        }
        formData.append(key, value);
      }

      formData.append('condoImage', postFormObj.condoImage.file);

      postFormObj.roomImageList.forEach((roomImageObj) =>
        formData.append('roomImages', roomImageObj.file)
      );

      const result = await postApi.createPost(formData);
      console.log(result);
      setLoading(false);
      toast.success('Successfully posted');
      // navigate(`post/${result.post.id}`)
    } catch (err) {
      console.log(err);
      if (err.response?.data?.message === 'ROOM_EXISTED') {
        toast.error(
          'This room has already been posted, please check condo name, room No., floor, and building'
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchCondos = async () => {
    try {
      const res = await condoApi.getCondos();
      setCondos(res.data.condos);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  return (
    <PostFormContext.Provider
      value={{
        postFormObj,
        handleInputChange,
        handleClickRoomFacility,
        handleCondoImageChange,
        handleCondoImageClear,
        handleRoomImageAdd,
        handleRoomImageChange,
        handleRoomImageClear,
        handlePostFormSubmit,
        error,
        handleSearchChange,
        handleSearchSelected,
        condos,
        fetchCondos,
        disabled,
        loading,
      }}
    >
      {children}
    </PostFormContext.Provider>
  );
}
