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
var router_1 = require("@angular/router");
var user_1 = require("./user");
var login_service_1 = require("./login.service");
var SignUpComponent = (function () {
    function SignUpComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.login = new user_1.User();
        this.ok = 2;
    }
    SignUpComponent.prototype.onSubmit = function (login) {
        var _this = this;
        this.loginService.Login(login)
            .then(function (loginok) {
            _this.ok = loginok;
            if (_this.ok == 1) {
                _this.router.navigate(['navbar']);
            }
        });
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: 'signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService, router_1.Router])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=signup.component.js.map