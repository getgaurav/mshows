import React from 'react';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import Footer from './components/Footer';
import TVShows from './components/TvShows';
import Movies from './components/Movies'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      
      <Switch>
         <Route exact path="/" component={HomeScreen}/>
         <Route path="/movies" component={Movies}/>
         <Route path="/tv-shows"component={TVShows}/>
      </Switch>
      <Footer/>
    </Router>
   </div>
  );
}

export default App;
