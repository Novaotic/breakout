import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Brick from './Brick';

describe('Brick component', () => {
    it('renders a brick with the specified color when not destroyed', () => {
        const { container } = render(<Brick color="red" isDestroyed={false} />);
        const brickElement = container.firstChild;

        expect(window.getComputedStyle(brickElement).backgroundColor).toBe('red');
    });

    it('renders a transparent brick when destroyed', () => {
        const { container } = render(<Brick color="blue" isDestroyed={true} />);
        const brickElement = container.firstChild;

        expect(window.getComputedStyle(brickElement).backgroundColor).toBe('transparent');
    });
});