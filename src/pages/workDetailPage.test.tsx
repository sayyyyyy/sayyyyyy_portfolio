import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { WorkDetailPage } from './workDetailPage';

describe('WorkDetailPage', () => {
    it('renders work detail from router state correctly', () => {
        const mockState = {
            workSrc: 'test-src.png',
            workTitle: 'Test App',
            workOverview: 'A test overview',
            workObsession: 'Test obsession',
            workSkill: ['React', 'TypeScript'],
            workPeriod: '1 week',
            workLink: 'http://example.com',
            githubLink: 'http://github.com/test',
            workNumOfPeople: 2,
            workResponsibilty: 'Frontend'
        };

        render(
            <MemoryRouter initialEntries={[{ pathname: '/work-detail', state: mockState }]}>
                <Routes>
                    <Route path="/work-detail" element={<WorkDetailPage />} />
                </Routes>
            </MemoryRouter>
        );

        // タイトルと概要が表示されているか確認
        expect(screen.getAllByText('Test App').length).toBeGreaterThan(0);
        expect(screen.getByText('アプリ概要')).toBeInTheDocument();
        expect(screen.getByText('A test overview')).toBeInTheDocument();

        // スキルタグが表示されているか確認
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('TypeScript')).toBeInTheDocument();

        // リンク等の詳細が表示されているか確認
        expect(screen.getByText('アプリリンク')).toBeInTheDocument();
        expect(screen.getByText('http://example.com')).toBeInTheDocument();
        expect(screen.getByText('GitHubリンク')).toBeInTheDocument();
        expect(screen.getByText('http://github.com/test')).toBeInTheDocument();
    });
});
