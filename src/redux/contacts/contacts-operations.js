import axios from 'axios';
import * as actions from './contacts-actions'

const url = 'http://localhost:4040/contacts';

export const fetchContacts = () => dispatch => {

  dispatch(actions.fetchContactsRequest());

  axios.get(url)
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch(error => dispatch(actions.fetchContactsError(error)))

}

export const addContact = (name, number) => dispatch => {

  const todo = { name, number };

  dispatch(actions.addContactRequest());

  axios.post(url, todo)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)))
}

export const deleteContact = id => dispatch => {

  dispatch(actions.deleteContactRequest());

  axios.delete(`${url}/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error)))
}