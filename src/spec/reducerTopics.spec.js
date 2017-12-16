/* eslint-env node, mocha */
/* eslint-disable  no-console */
import { expect } from 'chai';
import topicsRedcuer from '../reducers/topics';
import * as actionCreators from '../actions/topics';

function genPrevStat() {
    return  {
        loading: false,
        error: null,
        data: []
    };
}
describe('TOPIC reducer', () => {
    describe('default behaviour', () => {
        it('returns the passed previous state if an unrecognised action is passed', () => {
            const prevState = genPrevStat();
            const action = { type: 'whatever' };
            const newState = topicsRedcuer(prevState, action);
            expect(newState).to.equal(prevState);
        });
        it('uses the initial state if no previous state is passed', () => {
            const prevState = genPrevStat();
            const action = { type: 'whatever' };
            const newState = topicsRedcuer(undefined, action);
            expect(newState===prevState).to.equal(false);
            expect(newState).to.eql(prevState);
        });
    });
    describe('handles FETCH_TOPICS_REQUEST action', () => {
        it('', () => {
            const prevState = genPrevStat();
            let newState;
            const action = actionCreators.fetchTopicsRequest();
            newState = topicsRedcuer(undefined, action);
            expect(newState===prevState).to.equal(false);
            expect(newState).to.eql({
                loading: true,
                error: null,
                data: []
            });

        });
    });
});