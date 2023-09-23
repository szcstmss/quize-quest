import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Game from './Game';

describe('Game Component', () => {
    it('should render correctly with question data', () => {
        const question = {
            question: 'What is the capital of France?',
            ans1: 'Paris',
            ans2: 'Berlin',
            ans3: 'London',
            ans4: 'Madrid',
        };

        const { getByText } = render(
            <Game
                length={1}
                index={1}
                question={question}
                checkAnswer={() => {}}
            />
        );

        expect(getByText('1 / 1')).toBeInTheDocument();
        expect(getByText('What is the capital of France?')).toBeInTheDocument();
        expect(getByText('Paris')).toBeInTheDocument();
        expect(getByText('Berlin')).toBeInTheDocument();
        expect(getByText('London')).toBeInTheDocument();
        expect(getByText('Madrid')).toBeInTheDocument();
    });

    it('should call checkAnswer when a button is clicked', () => {
        const question = {
            question: 'What is the capital of France?',
            ans1: 'Paris',
            ans2: 'Berlin',
            ans3: 'London',
            ans4: 'Madrid',
        };

        const checkAnswerMock = jest.fn();

        const { getByText } = render(
            <Game
                length={1}
                index={1}
                question={question}
                checkAnswer={checkAnswerMock}
            />
        );

        fireEvent.click(getByText('Paris'));
        expect(checkAnswerMock).toHaveBeenCalledWith('Paris');

        fireEvent.click(getByText('Berlin'));
        expect(checkAnswerMock).toHaveBeenCalledWith('Berlin');

        fireEvent.click(getByText('London'));
        expect(checkAnswerMock).toHaveBeenCalledWith('London');

        fireEvent.click(getByText('Madrid'));
        expect(checkAnswerMock).toHaveBeenCalledWith('Madrid');
    });
});
