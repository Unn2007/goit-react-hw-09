import { createSelector } from "@reduxjs/toolkit";
import  {selectNameFilter} from '../filters/selectors'

export const selectContacts = (state) => state.contacts.items;



export const selectIsLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, searchField) => {
    return contacts.filter(({ name,number }) =>
      (name+number).toLowerCase().includes(searchField.toLowerCase())
    );
  }
);
