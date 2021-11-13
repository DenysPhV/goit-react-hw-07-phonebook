//phonebook-operations
//Обрабатываем запросы после сервиса
import { createAsyncThunk } from '@reduxjs/toolkit';

import * as mockApi from '../../services/mockApi';

export const addContacts = createAsyncThunk(
  'contact/addContacts',
  async (contact) => {
    const data = await mockApi.addContactsInApi(contact);
    return data;
  },
);

export const deleteContacts = createAsyncThunk(
  'contact/deleteContacts',
  async (id) => {
    await mockApi.deleteContactsFromApi(id);
    return id;
  },
);

export const fetchContacts = createAsyncThunk(
  'contact/fetchContacts',
  async () => {
    const contacts = await mockApi.getContactsFromApi();
    return contacts;
  },
);

// import axios from 'axios';

// Need to use the React-specific entry point to import createApi
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   //add
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   //delete
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
// } from './contacts-actions';

// axios.defaults.baseURL = 'https://618e3e7c50e24d0017ce1176.mockapi.io';

// export const contactsApi = createAsyncThunk(
//   'contacts/contactsApi',

//   async () => {
//     const { data } = await axios.get('/contacts');
//     return data;
//   },
// );

// export const addContact = (contact) => (dispatch) => {
//   dispatch(addContactRequest());

//   axios
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(addContactSuccess(data)))
//     .catch((error) => dispatch(addContactError(error)));
// };

// export const deleteContact = (id) => (dispatch) => {
//   dispatch(deleteContactRequest());
//   axios
//     .delete('/contacts/:id')
//     .then(() => dispatch(deleteContactSuccess(id)))
//     .catch((error) => dispatch(deleteContactError(error)));
// };
