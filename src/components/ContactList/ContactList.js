import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ContactList.scss';
import * as operations from '../../redux/contacts/contacts-operations';
import * as selectors from '../../redux/contacts/contacts-selectors'

const ContactList = ({ items, filter, loading, onContactsFetch, onContactDelete }) => {

  useEffect(() => {
    onContactsFetch();
  }, [])

  return (
  <>
    <ul className="contacts__list">
      {items
        .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <li className="contacts__item" key={id}>
            <p>{name}: {number}</p>
            <button type="button" className="btn" onClick={() => onContactDelete(id)}>
              Delete
            </button>
          </li>)
      )}
    </ul>
    {loading && <p>Loading...</p>}
  </>
)};

const mapStateToProps = state => ({
  items: selectors.getItems(state),
  filter: selectors.getFilter(state),
  loading: selectors.getLoading(state),
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
