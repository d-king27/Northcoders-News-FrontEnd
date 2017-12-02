import React from 'react';
import axios from 'axios'
import {connect} from 'react-redux';
import fetchComments from '../actions/comments';
import voteComments from '../actions/voteComments';

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.getArticle = this.getArticle.bind(this);
    this.renderComments = this.renderComments.bind(this);
    this.handleUpClick = this.handleUpClick.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.handleDownClick = this.handleDownClick.bind(this);
    this.handlePostClick = this.handlePostClick.bind(this)
    this.handleUpClickArticle = this.handleUpClickArticle.bind(this);
    this.handleDownClickArticle = this.handleDownClickArticle.bind(this);
    this.state = {
      comment:'',
      votes: this.getArticle(this.props.articles, this.props.match.params.id).votes
    }

  } 

  componentDidMount() {
    this.props.fetchComments(this.props.match.params.id);
  }
  handleUpClick(event) {
    const value = event.target.dataset.value;
    this.props.voteButton(value, true);
  }
  handleDownClick(event) {
    const value = event.target.dataset.value;
    this.props.voteButton(value, false);
  
  }

  handleUpClickArticle(event) {
    let that = this
    const value = this.state.votes;
    axios.put(`http://northcoders-news-api.herokuapp.com/api/articles/${this.props.match.params.id}?vote=up`)
    .then((res)=>{
      that.setState({
        votes:value+1
      })

    })
    .catch((err)=>{
      console.log(err)
    })
  }

  handleDownClickArticle(event) {
    let that = this
    const value = this.state.votes;
    axios.put(`http://northcoders-news-api.herokuapp.com/api/articles/${this.props.match.params.id}?vote=down`)
    .then((res)=>{
      that.setState({
        votes:value-1
      })

    })
    .catch((err)=>{
      console.log(err)
    })
  }


  handleChange(event){
    const value = event.target.value
    this.setState({
      comment:value
    })
  }

  handlePostClick(event){
    if(this.state.comment.length === 0){return}
    let that = this
    event.preventDefault()
    axios.get(`http://northcoders-news-api.herokuapp.com/api/articles/${this.props.match.params.id}/comments`, {
      "comment": that.state.comment
    })
    .then(function (response) {
      that.props.fetchComments(that.props.match.params.id);
    })
    .catch(function (error) {
      console.log(error);
    });

  }


  renderComments(arr) {
    return arr.map((item) => {

      return <div>
        <h4>{item.created_by}</h4>
        <p>{item.body}</p>
        <p>{item.votes} votes</p>
        <button
          data-value={item._id}
          onClick={this.handleUpClick}
        >up</button>
        <button 
        data-value={item._id}
          onClick={this.handleDownClick}
          >down </button>
          *************
      </div>;
    });
  }

  getArticle(arr, id) {
    var a = arr.reduce(function(acc, item) {
      if(item['_id'] === id) {
        Object.assign(acc, item);
      }
      return acc;
    }, {} );
    return a;
    
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
    return (
      <div className='Nav'>
        <p style={styleTitle}>{this.getArticle(this.props.articles, this.props.match.params.id).title}</p>
        <div className='left-align z-depth-2 '>
        <p className='flow-text' style={styleText}>{this.getArticle(this.props.articles, this.props.match.params.id).body}</p>
        </div>
        <a class="btn-floating btn-large waves-effect waves-light red" onClick={this.handleUpClickArticle}><i class="material-icons">+</i></a> <a class="btn-floating btn-large waves-effect waves-light red" onClick={this.handleDownClickArticle}><i class="material-icons">-</i></a> <span className='flow-text' style={styleV}>{this.state.votes}</span> 
        
        <div className="row">
    <form className="col s12">
      <div className="row">
        <div class="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea" placeholder='Write Comment...' onChange={this.handleChange} ></textarea>
        </div>
      </div>
    </form>
  </div>


       <button onClick={this.handlePostClick}>post comment</button>
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