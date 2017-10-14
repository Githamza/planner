    import { Component } from '@angular/core';
    import { Router } from '@angular/router';
    import { MdDialogRef } from '@angular/material';
    import { Tache } from './tache';
    import { TacheService } from './tache.service';
    import { MD_DIALOG_DATA } from '@angular/material';


    @Component({

      selector: 'modif',
      templateUrl: './modif.component.html',
      styleUrls: ['./modif.component.css']


    })

    export class ModifComponent {
      tache: Tache;

      constructor(public dialogRef: MdDialogRef<ModifComponent>) { }



    }
