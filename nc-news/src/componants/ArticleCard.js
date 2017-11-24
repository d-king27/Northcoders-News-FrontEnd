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
        <div className='Nav'>
         
         <p>{this.props.title}</p>
         <p>{this.props.body}</p>
         <p>{this.props.articleId}</p>
         <Link to={`/articles/${this.props.articleId}`}>link to {this.props.title}</Link>
        </div>
      );
    }
  }

  export default ArticleCard