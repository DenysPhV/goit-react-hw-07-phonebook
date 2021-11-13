import React from 'react';

import s from './ContactItem.module.css';

const ContactListItem = ({ contacts, deleteContact }) => {
  return contacts.map(({ id, name, phone }) => {
    return (
      <li key={id} className={s.item}>
        <span className={s.text}>{name}:</span>
        <span className={s.text}>{phone}</span>
        <button
          onClick={() => deleteContact(id)}
          type="button"
          className={s.button}
        >
          Delete
        </button>
      </li>
    );
  });
};

export default ContactListItem;
