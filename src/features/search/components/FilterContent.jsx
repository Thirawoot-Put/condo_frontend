export default function FilterContent({ title, children }) {
  return (
    <div className='flex flex-col gap-2 py-4'>
      <div className='w-[200px] font-semibold'>{title}</div>
      <div className='w-full pl-2 flex flex-col gap-5'>{children}</div>
    </div>
  );
}
