import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link
  } from 'react-router-dom';
import MostPop from './MostPop'
import TopicPage from './TopicsPage'
import Article from './Article'
import Topics from './Topics'
import fetchTopics from '../actions/topics'
import {connect} from 'react-redux';

class NavBar extends React.Component {
  constructor(props){
    super(props)
    this.renderTopics = this.renderTopics.bind(this)


  }

  componentDidMount(){
    this.props.fetchTopics()
    
}


renderTopics(topics){
  return topics.map(function(item){
      return <span> ***** <Link to={`/${item.slug}`} replace>{item.slug}</Link> </span>
  }) 

}
    render () {
      return (
        <Router>
<div>
        <nav className="navbar navbar-dark bg-dark">
        <Link className="title" to="/" replace>Home</Link>{this.renderTopics(this.props.topics)}
      </nav>
      <Route exact path="/" component={MostPop} />
      <Route path="/articles/:id" component={Article} />
      <Route exact path="/topics" component={Topics} />
      <Route path="/:id" component={TopicPage} />
      </div>
      </Router>
      );
    }
  }


  const mapStateToProps = state => ({
    topics: state.topics.data,
    loading: state.topics.loading,
    error: state.topics.error
  });
  
  const mapDispatchToProps = dispatch => ({
    fetchTopics: () => {
      dispatch(fetchTopics());
    }
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
