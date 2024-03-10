export default function FilterContent({ title, children }) {
  return (
    <div className='flex-col'>
      <div className='w-[200px]'>{title}</div>

      <div className='w-full pl-2 flex flex-col gap-5'>{children}</div>
    </div>
  );
}
