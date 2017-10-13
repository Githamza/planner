import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {TacheService} from './tache.service';
import {ModifService} from './modif.service';
import { RouterModule }   from '@angular/router';


window.onload = function(){ platformBrowserDynamic().bootstrapModule(AppComponent);}
