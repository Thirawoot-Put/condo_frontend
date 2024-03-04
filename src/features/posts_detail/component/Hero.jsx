import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import useDetail from '../context/PostDetailContext';

export default function Hero() {
  const { postDetail } = useDetail();
  const slides = postDetail?.room?.roomImages?.map((el) => {
    return { url: el?.roomImage };
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides?.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentSlide === slides?.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  const dotSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <>
      <div className='max-w-[1400px] h-[780px] w-full m-auto py-16  relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentSlide]?.url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500 shadow-md'
        ></div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft size={30} onClick={previousSlide} />
        </div>

        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides?.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => dotSlide(slideIndex)}
              className='text-3xl cursor-pointer'
            >
              <RxDotFilled className='text-white' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
