import React from 'react';
import ArticleCard from './ArticleCard'
import fetchArticles from '../actions/articles'
import {connect} from 'react-redux';
import _ from 'underscore'

class MostPop extends React.Component {
  constructor(props){
    super(props)
    this.renderArticles = this.renderArticles.bind(this)

  }

  componentDidMount(){
    this.props.fetchArticles('articles')
        
  }

  renderArticles(arr){
    const ordered = _.sortBy(arr,'votes')
    return ordered.reverse().map(function(item){
      return <div className='section'>
      <ArticleCard title ={item.title} body ={item.body} articleId = {item._id} articleVotes = {item.votes} user ={item.created_by}/>
      </div>

    })



  }
  render () {
    const style = {
      paddingLeft: 0,
      listStyle: 'none',
      color:'black',
      fontSize: '60px',
      fontWeight: 'bold',
      fontFamily: "Courier"
    }
    return (
      <div>
        <h1 className = 'title left-align' style={style}>Most Popular</h1> 
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