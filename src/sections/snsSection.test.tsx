import { render, screen } from '@testing-library/react';
import { SnsSection } from './snsSection';

describe('SnsSection', () => {
    it('renders correctly', () => {
        // コンポーネントのレンダリング
        render(<SnsSection />);

        // タイトルの確認
        expect(screen.getByText('SNS')).toBeInTheDocument();

        // 全てのLink(Aタグ)を取得
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(4);

        // 順番にhref属性を検証 (Twitter, Qiita, GitHub, Zenn)
        expect(links[0]).toHaveAttribute('href', 'https://twitter.com/sayyyyyy46');
        expect(links[1]).toHaveAttribute('href', 'https://qiita.com/sayyyyyy');
        expect(links[2]).toHaveAttribute('href', 'https://github.com/sayyyyyy');
        expect(links[3]).toHaveAttribute('href', 'https://zenn.dev/sayyyyyy');

        // パスとテキストの検証
        expect(screen.getByAltText('Twitter icon')).toBeInTheDocument();
        expect(screen.getByAltText('Qiita icon')).toBeInTheDocument();
        expect(screen.getByAltText('GitHub icon')).toBeInTheDocument();
        expect(screen.getByAltText('Zenn icon')).toBeInTheDocument();
    });
});
