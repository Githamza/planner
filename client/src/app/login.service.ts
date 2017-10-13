import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { User } from './user';


@Injectable()
export class LoginService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private loginUrl = 'http://localhost:4001/login';  // URL to web api
  private registerUrl = 'http://localhost:4001/register';

  constructor(private http: Http) { }

  Login(login : User) : Promise<number> {
  console.log("login",login.username);
  return this.http
    .post(this.loginUrl, JSON.stringify(login), { headers: this.headers })
    .toPromise()
    .then((res) =>  res.json().login as number)
  }
  Register ( register: User ) : Promise<any> {
  return this.http
    .post(this.registerUrl, JSON.stringify(register), {headers: this.headers})
    .toPromise()
    .then((res) =>  res.json().added as number)
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}
