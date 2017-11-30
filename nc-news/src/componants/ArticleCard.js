import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link
  } from 'react-router-dom';
class ArticleCard extends React.Component {
    render () {
      return (
        <div className='left-align z-depth-2 '>
         <Link className='flow-text'to={`/articles/${this.props.articleId}`}>{this.props.title}</Link>
         <p className='flow-text'>Votes: {this.props.articleVotes}</p>
         <p className='flow-text'>Author:{this.props.user}</p>
         
        </div>
      );
    }
  }

  export default ArticleCard