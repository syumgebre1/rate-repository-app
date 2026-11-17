import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import RepositoryDetails from './RepositoryDetails';
import ReviewForm from './ReviewForm';
import MyReviews from './MyReviews';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e1e4e8' },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/repository/:id" component={RepositoryDetails} />
        <Route path="/review" component={ReviewForm} />
        <Route path="/myreviews" component={MyReviews} />
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={RepositoryList} />
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
