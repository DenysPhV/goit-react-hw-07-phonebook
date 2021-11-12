import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://618e3e7c50e24d0017ce1176.mockapi.io/';

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async () => {
    const data = await axios.post('/contacts');
    return data;
  },
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async () => {
    const { data } = await axios.delete('/contacts/:id');
    return data;
  },
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const data = await axios.get('/contacts');
    return data;
  },
);
