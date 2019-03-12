import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {authReducer} from './auth.reducer';
import {SignInComponent} from '../pages/sign-in/sign-in.component';
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './auth.effects';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
    FormsModule,
    HttpClientModule
  ]
})
export class AuthModule {
}
