import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from 'react-hot-toast';

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  telNumber: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function ContactForm({isEditContact}) {
 
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(addContact({ name: values.username, number: values.telNumber })).then((result) => {
      if (addContact.fulfilled.match(result)) {
        toast.success('Контакт успішно доданий',{duration: 2000,
          position: 'top-center'})
        
      }
    });

    actions.resetForm();
  };
  const usernameFieldId = useId();
  const telNumberFieldId = useId();
  return (
    <Formik
      initialValues={{ username: "", telNumber: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.fieldContainer}>
          <label htmlFor={usernameFieldId}>Name</label>
          <Field type="text" name="username" id={usernameFieldId} />
          <ErrorMessage
            name="username"
            component="span"
            className={css.error}
          />
        </div>
        <div className={css.fieldContainer}>
          <label htmlFor={telNumberFieldId}>Number</label>
          <Field type="tel" name="telNumber" id={telNumberFieldId} />
          <ErrorMessage
            name="telNumber"
            component="span"
            className={css.error}
          />
        </div>

        <div className={css.buttonContainer}>
          {!isEditContact&&<button type="submit">Add contact</button>}
          {isEditContact&&<button type="submit">Confirm changes</button>}
        </div>
      </Form>
    </Formik>
  );
}

export default ContactForm;
