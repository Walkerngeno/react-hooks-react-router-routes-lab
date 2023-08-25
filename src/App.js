import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Movies from './components/Movies';
import Directors from './components/Directors';
import Actors from './components/Actors';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path="/movies" component={Movies} />
        <Route path="/directors" component={Directors} />
        <Route path="/actors" component={Actors} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;