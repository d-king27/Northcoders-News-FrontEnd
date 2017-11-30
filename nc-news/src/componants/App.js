import React from 'react';
import NavBar from './NavBar'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';



class App extends React.Component {
  render () {
    return (
      <section className='card-panel  grey lighten-4'>
        <div id='App' className='card-panel'>
          <NavBar/>     
        </div>
      </section>
    );
  }
}

export default App;
