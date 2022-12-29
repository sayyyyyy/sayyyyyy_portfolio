import React from 'react';
import './App.css';

// Componentの読み込み
import { HeaderComponent } from '../src/components/headerComponent'
import { HomeComponent } from './components/homeComponent';
import { WorkComponent } from './components/workComponent';

function App() {
  return (
    <div className="App">
      <p className='underline'>hello world</p>
      <HeaderComponent></HeaderComponent>
      <HomeComponent></HomeComponent>
      <WorkComponent></WorkComponent>
    </div>
  );
}

export default App;
