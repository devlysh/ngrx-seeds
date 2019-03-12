import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActions, SignInFailureAction, NavigateToSignInAction, SignInSuccessAction, RequestSignInAction} from './auth.acitons';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Store} from '@ngrx/store';
import {AuthState} from './auth.state';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class AuthEffects {
  constructor(
    private store: Store<AuthState>,
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {
  }

  @Effect({dispatch: false})
  navigateToSignIn$ = this.actions$.pipe(
    ofType(AuthActions.NAVIGATE_TO_SIGN_IN),
    tap((action: NavigateToSignInAction) => {
      this.router.navigate(['sign-in']);
    })
  );

  @Effect({dispatch: false})
  requestSignIn$ = this.actions$.pipe(
    ofType(AuthActions.REQUEST_SIGN_IN),
    tap((action: RequestSignInAction) => {
      this.authService
        .authenticate({
          username: action.payload.username,
          password: action.payload.password
        })
        .subscribe(
          response => this.store.dispatch(new SignInSuccessAction({token: response.token, expireAt: response.expireAt})),
          errorResponse => this.store.dispatch(new SignInFailureAction({message: errorResponse.error.errorMessage}))
        );
    })
  );

  @Effect({dispatch: false})
  signInSuccess$ = this.actions$.pipe(
    ofType(AuthActions.SIGN_IN_SUCCESS),
    tap((action: SignInSuccessAction) => {
      this.router.navigate(['/']);
    })
  );

  @Effect({dispatch: false})
  signInFailure$ = this.actions$.pipe(
    ofType(AuthActions.SIGN_IN_FAILURE),
    tap((action: SignInFailureAction) => {
      this.toastrService.error(action.payload.message);
    })
  );

  @Effect({dispatch: false})
  signOut$ = this.actions$.pipe(
    ofType(AuthActions.SIGN_OUT),
    tap((action: SignInFailureAction) => {
      this.store.dispatch(new NavigateToSignInAction());
    })
  );
}
