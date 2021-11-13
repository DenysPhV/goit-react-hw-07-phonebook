//phonebook-api
import axios from 'axios';

axios.defaults.baseURL = 'https://618e3e7c50e24d0017ce1176.mockapi.io';

//fetchContacts
export async function getContactsFromApi() {
  const { data } = await axios.get('/contacts');
  return data;
}
//deleteContact
export async function deleteContactsFromApi(id) {
  const { data } = await axios.delete(`/contacts/:${id}`);
  return data;
}
//addContact
export async function addContactsInApi(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}
