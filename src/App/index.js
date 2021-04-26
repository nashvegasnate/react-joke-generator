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
      <Jumbotron style={{
        backgroundImage: `url(${jokeIcon})`,
        backgroundSize: 'cover',
        color: '#DB504A',
        position: 'absolute',
        width: '100%',
        height: '50em'
      }}>
        <h4 className="display-3">Joke Generator</h4>
        <h2 className="lead">{singleJoke.setup}</h2>
        <hr className="my-2" />
        <h2>{showPunchline && singleJoke.punchline}</h2>
        <h2 className="lead">
        <Button color="info" onClick={handleClick}>
        {showPunchline ? 'Get A Joke' : 'Answer' }
      </Button>
        </h2>
      </Jumbotron>
    </div>
  );
}

export default App;
