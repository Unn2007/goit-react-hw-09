import ModalWindow from "../ModalWindow/ModalWindow";
import { useSelector, useDispatch } from "react-redux";
import { selectConfirmModal } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import { hideConfirmModal } from "../../redux/contacts/slice";
import { toast } from "react-hot-toast";
import css from "./ConfirmModal.module.css";

function ConfirmModal() {
  const dispatch = useDispatch();
  const hideModal = () => {
    dispatch(hideConfirmModal());
  };
  const selectedContact = useSelector(selectConfirmModal);
  const handleDelete = () => {
    dispatch(deleteContact(selectedContact)).then((result) => {
      if (deleteContact.fulfilled.match(result)) {
        toast.success("Контакт успішно видалений", {
          duration: 2000,
          position: "top-center",
        });
      }
    });
  };

  return (
    <ModalWindow selector={selectedContact} closeModal={hideModal}>
      <h2 className={css.description}>A You sure?</h2>
      <div>
        <button onClick={handleDelete}>Yes</button>
        <button onClick={() => hideModal()}>No</button>
      </div>
    </ModalWindow>
  );
}

export default ConfirmModal;
