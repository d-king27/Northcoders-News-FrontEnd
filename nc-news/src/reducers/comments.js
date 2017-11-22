import * as types from '../actions/types';

export const initialState = {
  loading: false,
  error: null,
  data: []
};

export default (prevState = initialState, action) => {
  switch (action.type) {
  case types.FETCH_COMMENTS_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
      data: []
    });
  case types.FETCH_COMMENTS_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });
  case types.FETCH_COMMENTS_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: []
    });
  case types.PUT_VOTECOMMENTS_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
    
    });
  case types.PUT_VOTECOMMENTS_SUCCESS:
    var i = 0;
    var a = prevState.data.reduce(function(acc, item, index) {
      if(item['_id'] === action.payload[0]) {
        i = index;
        Object.assign(acc, item);
      }
      return acc;
    }, {} );
    console.log(a)
    if(action.payload[1] === true) {
      a.votes++;
    }
    else {
      a.votes--;
    }
    var front = prevState.data.slice(0, i);
    var back = prevState.data.slice(i + 1);
    var final = front.concat([a]).concat(back)
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: final
      
    });
  case types.PUT_VOTECOMMENTS_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
          
    });

  default:
    return prevState;
  }
};
