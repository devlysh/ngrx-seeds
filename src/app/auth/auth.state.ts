export interface AuthState {
  username: string;
  password: string;
  authenticated: boolean;
  token: string;
  expireAt: number;
}

export const initialAuthState = {
  username: '',
  password: '',
  authenticated: false,
  token: '',
  expireAt: null,
};
