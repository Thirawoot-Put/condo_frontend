export default function PostFormContent({ title, children }) {
  return (
    <div className='flex'>
      <div className='flex'>
        <div className='w-[200px]'>{title}</div>
        <div className='flex'>
          <hr className='border h-full border-gray-300' />
        </div>
      </div>
      <div className='w-full pl-6 flex flex-col gap-5'>{children}</div>
    </div>
  );
}
