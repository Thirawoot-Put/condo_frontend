import { useRef } from 'react';

export default function ImageCard({
  src,
  alt = '',
  onChange,
  onClear,
  id = '',
  errorMsg,
  disabled = false,
}) {
  const imageFileEl = useRef(null);

  return (
    <>
      <input
        type='file'
        className='hidden'
        ref={imageFileEl}
        onChange={(e) => onChange(e, id)}
      />
      {src && (
        <div className='relative bg-slate-200 w-44 h-44'>
          <img
            src={src}
            alt={alt}
            className='w-[100%] h-[100%] object-cover object-center'
          />
          {disabled || (
            <div className='absolute right-2 bottom-2 flex gap-1'>
              <button
                className='px-2 py-1 rounded-md bg-gray-700 text-white text-xs'
                type='button'
                onClick={() => imageFileEl.current.click()}
              >
                edit
              </button>
              <button
                className='px-2 py-1 rounded-md bg-gray-700 text-white text-xs'
                type='button'
                onClick={(e) => {
                  console.log('clkkk');
                  onClear(e, id);
                  imageFileEl.current.value = '';
                }}
              >
                delete
              </button>
            </div>
          )}
        </div>
      )}
      {errorMsg && (
        <>
          <small className='text-red-500'>{errorMsg}</small>
          <br />
        </>
      )}
    </>
  );
}
