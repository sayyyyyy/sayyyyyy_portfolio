import React from 'react';
import './App.css';

// Componentの読み込み
import { HeaderComponent } from '../src/components/headerComponent'

function App() {
  return (
    <div className="App">
      <p className='underline'>hello world</p>
      <HeaderComponent></HeaderComponent>
    </div>
  );
}

export default App;
