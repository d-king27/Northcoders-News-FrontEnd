import { expect } from 'chai';
import topicsRedcuer from '../reducers/topics';
import * as actionCreators from '../actions/topics';
console.log(actionCreators)
function genPrevStat() {
    return  {
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
            const newState = topicsRedcuer(prevState, action);
            expect(newState).to.equal(prevState);
        });
        it('uses the initial state if no previous state is passed', () => {
            const prevState = genPrevStat();
            const action = { type: 'whatever' };
            const newState = topicsRedcuer(undefined, action);
            expect(newState).to.eql(prevState);
        });
    });
    describe('handles FETCH_TOPICS_REQUEST action', () => {
        it('', () => {
            let newState;
            const action = actionCreators.fetchTopicsRequest();
            newState = topicsRedcuer(undefined, action);
            expect(newState).to.eql({
                loading: true,
                error: null,
                data: []
              });

        });
    });
});