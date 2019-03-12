import {initialAuthState} from './auth.state';
import {AuthActions, AuthActionsUnion} from './auth.acitons';

export function authReducer(state = initialAuthState, action: AuthActionsUnion) {
  switch (action.type) {

    case AuthActions.REQUEST_SIGN_IN:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password
      };

    case AuthActions.SIGN_IN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        token: action.payload.token,
        expireAt: action.payload.expireAt
      };

    case AuthActions.SIGN_IN_FAILURE:
      return {
        ...state,
        authenticated: false,
        token: '',
        expireAt: null,
        username: '',
        password: ''
      };

    case AuthActions.SIGN_OUT:
      return {
        ...state,
        authenticated: false,
        token: '',
        expireAt: null,
        username: '',
        password: ''
      };

    default:
      return state;
  }
}
