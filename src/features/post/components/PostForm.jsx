import { useEffect, useState } from 'react';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import PostFormContent from './PostFormContent';
import SelectOption from './SelectOption';
import FacilitiesCheckbox from './FacilitiesCheckbox';
import usePostForm from '../hook/usePostForm';
import ImageCard from './ImageCard';
import { useRef } from 'react';
import RoomImagesContainer from './RoomImagesContainer';

import * as selectApi from '../../../api/select-api';

export default function PostForm() {
  // const [districts, setDistricts] = useState([]);
  // const [provinces, setProvinces] = useState([]);
  const [facilities, setFacilities] = useState([]);

  const {
    postFormObj,
    handleInputChange,
    handleCondoImageChange,
    handleCondoImageClear,
    handleRoomImageAdd,
    handlePostFormSubmit,
    error,
  } = usePostForm();

  const condoImageFileEl = useRef(null);
  const roomImageFileEl = useRef(null);

  useEffect(() => {
    const get = async () => {
      const getFacilitiesCheckBoxed = await selectApi.getFacilities();
      console.log(getFacilitiesCheckBoxed.data.facilities);
      setFacilities(getFacilitiesCheckBoxed.data.facilities);
      // const getDistrictsOption = await selectApi.getDistricts();
      // console.log(getDistrictsOption);
      // setDistricts(getDistrictsOption.data.districts);
      // const getProvincesOption = await selectApi.getProvinces();
      // setProvinces(getProvincesOption.data.provinces);
    };
    get();
  }, []);

  return (
    <form className=' flex flex-col gap-10 p-10 rounded-lg shadow-lg'>
      <div className='font-semibold text-center text-2xl'>Property Sign Up</div>
      {/* --------1. Name and location--------- */}
      <div className='flex flex-col gap-3'>
        <div className='font-semibold'>1. Name and location</div>
        <PostFormContent title='Name'>
          <div className='flex flex-col gap-2'>
            <Input label='Name in Thai' />
            <Input label='Name in English' />
          </div>
        </PostFormContent>
        <PostFormContent title='Address'>
          <Input label='Address' />
          <div className='flex gap-5'>
            <SelectOption
              title='District'
              dataToMap='district'
              name='districtId'
              id='districtId'
              value={postFormObj.districtId}
              onChange={handleInputChange}
              errorMsg={error.districtId}
            />
            <SelectOption
              title='Province'
              dataToMap='province'
              name='provinceId'
              id='provinceId'
              value={postFormObj.provinceId}
              onChange={handleInputChange}
              errorMsg={error.provinceId}
            />
            {/* <SelectOption
              title='District'
              name='districtId'
              id='districtId'
              value={postFormObj.districtId}
              valueOption={{ 1: 1, 2: 2, 3: 3 }}
              onChange={handleInputChange}
              errorMsg={error.districtId}
            />
            <SelectOption
              title='Province'
              name='provinceId'
              id='provinceId'
              value={postFormObj.provinceId}
              valueOption={{ 1: 1, 2: 2, 3: 3 }}
              onChange={handleInputChange}
              errorMsg={error.provinceId}
            /> */}
            <div className='w-full'>
              <Input label='Postal Code' />
            </div>
          </div>
          This place is for MAPPPPPPPPPPPP
        </PostFormContent>
      </div>
      {/* --------2. Utilities--------- */}
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
              <Input label='Room No.' />
            </div>
            <div className='w-full'>
              <Input label='Floor' />
            </div>
            <div className='w-full'>
              <Input label='Building' />
            </div>
          </div>
          <div className='flex gap-3 align-bottom'>
            <div className='w-full'>
              <Input label='Size (m&#178;)' />
            </div>
            <SelectOption title='Bedroom' dataToMap='10' />
            <SelectOption title='Bathroom' dataToMap='10' />
          </div>
        </PostFormContent>
      </div>
      {/* --------4. Price--------- */}
      <div className='flex flex-col gap-3'>
        <div className='font-semibold'>4. Price and contract</div>
        <PostFormContent title='Rent'>
          <Input label='Monthly rental price (Baht / month)' />
        </PostFormContent>
        <PostFormContent title='Contract'>
          <SelectOption title='Month' dataToMap='12' />
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
        <Button bg='blue' color='white'>
          Submit
        </Button>
      </div>
      {/* <Input /> */}
    </form>
  );
}
