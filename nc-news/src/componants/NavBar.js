import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link
  } from 'react-router-dom';
import MostPop from './MostPop'
import TopicPage from './TopicsPage'
import Article from './Article'
import Topics from './Topics'

class NavBar extends React.Component {
    render () {
      return (
        <Router>
<div>
        <nav className="navbar navbar-dark bg-dark">
        <Link className="title" to="/">Home</Link> ***** <Link className="title" to="/topics">topics</Link>
      </nav>
      <Route exact path="/" component={MostPop} />
      <Route path="/articles/:id" component={Article} />
      <Route exact path="/topics" component={Topics} />
      <Route path="/topics/:id" component={TopicPage} />
      </div>
      </Router>
      );
    }
  }

  export default NavBar