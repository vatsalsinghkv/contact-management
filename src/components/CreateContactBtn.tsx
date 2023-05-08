import Button from './Button';

type Props = {
  className?: string;
};

const CreateContactBtn = ({ className = '' }: Props) => {
  return (
    <Button to='form' className={className}>
      create contact
    </Button>
  );
};

export default CreateContactBtn;
