import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectNameFilter = (state) => state.filters.name;

export const selectIsLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, searchField) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(searchField.toLowerCase())
    );
  }
);
