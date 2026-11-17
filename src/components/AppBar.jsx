import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
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

const AppBar = ({ showSignIn, setShowSignIn }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <Pressable onPress={() => setShowSignIn(false)} style={styles.tab}>
          <Text style={styles.tabText}>Repositories</Text>
        </Pressable>
        <Pressable onPress={() => setShowSignIn(true)} style={styles.tab}>
          <Text style={styles.tabText}>Sign in</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;
