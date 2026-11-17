import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';
import AuthStorage from '../utils/authStorage';

const authStorage = new AuthStorage();

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        credentials: { username, password },
      },
    });
    
    // Save the token to AsyncStorage
    if (data && data.authenticate) {
      await authStorage.setAccessToken(data.authenticate.accessToken);
    }
    
    return data;
  };

  return [signIn, result];
};

export default useSignIn;
