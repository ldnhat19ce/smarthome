"use strict";
(self["webpackChunksmarthome"] = self["webpackChunksmarthome"] || []).push([["src_main_webapp_app_login_login_module_ts"],{

/***/ 12219:
/*!*********************************************************************!*\
  !*** ./src/main/webapp/app/core/device-token/device-token.model.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceToken": () => (/* binding */ DeviceToken)
/* harmony export */ });
class DeviceToken {
    constructor(id, token, createdBy, createdDate, lastModifiedBy, lastModifiedDate) {
        this.id = id;
        this.token = token;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.lastModifiedBy = lastModifiedBy;
        this.lastModifiedDate = lastModifiedDate;
    }
}


/***/ }),

/***/ 50877:
/*!***********************************************************************!*\
  !*** ./src/main/webapp/app/core/device-token/device-token.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceTokenService": () => (/* binding */ DeviceTokenService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _config_application_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/application-config.service */ 81082);



class DeviceTokenService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/device-token');
    }
    create(deviceToken) {
        return this.http.post(this.resourceUrl, deviceToken);
    }
}
DeviceTokenService.ɵfac = function DeviceTokenService_Factory(t) { return new (t || DeviceTokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_config_application_config_service__WEBPACK_IMPORTED_MODULE_0__.ApplicationConfigService)); };
DeviceTokenService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DeviceTokenService, factory: DeviceTokenService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 69472:
/*!******************************************************!*\
  !*** ./src/main/webapp/app/login/login.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_device_token_device_token_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/device-token/device-token.model */ 12219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/auth/account.service */ 9199);
/* harmony import */ var app_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/login/login.service */ 77115);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-webstorage */ 5410);
/* harmony import */ var _core_device_token_device_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/device-token/device-token.service */ 50877);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/language/translate.directive */ 41995);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 38699);













const _c0 = ["username"];
function LoginComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Failed to sign in!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Please check your credentials and try again.\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(accountService, loginService, router, localStorageService, deviceTokenService) {
        this.accountService = accountService;
        this.loginService = loginService;
        this.router = router;
        this.localStorageService = localStorageService;
        this.deviceTokenService = deviceTokenService;
        this.authenticationError = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', { nonNullable: true, validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', { nonNullable: true, validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(false, { nonNullable: true, validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] }),
        });
    }
    ngOnInit() {
        // if already authenticated then navigate to home page
        this.accountService.identity().subscribe(() => {
            if (this.accountService.isAuthenticated()) {
                this.router.navigate(['']);
            }
        });
    }
    ngAfterViewInit() {
        this.username.nativeElement.focus();
    }
    login() {
        const tokenInLocalStorage = this.localStorageService.retrieve('deviceToken');
        this.loginService.login(this.loginForm.getRawValue()).subscribe({
            next: () => {
                const deviceToken = new _core_device_token_device_token_model__WEBPACK_IMPORTED_MODULE_0__.DeviceToken(null, tokenInLocalStorage);
                this.deviceTokenService.create(deviceToken).subscribe({
                    next: () => {
                        console.log('save success');
                    },
                });
                this.authenticationError = false;
                if (!this.router.getCurrentNavigation()) {
                    // There were no routing during login (eg from navigationToStoredUrl)
                    this.router.navigate(['']);
                }
            },
            error: () => (this.authenticationError = true),
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_8__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_device_token_device_token_service__WEBPACK_IMPORTED_MODULE_3__.DeviceTokenService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["jhi-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.username = _t.first);
    } }, decls: 65, vars: 8, consts: [[1, "d-flex", "justify-content-center"], [1, "col-lg-6", "col-md-8", "col-sm-10"], ["jhiTranslate", "login.title", "data-cy", "loginTitle"], ["class", "alert alert-danger", "jhiTranslate", "login.messages.error.authentication", "data-cy", "loginError", 4, "ngIf"], ["role", "form", 1, "form", 3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "username", "jhiTranslate", "global.form.username.label", 1, "username-label"], ["type", "text", "name", "username", "id", "username", "formControlName", "username", "data-cy", "username", 1, "form-control", 3, "placeholder"], ["username", ""], ["for", "password", "jhiTranslate", "login.form.password"], ["type", "password", "name", "password", "id", "password", "formControlName", "password", "data-cy", "password", 1, "form-control", 3, "placeholder"], [1, "form-check"], ["for", "rememberMe", 1, "form-check-label"], ["type", "checkbox", "name", "rememberMe", "id", "rememberMe", "formControlName", "rememberMe", 1, "form-check-input"], ["jhiTranslate", "login.form.rememberme"], ["type", "submit", "jhiTranslate", "login.form.button", "data-cy", "submit", 1, "btn", "btn-primary"], [1, "mt-3", "alert", "alert-warning"], ["routerLink", "/account/reset/request", "jhiTranslate", "login.password.forgot", "data-cy", "forgetYourPasswordSelector", 1, "alert-link"], [1, "alert", "alert-warning"], ["jhiTranslate", "global.messages.info.register.noaccount"], ["routerLink", "/account/register", "jhiTranslate", "global.messages.info.register.link", 1, "alert-link"], ["jhiTranslate", "login.messages.error.authentication", "data-cy", "loginError", 1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Did you forget your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "You don't have an account yet?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Register a new account");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.authenticationError);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 4, "global.form.username.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 6, "login.form.password.placeholder"));
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__.TranslateDirective, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 74121:
/*!***************************************************!*\
  !*** ./src/main/webapp/app/login/login.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/shared.module */ 92267);
/* harmony import */ var _login_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.route */ 98387);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ 69472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([_login_route__WEBPACK_IMPORTED_MODULE_1__.LOGIN_ROUTE])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 98387:
/*!**************************************************!*\
  !*** ./src/main/webapp/app/login/login.route.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOGIN_ROUTE": () => (/* binding */ LOGIN_ROUTE)
/* harmony export */ });
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 69472);

const LOGIN_ROUTE = {
    path: '',
    component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
    data: {
        pageTitle: 'login.title',
    },
};


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_login_login_module_ts.js.map