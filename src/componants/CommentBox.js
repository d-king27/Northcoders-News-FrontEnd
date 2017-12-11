import React from 'react';

class CommentBox extends React.Component{
    constructor(props){
        super(props)
        this.getBoolean = this.getBoolean.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.state ={
            comment:''
        }
    
      }    

    handleChange(event){
        const value = event.target.value
        this.setState({
          comment:value
        })
      }

    getBoolean(input){
        if(this.state.comment.length > 0 ){return input}
        else return input + ' disabled'
      }
   
  render(){
      return(<div>
      <div className="row">
          <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea"  value={this.state.comment} placeholder='Write Comment...' onChange={this.handleChange} ></textarea>
        </div>
      </div>
      </form>
      </div>
      
      <button className={this.getBoolean('btn waves-effect waves-light red')} onClick={this.props.handlePostClick(this.state.comment)} type="submit" name="action">Post Comment
      </button>
      </div>
      )}  
}

export default CommentBox