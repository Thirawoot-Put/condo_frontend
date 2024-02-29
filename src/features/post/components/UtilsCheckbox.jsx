export default function UtilsCheckbox({ name }) {
  return (
    <div>
      <div class='flex items-center'>
        <input
          onClick={() => !checked}
          //   checked
          id='checked-checkbox'
          type='checkbox'
          value=''
          class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        />
        <label
          for='checked-checkbox'
          class='ms-2 text-sm text-gray-900 dark:text-gray-300'
        >
          {name}
        </label>
      </div>
    </div>
  );
}
