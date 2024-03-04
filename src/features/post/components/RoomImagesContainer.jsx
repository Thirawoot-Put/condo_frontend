import { useRef, useState, useEffect } from 'react';
import usePostForm from '../hook/usePostForm';
import ImageCard from './ImageCard';
export default function RoomImagesContainer({}) {
  const { postFormObj, handleRoomImageChange, handleRoomImageClear } =
    usePostForm();

  return (
    <div className='flex gap-3'>
      {postFormObj.roomImageList?.map((roomImage) => (
        <ImageCard
          key={roomImage.id}
          id={roomImage.id}
          src={roomImage.url}
          alt='room_image'
          onChange={handleRoomImageChange}
          onClear={handleRoomImageClear}
        />
      ))}
    </div>
  );
}
