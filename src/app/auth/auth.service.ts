import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {timeout} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

const LOGIN_URL = 'https://y70gjc593c.execute-api.us-east-1.amazonaws.com/PROD/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public authenticate(credentials: { username: string; password: string; }): Observable<any> {
    return this.http.post(LOGIN_URL, {login: credentials.username, password: credentials.password, admin: true});
  }
}
