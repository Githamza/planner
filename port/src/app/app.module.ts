import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { MdDialogModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar.component';

import { ModifComponent } from './modif.component';
import { TachesInitComponent } from './tachesInit.component';
import { TachesTermineesComponent } from './tachesTerminees.component';
import { TachesEnCoursComponent } from './tachesEnCours.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { TacheService } from './tache.service';
import { ModifService } from './modif.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SignUpComponent} from './signup.component';
import {LoginService} from './login.service';

@NgModule({
  imports: [BrowserModule,
  FormsModule,
  HttpModule,
  MaterialModule,
  RouterModule.forRoot([
      { path: '', redirectTo: '/signup', pathMatch: 'full' },

      {
        path: 'signup',
        component: SignUpComponent
      },
      {
       path : 'navbar',
       component : NavBarComponent
      }
    ]),

  BrowserAnimationsModule,
  FlexLayoutModule,
  BrowserAnimationsModule,
  MdDialogModule],

  declarations: [AppComponent, NavBarComponent, TachesInitComponent, TachesTermineesComponent, TachesEnCoursComponent, ModifComponent, SignUpComponent],
  entryComponents: [
    ModifComponent
  ],
  bootstrap: [AppComponent],
  providers: [ModifService, TacheService, LoginService]
})
export class AppModule { }
