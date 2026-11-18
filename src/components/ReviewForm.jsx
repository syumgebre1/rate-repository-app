import { TextInput, Pressable, StyleSheet, View } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useHistory } from '../utils/router';
// Remove: import { useHistory } from 'react-router-native';
import Text from './Text';
import theme from '../theme';
import useCreateReview from '../hooks/useCreateReview';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  inputError: {
    borderColor: '#d73a4a',
  },
  errorText: {
    color: '#d73a4a',
    marginBottom: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
  },
  title: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 15,
  },
});

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup.number().min(1).max(100).required('Rating is required'),
  text: yup.string(),
});

export const ReviewFormContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      ownerName: '',
      repositoryName: '',
      rating: '',
      text: '',
    },
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a review</Text>
      
      <TextInput
        style={[styles.input, formik.touched.ownerName && formik.errors.ownerName && styles.inputError]}
        placeholder="Owner name"
        value={formik.values.ownerName}
        onChangeText={formik.handleChange('ownerName')}
        onBlur={formik.handleBlur('ownerName')}
      />
      {formik.touched.ownerName && formik.errors.ownerName && (
        <Text style={styles.errorText}>{formik.errors.ownerName}</Text>
      )}

      <TextInput
        style={[styles.input, formik.touched.repositoryName && formik.errors.repositoryName && styles.inputError]}
        placeholder="Repository name"
        value={formik.values.repositoryName}
        onChangeText={formik.handleChange('repositoryName')}
        onBlur={formik.handleBlur('repositoryName')}
      />
      {formik.touched.repositoryName && formik.errors.repositoryName && (
        <Text style={styles.errorText}>{formik.errors.repositoryName}</Text>
      )}

      <TextInput
        style={[styles.input, formik.touched.rating && formik.errors.rating && styles.inputError]}
        placeholder="Rating (1-100)"
        keyboardType="numeric"
        value={formik.values.rating}
        onChangeText={formik.handleChange('rating')}
        onBlur={formik.handleBlur('rating')}
      />
      {formik.touched.rating && formik.errors.rating && (
        <Text style={styles.errorText}>{formik.errors.rating}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Review text"
        multiline
        value={formik.values.text}
        onChangeText={formik.handleChange('text')}
      />

      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text style={styles.buttonText}>Create review</Text>
      </Pressable>
    </View>
  );
};

const ReviewForm = () => {
  const [createReview] = useCreateReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    try {
      const data = await createReview(values);
      console.log('Review created:', data);
      history.push('/');
    } catch (e) {
      console.error('Review creation failed:', e.message);
    }
  };

  return <ReviewFormContainer onSubmit={onSubmit} />;
};

export default ReviewForm;