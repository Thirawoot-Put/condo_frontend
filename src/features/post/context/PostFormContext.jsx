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
    roomUtilList: [],
    condoImage: { url: '', file: '' },
    roomImageList: [],
  };
  const [postFormObj, setPostFormObj] = useState(initialPostFormObj);
  const [error, setError] = useState({});
  const [condos, setCondos] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [isJustSelected, setIsJustSelected] = useState(false);

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
      setDisabled(true);
      setIsJustSelected(true);
      console.log('disabled', disabled);
    }
  };

  const handleSearchChange = (name, value) => {
    setPostFormObj({ ...postFormObj, [name]: value });
    setError({ ...error, [name]: '' });
    if (!isJustSelected) {
      setDisabled(false);
      setPostFormObj({
        ...postFormObj,
        location: '',
        districtId: '',
        provinceId: '',
        postCode: '',
        condoImage: { url: '', file: '' },
      });
    }
    setIsJustSelected(false);
  };

  const handleInputChange = (e) => {
    setPostFormObj({ ...postFormObj, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: '' });
  };

  const handleClickRoomUtil = (utilId) => {
    const utilIndex = postFormObj.roomUtilList.findIndex(
      (util) => util === +utilId
    );
    const newRoomUtilList = [...postFormObj.roomUtilList];
    if (utilIndex < 0) {
      newRoomUtilList.push(+utilId);
      setPostFormObj({
        ...postFormObj,
        roomUtilList: newRoomUtilList,
      });
    } else {
      const filteredRoomUtilList = newRoomUtilList.filter(
        (util) => util !== +utilId
      );
      setPostFormObj({
        ...postFormObj,
        roomUtilList: filteredRoomUtilList,
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
        if (key === 'roomUtilList' || key === 'roomImageList') {
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
        handleClickRoomUtil,
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
      }}
    >
      {children}
    </PostFormContext.Provider>
  );
}
