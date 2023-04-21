"use strict";
(self["webpackChunksmarthome"] = self["webpackChunksmarthome"] || []).push([["src_main_webapp_app_user_device_device_module_ts"],{

/***/ 99451:
/*!**********************************************************************************!*\
  !*** ./src/main/webapp/app/user/device/delete/device-delete-dialog.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceDeleteDialogComponent": () => (/* binding */ DeviceDeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_device_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/device.service */ 69190);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 41995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);








const _c0 = function (a0) { return { id: a0 }; };
function DeviceDeleteDialogComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function DeviceDeleteDialogComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.confirmDelete(ctx_r1.device.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Confirm delete operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeviceDeleteDialogComponent_form_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.cancel()); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeviceDeleteDialogComponent_form_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.cancel()); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx_r0.device.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n      Are you sure you want to delete device ", ctx_r0.device.id, "?\n    ");
} }
class DeviceDeleteDialogComponent {
    constructor(deviceService, activeModal) {
        this.deviceService = deviceService;
        this.activeModal = activeModal;
    }
    cancel() {
        this.activeModal.dismiss();
    }
    confirmDelete(id) {
        this.deviceService.delete(id).subscribe(() => {
            this.activeModal.close('deleted');
        });
    }
}
DeviceDeleteDialogComponent.ɵfac = function DeviceDeleteDialogComponent_Factory(t) { return new (t || DeviceDeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_device_service__WEBPACK_IMPORTED_MODULE_0__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal)); };
DeviceDeleteDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DeviceDeleteDialogComponent, selectors: [["jhi-device-delete-dialog"]], decls: 2, vars: 1, consts: [["name", "deleteForm", 3, "ngSubmit", 4, "ngIf"], ["name", "deleteForm", 3, "ngSubmit"], [1, "modal-header"], ["jhiTranslate", "entity.delete.title", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], ["jhiTranslate", "userDevice.delete.question", 3, "translateValues"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["icon", "ban"], ["jhiTranslate", "entity.action.cancel"], ["type", "submit", 1, "btn", "btn-danger"], ["icon", "times"], ["jhiTranslate", "entity.action.delete"]], template: function DeviceDeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DeviceDeleteDialogComponent_form_0_Template, 38, 4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.device);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_2__.AlertErrorComponent], encapsulation: 2 });


/***/ }),

/***/ 37262:
/*!***************************************************************************!*\
  !*** ./src/main/webapp/app/user/device/detail/device-detail.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceDetailComponent": () => (/* binding */ DeviceDetailComponent)
/* harmony export */ });
/* harmony import */ var _config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/pagination.constants */ 74218);
/* harmony import */ var _config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/navigation.constants */ 39586);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! chart.js */ 83854);
/* harmony import */ var _device_timer_delete_device_timer_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../device-timer-delete/device-timer-delete.component */ 16252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _service_device_monitor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/device-monitor.service */ 7707);
/* harmony import */ var _service_device_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/device-firebase.service */ 75450);
/* harmony import */ var _service_device_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/device.service */ 69190);
/* harmony import */ var _service_device_timer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/device-timer.service */ 90591);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 41995);
/* harmony import */ var _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/sort/sort-by.directive */ 1408);
/* harmony import */ var _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/sort/sort.directive */ 31427);
/* harmony import */ var _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/pagination/item-count.component */ 18133);


















const _c0 = function (a1) { return ["../../", a1, "timer"]; };
function DeviceDetailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Timer");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](1, _c0, ctx_r0.device.id));
} }
const _c1 = function (a1) { return ["../../", a1, "notification-setting"]; };
function DeviceDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "fa-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "Notification setting");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](1, _c1, ctx_r1.device.id));
} }
function DeviceDetailComponent_div_11_dt_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Device action");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DeviceDetailComponent_div_11_dd_32_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "ON");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DeviceDetailComponent_div_11_dd_32_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "OFF");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function DeviceDetailComponent_div_11_dd_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, DeviceDetailComponent_div_11_dd_32_span_2_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, DeviceDetailComponent_div_11_dd_32_span_4_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r8.stateDevice == "ON");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r8.stateDevice == "OFF");
} }
function DeviceDetailComponent_div_11_ng_container_73_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DeviceDetailComponent_div_11_ng_container_73_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r15.onChangeStateDevice()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Turn off");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", true);
} }
function DeviceDetailComponent_div_11_ng_container_73_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DeviceDetailComponent_div_11_ng_container_73_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r17.onChangeStateDevice()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Turn on");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", true);
} }
function DeviceDetailComponent_div_11_ng_container_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, DeviceDetailComponent_div_11_ng_container_73_button_2_Template, 5, 1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, DeviceDetailComponent_div_11_ng_container_73_button_4_Template, 5, 1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r9.stateDevice == "ON");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r9.stateDevice == "OFF");
} }
function DeviceDetailComponent_div_11_ng_container_75_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DeviceDetailComponent_div_11_ng_container_75_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r21.onChangeStateDevice()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Turn off");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", false);
} }
function DeviceDetailComponent_div_11_ng_container_75_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DeviceDetailComponent_div_11_ng_container_75_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r23.onChangeStateDevice()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Turn on");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", false);
} }
function DeviceDetailComponent_div_11_ng_container_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, DeviceDetailComponent_div_11_ng_container_75_button_2_Template, 5, 1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, DeviceDetailComponent_div_11_ng_container_75_button_4_Template, 5, 1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r10.stateDevice == "ON");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r10.stateDevice == "OFF");
} }
function DeviceDetailComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Device");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, " [");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "]\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "dl", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "dt")(14, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "dt")(24, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "Device type");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](30, DeviceDetailComponent_div_11_dt_30_Template, 5, 0, "dt", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, DeviceDetailComponent_div_11_dd_32_Template, 6, 2, "dd", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "dt")(35, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, "Created by");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "dt")(42, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, "Created date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](47, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](48, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "dt")(50, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, "Modified by");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "dt")(57, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](58, "Modified date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](62, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](63, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](64, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](65, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](66, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](67, "fa-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](68, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](70, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](71, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](72, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](73, DeviceDetailComponent_div_11_ng_container_73_Template, 6, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](74, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](75, DeviceDetailComponent_div_11_ng_container_75_Template, 6, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](76, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.device.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.device.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.device.deviceType);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.isDeviceControl === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.isDeviceControl === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.device.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](47, 11, ctx_r2.device.createdDate, "dd/MM/yy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r2.device.lastModifiedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](62, 14, ctx_r2.device.lastModifiedDate, "dd/MM/yy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.isStateLoading == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.isStateLoading == false);
} }
function DeviceDetailComponent_div_17_tbody_66_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deviceMonitor_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\n            ", deviceMonitor_r27.id, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](deviceMonitor_r27.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](deviceMonitor_r27.unitMeasure);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](deviceMonitor_r27.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](16, 7, deviceMonitor_r27.createdDate, "dd/MM/yy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](deviceMonitor_r27.lastModifiedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](23, 10, deviceMonitor_r27.lastModifiedDate, "dd/MM/yy HH:mm"));
} }
function DeviceDetailComponent_div_17_tbody_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, DeviceDetailComponent_div_17_tbody_66_tr_2_Template, 25, 13, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r25.deviceMonitors)("ngForTrackBy", ctx_r25.trackIdentity);
} }
function DeviceDetailComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("predicateChange", function DeviceDetailComponent_div_17_Template_tr_predicateChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r28.predicate = $event); })("ascendingChange", function DeviceDetailComponent_div_17_Template_tr_ascendingChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r30.ascending = $event); })("sortChange", function DeviceDetailComponent_div_17_Template_tr_sortChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r31.transition()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "Unit measure");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, "Created date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](44, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](45, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](47, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](49, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51, "Modified by");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](52, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](53, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](54, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](57, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](59, "Modified date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](60, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](61, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](62, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](63, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](64, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](66, DeviceDetailComponent_div_17_tbody_66_Template, 4, 2, "tbody", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](67, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](68, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("predicate", ctx_r3.predicate)("ascending", ctx_r3.ascending);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.deviceMonitors);
} }
const _c2 = function (a0, a1, a2) { return { page: a0, totalItems: a1, itemsPerPage: a2 }; };
function DeviceDetailComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "jhi-item-count", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ngb-pagination", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("pageChange", function DeviceDetailComponent_div_19_Template_ngb_pagination_pageChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r32.page = $event); })("pageChange", function DeviceDetailComponent_div_19_Template_ngb_pagination_pageChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r34.transition()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("params", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](7, _c2, ctx_r4.page, ctx_r4.totalItems, ctx_r4.itemsPerPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("collectionSize", ctx_r4.totalItems)("page", ctx_r4.page)("pageSize", ctx_r4.itemsPerPage)("maxSize", 5)("rotate", true)("boundaryLinks", true);
} }
function DeviceDetailComponent_div_24_tbody_44_tr_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DeviceDetailComponent_div_24_tbody_44_tr_2_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r39); const deviceTimer_r37 = restoredCtx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r38.deleteDeviceTimer(deviceTimer_r37)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "fa-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](29, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const deviceTimer_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\n            ", deviceTimer_r37.id, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](7, 4, deviceTimer_r37.startTime, "dd/MM/yy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](11, 7, deviceTimer_r37.endTime, "dd/MM/yy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](deviceTimer_r37.deviceAction);
} }
function DeviceDetailComponent_div_24_tbody_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, DeviceDetailComponent_div_24_tbody_44_tr_2_Template, 30, 10, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r35.deviceTimers)("ngForTrackBy", ctx_r35.trackIdentity);
} }
function DeviceDetailComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "table", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("predicateChange", function DeviceDetailComponent_div_24_Template_tr_predicateChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r40.predicate = $event); })("ascendingChange", function DeviceDetailComponent_div_24_Template_tr_ascendingChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r42.ascending = $event); })("sortChange", function DeviceDetailComponent_div_24_Template_tr_sortChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r41); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r43.transition()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "Start time");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](21, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "End time");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](33, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](40, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](44, DeviceDetailComponent_div_24_tbody_44_Template, 4, 2, "tbody", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](45, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("predicate", ctx_r5.predicate)("ascending", ctx_r5.ascending);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r5.deviceTimers);
} }
function DeviceDetailComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "jhi-item-count", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ngb-pagination", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("pageChange", function DeviceDetailComponent_div_26_Template_ngb_pagination_pageChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r44.page = $event); })("pageChange", function DeviceDetailComponent_div_26_Template_ngb_pagination_pageChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r46.transition()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("params", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction3"](7, _c2, ctx_r6.page, ctx_r6.totalItems, ctx_r6.itemsPerPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("collectionSize", ctx_r6.totalItems)("page", ctx_r6.page)("pageSize", ctx_r6.itemsPerPage)("maxSize", 5)("rotate", true)("boundaryLinks", true);
} }
class DeviceDetailComponent {
    constructor(activatedRoute, deviceMonitorService, router, deviceFirebaseService, deviceService, deviceTimerService, modalService) {
        this.activatedRoute = activatedRoute;
        this.deviceMonitorService = deviceMonitorService;
        this.router = router;
        this.deviceFirebaseService = deviceFirebaseService;
        this.deviceService = deviceService;
        this.deviceTimerService = deviceTimerService;
        this.modalService = modalService;
        this.device = null;
        this.isLoading = false;
        this.totalItems = 0;
        this.itemsPerPage = _config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.ITEMS_PER_PAGE;
        this.deviceMonitors = null;
        this.deviceTimers = null;
        this.isStateLoading = false;
        this.isDeviceControl = false;
        this.listAllDeviceMonitors = null;
        this.values = [];
        this.chart = [];
        chart_js__WEBPACK_IMPORTED_MODULE_12__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_12__.registerables);
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ device }) => {
            this.device = device;
            if ('CONTROL' == this.device.deviceType) {
                this.isDeviceControl = true;
            }
        });
        this.handleNavigation();
        this.loadAllDeviceMonitor();
        if (this.device !== null && this.device?.deviceType == 'CONTROL') {
            this.deviceFirebaseService
                .getDeviceStateById()
                .doc('device_action')
                .collection(this.device?.createdBy)
                .doc(this.device.id)
                .valueChanges()
                .subscribe(data => {
                this.stateDevice = data.action;
                console.log(this.stateDevice);
            });
        }
    }
    onChangeStateDevice() {
        this.isStateLoading = true;
        if (this.device !== null) {
            this.deviceService.updateStateDevice(this.device.id).subscribe(data => {
                console.log(data);
                this.isStateLoading = false;
            });
        }
    }
    trackIdentity(_index, item) {
        return item.id;
    }
    transition() {
        this.router.navigate(['./'], {
            relativeTo: this.activatedRoute,
            queryParams: {
                page: this.page,
                sort: `${this.predicate},${this.ascending ? _config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.ASC : _config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.DESC}`,
            },
        });
    }
    handleNavigation() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.activatedRoute.data, this.activatedRoute.queryParamMap]).subscribe(([data, params]) => {
            const page = params.get('page');
            this.page = +(page ?? 1);
            const sort = (params.get(_config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.SORT) ?? data['defaultSort']).split(',');
            this.predicate = sort[0];
            this.ascending = sort[1] === _config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.ASC;
            this.loadAll();
        });
    }
    loadAll() {
        if (this.device?.id !== null) {
            this.isLoading = true;
            if (this.device?.deviceType === 'MONITOR') {
                this.deviceMonitorService
                    .query({
                    page: this.page - 1,
                    size: this.itemsPerPage,
                    sort: this.sort(),
                }, this.device?.id)
                    .subscribe({
                    next: (res) => {
                        this.isLoading = false;
                        this.onSuccess(res.body, res.headers);
                    },
                    error: () => (this.isLoading = false),
                });
            }
            else if (this.device?.deviceType === 'CONTROL') {
                this.deviceTimerService
                    .query({
                    page: this.page - 1,
                    size: this.itemsPerPage,
                    sort: this.sort(),
                }, this.device.id)
                    .subscribe({
                    next: (res) => {
                        this.isLoading = false;
                        this.onDeviceTimerSuccess(res.body, res.headers);
                    },
                    error: () => (this.isLoading = false),
                });
            }
        }
    }
    onSuccess(deviceMonitors, headers) {
        this.totalItems = Number(headers.get('X-Total-Count'));
        this.deviceMonitors = deviceMonitors;
        console.log(deviceMonitors);
    }
    onDeviceTimerSuccess(deviceTimers, headers) {
        this.totalItems = Number(headers.get('X-Total-Count'));
        this.deviceTimers = deviceTimers;
    }
    sort() {
        const result = [`${this.predicate},${this.ascending ? _config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.ASC : _config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.DESC}`];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    static sortByCreatedAt() {
        return [`createdDate,${_config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.ASC}`];
    }
    loadAllDeviceMonitor() {
        if (this.device?.id !== null && this.device?.deviceType === 'MONITOR') {
            this.deviceMonitorService
                .query({
                page: 0,
                size: Number.MAX_SAFE_INTEGER,
                sort: DeviceDetailComponent.sortByCreatedAt(),
            }, this.device?.id)
                .subscribe({
                next: (res) => {
                    this.listAllDeviceMonitors = res.body;
                    this.listAllDeviceMonitors?.map(data => {
                        return this.values?.push(Number(data.value));
                    });
                    this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_12__.Chart('canvas', {
                        type: 'line',
                        data: {
                            labels: this.values,
                            datasets: [
                                {
                                    data: this.values,
                                    borderColor: '#3e95cd',
                                    fill: true,
                                    label: this.device?.name,
                                    backgroundColor: 'rgba(255,0,0,0.3)',
                                    borderWidth: 3,
                                    tension: 0.5,
                                },
                            ],
                        },
                        options: {
                            responsive: false,
                            plugins: {
                                legend: {
                                    display: true,
                                    labels: {
                                        color: 'rgb(255, 99, 132)',
                                    },
                                },
                            },
                        },
                    });
                },
            });
        }
    }
    deleteDeviceTimer(deviceTimer) {
        const modalRef = this.modalService.open(_device_timer_delete_device_timer_delete_component__WEBPACK_IMPORTED_MODULE_2__.DeviceTimerDeleteComponent, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.deviceTimer = deviceTimer;
        // unsubscribe not needed because closed completes on modal close
        modalRef.closed.subscribe(reason => {
            if (reason === 'deleted') {
                this.loadAll();
            }
        });
    }
}
DeviceDetailComponent.ɵfac = function DeviceDetailComponent_Factory(t) { return new (t || DeviceDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_device_monitor_service__WEBPACK_IMPORTED_MODULE_3__.DeviceMonitorService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_device_firebase_service__WEBPACK_IMPORTED_MODULE_4__.DeviceFirebaseService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_device_service__WEBPACK_IMPORTED_MODULE_5__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_device_timer_service__WEBPACK_IMPORTED_MODULE_6__.DeviceTimerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModal)); };
DeviceDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: DeviceDetailComponent, selectors: [["jhi-device-detail"]], decls: 43, vars: 8, consts: [[1, "d-flex", "justify-content-end"], [4, "ngIf"], [1, "d-flex", "justify-content-center"], [1, "col-8"], ["class", "table-responsive", 4, "ngIf"], [2, "display", "block"], ["id", "canvas", "width", "800", "height", "400"], ["type", "submit", 1, "btn", "btn-primary", "jh-create-entity", "badge", 3, "routerLink"], ["icon", "plus"], ["jhiTranslate", "userDevice.timer.title"], ["jhiTranslate", "userNotificationSetting.home.title"], ["jhiTranslate", "userDevice.detail.title"], [1, "row-md", "jh-entity-details"], ["jhiTranslate", "userDevice.name"], ["jhiTranslate", "userDevice.deviceType"], ["jhiTranslate", "userDevice.createdBy"], ["jhiTranslate", "userDevice.createdDate"], ["jhiTranslate", "userDevice.lastModifiedBy"], ["jhiTranslate", "userDevice.lastModifiedDate"], ["type", "submit", "routerLink", "../../", 1, "btn", "btn-info"], ["icon", "arrow-left"], ["jhiTranslate", "entity.action.back"], ["jhiTranslate", "userDevice.deviceAction"], ["class", "badge bg-success", "jhiTranslate", "userDevice.on", 4, "ngIf"], ["class", "badge bg-danger", "jhiTranslate", "userDevice.off", 4, "ngIf"], ["jhiTranslate", "userDevice.on", 1, "badge", "bg-success"], ["jhiTranslate", "userDevice.off", 1, "badge", "bg-danger"], ["type", "submit", "class", "btn btn-danger", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary", 3, "disabled", "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-danger", 3, "disabled", "click"], ["jhiTranslate", "userDevice.turnOff"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], ["jhiTranslate", "userDevice.turnOn"], [1, "table-responsive"], ["aria-describedby", "user-management-page-heading", 1, "table", "table-striped"], ["jhiSort", "", 3, "predicate", "ascending", "predicateChange", "ascendingChange", "sortChange"], ["scope", "col", "jhiSortBy", "id"], ["jhiTranslate", "global.field.id"], ["icon", "sort"], ["scope", "col", "jhiSortBy", "value"], ["jhiTranslate", "userDeviceMonitor.value"], ["scope", "col", "jhiSortBy", "unitMeasure"], ["jhiTranslate", "userDeviceMonitor.unitMeasure"], ["scope", "col", "jhiSortBy", "createdBy"], ["jhiTranslate", "userDeviceMonitor.createdBy"], ["scope", "col", "jhiSortBy", "createdDate"], ["jhiTranslate", "userDeviceMonitor.createdDate"], ["scope", "col", "jhiSortBy", "lastModifiedBy"], ["jhiTranslate", "userDeviceMonitor.lastModifiedBy"], ["scope", "col", "jhiSortBy", "lastModifiedDate"], ["jhiTranslate", "userDeviceMonitor.lastModifiedDate"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "params"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"], ["scope", "col", "jhiSortBy", "startTime"], ["jhiTranslate", "userDevice.timer.startTime"], ["scope", "col", "jhiSortBy", "endTime"], ["jhiTranslate", "userDevice.timer.endTime"], ["scope", "col", "jhiSortBy", "deviceAction"], ["jhiTranslate", "userDevice.timer.deviceAction"], ["scope", "col"], [1, "text-end"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["icon", "times"], ["jhiTranslate", "entity.action.delete", 1, "d-none", "d-md-inline"]], template: function DeviceDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, DeviceDetailComponent_div_2_Template, 10, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, DeviceDetailComponent_div_4_Template, 10, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, DeviceDetailComponent_div_11_Template, 77, 17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, DeviceDetailComponent_div_17_Template, 69, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](18, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, DeviceDetailComponent_div_19_Template, 12, 11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](21, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](23, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, DeviceDetailComponent_div_24_Template, 47, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](26, DeviceDetailComponent_div_26_Template, 12, 11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "canvas", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](38, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](41, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](42, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.device && ctx.isDeviceControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.device && !ctx.isDeviceControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.device);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.deviceMonitors);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.deviceMonitors);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.deviceTimers);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.deviceTimers);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\n      ", ctx.chart, "\n    ");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbPagination, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__.FaIconComponent, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_7__.TranslateDirective, _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_8__.SortByDirective, _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_9__.SortDirective, _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_10__.ItemCountComponent, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 16455:
/*!**********************************************************************!*\
  !*** ./src/main/webapp/app/user/device/device-notification.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationSetting": () => (/* binding */ NotificationSetting)
/* harmony export */ });
class NotificationSetting {
    constructor(id, value, title, message, deviceDTO, deviceAction, createdBy, createdDate, lastModifiedBy, lastModifiedDate) {
        this.id = id;
        this.value = value;
        this.title = title;
        this.message = message;
        this.deviceDTO = deviceDTO;
        this.deviceAction = deviceAction;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.lastModifiedBy = lastModifiedBy;
        this.lastModifiedDate = lastModifiedDate;
    }
}


/***/ }),

/***/ 16252:
/*!**********************************************************************************************!*\
  !*** ./src/main/webapp/app/user/device/device-timer-delete/device-timer-delete.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceTimerDeleteComponent": () => (/* binding */ DeviceTimerDeleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_device_timer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/device-timer.service */ 90591);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 41995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);








const _c0 = function (a0) { return { id: a0 }; };
function DeviceTimerDeleteComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function DeviceTimerDeleteComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.confirmDelete(ctx_r1.deviceTimer.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Confirm delete operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeviceTimerDeleteComponent_form_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.cancel()); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeviceTimerDeleteComponent_form_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.cancel()); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx_r0.deviceTimer.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n      Are you sure you want to delete device timer ", ctx_r0.deviceTimer.id, "?\n    ");
} }
class DeviceTimerDeleteComponent {
    constructor(deviceTimerService, activeModal) {
        this.deviceTimerService = deviceTimerService;
        this.activeModal = activeModal;
    }
    cancel() {
        this.activeModal.dismiss();
    }
    confirmDelete(id) {
        this.deviceTimerService.delete(id).subscribe(() => {
            this.activeModal.close('deleted');
        });
    }
}
DeviceTimerDeleteComponent.ɵfac = function DeviceTimerDeleteComponent_Factory(t) { return new (t || DeviceTimerDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_device_timer_service__WEBPACK_IMPORTED_MODULE_0__.DeviceTimerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal)); };
DeviceTimerDeleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DeviceTimerDeleteComponent, selectors: [["jhi-device-timer-delete"]], decls: 2, vars: 1, consts: [["name", "deleteForm", 3, "ngSubmit", 4, "ngIf"], ["name", "deleteForm", 3, "ngSubmit"], [1, "modal-header"], ["jhiTranslate", "entity.delete.title", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], ["jhiTranslate", "userDeviceTimer.delete.question", 3, "translateValues"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["icon", "ban"], ["jhiTranslate", "entity.action.cancel"], ["type", "submit", 1, "btn", "btn-danger"], ["icon", "times"], ["jhiTranslate", "entity.action.delete"]], template: function DeviceTimerDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DeviceTimerDeleteComponent_form_0_Template, 38, 4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.deviceTimer);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_2__.AlertErrorComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZpY2UtdGltZXItZGVsZXRlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 55325:
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/user/device/device-timer.model.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceTimer": () => (/* binding */ DeviceTimer)
/* harmony export */ });
class DeviceTimer {
    constructor(id, startTime, endTime, deviceDTO, deviceAction, createdBy, createdDate, lastModifiedBy, lastModifiedDate) {
        this.id = id;
        this.startTime = startTime;
        this.endTime = endTime;
        this.deviceDTO = deviceDTO;
        this.deviceAction = deviceAction;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.lastModifiedBy = lastModifiedBy;
        this.lastModifiedDate = lastModifiedDate;
    }
}


/***/ }),

/***/ 9765:
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/user/device/device.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceModule": () => (/* binding */ DeviceModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/shared.module */ 92267);
/* harmony import */ var _device_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device.route */ 25007);
/* harmony import */ var _list_device_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/device.component */ 58720);
/* harmony import */ var _update_device_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/device-update.component */ 6525);
/* harmony import */ var _delete_device_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete/device-delete-dialog.component */ 99451);
/* harmony import */ var _detail_device_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/device-detail.component */ 37262);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-charts */ 31208);
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-pick-datetime */ 37526);
/* harmony import */ var _timer_device_timer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timer/device-timer.component */ 75479);
/* harmony import */ var _device_timer_delete_device_timer_delete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./device-timer-delete/device-timer-delete.component */ 16252);
/* harmony import */ var _notification_device_notification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notification/device-notification.component */ 77995);
/* harmony import */ var _notification_setting_delete_notification_setting_delete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notification-setting-delete/notification-setting-delete.component */ 43524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);















class DeviceModule {
}
DeviceModule.ɵfac = function DeviceModule_Factory(t) { return new (t || DeviceModule)(); };
DeviceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: DeviceModule });
DeviceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(_device_route__WEBPACK_IMPORTED_MODULE_1__.deviceRoute), ng2_charts__WEBPACK_IMPORTED_MODULE_13__.NgChartsModule, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__.OwlDateTimeModule, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__.OwlNativeDateTimeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](DeviceModule, { declarations: [_list_device_component__WEBPACK_IMPORTED_MODULE_2__.DeviceComponent,
        _update_device_update_component__WEBPACK_IMPORTED_MODULE_3__.DeviceUpdateComponent,
        _delete_device_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__.DeviceDeleteDialogComponent,
        _detail_device_detail_component__WEBPACK_IMPORTED_MODULE_5__.DeviceDetailComponent,
        _timer_device_timer_component__WEBPACK_IMPORTED_MODULE_7__.DeviceTimerComponent,
        _device_timer_delete_device_timer_delete_component__WEBPACK_IMPORTED_MODULE_8__.DeviceTimerDeleteComponent,
        _notification_device_notification_component__WEBPACK_IMPORTED_MODULE_9__.DeviceNotificationComponent,
        _notification_setting_delete_notification_setting_delete_component__WEBPACK_IMPORTED_MODULE_10__.NotificationSettingDeleteComponent], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, ng2_charts__WEBPACK_IMPORTED_MODULE_13__.NgChartsModule, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__.OwlDateTimeModule, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__.OwlNativeDateTimeModule] }); })();


/***/ }),

/***/ 25007:
/*!*********************************************************!*\
  !*** ./src/main/webapp/app/user/device/device.route.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceResolve": () => (/* binding */ DeviceResolve),
/* harmony export */   "deviceRoute": () => (/* binding */ deviceRoute)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _list_device_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/device.component */ 58720);
/* harmony import */ var _update_device_update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update/device-update.component */ 6525);
/* harmony import */ var _detail_device_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/device-detail.component */ 37262);
/* harmony import */ var _timer_device_timer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer/device-timer.component */ 75479);
/* harmony import */ var _notification_device_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification/device-notification.component */ 77995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_device_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/device.service */ 69190);









class DeviceResolve {
    constructor(service) {
        this.service = service;
    }
    resolve(route) {
        const id = route.params['id'];
        if (id) {
            return this.service.find(id);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
    }
}
DeviceResolve.ɵfac = function DeviceResolve_Factory(t) { return new (t || DeviceResolve)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_service_device_service__WEBPACK_IMPORTED_MODULE_5__.DeviceService)); };
DeviceResolve.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: DeviceResolve, factory: DeviceResolve.ɵfac, providedIn: 'root' });
const deviceRoute = [
    {
        path: '',
        component: _list_device_component__WEBPACK_IMPORTED_MODULE_0__.DeviceComponent,
        data: {
            defaultSort: 'id,asc',
        },
    },
    {
        path: ':id/view',
        component: _detail_device_detail_component__WEBPACK_IMPORTED_MODULE_2__.DeviceDetailComponent,
        resolve: {
            device: DeviceResolve,
        },
        data: {
            defaultSort: 'createdDate,desc',
        },
    },
    {
        path: 'new',
        component: _update_device_update_component__WEBPACK_IMPORTED_MODULE_1__.DeviceUpdateComponent,
        resolve: {
            device: DeviceResolve,
        },
    },
    {
        path: ':id/edit',
        component: _update_device_update_component__WEBPACK_IMPORTED_MODULE_1__.DeviceUpdateComponent,
        resolve: {
            device: DeviceResolve,
        },
    },
    {
        path: ':id/timer',
        component: _timer_device_timer_component__WEBPACK_IMPORTED_MODULE_3__.DeviceTimerComponent,
        resolve: {
            device: DeviceResolve,
        },
    },
    {
        path: ':id/notification-setting',
        component: _notification_device_notification_component__WEBPACK_IMPORTED_MODULE_4__.DeviceNotificationComponent,
        resolve: {
            device: DeviceResolve,
        },
        data: {
            defaultSort: 'id,desc',
        },
    },
];


/***/ }),

/***/ 58720:
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/user/device/list/device.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceComponent": () => (/* binding */ DeviceComponent)
/* harmony export */ });
/* harmony import */ var _config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/pagination.constants */ 74218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var _config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/navigation.constants */ 39586);
/* harmony import */ var _delete_device_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../delete/device-delete-dialog.component */ 99451);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_device_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/device.service */ 69190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 41995);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 39003);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/sort/sort-by.directive */ 1408);
/* harmony import */ var _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/sort/sort.directive */ 31427);
/* harmony import */ var _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/pagination/item-count.component */ 18133);
















const _c0 = function (a1) { return ["./", a1, "view"]; };
const _c1 = function (a1) { return ["./", a1, "edit"]; };
function DeviceComponent_div_31_tbody_70_tr_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](37, "fa-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](45, "fa-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DeviceComponent_div_31_tbody_70_tr_2_Template_button_click_51_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6); const device_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.deleteDevice(device_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](53, "fa-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](17, _c0, device_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](device_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](device_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](device_r4.deviceType);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](device_r4.deviceAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](device_r4.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](22, 11, device_r4.createdDate, "dd/MM/yy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](device_r4.lastModifiedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](29, 14, device_r4.lastModifiedDate, "dd/MM/yy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](19, _c0, device_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](21, _c1, device_r4.id));
} }
function DeviceComponent_div_31_tbody_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, DeviceComponent_div_31_tbody_70_tr_2_Template, 61, 23, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.devices)("ngForTrackBy", ctx_r2.trackIdentity);
} }
function DeviceComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("predicateChange", function DeviceComponent_div_31_Template_tr_predicateChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r7.predicate = $event); })("ascendingChange", function DeviceComponent_div_31_Template_tr_ascendingChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r9.ascending = $event); })("sortChange", function DeviceComponent_div_31_Template_tr_sortChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r10.transition()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "th", 13)(9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "th", 16)(15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "th", 18)(21, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Device type");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "Device action");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](31, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](39, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "Created date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](47, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Modified by");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](55, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "Modified date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](63, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](66, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](70, DeviceComponent_div_31_tbody_70_Template, 4, 2, "tbody", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](72, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("predicate", ctx_r0.predicate)("ascending", ctx_r0.ascending);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.devices);
} }
const _c2 = function (a0, a1, a2) { return { page: a0, totalItems: a1, itemsPerPage: a2 }; };
function DeviceComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "jhi-item-count", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ngb-pagination", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function DeviceComponent_div_33_Template_ngb_pagination_pageChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r11.page = $event); })("pageChange", function DeviceComponent_div_33_Template_ngb_pagination_pageChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r13.transition()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("params", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction3"](7, _c2, ctx_r1.page, ctx_r1.totalItems, ctx_r1.itemsPerPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("collectionSize", ctx_r1.totalItems)("page", ctx_r1.page)("pageSize", ctx_r1.itemsPerPage)("maxSize", 5)("rotate", true)("boundaryLinks", true);
} }
const _c3 = function () { return ["./new"]; };
class DeviceComponent {
    constructor(deviceService, activatedRoute, router, modalService) {
        this.deviceService = deviceService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
        this.isLoading = false;
        this.totalItems = 0;
        this.itemsPerPage = _config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.ITEMS_PER_PAGE;
        this.devices = null;
    }
    ngOnInit() {
        this.handleNavigation();
    }
    trackIdentity(_index, item) {
        return item.id;
    }
    transition() {
        this.router.navigate(['./'], {
            relativeTo: this.activatedRoute.parent,
            queryParams: {
                page: this.page,
                sort: `${this.predicate},${this.ascending ? _config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.ASC : _config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.DESC}`,
            },
        });
    }
    handleNavigation() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.activatedRoute.data, this.activatedRoute.queryParamMap]).subscribe(([data, params]) => {
            const page = params.get('page');
            this.page = +(page ?? 1);
            const sort = (params.get(_config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.SORT) ?? data['defaultSort']).split(',');
            this.predicate = sort[0];
            this.ascending = sort[1] === _config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.ASC;
            this.loadAll();
        });
    }
    loadAll() {
        this.isLoading = true;
        this.deviceService.query({
            page: this.page - 1,
            size: this.itemsPerPage,
            sort: this.sort(),
        }).subscribe({
            next: (res) => {
                this.isLoading = false;
                this.onSuccess(res.body, res.headers);
            },
            error: () => (this.isLoading = false),
        });
    }
    onSuccess(devices, headers) {
        this.totalItems = Number(headers.get('X-Total-Count'));
        this.devices = devices;
        console.log(devices);
    }
    sort() {
        const result = [`${this.predicate},${this.ascending ? _config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.ASC : _config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.DESC}`];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    deleteDevice(device) {
        const modalRef = this.modalService.open(_delete_device_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.DeviceDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.device = device;
        // unsubscribe not needed because closed completes on modal close
        modalRef.closed.subscribe(reason => {
            if (reason === 'deleted') {
                this.loadAll();
            }
        });
    }
}
DeviceComponent.ɵfac = function DeviceComponent_Factory(t) { return new (t || DeviceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_device_service__WEBPACK_IMPORTED_MODULE_3__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal)); };
DeviceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: DeviceComponent, selectors: [["jhi-device"]], decls: 36, vars: 6, consts: [["id", "user-management-page-heading", "jhiTranslate", "userDevice.home.title", "data-cy", "userManagementPageHeading"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-info", "me-2", 3, "disabled", "click"], ["icon", "sync", 3, "spin"], ["jhiTranslate", "userSpeechData.home.refreshListLabel"], [1, "btn", "btn-primary", "jh-create-entity", 3, "routerLink"], ["icon", "plus"], ["jhiTranslate", "userDevice.home.createLabel"], ["class", "table-responsive", 4, "ngIf"], [4, "ngIf"], [1, "table-responsive"], ["aria-describedby", "user-management-page-heading", 1, "table", "table-striped"], ["jhiSort", "", 3, "predicate", "ascending", "predicateChange", "ascendingChange", "sortChange"], ["scope", "col", "jhiSortBy", "id"], ["jhiTranslate", "global.field.id"], ["icon", "sort"], ["scope", "col", "jhiSortBy", "name"], ["jhiTranslate", "userDevice.name"], ["scope", "col", "jhiSortBy", "deviceType"], ["jhiTranslate", "userDevice.deviceType"], ["scope", "col", "jhiSortBy", "deviceAction"], ["jhiTranslate", "userDevice.deviceAction"], ["scope", "col", "jhiSortBy", "createdBy"], ["jhiTranslate", "userDevice.createdBy"], ["scope", "col", "jhiSortBy", "createdDate"], ["jhiTranslate", "userDevice.createdDate"], ["scope", "col", "jhiSortBy", "lastModifiedBy"], ["jhiTranslate", "userDevice.lastModifiedBy"], ["scope", "col", "jhiSortBy", "lastModifiedDate"], ["jhiTranslate", "userDevice.lastModifiedDate"], ["scope", "col"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "routerLink"], [1, "text-end"], [1, "btn-group"], ["type", "submit", 1, "btn", "btn-info", "btn-sm", 3, "routerLink"], ["icon", "eye"], ["jhiTranslate", "entity.action.view", 1, "d-none", "d-md-inline"], ["type", "submit", "queryParamsHandling", "merge", 1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], ["icon", "pencil-alt"], ["jhiTranslate", "entity.action.edit", 1, "d-none", "d-md-inline"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["icon", "times"], ["jhiTranslate", "entity.action.delete", 1, "d-none", "d-md-inline"], [1, "d-flex", "justify-content-center"], [3, "params"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"]], template: function DeviceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DeviceComponent_Template_button_click_9_listener() { return ctx.loadAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Refresh list");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Create a new device");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "jhi-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, DeviceComponent_div_31_Template, 73, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, DeviceComponent_div_33_Template, 12, 11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("spin", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](5, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.devices);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.devices);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbPagination, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FaIconComponent, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__.TranslateDirective, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.AlertComponent, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_6__.AlertErrorComponent, _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_7__.SortByDirective, _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_8__.SortDirective, _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_9__.ItemCountComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 43524:
/*!**************************************************************************************************************!*\
  !*** ./src/main/webapp/app/user/device/notification-setting-delete/notification-setting-delete.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationSettingDeleteComponent": () => (/* binding */ NotificationSettingDeleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_device_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/device-notification.service */ 51592);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 41995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);








const _c0 = function (a0) { return { id: a0 }; };
function NotificationSettingDeleteComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function NotificationSettingDeleteComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.confirmDelete(ctx_r1.notificationSetting.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Confirm delete operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationSettingDeleteComponent_form_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.cancel()); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationSettingDeleteComponent_form_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.cancel()); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx_r0.notificationSetting.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n      Are you sure you want to delete device timer ", ctx_r0.notificationSetting.id, "?\n    ");
} }
class NotificationSettingDeleteComponent {
    constructor(deviceNotificationService, activeModal) {
        this.deviceNotificationService = deviceNotificationService;
        this.activeModal = activeModal;
    }
    cancel() {
        this.activeModal.dismiss();
    }
    confirmDelete(id) {
        this.deviceNotificationService.delete(id).subscribe(() => {
            this.activeModal.close('deleted');
        });
    }
}
NotificationSettingDeleteComponent.ɵfac = function NotificationSettingDeleteComponent_Factory(t) { return new (t || NotificationSettingDeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_device_notification_service__WEBPACK_IMPORTED_MODULE_0__.DeviceNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal)); };
NotificationSettingDeleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NotificationSettingDeleteComponent, selectors: [["jhi-notification-setting-delete"]], decls: 2, vars: 1, consts: [["name", "deleteForm", 3, "ngSubmit", 4, "ngIf"], ["name", "deleteForm", 3, "ngSubmit"], [1, "modal-header"], ["jhiTranslate", "entity.delete.title", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], ["jhiTranslate", "userDeviceTimer.delete.question", 3, "translateValues"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["icon", "ban"], ["jhiTranslate", "entity.action.cancel"], ["type", "submit", 1, "btn", "btn-danger"], ["icon", "times"], ["jhiTranslate", "entity.action.delete"]], template: function NotificationSettingDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NotificationSettingDeleteComponent_form_0_Template, 38, 4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.notificationSetting);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_2__.AlertErrorComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb24tc2V0dGluZy1kZWxldGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 77995:
/*!***************************************************************************************!*\
  !*** ./src/main/webapp/app/user/device/notification/device-notification.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceNotificationComponent": () => (/* binding */ DeviceNotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _device_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../device.model */ 88279);
/* harmony import */ var _device_notification_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../device-notification.model */ 16455);
/* harmony import */ var _config_pagination_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/pagination.constants */ 74218);
/* harmony import */ var _config_navigation_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../config/navigation.constants */ 39586);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var _notification_setting_delete_notification_setting_delete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../notification-setting-delete/notification-setting-delete.component */ 43524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _service_device_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/device-notification.service */ 51592);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 41995);
/* harmony import */ var _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/alert/alert.component */ 39003);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/sort/sort-by.directive */ 1408);
/* harmony import */ var _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/sort/sort.directive */ 31427);
/* harmony import */ var _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/pagination/item-count.component */ 18133);




















function DeviceNotificationComponent_div_28_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n            This field is required.\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DeviceNotificationComponent_div_28_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n            This field can only contain letters, digits\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DeviceNotificationComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DeviceNotificationComponent_div_28_small_2_Template, 2, 0, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, DeviceNotificationComponent_div_28_small_4_Template, 2, 0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.editForm.get("value")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.editForm.get("value")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.pattern);
} }
function DeviceNotificationComponent_div_38_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n            This field is required.\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DeviceNotificationComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DeviceNotificationComponent_div_38_small_2_Template, 2, 0, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.editForm.get("title")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function DeviceNotificationComponent_div_48_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n            This field is required.\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function DeviceNotificationComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DeviceNotificationComponent_div_48_small_2_Template, 2, 0, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r2.editForm.get("message")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
} }
function DeviceNotificationComponent_tr_118_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DeviceNotificationComponent_tr_118_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r10); const notificationSetting_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r9.deleteNotificationSetting(notificationSetting_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "fa-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notificationSetting_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\n            ", notificationSetting_r8.id, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](notificationSetting_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](notificationSetting_r8.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](notificationSetting_r8.value);
} }
const _c0 = function (a0, a1, a2) { return { page: a0, totalItems: a1, itemsPerPage: a2 }; };
class DeviceNotificationComponent {
    constructor(activatedRoute, deviceNotificationService, router, modalService) {
        this.activatedRoute = activatedRoute;
        this.deviceNotificationService = deviceNotificationService;
        this.router = router;
        this.modalService = modalService;
        this.isSaving = false;
        this.notificationSettings = null;
        this.totalItems = 0;
        this.itemsPerPage = _config_pagination_constants__WEBPACK_IMPORTED_MODULE_2__.ITEMS_PER_PAGE;
        this.isLoading = false;
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(''),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', {
                nonNullable: true,
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
                ],
            }),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', { nonNullable: true }),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('', { nonNullable: true }),
        });
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ device }) => {
            this.device = device;
        });
        this.handleNavigation();
    }
    trackIdentity(_index, item) {
        return item.id;
    }
    transition() {
        this.router.navigate(['./'], {
            relativeTo: this.activatedRoute,
            queryParams: {
                page: this.page,
                sort: `${this.predicate},${this.ascending ? _config_navigation_constants__WEBPACK_IMPORTED_MODULE_3__.ASC : _config_navigation_constants__WEBPACK_IMPORTED_MODULE_3__.DESC}`,
            },
        });
    }
    save() {
        this.isSaving = true;
        const result = this.editForm.getRawValue();
        const deviceDTO = new _device_model__WEBPACK_IMPORTED_MODULE_0__.DeviceDTO(this.device?.id, null, null);
        const notificationSetting = new _device_notification_model__WEBPACK_IMPORTED_MODULE_1__.NotificationSetting(null, result.value, result.title, result.message, deviceDTO);
        this.deviceNotificationService.create(notificationSetting).subscribe({
            next: () => this.onSaveSuccess(),
            error: () => this.onSaveError(),
        });
    }
    previousState() {
        window.history.back();
    }
    onSaveSuccess() {
        this.isSaving = false;
        this.editForm.reset();
        this.loadAll();
    }
    onSaveError() {
        this.isSaving = false;
    }
    handleNavigation() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([this.activatedRoute.data, this.activatedRoute.queryParamMap]).subscribe(([data, params]) => {
            const page = params.get('page');
            this.page = +(page ?? 1);
            const sort = (params.get(_config_navigation_constants__WEBPACK_IMPORTED_MODULE_3__.SORT) ?? data['defaultSort']).split(',');
            this.predicate = sort[0];
            this.ascending = sort[1] === _config_navigation_constants__WEBPACK_IMPORTED_MODULE_3__.ASC;
            this.loadAll();
        });
    }
    sort() {
        const result = [`${this.predicate},${this.ascending ? _config_navigation_constants__WEBPACK_IMPORTED_MODULE_3__.ASC : _config_navigation_constants__WEBPACK_IMPORTED_MODULE_3__.DESC}`];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    loadAll() {
        if (this.device?.id !== null) {
            this.isLoading = true;
            this.deviceNotificationService
                .query({
                page: this.page - 1,
                size: this.itemsPerPage,
                sort: this.sort(),
            }, this.device?.id)
                .subscribe({
                next: (res) => {
                    this.isLoading = false;
                    this.onSuccess(res.body, res.headers);
                },
                error: () => (this.isLoading = false),
            });
        }
    }
    onSuccess(notificationSettings, headers) {
        this.totalItems = Number(headers.get('X-Total-Count'));
        this.notificationSettings = notificationSettings;
        // console.log(deviceMonitors);
    }
    deleteNotificationSetting(notificationSetting) {
        const modalRef = this.modalService.open(_notification_setting_delete_notification_setting_delete_component__WEBPACK_IMPORTED_MODULE_4__.NotificationSettingDeleteComponent, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.notificationSetting = notificationSetting;
        // unsubscribe not needed because closed completes on modal close
        modalRef.closed.subscribe(reason => {
            if (reason === 'deleted') {
                this.loadAll();
            }
        });
    }
}
DeviceNotificationComponent.ɵfac = function DeviceNotificationComponent_Factory(t) { return new (t || DeviceNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_service_device_notification_service__WEBPACK_IMPORTED_MODULE_5__.DeviceNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal)); };
DeviceNotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: DeviceNotificationComponent, selectors: [["jhi-device-notification"]], decls: 137, vars: 21, consts: [[1, "d-flex", "justify-content-center"], [1, "col-8"], ["name", "editForm", "role", "form", "novalidate", "", 3, "formGroup", "ngSubmit"], ["id", "myUserLabel", "jhiTranslate", "userNotificationSetting.home.createLabel"], [1, "mb-3", 3, "hidden"], ["jhiTranslate", "global.field.id"], ["type", "text", "name", "id", "formControlName", "id", "readonly", "", 1, "form-control"], [1, "mb-3"], ["jhiTranslate", "userNotificationSetting.value", 1, "form-label"], ["type", "text", "name", "value", "formControlName", "value", 1, "form-control"], [4, "ngIf"], ["jhiTranslate", "userNotificationSetting.title", 1, "form-label"], ["type", "text", "name", "title", "formControlName", "title", 1, "form-control"], ["jhiTranslate", "userNotificationSetting.message", 1, "form-label"], ["type", "text", "name", "message", "formControlName", "message", 1, "form-control"], ["type", "button", "routerLink", "../view", 1, "btn", "btn-secondary"], ["icon", "ban"], ["jhiTranslate", "entity.action.cancel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["icon", "save"], ["jhiTranslate", "entity.action.save"], [1, "table-responsive"], ["aria-describedby", "user-management-page-heading", 1, "table", "table-striped"], ["jhiSort", "", 3, "predicate", "ascending", "predicateChange", "ascendingChange", "sortChange"], ["scope", "col", "jhiSortBy", "id"], ["icon", "sort"], ["scope", "col", "jhiSortBy", "title"], ["jhiTranslate", "userNotificationSetting.title"], ["scope", "col", "jhiSortBy", "message"], ["jhiTranslate", "userNotificationSetting.message"], ["scope", "col", "jhiSortBy", "value"], ["jhiTranslate", "userNotificationSetting.value"], ["scope", "col"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "params"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"], ["class", "form-text text-danger", "jhiTranslate", "entity.validation.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "entity.validation.patternLogin", 4, "ngIf"], ["jhiTranslate", "entity.validation.required", 1, "form-text", "text-danger"], ["jhiTranslate", "entity.validation.patternLogin", 1, "form-text", "text-danger"], [1, "text-end"], [1, "btn-group"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["icon", "times"], ["jhiTranslate", "entity.action.delete", 1, "d-none", "d-md-inline"]], template: function DeviceNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function DeviceNotificationComponent_Template_form_ngSubmit_4_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Create or edit a notification setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "jhi-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](18, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, "Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](26, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, DeviceNotificationComponent_div_28_Template, 6, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](34, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](36, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](38, DeviceNotificationComponent_div_38_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](40, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](46, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](48, DeviceNotificationComponent_div_48_Template, 4, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](53, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](56, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](57, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](60, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](61, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](64, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](65, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](66, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](68, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](69, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](71, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](73, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "table", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](75, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](77, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](78, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("predicateChange", function DeviceNotificationComponent_Template_tr_predicateChange_78_listener($event) { return ctx.predicate = $event; })("ascendingChange", function DeviceNotificationComponent_Template_tr_ascendingChange_78_listener($event) { return ctx.ascending = $event; })("sortChange", function DeviceNotificationComponent_Template_tr_sortChange_78_listener() { return ctx.transition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](79, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](80, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](81, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](82, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](83, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](84, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](85, "fa-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](86, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](87, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](88, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](89, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](90, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](91, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](92, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](93, "fa-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](94, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](95, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](96, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](97, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](99, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](100, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](101, "fa-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](102, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](103, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](104, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](105, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](106, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](107, "value");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](108, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](109, "fa-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](110, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](111, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](112, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](113, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](114, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](115, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](116, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](117, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](118, DeviceNotificationComponent_tr_118_Template, 28, 4, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](119, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](120, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](121, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](122, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](123, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](124, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](125, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](126, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](127, "jhi-item-count", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](128, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](129, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](130, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](131, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](132, "ngb-pagination", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("pageChange", function DeviceNotificationComponent_Template_ngb_pagination_pageChange_132_listener($event) { return ctx.page = $event; })("pageChange", function DeviceNotificationComponent_Template_ngb_pagination_pageChange_132_listener() { return ctx.transition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](133, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](134, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](135, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](136, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", !ctx.editForm.value.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.editForm.get("value").invalid && (ctx.editForm.get("value").dirty || ctx.editForm.get("value").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.editForm.get("title").invalid && (ctx.editForm.get("title").dirty || ctx.editForm.get("title").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.editForm.get("message").invalid && (ctx.editForm.get("message").dirty || ctx.editForm.get("message").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx.editForm.invalid || ctx.isSaving);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("predicate", ctx.predicate)("ascending", ctx.ascending);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.notificationSettings)("ngForTrackBy", ctx.trackIdentity);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("params", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction3"](17, _c0, ctx.page, ctx.totalItems, ctx.itemsPerPage));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("collectionSize", ctx.totalItems)("page", ctx.page)("pageSize", ctx.itemsPerPage)("maxSize", 5)("rotate", true)("boundaryLinks", true);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbPagination, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__.TranslateDirective, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__.AlertComponent, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_8__.AlertErrorComponent, _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_9__.SortByDirective, _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_10__.SortDirective, _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_11__.ItemCountComponent, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZpY2Utbm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 75450:
/*!****************************************************************************!*\
  !*** ./src/main/webapp/app/user/device/service/device-firebase.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceFirebaseService": () => (/* binding */ DeviceFirebaseService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 92393);


class DeviceFirebaseService {
    constructor(db) {
        this.db = db;
        this.dbPath = '/develop';
    }
    getDeviceStateById() {
        return this.db.collection("develop");
    }
}
DeviceFirebaseService.ɵfac = function DeviceFirebaseService_Factory(t) { return new (t || DeviceFirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_1__.AngularFirestore)); };
DeviceFirebaseService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeviceFirebaseService, factory: DeviceFirebaseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7707:
/*!***************************************************************************!*\
  !*** ./src/main/webapp/app/user/device/service/device-monitor.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceMonitorService": () => (/* binding */ DeviceMonitorService)
/* harmony export */ });
/* harmony import */ var _core_request_request_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _core_config_application_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/config/application-config.service */ 81082);




class DeviceMonitorService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/device-monitor');
    }
    query(req, deviceId) {
        let queryResourceUrl = this.resourceUrl + '/' + deviceId;
        const options = (0,_core_request_request_util__WEBPACK_IMPORTED_MODULE_0__.createRequestOption)(req);
        return this.http.get(queryResourceUrl, { params: options, observe: 'response' });
    }
    getAllDeviceMonitor(req, deviceId) {
        let queryResourceUrl = this.resourceUrl + '/' + deviceId;
        const options = (0,_core_request_request_util__WEBPACK_IMPORTED_MODULE_0__.createRequestOption)(req);
        return this.http.get(queryResourceUrl, { params: options, observe: 'response' });
    }
}
DeviceMonitorService.ɵfac = function DeviceMonitorService_Factory(t) { return new (t || DeviceMonitorService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_1__.ApplicationConfigService)); };
DeviceMonitorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DeviceMonitorService, factory: DeviceMonitorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 51592:
/*!********************************************************************************!*\
  !*** ./src/main/webapp/app/user/device/service/device-notification.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceNotificationService": () => (/* binding */ DeviceNotificationService)
/* harmony export */ });
/* harmony import */ var _core_request_request_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _core_config_application_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/config/application-config.service */ 81082);




class DeviceNotificationService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/notification-setting');
    }
    create(notificationSetting) {
        return this.http.post(this.resourceUrl, notificationSetting);
    }
    query(req, deviceId) {
        let queryResourceUrl = this.resourceUrl + '/' + deviceId;
        const options = (0,_core_request_request_util__WEBPACK_IMPORTED_MODULE_0__.createRequestOption)(req);
        return this.http.get(queryResourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }
}
DeviceNotificationService.ɵfac = function DeviceNotificationService_Factory(t) { return new (t || DeviceNotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_1__.ApplicationConfigService)); };
DeviceNotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DeviceNotificationService, factory: DeviceNotificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 90591:
/*!*************************************************************************!*\
  !*** ./src/main/webapp/app/user/device/service/device-timer.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceTimerService": () => (/* binding */ DeviceTimerService)
/* harmony export */ });
/* harmony import */ var _core_request_request_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _core_config_application_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/config/application-config.service */ 81082);




class DeviceTimerService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/device-timer');
    }
    create(deviceTimer) {
        return this.http.post(this.resourceUrl, deviceTimer);
    }
    query(req, deviceId) {
        let queryResourceUrl = this.resourceUrl + '/' + deviceId;
        const options = (0,_core_request_request_util__WEBPACK_IMPORTED_MODULE_0__.createRequestOption)(req);
        return this.http.get(queryResourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }
}
DeviceTimerService.ɵfac = function DeviceTimerService_Factory(t) { return new (t || DeviceTimerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_1__.ApplicationConfigService)); };
DeviceTimerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DeviceTimerService, factory: DeviceTimerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 75479:
/*!*************************************************************************!*\
  !*** ./src/main/webapp/app/user/device/timer/device-timer.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceTimerComponent": () => (/* binding */ DeviceTimerComponent)
/* harmony export */ });
/* harmony import */ var _device_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../device.model */ 88279);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _device_timer_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../device-timer.model */ 55325);
/* harmony import */ var _config_device_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/device.constants */ 5439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _service_device_timer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/device-timer.service */ 90591);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 41995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-pick-datetime */ 37526);













function DeviceTimerComponent_div_28_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const da_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", da_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](da_r4);
} }
function DeviceTimerComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "laicbel", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Device type");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, DeviceTimerComponent_div_28_option_7_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.deviceActions);
} }
class DeviceTimerComponent {
    constructor(formbuilder, activatedRoute, deviceTimerService) {
        this.formbuilder = formbuilder;
        this.activatedRoute = activatedRoute;
        this.deviceTimerService = deviceTimerService;
        this.isSaving = false;
        this.deviceActions = _config_device_constants__WEBPACK_IMPORTED_MODULE_2__.DEVICEACTION;
        this.form = this.formbuilder.group({
            dateSingleStart: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(new Date()),
            dateSingleEnd: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(new Date()),
            deviceAction: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.deviceActions[0], { nonNullable: true }),
        });
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(({ device }) => {
            this.device = device;
        });
    }
    save() {
        this.isSaving = true;
        const result = this.form.getRawValue();
        const deviceDTO = new _device_model__WEBPACK_IMPORTED_MODULE_0__.DeviceDTO(this.device?.id, null, null);
        const deviceTimer = new _device_timer_model__WEBPACK_IMPORTED_MODULE_1__.DeviceTimer(null, result.dateSingleStart, result.dateSingleEnd, deviceDTO, result.deviceAction);
        this.deviceTimerService.create(deviceTimer).subscribe({
            next: () => this.onSaveSuccess(),
            error: () => this.onSaveError(),
        });
    }
    previousState() {
        window.history.back();
    }
    reset() {
        console.log(this.form.value);
        this.form.reset({
            eventName: '',
            dateSingleStart: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(),
            dateSingleEnd: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(),
        });
        console.log(this.form.value);
    }
    onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }
    onSaveError() {
        this.isSaving = false;
    }
}
DeviceTimerComponent.ɵfac = function DeviceTimerComponent_Factory(t) { return new (t || DeviceTimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_device_timer_service__WEBPACK_IMPORTED_MODULE_3__.DeviceTimerService)); };
DeviceTimerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: DeviceTimerComponent, selectors: [["jhi-device-timer"]], decls: 49, vars: 15, consts: [[1, "d-flex", "justify-content-center"], [1, "col-8"], [3, "formGroup", "ngSubmit"], ["for", "dateSingleStart", "jhiTranslate", "userDevice.timer.startTime"], ["name", "dateSingleStart", "formControlName", "dateSingleStart", "placeholder", "YYYY-MM-DD", "id", "dateSingleStart", 1, "form-control", 3, "owlDateTime", "owlDateTimeTrigger", "readOnly", "selectMode"], [3, "firstDayOfWeek", "pickerType"], ["dateSingleStart", ""], ["for", "dateSingleEnd", "jhiTranslate", "userDevice.timer.endTime"], ["name", "dateSingleEnd", "formControlName", "dateSingleEnd", "placeholder", "YYYY-MM-DD", "id", "dateSingleEnd", 1, "form-control", 3, "owlDateTime", "owlDateTimeTrigger", "selectMode", "readOnly"], ["dateSingleEnd", ""], ["class", "mb-3", 4, "ngIf"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["icon", "arrow-left"], ["jhiTranslate", "entity.action.back"], ["jhiTranslate", "userDevice.timer.resetForm", 1, "btn", "btn-danger", 3, "click"], ["type", "submit", "jhiTranslate", "userDevice.timer.save", 1, "btn", "btn-primary", 3, "disabled"], [1, "mb-3"], ["jhiTranslate", "userDevice.deviceAction"], ["id", "deviceAction", "name", "deviceAction", "formControlName", "deviceAction", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function DeviceTimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function DeviceTimerComponent_Template_form_ngSubmit_4_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Start time");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "owl-date-time", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "End time");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "owl-date-time", 5, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, DeviceTimerComponent_div_28_Template, 10, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DeviceTimerComponent_Template_button_click_32_listener() { return ctx.previousState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DeviceTimerComponent_Template_button_click_40_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Reset form");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "\n");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("owlDateTime", _r0)("owlDateTimeTrigger", _r0)("readOnly", true)("selectMode", "single");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("firstDayOfWeek", 1)("pickerType", "both");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("owlDateTime", _r1)("owlDateTimeTrigger", _r1)("selectMode", "single")("readOnly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("firstDayOfWeek", 1)("pickerType", "both");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.deviceActions && ctx.deviceActions.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isSaving);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_5__.AlertErrorComponent, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__.OwlDateTimeTriggerDirective, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__.OwlDateTimeInputDirective, ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__.OwlDateTimeComponent], encapsulation: 2 });


/***/ }),

/***/ 6525:
/*!***************************************************************************!*\
  !*** ./src/main/webapp/app/user/device/update/device-update.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceUpdateComponent": () => (/* binding */ DeviceUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var app_config_device_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/config/device.constants */ 5439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/device.service */ 69190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 41995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);










function DeviceUpdateComponent_div_26_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n            This field is required.\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { max: 100 }; };
function DeviceUpdateComponent_div_26_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n            This field cannot be longer than 100 characters.\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
} }
function DeviceUpdateComponent_div_26_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n            This field can only contain letters, digits\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DeviceUpdateComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DeviceUpdateComponent_div_26_small_2_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DeviceUpdateComponent_div_26_small_4_Template, 2, 2, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DeviceUpdateComponent_div_26_small_6_Template, 2, 0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.editForm.get("name")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.editForm.get("name")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.editForm.get("name")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.pattern);
} }
function DeviceUpdateComponent_div_29_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dp_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", dp_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](dp_r7);
} }
function DeviceUpdateComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "laicbel", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Device type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DeviceUpdateComponent_div_29_option_7_Template, 2, 2, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.deviceTypes);
} }
function DeviceUpdateComponent_div_31_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const da_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", da_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](da_r9);
} }
function DeviceUpdateComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "laicbel", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Device type");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DeviceUpdateComponent_div_31_option_7_Template, 2, 2, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.deviceActions);
} }
const deviceTemplate = {};
class DeviceUpdateComponent {
    constructor(deviceService, route) {
        this.deviceService = deviceService;
        this.route = route;
        this.isSaving = false;
        this.deviceTypes = app_config_device_constants__WEBPACK_IMPORTED_MODULE_0__.DEVICETYPES;
        this.deviceActions = app_config_device_constants__WEBPACK_IMPORTED_MODULE_0__.DEVICEACTION;
        this.isCreating = false;
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(deviceTemplate.id),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(deviceTemplate.name, {
                nonNullable: true,
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
                ],
            }),
            deviceType: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(deviceTemplate.deviceType, { nonNullable: true }),
            deviceAction: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(deviceTemplate.deviceAction, { nonNullable: true })
        });
    }
    ngOnInit() {
        this.route.data.subscribe(({ device }) => {
            if (device) {
                console.log("edit device");
                console.log(device);
                this.isCreating = false;
                this.editForm.reset(device);
            }
            else {
                console.log("create new device");
                this.isCreating = true;
                this.editForm.reset();
            }
        });
    }
    save() {
        this.isSaving = true;
        const device = this.editForm.getRawValue();
        if (device.id !== null) {
            this.deviceService.update(device).subscribe({
                next: () => this.onSaveSuccess(),
                error: () => this.onSaveError()
            });
        }
        else {
            this.deviceService.create(device).subscribe({
                next: () => this.onSaveSuccess(),
                error: () => this.onSaveError()
            });
        }
    }
    previousState() {
        window.history.back();
    }
    onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }
    onSaveError() {
        this.isSaving = false;
    }
}
DeviceUpdateComponent.ɵfac = function DeviceUpdateComponent_Factory(t) { return new (t || DeviceUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_device_service__WEBPACK_IMPORTED_MODULE_1__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
DeviceUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DeviceUpdateComponent, selectors: [["jhi-device-update"]], decls: 52, vars: 6, consts: [[1, "d-flex", "justify-content-center"], [1, "col-8"], ["name", "editForm", "role", "form", "novalidate", "", 3, "formGroup", "ngSubmit"], ["id", "myUserLabel", "jhiTranslate", "userDevice.home.createOrEditLabel"], [1, "mb-3", 3, "hidden"], ["jhiTranslate", "global.field.id"], ["type", "text", "name", "id", "formControlName", "id", "readonly", "", 1, "form-control"], [1, "mb-3"], ["jhiTranslate", "userDevice.name", 1, "form-label"], ["type", "text", "name", "name", "formControlName", "name", 1, "form-control"], [4, "ngIf"], ["class", "mb-3", 4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["icon", "ban"], ["jhiTranslate", "entity.action.cancel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["icon", "save"], ["jhiTranslate", "entity.action.save"], ["class", "form-text text-danger", "jhiTranslate", "entity.validation.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "entity.validation.maxlength", 3, "translateValues", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "entity.validation.patternLogin", 4, "ngIf"], ["jhiTranslate", "entity.validation.required", 1, "form-text", "text-danger"], ["jhiTranslate", "entity.validation.maxlength", 1, "form-text", "text-danger", 3, "translateValues"], ["jhiTranslate", "entity.validation.patternLogin", 1, "form-text", "text-danger"], ["jhiTranslate", "userDevice.deviceType"], ["id", "deviceType", "name", "deviceType", "formControlName", "deviceType", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["jhiTranslate", "userDevice.deviceAction"], ["id", "deviceAction", "name", "deviceAction", "formControlName", "deviceAction", 1, "form-control"]], template: function DeviceUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function DeviceUpdateComponent_Template_form_ngSubmit_4_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Create or edit a device");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, DeviceUpdateComponent_div_26_Template, 8, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, DeviceUpdateComponent_div_29_Template, 10, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, DeviceUpdateComponent_div_31_Template, 10, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DeviceUpdateComponent_Template_button_click_33_listener() { return ctx.previousState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx.editForm.value.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.editForm.get("name").invalid && (ctx.editForm.get("name").dirty || ctx.editForm.get("name").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.deviceTypes && ctx.deviceTypes.length > 0 && ctx.isCreating);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.deviceActions && ctx.deviceActions.length > 0 && ctx.isCreating);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.editForm.invalid || ctx.isSaving);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_2__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_3__.AlertErrorComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_user_device_device_module_ts.js.map