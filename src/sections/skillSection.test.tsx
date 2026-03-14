import { render, screen } from '@testing-library/react';
import { SkillSection } from './skillSection';

describe('SkillSection', () => {
    it('renders all skill categories', () => {
        render(<SkillSection />);

        // カテゴリの見出しが表示されているか
        expect(screen.getByText('SKILL')).toBeInTheDocument(); // タイトル
        expect(screen.getByText('WebFrontEnd')).toBeInTheDocument();
        expect(screen.getByText('WebBackEnd')).toBeInTheDocument();
        expect(screen.getByText('Game')).toBeInTheDocument();
        expect(screen.getByText('Mobile')).toBeInTheDocument();
        expect(screen.getByText('Others')).toBeInTheDocument();

        // 固有のスキルが含まれているか
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('Python')).toBeInTheDocument();
        expect(screen.getByText('Unity')).toBeInTheDocument();
        expect(screen.getByText('Flutter')).toBeInTheDocument();
        expect(screen.getByText('Docker')).toBeInTheDocument();
    });
});
