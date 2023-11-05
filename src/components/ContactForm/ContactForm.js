import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormContainer,
  Form,
  Field,
  FormGroup,
  ErrorMessage,
  FormButton,
} from './ContactForm.styled';

const formSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  number: Yup.number().min(3, 'At least 3').required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <FormContainer>
      <Formik
        initialValues={{ name: '', number: 0 }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <Form>
          <FormGroup>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </FormGroup>

          <FormGroup>
            Number
            <Field type="tel" name="number" />
            <ErrorMessage name="number" component="span" />
          </FormGroup>

          <FormButton type="submit">Add contact</FormButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};
