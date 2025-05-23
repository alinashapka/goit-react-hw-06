import * as Yup from 'yup';

export const ContactSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Minimun 3 symbols').max(50, 'Maximum 50 symbols').required('This is a required field'),
        number: Yup.string().min(3, 'Minimun 3 symbols').max(50, 'Maximum 50 symbols').required('This is a required field'),
    });