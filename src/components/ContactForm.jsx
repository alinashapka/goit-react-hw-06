import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { ContactSchema } from './ContactSchema';
import clsx from "clsx";
import css from "./ContactForm.module.css";

export default function ContactForm({onSubmit}) {
    const nameId = useId();
    const numberId = useId();

    const handleSubmit = (values, helpers) => {
    onSubmit(values);
    helpers.resetForm();
    };
    
    return (
        <Formik initialValues={{
            name: '',
            number: '',
        }} onSubmit={handleSubmit} validationSchema={ContactSchema}>
            <Form className={clsx(css.form)}>
                <label htmlFor={nameId}>
            Name
          </label>
                <Field className={clsx(css.field)} type='text'
            name='name'
            id={nameId}/>
                    <ErrorMessage
            name='name'
            component='span'
                />
                 <label htmlFor={numberId}>
            Number
          </label>
                <Field className={clsx(css.field)} type='tel'
            name='number'
            id={numberId}/>
                    <ErrorMessage
            name='number'
            component='span'
                />
                 <button className={clsx(css.button)} type='submit'>
          Add contact
        </button>
            </Form>
            </Formik>
    );
}