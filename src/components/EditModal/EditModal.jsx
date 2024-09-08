import { useDispatch,useSelector} from 'react-redux';
import { selectEditModal } from '../../redux/contacts/selectors';
import { editContact } from "../../redux/contacts/operations";
import {hideEditModal} from '../../redux/contacts/slice'
import Modal from "react-modal";
import { FaRegWindowClose } from "react-icons/fa";
import ContactForm from '../../ContactForm/ContactForm';
import css from "./ConfirmModal.module.css";
import toast from 'react-hot-toast';

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
    const selectedContact = useSelector(selectEditModal)
    const modalIsOpen = !!selectedContact;
   
const closeModal = () =>{
  dispatch(hideEditModal())
  
}
const handleEdit = () => {
  dispatch(editContact(selectedContact)).then((result) => {
  if (editContact.fulfilled.match(result)) {
    toast.success('Контакт успішно змінений',{duration: 2000,
      position: 'top-center'})
    
  }
})  
closeModal()
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
             
            <ContactForm isEditContact={true}/>
           
            
          </div>
        </Modal>
        
      </div>
    );
  }
  
  export default editModal;