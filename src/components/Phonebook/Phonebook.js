import './Phonebook.scss';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

const Phonebook = () => (
  <>
    <h1 className="main-title">Phonebook</h1>
    <ContactForm />
    <h2 className="title__contacts">Contacts</h2>
    <Filter />
    <ContactList />
  </>
);

export default Phonebook;
