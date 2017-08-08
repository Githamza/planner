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
var modif_component_1 = require("./modif.component");
var tache_service_1 = require("./tache.service");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var material_1 = require("@angular/material");
var ModifService = (function () {
    function ModifService(http, tacheService, dialog) {
        this.http = http;
        this.tacheService = tacheService;
        this.dialog = dialog;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.tachesUrl = 'api/taches'; // URL to web api
        this.taches = [];
    }
    ModifService.prototype.tabTaches = function () {
        return this.taches;
    };
    ModifService.prototype.openDialog = function (tache) {
        var _this = this;
        var config = new material_1.MdDialogConfig();
        var dialogRef = this.dialog.open(modif_component_1.ModifComponent, config);
        dialogRef.componentInstance.tache = tache;
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
            console.log(_this.selectedOption);
            tache.name = _this.selectedOption;
            _this.tacheService.modifyS(tache);
        });
    };
    ModifService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, tache_service_1.TacheService,
            material_1.MdDialog])
    ], ModifService);
    return ModifService;
}());
exports.ModifService = ModifService;
//# sourceMappingURL=modif.service.js.map