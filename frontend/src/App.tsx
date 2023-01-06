import './App.css';
import { Routers } from './Routers';


// Componentの読み込み
import { HeaderComponent } from '../src/components/headerComponent'

export const App = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <Routers />
    </div>
  );
}