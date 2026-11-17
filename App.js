import { ApolloProvider } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </>
  );
}
