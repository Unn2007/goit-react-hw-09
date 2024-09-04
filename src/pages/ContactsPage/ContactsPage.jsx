import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import { TaskList } from '../../components/ContactList/ContactList';
import { TaskEditor } from '../../components/ContactForm/ContactForm';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectLoading } from '../../redux/tasks/selectors';

export default function TasksPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your tasks</DocumentTitle>
      <TaskEditor />
      <div>{isLoading && 'Request in progress...'}</div>
      <TaskList />
    </>
  );
}
