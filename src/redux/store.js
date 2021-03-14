import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contacts/contacts-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const middleware = [...getDefaultMiddleware()];

// STORE

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export default store;
