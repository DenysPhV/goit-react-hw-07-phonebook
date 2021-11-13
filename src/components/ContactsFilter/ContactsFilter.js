import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-actions'; //'../../redux/phonebook/phonebook-actions';
import { getPhonebookFilter } from '../../redux/contacts/contacts-selectors'; //'../../redux/phonebook/phonebook-selectors';
import st from './ContactsFilter.module.css';

const ContactsFilter = () => {
  const valueFilter = useSelector(getPhonebookFilter);
  const dispatch = useDispatch();

  return (
    <label className={st.label}>
      Find contact by name
      <input
        type="text"
        className={st.input}
        value={valueFilter}
        onChange={(e) => dispatch(filterContacts(e.target.value))}
      />
    </label>
  );
};

export default ContactsFilter;
//========================================
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import shortid from 'shortid';

// import s from './ContactsFilter.module.css';

// import { changeFilter } from 'redux/contacts/contacts-actions';

// const filterId = shortid.generate();

// const ContactsFilter = () => {
//   const filter = useSelector((state) => state.filter);
//   const dispatch = useDispatch();
//   const onChangeFilter = (e) => dispatch(changeFilter(e.target.value));

//   return (
//     <label htmlFor={filterId} className={s.label}>
//       <span>Filter contacts by name</span>
//       <input
//         type="text"
//         value={filter}
//         onChange={onChangeFilter}
//         id={filterId}
//         className={s.input}
//       />
//     </label>
//   );
// };

// export default ContactsFilter;
