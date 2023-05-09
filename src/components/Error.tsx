import { ReactNode } from 'react';
import searchImg from '../assets/search-rafiki.svg';

type Props = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

const Error = ({ children, className, contentClassName }: Props) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg text-text-dark flex w-3/5 ${className}`}
    >
      <div className='w-[40%] text-center'>
        <img src={searchImg} alt='not found' />
      </div>
      <div className={`p-5 py-12 ${contentClassName}`}>{children}</div>
    </div>
  );
};

export default Error;
