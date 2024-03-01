export default function SelectInput({ id, name, value, htmlFor, title }) {
  return (
    <div className='flex flex-col gap-2 pb-2 w-full'>
      <label htmlFor={htmlFor}>{title}</label>
      <select
        id={id}
        className='px-3 py-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 block w-full p-2.5 '
        value={value}
        name={name}

        // onChange={handleChangeInput}
      >
        <option defaultValue value='0'>
          --select--
        </option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        {/* {____.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.____}
                </option>
              ))} */}
      </select>
    </div>
  );
}
