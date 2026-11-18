import { ApolloProvider } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { NativeRouter } from 'react-router-native';
import { BrowserRouter } from 'react-router-dom';
import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();
const Router = Platform.OS === 'web' ? BrowserRouter : NativeRouter;

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Router>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </Router>
    </>
  );
}
