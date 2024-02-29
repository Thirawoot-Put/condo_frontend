import Button from '../../../components/Button';
import Input from '../../../components/Input';
import PostFormContent from './PostFormContent';
import SelectInput from './SelectInput';
import UtilsCheckbox from './UtilsCheckbox';

export default function PostForm() {
  return (
    <div className='bg-purple-200'>
      <div>Property Sign Up</div>
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
      <div>2. Utilities</div>
      <PostFormContent title='List of utilities'>
        <UtilsCheckbox name='Swimming pool' />
        <UtilsCheckbox name='Fitness' />
        <UtilsCheckbox name='Park' />
        <UtilsCheckbox name='Parking' />
      </PostFormContent>
      <div>3. Room details</div>
      <PostFormContent title='Details'>
        <div className='flex'>
          <Input label='Room No.' />
          <Input label='Floor' />
          <Input label='Building' />
        </div>
        <div className='flex'>
          <Input label='Size (square metres)' />
          <SelectInput title='Bedroom' />
          <SelectInput title='Bathroom' />
        </div>
      </PostFormContent>
      <div>4. Price</div>
      <div>5. Property description</div>
      <div>6. Photos</div>
      <Button bg='blue' width='full' color='white'>
        Submit
      </Button>
      {/* <Input /> */}
    </div>
  );
}
