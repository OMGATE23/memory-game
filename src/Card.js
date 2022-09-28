import './Card.css'

export default function Card({card, handleChoice, flipped, disable}) {

    function clickHandler(){
        if(!disable){
            handleChoice(card)
        }
    }
  return (
    <div className='card'>
        <div className={flipped ? 'flipped' : ""}>
            <img src= {card.src} alt='front' className='front'/>
            <img 
                src= './project-images/resized-cover-image.jpg' 
                alt='back'
                onClick={clickHandler}
                className ="back"
            />
        </div>
    </div>
  )
}
