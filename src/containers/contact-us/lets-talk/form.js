import * as yup from 'yup';

export const CONTACT_SCHEMA = yup.object().shape({
  email: yup.string().required('Cannot be empty').email('Invalid email'),
  name: yup
    .string()
    .required('Cannot be empty')
    .matches(/^[^\-`'"]+$/, "Only letters, “ ' “ and “ - “ are allowed"),
  company: yup.string().required('Cannot be empty'),
  title: yup.string().required('Cannot be empty'),
  message: yup
    .string()
    .required('Empty field')
    .min(3, 'Message is too short')
    .max(255, 'Message is too long'),
});
