import Button from '../../../components/Button';
import Input from '../../../components/Input';
import PostFormContent from './PostFormContent';
import SelectInput from './SelectInput';
import UtilsCheckbox from './UtilsCheckbox';

export default function PostForm() {
  return (
    <form className=' flex flex-col gap-5 p-10 rounded-lg shadow-lg'>
      <div>Property Sign Up</div>
      {/* --------1. Name and location--------- */}
      <div className='flex flex-col gap-3'>
        <div>1. Name and location</div>
        <PostFormContent title='Name'>
          <Input label='Name in Thai' />
          <Input label='Name in English' />
        </PostFormContent>
        <PostFormContent title='Address'>
          <Input label='Address' />
          <div className='flex'>
            <SelectInput title='District' />
            <SelectInput title='Province' />
            <Input label='Postal Code' />
          </div>
          This place is for MAPPPPPPPPPPPP
        </PostFormContent>
      </div>
      {/* --------2. Utilities--------- */}
      <div className='flex flex-col gap-3'>
        <div>2. Utilities</div>
        <PostFormContent title='List of utilities'>
          <div className='grid grid-cols-3'>
            <UtilsCheckbox name='Swimming pool' />
            <UtilsCheckbox name='Fitness' />
            <UtilsCheckbox name='Park' />
            <UtilsCheckbox name='Parking' />
            <UtilsCheckbox name='Swimming pool' />
            <UtilsCheckbox name='Fitness' />
            <UtilsCheckbox name='Park' />
            <UtilsCheckbox name='Parking' />
            <UtilsCheckbox name='Swimming pool' />
            <UtilsCheckbox name='Fitness' />
            <UtilsCheckbox name='Park' />
            <UtilsCheckbox name='Parking' />
            <UtilsCheckbox name='Swimming pool' />
            <UtilsCheckbox name='Fitness' />
            <UtilsCheckbox name='Park' />
            <UtilsCheckbox name='Parking' />
          </div>
        </PostFormContent>
      </div>
      {/* --------3. Room details--------- */}
      <div className='flex flex-col gap-3'>
        <div>3. Room details</div>
        <PostFormContent title='Details'>
          <div className='flex'>
            <Input label='Room No.' />
            <Input label='Floor' />
            <Input label='Building' />
          </div>
          <div className='flex'>
            <Input label='Size (m&#178;)' />
            <SelectInput title='Bedroom' />
            <SelectInput title='Bathroom' />
          </div>
        </PostFormContent>
      </div>
      {/* --------4. Price--------- */}
      <div className='flex flex-col gap-3'>
        <div>4. Price and contract</div>
        <PostFormContent title='Rent'>
          <Input label='Monthly rental price (Baht / month)' />
        </PostFormContent>
        <PostFormContent title='Contract'>
          <SelectInput title='Month' />
        </PostFormContent>
      </div>
      {/* --------5. Property description--------- */}
      <div className='flex flex-col gap-3'>
        <div>5. Property description</div>
        <PostFormContent>
          <div class='relative w-full min-w-[200px]'>
            <textarea
              placeholder='Please type description'
              className='peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50'
            ></textarea>
            <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-900 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Description
            </label>
          </div>
        </PostFormContent>
      </div>
      {/* --------6. Photos--------- */}
      <div className='flex flex-col gap-3'>
        <div>6. Photos</div>
        <PostFormContent title='Photo'>
          <div>Condo image</div>
          <div>Room image</div>
        </PostFormContent>
      </div>
      <Button bg='blue' width='full' color='white'>
        Submit
      </Button>
      {/* <Input /> */}
    </form>
  );
}
