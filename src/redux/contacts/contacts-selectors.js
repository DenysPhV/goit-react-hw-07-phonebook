import { createSelector } from '@reduxjs/toolkit';

//contacts
export const getContacts = (state) => state.items;
//filter
export const getFilter = (state) => state.filter;
//loading
export const getLoading = (state) => state.loading;

export const getFilterContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter((contact) =>
      contact.name
        .toLowerCase()
        .includes(filter.toLowerCase() || contact.number.includes(filter)),
    ),
);
