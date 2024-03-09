import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';

import BigPostCard from '../../../components/BigPostCard';
import usePost from '../hook/usePost';
import { useEffect } from 'react';

function SlideHero() {
  const { allCondos, getAllCondos } = usePost();

  useEffect(() => {
    getAllCondos();
  }, []);
  console.log(allCondos);
  return (
    <>
      <div className='max-w-full h-[80vh] w-full m-auto pt-14 px-4 relative group'>
        <Swiper
          navigation={true}
          spaceBetween={0}
          slidesPerView={1}
          modules={[EffectCoverflow, Navigation]}
          effect='coverflow'
          className='w-full h-full rounded-2xl'
          style={{
            '--swiper-navigation-color': '#000000',
          }}
        >
          {allCondos.map((condo) => (
            <SwiperSlide key={condo?.id} style={{ background: '#FFFFFF' }}>
              <BigPostCard key={condo?.id} data={condo} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
export default SlideHero;
