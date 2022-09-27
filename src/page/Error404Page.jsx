import { useNavigate } from 'react-router-dom';

import { Button } from '../components';

import errorImg from '../images/404.png';

const Error404Page = () => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-green-300'>
      <section className='flex flex-col items-center gap-5'>
        <div className='max-w-[256px] max-h-[256px] rounded-md'>
          <img className='object-cover w-full h-full' src={errorImg} alt='' />
        </div>
        <h1 className='text-3xl font-semibold'>Oops!</h1>
        <p className='text-xl'>You need map!</p>
        <Button
          onClick={() => navigate('/')}
          className='p-4 text-white !bg-purple-600'
        >
          Turn Back
        </Button>
      </section>
    </div>
  );
};

export default Error404Page;
