//phonebook-actions
import { createAction } from '@reduxjs/toolkit';

export const filterContacts = createAction('contact-filter');

// ===============================================================
// import shortid from 'shortid';
// import { createAction } from '@reduxjs/toolkit';

// const addContactRequest = createAction(
//   'contacts/add',
//   ({ id, name, phone }) => ({
//     payload: {
//       // id: shortid.generate(),
//       id,
//       name,
//       phone,
//     },
//   }),
// );
// const addContactSuccess = createAction('contacts/addContactSuccess');
// const addContactError = createAction('contacts/addContactError');

// const deleteContactRequest = createAction('contacts/deleteContactRequest');
// const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
// const deleteContactError = createAction('contacts/deleteContactError');

// const changeFilter = createAction('contacts/changeFilter');

// export {
//   // add
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   //delete
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   //filter
//   changeFilter,
// };
