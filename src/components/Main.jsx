import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e4e8',
  },
});

const Main = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <View style={styles.container}>
      <AppBar showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
      {showSignIn ? <SignIn /> : <RepositoryList />}
    </View>
  );
};

export default Main;
