import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  deleteContacts,
  fetchContacts,
} from '../../redux/contacts/contacts-operations';

import { getVisibleContact } from '../../redux/contacts/contacts-selectors';

import s from './ContactList.module.css';

import ContactListItem from '../ContactListItem';

const ContactList = () => {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      <ContactListItem
        contacts={contacts}
        deleteContact={(id) => dispatch(deleteContacts(id))}
      />
    </ul>
  );
};

export default ContactList;
