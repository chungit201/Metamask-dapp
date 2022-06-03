import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "./accountWallet";


const store = configureStore({
  reducer: {
    wallet:counterSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
