import { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  className?: string;
  variant?: 'solid' | 'outlined';
  fullWidth?: boolean;
  center?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  to?: string;
}

const Button = ({
  className,
  children,
  onClick,
  fullWidth,
  variant = 'solid',
  center = false,
  to,
  ...rest
}: Props) => {
  const classes = `block ${center ? 'mx-auto' : ''} ${
    fullWidth ? 'w-full' : ''
  } ${
    variant === 'outlined'
      ? 'border-[1.5px] border-accent text-accent hover:bg-accent hover:text-white focus:outline-none focus:bg-accent-light'
      : 'text-white bg-accent hover:shadow-lg hover:-translate-y-[1.5px] focus:shadow-lg focus:-translate-y-[1.5]'
  } text-sm p-3 px-6 rounded-md text-base w-fit capitalize duration-150 cursor-pointer ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
