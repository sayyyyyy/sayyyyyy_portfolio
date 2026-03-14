import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

describe('App Component', () => {
    it('renders without crashing and displays header items', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        // HeaderComponentの中の "SKILL" というテキストが表示されているか確認
        const skillElement = screen.getAllByText(/SKILL/i)[0]; // desktopとmobileの両方でレンダリングされている可能性があるため
        expect(skillElement).toBeInTheDocument();
    });
});
