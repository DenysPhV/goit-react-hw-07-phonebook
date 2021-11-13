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
