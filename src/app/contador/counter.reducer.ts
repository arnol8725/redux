
import { Action } from '@ngrx/store';
import { ActionTypes, actions } from './counter.actions';
 
export const initialState = 0;
 
export function counterReducer(state = initialState, action: actions) {
  switch (action.type) {
    case ActionTypes.Increment:
      return state + 1;
 
    case ActionTypes.Decrement:
      return state - 1;
    case ActionTypes.Mult:
      return state * 2;
    case ActionTypes.Div:
      return state / action.payload;
    case ActionTypes.Reset:
      return 0;
 
    default:
      return state;
  }
}