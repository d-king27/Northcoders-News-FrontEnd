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
  componentWillReceiveProps(Props){
    var p2 =Props.match.params.id
    if(Props.location.pathname !== this.props.location.pathname)
      {this.props.fetchArticles('topics',p2,'articles')}
  }   

    renderArticles(arr){
return arr.map(function(item){
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
        <h1 style={style} className = 'title left-align'>{this.props.match.params.id[0].toUpperCase() + this.props.match.params.id.slice(1)}</h1>
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