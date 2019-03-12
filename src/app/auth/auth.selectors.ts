import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './auth.state';

export const authSelector = createFeatureSelector<AuthState>('auth');
export const authenticatedSelector = createSelector(authSelector, (state: AuthState) => state.authenticated);
