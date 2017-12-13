/* eslint-disable  no-unused-vars */
import React from 'react';
import NavBar from './NavBar';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import MostPop from './MostPop';
import TopicPage from './TopicsPage';
import Article from './Article';
import UserPage from './UserPage';


const App = ()=>{
    return (
        <Router>
            <section className='card-panel  grey lighten-4'>
                <div id='App' className='card-panel'>
                    <NavBar/>  
                    <Route exact path="/" component={MostPop} />
                    <Route path="/articles/:id" component={Article} />
                    <Route path="/topics/:id" component={TopicPage} />
                    <Route path="/user/:username" component={UserPage} />
          
                </div>
            </section>
        </Router> 

    );};


export default App;
