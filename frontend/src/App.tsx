import React from 'react';
import './App.css';

// Componentの読み込み
import { HeaderComponent } from '../src/components/headerComponent'
import { HomeComponent } from './components/homeComponent';
import { WorkComponent } from './components/workComponent';
import { HistoryComponent } from './components/historyComponent';
import { SnsComponent } from './components/snsComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />

      <HomeComponent />
      <WorkComponent />
      <HistoryComponent />
      <SnsComponent />
    </div>
  );
}

export default App;
