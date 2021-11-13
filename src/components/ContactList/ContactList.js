import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteContacts,
  fetchContacts,
} from '../../redux/contacts/contacts-operations'; //'../../redux/phonebook/phonebook-operations';
import { getVisibleContact } from '../../redux/contacts/contacts-selectors'; //'../../redux/phonebook/phonebook-selectors';

import st from './ContactList.module.css';

import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = () => {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={st.list}>
      <ContactListItem
        contacts={contacts}
        deleteContact={(id) => dispatch(deleteContacts(id))}
      />
    </ul>
  );
};

export default ContactList;
// =======================================================
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import PropTypes from 'prop-types';
// import s from './ContactList.module.css';

// import { deleteContactRequest } from 'redux/contacts/contacts-actions';

// const getVisibleContacts = (contacts, filter) => {
//   const normalizedFilter = filter.toLowerCase().trim();

//   return contacts.filter(
//     (contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter) ||
//       contact.number.includes(filter),
//   );
// };

// const ContactList = () => {
//   const contacts = useSelector(({ contacts: { items, filter } }) =>
//     getVisibleContacts(items, filter),
//   );
//   const dispatch = useDispatch();

//   return (
//     <ul className={s.list}>
//       {contacts.map(({ id, name, number }) => (
//         <li key={id} className={s.item}>
//           <span className={s.text}>{name}:</span>
//           <span className={s.text}>{number}</span>

//           <button
//             onClick={() => {
//               dispatch(deleteContactRequest(id));
//             }}
//             type="button"
//             className={s.button}
//           >
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   // contacts: PropTypes.array,
//   deleteContact: PropTypes.func,
// };

// export default ContactList;
