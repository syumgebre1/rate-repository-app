import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  scrollView: {
    flexDirection: 'row',
  },
  tab: {
    paddingRight: 20,
  },
  tabText: {
    color: 'white',
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <Link to="/" style={styles.tab}>
          <Text style={styles.tabText}>Repositories</Text>
        </Link>
        <Link to="/signin" style={styles.tab}>
          <Text style={styles.tabText}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
