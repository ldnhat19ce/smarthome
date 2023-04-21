"use strict";
(self["webpackChunksmarthome"] = self["webpackChunksmarthome"] || []).push([["src_main_webapp_app_admin_user-management_user-management_module_ts"],{

/***/ 30632:
/*!*****************************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/user-management/delete/user-management-delete-dialog.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementDeleteDialogComponent": () => (/* binding */ UserManagementDeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_user_management_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/user-management.service */ 3540);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 41995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);








const _c0 = function (a0) { return { login: a0 }; };
function UserManagementDeleteDialogComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function UserManagementDeleteDialogComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.confirmDelete(ctx_r1.user.login)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Confirm delete operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserManagementDeleteDialogComponent_form_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.cancel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "jhi-alert-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserManagementDeleteDialogComponent_form_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.cancel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx_r0.user.login));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n      Are you sure you want to delete user ", ctx_r0.user.login, "?\n    ");
} }
class UserManagementDeleteDialogComponent {
    constructor(userService, activeModal) {
        this.userService = userService;
        this.activeModal = activeModal;
    }
    cancel() {
        this.activeModal.dismiss();
    }
    confirmDelete(login) {
        this.userService.delete(login).subscribe(() => {
            this.activeModal.close('deleted');
        });
    }
}
UserManagementDeleteDialogComponent.ɵfac = function UserManagementDeleteDialogComponent_Factory(t) { return new (t || UserManagementDeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_user_management_service__WEBPACK_IMPORTED_MODULE_0__.UserManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal)); };
UserManagementDeleteDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserManagementDeleteDialogComponent, selectors: [["jhi-user-mgmt-delete-dialog"]], decls: 2, vars: 1, consts: [["name", "deleteForm", 3, "ngSubmit", 4, "ngIf"], ["name", "deleteForm", 3, "ngSubmit"], [1, "modal-header"], ["jhiTranslate", "entity.delete.title", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], ["jhiTranslate", "userManagement.delete.question", 3, "translateValues"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["icon", "ban"], ["jhiTranslate", "entity.action.cancel"], ["type", "submit", 1, "btn", "btn-danger"], ["icon", "times"], ["jhiTranslate", "entity.action.delete"]], template: function UserManagementDeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, UserManagementDeleteDialogComponent_form_0_Template, 38, 4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_2__.AlertErrorComponent], encapsulation: 2 });


/***/ }),

/***/ 24102:
/*!**********************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/user-management/detail/user-management-detail.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementDetailComponent": () => (/* binding */ UserManagementDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 41995);





function UserManagementDetailComponent_div_4_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Activated");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserManagementDetailComponent_div_4_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Deactivated");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserManagementDetailComponent_div_4_li_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authority_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](authority_r4);
} }
function UserManagementDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " [");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "]\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "dl", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "dt")(14, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, UserManagementDetailComponent_div_4_span_22_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, UserManagementDetailComponent_div_4_span_24_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "dt")(28, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "dt")(35, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "dt")(42, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "dt")(49, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Language");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "dt")(56, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Created by");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "dt")(63, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Created date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](68, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "dt")(71, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Modified by");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "dt")(78, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Modified date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](83, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "dt")(86, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Profiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, UserManagementDetailComponent_div_4_li_93_Template, 5, 1, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "fa-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.user.activated);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.user.activated);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.langKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](68, 13, ctx_r0.user.createdDate, "dd/MM/yy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.lastModifiedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](83, 16, ctx_r0.user.lastModifiedDate, "dd/MM/yy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.user.authorities);
} }
class UserManagementDetailComponent {
    constructor(route) {
        this.route = route;
        this.user = null;
    }
    ngOnInit() {
        this.route.data.subscribe(({ user }) => {
            this.user = user;
        });
    }
}
UserManagementDetailComponent.ɵfac = function UserManagementDetailComponent_Factory(t) { return new (t || UserManagementDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
UserManagementDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserManagementDetailComponent, selectors: [["jhi-user-mgmt-detail"]], decls: 8, vars: 1, consts: [[1, "d-flex", "justify-content-center"], [1, "col-8"], [4, "ngIf"], ["jhiTranslate", "userManagement.detail.title"], [1, "row-md", "jh-entity-details"], ["jhiTranslate", "userManagement.login"], ["class", "badge bg-success", "jhiTranslate", "userManagement.activated", 4, "ngIf"], ["class", "badge bg-danger", "jhiTranslate", "userManagement.deactivated", 4, "ngIf"], ["jhiTranslate", "userManagement.firstName"], ["jhiTranslate", "userManagement.lastName"], ["jhiTranslate", "userManagement.email"], ["jhiTranslate", "userManagement.langKey"], ["jhiTranslate", "userManagement.createdBy"], ["jhiTranslate", "userManagement.createdDate"], ["jhiTranslate", "userManagement.lastModifiedBy"], ["jhiTranslate", "userManagement.lastModifiedDate"], ["jhiTranslate", "userManagement.profiles"], [1, "list-unstyled"], [4, "ngFor", "ngForOf"], ["type", "submit", "routerLink", "../../", 1, "btn", "btn-info"], ["icon", "arrow-left"], ["jhiTranslate", "entity.action.back"], ["jhiTranslate", "userManagement.activated", 1, "badge", "bg-success"], ["jhiTranslate", "userManagement.deactivated", 1, "badge", "bg-danger"], [1, "badge", "bg-info"]], template: function UserManagementDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, UserManagementDetailComponent_div_4_Template, 106, 19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_0__.TranslateDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 16287:
/*!*************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/user-management/list/user-management.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementComponent": () => (/* binding */ UserManagementComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var app_config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/config/pagination.constants */ 74218);
/* harmony import */ var app_config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/navigation.constants */ 39586);
/* harmony import */ var _delete_user_management_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../delete/user-management-delete-dialog.component */ 30632);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_user_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/user-management.service */ 3540);
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/auth/account.service */ 9199);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 41995);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 39003);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/sort/sort-by.directive */ 1408);
/* harmony import */ var _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/sort/sort.directive */ 31427);
/* harmony import */ var _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/pagination/item-count.component */ 18133);

















function UserManagementComponent_div_31_tbody_68_tr_2_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserManagementComponent_div_31_tbody_68_tr_2_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r10); const user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r8.setActive(user_r4, true)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n              Deactivated\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function UserManagementComponent_div_31_tbody_68_tr_2_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserManagementComponent_div_31_tbody_68_tr_2_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13); const user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r11.setActive(user_r4, false)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n              Activated\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r6.currentAccount || ctx_r6.currentAccount.login === user_r4.login);
} }
function UserManagementComponent_div_31_tbody_68_tr_2_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authority_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](authority_r15);
} }
const _c0 = function (a1) { return ["./", a1, "view"]; };
const _c1 = function (a1) { return ["./", a1, "edit"]; };
function UserManagementComponent_div_31_tbody_68_tr_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, UserManagementComponent_div_31_tbody_68_tr_2_button_16_Template, 2, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, UserManagementComponent_div_31_tbody_68_tr_2_button_18_Template, 2, 1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, UserManagementComponent_div_31_tbody_68_tr_2_div_26_Template, 5, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](31, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](38, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](46, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](54, "fa-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](58, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserManagementComponent_div_31_tbody_68_tr_2_Template_button_click_60_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r17); const user_r4 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r16.deleteUser(user_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](62, "fa-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](63, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](66, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](67, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](68, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](69, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](20, _c0, user_r4.login));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](user_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](user_r4.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](user_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !user_r4.activated);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", user_r4.activated);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](user_r4.langKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", user_r4.authorities);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](31, 14, user_r4.createdDate, "dd/MM/yy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](user_r4.lastModifiedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](38, 17, user_r4.lastModifiedDate, "dd/MM/yy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](22, _c0, user_r4.login));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](24, _c1, user_r4.login));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx_r3.currentAccount || ctx_r3.currentAccount.login === user_r4.login);
} }
function UserManagementComponent_div_31_tbody_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, UserManagementComponent_div_31_tbody_68_tr_2_Template, 70, 26, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r2.users)("ngForTrackBy", ctx_r2.trackIdentity);
} }
function UserManagementComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("predicateChange", function UserManagementComponent_div_31_Template_tr_predicateChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r18.predicate = $event); })("ascendingChange", function UserManagementComponent_div_31_Template_tr_ascendingChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r20.ascending = $event); })("sortChange", function UserManagementComponent_div_31_Template_tr_sortChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r21.transition()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "th", 13)(9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "th", 16)(15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "th", 18)(21, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "Language");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](33, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "th", 20)(37, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "Profiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, "Created date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](45, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, "Modified by");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](53, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59, "Modified date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](60, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](61, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](62, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](63, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](64, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](66, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](67, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](68, UserManagementComponent_div_31_tbody_68_Template, 4, 2, "tbody", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](69, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](70, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("predicate", ctx_r0.predicate)("ascending", ctx_r0.ascending);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r0.users);
} }
const _c2 = function (a0, a1, a2) { return { page: a0, totalItems: a1, itemsPerPage: a2 }; };
function UserManagementComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "jhi-item-count", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ngb-pagination", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("pageChange", function UserManagementComponent_div_33_Template_ngb_pagination_pageChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r22.page = $event); })("pageChange", function UserManagementComponent_div_33_Template_ngb_pagination_pageChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r24.transition()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("params", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](7, _c2, ctx_r1.page, ctx_r1.totalItems, ctx_r1.itemsPerPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("collectionSize", ctx_r1.totalItems)("page", ctx_r1.page)("pageSize", ctx_r1.itemsPerPage)("maxSize", 5)("rotate", true)("boundaryLinks", true);
} }
const _c3 = function () { return ["./new"]; };
class UserManagementComponent {
    constructor(userService, accountService, activatedRoute, router, modalService) {
        this.userService = userService;
        this.accountService = accountService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
        this.currentAccount = null;
        this.users = null;
        this.isLoading = false;
        this.totalItems = 0;
        this.itemsPerPage = app_config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.ITEMS_PER_PAGE;
    }
    ngOnInit() {
        this.accountService.identity().subscribe(account => (this.currentAccount = account));
        this.handleNavigation();
    }
    setActive(user, isActivated) {
        this.userService.update({ ...user, activated: isActivated }).subscribe(() => this.loadAll());
    }
    trackIdentity(_index, item) {
        return item.id;
    }
    deleteUser(user) {
        const modalRef = this.modalService.open(_delete_user_management_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.UserManagementDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.user = user;
        // unsubscribe not needed because closed completes on modal close
        modalRef.closed.subscribe(reason => {
            if (reason === 'deleted') {
                this.loadAll();
            }
        });
    }
    loadAll() {
        this.isLoading = true;
        this.userService
            .query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort(),
        })
            .subscribe({
            next: (res) => {
                this.isLoading = false;
                this.onSuccess(res.body, res.headers);
            },
            error: () => (this.isLoading = false),
        });
    }
    transition() {
        this.router.navigate(['./'], {
            relativeTo: this.activatedRoute.parent,
            queryParams: {
                page: this.page,
                sort: `${this.predicate},${this.ascending ? app_config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.ASC : app_config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.DESC}`,
            },
        });
    }
    handleNavigation() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.activatedRoute.data, this.activatedRoute.queryParamMap]).subscribe(([data, params]) => {
            const page = params.get('page');
            this.page = +(page ?? 1);
            const sort = (params.get(app_config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.SORT) ?? data['defaultSort']).split(',');
            this.predicate = sort[0];
            this.ascending = sort[1] === app_config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.ASC;
            this.loadAll();
        });
    }
    sort() {
        const result = [`${this.predicate},${this.ascending ? app_config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.ASC : app_config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.DESC}`];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    onSuccess(users, headers) {
        this.totalItems = Number(headers.get('X-Total-Count'));
        this.users = users;
    }
}
UserManagementComponent.ɵfac = function UserManagementComponent_Factory(t) { return new (t || UserManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_user_management_service__WEBPACK_IMPORTED_MODULE_3__.UserManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_4__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbModal)); };
UserManagementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: UserManagementComponent, selectors: [["jhi-user-mgmt"]], decls: 36, vars: 6, consts: [["id", "user-management-page-heading", "jhiTranslate", "userManagement.home.title", "data-cy", "userManagementPageHeading"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-info", "me-2", 3, "disabled", "click"], ["icon", "sync", 3, "spin"], ["jhiTranslate", "userManagement.home.refreshListLabel"], [1, "btn", "btn-primary", "jh-create-entity", 3, "routerLink"], ["icon", "plus"], ["jhiTranslate", "userManagement.home.createLabel"], ["class", "table-responsive", 4, "ngIf"], [4, "ngIf"], [1, "table-responsive"], ["aria-describedby", "user-management-page-heading", 1, "table", "table-striped"], ["jhiSort", "", 3, "predicate", "ascending", "predicateChange", "ascendingChange", "sortChange"], ["scope", "col", "jhiSortBy", "id"], ["jhiTranslate", "global.field.id"], ["icon", "sort"], ["scope", "col", "jhiSortBy", "login"], ["jhiTranslate", "userManagement.login"], ["scope", "col", "jhiSortBy", "email"], ["jhiTranslate", "userManagement.email"], ["scope", "col"], ["scope", "col", "jhiSortBy", "langKey"], ["jhiTranslate", "userManagement.langKey"], ["jhiTranslate", "userManagement.profiles"], ["scope", "col", "jhiSortBy", "createdDate"], ["jhiTranslate", "userManagement.createdDate"], ["scope", "col", "jhiSortBy", "lastModifiedBy"], ["jhiTranslate", "userManagement.lastModifiedBy"], ["scope", "col", "jhiSortBy", "lastModifiedDate"], ["jhiTranslate", "userManagement.lastModifiedDate"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "routerLink"], ["class", "btn btn-danger btn-sm", "jhiTranslate", "userManagement.deactivated", 3, "click", 4, "ngIf"], ["class", "btn btn-success btn-sm", "jhiTranslate", "userManagement.activated", 3, "disabled", "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "text-end"], [1, "btn-group"], ["type", "submit", 1, "btn", "btn-info", "btn-sm", 3, "routerLink"], ["icon", "eye"], ["jhiTranslate", "entity.action.view", 1, "d-none", "d-md-inline"], ["type", "submit", "queryParamsHandling", "merge", 1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], ["icon", "pencil-alt"], ["jhiTranslate", "entity.action.edit", 1, "d-none", "d-md-inline"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "disabled", "click"], ["icon", "times"], ["jhiTranslate", "entity.action.delete", 1, "d-none", "d-md-inline"], ["jhiTranslate", "userManagement.deactivated", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["jhiTranslate", "userManagement.activated", 1, "btn", "btn-success", "btn-sm", 3, "disabled", "click"], [1, "badge", "bg-info"], [1, "d-flex", "justify-content-center"], [3, "params"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"]], template: function UserManagementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserManagementComponent_Template_button_click_9_listener() { return ctx.loadAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Refresh list");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "Create a new user");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](27, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "jhi-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](31, UserManagementComponent_div_31_Template, 71, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, UserManagementComponent_div_33_Template, 12, 11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("spin", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](5, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.users);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbPagination, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FaIconComponent, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__.TranslateDirective, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__.AlertComponent, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_7__.AlertErrorComponent, _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_8__.SortByDirective, _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_9__.SortDirective, _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_10__.ItemCountComponent, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 3540:
/*!**************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/user-management/service/user-management.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementService": () => (/* binding */ UserManagementService)
/* harmony export */ });
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);




class UserManagementService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/admin/users');
        console.log(this.resourceUrl);
    }
    create(user) {
        return this.http.post(this.resourceUrl, user);
    }
    update(user) {
        return this.http.put(this.resourceUrl, user);
    }
    find(login) {
        return this.http.get(`${this.resourceUrl}/${login}`);
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_0__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(login) {
        return this.http.delete(`${this.resourceUrl}/${login}`);
    }
    authorities() {
        return this.http.get(this.applicationConfigService.getEndpointFor('api/authorities'));
    }
}
UserManagementService.ɵfac = function UserManagementService_Factory(t) { return new (t || UserManagementService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_1__.ApplicationConfigService)); };
UserManagementService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserManagementService, factory: UserManagementService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 88949:
/*!**********************************************************************************************!*\
  !*** ./src/main/webapp/app/admin/user-management/update/user-management-update.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementUpdateComponent": () => (/* binding */ UserManagementUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_config_language_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/config/language.constants */ 82927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_user_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user-management.service */ 3540);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 41995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _shared_language_find_language_from_key_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/language/find-language-from-key.pipe */ 51992);











function UserManagementUpdateComponent_div_26_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n            This field is required.\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { max: 50 }; };
function UserManagementUpdateComponent_div_26_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n            This field cannot be longer than 50 characters.\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0));
} }
function UserManagementUpdateComponent_div_26_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n            This field can only contain letters, digits and e-mail addresses.\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UserManagementUpdateComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, UserManagementUpdateComponent_div_26_small_2_Template, 2, 0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, UserManagementUpdateComponent_div_26_small_4_Template, 2, 2, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, UserManagementUpdateComponent_div_26_small_6_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.editForm.get("login")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.editForm.get("login")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.editForm.get("login")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.pattern);
} }
function UserManagementUpdateComponent_div_36_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n            This field cannot be longer than 50 characters.\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0));
} }
function UserManagementUpdateComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, UserManagementUpdateComponent_div_36_small_2_Template, 2, 2, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.editForm.get("firstName")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.maxlength);
} }
function UserManagementUpdateComponent_div_46_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n            This field cannot be longer than 50 characters.\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0));
} }
function UserManagementUpdateComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, UserManagementUpdateComponent_div_46_small_2_Template, 2, 2, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.editForm.get("lastName")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.maxlength);
} }
function UserManagementUpdateComponent_div_56_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n            This field is required.\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { max: 100 }; };
function UserManagementUpdateComponent_div_56_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n            This field cannot be longer than 100 characters.\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return { min: 5 }; };
function UserManagementUpdateComponent_div_56_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n            This field is required to be at least 5 characters.\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c2));
} }
function UserManagementUpdateComponent_div_56_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n            Your email is invalid.\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function UserManagementUpdateComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, UserManagementUpdateComponent_div_56_small_2_Template, 2, 0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, UserManagementUpdateComponent_div_56_small_4_Template, 2, 2, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, UserManagementUpdateComponent_div_56_small_6_Template, 2, 2, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, UserManagementUpdateComponent_div_56_small_8_Template, 2, 0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.editForm.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r3.editForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r3.editForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r3.editForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.email);
} }
function UserManagementUpdateComponent_div_70_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "findLanguageFromKey");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", language_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, language_r16));
} }
function UserManagementUpdateComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Language");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, UserManagementUpdateComponent_div_70_option_7_Template, 3, 4, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.languages);
} }
function UserManagementUpdateComponent_option_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const authority_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", authority_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](authority_r17);
} }
const userTemplate = {};
const newUser = {
    langKey: 'en',
    activated: true,
};
class UserManagementUpdateComponent {
    constructor(userService, route) {
        this.userService = userService;
        this.route = route;
        this.languages = app_config_language_constants__WEBPACK_IMPORTED_MODULE_0__.LANGUAGES;
        this.authorities = [];
        this.isSaving = false;
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(userTemplate.id),
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(userTemplate.login, {
                nonNullable: true,
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
                ],
            }),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(userTemplate.firstName, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)] }),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(userTemplate.lastName, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)] }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(userTemplate.email, {
                nonNullable: true,
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(254), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email],
            }),
            activated: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(userTemplate.activated, { nonNullable: true }),
            langKey: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(userTemplate.langKey, { nonNullable: true }),
            authorities: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(userTemplate.authorities, { nonNullable: true }),
        });
    }
    ngOnInit() {
        this.route.data.subscribe(({ user }) => {
            if (user) {
                this.editForm.reset(user);
            }
            else {
                this.editForm.reset(newUser);
            }
        });
        this.userService.authorities().subscribe(authorities => (this.authorities = authorities));
    }
    previousState() {
        window.history.back();
    }
    save() {
        this.isSaving = true;
        const user = this.editForm.getRawValue();
        if (user.id !== null) {
            this.userService.update(user).subscribe({
                next: () => this.onSaveSuccess(),
                error: () => this.onSaveError(),
            });
        }
        else {
            this.userService.create(user).subscribe({
                next: () => this.onSaveSuccess(),
                error: () => this.onSaveError(),
            });
        }
    }
    onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }
    onSaveError() {
        this.isSaving = false;
    }
}
UserManagementUpdateComponent.ɵfac = function UserManagementUpdateComponent_Factory(t) { return new (t || UserManagementUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_user_management_service__WEBPACK_IMPORTED_MODULE_1__.UserManagementService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute)); };
UserManagementUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: UserManagementUpdateComponent, selectors: [["jhi-user-mgmt-update"]], decls: 102, vars: 10, consts: [[1, "d-flex", "justify-content-center"], [1, "col-8"], ["name", "editForm", "role", "form", "novalidate", "", 3, "formGroup", "ngSubmit"], ["id", "myUserLabel", "jhiTranslate", "userManagement.home.createOrEditLabel"], [1, "mb-3", 3, "hidden"], ["jhiTranslate", "global.field.id"], ["type", "text", "name", "id", "formControlName", "id", "readonly", "", 1, "form-control"], [1, "mb-3"], ["jhiTranslate", "userManagement.login", 1, "form-label"], ["type", "text", "name", "login", "formControlName", "login", 1, "form-control"], [4, "ngIf"], ["jhiTranslate", "userManagement.firstName", 1, "form-label"], ["type", "text", "name", "firstName", "formControlName", "firstName", 1, "form-control"], ["jhiTranslate", "userManagement.lastName"], ["type", "text", "name", "lastName", "formControlName", "lastName", 1, "form-control"], ["jhiTranslate", "userManagement.email", 1, "form-label"], ["type", "email", "name", "email", "formControlName", "email", 1, "form-control"], [1, "form-check"], ["for", "activated", 1, "form-check-label"], ["type", "checkbox", "id", "activated", "name", "activated", "formControlName", "activated", 1, "form-check-input"], ["jhiTranslate", "userManagement.activated"], ["class", "mb-3", 4, "ngIf"], ["jhiTranslate", "userManagement.profiles"], ["multiple", "", "name", "authority", "formControlName", "authorities", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["icon", "ban"], ["jhiTranslate", "entity.action.cancel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["icon", "save"], ["jhiTranslate", "entity.action.save"], ["class", "form-text text-danger", "jhiTranslate", "entity.validation.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "entity.validation.maxlength", 3, "translateValues", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "entity.validation.patternLogin", 4, "ngIf"], ["jhiTranslate", "entity.validation.required", 1, "form-text", "text-danger"], ["jhiTranslate", "entity.validation.maxlength", 1, "form-text", "text-danger", 3, "translateValues"], ["jhiTranslate", "entity.validation.patternLogin", 1, "form-text", "text-danger"], ["class", "form-text text-danger", "jhiTranslate", "entity.validation.minlength", 3, "translateValues", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.invalid", 4, "ngIf"], ["jhiTranslate", "entity.validation.minlength", 1, "form-text", "text-danger", 3, "translateValues"], ["jhiTranslate", "global.messages.validate.email.invalid", 1, "form-text", "text-danger"], ["jhiTranslate", "userManagement.langKey"], ["id", "langKey", "name", "langKey", "formControlName", "langKey", 1, "form-control"], [3, "value"]], template: function UserManagementUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function UserManagementUpdateComponent_Template_form_ngSubmit_4_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Create or edit a user");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, UserManagementUpdateComponent_div_26_Template, 8, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, UserManagementUpdateComponent_div_36_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, UserManagementUpdateComponent_div_46_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, UserManagementUpdateComponent_div_56_Template, 10, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Activated");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, UserManagementUpdateComponent_div_70_Template, 10, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "Profiles");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](79, UserManagementUpdateComponent_option_79_Template, 2, 2, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](81, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserManagementUpdateComponent_Template_button_click_83_listener() { return ctx.previousState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](85, "fa-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](93, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.editForm.value.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editForm.get("login").invalid && (ctx.editForm.get("login").dirty || ctx.editForm.get("login").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editForm.get("firstName").invalid && (ctx.editForm.get("firstName").dirty || ctx.editForm.get("firstName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editForm.get("lastName").invalid && (ctx.editForm.get("lastName").dirty || ctx.editForm.get("lastName").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editForm.get("email").invalid && (ctx.editForm.get("email").dirty || ctx.editForm.get("email").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("disabled", ctx.editForm.value.id === undefined ? "disabled" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.languages && ctx.languages.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.authorities);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.editForm.invalid || ctx.isSaving);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectMultipleControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_2__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_3__.AlertErrorComponent, _shared_language_find_language_from_key_pipe__WEBPACK_IMPORTED_MODULE_4__.FindLanguageFromKeyPipe], encapsulation: 2 });


/***/ }),

/***/ 8483:
/*!*****************************************************************************!*\
  !*** ./src/main/webapp/app/admin/user-management/user-management.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementModule": () => (/* binding */ UserManagementModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/shared.module */ 92267);
/* harmony import */ var _list_user_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/user-management.component */ 16287);
/* harmony import */ var _detail_user_management_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/user-management-detail.component */ 24102);
/* harmony import */ var _update_user_management_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/user-management-update.component */ 88949);
/* harmony import */ var _delete_user_management_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete/user-management-delete-dialog.component */ 30632);
/* harmony import */ var _user_management_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-management.route */ 16466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);









class UserManagementModule {
}
UserManagementModule.ɵfac = function UserManagementModule_Factory(t) { return new (t || UserManagementModule)(); };
UserManagementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: UserManagementModule });
UserManagementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(_user_management_route__WEBPACK_IMPORTED_MODULE_5__.userManagementRoute)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UserManagementModule, { declarations: [_list_user_management_component__WEBPACK_IMPORTED_MODULE_1__.UserManagementComponent,
        _detail_user_management_detail_component__WEBPACK_IMPORTED_MODULE_2__.UserManagementDetailComponent,
        _update_user_management_update_component__WEBPACK_IMPORTED_MODULE_3__.UserManagementUpdateComponent,
        _delete_user_management_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__.UserManagementDeleteDialogComponent], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 16466:
/*!****************************************************************************!*\
  !*** ./src/main/webapp/app/admin/user-management/user-management.route.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserManagementResolve": () => (/* binding */ UserManagementResolve),
/* harmony export */   "userManagementRoute": () => (/* binding */ userManagementRoute)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _list_user_management_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/user-management.component */ 16287);
/* harmony import */ var _detail_user_management_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail/user-management-detail.component */ 24102);
/* harmony import */ var _update_user_management_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update/user-management-update.component */ 88949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_user_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/user-management.service */ 3540);







class UserManagementResolve {
    constructor(service) {
        this.service = service;
    }
    resolve(route) {
        const id = route.params['login'];
        if (id) {
            return this.service.find(id);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
    }
}
UserManagementResolve.ɵfac = function UserManagementResolve_Factory(t) { return new (t || UserManagementResolve)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_service_user_management_service__WEBPACK_IMPORTED_MODULE_3__.UserManagementService)); };
UserManagementResolve.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UserManagementResolve, factory: UserManagementResolve.ɵfac, providedIn: 'root' });
const userManagementRoute = [
    {
        path: '',
        component: _list_user_management_component__WEBPACK_IMPORTED_MODULE_0__.UserManagementComponent,
        data: {
            defaultSort: 'id,asc',
        },
    },
    {
        path: ':login/view',
        component: _detail_user_management_detail_component__WEBPACK_IMPORTED_MODULE_1__.UserManagementDetailComponent,
        resolve: {
            user: UserManagementResolve,
        },
    },
    {
        path: 'new',
        component: _update_user_management_update_component__WEBPACK_IMPORTED_MODULE_2__.UserManagementUpdateComponent,
        resolve: {
            user: UserManagementResolve,
        },
    },
    {
        path: ':login/edit',
        component: _update_user_management_update_component__WEBPACK_IMPORTED_MODULE_2__.UserManagementUpdateComponent,
        resolve: {
            user: UserManagementResolve,
        },
    },
];


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_admin_user-management_user-management_module_ts.js.map