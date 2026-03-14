import { render, screen } from '@testing-library/react';
import { HomeSection } from './homeSection';

describe('HomeSection', () => {
    it('renders correctly', () => {
        render(<HomeSection />);

        expect(screen.getByText("I'm sayyyyyy")).toBeInTheDocument();
        expect(screen.getByText('WEB ENGINEER')).toBeInTheDocument();

        const iconImage = screen.getByAltText('usericon');
        expect(iconImage).toBeInTheDocument();
        expect(iconImage).toHaveAttribute('src', 'images/sayy.png');
    });
});
