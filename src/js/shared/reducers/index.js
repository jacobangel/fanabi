import { combineReducers } from 'redux';
import * as ActionTypes from 'actions';

function noopReducer(state = null, action) {
  return state;
}

const rootReducer = combineReducers({
  noopReducer
});

export default rootReducer;
