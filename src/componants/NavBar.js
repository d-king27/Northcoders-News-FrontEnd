/* eslint-disable  no-unused-vars */
import React from 'react';
import {Link} from 'react-router-dom';
import fetchTopics from '../actions/topics';
import {connect} from 'react-redux';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.renderTopics = this.renderTopics.bind(this);


    }

    componentDidMount(){
        this.props.fetchTopics();
    
    }


    renderTopics(topics){
        const style = {fontFamily:'Courier'};
        return topics.map(function(item){
            return <Link key={item.slug}style={style} className='col s3 flow-text black' to={`/topics/${item.slug}`} replace>{item.title}</Link>;
        }); 

    }
    render () {
        const style = {fontFamily:'Courier'};
        return (
            <div className='row'>
                <nav className="center-align navbar red lighten-2">
                    <Link  style={style} className="col s3 flow-text black" to="/" replace>Home</Link>{this.renderTopics(this.props.topics)}
                </nav>
      
            </div>
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
