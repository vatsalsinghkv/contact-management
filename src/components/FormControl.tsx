import { joinWords } from '../utils/helper';

type Props = {
  label: string;
  error: string;
  value: string;
  autoComplete?: string;
  placeholder: string;
  onBlur: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormControl = ({
  label,
  error,
  value,
  onBlur,
  onChange,
  autoComplete,
  placeholder,
}: Props) => {
  return (
    <div className='space-y-2'>
      <label htmlFor={joinWords(label)} className='capitalize'>
        {label}
      </label>
      <input
        id={joinWords(label)}
        type='text'
        autoComplete={autoComplete}
        className={`p-3 px-4 rounded-lg bg-bg-light-secondary w-full capitalize border-2 ${
          error
            ? 'border-2 border-red-400 ring-red-400/50 ring-4'
            : 'focus:border-2 focus:border-accent focus:ring-4 focus:ring-blue-400/50'
        }`}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      {error && <p className='text-sm text-red-500'>{error}</p>}
    </div>
  );
};

export default FormControl;
