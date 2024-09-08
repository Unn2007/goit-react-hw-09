import { useDispatch,useSelector } from "react-redux";
import {showConfirmModal} from '../../redux/contacts/slice'
import css from "./Contact.module.css";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal'
import { selectConfirmModal} from '../../redux/contacts/selectors';


function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const selectedContact=useSelector(selectConfirmModal);
  
  const handleDelete = () => {
    
    dispatch(showConfirmModal(id));
    
    
  }
  return (
    <>
    
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
    <div>{(id===selectedContact) && <ConfirmModal/>}</div>
    </>
  );
}

export default Contact;
