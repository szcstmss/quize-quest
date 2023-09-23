import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LogOut from './LogOut';
import { auth } from '../../config/firebase';


jest.mock('../../config/firebase', () => {
    return {
        auth: {
            onAuthStateChanged: jest.fn(),
            signOut: jest.fn(),
            currentUser: {
                email: 'example@example.com',
            },
        },
    };
});

describe('LogOut Component', () => {
    it('should render without errors', () => {
        const { getByText } = render(<LogOut logout={() => {}} />);
        const greetingElement = getByText(/Hello/i);
        expect(greetingElement).toBeInTheDocument();
    });

    it('should call signOut when the button is clicked', async () => {
        const { getByText } = render(<LogOut logout={() => {}} />);
        const logoutButton = getByText('Kijelentkezés');

        fireEvent.click(logoutButton);

        await waitFor(() => {
            expect(auth.signOut).toHaveBeenCalledTimes(1);
        });
    });
});