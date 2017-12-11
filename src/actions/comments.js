import * as types from './types';


import axios from 'axios';

const API_URL = 'https://nc-news-api-dk.herokuapp.com/api';

export const fetchCommentsRequest = () => ({
  type: types.FETCH_COMMENTS_REQUEST
});

export const fetchCommentsSuccess = (data) => ({
  type: types.FETCH_COMMENTS_SUCCESS,
  payload: data
});

export const fetchCommentsFailure = (error) => ({
  type: types.FETCH_COMMENTS_FAILURE,
  payload: error
});


export default (id) => {
  return (dispatch) => {
       
    dispatch(fetchCommentsRequest());
    return axios.get(`${API_URL}/articles/${id}/comments`)
      .then(res => {
        dispatch(fetchCommentsSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchCommentsFailure(error.message));
      });
  };
};


