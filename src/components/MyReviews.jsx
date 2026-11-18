import { FlatList, View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', padding: 15, marginBottom: 10 },
  repositoryName: { fontWeight: theme.fontWeights.bold, marginBottom: 5 },
  ratingCircle: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: theme.colors.primary, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  ratingText: { color: theme.colors.primary, fontWeight: theme.fontWeights.bold },
  row: { flexDirection: 'row' },
  infoContainer: { flex: 1 },
  date: { color: theme.colors.textSecondary, marginBottom: 5 },
});

const MyReviews = () => {
  const { data, loading } = useQuery(ME, { fetchPolicy: 'cache-and-network' });

  if (loading) return <Text>Loading...</Text>;
  if (!data || !data.me) return <Text>Not logged in</Text>;

  const reviews = data.me.reviews ? data.me.reviews.edges.map((edge) => edge.node) : [];

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.ratingCircle}>
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.repositoryName}>{item.repository.fullName}</Text>
          <Text style={styles.date}>{new Date(item.createdAt).toLocaleDateString()}</Text>
          <Text>{item.text}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={reviews}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<Text>No reviews yet.</Text>}
    />
  );
};

export default MyReviews;