import * as yup from 'yup';

export const REQUEST_DEMO_SCHEMA = yup.object().shape({
  fullName: yup.string().required('Required'),
  company: yup.string().required('Required'),
  companyWebsite: yup.string().required('Required'),
  businessEmail: yup.string().required('Required').email('Wrong format'),
  jobRole: yup.object().shape({
    id: yup.number().required('Required'),
    name: yup.string().required('Required'),
  }),
  country: yup.object().shape({
    id: yup.number().required('Required'),
    name: yup.string().required('Required'),
  }),
  employees: yup.object().shape({
    id: yup.number().required('Required'),
    name: yup.string().required('Required'),
  }),
  phone: yup.string().required('Required'),
});
