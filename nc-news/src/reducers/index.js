import {combineReducers} from 'redux';

import test from './test';
import articles from './articles';
import topics from './topics';
import comments from './comments';


const reducer = combineReducers({
  test, articles,topics, comments
});

export default reducer;
