export default function SelectInput({
  id,
  name,
  value,
  htmlFor,
  title,
  dataToMap,
}) {
  return (
    <div className='flex flex-col gap-2 pb-2 w-full'>
      <label htmlFor={htmlFor}>{title}</label>
      <select
        id={id}
        className='block py-1 w-full bg-transparent border-0 border-b-2 border-black appearance-none'
        value={value}
        name={name}

        // onChange={handleChangeInput}
      >
        <option defaultValue value='0'>
          --select--
        </option>
        {/* This must be conditional rendering if have data from api to map */}
        <option>1</option>
        <option>2</option>
        <option>3</option>
        {/* {dataToMap.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.____}
                </option>
              ))} */}
      </select>
    </div>
  );
}
