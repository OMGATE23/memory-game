import './App.css';
import { useState } from 'react';

const cardImages = [
  { src : './project-images/cover.png'},
  { src : './project-images/image-1.png'},
  { src : './project-images/image-2.png'},
  { src : './project-images/image-3.png'},
  { src : './project-images/image-4.png'},
  { src : './project-images/image-5.png'},
  { src : './project-images/image-6.png'}
]


function App() {
  return (
    <div>
      <h1>Memory game</h1>
      <button>Start new game</button>
    </div>
  );
}

export default App;
