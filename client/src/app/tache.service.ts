import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { ModifComponent } from './modif.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

import { Tache } from './tache';


@Injectable()
export class TacheService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private tachesUrl = './';  // URL to web api

  taches: Tache[] = [];
  tabTaches() {
    return this.taches;
  }


  tacheSelectionnee: Tache;
  constructor(private http: Http,
    public dialog: MdDialog) { }


  getTaches(): Observable<Tache[]> {
    return this.http.post(this.tachesUrl, JSON.stringify({ username: localStorage.getItem('currentUser') }), { headers: this.headers })
      .map(response => {
        this.taches = response.json().taches as Tache[];
        console.log(this.taches);
      })
      .catch(this.handleError);
  }
  insert(tache: Tache): void {
    this.taches.push(tache);
  }

  create(name: string): Promise<Tache> {
    const url = `${this.tachesUrl}insert`;
    return this.http
      .post(url, JSON.stringify({ name: name, stat: 0, username: localStorage.getItem('currentUser') }), { headers: this.headers })
      .toPromise()
      .then((res) => res.json() as Tache)
      .catch(this.handleError);

  }


  update(tache: Tache): Promise<Tache> {
    const url = `${this.tachesUrl}${tache.id}`;
    return this.http
      .put(url, JSON.stringify(tache), { headers: this.headers })
      .toPromise()
      .then(() => tache)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `${this.tachesUrl}/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);

  }
  /*openDialog(tache : Tache) {
	    let config = new MdDialogConfig();

	    let dialogRef: MdDialogRef<ModifComponent> = this.dialog.open(ModifComponent, config);
	    dialogRef.componentInstance.tache = tache;
	      dialogRef.afterClosed().subscribe(result => {
	      this.selectedOption = result;
	    });
    }*/

  modifyS(tache: Tache) {
    const url = `${this.tachesUrl}${tache.id}`;
    return this.http
      .put(url, JSON.stringify(tache), { headers: this.headers })
      .toPromise()
      .then(() => tache)
      .catch(this.handleError);

  }
  onSelect(tache: Tache): void {
    this.tacheSelectionnee = tache;
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }



}
