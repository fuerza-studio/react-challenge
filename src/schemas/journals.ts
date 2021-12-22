import * as Yup from 'yup';

export const addJournalValidationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});
