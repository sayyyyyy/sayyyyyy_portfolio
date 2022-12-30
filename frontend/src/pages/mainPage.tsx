// Componentの読み込み
import { HomeComponent } from '../components/homeComponent';
import { SkillComponent } from '../components/skillComponent';
import { WorkComponent } from '../components/workComponent';
import { HistoryComponent } from '../components/historyComponent';
import { SnsComponent } from '../components/snsComponent';

export const MainPage = () => {
  return (
    <div>
      <HomeComponent />
      <SkillComponent />
      <WorkComponent />
      <HistoryComponent />
      <SnsComponent />
    </div>
  );
}