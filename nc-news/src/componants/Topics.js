// import React from 'react';
// import ArticleCard from './ArticleCard'
// import fetchTopics from '../actions/topics'
// import {connect} from 'react-redux';
// import {
//     Link
//   } from 'react-router-dom';
  

// class Topics extends React.Component{
// constructor(props){
//     super(props)
//     this.renderTopics = this.renderTopics.bind(this)
// }
// componentDidMount(){
//     this.props.fetchTopics()
    
// }

// renderTopics(topics){
//    return topics.map(function(item){
//        return <div><h4>{item.title}</h4>
//        <Link to={`topics/${item.slug}`}>link to:{item.slug} articles </Link>
//        </div>
//    }) 

// }
// render () {
//     return (
//       <div className =''>
//       <h1 className = 'title'>Topics</h1>
//      {this.renderTopics(this.props.topics)}
//     </div>
//     );
//   }
// }



// const mapStateToProps = state => ({
//     topics: state.topics.data,
//     loading: state.topics.loading,
//     error: state.topics.error
//   });
  
//   const mapDispatchToProps = dispatch => ({
//     fetchTopics: () => {
//       dispatch(fetchTopics());
//     }
//   });
  
//   export default connect(mapStateToProps, mapDispatchToProps)(Topics);