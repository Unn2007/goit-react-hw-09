import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div className={css.contact}>
      <div>
        <div className={css.fieldContainer}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.fieldContainer}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <div className={css.buttonContainer}>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Contact;
