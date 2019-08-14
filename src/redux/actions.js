export const CONTACT_CREATE_OR_UPDATE = "CONTACT_CREATE_OR_UPDATE";
export const CONTACT_DELETE = "CONTACT_DELETE";

export function createOrUpdateContact (contact) {
  return {
    type: CONTACT_CREATE_OR_UPDATE,
    payload: contact
  };
}

export function deleteContact (id) {
  return {
    type: CONTACT_DELETE,
    payload: {
      id
    }
  };
}
