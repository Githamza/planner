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
var tache_service_1 = require("./tache.service");
var modif_service_1 = require("./modif.service");
var TachesEnCoursComponent = (function () {
    function TachesEnCoursComponent(tacheService, modifService) {
        this.tacheService = tacheService;
        this.modifService = modifService;
    }
    TachesEnCoursComponent.prototype.finish = function (tache) {
        tache.stat = 2;
        this.tacheService.update(tache);
    };
    TachesEnCoursComponent.prototype.openDialog = function (tache) {
        this.modifService.openDialog(tache);
    };
    TachesEnCoursComponent.prototype.delete = function (tache) {
        var _this = this;
        this.tacheService.delete(tache.id)
            .then(function () {
            _this.tacheService.taches = _this.tacheService.taches.filter(function (h) { return h !== tache; });
            if (_this.tacheSelectionnee === tache) {
                _this.tacheSelectionnee = null;
            }
        });
        console.log(this.tacheService.taches);
    };
    TachesEnCoursComponent.prototype.onSelect = function (tache) {
        this.tacheSelectionnee = tache;
    };
    TachesEnCoursComponent = __decorate([
        core_1.Component({
            selector: 'tachesEnCours',
            templateUrl: './tachesEnCours.component.html',
            styleUrls: ['./tachesEnCours.component.css']
        }),
        __metadata("design:paramtypes", [tache_service_1.TacheService, modif_service_1.ModifService])
    ], TachesEnCoursComponent);
    return TachesEnCoursComponent;
}());
exports.TachesEnCoursComponent = TachesEnCoursComponent;
//# sourceMappingURL=tachesEnCours.component.js.map