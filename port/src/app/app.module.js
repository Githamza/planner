"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var flex_layout_1 = require("@angular/flex-layout");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar.component");
var modif_component_1 = require("./modif.component");
var tachesInit_component_1 = require("./tachesInit.component");
var tachesTerminees_component_1 = require("./tachesTerminees.component");
var tachesEnCours_component_1 = require("./tachesEnCours.component");
var animations_1 = require("@angular/platform-browser/animations");
require("hammerjs");
var tache_service_1 = require("./tache.service");
var modif_service_1 = require("./modif.service");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var signup_component_1 = require("./signup.component");
var login_service_1 = require("./login.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                material_1.MaterialModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: '/signup', pathMatch: 'full' },
                    {
                        path: 'signup',
                        component: signup_component_1.SignUpComponent
                    },
                    {
                        path: 'navbar',
                        component: navbar_component_1.NavBarComponent
                    }
                ]),
                animations_1.BrowserAnimationsModule,
                flex_layout_1.FlexLayoutModule,
                animations_1.BrowserAnimationsModule,
                material_2.MdDialogModule],
            declarations: [app_component_1.AppComponent, navbar_component_1.NavBarComponent, tachesInit_component_1.TachesInitComponent, tachesTerminees_component_1.TachesTermineesComponent, tachesEnCours_component_1.TachesEnCoursComponent, modif_component_1.ModifComponent, signup_component_1.SignUpComponent],
            entryComponents: [
                modif_component_1.ModifComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [modif_service_1.ModifService, tache_service_1.TacheService, login_service_1.LoginService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map