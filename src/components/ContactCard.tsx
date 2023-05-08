import { MouseEvent } from 'react';
import Contact from '../models/contact';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { contactsActions } from '../store/contacts';

const ContactCard = ({ id, firstName, lastName, status }: Contact) => {
  const dispatch = useDispatch();
  const { deleteContact } = contactsActions;

  const deleteHandler = (e: MouseEvent) => {
    dispatch(deleteContact(id));
  };

  return (
    <figure className='p-3 py-5 rounded-md bg-white shadow text-center space-y-4'>
      <img
        src={`https://source.unsplash.com/random/100x100?human,user,female,male,firstName`}
        alt={firstName}
        className='rounded-full inline-block h-16 w-16'
      />
      <figcaption>
        <h4 className='capitalize font-bold text-text-dark'>
          {firstName} {lastName}
        </h4>
        <p className='capitalize text-ted'>{status}</p>
      </figcaption>
      <div className='space-y-2'>
        <Button fullWidth to={`form/${id}`}>
          edit
        </Button>
        <Button fullWidth className='bg-red-500' onClick={deleteHandler}>
          delete
        </Button>
      </div>
    </figure>
  );
};

export default ContactCard;
