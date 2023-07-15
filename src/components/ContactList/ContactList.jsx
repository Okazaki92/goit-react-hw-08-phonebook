import propTypes from "prop-types";
import styles from "./ConstactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { selectContactsList, selectFilter } from "../../redux/selectors";

export const ContactList = () => {
  const list = useSelector(selectContactsList);
  const filter = useSelector(selectFilter);
  const getFilteredContacts = () => {
    if (!filter) {
      return list;
    }

    return list.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const dispatch = useDispatch();

  const removeContact = (id) => {
    return dispatch(deleteContact(id));
  };

  const contacts = getFilteredContacts();

  return (
    <div>
      {!contacts.length ? (
        <div className="noContacts">Sorry no contact with this search!</div>
      ) : (
        <ul className={styles.list}>
          {contacts.map(({ id, name, phone }) => (
            <li className={styles.list_item} key={id}>
              <p className="list_text">{name}</p>
              <p className="list_text">{phone}</p>
              <button
                className={styles.list_button}
                type="submit"
                onClick={() => removeContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};
