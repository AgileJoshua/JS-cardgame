import React, { Component } from 'react';
import './App.css';
import HighScore from './HighScore/HighScore';
import Game from './Game/Game';

import { BrowserRouter as Router, Route, Link }
  from 'react-router-dom'

class App extends Component {


  render() {

    return (
      <Router>
        <div className="App">
          <Link to="/">Play Game</Link>
          <Link to="/highscore">View High Scores</Link>

          <section>
            <Route exact path="/" component={Game} />
            <Route path="/highscore" component={HighScore} />
          </section>

        </div>
      </Router>

    );
  }
}

export default App;
