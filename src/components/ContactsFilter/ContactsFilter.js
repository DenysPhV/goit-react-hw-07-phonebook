import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';

import s from './ContactsFilter.module.css';

import { getFilter } from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/contacts-actions';

const filterId = shortid.generate();

const ContactsFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <label htmlFor={filterId} className={s.label}>
      <span>Filter contacts by name</span>
      <input
        type="text"
        value={filter}
        onChange={onChangeFilter}
        id={filterId}
        className={s.input}
      />
    </label>
  );
};

export default ContactsFilter;
