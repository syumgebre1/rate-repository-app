import { render, fireEvent, screen, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '../components/SignIn';

describe('SignIn', () => {
  it('calls onSubmit with the correct values when the form is submitted', async () => {
    const onSubmit = jest.fn();

    render(<SignInContainer onSubmit={onSubmit} />);

    fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle');
    fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
    fireEvent.press(screen.getByText('Sign in'));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: 'kalle',
        password: 'password',
      });
    });
  });

  it('does not call onSubmit if the form is invalid', async () => {
    const onSubmit = jest.fn();

    render(<SignInContainer onSubmit={onSubmit} />);

    fireEvent.press(screen.getByText('Sign in'));

    await waitFor(() => {
      expect(onSubmit).not.toHaveBeenCalled();
    });
  });
});
