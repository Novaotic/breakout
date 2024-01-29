import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Paddle from './Paddle';

test('renders Paddle component', () => {
    const { getByTestId } = render(<Paddle />);
    const paddleElement = getByTestId('paddle');
    expect(paddleElement).toBeInTheDocument();
});

test('moves Paddle left when left arrow key is pressed', () => {
    const { getByTestId } = render(<Paddle />);
    const paddleElement = getByTestId('paddle');

    fireEvent.keyDown(document, { key: 'ArrowLeft' });

    expect(paddleElement).toHaveStyle('left: -10px'); // Adjust the expected position based on your logic
});

test('moves Paddle right when right arrow key is pressed', () => {
    const { getByTestId } = render(<Paddle />);
    const paddleElement = getByTestId('paddle');

    fireEvent.keyDown(document, { key: 'ArrowRight' });

    expect(paddleElement).toHaveStyle('left: 10px'); // Adjust the expected position based on your logic
});