import './App.css';
import { useEffect, useState } from 'react';
import Card from './Card';

const cardImages = [
  { "src" : './project-images/image-1.png', matched: false},
  { "src" : './project-images/image-2.png', matched: false},
  { "src" : './project-images/image-3.png', matched: false},
  { "src" : './project-images/image-4.png', matched: false},
  { "src" : './project-images/image-5.png', matched: false},
  { "src" : './project-images/image-6.png', matched: false}
]


function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disable, setDisable] = useState(false)

  function shuffleCards(){
    let cardList = [...cardImages, ...cardImages]
    cardList
      .sort(() => Math.random() - 0.5)
    
    let finalList = cardList.map((card) => {
      return {...card, id: Math.random()}
    })
      setCards(finalList)

     setTurns(0)
     setChoiceOne(null)
     setChoiceTwo(null)
  }

  function handleChoice(card){
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }


  useEffect(()=>{
    
    if(choiceOne && choiceTwo){
      setDisable(true)
      if(choiceOne.src == choiceTwo.src){
        cards.map(card => {
          if(card.src === choiceOne.src){
            return card.matched = true
          } else return card
        })
        resetValues()
      } else {
        setTimeout(() => resetValues(), 1000)
      }
    }
    
    
  } ,[choiceOne, choiceTwo])

  useEffect(() => {
    shuffleCards()
  }, [])
  
  function resetValues(){
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisable(false)
  }

  return (
    <div>
      <h1>Memory game</h1>
      <button onClick={shuffleCards}>Start new game</button>

      <p>Turns taken: {turns}</p>
      <div className='grid-div'>
         {cards && cards.map((card => (
          <div key={card.id}>
            <Card
              card = {card}
              handleChoice = {handleChoice}
              flipped = {card === choiceOne || card === choiceTwo || card.matched}
              disable = {disable}
            />
          </div>
        )))} 
      </div>
    </div>
  );
}

export default App;
