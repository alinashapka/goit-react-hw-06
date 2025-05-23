import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import { ContactSchema } from './ContactSchema';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';

import clsx from "clsx";
import css from "./ContactForm.module.css";

export default function ContactForm() {
    const nameId = useId();
    const numberId = useId();
    const dispatch = useDispatch();

    const handleSubmit = (values, helpers) => {
        const newContact = { ...values, id: nanoid() };
    dispatch(addContact(newContact));
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
};