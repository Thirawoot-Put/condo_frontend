import React from 'react';
import MediumPostCard from '../../../components/MediumPostCard';
import MediumCardCarousel from '../../../components/MediumCardCarousel';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

export default function PostIProfileList({ title, items }) {
  const navigate = useNavigate();
  const show = items?.length >= 3 ? 3 : 1;

  const finalCass = title == 'Active' ? 'text-green-500' : 'text-red-500';

  return (
    <div className=' border rounded-md py-4'>
      <Swiper
        slidesPerView={show}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {items?.map((el) => (
          <SwiperSlide
            key={el.id}
            onClick={() => navigate(`/post/${el.id}`)}
            role='button'
          >
            <div className='p-4 bg-gray-100 h-[500px] rounded-md hover:border-green-500 border transition'>
              <p className={`text-sm ${finalCass} font-semibold`}>{title}</p>
              <div className='h-[300px] w-[300px] '>
                <img className='' src={el?.room.condo.condoImage} />
              </div>
              <p className='font-semibold'>
                {el?.room.roomNumber} Building {el.room.building}
              </p>
              {/* <p className=''>{el?.room.condo.nameEn}</p> */}
              <p className='text-xs'>{el?.room.condo.location}</p>

              <p>Created at : {el.createdAt.slice(0, 10)}</p>
              {el.postStatus && <p>Expires at : {el.expiresAt.slice(0, 10)}</p>}
              <p className='text-red-500 font-medium'>Price {el?.room.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
