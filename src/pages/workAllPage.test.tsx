import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { WorkAllPage } from './workAllPage';

describe('WorkAllPage', () => {
    it('renders all works correctly', () => {
        render(
            <BrowserRouter>
                <WorkAllPage />
            </BrowserRouter>
        );

        expect(screen.getByText('WORK ALL')).toBeInTheDocument();

        // いくつかの特定の作品名が存在するか確認
        expect(screen.getByText('Knowledge Library')).toBeInTheDocument();
        expect(screen.getByText('Space Shuttle')).toBeInTheDocument();

        // 描画された作品の数を確認 (TitleComponentもh2をレンダリングする可能性があるため注意)
        // 画像にはaltが設定されているのでそれを利用可能
        const workImages = screen.getAllByRole('img');
        expect(workImages.length).toBeGreaterThan(0);
    });
});
