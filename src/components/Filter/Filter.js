import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Filter.scss';
import * as actions from '../../redux/contacts/contacts-actions';

const Filter = ({ filter, onFilterChange }) => (
  <>
    <label className="find-contacts__label" htmlFor="find-contacts-form__filter">
      Find contacts by name
    </label>
    <input
      type="search"
      id="find-contacts-form__filter"
      name="filter"
      className="find-contacts__input"
      value={filter}
      onChange={onFilterChange}
      required
      autoComplete="off"
      autoFocus
    ></input>
  </>
);

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onFilterChange: event => dispatch(actions.changeFilter(event.target.value)),
});

Filter.defaultProps = {
  filter: '',
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
