import { CONTACT_CREATE_OR_UPDATE, CONTACT_DELETE } from "./actions";

const initialState = {
  idGenerator: 0,
  contacts: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CONTACT_CREATE_OR_UPDATE: {
      if (action.payload.id) {
        const index = state.contacts.findIndex((item) => item.id === action.payload.id);
        if (index === -1) {
          throw new Error("Contact not found");
        }
        const newContacts = [...state.contacts];
        newContacts[index] = { ...newContacts[index], ...action.payload };

        return {
          ...state,
          contacts: newContacts
        };
      } else {
        const id = state.idGenerator + 1;
        return {
          ...state,
          idGenerator: id,
          contacts: [
            ...state.contacts,
            { ...action.payload, id }
          ]
        };
      }
    }
    case CONTACT_DELETE: {
      const { id } = action.payload;

      const newContacts = state.contacts.filter((contact) => contact.id !== id);
      if (newContacts.length === state.contacts.length) {
        throw new Error("Contact not found");
      }
      return {
        ...state,
        contacts: newContacts
      };
    }
    default: {
      return state;
    }
  }
}
