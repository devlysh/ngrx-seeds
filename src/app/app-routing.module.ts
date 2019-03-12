import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {AuthGuard} from './auth/auth.guard.service';
import {SignInComponent} from './pages/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
