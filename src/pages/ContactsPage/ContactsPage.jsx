import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import  ContactList  from '../../components/ContactList/ContactList';
import  ContactForm  from '../../components/ContactForm/ContactForm';
import SearcBox from '../../components/SearchBox/SearchBox'
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoading,selectConfirmModal } from '../../redux/contacts/selectors';
// import ConfirmModal from '../../components/ConfirmModal/ConfirmModal'

export default function TasksPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  // const isConfirmModal=useSelector(selectConfirmModal);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      <ContactForm />
      <SearcBox/>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
      {/* <div>{isConfirmModal && <ConfirmModal/>}</div> */}
      

    </>
  );
}
