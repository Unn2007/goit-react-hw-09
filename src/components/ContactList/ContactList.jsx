import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/selectors";

function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);
  const contactItems = visibleContacts.map((item) => {
    return (
      <li key={item.id}>
        <Contact data={item} />
      </li>
    );
  });
  return <ul className={css.contactList}>{contactItems}</ul>;
}

export default ContactList;
