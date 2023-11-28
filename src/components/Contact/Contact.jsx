// import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { Button, FormStyled } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContacts } from 'redux/contacts/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContacts(newContact));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <label htmlFor="Name">Name</label>
        <Field type="text" name="name" />
        <label htmlFor="Number">Number</label>
        <Field type="tel" name="number" />
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};