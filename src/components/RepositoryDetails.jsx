import { View, StyleSheet, Pressable, Linking, ScrollView } from 'react-native';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
  },
  sectionTitle: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    marginBottom: 10,
    marginTop: 10,
  },
});

const RepositoryDetails = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <Text>Loading...</Text>;
  if (!data || !data.repository) return <Text>Repository not found</Text>;

  const repository = data.repository;
  const reviews = repository.reviews ? repository.reviews.edges.map((edge) => edge.node) : [];

  return (
    <ScrollView>
      <RepositoryItem item={repository} />
      <View style={styles.container}>
        <Pressable
          style={styles.button}
          onPress={() => Linking.openURL(repository.url)}
        >
          <Text style={styles.buttonText}>Open in GitHub</Text>
        </Pressable>
      </View>
      
      <View style={{ paddingHorizontal: 15 }}>
        <Text style={styles.sectionTitle}>Reviews</Text>
        {reviews.length === 0 ? (
          <Text color="textSecondary">No reviews yet.</Text>
        ) : (
          reviews.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default RepositoryDetails;
