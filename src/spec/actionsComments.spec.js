/* eslint-env node, mocha */
/* eslint-disable  no-console */
import {expect} from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import fetchComments, {
    fetchCommentsRequest, fetchCommentsSuccess, fetchCommentsFailure
} from '../actions/comments';

import {API_URL} from '../config';
const id = '5a26fj';

const mockStore = configureMockStore([thunk]);

describe('async action creators', () => {
    afterEach(() => {
        nock.cleanAll();
    });
    describe('fetchAllComments', () => {
        it('dispatches FETCH_ALL_CCOMMENTS_SUCCESS when fetching Comments reponds with 200 and data', () => {
            nock(API_URL)
                .get(`/articles/${id}/comments`)
                .reply(200, [1, 2, 3]);
      
            const expectedActions = [
                fetchCommentsRequest(),
                fetchCommentsSuccess([1, 2, 3])
            ];

            const store = mockStore();

            return store.dispatch(fetchComments(id))
                .then(() => {
                    expect(store.getActions()).to.eql(expectedActions);
                });
        });
        it('dispatches FETCH_ALL_COMMENTS_FAILURE when fetching Comments reponds with an error', () => {
            nock(API_URL)
                .get(`/articles/${id}/comments`)
                .replyWithError({'message': 'error'});
      
            const expectedActions = [
                fetchCommentsRequest(),
                fetchCommentsFailure('error')
            ];

            const store = mockStore();

            return store.dispatch(fetchComments(id))
                .then(() => {
                    expect(store.getActions()).to.eql(expectedActions);
                });
        });
    });
});