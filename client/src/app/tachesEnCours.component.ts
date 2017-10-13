import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MdIconModule} from '@angular/material';


import { Tache } from './tache';
import { TacheService } from './tache.service';
import { ModifService} from './modif.service';

@Component({

  selector: 'tachesEnCours',
  templateUrl: './tachesEnCours.component.html',
  styleUrls: ['./tachesEnCours.component.css']


})

export class TachesEnCoursComponent {
  tacheSelectionnee: Tache;
  constructor(
    private tacheService: TacheService, private modifService: ModifService) { }


  finish(tache: Tache): void {
    tache.stat = 2;

    this.tacheService.update(tache);

  }
  openDialog(tache: Tache) {
    this.modifService.openDialog(tache);

  }
  delete(tache: Tache): void {

    this.tacheService.delete(tache.id)
      .then(() => {
        this.tacheService.taches = this.tacheService.taches.filter(h => h !== tache);
        if (this.tacheSelectionnee === tache) { this.tacheSelectionnee = null; }
      });
    console.log(this.tacheService.taches);

  }


  onSelect(tache: Tache): void {
    this.tacheSelectionnee = tache;
  }
}
