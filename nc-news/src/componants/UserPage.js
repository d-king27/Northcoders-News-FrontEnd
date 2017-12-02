import React from 'react';
import ArticleCard from './ArticleCard'
import fetchArticles from '../actions/articles'
import {connect} from 'react-redux';

class UserPage extends React.Component {
    constructor(props){
      super(props) 
      this.renderArticles = this.renderArticles.bind(this) 
    }


componentDidMount(){
    this.props.fetchArticles('articles')
        
  }

renderArticles(arr,user){
    const filtered= arr.filter((item)=>{
       return item.created_by === user

    })
    return filtered.map(function(item){
      return <div className='section'>
      <ArticleCard title ={item.title} body ={item.body} articleId = {item._id} articleVotes = {item.votes} user ={item.created_by}/>
      </div>

    })

}

render(){
    return <div>
    <h3>{this.props.match.params.username}</h3>
    <p>articles by {this.props.match.params.username}</p>
    {this.renderArticles(this.props.articles,this.props.match.params.username)}
</div>
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