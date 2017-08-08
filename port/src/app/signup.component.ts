import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http } from '@angular/http';
import { User } from './user';
import {LoginService} from './login.service';
import { LocalStorageModule } from 'angular-2-local-storage';


@Component({

  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']


})

export class SignUpComponent {


constructor(
  private loginService: LoginService,private router:Router) { }

login : User= new User();

ok : number = 2;

onSubmit(login : User) {
this.loginService.Login(login)
.then (loginok => {this.ok = loginok
if(this.ok==1) {
this.router.navigate(['navbar']);
}
})


}




}
