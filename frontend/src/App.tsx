import React from 'react';
import './App.css';

// Componentの読み込み
import { HeaderComponent } from '../src/components/headerComponent'
import { HomeComponent  } from './components/homeComponent';

function App() {
  return (
    <div className="App">
      <p className='underline'>hello world</p>
      <HeaderComponent></HeaderComponent>
      <HomeComponent></HomeComponent>
    </div>
  );
}

export default App;
