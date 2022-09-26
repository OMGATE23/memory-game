import './App.css';
import { useEffect, useState } from 'react';

const cardImages = [
  { src : './project-images/image-1.png'},
  { src : './project-images/image-2.png'},
  { src : './project-images/image-3.png'},
  { src : './project-images/image-4.png'},
  { src : './project-images/image-5.png'},
  { src : './project-images/image-6.png'}
]


function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  function shuffleCards(){
    let cardList = [...cardImages, ...cardImages]
    console.log(cardList)

    cardList
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))

     console.log(cardList)
  }

  useEffect(() => {
    shuffleCards()
  })
  return (
    <div>
      <h1>Memory game</h1>
      <button onClick={shuffleCards}>Start new game</button>
    </div>
  );
}

export default App;
