import { Carousel, props } from 'react-responsive-carousel';
// import Carousel, { Props } from '../src/components/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import useDetail from '../context/PostDetailContext';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

export default function Hero() {
  const { postDetail } = useDetail();
  const slides = postDetail?.room?.roomImages?.map((el) => {
    return { url: el?.roomImage };
  });

  const customRenderThumb = (children) =>
    children.map((item) => {
      return <img key={nanoid()} src={item?.props?.children?.props?.src} />;
    });

  return (
    <>
      <Carousel renderThumbs={customRenderThumb}>
        {slides.map((el, index) => (
          <div key={nanoid()} className='max-h-[720px]'>
            <img src={el?.url} />
          </div>
        ))}
      </Carousel>
    </>
  );
}
