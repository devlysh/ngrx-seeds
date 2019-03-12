import {Component, OnInit} from '@angular/core';
import {AuthState} from '../../auth/auth.state';
import {Store} from '@ngrx/store';
import {SignOutAction} from '../../auth/auth.acitons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(public store: Store<AuthState>) {
  }

  public ngOnInit() {
  }

  public signOut() {
    this.store.dispatch(new SignOutAction());
  }
}
