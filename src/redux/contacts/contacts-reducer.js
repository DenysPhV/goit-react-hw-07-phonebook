import { createReducer, combineReducers } from '@reduxjs/toolkit';

import { changeFilter } from './contacts-actions';

import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from './contacts-operations';

const items = createReducer([], {
  [addContacts.fulfilled]: (state, { payload }) => [...state, payload],
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.rejected]: () => false,
  [fetchContacts.fulfilled]: () => false,

  [addContacts.pending]: () => true,
  [addContacts.rejected]: () => false,
  [addContacts.fulfilled]: () => false,

  [deleteContacts.pending]: () => true,
  [deleteContacts.rejected]: () => false,
  [deleteContacts.fulfilled]: () => false,
});

export default combineReducers({ items, filter, loading });
