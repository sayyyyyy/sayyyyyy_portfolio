import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HistoryAllPage } from './historyAllPage';

describe('HistoryAllPage', () => {
    it('renders history timeline correctly', () => {
        render(
            <BrowserRouter>
                <HistoryAllPage />
            </BrowserRouter>
        );

        expect(screen.getByText('History All')).toBeInTheDocument();

        // 年代や内容が含まれているか確認
        expect(screen.getAllByText('2021.03').length).toBeGreaterThan(0);
        expect(screen.getByText('プログラミングを始める')).toBeInTheDocument();
        expect(screen.getByText('技育CAMPハッカソンvol10参加 優秀賞受賞')).toBeInTheDocument();
    });
});
