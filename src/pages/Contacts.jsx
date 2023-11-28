import { ContactForm } from '../components/Contact/Contact';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div>
        <h1>Contacts</h1>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};

export default Contacts