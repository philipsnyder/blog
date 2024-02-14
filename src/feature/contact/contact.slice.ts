import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IContact } from "./models";

interface ContactState {
  contacts: IContact[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    fetchContacts: (state, action: PayloadAction<IContact[]>) => {
      state.contacts = action.payload;
    },
  },
});

export const { fetchContacts } = contactSlice.actions;
export default contactSlice.reducer;
