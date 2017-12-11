import React from 'react';
import axios from 'axios'
import CommentBox from './CommentBox'
import {connect} from 'react-redux';
import fetchComments from '../actions/comments';
import voteComments from '../actions/voteComments';
import {
  Link
} from 'react-router-dom';

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.getArticle = this.getArticle.bind(this);
    this.renderComments = this.renderComments.bind(this);
    this.genHandleClick = this.genHandleClick.bind(this)
    this.genHandlePostClick = this.genHandlePostClick.bind(this)
    this.handleUpClickArticle = this.handleUpClickArticle.bind(this);
    this.handleDownClickArticle = this.handleDownClickArticle.bind(this);
    this.genDeleteComment = this.genDeleteComment.bind(this)
    this.state = {
      article:null,
      votes: 0
    }

  } 

  componentDidMount() {
    this.props.fetchComments(this.props.match.params.id);
    this.getArticle()
  }

  genHandleClick(id,bool){
    return (event) => {
    this.props.voteButton(id, bool);
    }
  }



  handleUpClickArticle(event) {
    const value = this.state.votes;
    this.setState({
      votes:value+1
    })
    return axios.put(`https://nc-news-api-dk.herokuapp.com/api/articles/${this.props.match.params.id}?votes=UP`)
    .catch((err)=>{
      console.log(err)
    })
  }

  handleDownClickArticle(event) {
    const value = this.state.votes;
    this.setState({
      votes:value-1
    })

    return axios.put(`https://nc-news-api-dk.herokuapp.com/api/articles/${this.props.match.params.id}?votes=DOWN`)
    .catch((err)=>{
      console.log(err)
    })
  }


  genHandlePostClick(comment){
return (event)=>{
  if(comment.length === 0){return}
  let that = this
  event.preventDefault()
  axios.post(`https://nc-news-api-dk.herokuapp.com/api/articles/${this.props.match.params.id}/comments`, {
    "comment": comment
  })
  .then(function (response) {
    that.props.fetchComments(that.props.match.params.id);
    that.setState({comment:''})
  })
  .catch(function (error) {
    console.log(error);
  });

}
   

  }

  genDeleteComment(id){
   return (event)=>{
    let that = this
    event.preventDefault()
    return axios.delete(`https://nc-news-api-dk.herokuapp.com/api/comments/${id}`)
    .then(()=>{
      that.props.fetchComments(this.props.match.params.id);
    })
    .catch((err)=>{
      console.log(err)
    }) 

   } 
  
  }




  renderComments(arr) {
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
    </div>
    }
    const styleV = {
      margin: '0.3em',
      paddingLeft: 0,
      listStyle: 'none',
      color:'black',
      fontWeight:'bold'
    }
    const styleC = {
      margin: '0.3em',
      paddingLeft: 0,
      listStyle: 'none',
      color:'black',
      fontStyle: 'italic'
    }
    const styleB = {
      margin: '0.3em',
      paddingLeft: 0,
      listStyle: 'none'
    }
    return arr.map((item) => {

      return <div className='left-align z-depth-2 hoverable'>
        <p className='flow-text'style={styleC}>{item.body}</p>
        <p className='flow-text'style={styleV}>Posted by: {item.created_by}</p>
        <p className='flow-text'style={styleV}>{item.votes} votes</p>
        <a className="btn-floating btn-large waves-effect waves-light red" style={styleB} onClick={this.genHandleClick(item._id,true)}><i class="material-icons">arrow_upward</i></a>
        <a className="btn-floating btn-large waves-effect waves-light red" style={styleB} onClick={this.genHandleClick(item._id,false)}><i class="material-icons">arrow_downward</i></a>
        <a className="btn-floating btn-large waves-effect waves-light red" style={styleB} onClick={this.genDeleteComment(item._id)} >DEL</a>
      </div>;
    });
  }

 
  getArticle() {
    let that = this
 return axios.get(`https://nc-news-api-dk.herokuapp.com/api/articles/${this.props.match.params.id}`)
 .then((article)=>{
  that.setState({
    article:article.data,
    votes:article.data.votes
  })
})
  .catch(function (error) {
    console.log(error);
  });
  
  }
  

  render () {
    const styleTitle = {
      paddingLeft: 0,
      listStyle: 'none',
      color:'red',
      fontSize: '3em',
      textAlign:'center',
      fontWeight: 'bold',
      fontFamily: "Courier"
    }
    const styleText = {
      paddingLeft: 0,
      listStyle: 'none',
      color:'black',
      fontFamily: "Courier"
    }
    const styleV = {
      margin: '0.5em',
      paddingLeft: 0,
      listStyle: 'none',
      color:'black',
      fontSize: '30px',
      fontFamily:'Courier'
    }

    if(this.state.article===null){
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
    </div>
    }



   else return (
      <div className='Nav'>
        <p style={styleTitle}>{this.state.article.title}</p>
        <Link style={styleText} className='flow-text'to={`/user/${this.state.article.created_by}`}>Author: {this.state.article.created_by}</Link>
        <div className='left-align z-depth-2 '>
        <p className='flow-text' style={styleText}>{this.state.article.body}</p>
        </div>
        <a className="btn-floating btn-large waves-effect waves-light red" onClick={this.handleUpClickArticle}><i class="material-icons">exposure_plus_1</i></a> <a class="btn-floating btn-large waves-effect waves-light red" onClick={this.handleDownClickArticle}><i class="material-icons">exposure_neg_1</i></a> <span className='flow-text' style={styleV}>{this.state.votes}</span> 
         <CommentBox handlePostClick={this.genHandlePostClick}/>
        <p>{this.renderComments(this.props.comments)}</p>
        <p> *** </p>
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    articles: state.articles.data,
    comments: state.comments.data
  };
};

const mapDispatchedToProps = (dispatch) => {
  return {
    fetchComments: (id) => {
      dispatch(fetchComments(id));
    },
    voteButton: (id, vote) => {
      dispatch(voteComments(id, vote));
    }
  };
};

export default connect (mapStateToProps, mapDispatchedToProps) (Article);