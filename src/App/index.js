import React, { useState } from 'react';
import './App.scss';
import { Button } from 'reactstrap';
import getJoke from '../helpers/data/jokeData';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [allJokes, setAllJokes] = useState([]);
  const [singleJoke, setSingleJoke] = useState({});
  const [showPunchline, setShowPunchline] = useState(false);

  const handleClick = () => {
    if (showPunchline) {
      getJoke()
        .then((setup) => {
          setAllJokes(setup);
          setSingleJoke(setup);
        });
      setShowPunchline(false);
      setSingleJoke(allJokes);
    } else {
      setShowPunchline(true);
    }
  };

  return (
    <div className='App'>
      <h2>Joke Generator</h2>
      <h2>{singleJoke.setup}</h2>
      {<Button color="info" onClick={handleClick}>
        {showPunchline ? 'Get Another Joke' : 'Answer' }
      </Button>
      }
      <h5>{showPunchline && singleJoke.punchline}</h5>
    </div>
  );
}

export default App;
