import { useState } from 'react';

type Props = {
  errorMsg: string;
  initialValue?: string;
};

const useInput = ({
  errorMsg = 'Please enter a valid input',
  initialValue = '',
}: Props) => {
  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  let error = '';
  let isValid = false;

  const isValidCheck = (val: string) => val.trim().length > 0;

  isValid = isValidCheck(value);

  error = !isValid && isTouched ? errorMsg : '';

  const blurHandler = () => {
    setIsTouched(true);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue('');
    setIsTouched(false);
  };

  return {
    value,
    error,
    isValid,
    reset,
    blurHandler,
    changeHandler,
  };
};

export default useInput;
