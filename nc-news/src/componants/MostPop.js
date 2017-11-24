import React from 'react';
import ArticleCard from './ArticleCard'
import fetchArticles from '../actions/articles'
import {connect} from 'react-redux';

class MostPop extends React.Component {
  constructor(props){
    super(props)
    this.renderArticles = this.renderArticles.bind(this)

  }

  componentDidMount(){
    this.props.fetchArticles('articles')
        
  }

  renderArticles(arr){
    return arr.map(function(item){
      return <ArticleCard title ={item.title} body ={item.body} articleId = {item._id}/>
    })



  }
  render () {
    return (
      <div className =''>
        <h1 className = 'title'>Most Popular</h1>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(MostPop);