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
      <section className='section'>
        <div id='App' className='container'>
          <NavBar/>
      
         

        </div>
      </section>
    );
  }
}

export default App;
