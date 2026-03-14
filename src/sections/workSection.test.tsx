import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { WorkSection } from './workSection';

describe('WorkSection', () => {
    it('renders work overview correctly', () => {
        render(
            <BrowserRouter>
                <WorkSection />
            </BrowserRouter>
        );

        expect(screen.getByText('WORK')).toBeInTheDocument();
        expect(screen.getByText('すべて見る ＞')).toBeInTheDocument();

        // いくつかの作品名が含まれているか
        expect(screen.getByText('Knowledge Library')).toBeInTheDocument();
    });
});
