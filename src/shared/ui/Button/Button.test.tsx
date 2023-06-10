import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';
import React from 'react';

describe('button', () => {
    test('with only one param', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('another', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
