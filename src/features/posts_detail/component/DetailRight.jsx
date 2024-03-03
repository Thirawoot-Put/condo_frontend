import React from 'react';
import BedIcon from '@mui/icons-material/Bed';
import BathroomIcon from '@mui/icons-material/Bathroom';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';

import useDetail from '../context/PostDetailContext';

export default function DetailRight() {
  const { postDetail } = useDetail();
  return (
    <div className='col-span-4  flex justify-end'>
      <div className='min-h-[300px] shadow-md hover:shadow-lg transition w-[70%]  rounded-md p-4'>
        <div className=' py-1.5 bg-blue-300 w-20 text-center rounded-md text-sm text-white hover:bg-blue-500'>
          <p>{postDetail?.room?.roomSize} ตรม.</p>
        </div>
        <div className='flex flex-col gap-2 mt-4 mb-4'>
          <div className='flex gap-2'>
            <BedIcon className='text-gray-600' />
            <p>{postDetail?.room?.bedroom} Bedrooms</p>
          </div>
          <div className='flex gap-2'>
            <BathroomIcon className='text-gray-600' />
            <p>{postDetail?.room?.bathroom} Bathrooms</p>
          </div>
          <div className='flex gap-2'>
            <SoupKitchenIcon className='text-gray-600' />
            <p>1 Kitchen</p>
          </div>
        </div>

        <hr className=' border mb-2' />
        <div>
          <p>รายเดือน : {postDetail.room.price} ฿</p>
          <p>เงินประกัน : 1 month</p>
          <p>จ่ายล่วงหน้า : 1 month</p>
          <p>ค่าน้ำ : 16/unit</p>
          <p>ค่าไฟ : การไฟฟ้า</p>
        </div>
      </div>
    </div>
  );
}
