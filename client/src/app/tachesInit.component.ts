import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Tache } from './tache';
import { TacheService } from './tache.service';
import { ModifService} from './modif.service';

@Component({

  selector: 'tachesInit',
  templateUrl: './tachesInit.component.html',
  styleUrls: ['./tachesInit.component.css']


})

export class TachesInitComponent {

  tacheSelectionnee: Tache;

  constructor(
    private tacheService: TacheService, private modifService: ModifService) { }

  save(tache: Tache): void {
    tache.stat = 1;

    this.tacheService.update(tache);
    console.log(this.tacheService.taches);

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
