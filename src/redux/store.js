import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist';
import {superheroesSliceReducer} from './superheroes/superheroesSlice';
import {filterReducer} from './filter/filterSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['superheroes'],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, combineReducers({
    superheroes: superheroesSliceReducer,
    filter: filterReducer,
  })),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);