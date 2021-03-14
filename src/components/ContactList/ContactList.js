import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ContactList.scss';
import * as operations from '../../redux/contacts/contacts-operations';

const ContactList = ({ items, filter, onContactsFetch, onContactDelete }) => {

  useEffect(() => {
    onContactsFetch();
  }, [])

  return (
  <ul className="contacts__list">
    {items
      .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
      .map(({ id, name, number }) => (
          <li className="contacts__item" key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" className="btn" onClick={() => onContactDelete(id)}>
              Delete
            </button>
          </li>
        )
      )}
  </ul>
)};

const mapStateToProps = state => ({
  items: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onContactsFetch: () => dispatch(operations.fetchContacts()),
  onContactDelete: id => dispatch(operations.deleteContact(id)),
});

ContactList.defaultProps = {
  items: [],
  filter: '',
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  filter: PropTypes.string,
  onContactDelete: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
