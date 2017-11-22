import * as types from './types';


import axios from 'axios';

const API_URL = 'https://northcoders-news-api.herokuapp.com/api';

export const putVoteCommentsRequest = () => ({
  type: types.PUT_VOTECOMMENTS_REQUEST
});

export const putVoteCommentsSuccess = (id, vote) => ({
  type: types.PUT_VOTECOMMENTS_SUCCESS,
  payload: [id, vote]

});

export const putVoteCommentsFailure = (error) => ({
  type: types.PUT_VOTECOMMENTS_FAILURE,
  payload: error
});

export default (id, vote) => {
  var o = ""
  if (vote) {
    o = "up";
  }
  if(!vote) {
    o = "down";
  }
  return (dispatch) => {
       
    dispatch(putVoteCommentsRequest());
    return axios.put(`${API_URL}/comments/${id}?vote=${o}`)
      .then(() => {
        dispatch(putVoteCommentsSuccess(id, vote));
      })
      .catch(error => {
        dispatch(putVoteCommentsFailure(error.message));
      });
  };
};

