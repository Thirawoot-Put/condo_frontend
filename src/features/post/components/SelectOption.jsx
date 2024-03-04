export default function SelectInput({
  id,
  name,
  value,
  valueOption,
  htmlFor,
  title,
  dataToMap,
  onChange,
  errorMsg,
}) {
  return (
    <div className='flex flex-col gap-2 pb-2 w-full'>
      <label htmlFor={htmlFor}>{title}</label>
      <select
        id={id}
        className='block py-1 w-full bg-transparent border-0 border-b-2 border-black appearance-none'
        value={value}
        name={name}
        onChange={onChange}
      >
        <option defaultValue>--select--</option>
        {/* This must be conditional rendering if have data from api to map */}
        <option value={valueOption['1']}>1</option>
        <option value={valueOption['2']}>2</option>
        <option value={valueOption['3']}>3</option>
        {/* {dataToMap.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.____}
                </option>
              ))} */}
      </select>
      {errorMsg && <small className='text-red-500'>{errorMsg}</small>}
    </div>
  );
}
