import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Link, useHistory } from '../utils/router';
// Remove: import { Link, useHistory } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';
import Text from './Text';
import theme from '../theme';
import useSignOut from '../hooks/useSignOut';

const styles = StyleSheet.create({
  container: { paddingTop: Constants.statusBarHeight, backgroundColor: theme.colors.appBarBackground, paddingHorizontal: 15, paddingBottom: 15 },
  scrollView: { flexDirection: 'row' },
  tab: { paddingRight: 20 },
  tabText: { color: 'white', fontSize: theme.fontSizes.subheading, fontWeight: theme.fontWeights.bold }
});

const AppBar = () => {
  const { data } = useQuery(ME, { fetchPolicy: 'cache-and-network' });
  const signOut = useSignOut();
  const history = useHistory();
  const user = data ? data.me : null;

  const handleSignOut = async () => {
    await signOut();
    history.push('/');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <Link to="/" style={styles.tab}>
          <Text style={styles.tabText}>Repositories</Text>
        </Link>
        {user && (
          <Link to="/myreviews" style={styles.tab}>
            <Text style={styles.tabText}>My Reviews</Text>
          </Link>
        )}
        {user ? (
          <Pressable onPress={handleSignOut} style={styles.tab}>
            <Text style={styles.tabText}>Sign out</Text>
          </Pressable>
        ) : (
          <Link to="/signin" style={styles.tab}>
            <Text style={styles.tabText}>Sign in</Text>
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;