import { combineReducers } from 'redux';
import * as ActionTypes from 'constants/actionTypes';
import guid from 'utils/guid';

function gameReducer(state=[], action) {
  console.log('action type', action.type, ActionTypes.GAME_ADD);
  switch(action.type) {
  case ActionTypes.GAME_ADD:
    console.log('adding game');
    // shape should really be a more like
    // { gamesMap, gameList }
    return [...state, {
      activePlayerId: action.pid,
      playerList: [action.pid],
      gameId: action.gid,
      isStarted: false
    }];

  case ActionTypes.GAME_JOIN:
    console.log('joining game');
    // find game by id
    // add the player to the player list
    // state.games[action.gid].players.push(action.pid)
    return state;

  default:
    return state;
  }
}

function userReducer(state={ cid: guid()}, action) {
  switch (action.type) {

  default:
    return state;
  }
}

const rootReducer = combineReducers({
  userReducer,
  gameReducer,
});

export default rootReducer;
