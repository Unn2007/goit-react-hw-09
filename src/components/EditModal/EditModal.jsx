import { useDispatch, useSelector } from "react-redux";
import { selectEditModal } from "../../redux/contacts/selectors";
import { hideEditModal } from "../../redux/contacts/slice";
import Modal from "react-modal";
import { FaRegWindowClose } from "react-icons/fa";
import ContactForm from "../ContactForm/ContactForm";
import css from "./EditModal.module.css";


const customStyles = {
  overlay: {
    backgroundColor: "rgba(64, 64, 64, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function editModal() {
  Modal.setAppElement("#root");
  const dispatch = useDispatch();
  const selectedContact = useSelector(selectEditModal);
  const modalIsOpen = !!selectedContact;

  const closeModal = () => {
    dispatch(hideEditModal());
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <div className={css.modalContent}>
          <button onClick={closeModal} className={css.closeButton}>
            <FaRegWindowClose />
          </button>

          <ContactForm isEditContact={true} />
        </div>
      </Modal>
    </div>
  );
}

export default editModal;
