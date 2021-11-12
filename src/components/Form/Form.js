import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import shortid from 'shortid';

import s from './Form.module.css';

import { getContacts } from '../../redux/contacts/contacts-selectors';
import { addContacts } from '../../redux/contacts/contacts-operations';

function Form() {
  const initialState = {
    name: '',
    number: '',
  };

  const [contact, setContact] = useState(initialState);

  const dispatch = useDispatch();
  const onSubmit = (contact) => dispatch(addContacts(contact));

  const nameId = shortid.generate();
  const numberId = shortid.generate();
  const allContacts = useSelector((state) => getContacts(state));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setContact({ name: '', number: '' });
  };

  const addNoRepeatContact = (state, contacts) => {
    const { name, number } = state;
    if (
      contacts.some(
        (contacts) => contacts.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.some((contacts) => contacts.number === number)) {
      alert(`${number} is already in contacts`);
      return;
    }

    onSubmit(state);
    reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addNoRepeatContact(contact, allContacts);
  };

  const { name, number } = contact;

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <label htmlFor={nameId} className={s.label}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            id={nameId}
            className={s.input}
          />
        </label>
        <label htmlFor={numberId} className={s.label}>
          <span>Number</span>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            id={numberId}
            className={s.input}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    </>
  );
}

export default Form;
