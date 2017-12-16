/* eslint-env node, mocha */
/* eslint-disable  no-console */
import { expect } from 'chai';
import commentsRedcuer from '../reducers/comments';
import * as actionCreators from '../actions/comments';

function genPrevStat() {
    return  {
        loading: false,
        error: null,
        data: []
    };
}
describe('COMMENT reducer', () => {
    describe('default behaviour', () => {
        it('returns the passed previous state if an unrecognised action is passed', () => {
            const prevState = genPrevStat();
            const action = { type: 'whatever' };
            const newState = commentsRedcuer(prevState, action);
            expect(newState).to.equal(prevState);
        });
        it('uses the initial state if no previous state is passed', () => {
            const prevState = genPrevStat();
            const action = { type: 'whatever' };
            const newState = commentsRedcuer(undefined, action);
            expect(newState===prevState).to.equal(false);
            expect(newState).to.eql(prevState);
        });
    });
    describe('handles FETCH_COMMENTS_REQUEST action', () => {
        it('', () => {
            const prevState = genPrevStat();
            let newState;
            const action = actionCreators.fetchCommentsRequest();
            newState = commentsRedcuer(undefined, action);
            expect(newState===prevState).to.equal(false);
            expect(newState).to.eql({
                loading: true,
                error: null,
                data: []
            });

        });
    });
});