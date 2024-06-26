import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-slice';
import boardsReducer from './boards/boards-slice';
// import contactsReducer from "./contacts/contacts-slice";
import { filterReducer } from './filter/filter-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'user'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
// const persistedBoardReducer = persistReducer(persistConfig, boardReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  boards: boardsReducer,
  // contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
