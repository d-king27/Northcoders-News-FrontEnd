import {expect} from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import voteComments, {
  putVoteCommentsRequest, putVoteCommentsSuccess, putVoteCommentsFailure
} from '../actions/voteComments';

import {API_URL} from '../config'
const id = "5a2e02"

const mockStore = configureMockStore([thunk]);

describe('async action creators', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe('voteComments', () => {
    it('dispatches PUT_VOTECOMMENTS_SUCCESS when fetching Comments reponds with 200 and data', () => {
      nock(API_URL)
        .put(`/comments/${id}?votes=UP`)
        .reply(200, [id,true]);
      
      const expectedActions = [
        putVoteCommentsRequest(),
        putVoteCommentsSuccess(id,true)
      ];

      const store = mockStore();

      return store.dispatch(voteComments(id,true))
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
    it('dispatches PUT_VOTECOMMENTS_FAILURE when fetching Comments reponds with an error', () => {
      nock(API_URL)
        .put(`/comments/${id}?votes=UP`)
        .replyWithError({'message': 'error'});
      
      const expectedActions = [
        putVoteCommentsRequest(),
        putVoteCommentsFailure('error')
      ];

      const store = mockStore();

      return store.dispatch(voteComments(id,true))
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
  });
});