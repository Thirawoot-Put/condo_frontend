import { useEffect, useState, useRef } from 'react';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import PostFormContent from './PostFormContent';
import SelectOption from './SelectOption';
import FacilitiesCheckbox from './FacilitiesCheckbox';
import usePostForm from '../hook/usePostForm';
import ImageCard from './ImageCard';
import RoomImagesContainer from './RoomImagesContainer';
import SearchBarWithOption from '../../../components/SearchBarWithOption';
import MapInput from '../../../components/MapInput';

import Spinner from '../../../components/Spinner';
import { useLocation } from 'react-router-dom';

export default function PostForm() {
  const {
    postFormObj,
    handleInputChange,
    handleMapChange,
    handleCondoImageChange,
    handleCondoImageClear,
    handleRoomImageAdd,
    handlePostFormSubmit,
    error,
    handleSearchChange,
    handleSearchSelected,
    condos,
    fetchCondos,
    disabled,
    loading,
    getSelected,
    facilities,
    setIsEdit,
    fetchPostByPostId,
  } = usePostForm();

  const location = useLocation();
  console.log('location', location);

  const condoImageFileEl = useRef(null);
  const roomImageFileEl = useRef(null);

  useEffect(() => {
    fetchCondos();
    getSelected();
    if (location?.state?.isEdit) {
      setIsEdit(true);
      fetchPostByPostId(location?.state?.postId);
      console.log('location', location);

      return () => {
        location.state.isEdit = false;
        console.log('location. after', location);
        setIsEdit(false);
      };
    }
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <form
      className=' flex flex-col gap-10 p-10 rounded-lg shadow-lg'
      onSubmit={handlePostFormSubmit}
    >
      <div className='font-semibold text-center text-2xl'>Property Sign Up</div>
      {/* --------1. Name and location--------- */}
      <div className='flex flex-col gap-3'>
        <div className='font-semibold'>1. Name and location</div>
        <PostFormContent title='Name'>
          <div className='flex flex-col gap-2'>
            <SearchBarWithOption
              value={postFormObj.nameTh}
              onChange={handleSearchChange}
              onSelect={handleSearchSelected}
              name='nameTh'
              label='Name in Thai'
              list={condos.map((condo) => condo.nameTh)}
            />
            {error.nameTh && (
              <small className='text-red-500'>{error.nameTh}</small>
            )}
            <SearchBarWithOption
              value={postFormObj.nameEn}
              onChange={handleSearchChange}
              onSelect={handleSearchSelected}
              name='nameEn'
              label='Name in English'
              list={condos.map((condo) => condo.nameEn)}
            />
            {error.nameEn && (
              <small className='text-red-500'>{error.nameEn}</small>
            )}
          </div>
        </PostFormContent>
        <PostFormContent title='Address'>
          <Input
            label='Address'
            name='location'
            value={postFormObj.location}
            onChange={handleInputChange}
            errorMsg={error.location}
            disabled={disabled}
          />
          <div className='flex gap-5'>
            <SelectOption
              title='District'
              dataToMap='district'
              name='districtId'
              id='districtId'
              value={postFormObj.districtId}
              onChange={handleInputChange}
              errorMsg={error.districtId}
              disabled={disabled}
            />
            <SelectOption
              title='Province'
              dataToMap='province'
              name='provinceId'
              id='provinceId'
              value={postFormObj.provinceId}
              onChange={handleInputChange}
              errorMsg={error.provinceId}
              disabled={disabled}
            />
            {/* <SelectOption
              title='District'
              name='districtId'
              id='districtId'
              value={postFormObj.districtId}
              valueOption={{ 1: 1, 2: 2, 3: 3 }}
              onChange={handleInputChange}
              errorMsg={error.districtId}
              disabled={disabled}
            />
            <SelectOption
              title='Province'
              name='provinceId'
              id='provinceId'
              value={postFormObj.provinceId}
              valueOption={{ 1: 1, 2: 2, 3: 3 }}
              onChange={handleInputChange}
              errorMsg={error.provinceId}
              disabled={disabled}
            />*/}
            <div className='w-full'>
              <Input
                label='Postal Code'
                name='postCode'
                value={postFormObj.postCode}
                onChange={handleInputChange}
                errorMsg={error.postCode}
                disabled={disabled}
              />
            </div>
          </div>
          {/* This place is for MAPPPPPPPPPPPP */}
          <MapInput
            value={{ lat: +postFormObj.lat, lng: +postFormObj.long }}
            onChange={handleMapChange}
            disabled={disabled}
          />
        </PostFormContent>
      </div>
      {/* --------2. Facilities --------- */}
      <div className='flex flex-col gap-3'>
        <div className='font-semibold'>2. Facilities</div>
        <PostFormContent title='List of facilities'>
          <div className='grid grid-cols-3'>
            {facilities.map(({ id, name }) => (
              <FacilitiesCheckbox key={id} name={name} value={id} />
            ))}
            {/* <FacilitiesCheckbox name='Swimming pool' /> */}
          </div>
        </PostFormContent>
      </div>
      {/* --------3. Room details--------- */}
      <div className='flex flex-col gap-3'>
        <div className='font-semibold'>3. Room details</div>
        <PostFormContent title='Details'>
          <div className='flex gap-3'>
            <div className='w-full'>
              <Input
                label='Room No.'
                name='roomNumber'
                value={postFormObj.roomNumber}
                onChange={handleInputChange}
                errorMsg={error.roomNumber}
                // disabled={disabled}
              />
            </div>
            <div className='w-full'>
              <Input
                label='Floor'
                name='floor'
                value={postFormObj.floor}
                onChange={handleInputChange}
                errorMsg={error.floor}
                // disabled={disabled}
              />
            </div>
            <div className='w-full'>
              <Input
                label='Building'
                name='building'
                value={postFormObj.building}
                onChange={handleInputChange}
                errorMsg={error.building}
                // disabled={disabled}
              />
            </div>
          </div>
          <div className='flex gap-3 align-bottom'>
            <div className='w-full'>
              <Input
                label='Size (m&#178;)'
                name='roomSize'
                value={postFormObj.roomSize}
                onChange={handleInputChange}
                errorMsg={error.roomSize}
                // disabled={disabled}
              />
            </div>
            <SelectOption
              title='Bedroom'
              dataToMap='10'
              name='bedroom'
              id='bedroom'
              value={postFormObj.bedroom}
              onChange={handleInputChange}
              errorMsg={error.bedroom}
              // disabled={disabled}
            />
            <SelectOption
              title='Bathroom'
              dataToMap='10'
              name='bathroom'
              id='bathroom'
              value={postFormObj.bathroom}
              onChange={handleInputChange}
              errorMsg={error.bathroom}
              // disabled={disabled}
            />
          </div>
        </PostFormContent>
      </div>
      {/* --------4. Price--------- */}
      <div className='flex flex-col gap-3'>
        <div className='font-semibold'>4. Price and contract</div>
        <PostFormContent title='Rent'>
          <Input
            label='Monthly rental price (Baht / month)'
            name='price'
            value={postFormObj.price}
            onChange={handleInputChange}
            errorMsg={error.price}
            // disabled={disabled}
          />
        </PostFormContent>
        <PostFormContent title='Contract'>
          <SelectOption
            title='Month'
            dataToMap='12'
            name='contract'
            id='contract'
            value={postFormObj.contract}
            onChange={handleInputChange}
            errorMsg={error.contract}
            // disabled={disabled}
          />
        </PostFormContent>
      </div>
      {/* --------5. Property description--------- */}
      <div className='flex flex-col gap-3'>
        <div className='font-semibold'>5. Property description</div>
        <PostFormContent>
          <div className='relative w-full min-w-[200px]'>
            <label className="after:content[' '] pointer-events-none absolute left-0 -top-8 flex h-full w-full select-none leading-tight text-blue-gray-500 transition-all ">
              Description
            </label>
            <textarea
              placeholder='Please type description'
              className='h-full min-h-[200px] w-full bg-transparent border-0 border-b-2 border-gray-400 focus:outline-none focus:border-b-black'
              name='description'
              value={postFormObj.description}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </PostFormContent>
      </div>
      {/* --------6. Photos--------- */}
      <div className='flex flex-col gap-3'>
        <div className='font-semibold'>6. Photos</div>
        <PostFormContent title='Photo'>
          <div>Condo image</div>
          <input
            type='file'
            className='hidden'
            ref={condoImageFileEl}
            onChange={handleCondoImageChange}
          />
          <ImageCard
            src={postFormObj.condoImage.url}
            alt='condo_image'
            onChange={handleCondoImageChange}
            onClear={handleCondoImageClear}
            errorMsg={error.condoImageForValidate}
            disabled={disabled}
          />
          {!postFormObj.condoImage.url && (
            <div>
              <Button
                bg='blue'
                color='white'
                onClick={() => {
                  condoImageFileEl.current.value = '';
                  condoImageFileEl.current.click();
                }}
              >
                Add photo
              </Button>
            </div>
          )}
          <div>Room image</div>
          <input
            type='file'
            className='hidden'
            ref={roomImageFileEl}
            onChange={handleRoomImageAdd}
          />
          <RoomImagesContainer />
          <div>
            <Button
              bg='blue'
              color='white'
              onClick={() => {
                roomImageFileEl.current.value = '';
                roomImageFileEl.current.click();
              }}
            >
              Add photo
            </Button>
          </div>
        </PostFormContent>
      </div>
      <div className='flex justify-center'>
        <Button bg='blue' color='white' type='submit'>
          Submit
        </Button>
      </div>
      {/* <Input /> */}
    </form>
  );
}
