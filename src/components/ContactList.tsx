import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Contact from '../models/contact';
import { ContactCard, CreateContactBtn, Error } from './';

type Props = {};

const ContactList = (props: Props) => {
  const contacts = useSelector<RootState>(
    (state) => state.contacts.contacts
  ) as Contact[];

  if (contacts.length === 0) {
    return (
      <Error className='flex flex-col justify-between'>
        <div>
          <h1 className='text-3xl font-bold mb-3 capitalize'>
            No contact found!
          </h1>
          <h2>Please add contact from create contact button</h2>
        </div>
        <CreateContactBtn className='self-end' />
      </Error>
    );
  }

  return (
    <div className='grid grid-cols-auto-fit gap-5'>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} {...contact} />
      ))}
    </div>
  );
};

export default ContactList;
