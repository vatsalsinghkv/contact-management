import { CreateContactBtn, ContactList } from '../components';

const Contact = () => {
  return (
    <div className='space-y-10 h-full'>
      <CreateContactBtn />
      <ContactList />
    </div>
  );
};

export default Contact;
