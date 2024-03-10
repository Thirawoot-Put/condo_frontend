export default function FilterCheckbox({ name, value, onClick, list }) {
  return (
    <div>
      <div className='flex items-center'>
        <input
          onClick={() => {
            onClick(value);
          }}
          onChange={() => {}}
          id={`checkbox-${value}`}
          type='checkbox'
          value={value}
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          checked={list?.findIndex((item) => +item === +value) !== -1}
        />
        <label
          htmlFor={`checkbox-${value}`}
          className='ms-2  text-gray-900 dark:text-gray-300'
        >
          {name}
        </label>
      </div>
    </div>
  );
}
