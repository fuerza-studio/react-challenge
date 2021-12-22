import * as Yup from 'yup';

export const addPostValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .min(3, 'Must have at least 3 characters')
    .max(30, 'Should be less than 30 cahracters'),
  content: Yup.string().required('Content is required'),
});
