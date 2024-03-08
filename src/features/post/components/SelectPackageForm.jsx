import { useNavigate, useLocation } from 'react-router-dom';

import usePostForm from '../hook/usePostForm';
import InputSlider from './InputSlider';
import PaymentContainer from './PaymentContainer';
import visaCard from '/asset/Visa_logo.png';
import masterCard from '/asset/Master_logo.png';
import qrPayment from '/asset/qrpayment.jpg';
import Button from '../../../components/Button';

export default function SelectPackageForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  console.log(state);
  const {
    selectedPayment,
    handlePaymentSelection,
    // handleSubmitSelectPackage
  } = usePostForm();

  const handleSubmitSelectPackage = (e) => {
    e.preventDefault();
    navigate('/checkout', { state });
  };
  return (
    <form
      className='px-20 py-20 flex flex-col gap-20'
      onSubmit={handleSubmitSelectPackage}
    >
      <div className='flex flex-col gap-4'>
        <div className='text-lg'>
          Please select the duration for promoting your property
        </div>
        <InputSlider />
      </div>
      <div className='flex flex-col gap-10'>
        <div className='text-lg '>
          Please choose your preferred payment option
        </div>
        <div className='flex gap-10'>
          <PaymentContainer
            title='Credit / debit card'
            onClick={() => handlePaymentSelection('card')}
            isSelected={selectedPayment === 'card'}
          >
            <div className='flex h-10 w-20'>
              <img src={visaCard} />
              <img src={masterCard} />
            </div>
          </PaymentContainer>
          <PaymentContainer
            title='Thai QR payment'
            onClick={() => handlePaymentSelection('qr')}
            isSelected={selectedPayment === 'qr'}
          >
            <img src={qrPayment} className='h-[75px]' />
          </PaymentContainer>
        </div>
      </div>
      <Button bg='blue' color='white' type='submit'>
        Confirm
      </Button>
    </form>
  );
}
