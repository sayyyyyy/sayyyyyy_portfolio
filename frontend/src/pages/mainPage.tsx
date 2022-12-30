// Componentの読み込み
import { HomeSection } from '../sections/homeSection';
import { SkillSection } from '../sections/skillSection';
import { WorkSection } from '../sections/workSection';
import { HistorySection } from '../sections/historySection';
import { SnsSection } from '../sections/snsSection';

export const MainPage = () => {
  return (
    <div>
      <HomeSection />
      <SkillSection />
      <WorkSection />
      <HistorySection />
      <SnsSection />
    </div>
  );
}