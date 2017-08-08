import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { ModifComponent } from './modif.component';
import { TacheService } from './tache.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

import { Tache } from './tache';


@Injectable()
export class ModifService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private tachesUrl = 'api/taches';  // URL to web api

  taches: Tache[] = [];
  tabTaches() {
    return this.taches;
  }
    selectedOption: string;


  constructor(private http: Http,private tacheService: TacheService,
    public dialog: MdDialog) { }
  

  openDialog(tache : Tache) {
	    let config = new MdDialogConfig();

	    let dialogRef: MdDialogRef<ModifComponent> = this.dialog.open(ModifComponent, config);
	    dialogRef.componentInstance.tache = tache;
	      dialogRef.afterClosed().subscribe(result => {
	      this.selectedOption = result;
                console.log(this.selectedOption);
                tache.name = this.selectedOption;

        this.tacheService.modifyS(tache);

	    });
    }

  
  


}
