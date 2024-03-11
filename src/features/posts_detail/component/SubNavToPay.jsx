import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import useDetail from '../context/PostDetailContext';

export default function SubNavToPay() {
  const navigate = useNavigate();
  const { postDetail } = useDetail();
  return (
    <div className='flex justify-center items-center text-center gap-5 bg-red-600 fixed right-0 w-full z-10 h-30'>
      <p className='text-white font-semibold'>
        This post is not active yet, please make a payment to activate this post
      </p>
      <div className='my-2'>
        <Button
          bg='white'
          color='black'
          onClick={() =>
            navigate('/agent/package', { state: { postId: postDetail.id } })
          }
        >
          <p className='font-semibold'>Pay</p>
        </Button>
      </div>
    </div>
  );
}
