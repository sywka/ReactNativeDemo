import {Actions, createOrUpdateContact, deleteContact} from "./actions";
import {getType} from "typesafe-actions";

export interface IContact {
    id: number;
    firstName: string;
    secondName?: string;
    phone?: string;
    email?: string;
}

export interface IState {
    idGenerator: number;
    contacts: IContact[];
}

const initialState: IState = {
    idGenerator: 0,
    contacts: []
};

export default function (state = initialState, action: Actions) {
    switch (action.type) {
        case getType(createOrUpdateContact): {
            if (action.payload.id) {
                const index = state.contacts.findIndex((item) => item.id === action.payload.id);
                if (index === -1) {
                    throw new Error("Contact not found");
                }
                const newContacts = [...state.contacts];
                newContacts[index] = {...newContacts[index], ...action.payload};

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
                        {...action.payload, id}
                    ]
                };
            }
        }
        case getType(deleteContact): {
            const {id} = action.payload;

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
