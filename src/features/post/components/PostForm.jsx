import React, { useState } from 'react';
import {
  ThailandAddressTypeahead,
  ThailandAddressValue,
} from 'react-thailand-address-typeahead';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import PostFormContent from './PostFormContent';
import SelectOption from './SelectOption';
import FacilitiesCheckbox from './FacilitiesCheckbox';
import usePostForm from '../hook/usePostForm';
import ImageCard from './ImageCard';
import { useRef } from 'react';
import RoomImagesContainer from './RoomImagesContainer';
import SearchBarWithOption from '../../../components/SearchBarWithOption';
import { useEffect } from 'react';

export default function PostForm() {
  // const [val, setVal] = useState(ThailandAddressValue.empty());
  const {
    postFormObj,
    handleInputChange,
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
  } = usePostForm();

  const condoImageFileEl = useRef(null);
  const roomImageFileEl = useRef(null);

  useEffect(() => {
    fetchCondos();
  }, []);

  return (
    <form className=' flex flex-col gap-5 p-10 rounded-lg shadow-lg'>
      <div>Property Sign Up</div>
      {/* --------1. Name and location--------- */}
      <div className='flex flex-col gap-3'>
        <div>1. Name and location</div>
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
          <div className='flex gap-3'>
            <SelectOption
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
            />
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
          This place is for MAPPPPPPPPPPPP
        </PostFormContent>
      </div>
      {/* --------2. Facilities --------- */}
      <div className='flex flex-col gap-3'>
        <div>2. Facilities</div>
        <PostFormContent title='List of facilities'>
          <div className='grid grid-cols-3'>
            <FacilitiesCheckbox name='Swimming pool' value={1} />
            <FacilitiesCheckbox name='Fitness' value={2} />
            <FacilitiesCheckbox name='Park' value={3} />
            <FacilitiesCheckbox name='Parking' value={4} />
            <FacilitiesCheckbox name='Swimming pool' value={5} />
            <FacilitiesCheckbox name='Fitness' value={6} />
            <FacilitiesCheckbox name='Park' value={7} />
            <FacilitiesCheckbox name='Parking' value={8} />
            <FacilitiesCheckbox name='Swimming pool' value={9} />
            <FacilitiesCheckbox name='Fitness' value={10} />
          </div>
        </PostFormContent>
      </div>
      {/* --------3. Room details--------- */}
      <div className='flex flex-col gap-3'>
        <div>3. Room details</div>
        <PostFormContent title='Details'>
          <div className='flex gap-3'>
            <div className='w-full'>
              <Input
                label='Room No.'
                name='roomNumber'
                value={postFormObj.roomNumber}
                onChange={handleInputChange}
                errorMsg={error.roomNumber}
              />
            </div>
            <div className='w-full'>
              <Input
                label='Floor'
                name='floor'
                value={postFormObj.floor}
                onChange={handleInputChange}
                errorMsg={error.floor}
              />
            </div>
            <div className='w-full'>
              <Input
                label='Building'
                name='building'
                value={postFormObj.building}
                onChange={handleInputChange}
                errorMsg={error.building}
              />
            </div>
          </div>
          <div className='flex gap-3'>
            <div className='w-full'>
              <Input
                label='Size (m&#178;)'
                name='roomSize'
                value={postFormObj.roomSize}
                onChange={handleInputChange}
                errorMsg={error.roomSize}
              />
            </div>
            <SelectOption
              title='Bedroom'
              name='bedroom'
              value={postFormObj.bedroom}
              valueOption={{ 1: 1, 2: 2, 3: 3 }}
              onChange={handleInputChange}
              errorMsg={error.bedroom}
            />
            <SelectOption
              title='Bathroom'
              name='bathroom'
              value={postFormObj.bathroom}
              valueOption={{ 1: 1, 2: 2, 3: 3 }}
              onChange={handleInputChange}
              errorMsg={error.bathroom}
            />
          </div>
        </PostFormContent>
      </div>
      {/* --------4. Price--------- */}
      <div className='flex flex-col gap-3'>
        <div>4. Price and contract</div>
        <PostFormContent title='Rent'>
          <Input
            label='Monthly rental price (Baht / month)'
            name='price'
            value={postFormObj.price}
            onChange={handleInputChange}
            errorMsg={error.price}
          />
        </PostFormContent>
        <PostFormContent title='Contract'>
          <SelectOption
            title='Month'
            name='contract'
            value={postFormObj.contract}
            valueOption={{ 1: 1, 2: 2, 3: 3 }}
            onChange={handleInputChange}
            errorMsg={error.contract}
          />
        </PostFormContent>
      </div>
      {/* --------5. Property description--------- */}
      <div className='flex flex-col gap-3'>
        <div>5. Property description</div>
        <PostFormContent>
          <div className='relative w-full min-w-[200px]'>
            <textarea
              placeholder='Please type description'
              className='h-full min-h-[200px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50'
              name='description'
              value={postFormObj.description}
              onChange={handleInputChange}
            ></textarea>
            <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1 after:block after:w-full after:border-b-2 after:border-gray-900 ">
              Description
            </label>
          </div>
        </PostFormContent>
      </div>
      {/* --------6. Photos--------- */}
      <div className='flex flex-col gap-3'>
        <div>6. Photos</div>
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
          )}
          <div>Room image</div>
          <input
            type='file'
            className='hidden'
            ref={roomImageFileEl}
            onChange={handleRoomImageAdd}
          />
          <RoomImagesContainer />
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
        </PostFormContent>
      </div>
      <Button
        type='submit'
        bg='blue'
        width='full'
        color='white'
        onClick={handlePostFormSubmit}
      >
        Submit
      </Button>
      {/* <Input /> */}
    </form>
  );
}
