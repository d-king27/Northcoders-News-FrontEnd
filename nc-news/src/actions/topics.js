import * as types from './types';


import axios from 'axios';

const API_URL = 'https://nc-news-api-dk.herokuapp.com/api';

export const fetchTopicsRequest = () => ({
  type: types.FETCH_TOPICS_REQUEST
});

export const fetchTopicsSuccess = (data) => ({
  type: types.FETCH_TOPICS_SUCCESS,
  payload: data
});

export const fetchTopicsFailure = (error) => ({
  type: types.FETCH_TOPICS_FAILURE,
  payload: error
});


export default () => {
  return (dispatch) => {
       
    dispatch(fetchTopicsRequest());
    return axios.get(`${API_URL}/topics`)
      .then(res => {
        dispatch(fetchTopicsSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchTopicsFailure(error.message));
      });
  };
};




