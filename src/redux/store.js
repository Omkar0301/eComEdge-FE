import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducer/rootReducer';
import rootSaga from './rootSaga';
import { encryptTransform } from 'redux-persist-transform-encrypt';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['ui'],
  transforms: [
    encryptTransform({
      secretKey: process.env.NEXT_PUBLIC_ENCRYPTION_KEY,
      onError: function (error) {
        console.error('Encryption error:', error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
