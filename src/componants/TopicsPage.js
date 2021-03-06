/* eslint-disable  no-unused-vars */
import React from 'react';
import ArticleCard from './ArticleCard';
import fetchArticles from '../actions/articles';
import {connect} from 'react-redux';

   
class TopicPage extends React.Component {
    constructor(props){
        super(props);
        this.renderArticles = this.renderArticles.bind(this);

    }

    componentDidMount(){
        var p2 = this.props.match.params.id;
        this.props.fetchArticles('topics',p2,'articles');
        
    }
    componentWillReceiveProps(Props){
        var p2 =Props.match.params.id;
        if(Props.location.pathname !== this.props.location.pathname)
        {this.props.fetchArticles('topics',p2,'articles');}
    }   

    renderArticles(arr){
        if(this.props.loading === true){
            return <div key={1} className="preloader-wrapper active">
                <div className="spinner-layer spinner-red-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>;
        }
        return arr.map(function(item){
            return <div key={item._id} className='section'>
                <ArticleCard key={item._id} title ={item.title} body ={item.body} articleId = {item._id} articleVotes = {item.votes} user ={item.created_by}/>
            </div>;
        });



    }
    render () {
        const style = {
            paddingLeft: 0,
            listStyle: 'none',
            color:'black',
            fontSize: '60px',
            fontWeight: 'bold',
            fontFamily: 'Courier'
        };
        const imageStyleA ={
            float: 'right',
            width: '300px',
            border: '3px solid',
            padding: '10px',
            backgroundColor: 'black'
        };
        return (
            <div>
                <img className="responsive-img" style={imageStyleA} src="http://i68.tinypic.com/2ywaex5.png" alt="Northcoders" align="right"/>
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