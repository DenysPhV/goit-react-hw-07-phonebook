import { createReducer, combineReducers } from '@reduxjs/toolkit';

import { filterContacts } from './contacts-actions';
import {
  fetchContacts,
  deleteContacts,
  addContacts,
} from './contacts-operations';

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
