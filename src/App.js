import React, { useState } from 'react';
import './styles/App.css';
import mushroom from './images/happy_mushroom.png'

function App() {
  const [answer, displayAnswer] = useState(false);
  let answerText = answer ? <h2>He was a fungi!!</h2> : ""
  let button = answer ? "" : <button onClick={() => displayAnswer(true)}>Tell Me!</button>
  return (
    <div className="App">
      <h1> Why did the mushroom go to the party?</h1>
      {button}
      {answerText}
      <img src={mushroom}/>
    </div>
  );
}

export default App;
