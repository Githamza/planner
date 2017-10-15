import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { User } from './user';
import {LoginService} from './login.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { MdSnackBarRef, MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Component({

  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']


})

export class SignUpComponent {
  public snackBarRef: MdSnackBarRef<any>;


  constructor(
    private loginService: LoginService, private router: Router, private snackBar: MdSnackBar) { }
  height: number = 200;
  login: User = new User();


  display: string = "none";
  ok: number = 2;
  useradded: number;
  showMsg(msg: string, haveAction: boolean, actionLabel: string, duration: number) {
    const config: any = new MdSnackBarConfig();
    this.snackBarRef = this.snackBar.open(msg, haveAction && actionLabel, config);

    setTimeout(() => {
      this.snackBarRef.dismiss();
    }, (duration || 1) * 1000);
  }
  save(register: User = new User()) {
    console.log(register);
    this.loginService.Register(register)
      .then((add) => {
      this.useradded = add;
        this.display = "none";
        this.height = 200;
        this.showMsg("Le nouvel utilisateur est ajouté", false, "", 2)
      })
  }

  onSubmit(login: User) {
    console.log(login);
    this.loginService.Login(login)
      .then(loginok => {
      this.ok = loginok
        if (this.ok == 1) {
          this.router.navigate(['navbar']);
          localStorage.clear();

          localStorage.setItem('currentUser', login.username);

        }
      })
  }

  register(): void {
    this.height = 550;
    this.display = "block"
  }


}
