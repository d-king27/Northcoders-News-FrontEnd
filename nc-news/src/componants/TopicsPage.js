import React from 'react';
import ArticleCard from './ArticleCard'
import fetchArticles from '../actions/articles'
import {connect} from 'react-redux';

   
class TopicPage extends React.Component {
    constructor(props){
        super(props)
        this.renderArticles = this.renderArticles.bind(this)

    }

componentDidMount(){
    var p2 = this.props.match.params.id
     this.props.fetchArticles('topics',p2,'articles')
        
    }

    renderArticles(arr){
return arr.map(function(item){
    return <ArticleCard title ={item.title} body ={item.body} articleId = {item._id}/>
})



    }
    render () {
      return (
        <div className =''>
        <h1 className = 'title'>{this.props.match.params.id}</h1>
       <p>*****</p>
       {this.renderArticles(this.props.articles)}
      </div>
      );
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(TopicPage);