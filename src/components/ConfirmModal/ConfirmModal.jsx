import { useDispatch,useSelector} from 'react-redux';
import { selectConfirmModal } from '../../redux/contacts/selectors';
import { deleteContact } from "../../redux/contacts/operations";
import {hideConfirmModal} from '../../redux/contacts/slice'
import Modal from "react-modal";
import { FaRegWindowClose } from "react-icons/fa";
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

  function ConfirmModal() {
    Modal.setAppElement("#root");
    const dispatch = useDispatch();
    const selectedContact = useSelector(selectConfirmModal)
    const modalIsOpen = !!selectedContact;
   
const closeModal = () =>{
  dispatch(hideConfirmModal())
  
}
const handleDelete = () => {
  dispatch(deleteContact(selectedContact)).then((result) => {
  if (deleteContact.fulfilled.match(result)) {
    toast.success('Контакт успішно видалений',{duration: 2000,
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
             
            <h2 className={css.description}>A You sure?</h2>
            <div>
            <button onClick={handleDelete} >
              Yes
            </button>     
            <button onClick={()=>closeModal()} >
            No
            </button>     

            </div>
            
          </div>
        </Modal>
        
      </div>
    );
  }
  
  export default ConfirmModal;