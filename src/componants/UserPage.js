/* eslint-disable  no-unused-vars */
/* eslint-disable  no-console */
import React from 'react';
import axios from 'axios';
import ArticleCard from './ArticleCard';
import fetchArticles from '../actions/articles';
import {connect} from 'react-redux';

class UserPage extends React.Component {
    constructor(props){
        super(props); 
        this.renderArticles = this.renderArticles.bind(this);
        this.fetchUser = this.fetchUser.bind(this);
        this.state = {
            user:{} 
        };
    }

    componentDidMount(){
        this.props.fetchArticles('articles');
        this.fetchUser();
        
    }
    fetchUser(){
        let that = this;
        axios.get(`https://nc-news-api-dk.herokuapp.com/api/users/${this.props.match.params.username}`)
            .then((user)=>{
                that.setState({user:user.data});
            })
            .catch(console.log);

    } 

    renderArticles(arr,user){
        if(this.props.loading === true){
            return <div className="preloader-wrapper active">
                <div className="spinner-layer spinner-red-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>;
        }
        const filtered= arr.filter((item)=>{
            return item.created_by === user;

        });
        return filtered.map(function(item){
            return <div className='section'>
                <ArticleCard key={item._id} title ={item.title} body ={item.body} articleId = {item._id} articleVotes = {item.votes} user ={item.created_by}/>
            </div>;

        });

    }

    render(){

        const style = {
            paddingLeft: 0,
            listStyle: 'none',
            color:'black',
            fontSize: '3em',
            fontWeight: 'bold',
            fontFamily: 'Courier'
        };
        return <div>
            <h3 style={style} className='flow-text'>{this.props.match.params.username}</h3>
            <p className='flow-text' style={style}>Articles by {this.props.match.params.username}:</p>
            {this.renderArticles(this.props.articles,this.props.match.params.username)}
        </div>;
    }
}

const mapStateToProps = state => ({
    articles: state.articles.data,
    loading: state.articles.loading,
    error: state.articles.error
});
    
const mapDispatchToProps = dispatch => ({
    fetchArticles: (path1,path2,path3) => {
        dispatch(fetchArticles(path1,path2,path3));
    }
});
    
export default connect(mapStateToProps, mapDispatchToProps)(UserPage);