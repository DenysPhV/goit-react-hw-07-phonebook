// import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('contacts/changeFilter');

// const addContact = createAction('contacts/add', ({ name, number }) => ({
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// }));

// const deleteContact = createAction('contacts/delete');

// const changeFilter = createAction('contacts/changeFilter');

// export { addContact, deleteContact, changeFilter };
