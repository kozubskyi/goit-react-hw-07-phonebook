import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const itemsReducer = createReducer([], {
  [actions.fetchContactsSuccess/*.type*/]: (_, action) => action.payload,
  [actions.addContactSuccess/*.type*/]: (state, action) => [...state, action.payload],
  [actions.deleteContactSuccess/*.type*/]: (state, action) => state.filter(item => item.id !== action.payload),
});

const filterReducer = createReducer('', {
  [actions.changeFilter/*.type*/]: (_, action) => action.payload,
});

const loadingReducer = createReducer(false, {
  [actions.fetchContactsRequest/*.type*/]: () => true,
  [actions.fetchContactsSuccess/*.type*/]: () => false,
  [actions.fetchContactsError/*.type*/]: () => false,

  [actions.addContactRequest/*.type*/]: () => true,
  [actions.addContactSuccess/*.type*/]: () => false,
  [actions.addContactError/*.type*/]: () => false,

  [actions.deleteContactRequest/*.type*/]: () => true,
  [actions.deleteContactSuccess/*.type*/]: () => false,
  [actions.deleteContactError/*.type*/]: () => false,
})

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});
