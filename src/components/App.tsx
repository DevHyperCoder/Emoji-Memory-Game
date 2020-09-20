import React from 'react';
import './App.css';
import SquareList from './SquareList';

function App() {
  return (
    <div>
      <h1>Emoji Memory Game</h1>
      <SquareList emojis={['😻','🐇']}></SquareList>
    </div>
  );
}

export default App;
