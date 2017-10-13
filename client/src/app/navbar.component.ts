import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Tache } from './tache';
import { TacheService } from './tache.service';
import { LocalStorageModule } from 'angular-2-local-storage';

@Component({

  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']


})

export class NavBarComponent implements OnInit {
  constructor(
    private tacheService: TacheService, private router: Router) { }
  currentUsername: string = '';
  ngOnInit(): void {
    if (localStorage.getItem('currentUser') != null) {
      this.currentUsername = localStorage.getItem('currentUser');
    } else {
      this.router.navigate(['signup']);
    }

  }
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

  Deconnexion(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['signup']);

  }


}
