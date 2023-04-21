"use strict";
(self["webpackChunksmarthome"] = self["webpackChunksmarthome"] || []).push([["common"],{

/***/ 5439:
/*!********************************************************!*\
  !*** ./src/main/webapp/app/config/device.constants.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEVICEACTION": () => (/* binding */ DEVICEACTION),
/* harmony export */   "DEVICETYPES": () => (/* binding */ DEVICETYPES)
/* harmony export */ });
const DEVICETYPES = [
    'CONTROL',
    'MONITOR',
    // jhipster-needle-i18n-language-constant - JHipster will add/remove languages in this array
];
const DEVICEACTION = [
    'ON',
    'OFF',
    'NOTHING'
    // jhipster-needle-i18n-language-constant - JHipster will add/remove languages in this array
];


/***/ }),

/***/ 39586:
/*!************************************************************!*\
  !*** ./src/main/webapp/app/config/navigation.constants.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ASC": () => (/* binding */ ASC),
/* harmony export */   "DEFAULT_SORT_DATA": () => (/* binding */ DEFAULT_SORT_DATA),
/* harmony export */   "DESC": () => (/* binding */ DESC),
/* harmony export */   "ITEM_DELETED_EVENT": () => (/* binding */ ITEM_DELETED_EVENT),
/* harmony export */   "SORT": () => (/* binding */ SORT)
/* harmony export */ });
const ASC = 'asc';
const DESC = 'desc';
const SORT = 'sort';
const ITEM_DELETED_EVENT = 'deleted';
const DEFAULT_SORT_DATA = 'defaultSort';


/***/ }),

/***/ 74218:
/*!************************************************************!*\
  !*** ./src/main/webapp/app/config/pagination.constants.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ITEMS_PER_PAGE": () => (/* binding */ ITEMS_PER_PAGE),
/* harmony export */   "PAGE_HEADER": () => (/* binding */ PAGE_HEADER),
/* harmony export */   "TOTAL_COUNT_RESPONSE_HEADER": () => (/* binding */ TOTAL_COUNT_RESPONSE_HEADER)
/* harmony export */ });
const TOTAL_COUNT_RESPONSE_HEADER = 'X-Total-Count';
const PAGE_HEADER = 'page';
const ITEMS_PER_PAGE = 20;


/***/ }),

/***/ 88279:
/*!*********************************************************!*\
  !*** ./src/main/webapp/app/user/device/device.model.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Device": () => (/* binding */ Device),
/* harmony export */   "DeviceDTO": () => (/* binding */ DeviceDTO)
/* harmony export */ });
class Device {
    constructor(id, name, deviceType, deviceAction, createdBy, createdDate, lastModifiedBy, lastModifiedDate) {
        this.id = id;
        this.name = name;
        this.deviceType = deviceType;
        this.deviceAction = deviceAction;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.lastModifiedBy = lastModifiedBy;
        this.lastModifiedDate = lastModifiedDate;
    }
}
class DeviceDTO {
    constructor(id, deviceType, deviceAction) {
        this.id = id;
        this.deviceType = deviceType;
        this.deviceAction = deviceAction;
    }
}


/***/ }),

/***/ 69190:
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/user/device/service/device.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeviceService": () => (/* binding */ DeviceService)
/* harmony export */ });
/* harmony import */ var _core_request_request_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _core_config_application_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/config/application-config.service */ 81082);





class DeviceService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/devices');
    }
    query(req) {
        const options = (0,_core_request_request_util__WEBPACK_IMPORTED_MODULE_0__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    queryDeviceAction(deviceType) {
        return this.http.get(`${this.resourceUrl}?deviceType=${deviceType}`);
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`);
    }
    create(device) {
        return this.http.post(this.resourceUrl, device);
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }
    update(device) {
        return this.http.put(this.resourceUrl, device);
    }
    updateStateDevice(id) {
        return this.http.put(`${this.resourceUrl}/action/${id}`, null);
    }
}
DeviceService.ɵfac = function DeviceService_Factory(t) { return new (t || DeviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_1__.ApplicationConfigService)); };
DeviceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DeviceService, factory: DeviceService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map