import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from './tache';
import { TacheService } from './tache.service';
@Component({

  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']


})

export class NavBarComponent {
  constructor(
    private tacheService: TacheService) { }

  refrech() {

    this.tacheService.getTaches();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.tacheService.create(name)
      .then(tache => {
        this.tacheService.insert(tache);
        console.log(tache);

      });

  }

  save(tache: Tache): void {
    this.tacheService.update(tache)

  }




}
