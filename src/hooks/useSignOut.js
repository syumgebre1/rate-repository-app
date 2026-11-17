import { useApolloClient } from '@apollo/client';
import AuthStorage from '../utils/authStorage';

const authStorage = new AuthStorage();

const useSignOut = () => {
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return signOut;
};

export default useSignOut;