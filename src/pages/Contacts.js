import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectContactsList } from "../redux/selectors";
import { fetchContacts } from "../redux/operations";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { Filter } from "../components/Filter/Filter";
import { ContactList } from "../components/ContactList/ContactList";

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      {!contacts.length ? (
        <div className="noContacts">NO CONTACTS IN BOOK</div>
      ) : (
        <div className="container">
          <Filter />
          <h2>Contacts</h2>
          {<ContactList />}
        </div>
      )}
    </div>
  );
};

export default Contacts;
