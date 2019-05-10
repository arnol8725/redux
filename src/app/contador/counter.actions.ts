import { Action } from '@ngrx/store';
 
export enum ActionTypes {
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Reset',
  Mult = '[Counter Component] Mult',
  Div = '[Counter Component] Div'
}

/*
        export const iNCREMENTAR = '[Contador] Incrementar';
 */
 
export class Increment implements Action {
  readonly type = ActionTypes.Increment;
}
 
export class Decrement implements Action {
  readonly type = ActionTypes.Decrement;
}
 
export class Reset implements Action {
  readonly type = ActionTypes.Reset;
}
export class Mult implements Action {
    readonly type = ActionTypes.Mult;
  }
export class Div implements Action {
    readonly type = ActionTypes.Div;
    constructor (public payload: number){}
  }

  export type actions = Decrement |
                        Increment |
                        Mult      |
                        Div       |
                        Reset;