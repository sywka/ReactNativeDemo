import {ActionType, createAction} from "typesafe-actions";
import {IContact} from "./rootReducer";

export const createOrUpdateContact = createAction("contacts/CREATE_OR_UPDATE",
    action => (contact: IContact) => action(contact)
);

export type CreateOrUpdateContactAction = ActionType<typeof createOrUpdateContact>;

export const deleteContact = createAction("contacts/DELETE",
    action => (id: number) => action({id})
);

export type DeleteContactAction = ActionType<typeof deleteContact>;

export type Actions = CreateOrUpdateContactAction | DeleteContactAction;
