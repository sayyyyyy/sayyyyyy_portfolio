import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HistorySection } from './historySection';

describe('HistorySection', () => {
    it('renders history overview correctly', () => {
        render(
            <BrowserRouter>
                <HistorySection />
            </BrowserRouter>
        );

        expect(screen.getByText('HISTORY')).toBeInTheDocument();
        expect(screen.getByText('プログラミングを始める')).toBeInTheDocument();
        // リンクが「もっと見る」として存在するか確認
        expect(screen.getByText('すべて見る ＞')).toBeInTheDocument();
    });
});
