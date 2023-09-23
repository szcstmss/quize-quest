import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LogIn from './LogIn';

describe('LogIn Component', () => {
    it('should render without errors', () => {
        const { getByText } = render(<LogIn />);
        const titleElement = getByText('QuizQuest');
        expect(titleElement).toBeInTheDocument();
    });

    it('should allow entering email and password', () => {
        const { getByPlaceholderText } = render(<LogIn />);
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Jelszó');

        fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'password123' } });

        expect(emailInput).toHaveValue('test@example.com');
        expect(passwordInput).toHaveValue('password123');
    });

    it('should display an error message on invalid login', async () => {
        const { getByText, getByPlaceholderText } = render(<LogIn />);
        const emailInput = getByPlaceholderText('Email');
        const passwordInput = getByPlaceholderText('Jelszó');
        const signInButton = getByText('Bejelentkezés');

        fireEvent.change(emailInput, { target: { value: 'invalid@example.com' } });
        fireEvent.change(passwordInput, { target: { value: 'invalidpassword' } });
        fireEvent.click(signInButton);

        await waitFor(() => {
            expect(getByText('Hibás Bejelentkezési Adatok')).toBeInTheDocument();
        });
    });
});
