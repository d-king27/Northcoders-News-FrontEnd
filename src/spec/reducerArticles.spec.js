/* eslint-env node, mocha */
/* eslint-disable  no-console */
import { expect } from 'chai';
import articleRedcuer from '../reducers/articles';
import * as actionCreators from '../actions/articles';

function genPrevStat() {
    return {
        loading: false,
        error: null,
        data: []
    };
}
describe('ARTICLE reducer', () => {
    describe('default behaviour', () => {
        it('returns the passed previous state if an unrecognised action is passed', () => {
            const prevState = genPrevStat();
            const action = { type: 'whatever' };
            const newState = articleRedcuer(prevState, action);
            expect(newState).to.equal(prevState);
        });
        it('uses the initial state if no previous state is passed', () => {
            const prevState = genPrevStat();
            const action = { type: 'whatever' };
            const newState = articleRedcuer(undefined, action);
            expect(newState===prevState).to.equal(false);
            expect(newState).to.eql(prevState);
        });
    });
    describe('handles FETCH_ARTICLE_REQUEST action', () => {
        it('', () => {
            const prevState = genPrevStat();
            let newState;
            const action = actionCreators.fetchArticlesRequest();
            newState = articleRedcuer(undefined, action);
            expect(newState===prevState).to.equal(false);
            expect(newState).to.eql({
                loading: true,
                error: null,
                data: []
            });

        });
    });
});
