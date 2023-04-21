"use strict";
(self["webpackChunksmarthome"] = self["webpackChunksmarthome"] || []).push([["src_main_webapp_app_user_user-routing_module_ts"],{

/***/ 58649:
/*!*********************************************************!*\
  !*** ./src/main/webapp/app/user/user-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoutingModule": () => (/* binding */ UserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */
class UserRoutingModule {
}
UserRoutingModule.ɵfac = function UserRoutingModule_Factory(t) { return new (t || UserRoutingModule)(); };
UserRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserRoutingModule });
UserRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [
        /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
        _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild([
            {
                path: 'speech-data',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_user_speech-data_speech-data_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./speech-data/speech-data.module */ 95880)).then(m => m.SpeechDataModule),
                data: {
                    pageTitle: 'userSpeechData.home.title',
                }
            },
            {
                path: 'devices',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_user_device_device_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./device/device.module */ 9765)).then(m => m.DeviceModule),
                data: {
                    pageTitle: 'userDevice.home.title',
                }
            }
            /* jhipster-needle-add-admin-route - JHipster will add admin routes here */
        ])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_user_user-routing_module_ts.js.map