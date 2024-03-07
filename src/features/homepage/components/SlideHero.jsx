import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import {  } from 'swiper/modules';

import BigPostCard from '../../../components/BigPostCard';
import usePost from '../hook/usePost';
import { useEffect } from 'react';

function SlideHero() {
  
    const { allPosts, getAllPosts } = usePost();

    useEffect(() => {
        getAllPosts();
    }, []);

  return (
    <>
      <div className='max-w-[1400px] h-[780px] w-full m-auto py-10 px-4 relative group'>
      <Swiper
      navigation={true}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[EffectCoverflow, Navigation]}
      effect='coverflow'
      className='w-full h-full rounded-2xl'
    >
      {
        allPosts.map((card) => (
          <SwiperSlide key={card?.id} >
            <BigPostCard key={card?.id} data={card?.room}/>
          </SwiperSlide>
        ))
      }
    </Swiper>
      </div>
    </>
  )
}
export default SlideHero