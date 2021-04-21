import React, { useState } from 'react';
import {
  Button,
  Popover,
  PopoverHeader,
  PopoverBody
} from 'reactstrap';
import './App.scss';
import getJoke from '../helpers/data/jokeData';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [allJokes, setAllJokes] = useState([]);
  const [singleJoke, setSingleJoke] = useState({});
  const [showPunchline, setShowPunchline] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  const handleClick = () => {
    if (showPunchline) {
      getJoke()
        .then((jokes) => {
          setAllJokes(jokes);
          setSingleJoke(jokes);
        });
      setShowPunchline(false);
      setSingleJoke(allJokes);
    } else {
      setShowPunchline(true);
    }
  };

  return (
    <div className='App'>
      {popoverOpen ? ''
        : <Button color="info" onClick={handleClick}>
        {showPunchline ? 'Get Another Joke' : 'Get a Joke' }
      </Button>
      }
      <h1>{singleJoke.joke}</h1>
      <p>{showPunchline && singleJoke.punchline}</p>
      {showPunchline ? ''
        : <div>
      <Button id="Popover1" type="button">
        Get Punchline
      </Button>
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={toggle}
        trigger="hover"
        >
        <PopoverHeader>Possible Answers</PopoverHeader>
        <PopoverBody>
          <ul>
            {singleJoke.punchlines?.map((pa, i) => <li key={i}>{pa}</li>)}
        </ul>
        </PopoverBody>
      </Popover>
      </div>
      }
    </div>
  );
}

export default App;
