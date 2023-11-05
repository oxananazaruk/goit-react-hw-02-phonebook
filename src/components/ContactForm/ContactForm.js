import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
});

export const ContactForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: '' }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        <Form>
          <label>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
