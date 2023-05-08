import { ReactNode } from 'react';
import searchImg from '../assets/search-rafiki.svg';

type Props = {
  children: ReactNode;
  className?: string;
};

const Error = ({ children, className }: Props) => {
  return (
    <div className='h-2/3 flex justify-center items-center p-5'>
      <div className='bg-white rounded-lg shadow-lg text-text-dark flex w-3/5'>
        <div className='w-[40%] text-center'>
          <img src={searchImg} alt='not found' />
        </div>
        <div className={`p-5 py-12 ${className}`}>{children}</div>
      </div>
    </div>
  );
};

export default Error;
