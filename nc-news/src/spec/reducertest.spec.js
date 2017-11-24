import {expect} from 'chai';
import testReducer from '../reducers/test';
import * as actionCreators from '../actions';

describe('reducer', () => {
  describe('default behaviour', () => {
    it('returns the passed previous state if an unrecognised action is passed', () => {
      const prevState = false;
      const action = {type: 'whatever'};
      const newState = testReducer(prevState, action);
      expect(newState).to.equal(prevState);
    });
    it('uses the initial state if no previous state is passed', () => {
      const action = {type: 'whatever'};
      const newState = testReducer(undefined, action);
      expect(newState).to.eql(false);
    });
  });
  describe('handles TOGGLE_TEST action', () => {
    it('flips the state.test boolean', () => {
      let newState;
      const action = actionCreators.toggleTest();
      newState = testReducer(undefined, action);
      expect(newState).to.be.true;
      newState = testReducer(newState, action);
      expect(newState).to.be.false;
    });
  });
});

//fill in the basic componant functinality
//write the action tests
//write the reducer tests
//write the react enzyme tests
//do the css
//add in the custom backend
//check over custom back end
//write readme and host custom back end
// check frontend
// write readme for front end
//fin