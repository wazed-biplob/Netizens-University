import { configureStore } from "@reduxjs/toolkit";
import { baseAPI } from "./api/baseApi";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import authReducer from './auth/authSlice'


const persistConfig = {
  key : 'auth',
  storage,
}

const persistAuthReducer = persistReducer(persistConfig, authReducer )


export const store = configureStore({
  reducer: {[baseAPI.reducerPath]: baseAPI.reducer,  auth: persistAuthReducer,  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck : {
      ignoredActions: [ FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,] 
    }}).concat(baseAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store)