import React from 'react';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaSquareYoutube } from 'react-icons/fa6';
import { FaLine } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import MenuList from './MenuList';

const about = [
  { name: 'Mission', to: '/', id: 1 },
  { name: 'Our team', to: '/', id: 2 },
  { name: 'Awards', to: '/', id: 3 },
  { name: 'Testimonials', to: '/user/review', id: 4 },
  { name: 'Privacy policy', to: '/', id: 5 },
];

const service = [
  { name: 'Condo rental listings', to: '/', id: 1 },
  { name: 'Property promotion', to: '/', id: 2 },
  { name: 'Live chat support', to: '/', id: 3 },
  { name: 'Lease agreements', to: '/', id: 4 },
  { name: 'Property management', to: '/', id: 5 },
];

const contact = [
  {
    name: (
      <div className='flex items-center'>
        <div>
          <FaLine />
        </div>
        <span>&nbsp; @Condrent</span>
      </div>
    ),
    to: '/',
    id: 1,
  },
  {
    name: (
      <div className='flex items-center'>
        <div>
          <FaFacebookSquare />
        </div>
        &nbsp;&nbsp;<span> fb.com/condrent.co.th</span>
      </div>
    ),
    to: '/',
    id: 2,
  },
  {
    name: (
      <div className='flex items-center'>
        <div>
          <FaLinkedin />
        </div>
        &nbsp;&nbsp;<span>linkedin.com/company/condrent</span>
      </div>
    ),
    to: '/',
    id: 3,
  },
  {
    name: (
      <div className='flex items-center'>
        <div>
          <MdEmail />
        </div>
        &nbsp;&nbsp;<span>cc16.condrent.am@gmail.com</span>
      </div>
    ),
    to: '/',
    id: 4,
  },
  {
    name: (
      <div className='flex items-center'>
        <BsFillTelephoneFill />
        &nbsp;<span>(+66) 90 000 0000</span>
      </div>
    ),
    to: '/',
    id: 5,
  },
];

export default function Container() {
  return (
    <div className='bg-gray-300'>
      <div className='pt-10 flex flex-col gap-14 mt-10'>
        <div className='flex justify-between gap-8'>
          <div className='flex-1 flex justify-center'>
            <MenuList menu={about} title='About us' />
          </div>
          <div className='flex-1 flex justify-center'>
            <MenuList menu={service} title='Services' />
          </div>
          <div className='flex-1 flex justify-center'>
            <MenuList menu={contact} title='Contact us' />
          </div>
        </div>
        <div className='flex justify-center border-t py-1.5'>
          <div className='font-mono flex gap-2'>
            <p className=''>Copyright</p>
            <p className='text-xl'>&#169;</p>
            <p>2024 codecamp cc16</p>
          </div>
        </div>
      </div>
    </div>
  );
}
