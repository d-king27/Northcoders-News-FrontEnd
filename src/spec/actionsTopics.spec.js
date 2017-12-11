import {expect} from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import fetchTopics, {
  fetchTopicsRequest, fetchTopicsSuccess, fetchTopicsFailure
} from '../actions/topics';

import {API_URL} from '../config'

const mockStore = configureMockStore([thunk]);

describe('async action creators', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  describe('fetchAllTopics', () => {
    it('dispatches FETCH_ALL_TOPICS_SUCCESS when fetching Topics reponds with 200 and data', () => {
      nock(API_URL)
        .get(`/topics`)
        .reply(200, [1, 2, 3]);
      
      const expectedActions = [
        fetchTopicsRequest(),
        fetchTopicsSuccess([1, 2, 3])
      ];

      const store = mockStore();

      return store.dispatch(fetchTopics())
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
    it('dispatches FETCH_ALL_TOPICS_FAILURE when fetching Topics reponds with an error', () => {
      nock(API_URL)
        .get(`/topics`)
        .replyWithError({'message': 'error'});
      
      const expectedActions = [
        fetchTopicsRequest(),
        fetchTopicsFailure('error')
      ];

      const store = mockStore();

      return store.dispatch(fetchTopics())
        .then(() => {
          expect(store.getActions()).to.eql(expectedActions);
        });
    });
  });
});