"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var material_1 = require("@angular/material");
var TacheService = (function () {
    function TacheService(http, dialog) {
        this.http = http;
        this.dialog = dialog;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.tachesUrl = 'http://localhost:4001'; // URL to web api
        this.taches = [];
    }
    TacheService.prototype.tabTaches = function () {
        return this.taches;
    };
    TacheService.prototype.getTaches = function () {
        var _this = this;
        return this.http.get(this.tachesUrl)
            .map(function (response) {
            _this.taches = response.json().taches;
            console.log(_this.taches);
        })
            .catch(this.handleError);
    };
    TacheService.prototype.insert = function (tache) {
        this.taches.push(tache);
    };
    TacheService.prototype.create = function (name) {
        return this.http
            .post(this.tachesUrl, JSON.stringify({ name: name, stat: 0 }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    TacheService.prototype.update = function (tache) {
        var url = this.tachesUrl + "/" + tache.id;
        return this.http
            .put(url, JSON.stringify(tache), { headers: this.headers })
            .toPromise()
            .then(function () { return tache; })
            .catch(this.handleError);
    };
    TacheService.prototype.delete = function (id) {
        var url = this.tachesUrl + "/" + id;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    /*openDialog(tache : Tache) {
          let config = new MdDialogConfig();
  
          let dialogRef: MdDialogRef<ModifComponent> = this.dialog.open(ModifComponent, config);
          dialogRef.componentInstance.tache = tache;
            dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
          });
      }*/
    TacheService.prototype.modifyS = function (tache) {
        var url = this.tachesUrl + "/" + tache.id;
        return this.http
            .put(url, JSON.stringify(tache), { headers: this.headers })
            .toPromise()
            .then(function () { return tache; })
            .catch(this.handleError);
    };
    TacheService.prototype.onSelect = function (tache) {
        this.tacheSelectionnee = tache;
    };
    TacheService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    TacheService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            material_1.MdDialog])
    ], TacheService);
    return TacheService;
}());
exports.TacheService = TacheService;
//# sourceMappingURL=tache.service.js.map