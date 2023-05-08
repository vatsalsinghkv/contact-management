import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Contact from '../models/contact';

type SliceType = {
  contacts: Contact[];
};
const initialState: SliceType = {
  contacts: [
    // {
    //   id: 'test',
    //   firstName: 'Sakshi',
    //   lastName: 'jha',
    //   status: 'active',
    // },
    // {
    //   id: 'test-2',
    //   firstName: 'Sakshi',
    //   lastName: 'jha',
    //   status: 'active',
    // },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }: PayloadAction<Contact>) => {
      state.contacts.push(payload);
    },
    updateContact: (state, { payload }: PayloadAction<Contact>) => {
      state.contacts = state.contacts.map((contact) => {
        if (contact.id === payload.id) {
          return payload;
        }

        return contact;
      });
    },
    deleteContact: (state, { payload }: PayloadAction<string>) => {
      state.contacts = state.contacts.filter((c) => c.id !== payload);
    },
  },
});

const { reducer: contactsReducer, actions: contactsActions } = contactsSlice;

export { contactsActions };
export default contactsReducer;
