const defaultClasses =
  'w-full focus:outline-none px-3 py-1.5 border  rounded-md  focus:ring-2 ';

export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  id,
  errorMessage,
  label,
}) {
  const extendedClasses = errorMessage
    ? 'border-red-500 focus:ring-red-500'
    : ' border-gray-300 focus:border-blue-500 focus:ring-blue-300';
  return (
    <div className='flex flex-col gap-2 pb-2'>
      <label htmlFor={id}>{label}</label>
      <input
        className={`${defaultClasses} ${extendedClasses}`}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
      {errorMessage ? (
        <small className='text-red-500'>{errorMessage}</small>
      ) : null}
    </div>
  );
}
