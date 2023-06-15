import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';
import React from 'react';

describe('button', () => {
    test('with only one param', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('another', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
