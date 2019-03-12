import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthState} from './auth.state';
import {Store} from '@ngrx/store';
import {NavigateToSignInAction} from './auth.acitons';
import {authenticatedSelector} from './auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AuthState>) {
  }

  public canActivate(): Observable<boolean> {
    return this.store.select(authenticatedSelector).pipe(
      tap((authenticated: boolean) => {
        if (!authenticated) {
          this.store.dispatch(new NavigateToSignInAction());
        }
      })
    );
  }
}
