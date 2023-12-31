import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import css from 'App.module.css';

function Contacts() {
  return (
    <div className={css.conteiner}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2 style={{marginTop: "15px"}}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )
}

export default Contacts;