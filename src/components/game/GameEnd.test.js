import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Ennek a sorának a hozzáadása a "toBeInTheDocument" ellenőrzéshez
import GameEnd from './GameEnd';

describe('GameEnd Component', () => {
    it('should render correctly with score data', () => {
        const { getByText } = render(
            <GameEnd score={42} backToStart={() => {}} />
        );

        expect(getByText('Elért Pontszám:')).toBeInTheDocument();
        expect(getByText('42')).toBeInTheDocument();
        expect(getByText('Tovább')).toBeInTheDocument();
    });

    it('should call backToStart when the "Tovább" button is clicked', () => {
        const backToStartMock = jest.fn();

        const { getByText } = render(
            <GameEnd score={42} backToStart={backToStartMock} />
        );

        fireEvent.click(getByText('Tovább'));
        expect(backToStartMock).toHaveBeenCalled();
    });
});
