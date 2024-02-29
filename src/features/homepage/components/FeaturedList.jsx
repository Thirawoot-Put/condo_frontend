import React from 'react';
import MediumPostCard from '../../../components/MediumPostCard';

const mock = [
  {
    id: 1,
    img: 'https://www.99acres.com/microsite/articles/files/2023/02/condo.jpg',
    roomDetail: '333/A',
    condoName: 'Condo name',
    price: '999',
  },
  {
    id: 2,
    img: 'https://www.99acres.com/microsite/articles/files/2023/02/condo.jpg',
    roomDetail: '333/A',
    condoName: 'Condo name',
    price: '999',
  },
  {
    id: 3,
    img: 'https://www.99acres.com/microsite/articles/files/2023/02/condo.jpg',
    roomDetail: '333/A',
    condoName: 'Condo name',
    price: '999',
  },
  {
    id: 4,
    img: 'https://www.99acres.com/microsite/articles/files/2023/02/condo.jpg',
    roomDetail: '333/A',
    condoName: 'Condo name',
    price: '999',
  },
];

function FeaturedList() {
  return (
    <div className='bg-blue-300 h-[35rem] flex flex-col items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-3xl font-semibold'>Feature Lists</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='flex gap-4'>
        {mock.map((card) => (
          <MediumPostCard key={card.id} data={card} />
        ))}
      </div>
      {/* <div>
        <div className='carousel w-[80vw]'>
          <div id='slide1' className='carousel-item relative w-full'>
            <img
              src='https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg'
              className='w-full'
            />
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a href='#slide4' className='btn btn-circle'>
                ❮
              </a>
              <a href='#slide2' className='btn btn-circle'>
                ❯
              </a>
            </div>
          </div>
          <div id='slide2' className='carousel-item relative w-full'>
            <img
              src='https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg'
              className='w-full'
            />
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a href='#slide1' className='btn btn-circle'>
                ❮
              </a>
              <a href='#slide3' className='btn btn-circle'>
                ❯
              </a>
            </div>
          </div>
          <div id='slide3' className='carousel-item relative w-full'>
            <img
              src='https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg'
              className='w-full'
            />
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a href='#slide2' className='btn btn-circle'>
                ❮
              </a>
              <a href='#slide4' className='btn btn-circle'>
                ❯
              </a>
            </div>
          </div>
          <div id='slide4' className='carousel-item relative w-full'>
            <img
              src='https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg'
              className='w-full'
            />
            <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
              <a href='#slide3' className='btn btn-circle'>
                ❮
              </a>
              <a href='#slide1' className='btn btn-circle'>
                ❯
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default FeaturedList;
