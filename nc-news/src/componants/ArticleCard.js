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
         <p>{this.props.title}</p>
         <p>{this.props.articleVotes}</p>
         <p>{this.props.user}</p>
         <Link to={`/articles/${this.props.articleId}`}>link to {this.props.title}</Link>
        </div>
      );
    }
  }

  export default ArticleCard