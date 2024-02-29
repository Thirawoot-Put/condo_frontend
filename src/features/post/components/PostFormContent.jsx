export default function PostFormContent({ title, children }) {
  return (
    <div className='flex'>
      <div>{title}</div>
      {/* <hr /> */}
      <div>{children}</div>
    </div>
  );
}
