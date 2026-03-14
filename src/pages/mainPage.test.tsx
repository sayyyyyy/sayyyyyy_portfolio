import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MainPage } from './mainPage';

describe('MainPage', () => {
    it('renders correctly and includes major sections', () => {
        // IntersectionObserver is used in some animations/scrolls typically, so we mock it if needed.
        // However, in this project structure it seems simple render is enough.
        render(
            <BrowserRouter>
                <MainPage />
            </BrowserRouter>
        );

        // HomeSection の内容の確認
        expect(screen.getByText("I'm sayyyyyy")).toBeInTheDocument();

        // SkillSection の内容の確認
        expect(screen.getByText('SKILL')).toBeInTheDocument();
        expect(screen.getByText('WebFrontEnd')).toBeInTheDocument();

        // WorkSection の内容の確認
        expect(screen.getByText('WORK')).toBeInTheDocument();

        // HistorySection の内容の確認
        expect(screen.getByText('HISTORY')).toBeInTheDocument();

        // SnsSection の内容の確認
        expect(screen.getByText('SNS')).toBeInTheDocument();
    });
});
