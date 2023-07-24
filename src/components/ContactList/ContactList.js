import ContactElement from "components/ContactElement/ContactElement";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts, deleteContact } from "redux/contacts/operations";
// import css from "./ContactList.module.css";
import css from "./contactList.module.css"

function ContactList() {
  const filter = useSelector(state => state.filter.query);
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function filterContacts() {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
  }

  function handleDelete(id) {
    dispatch(deleteContact({ id: id }));
  }

  return (
    <>
    {contacts.length > 0
      ? (
        <div className={css.conteiner}>
          <ul className={css.contactList}>
            {filterContacts().map(({ id, name, number }) => {
              return (
                <li className={css.contactList} key={id}>
                  <ContactElement
                    id={id}
                    name={name}
                    number={number}
                    onDelete={handleDelete}
                  />
                </li>
              );  
            })}
          </ul>
        </div>
        )
        :
        (<p className={css.text}>There are no contacts.</p>)    
      }
      </>
  )
}

export default ContactList;