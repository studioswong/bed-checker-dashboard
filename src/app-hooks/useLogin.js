import gql from 'graphql-tag';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import useReactRouter from 'use-react-router';
const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(input: {email: $email, password: $password}) {
      token
    }
  }
`;

export const useLogin = (props) => {
  const { history } = useReactRouter();
  const client = useApolloClient();
  return useMutation(
    LOGIN_MUTATION,
    {
      onCompleted({ login: { token } }) {
        localStorage.setItem('apiToken', token);
        client.writeData({ data: { isLoggedIn: true } });
        history.push('/');
        toast.success('Successful login');
      },
      onError({ message }) {
        toast.error(message);
      },
      ...props,
    },
  );
};

export default useLogin