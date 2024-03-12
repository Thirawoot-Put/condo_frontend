import React from 'react';
import MediumPostCard from '../../../components/MediumPostCard';
import usePost from '../hook/usePost';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function FeaturedList() {
  const { allPosts, getAllPosts } = usePost();

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className='h-[600px] w-full mx-auto pt-10 pb-5'>
      <div className='text-center flex flex-col gap-2'>
        <h1 className='text-3xl font-semibold'>Recommended Lists</h1>
        <p>Recommended posts by recommended agent</p>
      </div>
      <div className=' h-[90%] py-5 m-auto'>
        <Swiper
          navigation={true}
          spaceBetween={-50}
          slidesPerView={4}
          modules={[Navigation]}
          className='w-full h-fit'
          style={{
            '--swiper-navigation-color': '#000000',
          }}
        >
          {allPosts.map((post) => (
            <SwiperSlide key={post?.id} style={{ background: '#FFFFFF' }}>
              <MediumPostCard key={post?.id} data={post?.room} id={post?.id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FeaturedList;
