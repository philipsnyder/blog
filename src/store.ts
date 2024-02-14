import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./feature/contact/contact.slice";

export const store = configureStore({
  reducer: { contacts: contactReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
