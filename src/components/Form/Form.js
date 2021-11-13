import React, { useState } from 'react';

import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from '../../redux/contacts/contacts-selectors';
import { addContacts } from '../../redux/contacts/contacts-operations';

import s from './Form.module.css';

const Form = () => {
  const initialState = {
    name: '',
    number: '',
  };
  const [contact, setContact] = useState(initialState);
  const dispatch = useDispatch();
  const onSubmit = (contact) => dispatch(addContacts(contact));

  const idInputName = shortid.generate();
  const idInputNumber = shortid.generate();
  const allContacts = useSelector((state) => getContacts(state));

  const reset = () => {
    setContact({ name: '', number: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const addNoRepeatContact = (cont, contacts) => {
    const { name, number } = cont;
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

    onSubmit(cont);
    reset();
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    addNoRepeatContact(contact, allContacts);
    reset();
  };

  return (
    <form onSubmit={handleSubmitForm} className={s.form}>
      <label htmlFor={idInputName} className={s.label}>
        Name
        <input
          type="text"
          id={idInputName}
          onChange={handleChange}
          value={contact.name}
          className={s.input}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label htmlFor={idInputNumber} className={s.label}>
        Number
        <input
          type="tel"
          id={idInputNumber}
          onChange={handleChange}
          value={contact.number}
          className={s.input}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
};

export default Form;
//=============================================
// import React, { useState } from 'react';

// import shortid from 'shortid';
// import { useDispatch, useSelector } from 'react-redux';

// import PropTypes from 'prop-types';
// import s from './Form.module.css';
// import { addContact } from 'redux/contacts/contacts-operation';

// const initialState = {
//   name: '',
//   number: '',
// };

// function Form() {
//   const [state, setState] = useState(initialState);

//   const contacts = useSelector((state) => state.contacts.items);
//   const dispatch = useDispatch();
//   const onSubmit = (name, number) => dispatch(addContact(name, number));

//   const nameId = shortid.generate();
//   const numberId = shortid.generate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState((prev) => ({ ...prev, [name]: value }));
//   };

//   const reset = () => {
//     setState((prev) => ({ ...prev, name: '', number: '' }));
//   };

//   const addNoRepeatContact = (state, contacts) => {
//     const { name, number } = state;
//     if (
//       contacts.some(
//         (contacts) => contacts.name.toLowerCase() === name.toLowerCase(),
//       )
//     ) {
//       alert(`${name} is already in contacts`);
//       return;
//     }
//     if (contacts.some((contacts) => contacts.number === number)) {
//       alert(`${number} is already in contacts`);
//       return;
//     }

//     onSubmit(state);
//     reset();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     addNoRepeatContact(state, contacts);
//   };

//   const { name, number } = state;

//   return (
//     <>
//       <form onSubmit={handleSubmit} className={s.form}>
//         <label htmlFor={nameId} className={s.label}>
//           <span>Name</span>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//             id={nameId}
//             className={s.input}
//           />
//         </label>
//         <label htmlFor={numberId} className={s.label}>
//           <span>Number</span>
//           <input
//             type="tel"
//             name="number"
//             value={number}
//             onChange={handleChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//             id={numberId}
//             className={s.input}
//           />
//         </label>
//         <button type="submit" className={s.button}>
//           Add contact
//         </button>
//       </form>
//     </>
//   );
// }

// export default Form;
