import { render, screen } from '@testing-library/react';
import { TitleComponent } from './titleComponent';

describe('TitleComponent', () => {
    it('renders children correctly', () => {
        const testTitle = 'Test Title';
        render(<TitleComponent>{testTitle}</TitleComponent>);

        const titleElement = screen.getByText(testTitle);
        expect(titleElement).toBeInTheDocument();
    });
});
