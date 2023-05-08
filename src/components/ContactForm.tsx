import { FormEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { contactsActions } from '../store/contacts';
import { getId } from '../utils/helper';
import { Button, FormControl } from '.';
import Contact from '../models/contact';
import useInput from '../hooks/use-input';
import { RootState } from '../store';

const ContactForm = () => {
  const { userId } = useParams();

  const user = useSelector<RootState>((state) =>
    state.contacts.contacts.find((u) => u.id === userId)
  ) as Contact;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { addContact, updateContact } = contactsActions;

  const [status, setStatus] = useState<'active' | 'inactive'>(
    user?.status ?? 'active'
  );

  const {
    value: firstName,
    error: firstNameError,
    isValid: firstNameIsValid,
    blurHandler: firstNameBlurHandler,
    changeHandler: firstNameChangeHandler,
  } = useInput({
    errorMsg: 'Please enter your first name',
    initialValue: user?.firstName ?? '',
  });

  const {
    value: lastName,
    error: lastNameError,
    isValid: lastNameIsValid,
    blurHandler: lastNameBlurHandler,
    changeHandler: lastNameChangeHandler,
  } = useInput({
    errorMsg: 'Please enter your last name',
    initialValue: user?.lastName ?? '',
  });

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstNameIsValid || !lastNameIsValid) {
      firstNameBlurHandler();
      lastNameBlurHandler();
      return;
    }

    if (user) {
      dispatch(
        updateContact(new Contact(user.id, firstName, lastName, status))
      );
    } else {
      dispatch(addContact(new Contact(getId(), firstName, lastName, status)));
    }

    navigate('/');
  };

  return (
    <div className='bg-white text-text-dark p-8 rounded-lg'>
      <h2 className='capitalize text-3xl font-bold mb-6'>create contact</h2>
      <form className='space-y-4' onSubmit={formSubmitHandler}>
        <FormControl
          label='first name'
          placeholder='jon'
          autoComplete='given-name'
          value={firstName}
          error={firstNameError}
          onBlur={firstNameBlurHandler}
          onChange={firstNameChangeHandler}
        />
        <FormControl
          label='last name'
          placeholder='doe'
          autoComplete='family-name'
          value={lastName}
          error={lastNameError}
          onBlur={lastNameBlurHandler}
          onChange={lastNameChangeHandler}
        />

        <div className='space-y-2'>
          <p className='capitalize'>status</p>

          <div className='flex gap-5 capitalize'>
            <div className='space-x-2'>
              <input
                type='radio'
                id='active'
                name='radio'
                checked={status === 'active'}
                onChange={(e) => setStatus('active')}
              />
              <label
                htmlFor='active'
                className='inline-block -translate-y-[1px]'
              >
                active
              </label>
            </div>
            <div className='space-x-2'>
              <input
                type='radio'
                id='inactive'
                name='radio'
                checked={status === 'inactive'}
                onChange={(e) => setStatus('inactive')}
              />
              <label
                htmlFor='inactive'
                className='inline-block -translate-y-[1px]'
              >
                inactive
              </label>
            </div>
          </div>
        </div>
        <Button variant='solid' className='!mt-8' type='submit'>
          {user ? 'update' : 'create'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
