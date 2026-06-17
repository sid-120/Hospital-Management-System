import React from "react";
import "./App.css";
import {useState} from "react";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {

  const [cards, setCards] = useState([]);

  function createCard(){
    const newCardData = {
      id:Date.now(),
      name:'Siddharth',
      age:26,
      city:'Bengaluru',
      disease:'Headache',
      status:'In progress ⏳'
    }

    setCards([...cards, newCardData]);
  }

  return (
    <>
    <div className='addBtn'>
      <Button title={"Create Card ⊕" } func={createCard}/>
    </div>
      
      <div style={{display:'flex', gap:'10px',flexWrap:'wrap', marginTop:'10px' }}>
        {cards.map((card)=>(<Card
        key={card.key}
        name={card.name}
        age={card.age}
        city={card.city}
        disease={card.disease}
        status={card.status}
        />
        ))}
      </div>
    </>
  );
}

export default App;
