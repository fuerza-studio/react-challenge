import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
  email: Yup.string().email('Please use a correct email format'),
});
