import { GAME_ADD, GAME_JOIN } from 'constants/actionTypes';
import guid from 'utils/guid';

export function addGame(pid) {
  const gid = guid();
  return {
    type: GAME_ADD,
    gid,
    pid,
  }
}

export function joinGame(pid, gid) {
  return {
    type: GAME_JOIN,
    gid,
    pid,
  }
}
