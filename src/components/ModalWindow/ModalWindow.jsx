import { useDispatch,useSelector} from 'react-redux';
// import { selectConfirmModal } from '../../redux/contacts/selectors';
// import { deleteContact } from "../../redux/contacts/operations";
// import {hideConfirmModal} from '../../redux/contacts/slice'
import Modal from "react-modal";
import { FaRegWindowClose } from "react-icons/fa";
import css from "ModalWindow.module.css";


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

  function ModalWindow({children,operation,selector,reducer}) {
    Modal.setAppElement("#root");
    const dispatch = useDispatch();
    const selectedContact = useSelector(selector)
    const modalIsOpen = !!selectedContact;
   
const closeModal = () =>{
  dispatch(reducer)
  
}
// const handleDelete = () => {
//   dispatch(operation(selectedContact)).then((result) => {
//   if (operation.fulfilled.match(result)) {
//     toast.success('Контакт успішно видалений',{duration: 2000,
//       position: 'top-center'})
    
//   }
// })  
// closeModal()
// };


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