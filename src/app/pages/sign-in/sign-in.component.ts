import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthState} from '../../auth/auth.state';
import {RequestSignInAction} from '../../auth/auth.acitons';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  public username: string;
  public password: string;

  constructor(private store: Store<AuthState>) {
  }

  public signIn() {
    this.store.dispatch(new RequestSignInAction({username: this.username, password: this.password}));
  }
}
