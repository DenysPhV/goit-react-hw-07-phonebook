import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
// забираю весь редюсер как файл
import contactReducer from './contacts/contacts-reducer';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: contactReducer,
  middleware,
  devTools: true,
});

//=====================================================
// import { configureStore } from '@reduxjs/toolkit';

// import contactsReducer from './contacts/contacts-reducer';

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   devTools: process.env.NODE_ENV === 'development',
// });

// export default store;
