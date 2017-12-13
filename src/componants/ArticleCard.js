/* eslint-disable  no-unused-vars */
import React from 'react';
import {
    Link
} from 'react-router-dom';
class ArticleCard extends React.Component {
    render () {
        const styleL = {
            paddingLeft: 0,
            listStyle: 'none',
            color:'red',
            fontSize: '2em',
            align:'center',
            fontWeight: 'bold',
            textDecoration: 'underline',
            fontFamily:'Courier'

        };
        const styleT = {
            margin: '0.5em',
            paddingLeft: 0,
            listStyle: 'none',
            color:'black',
            fontSize: '30px',
            fontFamily:'Courier'
        };

        const styleU = {
            margin: '0.5em',
            paddingLeft: 0,
            listStyle: 'none',
            color:'black',
            textDecoration: 'underline',
            fontSize: '30px',
            fontFamily:'Courier'
        };
        return (
            <div className='left-align z-depth-2 hoverable'>
                <Link style={styleL} className='flow-text'to={`/articles/${this.props.articleId}`}>{this.props.title}</Link>
                <p style={styleT} className='flow-text'>Votes: {this.props.articleVotes}</p>
                <Link style={styleU} className='flow-text'to={`/user/${this.props.user}`}>Author: {this.props.user}</Link>
         
            </div>
        );
    }
}


export default ArticleCard;