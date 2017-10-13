import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Tache } from './tache';
import { TacheService } from './tache.service';
import { ModifService} from './modif.service';

@Component({

  selector: 'tachesTerminees',
  templateUrl: './tachesTerminees.component.html',
  styleUrls: ['./tachesTerminees.component.css']


})

export class TachesTermineesComponent implements OnInit {
  tacheSelectionnee: Tache;
  constructor(
    private tacheService: TacheService, private modifService: ModifService) { }
  ngOnInit(): void {
    this.tacheService.getTaches()
      .subscribe(() => this.tacheService.tabTaches());

  };


  delete(tache: Tache): void {

    this.tacheService.delete(tache.id)
      .then(() => {
        this.tacheService.taches = this.tacheService.taches.filter(h => h !== tache);
        if (this.tacheSelectionnee === tache) { this.tacheSelectionnee = null; }
      });
    console.log(this.tacheService.taches);

  }
  openDialog(tache: Tache) {
    this.modifService.openDialog(tache);

  }


  onSelect(tache: Tache): void {
    this.tacheSelectionnee = tache;
  }
}
