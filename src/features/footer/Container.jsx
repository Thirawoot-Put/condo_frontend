import React from 'react';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaSquareYoutube } from 'react-icons/fa6';
import MenuList from './MenuList';

const service = [
  { name: 'Web design', to: '/', id: 1 },
  { name: 'Web development', to: '/', id: 2 },
  { name: 'Mobile design', to: '/', id: 3 },
  { name: 'UX/UI design', to: '/', id: 4 },
  { name: 'Branding design', to: '/', id: 5 },
];

const about = [
  { name: 'Mission', to: '/', id: 1 },
  { name: 'Our team', to: '/', id: 2 },
  { name: 'Awards', to: '/', id: 3 },
  { name: 'Testimonials', to: '/', id: 4 },
  { name: 'privicy policy', to: '/', id: 5 },
];
const contact = [
  { name: 'Infomation', to: '/', id: 1 },
  { name: 'Request a quote', to: '/', id: 2 },
  { name: 'Consultation', to: '/', id: 3 },
  { name: 'Help center', to: '/', id: 4 },
  { name: 'Terms and conditions', to: '/', id: 5 },
];

export default function Container() {
  return (
    <div className=''>
      <div className='w-[80%] mx-auto flex flex-col gap-14'>
        <div className='flex justify-between min-h-[160px]'>
          <div className=' '>
            <MenuList menu={about} />
          </div>
          <div className=''>
            <MenuList menu={service} />
          </div>
          <div className=' '>
            <MenuList menu={contact} />
          </div>
        </div>
        <div className='flex justify-between  border-t py-1.5'>
          <div className='font-semibold text-sm'>
            <p>CONDRENT</p>
          </div>
          <div className='font-mono flex gap-2'>
            <p className=''>copyright</p>
            <p className='text-xl'>&#169;</p>
            <p>2024 codecamp cc16</p>
          </div>
          <div className='flex gap-3'>
            <FaInstagram />
            <FaFacebookSquare />
            <FaLinkedin />
            <FaSquareTwitter />
            <FaSquareYoutube />
          </div>
        </div>
      </div>
    </div>
  );
}
