"use strict";
(self["webpackChunksmarthome"] = self["webpackChunksmarthome"] || []).push([["src_main_webapp_app_user_speech-data_speech-data_module_ts"],{

/***/ 83232:
/*!********************************************************************************************!*\
  !*** ./src/main/webapp/app/user/speech-data/delete/speech-data-delete-dialog.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeechDataDeleteDialogComponent": () => (/* binding */ SpeechDataDeleteDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_speech_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/speech-data.service */ 64319);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 41995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);








const _c0 = function (a0) { return { id: a0 }; };
function SpeechDataDeleteDialogComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SpeechDataDeleteDialogComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.confirmDelete(ctx_r1.speechData.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Confirm delete operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SpeechDataDeleteDialogComponent_form_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.cancel()); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SpeechDataDeleteDialogComponent_form_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r4.cancel()); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx_r0.speechData.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n      Are you sure you want to delete user ", ctx_r0.speechData.id, "?\n    ");
} }
class SpeechDataDeleteDialogComponent {
    constructor(speechDataService, activeModal) {
        this.speechDataService = speechDataService;
        this.activeModal = activeModal;
    }
    cancel() {
        this.activeModal.dismiss();
    }
    confirmDelete(id) {
        this.speechDataService.delete(id).subscribe(() => {
            this.activeModal.close('deleted');
        });
    }
}
SpeechDataDeleteDialogComponent.ɵfac = function SpeechDataDeleteDialogComponent_Factory(t) { return new (t || SpeechDataDeleteDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_speech_data_service__WEBPACK_IMPORTED_MODULE_0__.SpeechDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbActiveModal)); };
SpeechDataDeleteDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SpeechDataDeleteDialogComponent, selectors: [["jhi-speech-data-delete-dialog"]], decls: 2, vars: 1, consts: [["name", "deleteForm", 3, "ngSubmit", 4, "ngIf"], ["name", "deleteForm", 3, "ngSubmit"], [1, "modal-header"], ["jhiTranslate", "entity.delete.title", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], ["jhiTranslate", "userSpeechData.delete.question", 3, "translateValues"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"], ["icon", "ban"], ["jhiTranslate", "entity.action.cancel"], ["type", "submit", 1, "btn", "btn-danger"], ["icon", "times"], ["jhiTranslate", "entity.action.delete"]], template: function SpeechDataDeleteDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SpeechDataDeleteDialogComponent_form_0_Template, 38, 4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.speechData);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FaIconComponent, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_2__.AlertErrorComponent], encapsulation: 2 });


/***/ }),

/***/ 59848:
/*!*************************************************************************************!*\
  !*** ./src/main/webapp/app/user/speech-data/detail/speech-data-detail.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeechDataDetailComponent": () => (/* binding */ SpeechDataDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 41995);





function SpeechDataDetailComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Device");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Message request");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "dt")(24, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Message response");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "dt")(31, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Device action");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "dt")(38, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Created by");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "dt")(45, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Created date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "dt")(53, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Modified by");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "dt")(60, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Modified date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](65, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.speechData.messageRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.speechData.messageRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.speechData.messageResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n          ", ctx_r0.deviceAction, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.speechData.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](50, 8, ctx_r0.speechData.createdDate, "dd/MM/yy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.speechData.lastModifiedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](65, 11, ctx_r0.speechData.lastModifiedDate, "dd/MM/yy HH:mm"));
} }
class SpeechDataDetailComponent {
    constructor(route) {
        this.route = route;
        this.speechData = null;
    }
    ngOnInit() {
        this.route.data.subscribe(({ speechData }) => {
            this.speechData = speechData;
            this.deviceAction = this.speechData?.deviceDTO?.deviceAction;
        });
    }
}
SpeechDataDetailComponent.ɵfac = function SpeechDataDetailComponent_Factory(t) { return new (t || SpeechDataDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
SpeechDataDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SpeechDataDetailComponent, selectors: [["jhi-speech-data-detail"]], decls: 8, vars: 1, consts: [[1, "d-flex", "justify-content-center"], [1, "col-8"], [4, "ngIf"], ["jhiTranslate", "userSpeechData.detail.title"], [1, "row-md", "jh-entity-details"], ["jhiTranslate", "userSpeechData.messageRequest"], ["jhiTranslate", "userSpeechData.messageResponse"], ["jhiTranslate", "userSpeechData.deviceAction"], ["jhiTranslate", "userDevice.createdBy"], ["jhiTranslate", "userDevice.createdDate"], ["jhiTranslate", "userDevice.lastModifiedBy"], ["jhiTranslate", "userDevice.lastModifiedDate"], ["type", "submit", "routerLink", "../../", 1, "btn", "btn-info"], ["icon", "arrow-left"], ["jhiTranslate", "entity.action.back"]], template: function SpeechDataDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SpeechDataDetailComponent_div_4_Template, 76, 14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.speechData);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_0__.TranslateDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 96904:
/*!****************************************************************************!*\
  !*** ./src/main/webapp/app/user/speech-data/list/speech-data.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeechDataComponent": () => (/* binding */ SpeechDataComponent)
/* harmony export */ });
/* harmony import */ var _config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/pagination.constants */ 74218);
/* harmony import */ var app_config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/navigation.constants */ 39586);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var _delete_speech_data_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../delete/speech-data-delete-dialog.component */ 83232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_speech_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/speech-data.service */ 64319);
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
function SpeechDataComponent_div_31_tbody_64_tr_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "a", 30);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](34, "fa-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](42, "fa-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SpeechDataComponent_div_31_tbody_64_tr_2_Template_button_click_48_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6); const sp_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.deleteSpeechData(sp_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](50, "fa-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sp_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](16, _c0, sp_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](sp_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](sp_r4.messageRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](sp_r4.messageResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](sp_r4.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](19, 10, sp_r4.createdDate, "dd/MM/yy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](sp_r4.lastModifiedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](26, 13, sp_r4.lastModifiedDate, "dd/MM/yy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](18, _c0, sp_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](20, _c1, sp_r4.id));
} }
function SpeechDataComponent_div_31_tbody_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, SpeechDataComponent_div_31_tbody_64_tr_2_Template, 58, 22, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r2.speechData)("ngForTrackBy", ctx_r2.trackIdentity);
} }
function SpeechDataComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("predicateChange", function SpeechDataComponent_div_31_Template_tr_predicateChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r7.predicate = $event); })("ascendingChange", function SpeechDataComponent_div_31_Template_tr_ascendingChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r9.ascending = $event); })("sortChange", function SpeechDataComponent_div_31_Template_tr_sortChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r10.transition()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "th", 13)(9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "th", 16)(15, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Message request");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Message response");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Created By");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](39, "Created date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](41, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Modified by");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](49, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "Modified date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](57, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](60, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](62, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](63, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](64, SpeechDataComponent_div_31_tbody_64_Template, 4, 2, "tbody", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("predicate", ctx_r0.predicate)("ascending", ctx_r0.ascending);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.speechData);
} }
const _c2 = function (a0, a1, a2) { return { page: a0, totalItems: a1, itemsPerPage: a2 }; };
function SpeechDataComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "jhi-item-count", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ngb-pagination", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("pageChange", function SpeechDataComponent_div_33_Template_ngb_pagination_pageChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r11.page = $event); })("pageChange", function SpeechDataComponent_div_33_Template_ngb_pagination_pageChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r13.transition()); });
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
class SpeechDataComponent {
    constructor(speechDataService, activatedRoute, router, modalService) {
        this.speechDataService = speechDataService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.modalService = modalService;
        this.isLoading = false;
        this.totalItems = 0;
        this.itemsPerPage = _config_pagination_constants__WEBPACK_IMPORTED_MODULE_0__.ITEMS_PER_PAGE;
        this.speechData = null;
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
                sort: `${this.predicate},${this.ascending ? app_config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.ASC : app_config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.DESC}`,
            },
        });
    }
    handleNavigation() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([this.activatedRoute.data, this.activatedRoute.queryParamMap]).subscribe(([data, params]) => {
            const page = params.get('page');
            this.page = +(page ?? 1);
            const sort = (params.get(app_config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.SORT) ?? data['defaultSort']).split(',');
            this.predicate = sort[0];
            this.ascending = sort[1] === app_config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.ASC;
            this.loadAll();
        });
    }
    loadAll() {
        this.isLoading = true;
        this.speechDataService.query({
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
    onSuccess(speechData, headers) {
        this.totalItems = Number(headers.get('X-Total-Count'));
        this.speechData = speechData;
        console.log(speechData);
    }
    sort() {
        const result = [`${this.predicate},${this.ascending ? app_config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.ASC : app_config_navigation_constants__WEBPACK_IMPORTED_MODULE_1__.DESC}`];
        if (this.predicate !== 'id') {
            result.push('id');
        }
        return result;
    }
    deleteSpeechData(speechData) {
        const modalRef = this.modalService.open(_delete_speech_data_delete_dialog_component__WEBPACK_IMPORTED_MODULE_2__.SpeechDataDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
        modalRef.componentInstance.speechData = speechData;
        // unsubscribe not needed because closed completes on modal close
        modalRef.closed.subscribe(reason => {
            if (reason === 'deleted') {
                this.loadAll();
            }
        });
    }
}
SpeechDataComponent.ɵfac = function SpeechDataComponent_Factory(t) { return new (t || SpeechDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_speech_data_service__WEBPACK_IMPORTED_MODULE_3__.SpeechDataService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal)); };
SpeechDataComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: SpeechDataComponent, selectors: [["jhi-speech-data"]], decls: 36, vars: 6, consts: [["id", "user-management-page-heading", "jhiTranslate", "userSpeechData.home.title", "data-cy", "userManagementPageHeading"], [1, "d-flex", "justify-content-end"], [1, "btn", "btn-info", "me-2", 3, "disabled", "click"], ["icon", "sync", 3, "spin"], ["jhiTranslate", "userSpeechData.home.refreshListLabel"], [1, "btn", "btn-primary", "jh-create-entity", 3, "routerLink"], ["icon", "plus"], ["jhiTranslate", "userSpeechData.home.createLabel"], ["class", "table-responsive", 4, "ngIf"], [4, "ngIf"], [1, "table-responsive"], ["aria-describedby", "user-management-page-heading", 1, "table", "table-striped"], ["jhiSort", "", 3, "predicate", "ascending", "predicateChange", "ascendingChange", "sortChange"], ["scope", "col", "jhiSortBy", "id"], ["jhiTranslate", "global.field.id"], ["icon", "sort"], ["scope", "col", "jhiSortBy", "messageRequest"], ["jhiTranslate", "userSpeechData.messageRequest"], ["scope", "col", "jhiSortBy", "messageResponse"], ["jhiTranslate", "userSpeechData.messageResponse"], ["scope", "col", "jhiSortBy", "createdBy"], ["jhiTranslate", "userSpeechData.createdBy"], ["scope", "col", "jhiSortBy", "createdDate"], ["jhiTranslate", "userSpeechData.createdDate"], ["scope", "col", "jhiSortBy", "lastModifiedBy"], ["jhiTranslate", "userSpeechData.lastModifiedBy"], ["scope", "col", "jhiSortBy", "lastModifiedDate"], ["jhiTranslate", "userSpeechData.lastModifiedDate"], ["scope", "col"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "routerLink"], [1, "text-end"], [1, "btn-group"], ["type", "submit", 1, "btn", "btn-info", "btn-sm", 3, "routerLink"], ["icon", "eye"], ["jhiTranslate", "entity.action.view", 1, "d-none", "d-md-inline"], ["type", "submit", "queryParamsHandling", "merge", 1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], ["icon", "pencil-alt"], ["jhiTranslate", "entity.action.edit", 1, "d-none", "d-md-inline"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", 3, "click"], ["icon", "times"], ["jhiTranslate", "entity.action.delete", 1, "d-none", "d-md-inline"], [1, "d-flex", "justify-content-center"], [3, "params"], [3, "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks", "pageChange"]], template: function SpeechDataComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SpeechDataComponent_Template_button_click_9_listener() { return ctx.loadAll(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Create a new speech data");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, SpeechDataComponent_div_31_Template, 67, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, SpeechDataComponent_div_33_Template, 12, 11, "div", 9);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.speechData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.speechData);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbPagination, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FaIconComponent, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__.TranslateDirective, _shared_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.AlertComponent, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_6__.AlertErrorComponent, _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_7__.SortByDirective, _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_8__.SortDirective, _shared_pagination_item_count_component__WEBPACK_IMPORTED_MODULE_9__.ItemCountComponent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 95880:
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/user/speech-data/speech-data.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeechDataModule": () => (/* binding */ SpeechDataModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/shared.module */ 92267);
/* harmony import */ var _speech_data_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speech-data.route */ 86223);
/* harmony import */ var _list_speech_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/speech-data.component */ 96904);
/* harmony import */ var _update_speech_data_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update/speech-data-update.component */ 61988);
/* harmony import */ var _delete_speech_data_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete/speech-data-delete-dialog.component */ 83232);
/* harmony import */ var _detail_speech_data_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/speech-data-detail.component */ 59848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);









class SpeechDataModule {
}
SpeechDataModule.ɵfac = function SpeechDataModule_Factory(t) { return new (t || SpeechDataModule)(); };
SpeechDataModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SpeechDataModule });
SpeechDataModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(_speech_data_route__WEBPACK_IMPORTED_MODULE_1__.speechDataRoute)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SpeechDataModule, { declarations: [_list_speech_data_component__WEBPACK_IMPORTED_MODULE_2__.SpeechDataComponent,
        _update_speech_data_update_component__WEBPACK_IMPORTED_MODULE_3__.SpeechDataUpdateComponent,
        _delete_speech_data_delete_dialog_component__WEBPACK_IMPORTED_MODULE_4__.SpeechDataDeleteDialogComponent,
        _detail_speech_data_detail_component__WEBPACK_IMPORTED_MODULE_5__.SpeechDataDetailComponent], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 86223:
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/user/speech-data/speech-data.route.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeechDataResolve": () => (/* binding */ SpeechDataResolve),
/* harmony export */   "speechDataRoute": () => (/* binding */ speechDataRoute)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _list_speech_data_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/speech-data.component */ 96904);
/* harmony import */ var _update_speech_data_update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update/speech-data-update.component */ 61988);
/* harmony import */ var _detail_speech_data_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/speech-data-detail.component */ 59848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_speech_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/speech-data.service */ 64319);







class SpeechDataResolve {
    constructor(service) {
        this.service = service;
    }
    resolve(route) {
        const id = route.params['id'];
        if (id) {
            return this.service.find(id);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
    }
}
SpeechDataResolve.ɵfac = function SpeechDataResolve_Factory(t) { return new (t || SpeechDataResolve)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_service_speech_data_service__WEBPACK_IMPORTED_MODULE_3__.SpeechDataService)); };
SpeechDataResolve.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SpeechDataResolve, factory: SpeechDataResolve.ɵfac, providedIn: 'root' });
const speechDataRoute = [
    {
        path: '',
        component: _list_speech_data_component__WEBPACK_IMPORTED_MODULE_0__.SpeechDataComponent,
        data: {
            defaultSort: 'id,asc',
        },
    },
    {
        path: ':id/view',
        component: _detail_speech_data_detail_component__WEBPACK_IMPORTED_MODULE_2__.SpeechDataDetailComponent,
        resolve: {
            speechData: SpeechDataResolve,
        },
    },
    {
        path: 'new',
        component: _update_speech_data_update_component__WEBPACK_IMPORTED_MODULE_1__.SpeechDataUpdateComponent,
        resolve: {
            speechData: SpeechDataResolve,
        },
    },
    {
        path: ':id/edit',
        component: _update_speech_data_update_component__WEBPACK_IMPORTED_MODULE_1__.SpeechDataUpdateComponent,
        resolve: {
            speechData: SpeechDataResolve,
        },
    },
];


/***/ }),

/***/ 61988:
/*!*************************************************************************************!*\
  !*** ./src/main/webapp/app/user/speech-data/update/speech-data-update.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeechDataUpdateComponent": () => (/* binding */ SpeechDataUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _speech_data_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../speech-data.model */ 66565);
/* harmony import */ var _config_device_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/device.constants */ 5439);
/* harmony import */ var _device_device_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../device/device.model */ 88279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _service_speech_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/speech-data.service */ 64319);
/* harmony import */ var _device_service_device_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../device/service/device.service */ 69190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 41995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);













function SpeechDataUpdateComponent_div_26_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n            This field is required.\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { max: 100 }; };
function SpeechDataUpdateComponent_div_26_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n            This field cannot be longer than 100 characters.\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
} }
function SpeechDataUpdateComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SpeechDataUpdateComponent_div_26_small_2_Template, 2, 0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, SpeechDataUpdateComponent_div_26_small_4_Template, 2, 2, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r0.editForm.get("messageRequest")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.editForm.get("messageRequest")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.maxlength);
} }
function SpeechDataUpdateComponent_div_36_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n            This field is required.\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function SpeechDataUpdateComponent_div_36_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n            This field cannot be longer than 100 characters.\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c0));
} }
function SpeechDataUpdateComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SpeechDataUpdateComponent_div_36_small_2_Template, 2, 0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, SpeechDataUpdateComponent_div_36_small_4_Template, 2, 2, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.editForm.get("messageResponse")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.editForm.get("messageResponse")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.maxlength);
} }
function SpeechDataUpdateComponent_div_39_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", device_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](device_r9.name);
} }
function SpeechDataUpdateComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "laicbel", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Device");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, SpeechDataUpdateComponent_div_39_option_7_Template, 2, 2, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.devices);
} }
function SpeechDataUpdateComponent_div_46_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const da_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", da_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](da_r11);
} }
function SpeechDataUpdateComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "laicbel", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Device type");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, SpeechDataUpdateComponent_div_46_option_7_Template, 2, 2, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.deviceActions);
} }
const speechDataTemplate = {};
class SpeechDataUpdateComponent {
    constructor(speechDataService, deviceService, route) {
        this.speechDataService = speechDataService;
        this.deviceService = deviceService;
        this.route = route;
        this.isSaving = false;
        this.deviceActions = _config_device_constants__WEBPACK_IMPORTED_MODULE_1__.DEVICEACTION;
        this.devices = null;
        this.isCreating = false;
        this.editForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(speechDataTemplate.id),
            messageRequest: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(speechDataTemplate.messageRequest, {
                nonNullable: true,
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)
                    // Validators.pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
                ],
            }),
            messageResponse: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(speechDataTemplate.messageResponse, {
                nonNullable: true,
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(100)
                ]
            }),
            deviceId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("Device", { nonNullable: true }),
            deviceAction: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("ON", { nonNullable: true }),
            deviceType: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("CONTROL")
        });
    }
    ngOnInit() {
        this.route.data.subscribe(({ speechData }) => {
            if (speechData) {
                console.log("edit speechData");
                this.isCreating = false;
                this.editForm.reset(speechData);
            }
            else {
                this.isCreating = true;
                console.log("create new speechData");
                this.editForm.reset();
            }
        });
        this.loadAll();
    }
    save() {
        this.isSaving = true;
        const speechData = this.editForm.getRawValue();
        const deviceDTO = new _device_device_model__WEBPACK_IMPORTED_MODULE_2__.DeviceDTO(speechData.deviceId, "CONTROL", speechData.deviceAction);
        const spData = new _speech_data_model__WEBPACK_IMPORTED_MODULE_0__.SpeechDataDTO(speechData.id, speechData.messageRequest, speechData.messageResponse, null, null, null, null, deviceDTO);
        if (speechData.id !== null) {
            this.speechDataService.update(speechData).subscribe({
                next: () => this.onSaveSuccess(),
                error: () => this.onSaveError()
            });
        }
        else {
            this.speechDataService.create(spData).subscribe({
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
    loadAll() {
        this.deviceService.queryDeviceAction("CONTROL").subscribe({
            next: (res) => {
                this.onSuccess(res);
            }
        });
    }
    onSuccess(devices) {
        this.devices = devices;
        console.log(devices);
    }
}
SpeechDataUpdateComponent.ɵfac = function SpeechDataUpdateComponent_Factory(t) { return new (t || SpeechDataUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_speech_data_service__WEBPACK_IMPORTED_MODULE_3__.SpeechDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_device_service_device_service__WEBPACK_IMPORTED_MODULE_4__.DeviceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute)); };
SpeechDataUpdateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SpeechDataUpdateComponent, selectors: [["jhi-speech-data-update"]], decls: 67, vars: 8, consts: [[1, "d-flex", "justify-content-center"], [1, "col-8"], ["name", "editForm", "role", "form", "novalidate", "", 3, "formGroup", "ngSubmit"], ["id", "myUserLabel", "jhiTranslate", "userSpeechData.home.createOrEditLabel"], [1, "mb-3", 3, "hidden"], ["jhiTranslate", "global.field.id"], ["type", "text", "name", "id", "formControlName", "id", "readonly", "", 1, "form-control"], [1, "mb-3"], ["jhiTranslate", "userSpeechData.messageRequest", 1, "form-label"], ["type", "text", "name", "messageRequest", "formControlName", "messageRequest", 1, "form-control"], [4, "ngIf"], ["jhiTranslate", "userSpeechData.messageResponse"], ["type", "text", "name", "messageResponse", "formControlName", "messageResponse", 1, "form-control"], ["class", "mb-3", 4, "ngIf"], ["type", "text", "name", "deviceType", "formControlName", "deviceType", "readonly", "", 1, "form-control"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["icon", "ban"], ["jhiTranslate", "entity.action.cancel"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["icon", "save"], ["jhiTranslate", "entity.action.save"], ["class", "form-text text-danger", "jhiTranslate", "entity.validation.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "entity.validation.maxlength", 3, "translateValues", 4, "ngIf"], ["jhiTranslate", "entity.validation.required", 1, "form-text", "text-danger"], ["jhiTranslate", "entity.validation.maxlength", 1, "form-text", "text-danger", 3, "translateValues"], ["jhiTranslate", "userDevice.home.title"], ["id", "deviceId", "name", "deviceId", "formControlName", "deviceId", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["jhiTranslate", "userDevice.deviceAction"], ["id", "deviceAction", "name", "deviceAction", "formControlName", "deviceAction", 1, "form-control"]], template: function SpeechDataUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function SpeechDataUpdateComponent_Template_form_ngSubmit_4_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Create or edit a speech data");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Message request");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, SpeechDataUpdateComponent_div_26_Template, 9, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Message response");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, SpeechDataUpdateComponent_div_36_Template, 6, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, SpeechDataUpdateComponent_div_39_Template, 10, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, SpeechDataUpdateComponent_div_46_Template, 10, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SpeechDataUpdateComponent_Template_button_click_48_listener() { return ctx.previousState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](49, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](50, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](66, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.editForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", !ctx.editForm.value.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.editForm.get("messageRequest").invalid && (ctx.editForm.get("messageRequest").dirty || ctx.editForm.get("messageRequest").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.editForm.get("messageResponse").invalid && (ctx.editForm.get("messageResponse").dirty || ctx.editForm.get("messageResponse").touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.devices && ctx.devices.length > 0 && ctx.isCreating);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.deviceActions && ctx.deviceActions.length > 0 && ctx.isCreating);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.editForm.invalid || ctx.isSaving);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_6__.AlertErrorComponent], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_user_speech-data_speech-data_module_ts.js.map