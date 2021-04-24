import React, { useState } from 'react';
import './App.scss';
import {
  Jumbotron,
  Button
} from 'reactstrap';
import getJoke from '../helpers/data/jokeData';
import 'bootstrap/dist/css/bootstrap.min.css';
import jokeIcon from '../images/jokeIcon.png';

function App() {
  const [singleJoke, setSingleJoke] = useState([]);
  const [showPunchline, setShowPunchline] = useState(true);

  const handleClick = () => {
    if (showPunchline) {
      getJoke()
        .then((setup) => {
          setSingleJoke(setup);
        });
      setShowPunchline(false);
    } else {
      setShowPunchline(true);
    }
  };

  return (
    <div className='App'>
      <Jumbotron style={{ backgroundImage: `url(${jokeIcon})`, backgroundSize: 'cover' }}>
        <h1 className="display-3">Joke Generator</h1>
        <p className="lead">{singleJoke.setup}</p>
        <hr className="my-2" />
        <p>{showPunchline && singleJoke.punchline}</p>
        <p className="lead">
        <Button color="info" onClick={handleClick}>
        {showPunchline ? 'Get A Joke' : 'Answer' }
      </Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default App;
