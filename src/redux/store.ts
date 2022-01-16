import storageSession from 'redux-persist/lib/storage/session';
import {configureStore} from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';

import reducers from './rootReducer';

const persistConfig = {
    key: 'root',
    storage: storageSession
}

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
