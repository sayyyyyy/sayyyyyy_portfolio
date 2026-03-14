import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HeaderComponent } from './headerComponent';

describe('HeaderComponent', () => {
    it('renders main navigation links', () => {
        render(
            <BrowserRouter>
                <HeaderComponent />
            </BrowserRouter>
        );

        // HashLinkが適切にテキストをレンダリングしているか
        expect(screen.getAllByText('SKILL').length).toBeGreaterThan(0);
        expect(screen.getAllByText('WORK').length).toBeGreaterThan(0);
        expect(screen.getAllByText('HISTORY').length).toBeGreaterThan(0);
        expect(screen.getAllByText('SNS').length).toBeGreaterThan(0);
    });

    it('toggles mobile menu when menu icon is clicked', () => {
        // console.logの出力を抑制する（オプショナル）
        jest.spyOn(console, 'log').mockImplementation(() => { });

        render(
            <BrowserRouter>
                <HeaderComponent />
            </BrowserRouter>
        );

        // メニューアイコンを取得
        const menuIcon = screen.getByAltText('menu');

        // 最初はデスクトップ用のリンクしかない状態 (mobile用は2個目として現れるため数が変化する)
        const initialSkillCount = screen.getAllByText('SKILL').length;

        // アイコンをクリックしてメニューを開く
        fireEvent.click(menuIcon);

        // メニューが開いたことで 'SKILL' という文字が (モバイル用メニューにも) 増えるか確認
        const openSkillCount = screen.getAllByText('SKILL').length;
        expect(openSkillCount).toBeGreaterThan(initialSkillCount);

        // もう一度クリックして閉じる
        fireEvent.click(menuIcon);

        // 戻っているか確認
        const closedSkillCount = screen.getAllByText('SKILL').length;
        expect(closedSkillCount).toBe(initialSkillCount);
    });
});
