import React from 'react';
import MediumCardCarousel from '../../../components/MediumCardCarousel';
import MediumPostCard from '../../../components/MediumPostCard';

const mock = [
  {
    id: 1,
    img: 'https://www.99acres.com/microsite/articles/files/2023/02/condo.jpg',
    roomDetail: '111/A',
    condoName: 'Condo name',
    price: '999',
  },
  {
    id: 2,
    img: 'https://www.99acres.com/microsite/articles/files/2023/02/condo.jpg',
    roomDetail: '222/A',
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
    roomDetail: '444/A',
    condoName: 'Condo name',
    price: '999',
  },
  {
    id: 5,
    img: 'https://www.99acres.com/microsite/articles/files/2023/02/condo.jpg',
    roomDetail: '111/A',
    condoName: 'Condo name',
    price: '999',
  },
  {
    id: 6,
    img: 'https://www.99acres.com/microsite/articles/files/2023/02/condo.jpg',
    roomDetail: '222/A',
    condoName: 'Condo name',
    price: '999',
  },
  {
    id: 7,
    img: 'https://www.99acres.com/microsite/articles/files/2023/02/condo.jpg',
    roomDetail: '333/A',
    condoName: 'Condo name',
    price: '999',
  },
  {
    id: 8,
    img: 'https://www.99acres.com/microsite/articles/files/2023/02/condo.jpg',
    roomDetail: '444/A',
    condoName: 'Condo name',
    price: '999',
  },
];

function FeaturedList() {
  return (
    <div className='bg-blue-300 py-10 flex flex-col gap-2 items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-3xl font-semibold'>Feature Lists</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='w-[90rem] py-5'>
        <MediumCardCarousel>
          {mock.map((card) => (
            <MediumPostCard data={card} />
          ))}
        </MediumCardCarousel>
      </div>
    </div>
  );
}

export default FeaturedList;
