//phonebook-reducer
import { createReducer, combineReducers } from '@reduxjs/toolkit';

import { filterContacts } from './contacts-actions'; // './phonebook-actions';
import {
  fetchContacts,
  deleteContacts,
  addContacts,
} from './contacts-operations'; //'./phonebook-operations';

const contactsReducer = createReducer([], {
  [addContacts.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContacts.pending]: () => true,
  [addContacts.rejected]: () => false,
  [addContacts.fulfilled]: () => false,
  [deleteContacts.pending]: () => true,
  [deleteContacts.rejected]: () => false,
  [deleteContacts.fulfilled]: () => false,
  [fetchContacts.pending]: () => true,
  [fetchContacts.rejected]: () => false,
  [fetchContacts.fulfilled]: () => false,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading,
});

//==========================================================
// import { createReducer } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';

// // import contacts from 'data/contacts.json';
// import { contactsApi } from './contacts-operation.jsx';
// import {
//   //add
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   //delete
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   //filter
//   changeFilter,
// } from './contacts-actions';

// const contactReducer = createReducer([], {
//   [contactsApi.fulfilled]: (_, action) => action.payload,
//   [addContactSuccess]: (state, action) => [action.payload, ...state],
//   [deleteContactSuccess]: (state, action) =>
//     state.filter(({ id }) => id !== action.payload),
// });

// const filterReducer = createReducer('', {
//   [changeFilter]: (_, action) => action.payload,
// });

// const loadingReducer = createReducer(false, {
//   [contactsApi.pending]: () => true,
//   [contactsApi.fulfilled]: () => false,
//   [contactsApi.rejected]: () => false,
//   [addContactRequest]: () => true,
//   [addContactSuccess]: () => false,
//   [addContactError]: () => false,
//   [deleteContactRequest]: () => true,
//   [deleteContactSuccess]: () => false,
//   [deleteContactError]: () => false,
// });

// export default combineReducers({
//   contactReducer,
//   filterReducer,
//   loadingReducer,
// });
