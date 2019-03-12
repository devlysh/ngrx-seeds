import {Action} from '@ngrx/store';

export enum AuthActions {
  NAVIGATE_TO_SIGN_IN = '[Auth] Navigate To Sign In',
  REQUEST_SIGN_IN = '[Auth] Request Sign In',
  SIGN_IN_SUCCESS = '[Auth] Sign In Success',
  SIGN_IN_FAILURE = '[Auth] Sign In Failure',
  SIGN_OUT = '[Auth] Sign Out'
}

export type AuthActionsUnion = NavigateToSignInAction | RequestSignInAction | SignInSuccessAction | SignInFailureAction;

export class NavigateToSignInAction implements Action {
  public type = AuthActions.NAVIGATE_TO_SIGN_IN;

  constructor(public payload?: any) {}
}

export class RequestSignInAction implements Action {
  public type = AuthActions.REQUEST_SIGN_IN;

  constructor(public payload: { username: string; password: string }) {
  }
}

export class SignInSuccessAction implements Action {
  public type = AuthActions.SIGN_IN_SUCCESS;

  constructor(public payload: { token: string, expireAt: number }) {
  }
}

export class SignInFailureAction implements Action {
  public type = AuthActions.SIGN_IN_FAILURE;

  constructor(public payload: { message: string }) {
  }
}

export class SignOutAction implements Action {
  public type = AuthActions.SIGN_OUT;

  constructor(public payload?: any) {
  }
}
