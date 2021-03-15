import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ContactForm.scss';
import * as operations from '../../redux/contacts/contacts-operations';
import * as selectors from '../../redux/contacts/contacts-selectors';

const ContactForm = ({ items, onContactAdd }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeName = event => {
    setName(event.target.value);
  }

  const changeNumber = event => {
    setNumber(event.target.value);
  }

  const onFormSubmit = event => {
    event.preventDefault();
    const names = items.map(contact => contact.name);

    names.includes(name) ? alert(`${name} is already in contacts.`) : onContactAdd(name, number);

    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="Phonebook__form" onSubmit={onFormSubmit}>
      <label htmlFor="Phonebook-form__name">Name</label>
      <input
        type="text"
        id="Phonebook-form__name"
        name="name"
        value={name}
        onChange={changeName}
        required
        autoComplete="off"
      ></input>
      <label htmlFor="Phonebook-form__number">Number</label>
      <input
        type="tel"
        id="Phonebook-form__number"
        name="number"
        value={number}
        onChange={changeNumber}
        required
        autoComplete="off"
        pattern="^[ 0-9]+$"
      ></input>
      <button className="btn" type="submit">
        Add contact
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  items: selectors.getItems(state),
});

const mapDispatchToProps = dispatch => ({
  onContactAdd: (name, number) => dispatch(operations.addContact(name, number)),
});

ContactForm.defaultProps = {
  items: [],
};

ContactForm.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onContactAdd: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
