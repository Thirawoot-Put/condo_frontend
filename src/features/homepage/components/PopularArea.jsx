import React from 'react';
import PopularAreaCard from './PopularAreaCard';
import * as mockData from '../../../mock';

const popArea = [
  {
    image:
      'https://thumbnail.thaiproperty.in.th/post-logo/post-images/64616cbf-88f0-4d6f-b482-ef4777c54095/20231123_1300_865__e7c90af0-5713-4eea-bc93-b6774b38f758_0.jpg',
    districtName: 'วัฒนา',
    lat: 13.731145163468382,
    lng: 100.57444743095455,
    province: 'กรุงเทพ',
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3.jpg/1200px-%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3.jpg',
    districtName: 'สวนหลวง',
    lat: 13.727958154085284,
    lng: 100.62798937767265,
    province: 'กรุงเทพ',
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Pathumwan_rd_and_Siam_area.jpg/800px-Pathumwan_rd_and_Siam_area.jpg',
    districtName: 'ปทุมวัน',
    lat: 13.740333816356511,
    lng: 100.53601595618368,
    province: 'กรุงเทพ',
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baiyoke_Sky_Tower_in_Bangkok_%289421316845%29.jpg/1200px-Baiyoke_Sky_Tower_in_Bangkok_%289421316845%29.jpg',
    districtName: 'ราชเทวี',
    lat: 13.755007291499133,
    lng: 100.54190109250554,
    province: 'กรุงเทพ',
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d8/Buildings_in_Phaya_Thai_District_%282%29.jpg',
    districtName: 'พญาไท',
    lat: 13.782501907785736,
    lng: 100.5455408573214,
    province: 'กรุงเทพ',
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Floating_Market%2C_Khlong_Phasi_Charoen_06.23.jpg/1200px-Floating_Market%2C_Khlong_Phasi_Charoen_06.23.jpg',
    districtName: 'ภาษีเจริญ',
    lat: 13.726551817722289,
    lng: 100.44573046765527,
    province: 'กรุงเทพ',
  },
];

function PopularArea() {
  return (
    <div className='py-10 flex flex-col gap-8 items-center justify-center'>
      <div className='text-center flex flex-col gap-2'>
        <h1 className='text-3xl font-semibold'>Popular Areas</h1>
        <p>Find condos in premium locations</p>
      </div>
      <div className='max-w-screen grid grid-cols-4 gap-4'>
        {popArea.map((area, index) => (
          <PopularAreaCard key={index} data={area} />
        ))}
      </div>
    </div>
  );
}

export default PopularArea;
