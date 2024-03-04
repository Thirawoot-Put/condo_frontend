import { useEffect, useState } from 'react';

import * as selectApi from '../../../api/select-api';

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
  const [districts, setDistricts] = useState([]);
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    const get = async () => {
      const getDistrictsOption = await selectApi.getDistricts();
      console.log(getDistrictsOption);
      setDistricts(getDistrictsOption.data.districts);
      const getProvincesOption = await selectApi.getProvinces();
      setProvinces(getProvincesOption.data.provinces);
    };
    get();
  }, []);

  return (
    <div className='flex flex-col gap-2 pb-2 w-full'>
      <label htmlFor={htmlFor}>{title}</label>
      <select
        id={id}
        className='block py-1 w-full bg-transparent border-0 border-b-2 border-gray-400 mt-1 focus:outline-none focus:border-b-black'
        value={value}
        name={name}
        onChange={onChange}
      >
        <option defaultValue>--select--</option>
        {/* This must be conditional rendering if have data from api to map */}
        {/* <option value={valueOption['1']}>1</option>
        <option value={valueOption['2']}>2</option>
        <option value={valueOption['3']}>3</option> */}
        {(() => {
          switch (dataToMap) {
            case 'district':
              return districts.map(({ id, district }) => (
                <option key={id} value={id}>
                  {district}
                </option>
              ));
            case 'province':
              return provinces.map(({ id, province }) => (
                <option key={id} value={id}>
                  {province}
                </option>
              ));
            case '12':
              return Array.from({ length: 12 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ));
            default:
              return Array.from({ length: 10 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ));
          }
        })()}
      </select>
      {errorMsg && <small className='text-red-500'>{errorMsg}</small>}
    </div>
  );
}
