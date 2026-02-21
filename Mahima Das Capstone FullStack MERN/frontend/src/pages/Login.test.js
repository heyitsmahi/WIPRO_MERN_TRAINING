import { render, screen } from '@testing-library/react';
import Login from './Login';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
  Link: ({ children }) => <div>{children}</div>
}), { virtual: true });

describe('Login Component Tests', () => {
  test('renders the login form and required fields', () => {
    render(<Login />);

    const heading = screen.getByText(/Welcome Back/i);
    expect(heading).toBeInTheDocument();

    const emailInput = screen.getByLabelText(/Email Address/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    const loginButton = screen.getByRole('button', { name: /Login/i });
    expect(loginButton).toBeInTheDocument();
  });
});