import * as types from './types';
import axios from 'axios';


export const toggleTest = () => ({
  type: types.TOGGLE_TEST
});



const API_URL = 'https://northcoders-news-api.herokuapp.com/api';

export const fetchArticlesRequest = () => ({
  type: types.FETCH_ARTICLES_REQUEST
});

export const fetchArticlesSuccess = (data) => ({
  type: types.FETCH_ARTICLES_SUCCESS,
  payload: data
});

export const fetchArticlesFailure = (error) => ({
  type: types.FETCH_ARTICLES_FAILURE,
  payload: error
});


export default (p1,p2,p3) => {
  return (dispatch) => {
    let url =''
    if(p2 && p3){
      url = `${p1}/${p2}/${p3}`
    }
    if(p2 && p3===undefined){
    url =`${p1}/${p2}`  
    }
    if(p2 === undefined && p3===undefined){
      url =`${p1}`  
      }
    
    dispatch(fetchArticlesRequest());
    return axios.get(`${API_URL}/${url}`)
      .then(res => {
        dispatch(fetchArticlesSuccess(res.data.articles));
      })
      .catch(error => {
        dispatch(fetchArticlesFailure(error.message));
      });
  };
};




