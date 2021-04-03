(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/QN8":
/*!*************************************************************!*\
  !*** ./src/app/work/test-details/test-details.component.ts ***!
  \*************************************************************/
/*! exports provided: TestDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDetailsComponent", function() { return TestDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _project_master_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project-master-service.service */ "omAc");


class TestDetailsComponent {
    constructor(projectService) {
        this.projectService = projectService;
    }
    ngOnInit() {
    }
    getVirtual() {
        this.projectService.getProjectMaster().subscribe(res => {
            this.Joyee = res.data;
        });
    }
}
TestDetailsComponent.ɵfac = function TestDetailsComponent_Factory(t) { return new (t || TestDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_master_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectMasterServiceService"])); };
TestDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestDetailsComponent, selectors: [["app-test-details"]], decls: 0, vars: 0, template: function TestDetailsComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "/USv":
/*!*********************************************************!*\
  !*** ./src/app/shared/lets-work/lets-work.component.ts ***!
  \*********************************************************/
/*! exports provided: LetsWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetsWorkComponent", function() { return LetsWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-wow */ "ME1z");


class LetsWorkComponent {
    constructor(wowService) {
        this.wowService = wowService;
        this.wowService.init();
    }
    ngOnInit() {
    }
}
LetsWorkComponent.ɵfac = function LetsWorkComponent_Factory(t) { return new (t || LetsWorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_1__["NgwWowService"])); };
LetsWorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LetsWorkComponent, selectors: [["app-lets-work"]], decls: 11, vars: 0, consts: [[1, "start-project"], [1, "container"], [1, "row", "flex-column"], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "playfair", "fadeInUp", "wow", "animated"], ["data-letters", "Start a project", "data-wow-duration", "1.4s", "data-wow-delay", "0.5s", 1, "gothic", "effect", "fadeInUp", "animated"], [1, "top"], [1, "top-left"], [1, "bottom"], [1, "bottom-right"]], template: function LetsWorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Let's work together ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Start a project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZXRzLXdvcmsuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\gitUpload\src\main.ts */"zUnb");


/***/ }),

/***/ "04Dc":
/*!*****************************************************************!*\
  !*** ./src/app/work/project-detail/project-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _project_master_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project-master-service.service */ "omAc");
/* harmony import */ var src_app_shared_services_technology_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/technology.service */ "7s1k");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/angular */ "UMfn");







const _c0 = function (a0, a1) { return [a0, a1]; };
function ProjectDetailComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Previous Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Next Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, "/work/" + detail_r2.id, detail_r2.project_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + detail_r2.large_banner_image + ")");
} }
function ProjectDetailComponent_div_3_h2_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const srvcName_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", srvcName_r47, " ");
} }
function ProjectDetailComponent_div_3_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Activity Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Activity Images displays the stunts performed by expects at events spreading awareness regarding the event and promoting it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Discover Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mountain Dew organizes several events and activities related to bike stunts.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "It shows According to our selection, it specifies the activity details such as Activity Date, Location and Activity Time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Simple and Easy to use");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u201CDays of Dares\u201D activity event can be sorted by location and date. Activity Images displays the stunts performed by expects at events spreading awareness regarding the event and promoting it.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Activity Report includes details regarding the consumption of stock during the event and Customer feedback are also registered for the reference.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Through a series of neuroperformance-specific training drills, #BeFirst can improve visual and audio reactions and processing, decision making, speed and accuracy. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Neuroperformance training is the secret weapon that allows world-class athletes to perform at their peak and win, time after time. #BeFirst is multi-faceted neuroperformance training in the palm of your hand. Take it wherever your sport takes you. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Training");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " You are training neural pathways all the time. These pathways can be great skills that you have practised for years and are second nature, or they can be skills that need more work and refinement. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " There are also great reasons to integrate #BeFirst into your other training sessions and its very easy to do. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Testing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " We recommend you complete full testing at least once a week. This will enable you to measure your progress in all skills across the board, leaving no stone unturned. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Single testing allows you to hone your skills in one particular area. This may be an area you struggle with, one that is highly important for your sport. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Accelerate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Never before has it been possible to train your reactions in this manner using just your phone. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Accelerate allows you to measure your left and right sides. You need to be just as fast on both sides for optimal performance. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h1", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Recognition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " This is designed to train your peripheral vision and your ability to process visual information coming from the periphery. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Many athletes tend to make the most errors when information is coming from the sides of their vision. Watch yourself improve and see how that translates into your sport. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " YOU DON\u2019T TRAIN HARD TO BE SECOND #BEFIRST IS A NEUROPERFORMANCE-BASED APP THAT GIVES ATHLETES AN UNFAIR ADVANTAGE. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " MULTIPLE TESTS TO TRAIN YOUR BRAIN TRAIN BY YOURSELF OR TAKE ON YOUR FRIENDS AND SEE WHO REALLY HAS THE SHARPEST SKILLS. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The one-stop fitness and wellbeing shop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I.AM is changing the way you do FIT - I.AM gives you the freedom to workout on your own terms.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " The free Kiwi fitness app helps you find like-minded training buddies, fitness experts and classes that match your interests and location.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Find like-minded training buddies, fitness experts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Match with training buddies to get you moving and motivated - we all know fitness is way more fun with friends! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Browse fitness and wellbeing experts and classes nearby, and book sessions directly through the app, no sweat. Find the latest promotions and offers on all things health and fitness.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Promote your one-on-one PT workouts and group training sessions or classes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Promote your fitness and health deals, programs, or product to new clientele. Increase your revenue. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Match with training buddies to get you moving and motivated.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "I.AM gives you access to active people who want to easily and conveniently book your sessions and classes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tap you and your business into a whole new client market that are actively looking for fitness options.Promote your fitness deals to a wider audience.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "#battle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Battle is world's first reaction based application for multiplayer. Along with the changing demand of training in sports this application helps athletes gets lightening reaction.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Battle helps making reaction training easy, social and competitive. For athletes training will be fun with this app. It helps you keep engaged with your reaction training regardless of place and time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Battle allows you to invite friends and compete with them. You can message your online friends whom you want to compete with. Risking your coin you can start battle. Get 300 coins free everyday. The user with fastest reaction wins.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Battle profile keeps track of your battle record and stack up your coin.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "#battle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Message your friend to set up the battle globally.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "They need to accept the battle in order to start it. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Once he accepts the battle it let you set the coin and number of rounds for the battle.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "#friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Let you set the online friends available for the battle.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Message your friend and setup the battle amongst your friend in real time.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "And see who has the fastest reacts wins.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "#Battle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Battle with friends, Compete for fastest reaction, Be the winner.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Offers An Exclusive Range Of Value Added Fabrics For Fashion Designers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A Decade After Lot Of Research And Looking To Commendable Graph Of Indian Fashion Designers, Blendd Has Come Up With A Novel Idea To Cater To The Requirement Of Selected And Top Notch Designers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Blendd Is Very Much Aware Of The Fast Changing Fashion Scenerio In India And Hence It Has A Team Of Exclusive Designers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Blendd is Exploring Major Cosmopolitian Cities Of India, It Is Now On A Unique Venture To Provide Classy Fabrics To Top Line Designers Of India.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Blendd Is Now On A Unique Venture To Provide Classy Fabrics To Top Line Designers Of India.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Eye-catchy Print & Wonderful Pattern");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Find and Buy What You Love Wherever You Are");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Easy and Secure Payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Inspired by a love of reading interactive stories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "To create and promote an innovative storytelling platform for the people of the world.Choose for FREE from our entire collection of both submitted and exclusive stories. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Write short and interactive stories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Read from three story types: Short Stories, Choice Stories, and Game Stories. Save your progress with our bookmark feature. Join our monthly and season competitions to earn awesome prizes. Great opportunity to share your work with thousands of readers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A Homepage with all stories, big and small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Inspired by a love of reading interactive stories, we now bring the experience to your mobile, with ALL our stories being FREE from start to finish.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "EDUCATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Whether you are a beginner or an advanced swimmer, getting some tips and trick is always added to learning. It has all the information regarding learning swimming techniques in pdf and video format.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "This reference demonstrates with video and pictures.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "-Warm up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "-Trunk Control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "-Shoulder Control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "-Learn to swim, etc\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Videos and pdf are made available likewise.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Here are the basic swimming techniques, kind of swimming and learning for a beginner.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "This reference demonstrates with video and pictures.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "-The basic technique of swimming");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "-Swimming Style");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "-Learn to Swim");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "-How to Swim");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "-Training Tips");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Training will be provided as per levels.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "As a swimmer, you need to take lessons, but you can start learning to swim by trying a number of things on your own. This application will help you if you want to learn swimming or improve your swimming.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Link Videos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "This video on service is recommended for all competitive swimmers. Swimmers of all ages and abilities will benefit from these videos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "The user can merge the video to make their own learning tutorial. Which can be further downloaded for future reference.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Setup the user profile which lets you update the profile pic, Emailid, Gender and Date of Birth.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "The data in the app can be updated through the admin panel such as videos and other training content. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Interior Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Fully fledged light settings to mimic any time of the day, any lighting scenario. Save your scenes to re-visit them again and further make changes according to your client's requirements.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_42_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_42_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_42_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { clickable: true }; };
function ProjectDetailComponent_div_3_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "swiper", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectDetailComponent_div_3_div_42_ng_template_4_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectDetailComponent_div_3_div_42_ng_template_5_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectDetailComponent_div_3_div_42_ng_template_6_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1))("loop", true);
} }
function ProjectDetailComponent_div_3_div_43_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_43_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_43_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_43_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_43_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_43_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_43_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_43_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_43_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_43_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "swiper", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectDetailComponent_div_3_div_43_ng_template_4_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectDetailComponent_div_3_div_43_ng_template_5_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectDetailComponent_div_3_div_43_ng_template_6_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectDetailComponent_div_3_div_43_ng_template_7_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectDetailComponent_div_3_div_43_ng_template_8_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectDetailComponent_div_3_div_43_ng_template_9_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectDetailComponent_div_3_div_43_ng_template_10_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectDetailComponent_div_3_div_43_ng_template_11_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProjectDetailComponent_div_3_div_43_ng_template_12_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProjectDetailComponent_div_3_div_43_ng_template_13_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1))("loop", true);
} }
function ProjectDetailComponent_div_3_div_44_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_44_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_44_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_44_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_44_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "swiper", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectDetailComponent_div_3_div_44_ng_template_3_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectDetailComponent_div_3_div_44_ng_template_4_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectDetailComponent_div_3_div_44_ng_template_5_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectDetailComponent_div_3_div_44_ng_template_6_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectDetailComponent_div_3_div_44_ng_template_7_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1))("loop", true)("spaceBetween", 30)("slidesPerView", 3);
} }
function ProjectDetailComponent_div_3_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Play It");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "The way you would\u2019ve played catching eggs in the basket. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "This game has multiple baskets with different shapes and colors. Let different characters fall in their respective basket cum shapes. All you can do is rotate the basket array row. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Refer Help if you don\u2019t know how to play.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Level Ups");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "The more your brain gets adapted, the more challenging the game gears up to. More shapes get added each time. More swiftly the characters start falling. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Beware for any catch getting missed. The game ends.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Score Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Does your score make it to the leaderboard? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Does your score set benchmarks for others to beat it?Share and keep yourself updated.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Explore what score you can reach with just left right controls in the bottom panel and obviously your brains. Develop your fine motor skills while playing TOFU.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_48_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_48_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_48_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_48_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "swiper", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectDetailComponent_div_3_div_48_ng_template_3_Template, 4, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectDetailComponent_div_3_div_48_ng_template_4_Template, 4, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectDetailComponent_div_3_div_48_ng_template_5_Template, 4, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectDetailComponent_div_3_div_48_ng_template_6_Template, 4, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1))("loop", true)("slidesPerView", 3);
} }
function ProjectDetailComponent_div_3_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Browse through a gallery of fidget spinners to choose the one you like the most and keep it as your live wallpaper. Change the direction of the spinner by swiping on the screen. Select the style 2 to use gravity for spinning the fidget.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Place a Bet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "It shows the list of LIVE BETS where the user can accept or delete the bet. Once accepted the user needs to select the insect he wants to bet on and the amount for betting.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PROFILE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Live chat with the other betting users.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "STORE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Betting can be done by BZ Coins which can be purchased from the app. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fun word search battles with friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "It has two modes, practice and daily challenges. The practice provides circle word puzzle and secret word puzzle while Challenges allow playing with other players. It also has daily challenges playing which the player can earn coins, reward and diamonds. It will also be monitored by time and Hints are also provided for each game.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "There will be ranking for all the challenges you played with other players. It will also allow to create your profile and maintain your challenge record with other players.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Coins will be used for using hints and accessing daily challenges. It can be purchased through store. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Challenge your friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Or be matched against arandom combatant!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The player can create his own profile which keeps track of his level, coins and diamonds earned.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Challenge other players and complete daily challenges to earn coin and diamond.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Choose your favorite avatar. And make your profile potent.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "It lets the player make changes for sound, vibration and remove adds and restore purchase.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "The player will be given 4*4 crossword tiles where he has to find a certain number of words. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quasi, accusantium placeat qui possimus itaque nam praesentium quibusdam, eveniet nihil quisquam perferendis vero natus corrupti laboriosam amet maxime, nesciunt sint!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aut cumque, rerum perspiciatis sunt dignissimos! Iste iure, quas rerum dolore culpa, impedit repellat, corporis, cumque hic ut molestias commodi repudiandae!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero fugit dolorum facilis commodi odio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Client Programme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quasi, accusantium placeat qui possimus itaque nam praesentium quibusdam, eveniet nihil quisquam perferendis vero natus corrupti laboriosam amet maxime, nesciunt sint!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aut cumque, rerum perspiciatis sunt dignissimos! Iste iure, quas rerum dolore culpa, impedit repellat, corporis, cumque hic ut molestias commodi repudiandae!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero fugit dolorum facilis commodi odio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "History Sheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quasi, accusantium placeat qui possimus itaque nam praesentium quibusdam, eveniet nihil quisquam perferendis vero natus corrupti laboriosam amet maxime, nesciunt sint!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aut cumque, rerum perspiciatis sunt dignissimos! Iste iure, quas rerum dolore culpa, impedit repellat, corporis, cumque hic ut molestias commodi repudiandae!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum vero fugit dolorum facilis commodi odio.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_swiper_59_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_swiper_59_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_swiper_59_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_swiper_59_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_swiper_59_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_swiper_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "swiper", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectDetailComponent_div_3_swiper_59_ng_template_2_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectDetailComponent_div_3_swiper_59_ng_template_3_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectDetailComponent_div_3_swiper_59_ng_template_4_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectDetailComponent_div_3_swiper_59_ng_template_5_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectDetailComponent_div_3_swiper_59_ng_template_6_Template, 2, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1))("loop", true);
} }
function ProjectDetailComponent_div_3_div_60_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_60_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_60_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_60_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_60_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "swiper", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectDetailComponent_div_3_div_60_ng_template_3_Template, 4, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectDetailComponent_div_3_div_60_ng_template_4_Template, 4, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectDetailComponent_div_3_div_60_ng_template_5_Template, 4, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectDetailComponent_div_3_div_60_ng_template_6_Template, 4, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectDetailComponent_div_3_div_60_ng_template_7_Template, 4, 0, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1))("loop", true)("slidesPerView", 3);
} }
function ProjectDetailComponent_div_3_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fasten your seat belts to fly safe with Fuzzy across the space. But there\u2019s a problem. Fuzzy just knows to move straight. Kindly guide him. Help him land on haphazardly placed bushes in space by just precisely swiping your finger to right or left. A little more and he\u2019ll be gone. The game ends.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Hope you enjoy the space ride with Fuzzy and its cool sound effects. All you shall need is little focus but more swiping precision and analysis. If you really got it, see you on the leaderboard then.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const osm_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", osm_r100.project_photos, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_3_ng_template_1_Template, 2, 1, "ng-template", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "swiper", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_3_Template, 2, 0, "div", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const details_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](20).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagination", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1))("loop", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", details_r3.project_image);
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template, 4, 4, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r97.router.url !== "/work/30/Sliding-Santa");
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r96.router.url !== "/work/12/Roller-Coaster");
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r95.router.url !== "/work/11/Mountain-Dew");
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r94.router.url !== "/work/13/BeFirst");
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r93.router.url !== "/work/14/I-Am");
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r92.router.url !== "/work/15/Battle");
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r91.router.url !== "/work/16/Blendd");
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r90.router.url !== "/work/17/Mestory");
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r89.router.url !== "/work/18/QLD-Swim-Academy");
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r88.router.url !== "/work/19/Interior-Design");
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r87.router.url !== "/work/20/Fire-And-Smoke");
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r86.router.url !== "/work/21/Greencom");
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r85.router.url !== "/work/22/Boxes");
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r84.router.url !== "/work/23/Tufa");
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r83.router.url !== "/work/24/Fidget-Live-Wallpaper");
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r82.router.url !== "/work/25/Bugwarz");
} }
function ProjectDetailComponent_div_3_div_62_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r81.router.url !== "/work/26/Word-World");
} }
function ProjectDetailComponent_div_3_div_62_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r80.router.url !== "/work/27/Swype");
} }
function ProjectDetailComponent_div_3_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectDetailComponent_div_3_div_62_div_1_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r46.router.url !== "/work/28/Puzzle-Game");
} }
function ProjectDetailComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectDetailComponent_div_3_h2_7_Template, 2, 1, "h2", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Avalilable For");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProjectDetailComponent_div_3_div_20_Template, 11, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ProjectDetailComponent_div_3_div_21_Template, 12, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProjectDetailComponent_div_3_div_22_Template, 12, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProjectDetailComponent_div_3_div_23_Template, 68, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProjectDetailComponent_div_3_div_24_Template, 22, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProjectDetailComponent_div_3_div_25_Template, 12, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProjectDetailComponent_div_3_div_26_Template, 10, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProjectDetailComponent_div_3_div_27_Template, 4, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProjectDetailComponent_div_3_div_28_Template, 3, 0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ProjectDetailComponent_div_3_div_29_Template, 64, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProjectDetailComponent_div_3_div_30_Template, 11, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProjectDetailComponent_div_3_div_31_Template, 10, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProjectDetailComponent_div_3_div_32_Template, 14, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProjectDetailComponent_div_3_div_33_Template, 9, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ProjectDetailComponent_div_3_div_34_Template, 18, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ProjectDetailComponent_div_3_div_35_Template, 11, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ProjectDetailComponent_div_3_div_36_Template, 23, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, ProjectDetailComponent_div_3_div_37_Template, 27, 0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ProjectDetailComponent_div_3_div_38_Template, 13, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ProjectDetailComponent_div_3_div_39_Template, 13, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ProjectDetailComponent_div_3_div_40_Template, 2, 0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ProjectDetailComponent_div_3_div_41_Template, 11, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProjectDetailComponent_div_3_div_42_Template, 7, 3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ProjectDetailComponent_div_3_div_43_Template, 14, 3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ProjectDetailComponent_div_3_div_44_Template, 8, 5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ProjectDetailComponent_div_3_div_45_Template, 16, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ProjectDetailComponent_div_3_div_46_Template, 24, 0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ProjectDetailComponent_div_3_div_47_Template, 4, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ProjectDetailComponent_div_3_div_48_Template, 7, 4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ProjectDetailComponent_div_3_div_49_Template, 5, 0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ProjectDetailComponent_div_3_div_50_Template, 2, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ProjectDetailComponent_div_3_div_51_Template, 9, 0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ProjectDetailComponent_div_3_div_52_Template, 15, 0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ProjectDetailComponent_div_3_div_53_Template, 5, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ProjectDetailComponent_div_3_div_54_Template, 16, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ProjectDetailComponent_div_3_div_55_Template, 11, 0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ProjectDetailComponent_div_3_div_56_Template, 32, 0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ProjectDetailComponent_div_3_div_57_Template, 46, 0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ProjectDetailComponent_div_3_swiper_59_Template, 7, 3, "swiper", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ProjectDetailComponent_div_3_div_60_Template, 8, 4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ProjectDetailComponent_div_3_div_61_Template, 7, 0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ProjectDetailComponent_div_3_div_62_Template, 2, 1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Art direction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "UI design");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Concept");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Service design");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Character design");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Animation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "UX design");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Strategy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const details_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", details_r3.service_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](details_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/11/Mountain-Dew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/11/Mountain-Dew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/11/Mountain-Dew");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/13/BeFirst");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/14/I-Am");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/14/I-Am");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/14/I-Am");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/14/I-Am");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/14/I-Am");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/15/Battle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/16/Blendd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/16/Blendd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/16/Blendd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/16/Blendd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/17/Mestory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/17/Mestory");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/18/QLD-Swim-Academy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/18/QLD-Swim-Academy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/18/QLD-Swim-Academy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/18/QLD-Swim-Academy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/18/QLD-Swim-Academy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/19/Interior-Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/20/Fire-And-Smoke");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/21/Greencom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/22/Boxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/23/Tufa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/23/Tufa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/23/Tufa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/24/Fidget-Live-Wallpaper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/24/Fidget-Live-Wallpaper");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/25/Bugwarz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/25/Bugwarz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/25/Bugwarz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/25/Bugwarz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/26/Word-World");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/26/Word-World");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/26/Word-World");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/27/Swype");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/28/Puzzle-Game");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/29/Space-Fuzz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/work/29/Space-Fuzz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url !== "/work/29/Space-Fuzz");
} }
class ProjectDetailComponent {
    constructor(projectService, techService, route, spinner, router) {
        this.projectService = projectService;
        this.techService = techService;
        this.route = route;
        this.spinner = spinner;
        this.router = router;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.getOne();
    }
    getOne() {
        this.spinner.show();
        this.projectService.getOneProject(this.id).subscribe(res => {
            this.projectOne = res.data;
            this.spinner.hide();
        });
    }
}
ProjectDetailComponent.ɵfac = function ProjectDetailComponent_Factory(t) { return new (t || ProjectDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_master_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectMasterServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_technology_service__WEBPACK_IMPORTED_MODULE_2__["TechnologyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProjectDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectDetailComponent, selectors: [["app-project-detail"]], decls: 22, vars: 2, consts: [["bdColor", "white", "color", "black", "template", "<img src='assets/images//9b-loading.gif' />"], [1, "main", "mountain-dew-page"], ["class", "top-banner", 4, "ngFor", "ngForOf"], ["class", "mountain-dew", 4, "ngFor", "ngForOf"], [1, "next-prev"], [1, "row"], ["onclick", "window.scrollTo(0, 0);", "routerLink", "/space-fuzz"], [1, "col-6", "prev"], ["src", "assets/images/spacefuzz-ban.jpg", "alt", "", 1, "max-100"], [1, "overlay"], [1, "project-dic"], ["onclick", "window.scrollTo(0, 0);", "routerLink", "/space-fuzz", 1, "arrow"], ["onclick", "window.scrollTo(0, 0);", "routerLink", "/work", 1, "go-back"], ["src", "assets/images/menu.svg", "alt", ""], ["onclick", "window.scrollTo(0, 0);", "routerLink", "/be-first"], [1, "col-6", "next"], ["src", "assets/images/be-first-ban.jpg", "alt", "", 1, "max-100"], ["onclick", "window.scrollTo(0, 0);", "routerLink", "/be-first", 1, "arrow", "back"], [1, "top-banner"], [1, "cases"], [1, "previous-case", 3, "routerLink"], [1, "button-switch"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 31.494 31.494", 0, "xml", "space", "preserve", "width", "28px", "height", "28px", 2, "enable-background", "new 0 0 31.494 31.494"], ["d", "M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554 c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587 c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z", "fill", "#FFFFFF"], ["routerLink", "/be-first", 1, "next-case"], [1, "dew-bg", "bg"], [1, "mountain-dew"], ["data-logo-url", "assets/images/logo-black.svg", 1, "prot-details", "scroll-content"], [1, "container"], [1, "row", "por-link"], [1, "col-4", "project"], ["style", "white-space: pre-line;", 4, "ngFor", "ngForOf"], [1, "col-4"], ["href", "https://play.google.com/store/apps/details?id=befirst.a9brainz.com.befirst", "target", "new", 1, "android"], [1, "fa", "fa-android"], ["href", "https://itunes.apple.com/us/app/befirst/id1116896405?mt=8", "target", "new", 1, "apple"], [1, "fa", "fa-apple"], [1, "col-12"], [1, "text-center", "intro", "PTB55"], ["class", "dew-one left-skew", 4, "ngIf"], ["class", "dew-two", 4, "ngIf"], ["class", "dew-three", 4, "ngIf"], ["id", "befirst", 4, "ngIf"], ["class", "iam-section PTB100", 4, "ngIf"], ["class", "cards scroll-content", "data-logo-url", "assets/images/logo-white.svg", 4, "ngIf"], ["class", "row PTB80 iam", 4, "ngIf"], ["class", "card-panel  PTB80 scroll-content", "data-logo-url", "assets/images/logo-white.svg", 4, "ngIf"], ["class", "row MT110 wow fadeIn animate", "data-wow-duration", "1s", "data-wow-delay", "1s", 4, "ngIf"], ["id", "battle", 4, "ngIf"], ["class", "img-content-bg", 4, "ngIf"], ["class", "section-bg scroll-content", "data-logo-url", "assets/images/logo-black.svg", 4, "ngIf"], ["class", "section-two scroll-content", "data-logo-url", "assets/images/logo-white.svg", 4, "ngIf"], ["class", "bottom-area scroll-content", "data-logo-url", "assets/images/logo-black.svg", 4, "ngIf"], ["class", "inner-section PTB80", 4, "ngIf"], ["class", "mestory-web PTB80", 4, "ngIf"], ["class", "qld-one", 4, "ngIf"], ["class", "qld-two scroll-content", "data-logo-url", "assets/images/logo-black.svg", 4, "ngIf"], ["class", "qld-three", 4, "ngIf"], ["class", "qld-four scroll-content", "data-logo-url", "assets/images/logo-black.svg", 4, "ngIf"], ["class", "qld-five scroll-content", "data-logo-url", "assets/images/logo-black.svg", 4, "ngIf"], ["id", "interior-page", 4, "ngIf"], ["class", "container", 4, "ngIf"], ["class", "tufa-banner", 4, "ngIf"], ["id", "tufa", 4, "ngIf"], ["class", "tufa-bottom", 4, "ngIf"], ["class", "description", 4, "ngIf"], ["class", "block-zero wow fadeIn animated scroll-content", "data-wow-duration", "1s", "data-wow-delay", "1s", "data-logo-url", "assets/images/logo-black.svg", 4, "ngIf"], ["class", "block-one scroll-content", "data-logo-url", "assets/images/logo-black.svg", 4, "ngIf"], ["class", "block-two", 4, "ngIf"], ["class", "block-three wow fadeIn animated scroll-content", "data-wow-duration", "1s", "data-wow-delay", "2s", "data-logo-url", "assets/images/logo-black.svg", 4, "ngIf"], ["class", "word-one scroll-content", "data-logo-url", "assets/images/logo-black.svg", 4, "ngIf"], ["class", "word-two", 4, "ngIf"], ["class", "word-three", 4, "ngIf"], ["class", "swype-page", 4, "ngIf"], [3, "pagination", "loop", 4, "ngIf"], ["class", "description scroll-content", "data-logo-url", "assets/images/logo-black.svg", 4, "ngIf"], [4, "ngIf"], ["data-logo-url", "assets/images/logo-black.svg", 1, "role-content", "scroll-content"], [1, "col-12", "role"], [2, "white-space", "pre-line"], [1, "dew-one", "left-skew"], [1, "col-6"], ["src", "assets/images/activity-images.png", "alt", "", 1, "max-100"], [1, "login-desc"], [1, "dew-two"], [1, "title"], [1, "dew-back"], ["src", "assets/images/dew-activity.png", "alt", ""], [1, "dew-three"], [1, "dew-home"], ["src", "assets/images/dew-home.png", "alt", ""], ["id", "befirst"], [1, "befirst-home", "PTB100"], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "flex-center", "wow", "fadeInUp", "animate"], ["src", "assets/images/befirst/befirst-homescreen.png", "alt", "", 1, "max-100"], ["data-wow-duration", "1.4s", "data-wow-delay", "1s", 1, "MT75", "wow", "fadeIn", "animate"], [1, "befirst-second", "PTB60"], [1, "container", "wow"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "col-6", "wow", "fadeInLeft", "animate"], ["src", "assets/images/befirst/training.png", "alt", "", 1, "max-100"], ["data-wow-duration", "1s", "data-wow-delay", "1.2s", 1, "col-6", "content", "wow", "fadeInRight", "animate"], [1, "hemi-head", "f64"], [1, "row", "MTB100"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "col-6", "content-rev", "wow", "fadeInLeft", "animate"], ["data-wow-duration", "1s", "data-wow-delay", "1.2s", 1, "col-6", "wow", "fadeInRight", "animate"], ["src", "assets/images/befirst/testing.png", "alt", "", 1, "max-100"], [1, "section-befirst", "PTB60"], [1, "hemi-head"], ["src", "assets/images/befirst/AccelerateAnim.gif", "alt", "", 1, "max-100"], [1, "row", "MT100"], ["src", "assets/images/befirst/RecogAnim.gif", "alt", "", 1, "max-100"], ["data-wow-duration", "1s", "data-wow-delay", "1.2s", 1, "col-6", "recognition", "wow", "fadeInRight", "animate"], [1, "cards"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "row", "MT70", "wow", "fadeIn", "animate"], ["src", "assets/images/befirst/cards.png", "alt", "", 1, "max-100", "mauto"], [1, "iam-section", "PTB100"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "col-6", "PR30", "wow", "fadeInLeft", "animate"], ["data-wow-duration", "1s", "data-wow-delay", "1.2s", 1, "col-6", "iam-screen", "wow", "fadeInRight", "animate"], ["src", "assets/images/Iam-screen.png", "alt", "", 1, "max-100"], [1, "row", "MT150"], ["src", "assets/images/I.AM-Screens.png", "alt", "", 1, "max-100"], ["data-wow-duration", "1s", "data-wow-delay", "1.2s", 1, "col-6", "PL30", "iam-two", "wow", "fadeInRight", "animate"], ["data-logo-url", "assets/images/logo-white.svg", 1, "cards", "scroll-content"], [1, "container", "MB50"], ["src", "assets/images/iam-cards.png", "alt", "", "data-wow-duration", "1s", "data-wow-delay", "1s", 1, "max-100", "wow", "fadeIn", "animate"], [1, "row", "PTB80", "iam"], ["data-logo-url", "assets/images/logo-white.svg", 1, "card-panel", "PTB80", "scroll-content"], ["data-wow-duration", "1.4s", "data-wow-delay", "0.5s", 1, "container", "wow", "fadeInUp", "animate"], ["src", "assets/images/iam-card.png", "alt", "", 1, "max-100"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "row", "MT110", "wow", "fadeIn", "animate"], ["src", "assets/images/iam-mac.png", "alt", "", 1, "max-100", "mauto"], ["id", "battle"], [1, "battle-one", "mm50"], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "col-6", "wow", "fadeInUp", "animated"], ["src", "assets/images/battle-one.png", "alt", ""], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "col-6", "wow", "fadeIn", "animated"], [1, "battle-one-desc"], [1, "battle-two"], ["src", "assets/images/battle-two.png", "alt", "", 1, "mlauto"], [1, "battle-three", "mm180"], ["src", "assets/images/battle-store.png", "alt", "", 1, "mrauto"], [1, "battle-gif"], [1, "battle-four"], ["data-wow-duration", "1s", 1, "battle-title", "wow", "fadeIn", "animated"], ["src", "assets/images/battle-screens.jpg", "alt", ""], [1, "img-content-bg"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "col-6", "blendd-phone", "wow", "fadeIn", "animate"], ["src", "assets/images/blendd-phone-cut.png", "alt", "", 1, "max-100"], ["data-wow-duration", "1s", "data-wow-delay", "1.2s", 1, "col-6", "blendd-content", "MT140", "wow", "fadeInRight", "animate"], ["data-logo-url", "assets/images/logo-black.svg", 1, "section-bg", "scroll-content"], ["data-logo-url", "assets/images/logo-black.svg", "data-wow-duration", "1s", "data-wow-delay", "1s", 1, "container", "PTB80", "wow", "fadeInUp", "scroll-content"], ["src", "assets/images/blendd-horizontal.png", "alt", "", 1, "max-100", "PTB100"], ["data-logo-url", "assets/images/logo-white.svg", 1, "section-two", "scroll-content"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "container", "wow", "fadeInUp", "animate"], ["src", "assets/images/blendd-screen.png", "alt", "", 1, "max-100"], ["data-logo-url", "assets/images/logo-white.svg", "data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "section-content", "scroll-content"], ["data-logo-url", "assets/images/logo-black.svg", 1, "bottom-area", "scroll-content"], ["data-wow-duration", "1.4s", "data-wow-delay", "0.5s", 1, "img-slider", "wow", "fadeIn", "animate"], [1, "swiper-container"], [1, "swiper-wrapper"], [1, "swiper-slide", 2, "background", "url(assets/images/blendd-one.png)"], [1, "swiper-slide", 2, "background", "url(assets/images/blendd-two.png)"], [1, "swiper-slide", 2, "background", "url(assets/images/blendd-four.png)"], [1, "swiper-slide", 2, "background", "url(assets/images/blendd-three.png)"], [1, "swiper-pagination"], [1, "inner-section", "PTB80"], ["src", "assets/images/me-story-launch.png", "alt", "", 1, "max-100"], ["data-wow-duration", "1s", "data-wow-delay", "1.2s", 1, "col-6", "PL50", "wow", "fadeInRight", "animate"], [1, "row", "MT75"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "col-6", "PR50", "wow", "fadeInLeft", "animate"], ["src", "assets/images/me-strory-homescreen.png", "alt", "", 1, "max-100"], [1, "mestory-web", "PTB80"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "col-12", "wow", "fadeIn", "animate"], ["src", "assets/images/mestory-old-all.png", "alt", "", 1, "max-100"], [1, "qld-one"], ["src", "assets/images/qld-one.png", "alt", ""], [1, "qld-one-desc"], ["data-logo-url", "assets/images/logo-black.svg", 1, "qld-two", "scroll-content"], [1, "col-6", "t90"], ["src", "assets/images/qld-category.png", "alt", ""], [1, "qld-three"], ["src", "assets/images/qld-three.png", "alt", ""], ["data-logo-url", "assets/images/logo-black.svg", 1, "qld-four", "scroll-content"], ["src", "assets/images/qld-four.png", "alt", ""], ["data-logo-url", "assets/images/logo-black.svg", 1, "qld-five", "scroll-content"], ["src", "assets/images/qld-admin.jpg", "alt", ""], ["id", "interior-page"], [1, "interior-one"], ["src", "assets/images/interior-one.jpg", "alt", ""], [1, "interior-two"], ["src", "assets/images/interior-two.jpg", "alt", "", 1, "img-responsive"], [3, "pagination", "loop"], [1, "fire-screenshots"], ["swiperSlide", ""], ["data-logo-url", "assets/images/logo-black.svg", 1, "screenshots", "scroll-content"], ["src", "assets/images/fire-smoke/one.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/fire-smoke/two.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/fire-smoke/three.jpg", "alt", "", 1, "img-responsive"], [1, "greencom-screenshots"], ["src", "assets/images/greencom/one.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/greencom/two.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/greencom/three.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/greencom/four.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/greencom/five.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/greencom/six.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/greencom/seven.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/greencom/eight.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/greencom/nine.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/greencom/ten.jpg", "alt", "", 1, "img-responsive"], [3, "pagination", "loop", "spaceBetween", "slidesPerView"], ["src", "assets/images/boxes/1.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/boxes/2.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/boxes/3.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/boxes/4.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/boxes/5.png", "alt", "", 1, "img-responsive"], [1, "tufa-banner"], [1, "PTB90"], ["src", "assets/images/tufa-play.png", "alt", "", 1, "max-100"], [1, "bold", 2, "color", "black"], [2, "color", "black"], ["id", "tufa"], [1, "row", "tufa", "PTB100"], ["src", "assets/images/tufa-gameplay.png", "alt", "", 1, "max-100"], [1, "container", "MT120"], ["data-wow-duration", "1s", "data-wow-delay", "1.2s", 1, "col-6", "flex", "wow", "fadeInRight", "animate"], ["src", "assets/images/tufa-leaderbard.png", "alt", "", 1, "max-100"], [1, "tufa-bottom"], [1, "guru", 3, "pagination", "loop", "slidesPerView"], ["src", "assets/images/fidget/one.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/fidget/two.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/fidget/three.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/fidget/four.jpg", "alt", "", 1, "img-responsive"], [1, "description"], ["data-wow-duration", "1s", "data-wow-delay", "1s", "data-logo-url", "assets/images/logo-black.svg", 1, "block-zero", "wow", "fadeIn", "animated", "scroll-content"], ["src", "assets/images/bugwarz-gallery.jpg", "alt", "", 1, "img-responsive"], ["data-logo-url", "assets/images/logo-black.svg", 1, "block-one", "scroll-content"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "iphone", "wow", "fadeInUp", "animated"], ["src", "assets/images/bug-home.png", "alt", ""], ["data-wow-duration", "1s", "data-wow-delay", "1.5s", 1, "block-desc", "wow", "fadeIn", "animated"], [1, "block-two"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "col-5", "wow", "fadeInLeft", "animated"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "col-5", "right", "wow", "fadeInRight"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "wow", "fadeIn", "animated"], ["src", "assets/images/bug-all.png", "alt", "", 1, "max-100"], ["data-wow-duration", "1s", "data-wow-delay", "2s", "data-logo-url", "assets/images/logo-black.svg", 1, "block-three", "wow", "fadeIn", "animated", "scroll-content"], ["src", "assets/images/gallery-bug", "alt", "", 1, "max-100"], ["data-logo-url", "assets/images/logo-black.svg", 1, "word-one", "scroll-content"], [1, "word-one-desc"], [1, "mobile"], ["src", "assets/images/galaxy-s.png", "alt", ""], [1, "word-two"], ["src", "assets/images/challenge.png", "alt", ""], ["src", "assets/images/random.png", "alt", ""], [1, "word-three"], ["src", "assets/images/word-tiles/one.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/word-tiles/four.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/word-tiles/two.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/word-tiles/three.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/word-tiles/five.png", "alt", "", 1, "img-responsive"], [1, "swype-page"], [1, "swype-one"], ["src", "assets/images/swype-one.png", "alt", ""], [1, "swype-one-desc"], ["data-logo-url", "assets/images/logo-black.svg", 1, "swype-two", "scroll-content"], ["src", "assets/images/swype-two.png", "alt", ""], [1, "swype-three"], ["src", "assets/images/swype-three.png", "alt", ""], [1, "puzzle-game"], ["src", "assets/images/puzzle/one.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/puzzle/two.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/puzzle/three.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/puzzle/four.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/puzzle/five.jpg", "alt", "", 1, "img-responsive"], [3, "pagination", "loop", "slidesPerView"], ["src", "assets/images/spacefuzz/five.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/spacefuzz/one.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/spacefuzz/two.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/spacefuzz/three.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/spacefuzz/four.png", "alt", "", 1, "img-responsive"], ["data-logo-url", "assets/images/logo-black.svg", 1, "description", "scroll-content"], ["class", "fire-screenshots", 4, "ngFor", "ngForOf"], ["alt", "", 1, "img-responsive", 3, "src"]], template: function ProjectDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectDetailComponent_div_2_Template, 15, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectDetailComponent_div_3_Template, 86, 44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectOne);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectOne);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperComponent"], swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperSlideDirective"]], styles: ["@media (min-width: 0px) and (max-width: 576.98px) { \r\n\r\n   \r\n}\r\n\r\n.img-responsive[_ngcontent-%COMP%]{\r\n    width: 100% !important;\r\n        margin: 0 auto !important;\r\n        height: 100% !important;\r\n        object-fit: contain !important;\r\n}\r\n\r\n.ioss[_ngcontent-%COMP%]{\r\n    white-space: pre-wrap;\r\n}\r\n\r\n.puzzle-game[_ngcontent-%COMP%]{\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBOztBQUVBO0lBQ0ksc0JBQXNCO1FBQ2xCLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIsOEJBQThCO0FBQ3RDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBOztBQUVBIiwiZmlsZSI6InByb2plY3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNTc2Ljk4cHgpIHsgXHJcblxyXG4gICBcclxufVxyXG5cclxuLmltZy1yZXNwb25zaXZle1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvc3N7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuLnB1enpsZS1nYW1le1xyXG4gICAgXHJcbn0iXX0= */"] });


/***/ }),

/***/ "1Udp":
/*!***************************************************!*\
  !*** ./src/app/shared/case-study/case.service.ts ***!
  \***************************************************/
/*! exports provided: CaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseService", function() { return CaseService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




// import { ProjectMaster } from './project-master';
class CaseService {
    // ServerUrl = "https://beta.9brainz.store/api/project_master/featured";
    constructor(http) {
        this.http = http;
    }
    getFeatured() {
        return this.http
            .get("https://beta.9brainz.store/api/project_masters/featured")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        this.errorData = {
            errorTitle: "Oops! Request for document failed",
            errorDesc: "Something bad happened. Please try again later.",
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(this.errorData);
    }
}
CaseService.ɵfac = function CaseService_Factory(t) { return new (t || CaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CaseService, factory: CaseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "1vAT":
/*!*****************************************************!*\
  !*** ./src/app/shared/contact/contact.component.ts ***!
  \*****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var _contact_us_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-us.service */ "MEgZ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../home/home.component */ "ZEqh");










const _c0 = ["UploadFileInput"];
function ContactComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please Enter Fullname \uD83D\uDE2D\uD83D\uDE2D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactComponent_div_19_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.uploadForm.controls["fullname"].errors.required);
} }
function ContactComponent_div_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please Enter Email \uD83D\uDE2D\uD83D\uDE2D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactComponent_div_23_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.uploadForm.controls["email"].errors.required);
} }
function ContactComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please Enter Skype-Id \uD83D\uDE2D\uD83D\uDE2D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactComponent_div_27_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.uploadForm.controls["skypeId"].errors.required);
} }
function ContactComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please Enter Country \uD83D\uDE2D\uD83D\uDE2D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactComponent_div_31_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.uploadForm.controls["country"].errors.required);
} }
function ContactComponent_label_34_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ContactComponent_label_34_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.onCbChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", val_r13.service_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", val_r13.service_name, "");
} }
function ContactComponent_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const web_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](web_r16);
} }
function ContactComponent_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please Enter Budget \uD83D\uDE2D\uD83D\uDE2D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactComponent_div_41_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.uploadForm.controls["budget"].errors.required);
} }
function ContactComponent_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please Enter Description \uD83D\uDE2D\uD83D\uDE2D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactComponent_div_56_div_1_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.uploadForm.controls["description"].errors.required);
} }
class ContactComponent {
    constructor(wowService, contactSer, http, fb, router) {
        this.wowService = wowService;
        this.contactSer = contactSer;
        this.http = http;
        this.fb = fb;
        this.router = router;
        this.websiteList = ['$50,000+', '$25,000 to $50,000', '$10,000 to $25,000', '$5,000 to $10,000', 'Less than $5,000'];
        this.SERVER_URL = "https://beta.9brainz.store/api/contact-us-mail";
        this.showMsg = false;
        this.wowService.init();
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_1__["init"]();
        // $(document).ready(function(){
        //   $("#isro").click(function(){
        //     $("#isro").toggleClass("activeOp");
        //     alert('Heyy');
        //   });
        // });
        // const PAT_NAME = "^[a-zA-Z ]{2,20}$";
        // const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";
        this.getService();
        this.uploadForm = this.fb.group({
            projects: this.fb.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            file: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            fullname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            skypeId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            budget: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    //  val =false;
    //  menuToggle(){
    //   val.active = !val.active;
    //  }
    // classApplied = false;
    // toggleClass() {
    //   this.classApplied = !this.classApplied;
    // }
    changeWebsite(e) {
        // console.log(e.target.value);
    }
    onFileSelect(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.uploadForm.get('file').setValue(file);
            this.fileInputLabel = file.name;
        }
    }
    onSubmit() {
        const formData = new FormData();
        formData.append('file', this.uploadForm.get('file').value);
        formData.append('fullname', this.uploadForm.get('fullname').value);
        formData.append('email', this.uploadForm.get('email').value);
        formData.append('skypeId', this.uploadForm.get('skypeId').value);
        formData.append('country', this.uploadForm.get('country').value);
        formData.append('budget', this.uploadForm.get('budget').value);
        formData.append('description', this.uploadForm.get('description').value);
        formData.append('projects', this.uploadForm.get('projects').value);
        this.http.post(this.SERVER_URL, formData).subscribe(response => {
            console.log(response);
            if (response.statusCode === 200) {
                // Reset the file input
                this.uploadFileInput.nativeElement.value = "";
                this.fileInputLabel = undefined;
                this.showMsg = true;
                // this.message="Congratulations Details Send..🤣🤣"
            }
        }, error => {
            // console.log(error);
        });
        console.log(this.uploadForm.value);
        this.uploadForm.reset();
        this.router.navigateByUrl('/');
    }
    onCbChange(e) {
        const projects = this.uploadForm.get('projects');
        if (e.target.checked) {
            projects.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](e.target.value));
        }
        else {
            let i = 0;
            projects.controls.forEach((item) => {
                if (item.value == e.target.value) {
                    projects.removeAt(i);
                    return;
                }
                i++;
            });
        }
    }
    getService() {
        this.contactSer.getTechnology().subscribe((res) => {
            this.service = res.data;
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_3__["NgwWowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_contact_us_service__WEBPACK_IMPORTED_MODULE_4__["ContactUsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], viewQuery: function ContactComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.uploadFileInput = _t.first);
    } }, decls: 61, vars: 11, consts: [["data-logo-url", "assets/images/logo-white.svg", 1, "contact-us", "scroll-content"], [1, "container"], [1, "row"], ["data-aos", "flip-up", "data-aos-duration", "2000", 1, "title"], [1, "contact-form"], ["data-aos", "flip-up", "data-aos-duration", "2000", 1, "col-12", "ceo"], ["src", "assets/images/ceo.jpg", "alt", "", 1, "img-rounded"], [3, "formGroup", "ngSubmit"], [1, "col-6"], ["data-aos", "flip-up", "data-aos-duration", "2000", 1, "form-group"], ["type", "text", "id", "fullname", "name", "fullname", "placeholder", "Full Name*", "autocomplete", "on", "formControlName", "fullname"], ["class", "alert", 4, "ngIf"], ["type", "email", "name", "email", "formControlName", "email", "placeholder", "Email Address*", "autocomplete", "on"], ["type", "text", "name", "skypeId", "formControlName", "skypeId", "placeholder", "Skype-Id*"], ["type", "text", "name", "country", "formControlName", "country", "placeholder", "Your Country", "autocomplete", "on"], ["data-aos", "flip-up", "data-aos-duration", "2000", 1, "select-project"], ["class", "main", "style", "border: none ; display: unset; width: unset; padding: 0;", 4, "ngFor", "ngForOf"], ["name", "budget", "formControlName", "budget", 1, "form-control", 3, "change"], [4, "ngFor", "ngForOf"], ["type", "file", "name", "file", "id", "upload-file", "multiple", "", 3, "change"], ["UploadFileInput", ""], ["for", "upload-file"], [2, "color", "red"], [1, "col-12"], ["name", "description", "formControlName", "description", "placeholder", "Brief Project Description"], ["data-aos", "flip-up", "data-aos-duration", "2000", "onclick", "window.scrollTo(0, 0);", "type", "submit", 1, "send", 2, "cursor", "pointer", 3, "disabled"], [1, "alert"], ["class", "op_bolte", 4, "ngIf"], [1, "op_bolte"], [1, "main", 2, "border", "none", "display", "unset", "width", "unset", "padding", "0"], ["type", "checkbox", 2, "display", "none", 3, "value", "change"], [1, "geekmark"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "We are ready to start something great!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Ravi Gadesha");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Founder & CEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_15_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ContactComponent_div_19_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ContactComponent_div_23_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ContactComponent_div_27_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ContactComponent_div_31_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ContactComponent_label_34_Template, 4, 2, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ContactComponent_Template_select_change_37_listener($event) { return ctx.changeWebsite($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Budget Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, ContactComponent_option_40_Template, 2, 1, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, ContactComponent_div_41_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ContactComponent_Template_input_change_44_listener($event) { return ctx.onFileSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Choose File");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Photos Are Not Allowed*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, ContactComponent_div_56_Template, 3, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "app-home");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.uploadForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls["fullname"].invalid && (ctx.uploadForm.controls["fullname"].dirty || ctx.uploadForm.controls["fullname"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls["email"].invalid && (ctx.uploadForm.controls["email"].dirty || ctx.uploadForm.controls["email"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls["skypeId"].invalid && (ctx.uploadForm.controls["skypeId"].dirty || ctx.uploadForm.controls["skypeId"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls["country"].invalid && (ctx.uploadForm.controls["country"].dirty || ctx.uploadForm.controls["country"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.service);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.websiteList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls["budget"].invalid && (ctx.uploadForm.controls["budget"].dirty || ctx.uploadForm.controls["budget"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.fileInputLabel, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uploadForm.controls["description"].invalid && (ctx.uploadForm.controls["description"].dirty || ctx.uploadForm.controls["description"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.uploadForm.pristine || ctx.uploadForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_x"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]], styles: [".active[_ngcontent-%COMP%]{\r\n    background-color: #fff;\r\n    color: black;\r\n}\r\n\r\n\r\n\r\n.op_bolte[_ngcontent-%COMP%]{\r\n    border: solid 3px white;\r\n    color: red;\r\n}\r\n\r\nbutton[type=\"submit\"][_ngcontent-%COMP%]:disabled{\r\n    background-color: gray;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .geekmark[_ngcontent-%COMP%] { \r\n    background-color: white;\r\n    color: black; \r\n    border: solid 3px rgb(0, 0, 0);\r\n}\r\n\r\nul[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .geekmark[_ngcontent-%COMP%] { \r\n    background-color: lightgray;\r\n    color: black;\r\n  \r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBOzs7R0FHRzs7QUFFSDtJQUNJLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZOzs7QUFHaEIiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi8qIHVsIGxhYmVsIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICBib3JkZXItY29sb3I6IHllbGxvdztcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0gKi9cclxuXHJcbi5vcF9ib2x0ZXtcclxuICAgIGJvcmRlcjogc29saWQgM3B4IHdoaXRlO1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXTpkaXNhYmxlZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbnVsIC5tYWluIGlucHV0OmNoZWNrZWQgfiAuZ2Vla21hcmsgeyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IGJsYWNrOyBcclxuICAgIGJvcmRlcjogc29saWQgM3B4IHJnYigwLCAwLCAwKTtcclxufSBcclxuXHJcbnVsIC5tYWluOmhvdmVyIGlucHV0IH4gLmdlZWttYXJrIHsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgXHJcblxyXG59ICJdfQ== */"] });


/***/ }),

/***/ "320Y":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullpage/angular-fullpage */ "RhbM");





// import {  } from 'ngx-wow'
class HeaderComponent {
    // state = 'hide'
    constructor(titleSer) {
        this.titleSer = titleSer;
        this._opened = false;
    }
    _toggleSidebar() {
        this._opened = !this._opened;
    }
    setDocTitle(title) {
        // console.log('current title:::::' + this.titleSer.getTitle());
        this.titleSer.setTitle(title);
    }
    close() {
        jquery__WEBPACK_IMPORTED_MODULE_0__("#mySidenav").css("width", "0%");
    }
    open() {
        jquery__WEBPACK_IMPORTED_MODULE_0__("#mySidenav").css("width", "100%");
    }
    ngOnInit() {
        // const wow = new WOW(
        //   {
        //   boxClass:     'wow',      // default
        //   animateClass: 'animated', // default
        //   offset:       0,          // default
        //   mobile:       true,       // default
        //   live:         true        // default
        // }
        // )
        // wow.init();
        jquery__WEBPACK_IMPORTED_MODULE_0__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__(".hide").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__("#oho").hide();
                jquery__WEBPACK_IMPORTED_MODULE_0__('#show').removeClass('close');
            });
            jquery__WEBPACK_IMPORTED_MODULE_0__(".lines-button").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_0__("#oho").show();
                jquery__WEBPACK_IMPORTED_MODULE_0__("#oho").addClass('open');
            });
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 19, vars: 0, consts: [[1, "fixed"], [1, "logo"], ["routerLink", "/", "onclick", "window.scrollTo(0, 0);", 3, "click"], ["src", "assets/images/logo-white.svg", "alt", "9Brainz"], ["id", "mySidenav", 1, "sidenav", "delay-one", "fadeIn"], ["href", "javascript:void(0)", 1, "closebtn", 3, "click"], [2, "display", "flex", "justify-content", "space-between", "width", "80%", "padding", "0 !important", "margin", "0 !important"], ["onclick", "window.scrollTo(0, 0);", "routerLinkActive", "active", "routerLink", "/work", 1, "delay-one", "fadeIn", 3, "click"], ["onclick", "window.scrollTo(0, 0);", "routerLinkActive", "active", "routerLink", "/about", 1, "delay-one", "fadeIn", 3, "click"], ["onclick", "window.scrollTo(0, 0);", "routerLinkActive", "active", "routerLink", "/contact", 1, "delay-one", "fadeIn", 3, "click"], [2, "font-size", "35px", "cursor", "pointer", "right", "20px", "position", "fixed", "top", "13px", "color", "lightgrey", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener() { return ctx.close(); })("click", function HeaderComponent_Template_a_click_2_listener() { return ctx.setDocTitle("Home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_5_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_9_listener() { return ctx.setDocTitle("Our-Works"); })("click", function HeaderComponent_Template_a_click_9_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_12_listener() { return ctx.setDocTitle("About-Us"); })("click", function HeaderComponent_Template_a_click_12_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() { return ctx.setDocTitle("Contact-Us"); })("click", function HeaderComponent_Template_a_click_15_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_17_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u2630");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_4__["ɵb"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["[_ngcontent-%COMP%]:target{\r\n    display: none;\r\n\r\n}\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    right: 0;\r\n    background-color: #000;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n  \r\n    display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n  }\r\n\r\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 38px;\r\n    color: white;\r\n    display: block;\r\n    transition: 0.3s;\r\n    font-weight: bold;\r\n  }\r\n\r\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color:#818181;\r\n  }\r\n\r\n.sidenav[_ngcontent-%COMP%]   .closebtn[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: -3px !important;\r\n    right: 14px;\r\n    font-size: 46px;\r\n    margin-left: 50px;\r\n    color: white;\r\n  }\r\n\r\n.active[_ngcontent-%COMP%]:after{\r\n      \r\n     width: 40px;\r\n     height: 5px;\r\n     content: \"\";\r\n     display: block;\r\n     background-color: white;\r\n     margin-top: 10px;\r\n  }\r\n\r\nli[_ngcontent-%COMP%]{\r\n      list-style: none ;\r\n  }\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav[_ngcontent-%COMP%] {padding-top: 15px;}\r\n    .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {font-size: 18px;}\r\n  }\r\n\r\n@media (min-width:0) and (max-width: 576.98px) { \r\n      ul[_ngcontent-%COMP%]{\r\n          \r\n          text-align: center !important;\r\n          flex-direction: column !important;\r\n      }\r\n      .active[_ngcontent-%COMP%]:after{\r\n          display: none;\r\n          \r\n      }\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osUUFBUTtJQUNSLGVBQWU7SUFDZixVQUFVO0lBQ1YsTUFBTTtJQUNOLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7O0lBRWpCLGFBQWE7TUFDWCxzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtFQUN2Qjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGFBQWE7RUFDZjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsWUFBWTtFQUNkOztBQUNBO01BQ0ksNkJBQTZCO0tBQzlCLFdBQVc7S0FDWCxXQUFXO0tBQ1gsV0FBVztLQUNYLGNBQWM7S0FDZCx1QkFBdUI7S0FDdkIsZ0JBQWdCO0VBQ25COztBQUNBO01BQ0ksaUJBQWlCO0VBQ3JCOztBQUVBO0lBQ0UsVUFBVSxpQkFBaUIsQ0FBQztJQUM1QixZQUFZLGVBQWUsQ0FBQztFQUM5Qjs7QUFFQTtNQUNJO1VBQ0ksK0JBQStCO1VBQy9CLDZCQUE2QjtVQUM3QixpQ0FBaUM7TUFDckM7TUFDQTtVQUNJLGFBQWE7VUFDYjsrQkFDcUI7TUFDekI7R0FDSCIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjp0YXJnZXR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5cclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlbmF2IGEge1xyXG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAuc2lkZW5hdiBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiM4MTgxODE7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlbmF2IC5jbG9zZWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0zcHggIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAxNHB4O1xyXG4gICAgZm9udC1zaXplOiA0NnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5hY3RpdmU6YWZ0ZXJ7XHJcbiAgICAgIC8qIGJvcmRlcjogc29saWQgNXB4IHdoaXRlOyAqL1xyXG4gICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgIGhlaWdodDogNXB4O1xyXG4gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgbGl7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmUgO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAgIC5zaWRlbmF2IHtwYWRkaW5nLXRvcDogMTVweDt9XHJcbiAgICAuc2lkZW5hdiBhIHtmb250LXNpemU6IDE4cHg7fVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6MCkgYW5kIChtYXgtd2lkdGg6IDU3Ni45OHB4KSB7IFxyXG4gICAgICB1bHtcclxuICAgICAgICAgIC8qIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7ICovXHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAuYWN0aXZlOmFmdGVye1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIC8qIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47ICovXHJcbiAgICAgIH1cclxuICAgfVxyXG4gIFxyXG4gICJdfQ== */"] });


/***/ }),

/***/ "4QC7":
/*!*********************************************!*\
  !*** ./src/app/work/work-routing.module.ts ***!
  \*********************************************/
/*! exports provided: WorkRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkRoutingModule", function() { return WorkRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "04Dc");
/* harmony import */ var _test_details_test_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test-details/test-details.component */ "/QN8");
/* harmony import */ var _work_project_filter_project_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work/project-filter/project-filter.component */ "Vicn");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work/work.component */ "OUCW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");

// import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
// import { BattleComponent } from './battle/battle.component';
// import { BeFirstComponent } from './be-first/be-first.component';
// import { BlenddComponent } from './blendd/blendd.component';
// import { BoxesComponent } from './boxes/boxes.component';
// import { BugwarzComponent } from './bugwarz/bugwarz.component';
// import { DewComponent } from './dew/dew.component';
// import { FidgetComponent } from './fidget/fidget.component';
// import { FireSmokeComponent } from './fire-smoke/fire-smoke.component';
// import { GreenComComponent } from './green-com/green-com.component';
// import { IamComponent } from './iam/iam.component';
// import { InteriorDesignComponent } from './interior-design/interior-design.component';
// import { MestoryComponent } from './mestory/mestory.component';



// import { PuzzleComponent } from './puzzle/puzzle.component';
// import { QldSwimacademyComponent } from './qld-swimacademy/qld-swimacademy.component';
// import { RollerCoasterComponent } from './roller-coaster/roller-coaster.component';
// import { SlidingSantaComponent } from './sliding-santa/sliding-santa.component';
// import { SpaceFuzzComponent } from './space-fuzz/space-fuzz.component';
// import { SwypeComponent } from './swype/swype.component';
// import { TestDetailsComponent } from './test-details/test-details.component';
// import { TufaComponent } from './tufa/tufa.component';



// import { WorldWorldComponent } from './world-world/world-world.component';
const routes = [
    { path: '', redirectTo: '/work', pathMatch: 'full' },
    { path: 'work', component: _work_work_component__WEBPACK_IMPORTED_MODULE_4__["WorkComponent"] },
    { path: 'work/:id/:project_name', component: _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_1__["ProjectDetailComponent"] },
    { path: 'Aemj/:id/:service_name', component: _work_project_filter_project_filter_component__WEBPACK_IMPORTED_MODULE_3__["ProjectFilterComponent"] },
    { path: 'test', component: _test_details_test_details_component__WEBPACK_IMPORTED_MODULE_2__["TestDetailsComponent"] }
    // {path:'work/:id',component:TestDetailsComponent},
    // {path:'battle', component:BattleComponent},
    // {path:'be-first', component:BeFirstComponent},
    // {path:'blendd', component:BlenddComponent},
    // {path:'boxes', component:BoxesComponent},
    // {path:'bugwarz', component:BugwarzComponent},
    // {path:'dew', component:DewComponent},
    // {path:'fidget', component:FidgetComponent},
    // {path:'fire-smoke', component:FireSmokeComponent},
    // {path:'green-com', component:GreenComComponent},
    // {path:'i-am', component:IamComponent},
    // {path:'interior', component:InteriorDesignComponent},
    // {path:'mestory', component:MestoryComponent},
    // {path:'puzzle', component:PuzzleComponent},
    // {path:'qld-swim', component:QldSwimacademyComponent},
    // {path:'roller-coaster', component:RollerCoasterComponent},
    // {path:'sliding-santa', component:SlidingSantaComponent},
    // {path:'space-fuzz', component:SpaceFuzzComponent},
    // {path:'swype', component:SwypeComponent},
    // {path:'tufa', component:TufaComponent},
    // {path:'world', component:WorldWorldComponent},
    // {path:'**', component:PagenotfoundComponent}
    // {path:'', component:},
];
class WorkRoutingModule {
}
WorkRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: WorkRoutingModule });
WorkRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function WorkRoutingModule_Factory(t) { return new (t || WorkRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](WorkRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "7s1k":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/technology.service.ts ***!
  \*******************************************************/
/*! exports provided: TechnologyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyService", function() { return TechnologyService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class TechnologyService {
    constructor(http) {
        this.http = http;
        this.baseURL = "https://beta.9brainz.store/api/technology_master";
    }
    getTechnology() {
        return this.http
            .get(this.baseURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getTechnologyDetail(service_name) {
        return this.http
            .get('https://beta.9brainz.store/api/technology_master/' + service_name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getExpert(id) {
        return this.http.get("https://beta.9brainz.store/api/expertise_master/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getProjectsMini(id) {
        return this.http
            .get("https://beta.9brainz.store/api/technology_master/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        this.errorData = {
            errorTitle: "Oops! Request for document failed",
            errorDesc: "Something bad happened. Please try again later.",
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(this.errorData);
    }
}
TechnologyService.ɵfac = function TechnologyService_Factory(t) { return new (t || TechnologyService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
TechnologyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TechnologyService, factory: TechnologyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DuaA":
/*!*******************************************************!*\
  !*** ./src/app/shared/feedback/feedback.component.ts ***!
  \*******************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wow */ "ME1z");



swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Scrollbar"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["A11y"]]);
// import { Swiper, SwiperOptions } from 'swiper';/
class FeedbackComponent {
    constructor(wowService) {
        this.wowService = wowService;
        this.wowService.init();
    }
    // mySwiper: Swiper | any;
    onSwiper(swiper) {
        // console.log(swiper);
    }
    onSlideChange() {
        // console.log("slide change");  
    }
    ngOnInit() {
    }
}
FeedbackComponent.ɵfac = function FeedbackComponent_Factory(t) { return new (t || FeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowService"])); };
FeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FeedbackComponent, selectors: [["app-feedback"]], decls: 2, vars: 0, template: function FeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sorry this page closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "Fkuh":
/*!***********************************************************!*\
  !*** ./src/app/shared/case-study/case-study.component.ts ***!
  \***********************************************************/
/*! exports provided: CaseStudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseStudyComponent", function() { return CaseStudyComponent; });
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-tilt */ "WPFe");
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_tilt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var _case_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./case.service */ "1Udp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = function (a0, a1) { return { odd: a0, even: a1 }; };
const _c1 = function (a0, a1) { return [a0, a1]; };
function CaseStudyComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "see case study");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const case_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const even_r3 = ctx.even;
    const odd_r4 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](5, _c0, odd_r4, even_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", case_r1.small_banner_image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("0", i_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](case_r1.project_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](8, _c1, "/work/" + case_r1.id, case_r1.project_name));
} }
class CaseStudyComponent {
    constructor(wowService, caseSer) {
        this.wowService = wowService;
        this.caseSer = caseSer;
        this.wowService.init();
    }
    ngOnInit() {
        this.Featured();
        aos__WEBPACK_IMPORTED_MODULE_1__["init"]({
            duration: 2000,
            easing: 'ease-out-quart',
            once: true
        });
        vanilla_tilt__WEBPACK_IMPORTED_MODULE_0___default.a.init(document.querySelector("one"), {
            max: 30,
            speed: 400
        });
        // VanillaTilt.init(document.querySelector<any>("two"), {
        //   max: 30,
        //   speed: 400
        // });
        // VanillaTilt.init(document.querySelector<any>("three"), {
        //   max: 30,
        //   speed: 400
        // });
        // VanillaTilt.init(document.querySelector<any>("#four"), {
        //   max: 30,
        //   speed: 400
        // });
        // var scrollElemToWatch_4 = document.getElementById("four"),
        //     watcher_4 = scrollMonitor.create(scrollElemToWatch_4, -400),
        //     rev6 = new RevealFx(scrollElemToWatch_4, {
        //       revealSettings: {
        //         bgcolor: "#0094ff",
        //         direction: "rl",
        //         delay: 100,
        //         onCover: function (contentEl: { style: { opacity: number; }; }, revealerEl: any) {
        //           contentEl.style.opacity = 1;
        //         },
        //       },
        //     });
        //   watcher_4.enterViewport(function () {
        //     rev6.reveal();
        //     watcher_4.destroy();
        //   });
    }
    Featured() {
        this.caseSer.getFeatured().subscribe((res) => {
            // this.FT = res.data;
            // console.log("This is Featured-->" + res);
            this.cases = res.data;
        });
    }
}
CaseStudyComponent.ɵfac = function CaseStudyComponent_Factory(t) { return new (t || CaseStudyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_3__["NgwWowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_case_service__WEBPACK_IMPORTED_MODULE_4__["CaseService"])); };
CaseStudyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CaseStudyComponent, selectors: [["app-case-study"]], decls: 6, vars: 1, consts: [[1, "case-study"], [1, "container"], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "sec-title", "wow", "fadeInUp", "animated"], [1, "row", "MT50"], ["class", "case", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "case", 3, "ngClass"], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "col-7", "fadeInLeft", "wow", "animated"], ["id", "one even", 1, "one"], ["alt", "", 1, "mi", 3, "src"], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "col-4", "fadeInRight", "wow", "animated"], [1, "case-block"], ["onclick", "window.scrollTo(0, 0);", 3, "routerLink"]], template: function CaseStudyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Case Study ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CaseStudyComponent_div_5_Template, 12, 11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cases);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXNlLXN0dWR5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "LHjU":
/*!******************************************!*\
  !*** ./src/app/testy/testy.component.ts ***!
  \******************************************/
/*! exports provided: TestyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestyComponent", function() { return TestyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class TestyComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
TestyComponent.ɵfac = function TestyComponent_Factory(t) { return new (t || TestyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TestyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestyComponent, selectors: [["app-testy"]], decls: 0, vars: 0, template: function TestyComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0eS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "MEgZ":
/*!******************************************************!*\
  !*** ./src/app/shared/contact/contact-us.service.ts ***!
  \******************************************************/
/*! exports provided: ContactUsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsService", function() { return ContactUsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");


// import {  throwError } from 'rxjs';



class ContactUsService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    getTechnology() {
        return this.http.get('https://beta.9brainz.store/api/technology_master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    contactForm(formdata) {
        return this.http.post('https://beta.9brainz.store/api/contact-us-mail', formdata, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        this.errorData = {
            errorTitle: 'Oops! Request for document failed',
            errorDesc: 'Something bad happened. Please try again later.'
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(this.errorData);
    }
}
ContactUsService.ɵfac = function ContactUsService_Factory(t) { return new (t || ContactUsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ContactUsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ContactUsService, factory: ContactUsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OUCW":
/*!*********************************************!*\
  !*** ./src/app/work/work/work.component.ts ***!
  \*********************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _project_master_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project-master-service.service */ "omAc");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-sticky-nav */ "Bq3M");
/* harmony import */ var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








const _c0 = function (a1, a2) { return ["/Aemj", a1, a2]; };
function WorkComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sk_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, sk_r2.id, sk_r2.service_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", sk_r2.service_name, " ");
} }
function WorkComponent_div_13_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", child_r5.service_image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c1 = function (a0, a1) { return [a0, a1]; };
function WorkComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WorkComponent_div_13_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const prjct_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.setDocTitle("Work - " + prjct_r3.project_name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, WorkComponent_div_13_div_11_Template, 3, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prjct_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, "/work/" + prjct_r3.id, prjct_r3.project_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", prjct_r3.small_banner_image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](prjct_r3.project_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](prjct_r3.short_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", prjct_r3.project_service);
} }
class WorkComponent {
    constructor(projectService, titleSer, spinner) {
        this.projectService = projectService;
        this.titleSer = titleSer;
        this.spinner = spinner;
    }
    setDocTitle(title) {
        // console.log('current title:::::' + this.titleSer.getTitle());
        this.titleSer.setTitle(title);
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_0__["init"]();
        // console.log("Work Module Load..........");
        this.getProjects();
        this.getAllTechnology();
    }
    getProjects() {
        this.spinner.show();
        this.projectService.getProjectMaster().subscribe((res) => {
            this.projects = res.data;
            this.spinner.hide();
            // console.log(this.projects);
        });
    }
    getAllTechnology() {
        this.spinner.show();
        this.projectService.getAllTech().subscribe(res => {
            this.coka = res.data;
            console.log(this.coka);
            this.spinner.hide();
        });
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_project_master_service_service__WEBPACK_IMPORTED_MODULE_2__["ProjectMasterServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"])); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 19, vars: 2, consts: [["bdColor", "white", "color", "black", "template", "<img src='assets/images//9b-loading.gif' />"], [1, "main", "work-page", 2, "position", "relative"], [1, "top-banner"], [1, "work-bg", "bg"], ["data-logo-url", "assets/images/logo-black.svg", 1, "scroll-content"], ["ngStickyNav", "", "stickyClass", "sticky-box-shadow", "ngStickyNav", "", 1, "filter-works", "sticky-nav"], [1, "container"], [1, "row"], [4, "ngFor", "ngForOf"], [1, "work-list"], ["data-aos", "zoom-in", "data-aos-duration", "1000", "class", "col-4 mob-app", 4, "ngFor", "ngForOf"], [1, "aadu"], ["routerLink", "/contact", "onclick", "window.scrollTo(0, 0);", 1, "get-in-touch"], ["onclick", "window.scrollTo(0, 0);", 3, "routerLink"], ["data-aos", "zoom-in", "data-aos-duration", "1000", 1, "col-4", "mob-app"], [1, "card"], ["onclick", "window.scrollTo(0, 0);", 3, "routerLink", "click"], [1, "card-img"], ["alt", "", 3, "src"], [1, "card-description"], [1, "work-title"], ["class", "project-link", "style", "display: inline-block;", 4, "ngFor", "ngForOf"], [1, "project-link", 2, "display", "inline-block"], [1, "oculus"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "main", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, WorkComponent_li_9_Template, 3, 5, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, WorkComponent_div_13_Template, 12, 8, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.coka);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_5__["StickyNavDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], styles: [".aadu[_ngcontent-%COMP%] {\r\n  left:-33px;\r\nposition: absolute;\r\n\r\n\r\ntransform: rotate(-90deg);\r\n\r\ntransition: all 0.15s ease-out;\r\nbottom: 43px;\r\nfont-size: 24px;\r\n\r\n\r\n}\r\n.get-in-touch[_ngcontent-%COMP%]{\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n  color: #fff;\r\n  transition: all 0.7s;\r\n}\r\n.get-in-touch[_ngcontent-%COMP%]:hover{\r\n  background-color: rgba(5,150,255,.9);\r\n  color: rgb(255, 255, 255);\r\n  transition: all 0.7s;\r\n}\r\n\r\n@media (min-width: 0px) and (max-width: 576.98px) { \r\n  .filter-works[_ngcontent-%COMP%]{\r\n    top: 60px !important;\r\n    position:sticky !important;\r\n  }\r\n }\r\n@media (min-width: 576.98px) and (max-width: 992px) { \r\n  .filter-works[_ngcontent-%COMP%]{\r\n    top: 60px !important;\r\n    position:sticky !important;\r\n\r\n  }\r\n\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWixrQkFBa0I7QUFDbEI7O3FDQUVxQztBQUNyQzs7O29DQUdvQztBQUNwQyx5QkFBeUI7QUFDekI7O3lDQUV5QztBQUN6Qyw4QkFBOEI7QUFDOUIsWUFBWTtBQUNaLGVBQWU7OztBQUdmO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7QUFDQTs7Ozs7OztHQU9HO0FBRUg7RUFDRTtJQUNFLG9CQUFvQjtJQUNwQiwwQkFBMEI7RUFDNUI7Q0FDRDtBQUVBO0VBQ0M7SUFDRSxvQkFBb0I7SUFDcEIsMEJBQTBCOztFQUU1Qjs7Q0FFRCIsImZpbGUiOiJ3b3JrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWFkdSB7XHJcbiAgbGVmdDotMzNweDtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG4vKiAtbW96LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xyXG4tbXMtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbi13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7ICovXHJcbi8qIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xyXG4tbW96LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbi1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4td2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7ICovXHJcbnRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbi8qIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2Utb3V0O1xyXG4tby10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1vdXQ7XHJcbi13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2Utb3V0OyAqL1xyXG50cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1vdXQ7XHJcbmJvdHRvbTogNDNweDtcclxuZm9udC1zaXplOiAyNHB4O1xyXG5cclxuXHJcbn1cclxuLmdldC1pbi10b3VjaHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XHJcbn1cclxuLmdldC1pbi10b3VjaDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUsMTUwLDI1NSwuOSk7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC43cztcclxufVxyXG4vKiAucGFnZS1hY3RpdmV7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlLW91dDtcclxuICBjb2xvcjogI2RkZDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG9wYWNpdHk6IC42O1xyXG59ICovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogNTc2Ljk4cHgpIHsgXHJcbiAgLmZpbHRlci13b3Jrc3tcclxuICAgIHRvcDogNjBweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246c3RpY2t5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gfVxyXG5cclxuIEBtZWRpYSAobWluLXdpZHRoOiA1NzYuOThweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7IFxyXG4gIC5maWx0ZXItd29ya3N7XHJcbiAgICB0b3A6IDYwcHggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOnN0aWNreSAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcblxyXG4gfSJdfQ== */"] });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-routing.module */ "Sj5B");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "sOmp");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "1vAT");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "320Y");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "jQpT");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slider/slider.component */ "eeSA");
/* harmony import */ var _memorable_memorable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./memorable/memorable.component */ "xkzP");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feedback/feedback.component */ "DuaA");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/services.component */ "viZE");
/* harmony import */ var _case_study_case_study_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./case-study/case-study.component */ "Fkuh");
/* harmony import */ var _lets_work_lets_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lets-work/lets-work.component */ "/USv");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fullpage/angular-fullpage */ "RhbM");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var angular_tilt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-tilt */ "NxDM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_service_details_service_details_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/service-details/service-details.component */ "qWFd");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../general/general.module */ "hxwH");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./home/home.component */ "ZEqh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");









// import { HomeComponent } from "./home/home.component";







// import { DevelopmentsModule } from "../developments/developments.module";

// import { LoaderComponent } from "../loader/loader.component";
// import { NgxSpinnerModule } from "ngx-spinner";



// import { OurGamesComponent } from "../developments/our-games/our-games.component";





class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["Title"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _shared_routing_module__WEBPACK_IMPORTED_MODULE_1__["SharedRoutingModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_12__["SwiperModule"],
            _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_13__["AngularFullpageModule"],
            ngx_wow__WEBPACK_IMPORTED_MODULE_14__["NgwWowModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            // DevelopmentsModule,
            angular_tilt__WEBPACK_IMPORTED_MODULE_16__["AngularTiltModule"],
            ngx_wow__WEBPACK_IMPORTED_MODULE_14__["NgwWowModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_19__["GeneralModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"]
            // NgxSpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"],
        _memorable_memorable_component__WEBPACK_IMPORTED_MODULE_7__["MemorableComponent"],
        _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__["FeedbackComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
        _services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"],
        _case_study_case_study_component__WEBPACK_IMPORTED_MODULE_10__["CaseStudyComponent"],
        _lets_work_lets_work_component__WEBPACK_IMPORTED_MODULE_11__["LetsWorkComponent"],
        _services_service_details_service_details_component__WEBPACK_IMPORTED_MODULE_18__["ServiceDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _shared_routing_module__WEBPACK_IMPORTED_MODULE_1__["SharedRoutingModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_12__["SwiperModule"],
        _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_13__["AngularFullpageModule"],
        ngx_wow__WEBPACK_IMPORTED_MODULE_14__["NgwWowModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
        // DevelopmentsModule,
        angular_tilt__WEBPACK_IMPORTED_MODULE_16__["AngularTiltModule"],
        ngx_wow__WEBPACK_IMPORTED_MODULE_14__["NgwWowModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_19__["GeneralModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"]
        // NgxSpinnerModule
    ], exports: [_slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"],
        _case_study_case_study_component__WEBPACK_IMPORTED_MODULE_10__["CaseStudyComponent"],
        _lets_work_lets_work_component__WEBPACK_IMPORTED_MODULE_11__["LetsWorkComponent"],
        _services_services_component__WEBPACK_IMPORTED_MODULE_9__["ServicesComponent"],
        _memorable_memorable_component__WEBPACK_IMPORTED_MODULE_7__["MemorableComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__["FeedbackComponent"]] }); })();


/***/ }),

/***/ "PFEc":
/*!**************************************************************!*\
  !*** ./src/app/general/client-feed/client-feed.component.ts ***!
  \**************************************************************/
/*! exports provided: ClientFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientFeedComponent", function() { return ClientFeedComponent; });
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _feedback_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feedback.service */ "fwv0");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ClientFeedComponent_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feed_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", feed_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", feed_r1.feedback, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](feed_r1.owner_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", feed_r1.company_name, " ");
} }
function ClientFeedComponent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ClientFeedComponent_4_ng_template_0_Template, 10, 4, "ng-template", 5);
} }
swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Scrollbar"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["A11y"]]);
class ClientFeedComponent {
    constructor(service) {
        this.service = service;
    }
    onSwiper(swiper) {
        // console.log(swiper);
    }
    onSlideChange() {
        // console.log("slide change");  
    }
    ngOnInit() {
        this.getFeedback();
    }
    getFeedback() {
        this.service.getFeedback().subscribe(res => {
            this.Feedy = res.data;
            // console.log(this.Feedy);
        });
    }
}
ClientFeedComponent.ɵfac = function ClientFeedComponent_Factory(t) { return new (t || ClientFeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_feedback_service__WEBPACK_IMPORTED_MODULE_2__["FeedbackService"])); };
ClientFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ClientFeedComponent, selectors: [["app-client-feed"]], decls: 5, vars: 4, consts: [["data-logo-url", "assets/images/logo-black.svg", 1, "client-testimonials", "scroll-content"], [1, "container"], [1, "row"], [3, "loop", "loopedSlides", "pagination"], [4, "ngFor", "ngForOf"], ["swiperSlide", ""], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "text-center", "fadeInUp", "wow", "animated"], ["alt", "", 1, "img-responsive", "review", 3, "src"], [1, "feedback"], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "playfair", "fadeInUp", "wow", "animated"], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "client-name", "fadeInUp", "wow", "animated"]], template: function ClientFeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "swiper", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ClientFeedComponent_4_Template, 1, 0, undefined, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loop", true)("loopedSlides", 2)("pagination", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Feedy);
    } }, directives: [swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperSlideDirective"]], styles: [".review[_ngcontent-%COMP%]{\r\nheight: 80px !important;\r\nwidth: 80px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1mZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSx1QkFBdUI7QUFDdkIsc0JBQXNCO0FBQ3RCIiwiZmlsZSI6ImNsaWVudC1mZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmV2aWV3e1xyXG5oZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcclxud2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Sj5B":
/*!*************************************************!*\
  !*** ./src/app/shared/shared-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "sOmp");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "1vAT");
/* harmony import */ var _services_service_details_service_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/service-details/service-details.component */ "qWFd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






// import { SharedModule } from './shared.module';
const routes = [
    // {path:'', component:},
    // {path:'work', component:WorkComponent},
    // {path:'', component:ServicesComponent},
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] },
    { path: 'services/:id/:service_name', component: _services_service_details_service_details_component__WEBPACK_IMPORTED_MODULE_3__["ServiceDetailsComponent"] }
    // {path:'**', component:PagenotfoundComponent}
];
class SharedRoutingModule {
}
SharedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SharedRoutingModule });
SharedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function SharedRoutingModule_Factory(t) { return new (t || SharedRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader/loader.component */ "kQyY");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/header/header.component */ "320Y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_slider_slider_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/slider/slider.component */ "eeSA");
/* harmony import */ var _shared_memorable_memorable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/memorable/memorable.component */ "xkzP");
/* harmony import */ var _shared_services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/services/services.component */ "viZE");
/* harmony import */ var _shared_case_study_case_study_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/case-study/case-study.component */ "Fkuh");
/* harmony import */ var _general_client_feed_client_feed_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./general/client-feed/client-feed.component */ "PFEc");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./feed/feed.component */ "eVva");
/* harmony import */ var _shared_lets_work_lets_work_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/lets-work/lets-work.component */ "/USv");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
















function AppComponent_app_slider_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-slider");
} }
function AppComponent_app_memorable_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-memorable");
} }
function AppComponent_app_services_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-services");
} }
function AppComponent_app_case_study_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-case-study");
} }
function AppComponent_app_client_feed_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-client-feed");
} }
function AppComponent_app_feed_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-feed");
} }
function AppComponent_app_lets_work_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-lets-work");
} }
function AppComponent_app_footer_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer");
} }
function AppComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_15_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.gotoTop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    // @HostListener('window:scroll')
    // checkScroll() {
    //   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    //   console.log('[scroll]', scrollPosition);
    //   if (scrollPosition >= this.topPosToStartShowing) {
    //     this.isShow = true;
    //   } else {
    //     this.isShow = false;
    //   }
    // }
    constructor(router, wowService, SpinnerService, titleSer) {
        this.router = router;
        this.wowService = wowService;
        this.SpinnerService = SpinnerService;
        this.titleSer = titleSer;
        // isShow: boolean | any;
        this.topPosToStartShowing = 100;
        this.title = 'Home';
        // this.wowService.init();
    }
    setDocTitle(title) {
        // console.log('current title:::::' + this.titleSer.getTitle());
        this.titleSer.setTitle(title);
    }
    ngOnInit() {
        this.SpinnerService.show();
        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.SpinnerService.hide();
        }, 3000);
    }
    gotoTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 19, vars: 9, consts: [[1, "bg"], ["bdColor", "white", "color", "black", "template", "<img src='assets/images//9b-loading.gif' />"], [1, "main", "home-page"], [4, "ngIf"], ["id", "go-top"], [3, "click", 4, "ngIf"], [1, "copyright"], [3, "click"], [1, "fa", "fa-chevron-up"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_app_slider_5_Template, 1, 0, "app-slider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_app_memorable_6_Template, 1, 0, "app-memorable", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_app_services_7_Template, 1, 0, "app-services", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_app_case_study_8_Template, 1, 0, "app-case-study", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_app_client_feed_9_Template, 1, 0, "app-client-feed", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_app_feed_10_Template, 1, 0, "app-feed", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_app_lets_work_11_Template, 1, 0, "app-lets-work", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_app_footer_13_Template, 1, 0, "app-footer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_a_15_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00A9 2021-2030 9Brainz. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url == "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url == "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url == "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url == "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url == "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url == "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url == "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url !== "/work" && ctx.router.url !== "/contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url !== "/work");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_slider_slider_component__WEBPACK_IMPORTED_MODULE_8__["SliderComponent"], _shared_memorable_memorable_component__WEBPACK_IMPORTED_MODULE_9__["MemorableComponent"], _shared_services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"], _shared_case_study_case_study_component__WEBPACK_IMPORTED_MODULE_11__["CaseStudyComponent"], _general_client_feed_client_feed_component__WEBPACK_IMPORTED_MODULE_12__["ClientFeedComponent"], _feed_feed_component__WEBPACK_IMPORTED_MODULE_13__["FeedComponent"], _shared_lets_work_lets_work_component__WEBPACK_IMPORTED_MODULE_14__["LetsWorkComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"]], styles: ["#overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 5px;\r\n    overflow: hidden;\r\n    justify-content: center;\r\n    -webkit-justify-content: center;\r\n    width: 100%;\r\n    z-index: 99999;\r\n    height: 100%;\r\n    background: #fff;\r\n    transition: 1s 0.4s;\r\n    display: flex;\r\n    display: -webkit-flex;\r\n    align-items: center;\r\n    -webkit-align-items: center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsMkJBQTJCO0VBQzdCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI292ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IDFzIDAuNHM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9Il19 */"] });


/***/ }),

/***/ "Vicn":
/*!**********************************************************************!*\
  !*** ./src/app/work/work/project-filter/project-filter.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProjectFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectFilterComponent", function() { return ProjectFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _project_master_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../project-master-service.service */ "omAc");
/* harmony import */ var src_app_shared_services_technology_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/technology.service */ "7s1k");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ProjectFilterComponent_div_6_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", child_r3.service_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
function ProjectFilterComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectFilterComponent_div_6_div_11_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prjct_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, "/work/" + prjct_r1.id, prjct_r1.project_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", prjct_r1.small_banner_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prjct_r1.project_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prjct_r1.short_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", prjct_r1.project_service);
} }
class ProjectFilterComponent {
    constructor(projectService, techService, route, router) {
        this.projectService = projectService;
        this.techService = techService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.getOneTechno();
    }
    getOneTechno() {
        this.projectService.getOneTechnology(this.id).subscribe(res => {
            this.projectOne = res.project_data[0];
            console.log(this.projectOne);
        });
    }
}
ProjectFilterComponent.ɵfac = function ProjectFilterComponent_Factory(t) { return new (t || ProjectFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_master_service_service__WEBPACK_IMPORTED_MODULE_1__["ProjectMasterServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_technology_service__WEBPACK_IMPORTED_MODULE_2__["TechnologyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProjectFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectFilterComponent, selectors: [["app-project-filter"]], decls: 7, vars: 1, consts: [[1, "work-list"], [1, "container"], [1, "row"], ["class", "col-4 mob-app", 4, "ngFor", "ngForOf"], [1, "col-4", "mob-app"], [1, "card"], ["onclick", "window.scrollTo(0, 0);", 3, "routerLink"], [1, "card-img"], ["alt", "", 3, "src"], [1, "card-description"], [1, "work-title"], ["class", "project-link", "style", "display: inline-block;", 4, "ngFor", "ngForOf"], [1, "project-link", 2, "display", "inline-block"], [1, "oculus"]], template: function ProjectFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProjectFilterComponent_div_6_Template, 12, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectOne);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LWZpbHRlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "sG/L");
/* harmony import */ var _testy_testy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./testy/testy.component */ "LHjU");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feed/feed.component */ "eVva");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loader/loader.component */ "kQyY");
/* harmony import */ var _general_general_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./general/general.module */ "hxwH");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _work_work_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./work/work.module */ "g+tZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");



// import { HomeComponent } from './home/home.component';

// import { WorkModule } from './work/work.module';


// import { NgwWowModule } from 'ngx-wow';
// import { LetsWorkComponent } from './shared/lets-work/lets-work.component';



// import { DevelopmentsModule } from './developments/developments.module';
// import { FeedbackComponent } from './shared/feedback/feedback.component';


// import { GeneralModule } from './general/general.module';
// import { NgxSpinnerModule } from 'ngx-spinner';



class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _work_work_module__WEBPACK_IMPORTED_MODULE_12__["WorkModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_8__["SwiperModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _general_general_module__WEBPACK_IMPORTED_MODULE_10__["GeneralModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__["PagenotfoundComponent"],
        _testy_testy_component__WEBPACK_IMPORTED_MODULE_5__["TestyComponent"],
        _feed_feed_component__WEBPACK_IMPORTED_MODULE_7__["FeedComponent"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _work_work_module__WEBPACK_IMPORTED_MODULE_12__["WorkModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_8__["SwiperModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _general_general_module__WEBPACK_IMPORTED_MODULE_10__["GeneralModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerModule"]], exports: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]] }); })();


/***/ }),

/***/ "ZEqh":
/*!***********************************************!*\
  !*** ./src/app/shared/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");



class HomeComponent {
    constructor(router, SpinnerService) {
        this.router = router;
        this.SpinnerService = SpinnerService;
    }
    ngOnInit() {
        this.SpinnerService.show();
        setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.SpinnerService.hide();
        }, 1000);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, consts: [["bdColor", "white", "color", "black", "template", "<img src='assets/images//9b-loading.gif' />"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "main");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "a4Oy":
/*!***************************************************!*\
  !*** ./src/app/general/general-routing.module.ts ***!
  \***************************************************/
/*! exports provided: GeneralRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralRoutingModule", function() { return GeneralRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class GeneralRoutingModule {
}
GeneralRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GeneralRoutingModule });
GeneralRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function GeneralRoutingModule_Factory(t) { return new (t || GeneralRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GeneralRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "eVva":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Scrollbar"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["A11y"]]);
class FeedComponent {
    constructor() { }
    onSwiper(swiper) {
        console.log(swiper);
    }
    onSlideChange() {
        console.log("slide change");
    }
    ngOnInit() {
    }
}
FeedComponent.ɵfac = function FeedComponent_Factory(t) { return new (t || FeedComponent)(); };
FeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FeedComponent, selectors: [["app-feed"]], decls: 0, vars: 0, template: function FeedComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "eeSA":
/*!***************************************************!*\
  !*** ./src/app/shared/slider/slider.component.ts ***!
  \***************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var _main_slider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-slider.service */ "fJG4");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
// import { NgxSpinnerService } from "ngx-spinner";







function SliderComponent_1_ng_template_0_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slide_r1.button_text);
} }
function SliderComponent_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SliderComponent_1_ng_template_0_a_7_Template, 2, 1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", slide_r1.images, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("id", slide_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slide_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](slide_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", slide_r1.title);
} }
function SliderComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SliderComponent_1_ng_template_0_Template, 8, 5, "ng-template", 2);
} }
const _c0 = function () { return { clickable: true }; };
const _c1 = function () { return { delay: 3000 }; };
swiper_core__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Scrollbar"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["A11y"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Autoplay"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["EffectFade"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["EffectCube"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["EffectCoverflow"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["EffectFlip"], swiper_core__WEBPACK_IMPORTED_MODULE_0__["Mousewheel"]]);
class SliderComponent {
    // private SpinnerService: NgxSpinnerService
    constructor(wowService, mainService) {
        this.wowService = wowService;
        this.mainService = mainService;
        this.wowService.init();
    }
    ngOnInit() {
        this.getSd();
    }
    //  move() {
    //   var elem = document.getElementById("progress"); 
    //   var width = 1;
    //   var autoplayTime = 5000 / 100;
    //   var id = setInterval(frame, autoplayTime);
    //   function frame() {
    //       if (width >= 100) {
    //           clearInterval(id);
    //       } else {
    //           width++; 
    //           // elem.style.width = width + '%'; 
    //       }
    //   }
    // }
    ngAfterViewInit() {
        // this.getSd();
        // jQuery(".tp-banner").revolution({
        //   delay: 3500,
        //   startwidth: 1170,
        //   onHoverStop: "off",
        //   startheight: 900,
        //   hideThumbs: 10,
        //   fullWidth: "off",
        //   fullScreen: "on",
        //   /*parallax: "mouse", parallaxBgFreeze: "on", parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],*/
        //   fullScreenOffsetContainer: "",
        // });
    }
    onSwiper(swiper) {
        // console.log(swiper);
    }
    onSlideChange() {
        // console.log('slide change');
    }
    getSd() {
        // this.SpinnerService.show();  
        this.mainService.getSlider().subscribe((res) => {
            // console.log(res);
            this.item = res.data;
            // console.log(this.item);
            // this.SpinnerService.hide();  
        });
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_main_slider_service__WEBPACK_IMPORTED_MODULE_3__["MainSliderService"])); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], decls: 2, vars: 10, consts: [["effect", "fade", 1, "oo", 3, "slidesPerView", "loop", "loopedSlides", "navigation", "pagination", "autoplay", "parallax", "swiper", "slideChange"], [4, "ngFor", "ngForOf"], ["swiperSlide", ""], ["alt", "", 3, "src", "id"], ["data-x", "center", "data-hoffset", "0", "data-y", "center", "data-voffset", "-270", "data-speed", "1000", "data-start", "1100", "data-easing", "Power0.easeInOut", "data-elementdelay", "0.1", "data-endelementdelay", "0.1", "data-endspeed", "300", 1, "tp-caption", "sfl", "rs-parallaxlevel-6", "start"], [1, "cell"], ["data-wow-duration", "1.5s", "data-wow-delay", "1.2s", 1, "fadeInUp", "wow", "animated"], ["data-wow-duration", "2s", "data-wow-delay", "2s", 1, "fadeInUp", "wow", "animated"], ["routerLink", "/contact", "class", "banner-button fadeInUp wow animated", "data-wow-duration", "2s", "data-wow-delay", "2s", 4, "ngIf"], ["routerLink", "/contact", "data-wow-duration", "2s", "data-wow-delay", "2s", 1, "banner-button", "fadeInUp", "wow", "animated"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "swiper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("swiper", function SliderComponent_Template_swiper_swiper_0_listener($event) { return ctx.onSwiper($event); })("slideChange", function SliderComponent_Template_swiper_slideChange_0_listener() { return ctx.onSlideChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SliderComponent_1_Template, 1, 0, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("slidesPerView", 1)("loop", true)("loopedSlides", 5)("navigation", true)("pagination", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0))("autoplay", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c1))("parallax", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.item);
    } }, directives: [swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperSlideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".swiper-container[_ngcontent-%COMP%]{\r\n    height: 100vh !important;\r\n}\r\n.ojoj[_ngcontent-%COMP%]{\r\n    font-weight: 700;\r\n  font-style: italic;\r\n  opacity: 0;\r\n  transition: all .8s cubic-bezier(0.215, 0.61, 0.355, 1) 1.2s;\r\n  transform: translate3d(-20%, 0, 0);\r\n  display: inline-block;\r\n}\r\n.oo[_ngcontent-%COMP%]{\r\n  \r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxnQkFBZ0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViw0REFBNEQ7RUFDNUQsa0NBQWtDO0VBQ2xDLHFCQUFxQjtBQUN2QjtBQUNBOztFQUVFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJzbGlkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXItY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG59XHJcbi5vam9qe1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjhzIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpIDEuMnM7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAlLCAwLCAwKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLm9ve1xyXG4gIFxyXG4gIC8qIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgKi9cclxufSJdfQ== */"] });


/***/ }),

/***/ "fJG4":
/*!******************************************************!*\
  !*** ./src/app/shared/slider/main-slider.service.ts ***!
  \******************************************************/
/*! exports provided: MainSliderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSliderService", function() { return MainSliderService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class MainSliderService {
    constructor(http) {
        this.http = http;
        this.baseURL = "https://beta.9brainz.store/api/sliders";
    }
    getSlider() {
        return this.http
            .get(this.baseURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        this.errorData = {
            errorTitle: "Oops! Request for document failed",
            errorDesc: "Something bad happened. Please try again later.",
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(this.errorData);
    }
}
MainSliderService.ɵfac = function MainSliderService_Factory(t) { return new (t || MainSliderService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MainSliderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MainSliderService, factory: MainSliderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fwv0":
/*!*********************************************!*\
  !*** ./src/app/general/feedback.service.ts ***!
  \*********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");

// import {  throwError } from 'rxjs';



class FeedbackService {
    constructor(http) {
        this.http = http;
        this.baseURL = "https://beta.9brainz.store/api/technology_master";
    }
    getFeedback() {
        return this.http
            .get("https://beta.9brainz.store/api/testimonial")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        this.errorData = {
            errorTitle: "Oops! Request for document failed",
            errorDesc: "Something bad happened. Please try again later.",
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(this.errorData);
    }
}
FeedbackService.ɵfac = function FeedbackService_Factory(t) { return new (t || FeedbackService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
FeedbackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FeedbackService, factory: FeedbackService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "g+tZ":
/*!*************************************!*\
  !*** ./src/app/work/work.module.ts ***!
  \*************************************/
/*! exports provided: WorkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkModule", function() { return WorkModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-sticky-nav */ "Bq3M");
/* harmony import */ var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _work_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work-routing.module */ "4QC7");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work/work.component */ "OUCW");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _test_details_test_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-details/test-details.component */ "/QN8");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project-detail/project-detail.component */ "04Dc");
/* harmony import */ var _work_project_filter_project_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./work/project-filter/project-filter.component */ "Vicn");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");




// import { BattleComponent } from "./battle/battle.component";
// import { BeFirstComponent } from "./be-first/be-first.component";
// import { BlenddComponent } from "./blendd/blendd.component";
// import { BoxesComponent } from "./boxes/boxes.component";
// import { BugwarzComponent } from "./bugwarz/bugwarz.component";
// import { DewComponent } from "./dew/dew.component";
// import { FidgetComponent } from "./fidget/fidget.component";
// import { FireSmokeComponent } from "./fire-smoke/fire-smoke.component";
// import { GreenComComponent } from "./green-com/green-com.component";
// import { IamComponent } from "./iam/iam.component";
// import { InteriorDesignComponent } from "./interior-design/interior-design.component";
// import { MestoryComponent } from "./mestory/mestory.component";
// import { PuzzleComponent } from "./puzzle/puzzle.component";
// import { QldSwimacademyComponent } from "./qld-swimacademy/qld-swimacademy.component";
// import { RollerCoasterComponent } from "./roller-coaster/roller-coaster.component";
// import { SlidingSantaComponent } from "./sliding-santa/sliding-santa.component";
// import { SpaceFuzzComponent } from "./space-fuzz/space-fuzz.component";
// import { SwypeComponent } from "./swype/swype.component";
// import { TufaComponent } from "./tufa/tufa.component";
// import { WorldWorldComponent } from "./world-world/world-world.component";





// import { GeneralModule } from "../general/general.module";


class WorkModule {
}
WorkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: WorkModule });
WorkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function WorkModule_Factory(t) { return new (t || WorkModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"], _work_routing_module__WEBPACK_IMPORTED_MODULE_2__["WorkRoutingModule"], ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_1__["StickyNavModule"], swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](WorkModule, { declarations: [_work_work_component__WEBPACK_IMPORTED_MODULE_3__["WorkComponent"],
        // BattleComponent,
        // BeFirstComponent,
        // BlenddComponent,
        // BoxesComponent,
        // BugwarzComponent,
        // DewComponent,
        // FidgetComponent,
        // FireSmokeComponent,
        // GreenComComponent,
        // IamComponent,
        // InteriorDesignComponent,
        // MestoryComponent,
        // PuzzleComponent,
        // QldSwimacademyComponent,
        // RollerCoasterComponent,
        // SlidingSantaComponent,
        // SpaceFuzzComponent,
        // SwypeComponent,
        // TufaComponent,
        // WorldWorldComponent,
        _test_details_test_details_component__WEBPACK_IMPORTED_MODULE_5__["TestDetailsComponent"],
        _project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProjectDetailComponent"],
        _work_project_filter_project_filter_component__WEBPACK_IMPORTED_MODULE_8__["ProjectFilterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"], _work_routing_module__WEBPACK_IMPORTED_MODULE_2__["WorkRoutingModule"], ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_1__["StickyNavModule"], swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]], exports: [_work_work_component__WEBPACK_IMPORTED_MODULE_3__["WorkComponent"]] }); })();


/***/ }),

/***/ "hxwH":
/*!*******************************************!*\
  !*** ./src/app/general/general.module.ts ***!
  \*******************************************/
/*! exports provided: GeneralModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralModule", function() { return GeneralModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _general_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-routing.module */ "a4Oy");
/* harmony import */ var _client_feed_client_feed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-feed/client-feed.component */ "PFEc");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class GeneralModule {
}
GeneralModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: GeneralModule });
GeneralModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function GeneralModule_Factory(t) { return new (t || GeneralModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _general_routing_module__WEBPACK_IMPORTED_MODULE_1__["GeneralRoutingModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GeneralModule, { declarations: [_client_feed_client_feed_component__WEBPACK_IMPORTED_MODULE_2__["ClientFeedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _general_routing_module__WEBPACK_IMPORTED_MODULE_1__["GeneralRoutingModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperModule"]], exports: [_client_feed_client_feed_component__WEBPACK_IMPORTED_MODULE_2__["ClientFeedComponent"]] }); })();


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_technology_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/technology.service */ "7s1k");
/* harmony import */ var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullpage/angular-fullpage */ "RhbM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = function (a1, a2) { return ["/services", a1, a2]; };
function FooterComponent_a_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const osm_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, osm_r1.id, osm_r1.service_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", osm_r1.service_name, " ");
} }
class FooterComponent {
    constructor(wowService, titleSer, techservice) {
        this.wowService = wowService;
        this.titleSer = titleSer;
        this.techservice = techservice;
        this.wowService.init();
    }
    setDocTitle(title) {
        // console.log('current title:::::' + this.titleSer.getTitle());
        this.titleSer.setTitle(title);
    }
    ngOnInit() {
        this.getTechy();
    }
    getTechy() {
        this.techservice.getTechnology().subscribe((res) => {
            this.techy = res.data;
        });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_1__["NgwWowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_technology_service__WEBPACK_IMPORTED_MODULE_3__["TechnologyService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 54, vars: 1, consts: [[1, "container"], [1, "row"], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "col-3", "fadeIn", "wow", "animated"], [1, "nine-b"], ["src", "assets/images/logo-white.svg", "alt", ""], [1, "follow-us"], ["href", "https://www.facebook.com/9brainz/", "target", "new", 1, "fb"], [1, "fa", "fa-facebook"], ["href", "https://www.instagram.com/9brainz/", "target", "new", 1, "insta"], [1, "fa", "fa-instagram"], ["href", "https://twitter.com/_9brainz", "target", "new", 1, "twit"], [1, "fa", "fa-twitter"], ["href", "https://www.youtube.com/channel/UC46wgx8jZ5RTH79fzF-4iRg", "target", "new", 1, "youtube"], [1, "fa", "fa-youtube"], ["href", "https://www.linkedin.com/company/13196526/", "target", "new", 1, "link"], [1, "fa", "fa-linkedin"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "col-3", "sitemap", "col-offset-2", "fadeIn", "wow", "animated"], ["routerLink", "/", "onclick", "window.scrollTo(0, 0);", 3, "click"], ["routerLink", "/about", "onclick", "window.scrollTo(0, 0);", 3, "click"], ["routerLink", "/work", "onclick", "window.scrollTo(0, 0);", 3, "click"], ["routerLink", "/contact", "onclick", "window.scrollTo(0, 0);", 3, "click"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "col-3", "we-provide", "fadeIn", "wow", "animated"], ["onclick", "window.scrollTo(0, 0);", 3, "routerLink", 4, "ngFor", "ngForOf"], ["data-wow-duration", "1s", "data-wow-delay", "1s", 1, "col-3", "contactus", "fadeIn", "wow", "animated"], [1, "address"], ["routerLink", "tel:+919033915992"], ["routerLink", "mailto:ravi@9Brainz.com"], ["onclick", "window.scrollTo(0, 0);", 3, "routerLink"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " The leading Web Development,App Development, Game Development and Outsourcing Company 9Brainz, is one of the most trusted and fastest growing digital marketing companies in India. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sitemap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_22_listener() { return ctx.setDocTitle("Home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_24_listener() { return ctx.setDocTitle("About-Us"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_26_listener() { return ctx.setDocTitle("Our-Works"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_28_listener() { return ctx.setDocTitle("Contact-Us"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "We Provide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, FooterComponent_a_33_Template, 2, 5, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 411-412 - Jasal Complex,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Nanavati Chowk,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Opp. Sterling Hospital,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Rajkot, Gujrat,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " India - 360007 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "+91 9033915992");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "ravi@9Brainz.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.techy);
    } }, directives: [_fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_4__["ɵb"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "kQyY":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

// import { NgxSpinnerService } from 'ngx-spinner';
class LoaderComponent {
    constructor() { }
    ngOnInit() {
        // this.spinner.show();
        // setTimeout(() => {
        //   this.spinner.hide();
        // }, 3000);
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 0, vars: 0, template: function LoaderComponent_Template(rf, ctx) { }, styles: ["#overlay[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    padding: 5px;\r\n    overflow: hidden;\r\n    justify-content: center;\r\n    -webkit-justify-content: center;\r\n    width: 100%;\r\n    z-index: 99999;\r\n    height: 100%;\r\n    background: #fff;\r\n    transition: 1s 0.4s;\r\n    display: flex;\r\n    display: -webkit-flex;\r\n    align-items: center;\r\n    -webkit-align-items: center;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsMkJBQTJCO0VBQzdCIiwiZmlsZSI6ImxvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI292ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IDFzIDAuNHM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9Il19 */"] });


/***/ }),

/***/ "omAc":
/*!********************************************************!*\
  !*** ./src/app/work/project-master-service.service.ts ***!
  \********************************************************/
/*! exports provided: ProjectMasterServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectMasterServiceService", function() { return ProjectMasterServiceService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ProjectMasterServiceService {
    constructor(http) {
        this.http = http;
        this.ServerUrl = "https://beta.9brainz.store/api/project_master";
    }
    getProjectMaster() {
        return this.http
            .get(this.ServerUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getOneProject(id) {
        return this.http
            .get('https://beta.9brainz.store/api/project_master/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getOneTechnology(id) {
        return this.http
            .get('https://beta.9brainz.store/api/technology_master/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    getAllTech() {
        return this.http.get('https://beta.9brainz.store/api/technology_master')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        this.errorData = {
            errorTitle: "Oops! Request for document failed",
            errorDesc: "Something bad happened. Please try again later.",
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(this.errorData);
    }
}
ProjectMasterServiceService.ɵfac = function ProjectMasterServiceService_Factory(t) { return new (t || ProjectMasterServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ProjectMasterServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProjectMasterServiceService, factory: ProjectMasterServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qWFd":
/*!******************************************************************************!*\
  !*** ./src/app/shared/services/service-details/service-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: ServiceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDetailsComponent", function() { return ServiceDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _technology_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../technology.service */ "7s1k");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _general_client_feed_client_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../general/client-feed/client-feed.component */ "PFEc");
/* harmony import */ var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullpage/angular-fullpage */ "RhbM");
/* harmony import */ var _memorable_memorable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../memorable/memorable.component */ "xkzP");








const _c0 = function (a1, a2) { return ["/services", a1, a2]; };
function ServiceDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceDetailsComponent_div_1_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.human(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, op_r2.id, op_r2.service_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r2.service_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r2.service_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r2.banner_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r2.banner_page_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r2.button_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(", op_r2.image, "); ");
} }
function ServiceDetailsComponent_main_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mobile Game Development Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We have created chartbuster titles for iOS and Android smartphones. Having more than ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1 million");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " downloads in total, we know the art of designing games based on variety of categories for all age groups.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServiceDetailsComponent_main_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "VR Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Virtuality is the next big reality. The majority of content produced on VR devices are the games. We can create a new game from ground up exclusively for VR devices and bounce your game idea towards reality.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Learn More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServiceDetailsComponent_main_2_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Iphone Application Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "iPhone Application Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem, tempore totam perspiciatis ab rerum quo, earum non consectetur voluptates assumenda. Facilis eaque eligendi in dolor est, recusandae quaerat sunt.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Develop your app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sevices Include");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "M-commerce");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Health");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Social Networking");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Android Application Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Android Application Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem, tempore totam perspiciatis ab rerum quo, earum non consectetur voluptates assumenda. Facilis eaque eligendi in dolor est, recusandae quaerat sunt.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Develop your app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sevices Include");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Data Synchronisation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Social Media Integration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "In app purchases");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ul", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Push Notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Google Map API Integration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "XML, JSON API Integration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "VR/AR Application Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "VR/AR Application Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem, tempore totam perspiciatis ab rerum quo, earum non consectetur voluptates assumenda. Facilis eaque eligendi in dolor est, recusandae quaerat sunt.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Develop your app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Sevices Include");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "VR Game Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Virtual Tour Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "VR Kids & Educational Games");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Interactive Virtual Environment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServiceDetailsComponent_main_2_app_memorable_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-memorable");
} }
function ServiceDetailsComponent_main_2_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServiceDetailsComponent_main_2_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Platforms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam vero odio totam maxime ipsam rem necessitatibus vitae commodi dicta eaque dolores at ratione, reiciendis expedita et eum, deleniti tenetur itaque.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServiceDetailsComponent_main_2_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 77);
} }
function ServiceDetailsComponent_main_2_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServiceDetailsComponent_main_2_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We create prototypes, not presentations.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Based solid strategic framework and real, relevant research.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sure, everyone likes a well-executed interface. But in a fast-paced, high-tech world where beautiful (inter)faces are a dime a dozen, our full-service agency uses a combination of solid research skills, strategic framework, and unparalleled creativity to coax out your brand\u2019s inner swan.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "We see design as a strategic process, rather than just a beautiful surface. A process that requires a deep understanding of our clients, their industries and objectives. A process that always starts by listening first.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "To us, design is never done. It constantly requires us to challenge our work along the way. While maintaining very high standards to everything we do, we are focused to deliver quickly, test, optimize and then test again, working closely with internal product teams or founders. This process usually stretches over a longer period of time and is one reason why we see our clients as partners.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Our core work usually involves some form of interface design. Whether it is a mobile application, web platform or wearable device, we always try to create design from a human-centered perspective that enables clear interactions between the user and the product.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServiceDetailsComponent_main_2_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Our Latest UI Designs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit corporis rerum ad fuga reiciendis enim, itaque quo reprehenderit. Aperiam, harum ipsam sit optio, eligendi enim ratione error. Ipsa, repellat, odio?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServiceDetailsComponent_main_2_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "PHP Web Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "We comprehend the absolute need of our clients and have proven excellence in delivering CMS Development, E-commerce websites, Social networking site, Web calendars, Payment gateways, and, etc., based on PHP. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " PHP comes with a variety of libraries such as graphics, XML, encryption, syntax based on Perl and C, and, so forth. Thus, it is scalable to write codes, reliable to create multiple web pages, possess favorable features from SEO perspective, and, etc. Further, it offers a high level of security and prevent malicious activities.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mobile Backend / API Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Content Management System");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "E-Commerce");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "CRM Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServiceDetailsComponent_main_2_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Custom Web Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Completely customised web solutions for your organization's different web requirements.We hand-hold you at every single step while we create custom web solution for you \u2013 be it during discovery, definition, design, development or deployment.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Custom Website Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Intranet Applications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Enterprise Web Application Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "B2B Portal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ServiceDetailsComponent_main_2_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exprt_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", exprt_r20.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exprt_r20.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exprt_r20.description);
} }
const _c1 = function (a0, a1) { return [a0, a1]; };
function ServiceDetailsComponent_main_2_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const osm_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, "/work/" + osm_r21.id, osm_r21.project_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", osm_r21.small_banner_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](osm_r21.project_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](osm_r21.short_description);
} }
function ServiceDetailsComponent_main_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ServiceDetailsComponent_main_2_div_8_Template, 10, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ServiceDetailsComponent_main_2_div_9_Template, 12, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ServiceDetailsComponent_main_2_div_10_Template, 85, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ServiceDetailsComponent_main_2_app_memorable_11_Template, 1, 0, "app-memorable", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ServiceDetailsComponent_main_2_div_12_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ServiceDetailsComponent_main_2_div_13_Template, 22, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ServiceDetailsComponent_main_2_div_14_Template, 1, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ServiceDetailsComponent_main_2_div_15_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ServiceDetailsComponent_main_2_div_16_Template, 17, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ServiceDetailsComponent_main_2_div_17_Template, 113, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "main", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ServiceDetailsComponent_main_2_div_19_Template, 22, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ServiceDetailsComponent_main_2_div_20_Template, 20, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Our Expertise");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit corporis rerum ad fuga reiciendis enim, itaque quo reprehenderit. Aperiam, harum ipsam sit optio, eligendi enim ratione error. Ipsa, repellat, odio?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ServiceDetailsComponent_main_2_div_32_Template, 6, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit corporis rerum ad fuga reiciendis enim, itaque quo reprehenderit. Aperiam, harum ipsam sit optio, eligendi enim ratione error. Ipsa, repellat, odio?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ServiceDetailsComponent_main_2_div_41_Template, 16, 7, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-client-feed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Let's work together");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Start a project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const op_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](op_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", op_r5.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/services/11/Game-Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/services/11/Game-Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/services/6/Mobile-App");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/services/7/Virtual-Reality");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/services/7/Virtual-Reality");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/services/7/Virtual-Reality");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/services/8/3D-Modeling");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/services/9/UI-UX-Designing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/services/9/UI-UX-Designing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/services/9/UI-UX-Designing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/services/10/Web-Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.router.url == "/services/10/Web-Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.xprt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Our Latest Work ", op_r5.service_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.roleData);
} }
// import { Location } from '@angular/common';
class ServiceDetailsComponent {
    constructor(techService, route, router, SpinnerService) {
        this.techService = techService;
        this.route = route;
        this.router = router;
        this.SpinnerService = SpinnerService;
    }
    ngOnInit() {
        console.warn('Services Load..');
        this.id = this.route.snapshot.params.id;
        this.service_name = this.route.snapshot.params.service_name;
        // console.log(this.id);
        this.getData();
        this.getEx();
        this.getProjects();
        //     let num = [7, 8, 9];
        // num.forEach(function (value) {
        //   console.log(value);
        // }); 
    }
    getData() {
        this.SpinnerService.show();
        this.techService.getTechnologyDetail(this.id).subscribe(res => {
            // console.log(res);
            //  this.data = res;
            this.techy = res.data;
            // console.log(this.techy);
            // console.log("oyeeee" + this.techy);
            this.SpinnerService.hide();
        });
    }
    getEx() {
        this.SpinnerService.show();
        this.techService.getExpert(this.id).subscribe(res => {
            // console.log("This is Expertise => " + res.data);
            // this.str=JSON.stringify(res);
            // console.log("with Parse " + this.str);
            this.xprt = res.data;
            //  console.log(this.xprt);
            //  console.log("Thi sis" +this.xprt);
            this.SpinnerService.hide();
        });
    }
    // cryptos:any;
    getProjects() {
        this.SpinnerService.show();
        this.techService.getProjectsMini(this.id).subscribe(data => {
            this.roleData = data.project_data[0];
            this.SpinnerService.hide();
        });
    }
    human() {
        this.id++;
        this.service_name++;
        // this.router.navigateByUrl(this.id);
        console.log(this.id);
        console.log(this.service_name);
    }
}
ServiceDetailsComponent.ɵfac = function ServiceDetailsComponent_Factory(t) { return new (t || ServiceDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_technology_service__WEBPACK_IMPORTED_MODULE_1__["TechnologyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"])); };
ServiceDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiceDetailsComponent, selectors: [["app-service-details"]], decls: 3, vars: 2, consts: [["bdColor", "white", "color", "black", "template", "<img src='assets/images//9b-loading.gif' />"], ["class", "top-banner", 4, "ngFor", "ngForOf"], ["class", "page scroll-content", "data-logo-url", "assets/images/logo-black.svg", 4, "ngFor", "ngForOf"], [1, "top-banner"], [1, "cases"], [1, "previous-case", 3, "routerLink"], [1, "button-switch"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "x", "0px", "y", "0px", "viewBox", "0 0 31.494 31.494", 0, "xml", "space", "preserve", "width", "28px", "height", "28px", 2, "enable-background", "new 0 0 31.494 31.494"], ["d", "M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554 c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587 c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z", "fill", "#FFFFFF"], [1, "next-case", 3, "click"], [1, "banner-content"], [1, "container"], [1, "row"], ["routerLink", "/contact", 1, "banner-button"], [1, "top-banner", "bg"], ["data-logo-url", "assets/images/logo-black.svg", 1, "page", "scroll-content"], [1, "page-desc"], ["class", "mobile-game-dev scroll-content", "data-logo-url", "assets/images/logo-white.svg", 4, "ngIf"], ["class", "vrgames-dev scroll-content", "data-logo-url", "assets/images/logo-white.svg", 4, "ngIf"], ["style", "height: 600px;", 4, "ngIf"], [4, "ngIf"], ["class", "ellipse", 4, "ngIf"], ["class", "platfrom", 4, "ngIf"], ["class", "art-video", 4, "ngIf"], ["class", "img", 4, "ngIf"], ["class", "how-we-do scroll-content", "data-logo-url", "assets/images/logo-black.svg", 4, "ngIf"], ["class", "latest-games work-list ui scroll-content", "data-logo-url", "assets/images/logo-black.svg", 4, "ngIf"], ["class", "php-web-development scroll-content", "data-logo-url", "assets/images/logo-white.svg", 4, "ngIf"], ["class", "custom-web-development scroll-content", "data-logo-url", "assets/images/logo-black.svg", 4, "ngIf"], ["data-logo-url", "assets/images/logo-white.svg", 1, "our-expertise", "scroll-content"], [1, "section-title"], [1, "all-expertise"], [1, "grid-container"], ["class", "col-3 wow fadeInUpBig", "data-wow-duration", "1s", "data-wow-delay", "0.5s", 4, "ngFor", "ngForOf"], [1, "latest-games", "work-list"], ["class", "col-4", 4, "ngFor", "ngForOf"], [1, "client-testimonials", "scroll-content"], ["data-logo-url", "assets/images/logo-white.svg", 1, "start-project", "scroll-content"], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "playfair", "fadeInUp", "wow", "animated"], ["data-letters", "Start a project", "data-wow-duration", "1.4s", "data-wow-delay", "0.5s", 1, "gothic", "effect", "fadeInUp", "animated"], [1, "top"], [1, "top-left"], [1, "bottom"], [1, "bottom-right"], ["data-logo-url", "assets/images/logo-white.svg", 1, "mobile-game-dev", "scroll-content"], ["data-logo-url", "assets/images/logo-white.svg", 1, "vrgames-dev", "scroll-content"], [1, "table"], [1, "tcell"], [1, "vr-content"], [2, "color", "white"], ["href", "#"], [2, "height", "600px"], [2, "width", "100%", "justify-content", "center", "height", "61px", "background-color", "#4b4c4d", "display", "flex", "align-items", "center", "position", "relative"], [1, "tabs", 2, "position", "relative"], [1, "tab"], ["type", "radio", "name", "tabs", "checked", "", "id", "tab1", 1, "radioClass"], ["for", "tab1"], [1, "content"], [2, "width", "50%", "position", "relative", "left", "-63px"], [1, "tab-title"], ["href", "../contact-us.html", 1, "tab-btn"], [1, "services-include", 2, "margin-left", "60px"], [1, "sk"], ["type", "radio", "name", "tabs", "id", "tab2", 1, "radioClass"], ["for", "tab2"], ["type", "radio", "name", "tabs", "id", "tab3", 1, "radioClass"], ["for", "tab3"], [1, "ellipse"], [1, "top-bg"], [1, "bottom-bg"], [1, "platfrom"], [1, "vr-devices"], [1, "align-center"], ["src", "assets/images/vr/img/htc-vive.svg", "alt", ""], ["src", "assets/images/vr/img/oculus.svg", "alt", ""], ["src", "assets/images/vr/img/samsung-gearvr.svg", "alt", ""], ["src", "assets/images/vr/img/cardboard.svg", "alt", ""], [1, "art-video"], [1, "img"], ["src", "assets/images/uiux/img/ux.png", "alt", "ux"], ["data-logo-url", "assets/images/logo-black.svg", 1, "how-we-do", "scroll-content"], [1, "title"], [1, "how-desc"], [1, "design-process"], ["data-logo-url", "assets/images/logo-black.svg", 1, "latest-games", "work-list", "ui", "scroll-content"], [1, "col-4"], [1, "card"], ["href", "assets/images/uiux/img/soma-web.png", 1, "image-popup-no-margins"], [1, "card-img"], ["src", "assets/images/uiux/img/soma-web.png", "alt", "", 1, "mf"], ["href", "assets/images/uiux/img/buzz.png", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/buzz.png", "alt", ""], ["href", "assets/images/uiux/img/shoton.jpg", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/shoton.jpg", "alt", ""], ["href", "assets/images/uiux/img/soma-m.png", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/soma-m.png", "alt", ""], ["href", "assets/images/uiux/img/upsurge-web.jpg", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/upsurge-web.jpg", "alt", ""], ["href", "assets/images/uiux/img/videosong.png", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/videosong.png", "alt", ""], ["href", "assets/images/uiux/img/movie-recommendation.jpg", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/movie-recommendation.jpg", "alt", ""], ["href", "assets/images/uiux/img/capecoin.png", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/capecoin.png", "alt", ""], ["href", "assets/images/uiux/img/sjs.png", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/sjs.png", "alt", ""], ["href", "assets/images/uiux/img/battel.png", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/battel.png", "alt", ""], ["href", "assets/images/uiux/img/upsurge-mob.png", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/upsurge-mob.png", "alt", ""], ["href", "assets/images/uiux/img/sliding-santa.jpg", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/sliding-santa.jpg", "alt", ""], ["href", "assets/images/uiux/img/mhad.png", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/mhad.png", "alt", ""], ["href", "assets/images/uiux/img/boxes.png", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/boxes.png", "alt", ""], ["href", "assets/images/uiux/img/qswim.png", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/qswim.png", "alt", ""], ["href", "assets/images/uiux/img/poojara.jpg", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/poojara.jpg", "alt", ""], ["href", "assets/images/uiux/img/voice-changer.png", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/voice-changer.png", "alt", ""], ["href", "assets/images/uiux/img/swype.png", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/swype.png", "alt", ""], ["href", "assets/images/uiux/img/stephanie.png", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/stephanie.png", "alt", ""], ["href", "assets/images/uiux/img/music.jpg", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/music.jpg", "alt", ""], ["href", "assets/images/uiux/img/be-first.jpg", 1, "image-popup-no-margins"], ["src", "assets/images/uiux/img/be-first.jpg", "alt", ""], ["data-logo-url", "assets/images/logo-white.svg", 1, "php-web-development", "scroll-content"], [1, "col-6"], [1, "col-6", "pull-right"], [1, "content-container"], [1, "main-content"], [1, "what-included"], ["data-logo-url", "assets/images/logo-black.svg", 1, "custom-web-development", "scroll-content"], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "col-3", "wow", "fadeInUpBig"], ["alt", "", 3, "src"], ["onclick", "window.scrollTo(0, 0);", 3, "routerLink"], [1, "card-description"], [1, "work-title"], [1, "project-link"], [1, "android"], [1, "fa", "fa-android"], [1, "apple"], [1, "fa", "fa-apple"]], template: function ServiceDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ServiceDetailsComponent_div_1_Template, 24, 12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ServiceDetailsComponent_main_2_Template, 55, 17, "main", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.techy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.techy);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _general_client_feed_client_feed_component__WEBPACK_IMPORTED_MODULE_5__["ClientFeedComponent"], _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_6__["ɵb"], _memorable_memorable_component__WEBPACK_IMPORTED_MODULE_7__["MemorableComponent"]], styles: [".ks[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: auto;\r\n    object-fit: contain;\r\n}\r\n\r\n@media (min-width: 0) and (max-width: 575.98px) {\r\n    .sk[_ngcontent-%COMP%]{\r\n        width: unset;\r\n    height:  unset;\r\n    object-fit:  unset;\r\n    }\r\n}\r\n\r\n.top-banner[_ngcontent-%COMP%]{\r\n    position: relative !important;\r\n    background-size: cover !important;\r\n    background-attachment: fixed !important;\r\n    height: 100vh !important;\r\n    z-index: 0 !important;\r\n}\r\n\r\n.tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    overflow: hidden;\r\n }\r\n\r\n.tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   .radioClass[_ngcontent-%COMP%]{\r\n     position: absolute;\r\n     visibility: hidden;\r\n }\r\n\r\n.tabs[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n     \r\n     \r\n     padding: 10px;\r\n     cursor: pointer;\r\n     position: relative;\r\n     color: WHITE;\r\n     \r\n     background: transparent;\r\n }\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n    height: 61px;\r\n    \r\n    margin-bottom: 0 !important;\r\n }\r\n\r\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], dl[_ngcontent-%COMP%]{\r\n     margin: 0 !important;\r\n }\r\n\r\n.tabs[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n     width:100%;\r\n     display:none;\r\n     padding:5px;\r\n     position: absolute;\r\n     left: 0;\r\n     \r\n     color: black;\r\n     background: white;\r\n     border-radius:0px 5px 5px 5px;\r\n     \r\n }\r\n\r\n.tabs[_ngcontent-%COMP%] > .tab[_ngcontent-%COMP%]   .radioClass[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\r\n     background: transparent;\r\n     color: white;\r\n     border-bottom: 5px solid white;\r\n }\r\n\r\n.tabs[_ngcontent-%COMP%] > .tab[_ngcontent-%COMP%]   .radioClass[_ngcontent-%COMP%]:checked    ~ .content[_ngcontent-%COMP%] {\r\n    display:flex; \r\n }\r\n\r\nhtml[_ngcontent-%COMP%]{\r\n   height:100%;\r\n }\r\n\r\nbody[_ngcontent-%COMP%]{\r\n  background-image:linear-gradient(to right,#0C796A, #0B9A29);\r\n  background-size:cover;\r\n   background-repeat:no-repeat;\r\n }\r\n\r\n.header[_ngcontent-%COMP%]{\r\n   color: White;\r\n   \r\n }\r\n\r\n.tabs[_ngcontent-%COMP%]{\r\n   display:block;\r\n   margin-left:78px;\r\n }\r\n\r\n.content[_ngcontent-%COMP%]{\r\n    height: 600px;\r\n    margin: 57px 39px;\r\n }\r\n\r\nul[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    \r\n    display: flex !important;\r\n }\r\n\r\n.service-include[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    margin-left: 64px !important;\r\n    \r\n }\r\n\r\n.sk[_ngcontent-%COMP%]{\r\n     display: block !important;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQjtBQUNKOztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGlDQUFpQztJQUNqQyx1Q0FBdUM7SUFDdkMsd0JBQXdCO0lBQ3hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0NBQ25COztBQUNBO0tBQ0ksa0JBQWtCO0tBQ2xCLGtCQUFrQjtDQUN0Qjs7QUFDQTtJQUNHLGFBQWE7SUFDYixtQkFBbUI7S0FDbEIsb0JBQW9CO0tBQ3BCLHNCQUFzQjtLQUN0QixhQUFhO0tBQ2IsZUFBZTtLQUNmLGtCQUFrQjtLQUNsQixZQUFZO0tBQ1osMkJBQTJCO0tBQzNCLHVCQUF1QjtDQUMzQjs7QUFDQTtJQUNHLFlBQVk7SUFDWjs7bUJBRWU7SUFDZiwyQkFBMkI7Q0FDOUI7O0FBRUE7S0FDSSxvQkFBb0I7Q0FDeEI7O0FBR0E7S0FDSSxVQUFVO0tBQ1YsWUFBWTtLQUNaLFdBQVc7S0FDWCxrQkFBa0I7S0FDbEIsT0FBTztLQUNQO2tCQUNhO0tBQ2IsWUFBWTtLQUNaLGlCQUFpQjtLQUNqQiw2QkFBNkI7S0FDN0Isc0NBQXNDO0NBQzFDOztBQUNBO0tBQ0ksdUJBQXVCO0tBQ3ZCLFlBQVk7S0FDWiw4QkFBOEI7Q0FDbEM7O0FBQ0E7SUFDRyxZQUFZO0NBQ2Y7O0FBQ0E7R0FDRSxXQUFXO0NBQ2I7O0FBQ0E7RUFDQywyREFBMkQ7RUFDM0QscUJBQXFCO0dBQ3BCLDJCQUEyQjtDQUM3Qjs7QUFDQTtHQUNFLFlBQVk7R0FDWjtxQkFDa0I7Q0FDcEI7O0FBQ0E7R0FDRSxhQUFhO0dBQ2IsZ0JBQWdCO0NBQ2xCOztBQUNBO0lBQ0csYUFBYTtJQUNiLGlCQUFpQjtDQUNwQjs7QUFDQTtJQUNHLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsd0JBQXdCO0NBQzNCOztBQUNBO0lBQ0csVUFBVTtJQUNWLDRCQUE0Qjs7Q0FFL0I7O0FBQ0E7S0FDSSx5QkFBeUI7Q0FDN0IiLCJmaWxlIjoic2VydmljZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua3N7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAwKSBhbmQgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICAgIC5za3tcclxuICAgICAgICB3aWR0aDogdW5zZXQ7XHJcbiAgICBoZWlnaHQ6ICB1bnNldDtcclxuICAgIG9iamVjdC1maXQ6ICB1bnNldDtcclxuICAgIH1cclxufVxyXG4udG9wLWJhbm5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFicyAudGFie1xyXG4gICAgLyogbWFyZ2luLXRvcDoyOHB4OyAqL1xyXG4gICAgLyogZmxvYXQ6IGxlZnQ7ICovXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gfVxyXG4gLnRhYnMgLnRhYiAucmFkaW9DbGFzc3tcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gfVxyXG4gLnRhYnMgLnRhYiBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICAgICAvKiBtYXJnaW4tcmlnaHQ6MXB4OyAqL1xyXG4gICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICBjb2xvcjogV0hJVEU7XHJcbiAgICAgLyogYmFja2dyb3VuZDogIzY1NDNGMTsgICAqL1xyXG4gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gfVxyXG4gbGFiZWx7XHJcbiAgICBoZWlnaHQ6IDYxcHg7XHJcbiAgICAvKiBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTsgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuIH1cclxuXHJcbiBvbCwgdWwsIGRse1xyXG4gICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuXHJcbiAudGFicyAuY29udGVudCB7XHJcbiAgICAgd2lkdGg6MTAwJTtcclxuICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgcGFkZGluZzo1cHg7XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIGxlZnQ6IDA7XHJcbiAgICAgLyogdG9wOiAxNjRweDtcclxuICAgICBsZWZ0OjEyNnB4OyAqL1xyXG4gICAgIGNvbG9yOiBibGFjaztcclxuICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICBib3JkZXItcmFkaXVzOjBweCA1cHggNXB4IDVweDtcclxuICAgICAvKiBib3gtc2hhZG93OiAwcHggMnB4IDJweCAwcHggZ3JleTsgKi9cclxuIH1cclxuIC50YWJzPi50YWIgLnJhZGlvQ2xhc3M6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHdoaXRlO1xyXG4gfVxyXG4gLnRhYnM+LnRhYiAucmFkaW9DbGFzczpjaGVja2VkIH4gLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTpmbGV4OyBcclxuIH1cclxuIGh0bWx7XHJcbiAgIGhlaWdodDoxMDAlO1xyXG4gfVxyXG4gYm9keXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMEM3OTZBLCAjMEI5QTI5KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuIH1cclxuIC5oZWFkZXJ7XHJcbiAgIGNvbG9yOiBXaGl0ZTtcclxuICAgLyogbWFyZ2luLWxlZnQ6MjUlO1xyXG4gICBtYXJnaW4tdG9wOjUwcHg7ICovXHJcbiB9XHJcbiAudGFic3tcclxuICAgZGlzcGxheTpibG9jaztcclxuICAgbWFyZ2luLWxlZnQ6NzhweDtcclxuIH1cclxuIC5jb250ZW50e1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIG1hcmdpbjogNTdweCAzOXB4O1xyXG4gfVxyXG4gdWx7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuIH1cclxuIC5zZXJ2aWNlLWluY2x1ZGV7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY0cHggIWltcG9ydGFudDtcclxuICAgIFxyXG4gfVxyXG4gLnNre1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "sG/L":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PagenotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagenotfoundComponent.ɵfac = function PagenotfoundComponent_Factory(t) { return new (t || PagenotfoundComponent)(); };
PagenotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagenotfoundComponent, selectors: [["app-pagenotfound"]], decls: 8, vars: 0, consts: [["id", "container404"], ["src", "https://2.bp.blogspot.com/-WaHaYF7vMRo/VX_Cro6zTDI/AAAAAAAACdY/JMpdKqMaH6w/s1600/notfound.jpeg", "id", "logo404"], ["href", "#", "target", "_blank"]], template: function PagenotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0AAA\u0AB9\u0AC7\u0AB2\u0AC0 \u0AAB\u0AC1\u0AB0\u0AB8\u0AA4 \u0AAE\u0AC7\u0A82 \u0AA8\u0AC0\u0A95\u0AB2 - 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Benerin dong min, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "please...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "sOmp":
/*!*************************************************!*\
  !*** ./src/app/shared/about/about.component.ts ***!
  \*************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var fullpage_js_vendors_scrolloverflow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fullpage.js/vendors/scrolloverflow */ "oKAg");
/* harmony import */ var fullpage_js_vendors_scrolloverflow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fullpage_js_vendors_scrolloverflow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var _fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullpage/angular-fullpage */ "RhbM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/home.component */ "ZEqh");
// import * as $ from 'jquery';






// import { NgwWowConfig } from 'ngx-wow';
// import 'fullpage.js/dist/jquery.fullpage.extensions.min'
class AboutComponent {
    constructor(wowService) {
        this.wowService = wowService;
        this.wowService.init();
        // for more details on config options please visit fullPage.js docs
        this.config = {
            // fullpage options
            licenseKey: 'YOUR LICENSE KEY HERE',
            // anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
            menu: '#menu',
            navigation: true,
            scrollOverflow: true,
            // fullpage callbacks
            afterResize: () => {
                // console.log("After resize");
            },
            afterLoad: (origin, destination, _direction) => {
                // console.log(origin.index);
            }
        };
    }
    ngOnInit() {
    }
    getRef(fullPageRef) {
        this.fullpage_api = fullPageRef;
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 168, vars: 1, consts: [[1, "main", "about-us-page"], ["fullpage", "", "id", "fullpage", 3, "options", "ref"], [1, "section", "about-intro"], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "tabel-cell", "wow", "fadeInUp", "animated"], [1, "container"], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "section", "we-do", "wow", "fadeInUp", "animated"], [1, "tabel-cell"], [1, "our-services"], [1, "col-3"], [1, "box", "left-b"], ["src", "assets/images/service/vr.png", "alt", ""], [1, "box"], ["src", "assets/images/service/game.png", "alt", ""], ["src", "assets/images/service/web.png", "alt", ""], [1, "box", "forth"], ["src", "assets/images/service/ui.png", "alt", ""], [1, "col-3", "ML25"], [1, "box", "left-b", "btop"], ["src", "assets/images/service/app.png", "alt", ""], [1, "col-3", "MR25"], [1, "box", "btop"], ["src", "assets/images/service/art.png", "alt", ""], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "section", "who-we-work-for"], [1, "tabel-cell", "wow", "fadeInUp", "animated"], [1, "clients"], ["src", "assets/images/clients/dew.png", "alt", ""], ["src", "assets/images/clients/cambridge.png", "alt", ""], ["src", "assets/images/clients/qld.png", "alt", ""], ["src", "assets/images/clients/yudiz.png", "alt", ""], ["src", "assets/images/clients/lifestream.png", "alt", ""], ["src", "assets/images/clients/appigizer.png", "alt", ""], ["src", "assets/images/clients/encompass.png", "alt", ""], ["src", "assets/images/clients/plenum.png", "alt", ""], [1, "section", "meet-team", "slideInUp", "animated"], [1, "team"], [1, "col-12"], [1, "row"], [1, "col-2"], [1, "team-box"], [1, "team-img"], ["src", "assets/images/team/ceo.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/team/jay.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/team/jeet.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/team/riddhi.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/team/malde.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/team/kunal.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/team/ab.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/team/meet.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/team/satish.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/team/dolly.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/team/irfan.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/team/sumit.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/team/neha.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/team/santosh.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/team/hitanshu.png", "alt", "", 1, "img-responsive"], ["src", "assets/images/team/prince.jpg", "alt", "", 1, "img-responsive"], ["src", "assets/images/team/vivek.png", "alt", "", 1, "img-responsive"], [1, "aadu"], ["routerLink", "/contact", "onclick", "window.scrollTo(0, 0);", 1, "get-in-touch"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ref", function AboutComponent_Template_div_ref_1_listener($event) { return ctx.getRef($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " We are wizards! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " We know some Voodoo and Black Magic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Sometimes we work too. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "VR Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Wear a Virtual Reality Headset and see the Virtual World in full stereoscopic 3D that gives you the additional depth perception and that immersive feeling you always craved for. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Game Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Get the best game play experience with our 3D games. Our expertise in 3D assets creation will leave you mesmerized with the quality of 3D assets you get. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Web Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Interesting layouts and web designs are the key factors that help you keep your clients tied with the knot of your products and services for a longer period. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "UI/UX Designing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Good design can sometimes be the beauty of artful creativity and other times the beauty of simplicity. We\u2019ll get it just right, and in a way that supports your overall brand strategies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Mobile App Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " We are providing solutions to businesses who are seeking a faster web or mobile application.Our expert team having updated knowledge of latest mobile app technologies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "3D Art");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " We can design a wide array of 3D assets from simple 3D art for your websites or 3D characters or props for your game or animation video. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Who we work for");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Meet the team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "app-home");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.config);
    } }, directives: [_fullpage_angular_fullpage__WEBPACK_IMPORTED_MODULE_3__["ɵa"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]], styles: ["@charset \"UTF-8\";\n\n[_ngcontent-%COMP%]:root{--animate-duration:1s;--animate-delay:1s;--animate-repeat:1}\n.animate__animated[_ngcontent-%COMP%]{animation-duration:1s;animation-duration:var(--animate-duration);animation-fill-mode:both}\n.animate__animated.animate__infinite[_ngcontent-%COMP%]{animation-iteration-count:infinite}\n.animate__animated.animate__repeat-1[_ngcontent-%COMP%]{animation-iteration-count:1;animation-iteration-count:var(--animate-repeat)}\n.animate__animated.animate__repeat-2[_ngcontent-%COMP%]{animation-iteration-count:2;animation-iteration-count:calc(var(--animate-repeat)*2)}\n.animate__animated.animate__repeat-3[_ngcontent-%COMP%]{animation-iteration-count:3;animation-iteration-count:calc(var(--animate-repeat)*3)}\n.animate__animated.animate__delay-1s[_ngcontent-%COMP%]{animation-delay:1s;animation-delay:var(--animate-delay)}\n.animate__animated.animate__delay-2s[_ngcontent-%COMP%]{animation-delay:2s;animation-delay:calc(var(--animate-delay)*2)}\n.animate__animated.animate__delay-3s[_ngcontent-%COMP%]{animation-delay:3s;animation-delay:calc(var(--animate-delay)*3)}\n.animate__animated.animate__delay-4s[_ngcontent-%COMP%]{animation-delay:4s;animation-delay:calc(var(--animate-delay)*4)}\n.animate__animated.animate__delay-5s[_ngcontent-%COMP%]{animation-delay:5s;animation-delay:calc(var(--animate-delay)*5)}\n.animate__animated.animate__faster[_ngcontent-%COMP%]{animation-duration:.5s;animation-duration:calc(var(--animate-duration)/2)}\n.animate__animated.animate__fast[_ngcontent-%COMP%]{animation-duration:.8s;animation-duration:calc(var(--animate-duration)*0.8)}\n.animate__animated.animate__slow[_ngcontent-%COMP%]{animation-duration:2s;animation-duration:calc(var(--animate-duration)*2)}\n.animate__animated.animate__slower[_ngcontent-%COMP%]{animation-duration:3s;animation-duration:calc(var(--animate-duration)*3)}\n@media (prefers-reduced-motion:reduce), print{.animate__animated[_ngcontent-%COMP%]{animation-duration:1ms!important;transition-duration:1ms!important;animation-iteration-count:1!important}.animate__animated[class*=Out][_ngcontent-%COMP%]{opacity:0}}\n@keyframes bounce{0%,20%,53%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1);transform:translateZ(0)}40%,43%{animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-30px,0) scaleY(1.1)}70%{animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-15px,0) scaleY(1.05)}80%{transition-timing-function:cubic-bezier(.215,.61,.355,1);transform:translateZ(0) scaleY(.95)}90%{transform:translate3d(0,-4px,0) scaleY(1.02)}}\n.animate__bounce[_ngcontent-%COMP%]{animation-name:bounce;transform-origin:center bottom}\n@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}\n.animate__flash[_ngcontent-%COMP%]{animation-name:flash}\n@keyframes pulse{0%{transform:scaleX(1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scaleX(1)}}\n.animate__pulse[_ngcontent-%COMP%]{animation-name:pulse;animation-timing-function:ease-in-out}\n@keyframes rubberBand{0%{transform:scaleX(1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}to{transform:scaleX(1)}}\n.animate__rubberBand[_ngcontent-%COMP%]{animation-name:rubberBand}\n@keyframes shakeX{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}\n.animate__shakeX[_ngcontent-%COMP%]{animation-name:shakeX}\n@keyframes shakeY{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(0,-10px,0)}20%,40%,60%,80%{transform:translate3d(0,10px,0)}}\n.animate__shakeY[_ngcontent-%COMP%]{animation-name:shakeY}\n@keyframes headShake{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}\n.animate__headShake[_ngcontent-%COMP%]{animation-timing-function:ease-in-out;animation-name:headShake}\n@keyframes swing{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}to{transform:rotate(0deg)}}\n.animate__swing[_ngcontent-%COMP%]{transform-origin:top center;animation-name:swing}\n@keyframes tada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{transform:scaleX(1)}}\n.animate__tada[_ngcontent-%COMP%]{animation-name:tada}\n@keyframes wobble{0%{transform:translateZ(0)}15%{transform:translate3d(-25%,0,0) rotate(-5deg)}30%{transform:translate3d(20%,0,0) rotate(3deg)}45%{transform:translate3d(-15%,0,0) rotate(-3deg)}60%{transform:translate3d(10%,0,0) rotate(2deg)}75%{transform:translate3d(-5%,0,0) rotate(-1deg)}to{transform:translateZ(0)}}\n.animate__wobble[_ngcontent-%COMP%]{animation-name:wobble}\n@keyframes jello{0%,11.1%,to{transform:translateZ(0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{transform:skewX(.390625deg) skewY(.390625deg)}88.8%{transform:skewX(-.1953125deg) skewY(-.1953125deg)}}\n.animate__jello[_ngcontent-%COMP%]{animation-name:jello;transform-origin:center}\n@keyframes heartBeat{0%{transform:scale(1)}14%{transform:scale(1.3)}28%{transform:scale(1)}42%{transform:scale(1.3)}70%{transform:scale(1)}}\n.animate__heartBeat[_ngcontent-%COMP%]{animation-name:heartBeat;animation-duration:1.3s;animation-duration:calc(var(--animate-duration)*1.3);animation-timing-function:ease-in-out}\n@keyframes backInDown{0%{transform:translateY(-1200px) scale(.7);opacity:.7}80%{transform:translateY(0) scale(.7);opacity:.7}to{transform:scale(1);opacity:1}}\n.animate__backInDown[_ngcontent-%COMP%]{animation-name:backInDown}\n@keyframes backInLeft{0%{transform:translateX(-2000px) scale(.7);opacity:.7}80%{transform:translateX(0) scale(.7);opacity:.7}to{transform:scale(1);opacity:1}}\n.animate__backInLeft[_ngcontent-%COMP%]{animation-name:backInLeft}\n@keyframes backInRight{0%{transform:translateX(2000px) scale(.7);opacity:.7}80%{transform:translateX(0) scale(.7);opacity:.7}to{transform:scale(1);opacity:1}}\n.animate__backInRight[_ngcontent-%COMP%]{animation-name:backInRight}\n@keyframes backInUp{0%{transform:translateY(1200px) scale(.7);opacity:.7}80%{transform:translateY(0) scale(.7);opacity:.7}to{transform:scale(1);opacity:1}}\n.animate__backInUp[_ngcontent-%COMP%]{animation-name:backInUp}\n@keyframes backOutDown{0%{transform:scale(1);opacity:1}20%{transform:translateY(0) scale(.7);opacity:.7}to{transform:translateY(700px) scale(.7);opacity:.7}}\n.animate__backOutDown[_ngcontent-%COMP%]{animation-name:backOutDown}\n@keyframes backOutLeft{0%{transform:scale(1);opacity:1}20%{transform:translateX(0) scale(.7);opacity:.7}to{transform:translateX(-2000px) scale(.7);opacity:.7}}\n.animate__backOutLeft[_ngcontent-%COMP%]{animation-name:backOutLeft}\n@keyframes backOutRight{0%{transform:scale(1);opacity:1}20%{transform:translateX(0) scale(.7);opacity:.7}to{transform:translateX(2000px) scale(.7);opacity:.7}}\n.animate__backOutRight[_ngcontent-%COMP%]{animation-name:backOutRight}\n@keyframes backOutUp{0%{transform:scale(1);opacity:1}20%{transform:translateY(0) scale(.7);opacity:.7}to{transform:translateY(-700px) scale(.7);opacity:.7}}\n.animate__backOutUp[_ngcontent-%COMP%]{animation-name:backOutUp}\n@keyframes bounceIn{0%,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scaleX(1)}}\n.animate__bounceIn[_ngcontent-%COMP%]{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*0.75);animation-name:bounceIn}\n@keyframes bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0) scaleY(3)}60%{opacity:1;transform:translate3d(0,25px,0) scaleY(.9)}75%{transform:translate3d(0,-10px,0) scaleY(.95)}90%{transform:translate3d(0,5px,0) scaleY(.985)}to{transform:translateZ(0)}}\n.animate__bounceInDown[_ngcontent-%COMP%]{animation-name:bounceInDown}\n@keyframes bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0) scaleX(3)}60%{opacity:1;transform:translate3d(25px,0,0) scaleX(1)}75%{transform:translate3d(-10px,0,0) scaleX(.98)}90%{transform:translate3d(5px,0,0) scaleX(.995)}to{transform:translateZ(0)}}\n.animate__bounceInLeft[_ngcontent-%COMP%]{animation-name:bounceInLeft}\n@keyframes bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0) scaleX(3)}60%{opacity:1;transform:translate3d(-25px,0,0) scaleX(1)}75%{transform:translate3d(10px,0,0) scaleX(.98)}90%{transform:translate3d(-5px,0,0) scaleX(.995)}to{transform:translateZ(0)}}\n.animate__bounceInRight[_ngcontent-%COMP%]{animation-name:bounceInRight}\n@keyframes bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0) scaleY(5)}60%{opacity:1;transform:translate3d(0,-20px,0) scaleY(.9)}75%{transform:translate3d(0,10px,0) scaleY(.95)}90%{transform:translate3d(0,-5px,0) scaleY(.985)}to{transform:translateZ(0)}}\n.animate__bounceInUp[_ngcontent-%COMP%]{animation-name:bounceInUp}\n@keyframes bounceOut{20%{transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(.3,.3,.3)}}\n.animate__bounceOut[_ngcontent-%COMP%]{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*0.75);animation-name:bounceOut}\n@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0) scaleY(.985)}40%,45%{opacity:1;transform:translate3d(0,-20px,0) scaleY(.9)}to{opacity:0;transform:translate3d(0,2000px,0) scaleY(3)}}\n.animate__bounceOutDown[_ngcontent-%COMP%]{animation-name:bounceOutDown}\n@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0) scaleX(.9)}to{opacity:0;transform:translate3d(-2000px,0,0) scaleX(2)}}\n.animate__bounceOutLeft[_ngcontent-%COMP%]{animation-name:bounceOutLeft}\n@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0) scaleX(.9)}to{opacity:0;transform:translate3d(2000px,0,0) scaleX(2)}}\n.animate__bounceOutRight[_ngcontent-%COMP%]{animation-name:bounceOutRight}\n@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0) scaleY(.985)}40%,45%{opacity:1;transform:translate3d(0,20px,0) scaleY(.9)}to{opacity:0;transform:translate3d(0,-2000px,0) scaleY(3)}}\n.animate__bounceOutUp[_ngcontent-%COMP%]{animation-name:bounceOutUp}\n@keyframes fadeIn{0%{opacity:0}to{opacity:1}}\n.animate__fadeIn[_ngcontent-%COMP%]{animation-name:fadeIn}\n@keyframes fadeInDown{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInDown[_ngcontent-%COMP%]{animation-name:fadeInDown}\n@keyframes fadeInDownBig{0%{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInDownBig[_ngcontent-%COMP%]{animation-name:fadeInDownBig}\n@keyframes fadeInLeft{0%{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInLeft[_ngcontent-%COMP%]{animation-name:fadeInLeft}\n@keyframes fadeInLeftBig{0%{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInLeftBig[_ngcontent-%COMP%]{animation-name:fadeInLeftBig}\n@keyframes fadeInRight{0%{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInRight[_ngcontent-%COMP%]{animation-name:fadeInRight}\n@keyframes fadeInRightBig{0%{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInRightBig[_ngcontent-%COMP%]{animation-name:fadeInRightBig}\n@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInUp[_ngcontent-%COMP%]{animation-name:fadeInUp}\n@keyframes fadeInUpBig{0%{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInUpBig[_ngcontent-%COMP%]{animation-name:fadeInUpBig}\n@keyframes fadeInTopLeft{0%{opacity:0;transform:translate3d(-100%,-100%,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInTopLeft[_ngcontent-%COMP%]{animation-name:fadeInTopLeft}\n@keyframes fadeInTopRight{0%{opacity:0;transform:translate3d(100%,-100%,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInTopRight[_ngcontent-%COMP%]{animation-name:fadeInTopRight}\n@keyframes fadeInBottomLeft{0%{opacity:0;transform:translate3d(-100%,100%,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInBottomLeft[_ngcontent-%COMP%]{animation-name:fadeInBottomLeft}\n@keyframes fadeInBottomRight{0%{opacity:0;transform:translate3d(100%,100%,0)}to{opacity:1;transform:translateZ(0)}}\n.animate__fadeInBottomRight[_ngcontent-%COMP%]{animation-name:fadeInBottomRight}\n@keyframes fadeOut{0%{opacity:1}to{opacity:0}}\n.animate__fadeOut[_ngcontent-%COMP%]{animation-name:fadeOut}\n@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}\n.animate__fadeOutDown[_ngcontent-%COMP%]{animation-name:fadeOutDown}\n@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}\n.animate__fadeOutDownBig[_ngcontent-%COMP%]{animation-name:fadeOutDownBig}\n@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}\n.animate__fadeOutLeft[_ngcontent-%COMP%]{animation-name:fadeOutLeft}\n@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}\n.animate__fadeOutLeftBig[_ngcontent-%COMP%]{animation-name:fadeOutLeftBig}\n@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}\n.animate__fadeOutRight[_ngcontent-%COMP%]{animation-name:fadeOutRight}\n@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}\n.animate__fadeOutRightBig[_ngcontent-%COMP%]{animation-name:fadeOutRightBig}\n@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}\n.animate__fadeOutUp[_ngcontent-%COMP%]{animation-name:fadeOutUp}\n@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;transform:translate3d(0,-2000px,0)}}\n.animate__fadeOutUpBig[_ngcontent-%COMP%]{animation-name:fadeOutUpBig}\n@keyframes fadeOutTopLeft{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(-100%,-100%,0)}}\n.animate__fadeOutTopLeft[_ngcontent-%COMP%]{animation-name:fadeOutTopLeft}\n@keyframes fadeOutTopRight{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(100%,-100%,0)}}\n.animate__fadeOutTopRight[_ngcontent-%COMP%]{animation-name:fadeOutTopRight}\n@keyframes fadeOutBottomRight{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(100%,100%,0)}}\n.animate__fadeOutBottomRight[_ngcontent-%COMP%]{animation-name:fadeOutBottomRight}\n@keyframes fadeOutBottomLeft{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(-100%,100%,0)}}\n.animate__fadeOutBottomLeft[_ngcontent-%COMP%]{animation-name:fadeOutBottomLeft}\n@keyframes flip{0%{transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);animation-timing-function:ease-out}40%{transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);animation-timing-function:ease-out}50%{transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(.95,.95,.95) translateZ(0) rotateY(0deg);animation-timing-function:ease-in}to{transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);animation-timing-function:ease-in}}\n.animate__animated.animate__flip[_ngcontent-%COMP%]{-webkit-backface-visibility:visible;backface-visibility:visible;animation-name:flip}\n@keyframes flipInX{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}\n.animate__flipInX[_ngcontent-%COMP%]{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInX}\n@keyframes flipInY{0%{transform:perspective(400px) rotateY(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateY(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateY(10deg);opacity:1}80%{transform:perspective(400px) rotateY(-5deg)}to{transform:perspective(400px)}}\n.animate__flipInY[_ngcontent-%COMP%]{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInY}\n@keyframes flipOutX{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateX(-20deg);opacity:1}to{transform:perspective(400px) rotateX(90deg);opacity:0}}\n.animate__flipOutX[_ngcontent-%COMP%]{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*0.75);animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}\n@keyframes flipOutY{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateY(-15deg);opacity:1}to{transform:perspective(400px) rotateY(90deg);opacity:0}}\n.animate__flipOutY[_ngcontent-%COMP%]{animation-duration:.75s;animation-duration:calc(var(--animate-duration)*0.75);-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipOutY}\n@keyframes lightSpeedInRight{0%{transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{transform:skewX(20deg);opacity:1}80%{transform:skewX(-5deg)}to{transform:translateZ(0)}}\n.animate__lightSpeedInRight[_ngcontent-%COMP%]{animation-name:lightSpeedInRight;animation-timing-function:ease-out}\n@keyframes lightSpeedInLeft{0%{transform:translate3d(-100%,0,0) skewX(30deg);opacity:0}60%{transform:skewX(-20deg);opacity:1}80%{transform:skewX(5deg)}to{transform:translateZ(0)}}\n.animate__lightSpeedInLeft[_ngcontent-%COMP%]{animation-name:lightSpeedInLeft;animation-timing-function:ease-out}\n@keyframes lightSpeedOutRight{0%{opacity:1}to{transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}\n.animate__lightSpeedOutRight[_ngcontent-%COMP%]{animation-name:lightSpeedOutRight;animation-timing-function:ease-in}\n@keyframes lightSpeedOutLeft{0%{opacity:1}to{transform:translate3d(-100%,0,0) skewX(-30deg);opacity:0}}\n.animate__lightSpeedOutLeft[_ngcontent-%COMP%]{animation-name:lightSpeedOutLeft;animation-timing-function:ease-in}\n@keyframes rotateIn{0%{transform:rotate(-200deg);opacity:0}to{transform:translateZ(0);opacity:1}}\n.animate__rotateIn[_ngcontent-%COMP%]{animation-name:rotateIn;transform-origin:center}\n@keyframes rotateInDownLeft{0%{transform:rotate(-45deg);opacity:0}to{transform:translateZ(0);opacity:1}}\n.animate__rotateInDownLeft[_ngcontent-%COMP%]{animation-name:rotateInDownLeft;transform-origin:left bottom}\n@keyframes rotateInDownRight{0%{transform:rotate(45deg);opacity:0}to{transform:translateZ(0);opacity:1}}\n.animate__rotateInDownRight[_ngcontent-%COMP%]{animation-name:rotateInDownRight;transform-origin:right bottom}\n@keyframes rotateInUpLeft{0%{transform:rotate(45deg);opacity:0}to{transform:translateZ(0);opacity:1}}\n.animate__rotateInUpLeft[_ngcontent-%COMP%]{animation-name:rotateInUpLeft;transform-origin:left bottom}\n@keyframes rotateInUpRight{0%{transform:rotate(-90deg);opacity:0}to{transform:translateZ(0);opacity:1}}\n.animate__rotateInUpRight[_ngcontent-%COMP%]{animation-name:rotateInUpRight;transform-origin:right bottom}\n@keyframes rotateOut{0%{opacity:1}to{transform:rotate(200deg);opacity:0}}\n.animate__rotateOut[_ngcontent-%COMP%]{animation-name:rotateOut;transform-origin:center}\n@keyframes rotateOutDownLeft{0%{opacity:1}to{transform:rotate(45deg);opacity:0}}\n.animate__rotateOutDownLeft[_ngcontent-%COMP%]{animation-name:rotateOutDownLeft;transform-origin:left bottom}\n@keyframes rotateOutDownRight{0%{opacity:1}to{transform:rotate(-45deg);opacity:0}}\n.animate__rotateOutDownRight[_ngcontent-%COMP%]{animation-name:rotateOutDownRight;transform-origin:right bottom}\n@keyframes rotateOutUpLeft{0%{opacity:1}to{transform:rotate(-45deg);opacity:0}}\n.animate__rotateOutUpLeft[_ngcontent-%COMP%]{animation-name:rotateOutUpLeft;transform-origin:left bottom}\n@keyframes rotateOutUpRight{0%{opacity:1}to{transform:rotate(90deg);opacity:0}}\n.animate__rotateOutUpRight[_ngcontent-%COMP%]{animation-name:rotateOutUpRight;transform-origin:right bottom}\n@keyframes hinge{0%{animation-timing-function:ease-in-out}20%,60%{transform:rotate(80deg);animation-timing-function:ease-in-out}40%,80%{transform:rotate(60deg);animation-timing-function:ease-in-out;opacity:1}to{transform:translate3d(0,700px,0);opacity:0}}\n.animate__hinge[_ngcontent-%COMP%]{animation-duration:2s;animation-duration:calc(var(--animate-duration)*2);animation-name:hinge;transform-origin:top left}\n@keyframes jackInTheBox{0%{opacity:0;transform:scale(.1) rotate(30deg);transform-origin:center bottom}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{opacity:1;transform:scale(1)}}\n.animate__jackInTheBox[_ngcontent-%COMP%]{animation-name:jackInTheBox}\n@keyframes rollIn{0%{opacity:0;transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;transform:translateZ(0)}}\n.animate__rollIn[_ngcontent-%COMP%]{animation-name:rollIn}\n@keyframes rollOut{0%{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate(120deg)}}\n.animate__rollOut[_ngcontent-%COMP%]{animation-name:rollOut}\n@keyframes zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}\n.animate__zoomIn[_ngcontent-%COMP%]{animation-name:zoomIn}\n@keyframes zoomInDown{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n.animate__zoomInDown[_ngcontent-%COMP%]{animation-name:zoomInDown}\n@keyframes zoomInLeft{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(10px,0,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n.animate__zoomInLeft[_ngcontent-%COMP%]{animation-name:zoomInLeft}\n@keyframes zoomInRight{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n.animate__zoomInRight[_ngcontent-%COMP%]{animation-name:zoomInRight}\n@keyframes zoomInUp{0%{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n.animate__zoomInUp[_ngcontent-%COMP%]{animation-name:zoomInUp}\n@keyframes zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}\n.animate__zoomOut[_ngcontent-%COMP%]{animation-name:zoomOut}\n@keyframes zoomOutDown{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n.animate__zoomOutDown[_ngcontent-%COMP%]{animation-name:zoomOutDown;transform-origin:center bottom}\n@keyframes zoomOutLeft{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(-2000px,0,0)}}\n.animate__zoomOutLeft[_ngcontent-%COMP%]{animation-name:zoomOutLeft;transform-origin:left center}\n@keyframes zoomOutRight{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(2000px,0,0)}}\n.animate__zoomOutRight[_ngcontent-%COMP%]{animation-name:zoomOutRight;transform-origin:right center}\n@keyframes zoomOutUp{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}\n.animate__zoomOutUp[_ngcontent-%COMP%]{animation-name:zoomOutUp;transform-origin:center bottom}\n@keyframes slideInDown{0%{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translateZ(0)}}\n.animate__slideInDown[_ngcontent-%COMP%]{animation-name:slideInDown}\n@keyframes slideInLeft{0%{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translateZ(0)}}\n.animate__slideInLeft[_ngcontent-%COMP%]{animation-name:slideInLeft}\n@keyframes slideInRight{0%{transform:translate3d(100%,0,0);visibility:visible}to{transform:translateZ(0)}}\n.animate__slideInRight[_ngcontent-%COMP%]{animation-name:slideInRight}\n@keyframes slideInUp{0%{transform:translate3d(0,100%,0);visibility:visible}to{transform:translateZ(0)}}\n.animate__slideInUp[_ngcontent-%COMP%]{animation-name:slideInUp}\n@keyframes slideOutDown{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}\n.animate__slideOutDown[_ngcontent-%COMP%]{animation-name:slideOutDown}\n@keyframes slideOutLeft{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(-100%,0,0)}}\n.animate__slideOutLeft[_ngcontent-%COMP%]{animation-name:slideOutLeft}\n@keyframes slideOutRight{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(100%,0,0)}}\n.animate__slideOutRight[_ngcontent-%COMP%]{animation-name:slideOutRight}\n@keyframes slideOutUp{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}\n.animate__slideOutUp[_ngcontent-%COMP%]{animation-name:slideOutUp}\n.get-in-touch[_ngcontent-%COMP%]:hover{\r\n    background-color: rgba(5,150,255,.9);\r\n    color: #fff;\r\n    transition: all 0.7s;\r\n}\n.page-active[_ngcontent-%COMP%]{\r\n    transform: rotate(-90deg);\r\n    transform-origin: left top;\r\n    transition: all .15s ease-out;\r\n    color: #ddd;\r\n    font-weight: 300;\r\n    opacity: .6;\r\n}\n.aadu[_ngcontent-%COMP%] {\r\n    left:-31px;\r\n  position: absolute;\r\n  \r\n  \r\n  transform: rotate(-90deg);\r\n  \r\n  transition: all 0.15s ease-out;\r\n  bottom: 43px;\r\n  font-size:24px ;\r\n  \r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9hbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3MiLCJhYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFDOzs7Ozs7RUFNZjtBQUFDLE1BQU0scUJBQXFCLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCO0FBQUMsbUJBQWlELHFCQUFxQixDQUFvRCwwQ0FBMEMsQ0FBa0Msd0JBQXdCO0FBQUMscUNBQWdGLGtDQUFrQztBQUFDLHFDQUF5RSwyQkFBMkIsQ0FBeUQsK0NBQStDO0FBQUMscUNBQXlFLDJCQUEyQixDQUFpRSx1REFBdUQ7QUFBQyxxQ0FBeUUsMkJBQTJCLENBQWlFLHVEQUF1RDtBQUFDLHFDQUFnRSxrQkFBa0IsQ0FBOEMsb0NBQW9DO0FBQUMscUNBQWdFLGtCQUFrQixDQUFzRCw0Q0FBNEM7QUFBQyxxQ0FBZ0Usa0JBQWtCLENBQXNELDRDQUE0QztBQUFDLHFDQUFnRSxrQkFBa0IsQ0FBc0QsNENBQTRDO0FBQUMscUNBQWdFLGtCQUFrQixDQUFzRCw0Q0FBNEM7QUFBQyxtQ0FBa0Usc0JBQXNCLENBQTRELGtEQUFrRDtBQUFDLGlDQUFnRSxzQkFBc0IsQ0FBOEQsb0RBQW9EO0FBQUMsaUNBQStELHFCQUFxQixDQUE0RCxrREFBa0Q7QUFBQyxtQ0FBaUUscUJBQXFCLENBQTRELGtEQUFrRDtBQUFDLDhDQUE2QyxtQkFBNEQsZ0NBQWdDLENBQTJDLGlDQUFpQyxDQUErQyxxQ0FBcUMsQ0FBQywrQkFBK0IsU0FBUyxDQUFDO0FBQXc5QixrQkFBa0IsY0FBOEUsdURBQXVELENBQWlDLHVCQUF1QixDQUFDLFFBQTBFLHlEQUF5RCxDQUFzRCw0Q0FBNEMsQ0FBQyxJQUFzRSx5REFBeUQsQ0FBdUQsNkNBQTZDLENBQUMsSUFBcUUsd0RBQXdELENBQTZDLG1DQUFtQyxDQUFDLElBQXlELDRDQUE0QyxDQUFDO0FBQUMsaUJBQStDLHFCQUFxQixDQUF3Qyw4QkFBOEI7QUFBaUUsaUJBQWlCLFVBQVUsU0FBUyxDQUFDLFFBQVEsU0FBUyxDQUFDO0FBQUMsZ0JBQTZDLG9CQUFvQjtBQUFpTixpQkFBaUIsR0FBK0IsbUJBQW1CLENBQUMsSUFBOEMsaUNBQWlDLENBQUMsR0FBK0IsbUJBQW1CLENBQUM7QUFBQyxnQkFBNkMsb0JBQW9CLENBQStDLHFDQUFxQztBQUE4ZSxzQkFBc0IsR0FBK0IsbUJBQW1CLENBQUMsSUFBMEMsNkJBQTZCLENBQUMsSUFBMEMsNkJBQTZCLENBQUMsSUFBMEMsNkJBQTZCLENBQUMsSUFBMEMsNkJBQTZCLENBQUMsSUFBMEMsNkJBQTZCLENBQUMsR0FBK0IsbUJBQW1CLENBQUM7QUFBQyxxQkFBdUQseUJBQXlCO0FBQWdSLGtCQUFrQixNQUFzQyx1QkFBdUIsQ0FBQyxvQkFBNkQsZ0NBQWdDLENBQUMsZ0JBQXdELCtCQUErQixDQUFDO0FBQUMsaUJBQStDLHFCQUFxQjtBQUFnUixrQkFBa0IsTUFBc0MsdUJBQXVCLENBQUMsb0JBQTZELGdDQUFnQyxDQUFDLGdCQUF3RCwrQkFBK0IsQ0FBQztBQUFDLGlCQUErQyxxQkFBcUI7QUFBcWhCLHFCQUFxQixHQUFtQyx1QkFBdUIsQ0FBQyxLQUF1RCx5Q0FBeUMsQ0FBQyxNQUFzRCx1Q0FBdUMsQ0FBQyxNQUF3RCx5Q0FBeUMsQ0FBQyxNQUFzRCx1Q0FBdUMsQ0FBQyxJQUFvQyx1QkFBdUIsQ0FBQztBQUFDLG9CQUFrRSxxQ0FBcUMsQ0FBa0Msd0JBQXdCO0FBQW9VLGlCQUFpQixJQUFvQyx1QkFBdUIsQ0FBQyxJQUFxQyx3QkFBd0IsQ0FBQyxJQUFtQyxzQkFBc0IsQ0FBQyxJQUFvQyx1QkFBdUIsQ0FBQyxHQUFrQyxzQkFBc0IsQ0FBQztBQUFDLGdCQUFvRCwyQkFBMkIsQ0FBOEIsb0JBQW9CO0FBQWtjLGdCQUFnQixHQUErQixtQkFBbUIsQ0FBQyxRQUEwRCx5Q0FBeUMsQ0FBQyxnQkFBb0UsMkNBQTJDLENBQUMsWUFBaUUsNENBQTRDLENBQUMsR0FBK0IsbUJBQW1CLENBQUM7QUFBQyxlQUEyQyxtQkFBbUI7QUFBZ3BCLGtCQUFrQixHQUFtQyx1QkFBdUIsQ0FBQyxJQUEwRCw2Q0FBNkMsQ0FBQyxJQUF3RCwyQ0FBMkMsQ0FBQyxJQUEwRCw2Q0FBNkMsQ0FBQyxJQUF3RCwyQ0FBMkMsQ0FBQyxJQUF5RCw0Q0FBNEMsQ0FBQyxHQUFtQyx1QkFBdUIsQ0FBQztBQUFDLGlCQUErQyxxQkFBcUI7QUFBaXpCLGlCQUFpQixZQUE0Qyx1QkFBdUIsQ0FBQyxNQUF3RCx5Q0FBeUMsQ0FBQyxNQUFzRCx1Q0FBdUMsQ0FBQyxNQUEwRCwyQ0FBMkMsQ0FBQyxNQUEwRCwyQ0FBMkMsQ0FBQyxNQUE0RCw2Q0FBNkMsQ0FBQyxNQUE0RCw2Q0FBNkMsQ0FBQyxNQUFnRSxpREFBaUQsQ0FBQztBQUFDLGdCQUE2QyxvQkFBb0IsQ0FBaUMsdUJBQXVCO0FBQWdTLHFCQUFxQixHQUE4QixrQkFBa0IsQ0FBQyxJQUFpQyxvQkFBb0IsQ0FBQyxJQUErQixrQkFBa0IsQ0FBQyxJQUFpQyxvQkFBb0IsQ0FBQyxJQUErQixrQkFBa0IsQ0FBQztBQUFDLG9CQUFxRCx3QkFBd0IsQ0FBaUMsdUJBQXVCLENBQThELG9EQUFvRCxDQUErQyxxQ0FBcUM7QUFBNFIsc0JBQXNCLEdBQW1ELHVDQUF1QyxDQUFDLFVBQVUsQ0FBQyxJQUE4QyxpQ0FBaUMsQ0FBQyxVQUFVLENBQUMsR0FBOEIsa0JBQWtCLENBQUMsU0FBUyxDQUFDO0FBQUMscUJBQXVELHlCQUF5QjtBQUE0UixzQkFBc0IsR0FBbUQsdUNBQXVDLENBQUMsVUFBVSxDQUFDLElBQThDLGlDQUFpQyxDQUFDLFVBQVUsQ0FBQyxHQUE4QixrQkFBa0IsQ0FBQyxTQUFTLENBQUM7QUFBQyxxQkFBdUQseUJBQXlCO0FBQTJSLHVCQUF1QixHQUFrRCxzQ0FBc0MsQ0FBQyxVQUFVLENBQUMsSUFBOEMsaUNBQWlDLENBQUMsVUFBVSxDQUFDLEdBQThCLGtCQUFrQixDQUFDLFNBQVMsQ0FBQztBQUFDLHNCQUF5RCwwQkFBMEI7QUFBd1Isb0JBQW9CLEdBQWtELHNDQUFzQyxDQUFDLFVBQVUsQ0FBQyxJQUE4QyxpQ0FBaUMsQ0FBQyxVQUFVLENBQUMsR0FBOEIsa0JBQWtCLENBQUMsU0FBUyxDQUFDO0FBQUMsbUJBQW1ELHVCQUF1QjtBQUF5Uix1QkFBdUIsR0FBOEIsa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQThDLGlDQUFpQyxDQUFDLFVBQVUsQ0FBQyxHQUFpRCxxQ0FBcUMsQ0FBQyxVQUFVLENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCO0FBQTZSLHVCQUF1QixHQUE4QixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBOEMsaUNBQWlDLENBQUMsVUFBVSxDQUFDLEdBQW1ELHVDQUF1QyxDQUFDLFVBQVUsQ0FBQztBQUFDLHNCQUF5RCwwQkFBMEI7QUFBNFIsd0JBQXdCLEdBQThCLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUE4QyxpQ0FBaUMsQ0FBQyxVQUFVLENBQUMsR0FBa0Qsc0NBQXNDLENBQUMsVUFBVSxDQUFDO0FBQUMsdUJBQTJELDJCQUEyQjtBQUF5UixxQkFBcUIsR0FBOEIsa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQThDLGlDQUFpQyxDQUFDLFVBQVUsQ0FBQyxHQUFrRCxzQ0FBc0MsQ0FBQyxVQUFVLENBQUM7QUFBQyxvQkFBcUQsd0JBQXdCO0FBQXdtQixvQkFBb0Isc0JBQXNGLHVEQUF1RCxDQUFDLEdBQUcsU0FBUyxDQUFxQywyQkFBMkIsQ0FBQyxJQUEyQyw4QkFBOEIsQ0FBQyxJQUF3QywyQkFBMkIsQ0FBQyxJQUFJLFNBQVMsQ0FBMkMsaUNBQWlDLENBQUMsSUFBMkMsOEJBQThCLENBQUMsR0FBRyxTQUFTLENBQTZCLG1CQUFtQixDQUFDO0FBQUMsbUJBQW1ELHVCQUF1QixDQUErRCxxREFBcUQsQ0FBaUMsdUJBQXVCO0FBQTRvQix3QkFBd0Isa0JBQWtGLHVEQUF1RCxDQUFDLEdBQUcsU0FBUyxDQUFzRCw0Q0FBNEMsQ0FBQyxJQUFJLFNBQVMsQ0FBb0QsMENBQTBDLENBQUMsSUFBeUQsNENBQTRDLENBQUMsSUFBd0QsMkNBQTJDLENBQUMsR0FBbUMsdUJBQXVCLENBQUM7QUFBQyx1QkFBMkQsMkJBQTJCO0FBQTBvQix3QkFBd0Isa0JBQWtGLHVEQUF1RCxDQUFDLEdBQUcsU0FBUyxDQUFzRCw0Q0FBNEMsQ0FBQyxJQUFJLFNBQVMsQ0FBbUQseUNBQXlDLENBQUMsSUFBeUQsNENBQTRDLENBQUMsSUFBd0QsMkNBQTJDLENBQUMsR0FBbUMsdUJBQXVCLENBQUM7QUFBQyx1QkFBMkQsMkJBQTJCO0FBQTJvQix5QkFBeUIsa0JBQWtGLHVEQUF1RCxDQUFDLEdBQUcsU0FBUyxDQUFxRCwyQ0FBMkMsQ0FBQyxJQUFJLFNBQVMsQ0FBb0QsMENBQTBDLENBQUMsSUFBd0QsMkNBQTJDLENBQUMsSUFBeUQsNENBQTRDLENBQUMsR0FBbUMsdUJBQXVCLENBQUM7QUFBQyx3QkFBNkQsNEJBQTRCO0FBQTBvQixzQkFBc0Isa0JBQWtGLHVEQUF1RCxDQUFDLEdBQUcsU0FBUyxDQUFxRCwyQ0FBMkMsQ0FBQyxJQUFJLFNBQVMsQ0FBcUQsMkNBQTJDLENBQUMsSUFBd0QsMkNBQTJDLENBQUMsSUFBeUQsNENBQTRDLENBQUMsR0FBbUMsdUJBQXVCLENBQUM7QUFBQyxxQkFBdUQseUJBQXlCO0FBQXdRLHFCQUFxQixJQUF3QywyQkFBMkIsQ0FBQyxRQUFRLFNBQVMsQ0FBd0MsOEJBQThCLENBQUMsR0FBRyxTQUFTLENBQXFDLDJCQUEyQixDQUFDO0FBQUMsb0JBQW9ELHVCQUF1QixDQUErRCxxREFBcUQsQ0FBa0Msd0JBQXdCO0FBQXdXLHlCQUF5QixJQUF5RCw0Q0FBNEMsQ0FBQyxRQUFRLFNBQVMsQ0FBcUQsMkNBQTJDLENBQUMsR0FBRyxTQUFTLENBQXFELDJDQUEyQyxDQUFDO0FBQUMsd0JBQTZELDRCQUE0QjtBQUE4UCx5QkFBeUIsSUFBSSxTQUFTLENBQW9ELDBDQUEwQyxDQUFDLEdBQUcsU0FBUyxDQUFzRCw0Q0FBNEMsQ0FBQztBQUFDLHdCQUE2RCw0QkFBNEI7QUFBK1AsMEJBQTBCLElBQUksU0FBUyxDQUFxRCwyQ0FBMkMsQ0FBQyxHQUFHLFNBQVMsQ0FBcUQsMkNBQTJDLENBQUM7QUFBQyx5QkFBK0QsNkJBQTZCO0FBQXdXLHVCQUF1QixJQUEwRCw2Q0FBNkMsQ0FBQyxRQUFRLFNBQVMsQ0FBb0QsMENBQTBDLENBQUMsR0FBRyxTQUFTLENBQXNELDRDQUE0QyxDQUFDO0FBQUMsc0JBQXlELDBCQUEwQjtBQUFzRCxrQkFBa0IsR0FBRyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUM7QUFBQyxpQkFBK0MscUJBQXFCO0FBQTRMLHNCQUFzQixHQUFHLFNBQVMsQ0FBMEMsZ0NBQWdDLENBQUMsR0FBRyxTQUFTLENBQWlDLHVCQUF1QixDQUFDO0FBQUMscUJBQXVELHlCQUF5QjtBQUFtTSx5QkFBeUIsR0FBRyxTQUFTLENBQTRDLGtDQUFrQyxDQUFDLEdBQUcsU0FBUyxDQUFpQyx1QkFBdUIsQ0FBQztBQUFDLHdCQUE2RCw0QkFBNEI7QUFBNEwsc0JBQXNCLEdBQUcsU0FBUyxDQUEwQyxnQ0FBZ0MsQ0FBQyxHQUFHLFNBQVMsQ0FBaUMsdUJBQXVCLENBQUM7QUFBQyxxQkFBdUQseUJBQXlCO0FBQW1NLHlCQUF5QixHQUFHLFNBQVMsQ0FBNEMsa0NBQWtDLENBQUMsR0FBRyxTQUFTLENBQWlDLHVCQUF1QixDQUFDO0FBQUMsd0JBQTZELDRCQUE0QjtBQUEyTCx1QkFBdUIsR0FBRyxTQUFTLENBQXlDLCtCQUErQixDQUFDLEdBQUcsU0FBUyxDQUFpQyx1QkFBdUIsQ0FBQztBQUFDLHNCQUF5RCwwQkFBMEI7QUFBa00sMEJBQTBCLEdBQUcsU0FBUyxDQUEyQyxpQ0FBaUMsQ0FBQyxHQUFHLFNBQVMsQ0FBaUMsdUJBQXVCLENBQUM7QUFBQyx5QkFBK0QsNkJBQTZCO0FBQXdMLG9CQUFvQixHQUFHLFNBQVMsQ0FBeUMsK0JBQStCLENBQUMsR0FBRyxTQUFTLENBQWlDLHVCQUF1QixDQUFDO0FBQUMsbUJBQW1ELHVCQUF1QjtBQUErTCx1QkFBdUIsR0FBRyxTQUFTLENBQTJDLGlDQUFpQyxDQUFDLEdBQUcsU0FBUyxDQUFpQyx1QkFBdUIsQ0FBQztBQUFDLHNCQUF5RCwwQkFBMEI7QUFBdU0seUJBQXlCLEdBQUcsU0FBUyxDQUE4QyxvQ0FBb0MsQ0FBQyxHQUFHLFNBQVMsQ0FBaUMsdUJBQXVCLENBQUM7QUFBQyx3QkFBNkQsNEJBQTRCO0FBQXNNLDBCQUEwQixHQUFHLFNBQVMsQ0FBNkMsbUNBQW1DLENBQUMsR0FBRyxTQUFTLENBQWlDLHVCQUF1QixDQUFDO0FBQUMseUJBQStELDZCQUE2QjtBQUF3TSw0QkFBNEIsR0FBRyxTQUFTLENBQTZDLG1DQUFtQyxDQUFDLEdBQUcsU0FBUyxDQUFpQyx1QkFBdUIsQ0FBQztBQUFDLDJCQUFtRSwrQkFBK0I7QUFBdU0sNkJBQTZCLEdBQUcsU0FBUyxDQUE0QyxrQ0FBa0MsQ0FBQyxHQUFHLFNBQVMsQ0FBaUMsdUJBQXVCLENBQUM7QUFBQyw0QkFBcUUsZ0NBQWdDO0FBQXVELG1CQUFtQixHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztBQUFDLGtCQUFpRCxzQkFBc0I7QUFBbUksdUJBQXVCLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUF5QywrQkFBK0IsQ0FBQztBQUFDLHNCQUF5RCwwQkFBMEI7QUFBMEksMEJBQTBCLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUEyQyxpQ0FBaUMsQ0FBQztBQUFDLHlCQUErRCw2QkFBNkI7QUFBcUksdUJBQXVCLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUEwQyxnQ0FBZ0MsQ0FBQztBQUFDLHNCQUF5RCwwQkFBMEI7QUFBNEksMEJBQTBCLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUE0QyxrQ0FBa0MsQ0FBQztBQUFDLHlCQUErRCw2QkFBNkI7QUFBb0ksd0JBQXdCLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUF5QywrQkFBK0IsQ0FBQztBQUFDLHVCQUEyRCwyQkFBMkI7QUFBMkksMkJBQTJCLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUEyQyxpQ0FBaUMsQ0FBQztBQUFDLDBCQUFpRSw4QkFBOEI7QUFBbUkscUJBQXFCLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUEwQyxnQ0FBZ0MsQ0FBQztBQUFDLG9CQUFxRCx3QkFBd0I7QUFBMEksd0JBQXdCLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUE0QyxrQ0FBa0MsQ0FBQztBQUFDLHVCQUEyRCwyQkFBMkI7QUFBd00sMEJBQTBCLEdBQUcsU0FBUyxDQUFpQyx1QkFBdUIsQ0FBQyxHQUFHLFNBQVMsQ0FBOEMsb0NBQW9DLENBQUM7QUFBQyx5QkFBK0QsNkJBQTZCO0FBQXVNLDJCQUEyQixHQUFHLFNBQVMsQ0FBaUMsdUJBQXVCLENBQUMsR0FBRyxTQUFTLENBQTZDLG1DQUFtQyxDQUFDO0FBQUMsMEJBQWlFLDhCQUE4QjtBQUF3TSw4QkFBOEIsR0FBRyxTQUFTLENBQWlDLHVCQUF1QixDQUFDLEdBQUcsU0FBUyxDQUE0QyxrQ0FBa0MsQ0FBQztBQUFDLDZCQUF1RSxpQ0FBaUM7QUFBeU0sNkJBQTZCLEdBQUcsU0FBUyxDQUFpQyx1QkFBdUIsQ0FBQyxHQUFHLFNBQVMsQ0FBNkMsbUNBQW1DLENBQUM7QUFBQyw0QkFBcUUsZ0NBQWdDO0FBQXdxQyxnQkFBZ0IsR0FBZ0Ysb0VBQW9FLENBQTRDLGtDQUFrQyxDQUFDLElBQXNGLHlFQUF5RSxDQUE0QyxrQ0FBa0MsQ0FBQyxJQUFzRix5RUFBeUUsQ0FBMkMsaUNBQWlDLENBQUMsSUFBMEYsNkVBQTZFLENBQTJDLGlDQUFpQyxDQUFDLEdBQThFLGtFQUFrRSxDQUEyQyxpQ0FBaUMsQ0FBQztBQUFDLGlDQUFpQyxtQ0FBbUMsQ0FBQywyQkFBMkIsQ0FBNkIsbUJBQW1CO0FBQStwQixtQkFBbUIsR0FBdUQsMkNBQTJDLENBQTJDLGlDQUFpQyxDQUFDLFNBQVMsQ0FBQyxJQUF5RCw0Q0FBNEMsQ0FBMkMsaUNBQWlDLENBQUMsSUFBd0QsMkNBQTJDLENBQUMsU0FBUyxDQUFDLElBQXdELDJDQUEyQyxDQUFDLEdBQXdDLDRCQUE0QixDQUFDO0FBQUMsa0JBQWtCLDZDQUE2QyxDQUFDLHFDQUFxQyxDQUFnQyxzQkFBc0I7QUFBK3BCLG1CQUFtQixHQUF1RCwyQ0FBMkMsQ0FBMkMsaUNBQWlDLENBQUMsU0FBUyxDQUFDLElBQXlELDRDQUE0QyxDQUEyQyxpQ0FBaUMsQ0FBQyxJQUF3RCwyQ0FBMkMsQ0FBQyxTQUFTLENBQUMsSUFBd0QsMkNBQTJDLENBQUMsR0FBd0MsNEJBQTRCLENBQUM7QUFBQyxrQkFBa0IsNkNBQTZDLENBQUMscUNBQXFDLENBQWdDLHNCQUFzQjtBQUFnVSxvQkFBb0IsR0FBd0MsNEJBQTRCLENBQUMsSUFBeUQsNENBQTRDLENBQUMsU0FBUyxDQUFDLEdBQXVELDJDQUEyQyxDQUFDLFNBQVMsQ0FBQztBQUFDLG1CQUFtRCx1QkFBdUIsQ0FBK0QscURBQXFELENBQWlDLHVCQUF1QixDQUFDLDZDQUE2QyxDQUFDLHFDQUFxQztBQUFnVSxvQkFBb0IsR0FBd0MsNEJBQTRCLENBQUMsSUFBeUQsNENBQTRDLENBQUMsU0FBUyxDQUFDLEdBQXVELDJDQUEyQyxDQUFDLFNBQVMsQ0FBQztBQUFDLG1CQUFtRCx1QkFBdUIsQ0FBK0QscURBQXFELENBQUMsNkNBQTZDLENBQUMscUNBQXFDLENBQWlDLHVCQUF1QjtBQUFpViw2QkFBNkIsR0FBeUQsNkNBQTZDLENBQUMsU0FBUyxDQUFDLElBQW1DLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxJQUFtQyxzQkFBc0IsQ0FBQyxHQUFtQyx1QkFBdUIsQ0FBQztBQUFDLDRCQUFxRSxnQ0FBZ0MsQ0FBNEMsa0NBQWtDO0FBQWdWLDRCQUE0QixHQUF5RCw2Q0FBNkMsQ0FBQyxTQUFTLENBQUMsSUFBb0MsdUJBQXVCLENBQUMsU0FBUyxDQUFDLElBQWtDLHFCQUFxQixDQUFDLEdBQW1DLHVCQUF1QixDQUFDO0FBQUMsMkJBQW1FLCtCQUErQixDQUE0QyxrQ0FBa0M7QUFBb0ssOEJBQThCLEdBQUcsU0FBUyxDQUFDLEdBQXdELDRDQUE0QyxDQUFDLFNBQVMsQ0FBQztBQUFDLDZCQUF1RSxpQ0FBaUMsQ0FBMkMsaUNBQWlDO0FBQXVLLDZCQUE2QixHQUFHLFNBQVMsQ0FBQyxHQUEwRCw4Q0FBOEMsQ0FBQyxTQUFTLENBQUM7QUFBQyw0QkFBcUUsZ0NBQWdDLENBQTJDLGlDQUFpQztBQUE0SyxvQkFBb0IsR0FBcUMseUJBQXlCLENBQUMsU0FBUyxDQUFDLEdBQW1DLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztBQUFDLG1CQUFtRCx1QkFBdUIsQ0FBaUMsdUJBQXVCO0FBQWtMLDRCQUE0QixHQUFvQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsR0FBbUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO0FBQUMsMkJBQW1FLCtCQUErQixDQUFzQyw0QkFBNEI7QUFBaUwsNkJBQTZCLEdBQW1DLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxHQUFtQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7QUFBQyw0QkFBcUUsZ0NBQWdDLENBQXVDLDZCQUE2QjtBQUE4SywwQkFBMEIsR0FBbUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLEdBQW1DLHVCQUF1QixDQUFDLFNBQVMsQ0FBQztBQUFDLHlCQUErRCw2QkFBNkIsQ0FBc0MsNEJBQTRCO0FBQWlMLDJCQUEyQixHQUFvQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsR0FBbUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDO0FBQUMsMEJBQWlFLDhCQUE4QixDQUF1Qyw2QkFBNkI7QUFBbUgscUJBQXFCLEdBQUcsU0FBUyxDQUFDLEdBQW9DLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztBQUFDLG9CQUFxRCx3QkFBd0IsQ0FBaUMsdUJBQXVCO0FBQXlILDZCQUE2QixHQUFHLFNBQVMsQ0FBQyxHQUFtQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7QUFBQyw0QkFBcUUsZ0NBQWdDLENBQXNDLDRCQUE0QjtBQUE0SCw4QkFBOEIsR0FBRyxTQUFTLENBQUMsR0FBb0Msd0JBQXdCLENBQUMsU0FBUyxDQUFDO0FBQUMsNkJBQXVFLGlDQUFpQyxDQUF1Qyw2QkFBNkI7QUFBeUgsMkJBQTJCLEdBQUcsU0FBUyxDQUFDLEdBQW9DLHdCQUF3QixDQUFDLFNBQVMsQ0FBQztBQUFDLDBCQUFpRSw4QkFBOEIsQ0FBc0MsNEJBQTRCO0FBQXdILDRCQUE0QixHQUFHLFNBQVMsQ0FBQyxHQUFtQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUM7QUFBQywyQkFBbUUsK0JBQStCLENBQXVDLDZCQUE2QjtBQUEyZixpQkFBaUIsR0FBaUQscUNBQXFDLENBQUMsUUFBd0MsdUJBQXVCLENBQStDLHFDQUFxQyxDQUFDLFFBQXdDLHVCQUF1QixDQUErQyxxQ0FBcUMsQ0FBQyxTQUFTLENBQUMsR0FBNEMsZ0NBQWdDLENBQUMsU0FBUyxDQUFDO0FBQUMsZ0JBQThDLHFCQUFxQixDQUE0RCxrREFBa0QsQ0FBOEIsb0JBQW9CLENBQW1DLHlCQUF5QjtBQUFvWCx3QkFBd0IsR0FBRyxTQUFTLENBQTJDLGlDQUFpQyxDQUF3Qyw4QkFBOEIsQ0FBQyxJQUFxQyx3QkFBd0IsQ0FBQyxJQUFtQyxzQkFBc0IsQ0FBQyxHQUFHLFNBQVMsQ0FBNEIsa0JBQWtCLENBQUM7QUFBQyx1QkFBMkQsMkJBQTJCO0FBQXdOLGtCQUFrQixHQUFHLFNBQVMsQ0FBMEQsZ0RBQWdELENBQUMsR0FBRyxTQUFTLENBQWlDLHVCQUF1QixDQUFDO0FBQUMsaUJBQStDLHFCQUFxQjtBQUE2SixtQkFBbUIsR0FBRyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQXdELDhDQUE4QyxDQUFDO0FBQUMsa0JBQWlELHNCQUFzQjtBQUF1SCxrQkFBa0IsR0FBRyxTQUFTLENBQXFDLDJCQUEyQixDQUFDLElBQUksU0FBUyxDQUFDO0FBQUMsaUJBQStDLHFCQUFxQjtBQUF5aEIsc0JBQXNCLEdBQUcsU0FBUyxDQUE4RCxvREFBb0QsQ0FBbUUseURBQXlELENBQUMsSUFBSSxTQUFTLENBQWlFLHVEQUF1RCxDQUFpRSx1REFBdUQsQ0FBQztBQUFDLHFCQUF1RCx5QkFBeUI7QUFBeWhCLHNCQUFzQixHQUFHLFNBQVMsQ0FBOEQsb0RBQW9ELENBQW1FLHlEQUF5RCxDQUFDLElBQUksU0FBUyxDQUFpRSx1REFBdUQsQ0FBaUUsdURBQXVELENBQUM7QUFBQyxxQkFBdUQseUJBQXlCO0FBQTBoQix1QkFBdUIsR0FBRyxTQUFTLENBQTZELG1EQUFtRCxDQUFtRSx5REFBeUQsQ0FBQyxJQUFJLFNBQVMsQ0FBa0Usd0RBQXdELENBQWlFLHVEQUF1RCxDQUFDO0FBQUMsc0JBQXlELDBCQUEwQjtBQUF1aEIsb0JBQW9CLEdBQUcsU0FBUyxDQUE2RCxtREFBbUQsQ0FBbUUseURBQXlELENBQUMsSUFBSSxTQUFTLENBQWtFLHdEQUF3RCxDQUFpRSx1REFBdUQsQ0FBQztBQUFDLG1CQUFtRCx1QkFBdUI7QUFBcUksbUJBQW1CLEdBQUcsU0FBUyxDQUFDLElBQUksU0FBUyxDQUFxQywyQkFBMkIsQ0FBQyxHQUFHLFNBQVMsQ0FBQztBQUFDLGtCQUFpRCxzQkFBc0I7QUFBMGhCLHVCQUF1QixJQUFJLFNBQVMsQ0FBa0Usd0RBQXdELENBQW1FLHlEQUF5RCxDQUFDLEdBQUcsU0FBUyxDQUE2RCxtREFBbUQsQ0FBaUUsdURBQXVELENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCLENBQXdDLDhCQUE4QjtBQUFzUix1QkFBdUIsSUFBSSxTQUFTLENBQWlFLHVEQUF1RCxDQUFDLEdBQUcsU0FBUyxDQUFzRCw0Q0FBNEMsQ0FBQztBQUFDLHNCQUF5RCwwQkFBMEIsQ0FBc0MsNEJBQTRCO0FBQXVSLHdCQUF3QixJQUFJLFNBQVMsQ0FBa0Usd0RBQXdELENBQUMsR0FBRyxTQUFTLENBQXFELDJDQUEyQyxDQUFDO0FBQUMsdUJBQTJELDJCQUEyQixDQUF1Qyw2QkFBNkI7QUFBd2hCLHFCQUFxQixJQUFJLFNBQVMsQ0FBaUUsdURBQXVELENBQW1FLHlEQUF5RCxDQUFDLEdBQUcsU0FBUyxDQUE4RCxvREFBb0QsQ0FBaUUsdURBQXVELENBQUM7QUFBQyxvQkFBcUQsd0JBQXdCLENBQXdDLDhCQUE4QjtBQUE0TCx1QkFBdUIsR0FBNEMsZ0NBQWdDLENBQUMsa0JBQWtCLENBQUMsR0FBbUMsdUJBQXVCLENBQUM7QUFBQyxzQkFBeUQsMEJBQTBCO0FBQTRMLHVCQUF1QixHQUE0QyxnQ0FBZ0MsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFtQyx1QkFBdUIsQ0FBQztBQUFDLHNCQUF5RCwwQkFBMEI7QUFBMkwsd0JBQXdCLEdBQTJDLCtCQUErQixDQUFDLGtCQUFrQixDQUFDLEdBQW1DLHVCQUF1QixDQUFDO0FBQUMsdUJBQTJELDJCQUEyQjtBQUF3TCxxQkFBcUIsR0FBMkMsK0JBQStCLENBQUMsa0JBQWtCLENBQUMsR0FBbUMsdUJBQXVCLENBQUM7QUFBQyxvQkFBcUQsd0JBQXdCO0FBQTBMLHdCQUF3QixHQUFtQyx1QkFBdUIsQ0FBQyxHQUFHLGlCQUFpQixDQUF5QywrQkFBK0IsQ0FBQztBQUFDLHVCQUEyRCwyQkFBMkI7QUFBNEwsd0JBQXdCLEdBQW1DLHVCQUF1QixDQUFDLEdBQUcsaUJBQWlCLENBQTBDLGdDQUFnQyxDQUFDO0FBQUMsdUJBQTJELDJCQUEyQjtBQUEyTCx5QkFBeUIsR0FBbUMsdUJBQXVCLENBQUMsR0FBRyxpQkFBaUIsQ0FBeUMsK0JBQStCLENBQUM7QUFBQyx3QkFBNkQsNEJBQTRCO0FBQTBMLHNCQUFzQixHQUFtQyx1QkFBdUIsQ0FBQyxHQUFHLGlCQUFpQixDQUEwQyxnQ0FBZ0MsQ0FBQztBQUFDLHFCQUF1RCx5QkFBeUI7QUNIejRyRTtJQUNJLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtFQUNaLGtCQUFrQjtFQUNsQjs7dUNBRXFDO0VBQ3JDOzs7c0NBR29DO0VBQ3BDLHlCQUF5QjtFQUN6Qjs7MkNBRXlDO0VBQ3pDLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osZUFBZTs7O0FBR2pCIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7LyohXG4gKiBhbmltYXRlLmNzcyAtIGh0dHBzOi8vYW5pbWF0ZS5zdHlsZS9cbiAqIFZlcnNpb24gLSA0LjEuMVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIC0gaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICpcbiAqIENvcHlyaWdodCAoYykgMjAyMCBBbmltYXRlLmNzc1xuICovOnJvb3R7LS1hbmltYXRlLWR1cmF0aW9uOjFzOy0tYW5pbWF0ZS1kZWxheToxczstLWFuaW1hdGUtcmVwZWF0OjF9LmFuaW1hdGVfX2FuaW1hdGVkey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO2FuaW1hdGlvbi1kdXJhdGlvbjoxczstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjp2YXIoLS1hbmltYXRlLWR1cmF0aW9uKTthbmltYXRpb24tZHVyYXRpb246dmFyKC0tYW5pbWF0ZS1kdXJhdGlvbik7LXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmJvdGg7YW5pbWF0aW9uLWZpbGwtbW9kZTpib3RofS5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19pbmZpbml0ZXstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZX0uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fcmVwZWF0LTF7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OjE7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDoxOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDp2YXIoLS1hbmltYXRlLXJlcGVhdCk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDp2YXIoLS1hbmltYXRlLXJlcGVhdCl9LmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX3JlcGVhdC0yey13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDoyO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6Mjstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6Y2FsYyh2YXIoLS1hbmltYXRlLXJlcGVhdCkqMik7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDpjYWxjKHZhcigtLWFuaW1hdGUtcmVwZWF0KSoyKX0uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fcmVwZWF0LTN7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OjM7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDozOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDpjYWxjKHZhcigtLWFuaW1hdGUtcmVwZWF0KSozKTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmNhbGModmFyKC0tYW5pbWF0ZS1yZXBlYXQpKjMpfS5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19kZWxheS0xc3std2Via2l0LWFuaW1hdGlvbi1kZWxheToxczthbmltYXRpb24tZGVsYXk6MXM7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6dmFyKC0tYW5pbWF0ZS1kZWxheSk7YW5pbWF0aW9uLWRlbGF5OnZhcigtLWFuaW1hdGUtZGVsYXkpfS5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19kZWxheS0yc3std2Via2l0LWFuaW1hdGlvbi1kZWxheToyczthbmltYXRpb24tZGVsYXk6MnM7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6Y2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSoyKTthbmltYXRpb24tZGVsYXk6Y2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSoyKX0uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZGVsYXktM3N7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6M3M7YW5pbWF0aW9uLWRlbGF5OjNzOy13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OmNhbGModmFyKC0tYW5pbWF0ZS1kZWxheSkqMyk7YW5pbWF0aW9uLWRlbGF5OmNhbGModmFyKC0tYW5pbWF0ZS1kZWxheSkqMyl9LmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2RlbGF5LTRzey13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OjRzO2FuaW1hdGlvbi1kZWxheTo0czstd2Via2l0LWFuaW1hdGlvbi1kZWxheTpjYWxjKHZhcigtLWFuaW1hdGUtZGVsYXkpKjQpO2FuaW1hdGlvbi1kZWxheTpjYWxjKHZhcigtLWFuaW1hdGUtZGVsYXkpKjQpfS5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19kZWxheS01c3std2Via2l0LWFuaW1hdGlvbi1kZWxheTo1czthbmltYXRpb24tZGVsYXk6NXM7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6Y2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSo1KTthbmltYXRpb24tZGVsYXk6Y2FsYyh2YXIoLS1hbmltYXRlLWRlbGF5KSo1KX0uYW5pbWF0ZV9fYW5pbWF0ZWQuYW5pbWF0ZV9fZmFzdGVyey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi41czthbmltYXRpb24tZHVyYXRpb246LjVzOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikvMik7YW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikvMil9LmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2Zhc3R7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246LjhzO2FuaW1hdGlvbi1kdXJhdGlvbjouOHM7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSowLjgpO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pKjAuOCl9LmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX3Nsb3d7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MnM7YW5pbWF0aW9uLWR1cmF0aW9uOjJzOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMik7YW5pbWF0aW9uLWR1cmF0aW9uOmNhbGModmFyKC0tYW5pbWF0ZS1kdXJhdGlvbikqMil9LmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX3Nsb3dlcnstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjozczthbmltYXRpb24tZHVyYXRpb246M3M7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSozKTthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSozKX1AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246cmVkdWNlKSxwcmludHsuYW5pbWF0ZV9fYW5pbWF0ZWR7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MW1zIWltcG9ydGFudDthbmltYXRpb24tZHVyYXRpb246MW1zIWltcG9ydGFudDstd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246MW1zIWltcG9ydGFudDt0cmFuc2l0aW9uLWR1cmF0aW9uOjFtcyFpbXBvcnRhbnQ7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OjEhaW1wb3J0YW50O2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6MSFpbXBvcnRhbnR9LmFuaW1hdGVfX2FuaW1hdGVkW2NsYXNzKj1PdXRde29wYWNpdHk6MH19QC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZXswJSwyMCUsNTMlLHRvey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9NDAlLDQzJXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC43NTUsLjA1LC44NTUsLjA2KTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNzU1LC4wNSwuODU1LC4wNik7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMzBweCwwKSBzY2FsZVkoMS4xKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMzBweCwwKSBzY2FsZVkoMS4xKX03MCV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNzU1LC4wNSwuODU1LC4wNik7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjc1NSwuMDUsLjg1NSwuMDYpOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTE1cHgsMCkgc2NhbGVZKDEuMDUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xNXB4LDApIHNjYWxlWSgxLjA1KX04MCV7LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApIHNjYWxlWSguOTUpO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApIHNjYWxlWSguOTUpfTkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC00cHgsMCkgc2NhbGVZKDEuMDIpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC00cHgsMCkgc2NhbGVZKDEuMDIpfX1Aa2V5ZnJhbWVzIGJvdW5jZXswJSwyMCUsNTMlLHRvey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9NDAlLDQzJXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC43NTUsLjA1LC44NTUsLjA2KTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNzU1LC4wNSwuODU1LC4wNik7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMzBweCwwKSBzY2FsZVkoMS4xKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMzBweCwwKSBzY2FsZVkoMS4xKX03MCV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNzU1LC4wNSwuODU1LC4wNik7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjc1NSwuMDUsLjg1NSwuMDYpOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTE1cHgsMCkgc2NhbGVZKDEuMDUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xNXB4LDApIHNjYWxlWSgxLjA1KX04MCV7LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApIHNjYWxlWSguOTUpO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApIHNjYWxlWSguOTUpfTkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC00cHgsMCkgc2NhbGVZKDEuMDIpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC00cHgsMCkgc2NhbGVZKDEuMDIpfX0uYW5pbWF0ZV9fYm91bmNley13ZWJraXQtYW5pbWF0aW9uLW5hbWU6Ym91bmNlO2FuaW1hdGlvbi1uYW1lOmJvdW5jZTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b219QC13ZWJraXQta2V5ZnJhbWVzIGZsYXNoezAlLDUwJSx0b3tvcGFjaXR5OjF9MjUlLDc1JXtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZmxhc2h7MCUsNTAlLHRve29wYWNpdHk6MX0yNSUsNzUle29wYWNpdHk6MH19LmFuaW1hdGVfX2ZsYXNoey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6Zmxhc2g7YW5pbWF0aW9uLW5hbWU6Zmxhc2h9QC13ZWJraXQta2V5ZnJhbWVzIHB1bHNlezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfTUwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMDUsMS4wNSwxLjA1KTt0cmFuc2Zvcm06c2NhbGUzZCgxLjA1LDEuMDUsMS4wNSl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9fUBrZXlmcmFtZXMgcHVsc2V7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4wNSwxLjA1LDEuMDUpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMDUsMS4wNSwxLjA1KX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX19LmFuaW1hdGVfX3B1bHNley13ZWJraXQtYW5pbWF0aW9uLW5hbWU6cHVsc2U7YW5pbWF0aW9uLW5hbWU6cHVsc2U7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXR9QC13ZWJraXQta2V5ZnJhbWVzIHJ1YmJlckJhbmR7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9MzAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4yNSwuNzUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMS4yNSwuNzUsMSl9NDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjc1LDEuMjUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoLjc1LDEuMjUsMSl9NTAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4xNSwuODUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMS4xNSwuODUsMSl9NjUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjk1LDEuMDUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoLjk1LDEuMDUsMSl9NzUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4wNSwuOTUsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMS4wNSwuOTUsMSl9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9fUBrZXlmcmFtZXMgcnViYmVyQmFuZHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX0zMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjI1LC43NSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjI1LC43NSwxKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNzUsMS4yNSwxKTt0cmFuc2Zvcm06c2NhbGUzZCguNzUsMS4yNSwxKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjE1LC44NSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjE1LC44NSwxKX02NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOTUsMS4wNSwxKTt0cmFuc2Zvcm06c2NhbGUzZCguOTUsMS4wNSwxKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjA1LC45NSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjA1LC45NSwxKX10b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZVgoMSk7dHJhbnNmb3JtOnNjYWxlWCgxKX19LmFuaW1hdGVfX3J1YmJlckJhbmR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpydWJiZXJCYW5kO2FuaW1hdGlvbi1uYW1lOnJ1YmJlckJhbmR9QC13ZWJraXQta2V5ZnJhbWVzIHNoYWtlWHswJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTEwJSwzMCUsNTAlLDcwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsMCwwKX0yMCUsNDAlLDYwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMHB4LDAsMCl9fUBrZXlmcmFtZXMgc2hha2VYezAlLHRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9MTAlLDMwJSw1MCUsNzAlLDkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTBweCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTBweCwwLDApfTIwJSw0MCUsNjAlLDgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMHB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwcHgsMCwwKX19LmFuaW1hdGVfX3NoYWtlWHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnNoYWtlWDthbmltYXRpb24tbmFtZTpzaGFrZVh9QC13ZWJraXQta2V5ZnJhbWVzIHNoYWtlWXswJSx0b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfTEwJSwzMCUsNTAlLDcwJSw5MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTBweCwwKX0yMCUsNDAlLDYwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwcHgsMCl9fUBrZXlmcmFtZXMgc2hha2VZezAlLHRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9MTAlLDMwJSw1MCUsNzAlLDkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMHB4LDApfTIwJSw0MCUsNjAlLDgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwcHgsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTBweCwwKX19LmFuaW1hdGVfX3NoYWtlWXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnNoYWtlWTthbmltYXRpb24tbmFtZTpzaGFrZVl9QC13ZWJraXQta2V5ZnJhbWVzIGhlYWRTaGFrZXswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfTYuNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKX0xOC41JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCg1cHgpIHJvdGF0ZVkoN2RlZyl9MzEuNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtM3B4KSByb3RhdGVZKC01ZGVnKX00My41JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDJweCkgcm90YXRlWSgzZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgycHgpIHJvdGF0ZVkoM2RlZyl9NTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCl9fUBrZXlmcmFtZXMgaGVhZFNoYWtlezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCl9Ni41JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZVkoLTlkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC02cHgpIHJvdGF0ZVkoLTlkZWcpfTE4LjUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoNXB4KSByb3RhdGVZKDdkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKX0zMS41JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZVkoLTVkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC0zcHgpIHJvdGF0ZVkoLTVkZWcpfTQzLjUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMnB4KSByb3RhdGVZKDNkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDJweCkgcm90YXRlWSgzZGVnKX01MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKX19LmFuaW1hdGVfX2hlYWRTaGFrZXstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmhlYWRTaGFrZTthbmltYXRpb24tbmFtZTpoZWFkU2hha2V9QC13ZWJraXQta2V5ZnJhbWVzIHN3aW5nezIwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTVkZWcpfTQwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTEwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0xMGRlZyl9NjAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDVkZWcpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfX1Aa2V5ZnJhbWVzIHN3aW5nezIwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTVkZWcpfTQwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTEwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0xMGRlZyl9NjAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDVkZWcpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfX0uYW5pbWF0ZV9fc3dpbmd7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnRvcCBjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjp0b3AgY2VudGVyOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6c3dpbmc7YW5pbWF0aW9uLW5hbWU6c3dpbmd9QC13ZWJraXQta2V5ZnJhbWVzIHRhZGF7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9MTAlLDIwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KSByb3RhdGUoLTNkZWcpO3RyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KSByb3RhdGUoLTNkZWcpfTMwJSw1MCUsNzAlLDkwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKSByb3RhdGUoM2RlZyk7dHJhbnNmb3JtOnNjYWxlM2QoMS4xLDEuMSwxLjEpIHJvdGF0ZSgzZGVnKX00MCUsNjAlLDgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKSByb3RhdGUoLTNkZWcpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKSByb3RhdGUoLTNkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfX1Aa2V5ZnJhbWVzIHRhZGF7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9MTAlLDIwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KSByb3RhdGUoLTNkZWcpO3RyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KSByb3RhdGUoLTNkZWcpfTMwJSw1MCUsNzAlLDkwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKSByb3RhdGUoM2RlZyk7dHJhbnNmb3JtOnNjYWxlM2QoMS4xLDEuMSwxLjEpIHJvdGF0ZSgzZGVnKX00MCUsNjAlLDgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKSByb3RhdGUoLTNkZWcpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKSByb3RhdGUoLTNkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfX0uYW5pbWF0ZV9fdGFkYXstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnRhZGE7YW5pbWF0aW9uLW5hbWU6dGFkYX1ALXdlYmtpdC1rZXlmcmFtZXMgd29iYmxlezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9MTUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yNSUsMCwwKSByb3RhdGUoLTVkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjUlLDAsMCkgcm90YXRlKC01ZGVnKX0zMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAlLDAsMCkgcm90YXRlKDNkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMCUsMCwwKSByb3RhdGUoM2RlZyl9NDUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xNSUsMCwwKSByb3RhdGUoLTNkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTUlLDAsMCkgcm90YXRlKC0zZGVnKX02MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAlLDAsMCkgcm90YXRlKDJkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMCUsMCwwKSByb3RhdGUoMmRlZyl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01JSwwLDApIHJvdGF0ZSgtMWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01JSwwLDApIHJvdGF0ZSgtMWRlZyl9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyB3b2JibGV7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX0xNSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTI1JSwwLDApIHJvdGF0ZSgtNWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yNSUsMCwwKSByb3RhdGUoLTVkZWcpfTMwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMCUsMCwwKSByb3RhdGUoM2RlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwJSwwLDApIHJvdGF0ZSgzZGVnKX00NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTE1JSwwLDApIHJvdGF0ZSgtM2RlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xNSUsMCwwKSByb3RhdGUoLTNkZWcpfTYwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMCUsMCwwKSByb3RhdGUoMmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwJSwwLDApIHJvdGF0ZSgyZGVnKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTUlLDAsMCkgcm90YXRlKC0xZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTUlLDAsMCkgcm90YXRlKC0xZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fd29iYmxley13ZWJraXQtYW5pbWF0aW9uLW5hbWU6d29iYmxlO2FuaW1hdGlvbi1uYW1lOndvYmJsZX1ALXdlYmtpdC1rZXlmcmFtZXMgamVsbG97MCUsMTEuMSUsdG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX0yMi4yJXstd2Via2l0LXRyYW5zZm9ybTpza2V3WCgtMTIuNWRlZykgc2tld1koLTEyLjVkZWcpO3RyYW5zZm9ybTpza2V3WCgtMTIuNWRlZykgc2tld1koLTEyLjVkZWcpfTMzLjMley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpO3RyYW5zZm9ybTpza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKX00NC40JXstd2Via2l0LXRyYW5zZm9ybTpza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyk7dHJhbnNmb3JtOnNrZXdYKC0zLjEyNWRlZykgc2tld1koLTMuMTI1ZGVnKX01NS41JXstd2Via2l0LXRyYW5zZm9ybTpza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyk7dHJhbnNmb3JtOnNrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKX02Ni42JXstd2Via2l0LXRyYW5zZm9ybTpza2V3WCgtLjc4MTI1ZGVnKSBza2V3WSgtLjc4MTI1ZGVnKTt0cmFuc2Zvcm06c2tld1goLS43ODEyNWRlZykgc2tld1koLS43ODEyNWRlZyl9NzcuNyV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goLjM5MDYyNWRlZykgc2tld1koLjM5MDYyNWRlZyk7dHJhbnNmb3JtOnNrZXdYKC4zOTA2MjVkZWcpIHNrZXdZKC4zOTA2MjVkZWcpfTg4Ljgley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKC0uMTk1MzEyNWRlZykgc2tld1koLS4xOTUzMTI1ZGVnKTt0cmFuc2Zvcm06c2tld1goLS4xOTUzMTI1ZGVnKSBza2V3WSgtLjE5NTMxMjVkZWcpfX1Aa2V5ZnJhbWVzIGplbGxvezAlLDExLjElLHRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9MjIuMiV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKTt0cmFuc2Zvcm06c2tld1goLTEyLjVkZWcpIHNrZXdZKC0xMi41ZGVnKX0zMy4zJXstd2Via2l0LXRyYW5zZm9ybTpza2V3WCg2LjI1ZGVnKSBza2V3WSg2LjI1ZGVnKTt0cmFuc2Zvcm06c2tld1goNi4yNWRlZykgc2tld1koNi4yNWRlZyl9NDQuNCV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goLTMuMTI1ZGVnKSBza2V3WSgtMy4xMjVkZWcpO3RyYW5zZm9ybTpza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyl9NTUuNSV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goMS41NjI1ZGVnKSBza2V3WSgxLjU2MjVkZWcpO3RyYW5zZm9ybTpza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyl9NjYuNiV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goLS43ODEyNWRlZykgc2tld1koLS43ODEyNWRlZyk7dHJhbnNmb3JtOnNrZXdYKC0uNzgxMjVkZWcpIHNrZXdZKC0uNzgxMjVkZWcpfTc3Ljcley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKC4zOTA2MjVkZWcpIHNrZXdZKC4zOTA2MjVkZWcpO3RyYW5zZm9ybTpza2V3WCguMzkwNjI1ZGVnKSBza2V3WSguMzkwNjI1ZGVnKX04OC44JXstd2Via2l0LXRyYW5zZm9ybTpza2V3WCgtLjE5NTMxMjVkZWcpIHNrZXdZKC0uMTk1MzEyNWRlZyk7dHJhbnNmb3JtOnNrZXdYKC0uMTk1MzEyNWRlZykgc2tld1koLS4xOTUzMTI1ZGVnKX19LmFuaW1hdGVfX2plbGxvey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6amVsbG87YW5pbWF0aW9uLW5hbWU6amVsbG87LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcn1ALXdlYmtpdC1rZXlmcmFtZXMgaGVhcnRCZWF0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0xNCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4zKTt0cmFuc2Zvcm06c2NhbGUoMS4zKX0yOCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTQyJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjMpO3RyYW5zZm9ybTpzY2FsZSgxLjMpfTcwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgaGVhcnRCZWF0ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX0xNCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4zKTt0cmFuc2Zvcm06c2NhbGUoMS4zKX0yOCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfTQyJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjMpO3RyYW5zZm9ybTpzY2FsZSgxLjMpfTcwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fS5hbmltYXRlX19oZWFydEJlYXR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpoZWFydEJlYXQ7YW5pbWF0aW9uLW5hbWU6aGVhcnRCZWF0Oy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjEuM3M7YW5pbWF0aW9uLWR1cmF0aW9uOjEuM3M7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSoxLjMpO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pKjEuMyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXR9QC13ZWJraXQta2V5ZnJhbWVzIGJhY2tJbkRvd257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTIwMHB4KSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEyMDBweCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9ODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgYmFja0luRG93bnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMjAwcHgpIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTIwMHB4KSBzY2FsZSguNyk7b3BhY2l0eTouN304MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19LmFuaW1hdGVfX2JhY2tJbkRvd257LXdlYmtpdC1hbmltYXRpb24tbmFtZTpiYWNrSW5Eb3duO2FuaW1hdGlvbi1uYW1lOmJhY2tJbkRvd259QC13ZWJraXQta2V5ZnJhbWVzIGJhY2tJbkxlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjAwMHB4KSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9ODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgYmFja0luTGVmdHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC0yMDAwcHgpIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjAwMHB4KSBzY2FsZSguNyk7b3BhY2l0eTouN304MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19LmFuaW1hdGVfX2JhY2tJbkxlZnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpiYWNrSW5MZWZ0O2FuaW1hdGlvbi1uYW1lOmJhY2tJbkxlZnR9QC13ZWJraXQta2V5ZnJhbWVzIGJhY2tJblJpZ2h0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjAwMHB4KSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMjAwMHB4KSBzY2FsZSguNyk7b3BhY2l0eTouN304MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9dG97LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19QGtleWZyYW1lcyBiYWNrSW5SaWdodHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMDBweCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMDBweCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9ODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fS5hbmltYXRlX19iYWNrSW5SaWdodHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJhY2tJblJpZ2h0O2FuaW1hdGlvbi1uYW1lOmJhY2tJblJpZ2h0fUAtd2Via2l0LWtleWZyYW1lcyBiYWNrSW5VcHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDEyMDBweCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDEyMDBweCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9ODAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlKC43KTtvcGFjaXR5Oi43fXRvey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgYmFja0luVXB7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgxMjAwcHgpIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgxMjAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fTgwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSBzY2FsZSguNyk7b3BhY2l0eTouN310b3std2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX0uYW5pbWF0ZV9fYmFja0luVXB7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpiYWNrSW5VcDthbmltYXRpb24tbmFtZTpiYWNrSW5VcH1ALXdlYmtpdC1rZXlmcmFtZXMgYmFja091dERvd257MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSg3MDBweCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDcwMHB4KSBzY2FsZSguNyk7b3BhY2l0eTouN319QGtleWZyYW1lcyBiYWNrT3V0RG93bnswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTIwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSBzY2FsZSguNyk7b3BhY2l0eTouN310b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDcwMHB4KSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoNzAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fX0uYW5pbWF0ZV9fYmFja091dERvd257LXdlYmtpdC1hbmltYXRpb24tbmFtZTpiYWNrT3V0RG93bjthbmltYXRpb24tbmFtZTpiYWNrT3V0RG93bn1ALXdlYmtpdC1rZXlmcmFtZXMgYmFja091dExlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjAwMHB4KSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9fUBrZXlmcmFtZXMgYmFja091dExlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtMjAwMHB4KSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTIwMDBweCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9fS5hbmltYXRlX19iYWNrT3V0TGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJhY2tPdXRMZWZ0O2FuaW1hdGlvbi1uYW1lOmJhY2tPdXRMZWZ0fUAtd2Via2l0LWtleWZyYW1lcyBiYWNrT3V0UmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDAwcHgpIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgyMDAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fX1Aa2V5ZnJhbWVzIGJhY2tPdXRSaWdodHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTIwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKSBzY2FsZSguNyk7b3BhY2l0eTouN310b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMDBweCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDIwMDBweCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9fS5hbmltYXRlX19iYWNrT3V0UmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpiYWNrT3V0UmlnaHQ7YW5pbWF0aW9uLW5hbWU6YmFja091dFJpZ2h0fUAtd2Via2l0LWtleWZyYW1lcyBiYWNrT3V0VXB7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSBzY2FsZSguNyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNzAwcHgpIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNzAwcHgpIHNjYWxlKC43KTtvcGFjaXR5Oi43fX1Aa2V5ZnJhbWVzIGJhY2tPdXRVcHswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTIwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHNjYWxlKC43KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSBzY2FsZSguNyk7b3BhY2l0eTouN310b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC03MDBweCkgc2NhbGUoLjcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC03MDBweCkgc2NhbGUoLjcpO29wYWNpdHk6Ljd9fS5hbmltYXRlX19iYWNrT3V0VXB7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpiYWNrT3V0VXA7YW5pbWF0aW9uLW5hbWU6YmFja091dFVwfUAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJbnswJSwyMCUsNDAlLDYwJSw4MCUsdG97LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpO3RyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKX0yMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSk7dHJhbnNmb3JtOnNjYWxlM2QoMS4xLDEuMSwxLjEpfTQwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KTt0cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMDMsMS4wMywxLjAzKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjAzLDEuMDMsMS4wMyl9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjk3LC45NywuOTcpO3RyYW5zZm9ybTpzY2FsZTNkKC45NywuOTcsLjk3KX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGVYKDEpO3RyYW5zZm9ybTpzY2FsZVgoMSl9fUBrZXlmcmFtZXMgYm91bmNlSW57MCUsMjAlLDQwJSw2MCUsODAlLHRvey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKTt0cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyl9MjAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4xLDEuMSwxLjEpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKX00MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSk7dHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjAzLDEuMDMsMS4wMyk7dHJhbnNmb3JtOnNjYWxlM2QoMS4wMywxLjAzLDEuMDMpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45NywuOTcsLjk3KTt0cmFuc2Zvcm06c2NhbGUzZCguOTcsLjk3LC45Nyl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlWCgxKTt0cmFuc2Zvcm06c2NhbGVYKDEpfX0uYW5pbWF0ZV9fYm91bmNlSW57LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246Ljc1czthbmltYXRpb24tZHVyYXRpb246Ljc1czstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pKjAuNzUpO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pKjAuNzUpOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6Ym91bmNlSW47YW5pbWF0aW9uLW5hbWU6Ym91bmNlSW59QC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluRG93bnswJSw2MCUsNzUlLDkwJSx0b3std2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMzAwMHB4LDApIHNjYWxlWSgzKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMzAwMHB4LDApIHNjYWxlWSgzKX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjVweCwwKSBzY2FsZVkoLjkpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDI1cHgsMCkgc2NhbGVZKC45KX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTBweCwwKSBzY2FsZVkoLjk1KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTBweCwwKSBzY2FsZVkoLjk1KX05MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw1cHgsMCkgc2NhbGVZKC45ODUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDVweCwwKSBzY2FsZVkoLjk4NSl9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBib3VuY2VJbkRvd257MCUsNjAlLDc1JSw5MCUsdG97LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTMwMDBweCwwKSBzY2FsZVkoMyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTMwMDBweCwwKSBzY2FsZVkoMyl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDI1cHgsMCkgc2NhbGVZKC45KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyNXB4LDApIHNjYWxlWSguOSl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCkgc2NhbGVZKC45NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCkgc2NhbGVZKC45NSl9OTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNXB4LDApIHNjYWxlWSguOTg1KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw1cHgsMCkgc2NhbGVZKC45ODUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19ib3VuY2VJbkRvd257LXdlYmtpdC1hbmltYXRpb24tbmFtZTpib3VuY2VJbkRvd247YW5pbWF0aW9uLW5hbWU6Ym91bmNlSW5Eb3dufUAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJbkxlZnR7MCUsNjAlLDc1JSw5MCUsdG97LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0zMDAwcHgsMCwwKSBzY2FsZVgoMyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0zMDAwcHgsMCwwKSBzY2FsZVgoMyl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgyNXB4LDAsMCkgc2NhbGVYKDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyNXB4LDAsMCkgc2NhbGVYKDEpfTc1JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTBweCwwLDApIHNjYWxlWCguOTgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTBweCwwLDApIHNjYWxlWCguOTgpfTkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCg1cHgsMCwwKSBzY2FsZVgoLjk5NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDVweCwwLDApIHNjYWxlWCguOTk1KX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIGJvdW5jZUluTGVmdHswJSw2MCUsNzUlLDkwJSx0b3std2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTMwMDBweCwwLDApIHNjYWxlWCgzKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTMwMDBweCwwLDApIHNjYWxlWCgzKX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDI1cHgsMCwwKSBzY2FsZVgoMSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDI1cHgsMCwwKSBzY2FsZVgoMSl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMHB4LDAsMCkgc2NhbGVYKC45OCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMHB4LDAsMCkgc2NhbGVYKC45OCl9OTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDVweCwwLDApIHNjYWxlWCguOTk1KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoNXB4LDAsMCkgc2NhbGVYKC45OTUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19ib3VuY2VJbkxlZnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpib3VuY2VJbkxlZnQ7YW5pbWF0aW9uLW5hbWU6Ym91bmNlSW5MZWZ0fUAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VJblJpZ2h0ezAlLDYwJSw3NSUsOTAlLHRvey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgzMDAwcHgsMCwwKSBzY2FsZVgoMyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDMwMDBweCwwLDApIHNjYWxlWCgzKX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yNXB4LDAsMCkgc2NhbGVYKDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjVweCwwLDApIHNjYWxlWCgxKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwwLDApIHNjYWxlWCguOTgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMHB4LDAsMCkgc2NhbGVYKC45OCl9OTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01cHgsMCwwKSBzY2FsZVgoLjk5NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01cHgsMCwwKSBzY2FsZVgoLjk5NSl9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBib3VuY2VJblJpZ2h0ezAlLDYwJSw3NSUsOTAlLHRvey13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpfTAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgzMDAwcHgsMCwwKSBzY2FsZVgoMyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDMwMDBweCwwLDApIHNjYWxlWCgzKX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yNXB4LDAsMCkgc2NhbGVYKDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjVweCwwLDApIHNjYWxlWCgxKX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwwLDApIHNjYWxlWCguOTgpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMHB4LDAsMCkgc2NhbGVYKC45OCl9OTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01cHgsMCwwKSBzY2FsZVgoLjk5NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01cHgsMCwwKSBzY2FsZVgoLjk5NSl9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX2JvdW5jZUluUmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpib3VuY2VJblJpZ2h0O2FuaW1hdGlvbi1uYW1lOmJvdW5jZUluUmlnaHR9QC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZUluVXB7MCUsNjAlLDc1JSw5MCUsdG97LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMjE1LC42MSwuMzU1LDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSl9MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMzAwMHB4LDApIHNjYWxlWSg1KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwzMDAwcHgsMCkgc2NhbGVZKDUpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjBweCwwKSBzY2FsZVkoLjkpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMHB4LDApIHNjYWxlWSguOSl9NzUley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTBweCwwKSBzY2FsZVkoLjk1KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMHB4LDApIHNjYWxlWSguOTUpfTkwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC01cHgsMCkgc2NhbGVZKC45ODUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC01cHgsMCkgc2NhbGVZKC45ODUpfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgYm91bmNlSW5VcHswJSw2MCUsNzUlLDkwJSx0b3std2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4yMTUsLjYxLC4zNTUsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjIxNSwuNjEsLjM1NSwxKX0wJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwzMDAwcHgsMCkgc2NhbGVZKDUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDMwMDBweCwwKSBzY2FsZVkoNSl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMHB4LDApIHNjYWxlWSguOSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwcHgsMCkgc2NhbGVZKC45KX03NSV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMHB4LDApIHNjYWxlWSguOTUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwcHgsMCkgc2NhbGVZKC45NSl9OTAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTVweCwwKSBzY2FsZVkoLjk4NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTVweCwwKSBzY2FsZVkoLjk4NSl9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX2JvdW5jZUluVXB7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpib3VuY2VJblVwO2FuaW1hdGlvbi1uYW1lOmJvdW5jZUluVXB9QC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZU91dHsyMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSk7dHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpfTUwJSw1NSV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4xLDEuMSwxLjEpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyk7dHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpfX1Aa2V5ZnJhbWVzIGJvdW5jZU91dHsyMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSk7dHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpfTUwJSw1NSV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4xLDEuMSwxLjEpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyk7dHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpfX0uYW5pbWF0ZV9fYm91bmNlT3V0ey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi43NXM7YW5pbWF0aW9uLWR1cmF0aW9uOi43NXM7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSowLjc1KTthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSowLjc1KTstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJvdW5jZU91dDthbmltYXRpb24tbmFtZTpib3VuY2VPdXR9QC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZU91dERvd257MjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTBweCwwKSBzY2FsZVkoLjk4NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTBweCwwKSBzY2FsZVkoLjk4NSl9NDAlLDQ1JXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjBweCwwKSBzY2FsZVkoLjkpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMHB4LDApIHNjYWxlWSguOSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApIHNjYWxlWSgzKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyMDAwcHgsMCkgc2NhbGVZKDMpfX1Aa2V5ZnJhbWVzIGJvdW5jZU91dERvd257MjAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTBweCwwKSBzY2FsZVkoLjk4NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTBweCwwKSBzY2FsZVkoLjk4NSl9NDAlLDQ1JXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjBweCwwKSBzY2FsZVkoLjkpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMHB4LDApIHNjYWxlWSguOSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApIHNjYWxlWSgzKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyMDAwcHgsMCkgc2NhbGVZKDMpfX0uYW5pbWF0ZV9fYm91bmNlT3V0RG93bnstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJvdW5jZU91dERvd247YW5pbWF0aW9uLW5hbWU6Ym91bmNlT3V0RG93bn1ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlT3V0TGVmdHsyMCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwcHgsMCwwKSBzY2FsZVgoLjkpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMHB4LDAsMCkgc2NhbGVYKC45KX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwMDBweCwwLDApIHNjYWxlWCgyKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwMDBweCwwLDApIHNjYWxlWCgyKX19QGtleWZyYW1lcyBib3VuY2VPdXRMZWZ0ezIwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjBweCwwLDApIHNjYWxlWCguOSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwcHgsMCwwKSBzY2FsZVgoLjkpfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjAwMHB4LDAsMCkgc2NhbGVYKDIpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjAwMHB4LDAsMCkgc2NhbGVYKDIpfX0uYW5pbWF0ZV9fYm91bmNlT3V0TGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJvdW5jZU91dExlZnQ7YW5pbWF0aW9uLW5hbWU6Ym91bmNlT3V0TGVmdH1ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlT3V0UmlnaHR7MjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjBweCwwLDApIHNjYWxlWCguOSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMHB4LDAsMCkgc2NhbGVYKC45KX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAwMHB4LDAsMCkgc2NhbGVYKDIpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMDAwcHgsMCwwKSBzY2FsZVgoMil9fUBrZXlmcmFtZXMgYm91bmNlT3V0UmlnaHR7MjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjBweCwwLDApIHNjYWxlWCguOSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMHB4LDAsMCkgc2NhbGVYKC45KX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAwMHB4LDAsMCkgc2NhbGVYKDIpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMDAwcHgsMCwwKSBzY2FsZVgoMil9fS5hbmltYXRlX19ib3VuY2VPdXRSaWdodHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmJvdW5jZU91dFJpZ2h0O2FuaW1hdGlvbi1uYW1lOmJvdW5jZU91dFJpZ2h0fUAtd2Via2l0LWtleWZyYW1lcyBib3VuY2VPdXRVcHsyMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTBweCwwKSBzY2FsZVkoLjk4NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCkgc2NhbGVZKC45ODUpfTQwJSw0NSV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjBweCwwKSBzY2FsZVkoLjkpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwcHgsMCkgc2NhbGVZKC45KX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApIHNjYWxlWSgzKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApIHNjYWxlWSgzKX19QGtleWZyYW1lcyBib3VuY2VPdXRVcHsyMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTBweCwwKSBzY2FsZVkoLjk4NSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCkgc2NhbGVZKC45ODUpfTQwJSw0NSV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjBweCwwKSBzY2FsZVkoLjkpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwcHgsMCkgc2NhbGVZKC45KX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApIHNjYWxlWSgzKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApIHNjYWxlWSgzKX19LmFuaW1hdGVfX2JvdW5jZU91dFVwey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6Ym91bmNlT3V0VXA7YW5pbWF0aW9uLW5hbWU6Ym91bmNlT3V0VXB9QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbnswJXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIGZhZGVJbnswJXtvcGFjaXR5OjB9dG97b3BhY2l0eToxfX0uYW5pbWF0ZV9fZmFkZUluey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZUluO2FuaW1hdGlvbi1uYW1lOmZhZGVJbn1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93bnswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBmYWRlSW5Eb3duezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDAlLDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fZmFkZUluRG93bnstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVJbkRvd247YW5pbWF0aW9uLW5hbWU6ZmFkZUluRG93bn1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93bkJpZ3swJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMDAwcHgsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgZmFkZUluRG93bkJpZ3swJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMDAwcHgsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19mYWRlSW5Eb3duQmlney13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZUluRG93bkJpZzthbmltYXRpb24tbmFtZTpmYWRlSW5Eb3duQmlnfUAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5MZWZ0ezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIGZhZGVJbkxlZnR7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19mYWRlSW5MZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZUluTGVmdDthbmltYXRpb24tbmFtZTpmYWRlSW5MZWZ0fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5MZWZ0QmlnezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjAwMHB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMDAwcHgsMCwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBmYWRlSW5MZWZ0QmlnezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjAwMHB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMDAwcHgsMCwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX2ZhZGVJbkxlZnRCaWd7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlSW5MZWZ0QmlnO2FuaW1hdGlvbi1uYW1lOmZhZGVJbkxlZnRCaWd9QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblJpZ2h0ezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBmYWRlSW5SaWdodHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19mYWRlSW5SaWdodHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVJblJpZ2h0O2FuaW1hdGlvbi1uYW1lOmZhZGVJblJpZ2h0fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5SaWdodEJpZ3swJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAwMHB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwMDBweCwwLDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0QmlnezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMDAwcHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAwMHB4LDAsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19mYWRlSW5SaWdodEJpZ3std2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVJblJpZ2h0QmlnO2FuaW1hdGlvbi1uYW1lOmZhZGVJblJpZ2h0QmlnfUAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5VcHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgZmFkZUluVXB7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fZmFkZUluVXB7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlSW5VcDthbmltYXRpb24tbmFtZTpmYWRlSW5VcH1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVXBCaWd7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwMDBweCwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBmYWRlSW5VcEJpZ3swJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwyMDAwcHgsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fZmFkZUluVXBCaWd7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlSW5VcEJpZzthbmltYXRpb24tbmFtZTpmYWRlSW5VcEJpZ31ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluVG9wTGVmdHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLC0xMDAlLDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIGZhZGVJblRvcExlZnR7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLC0xMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX2ZhZGVJblRvcExlZnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlSW5Ub3BMZWZ0O2FuaW1hdGlvbi1uYW1lOmZhZGVJblRvcExlZnR9QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblRvcFJpZ2h0ezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLC0xMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLC0xMDAlLDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIGZhZGVJblRvcFJpZ2h0ezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLC0xMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLC0xMDAlLDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fZmFkZUluVG9wUmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlSW5Ub3BSaWdodDthbmltYXRpb24tbmFtZTpmYWRlSW5Ub3BSaWdodH1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluQm90dG9tTGVmdHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBmYWRlSW5Cb3R0b21MZWZ0ezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwxMDAlLDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fZmFkZUluQm90dG9tTGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVJbkJvdHRvbUxlZnQ7YW5pbWF0aW9uLW5hbWU6ZmFkZUluQm90dG9tTGVmdH1ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluQm90dG9tUmlnaHR7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwxMDAlLDApfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIGZhZGVJbkJvdHRvbVJpZ2h0ezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKX10b3tvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX2ZhZGVJbkJvdHRvbVJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZUluQm90dG9tUmlnaHQ7YW5pbWF0aW9uLW5hbWU6ZmFkZUluQm90dG9tUmlnaHR9QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXR7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MH19QGtleWZyYW1lcyBmYWRlT3V0ezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjB9fS5hbmltYXRlX19mYWRlT3V0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZU91dDthbmltYXRpb24tbmFtZTpmYWRlT3V0fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0RG93bnswJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApfX1Aa2V5ZnJhbWVzIGZhZGVPdXREb3duezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCl9fS5hbmltYXRlX19mYWRlT3V0RG93bnstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVPdXREb3duO2FuaW1hdGlvbi1uYW1lOmZhZGVPdXREb3dufUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0RG93bkJpZ3swJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwMDBweCwwKX19QGtleWZyYW1lcyBmYWRlT3V0RG93bkJpZ3swJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDIwMDBweCwwKX19LmFuaW1hdGVfX2ZhZGVPdXREb3duQmlney13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZU91dERvd25CaWc7YW5pbWF0aW9uLW5hbWU6ZmFkZU91dERvd25CaWd9QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRMZWZ0ezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKX19QGtleWZyYW1lcyBmYWRlT3V0TGVmdHswJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9fS5hbmltYXRlX19mYWRlT3V0TGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVPdXRMZWZ0O2FuaW1hdGlvbi1uYW1lOmZhZGVPdXRMZWZ0fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0TGVmdEJpZ3swJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0yMDAwcHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwMDBweCwwLDApfX1Aa2V5ZnJhbWVzIGZhZGVPdXRMZWZ0QmlnezAle29wYWNpdHk6MX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTIwMDBweCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMjAwMHB4LDAsMCl9fS5hbmltYXRlX19mYWRlT3V0TGVmdEJpZ3std2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVPdXRMZWZ0QmlnO2FuaW1hdGlvbi1uYW1lOmZhZGVPdXRMZWZ0QmlnfUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0UmlnaHR7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKX19QGtleWZyYW1lcyBmYWRlT3V0UmlnaHR7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKX19LmFuaW1hdGVfX2ZhZGVPdXRSaWdodHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVPdXRSaWdodDthbmltYXRpb24tbmFtZTpmYWRlT3V0UmlnaHR9QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRSaWdodEJpZ3swJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDIwMDBweCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMDAwcHgsMCwwKX19QGtleWZyYW1lcyBmYWRlT3V0UmlnaHRCaWd7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgyMDAwcHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMjAwMHB4LDAsMCl9fS5hbmltYXRlX19mYWRlT3V0UmlnaHRCaWd7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlT3V0UmlnaHRCaWc7YW5pbWF0aW9uLW5hbWU6ZmFkZU91dFJpZ2h0QmlnfUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0VXB7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDAlLDApfX1Aa2V5ZnJhbWVzIGZhZGVPdXRVcHswJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCl9fS5hbmltYXRlX19mYWRlT3V0VXB7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlT3V0VXA7YW5pbWF0aW9uLW5hbWU6ZmFkZU91dFVwfUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0VXBCaWd7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMDAwcHgsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKX19QGtleWZyYW1lcyBmYWRlT3V0VXBCaWd7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0yMDAwcHgsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKX19LmFuaW1hdGVfX2ZhZGVPdXRVcEJpZ3std2Via2l0LWFuaW1hdGlvbi1uYW1lOmZhZGVPdXRVcEJpZzthbmltYXRpb24tbmFtZTpmYWRlT3V0VXBCaWd9QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRUb3BMZWZ0ezAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsLTEwMCUsMCl9fUBrZXlmcmFtZXMgZmFkZU91dFRvcExlZnR7MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLC0xMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKX19LmFuaW1hdGVfX2ZhZGVPdXRUb3BMZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZU91dFRvcExlZnQ7YW5pbWF0aW9uLW5hbWU6ZmFkZU91dFRvcExlZnR9QC13ZWJraXQta2V5ZnJhbWVzIGZhZGVPdXRUb3BSaWdodHswJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKX19QGtleWZyYW1lcyBmYWRlT3V0VG9wUmlnaHR7MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsLTEwMCUsMCl9fS5hbmltYXRlX19mYWRlT3V0VG9wUmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlT3V0VG9wUmlnaHQ7YW5pbWF0aW9uLW5hbWU6ZmFkZU91dFRvcFJpZ2h0fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0Qm90dG9tUmlnaHR7MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwxMDAlLDApfX1Aa2V5ZnJhbWVzIGZhZGVPdXRCb3R0b21SaWdodHswJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDEwMCUsMCl9fS5hbmltYXRlX19mYWRlT3V0Qm90dG9tUmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpmYWRlT3V0Qm90dG9tUmlnaHQ7YW5pbWF0aW9uLW5hbWU6ZmFkZU91dEJvdHRvbVJpZ2h0fUAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0Qm90dG9tTGVmdHswJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKX19QGtleWZyYW1lcyBmYWRlT3V0Qm90dG9tTGVmdHswJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKX19LmFuaW1hdGVfX2ZhZGVPdXRCb3R0b21MZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmFkZU91dEJvdHRvbUxlZnQ7YW5pbWF0aW9uLW5hbWU6ZmFkZU91dEJvdHRvbUxlZnR9QC13ZWJraXQta2V5ZnJhbWVzIGZsaXB7MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlWCgxKSB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoLTF0dXJuKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlWCgxKSB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoLTF0dXJuKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH00MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlWCgxKSB0cmFuc2xhdGVaKDE1MHB4KSByb3RhdGVZKC0xOTBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGVYKDEpIHRyYW5zbGF0ZVooMTUwcHgpIHJvdGF0ZVkoLTE5MGRlZyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9NTAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigxNTBweCkgcm90YXRlWSgtMTcwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlWCgxKSB0cmFuc2xhdGVaKDE1MHB4KSByb3RhdGVZKC0xNzBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn04MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoLjk1LC45NSwuOTUpIHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoLjk1LC45NSwuOTUpIHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59dG97LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlWCgxKSB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn19QGtleWZyYW1lcyBmbGlwezAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigwKSByb3RhdGVZKC0xdHVybik7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigwKSByb3RhdGVZKC0xdHVybik7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXR9NDAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigxNTBweCkgcm90YXRlWSgtMTkwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlWCgxKSB0cmFuc2xhdGVaKDE1MHB4KSByb3RhdGVZKC0xOTBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0fTUwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGVYKDEpIHRyYW5zbGF0ZVooMTUwcHgpIHJvdGF0ZVkoLTE3MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigxNTBweCkgcm90YXRlWSgtMTcwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59ODAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKC45NSwuOTUsLjk1KSB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKC45NSwuOTUsLjk1KSB0cmFuc2xhdGVaKDApIHJvdGF0ZVkoMGRlZyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufXRvey13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZVgoMSkgdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgc2NhbGVYKDEpIHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59fS5hbmltYXRlX19hbmltYXRlZC5hbmltYXRlX19mbGlwey13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTp2aXNpYmxlO2JhY2tmYWNlLXZpc2liaWxpdHk6dmlzaWJsZTstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZsaXA7YW5pbWF0aW9uLW5hbWU6ZmxpcH1ALXdlYmtpdC1rZXlmcmFtZXMgZmxpcEluWHswJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47b3BhY2l0eTowfTQwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMjBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtMjBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn02MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoMTBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgxMGRlZyk7b3BhY2l0eToxfTgwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgtNWRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC01ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KX19QGtleWZyYW1lcyBmbGlwSW5YezAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjtvcGFjaXR5OjB9NDAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0yMGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0yMGRlZyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufTYwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCgxMGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDEwZGVnKTtvcGFjaXR5OjF9ODAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC01ZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpfX0uYW5pbWF0ZV9fZmxpcEluWHstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6dmlzaWJsZSFpbXBvcnRhbnQ7YmFja2ZhY2UtdmlzaWJpbGl0eTp2aXNpYmxlIWltcG9ydGFudDstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZsaXBJblg7YW5pbWF0aW9uLW5hbWU6ZmxpcEluWH1ALXdlYmtpdC1rZXlmcmFtZXMgZmxpcEluWXswJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSg5MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDkwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47b3BhY2l0eTowfTQwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtMjBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtMjBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn02MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoMTBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgxMGRlZyk7b3BhY2l0eToxfTgwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtNWRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKC01ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KX19QGtleWZyYW1lcyBmbGlwSW5ZezAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDkwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoOTBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjtvcGFjaXR5OjB9NDAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKC0yMGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKC0yMGRlZyk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW47YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWlufTYwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgxMGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDEwZGVnKTtvcGFjaXR5OjF9ODAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKC01ZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoLTVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpfX0uYW5pbWF0ZV9fZmxpcEluWXstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6dmlzaWJsZSFpbXBvcnRhbnQ7YmFja2ZhY2UtdmlzaWJpbGl0eTp2aXNpYmxlIWltcG9ydGFudDstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZsaXBJblk7YW5pbWF0aW9uLW5hbWU6ZmxpcEluWX1ALXdlYmtpdC1rZXlmcmFtZXMgZmxpcE91dFh7MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCl9MzAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0yMGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKC0yMGRlZyk7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVYKDkwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO29wYWNpdHk6MH19QGtleWZyYW1lcyBmbGlwT3V0WHswJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KX0zMCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTIwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoLTIwZGVnKTtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVgoOTBkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWCg5MGRlZyk7b3BhY2l0eTowfX0uYW5pbWF0ZV9fZmxpcE91dFh7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246Ljc1czthbmltYXRpb24tZHVyYXRpb246Ljc1czstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pKjAuNzUpO2FuaW1hdGlvbi1kdXJhdGlvbjpjYWxjKHZhcigtLWFuaW1hdGUtZHVyYXRpb24pKjAuNzUpOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6ZmxpcE91dFg7YW5pbWF0aW9uLW5hbWU6ZmxpcE91dFg7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OnZpc2libGUhaW1wb3J0YW50O2JhY2tmYWNlLXZpc2liaWxpdHk6dmlzaWJsZSFpbXBvcnRhbnR9QC13ZWJraXQta2V5ZnJhbWVzIGZsaXBPdXRZezAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpfTMwJXstd2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtMTVkZWcpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSgtMTVkZWcpO29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlWSg5MGRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDkwZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgZmxpcE91dFl7MCV7LXdlYmtpdC10cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpO3RyYW5zZm9ybTpwZXJzcGVjdGl2ZSg0MDBweCl9MzAley13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKC0xNWRlZyk7dHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKC0xNWRlZyk7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGVZKDkwZGVnKTt0cmFuc2Zvcm06cGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZVkoOTBkZWcpO29wYWNpdHk6MH19LmFuaW1hdGVfX2ZsaXBPdXRZey13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOi43NXM7YW5pbWF0aW9uLWR1cmF0aW9uOi43NXM7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSowLjc1KTthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSowLjc1KTstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6dmlzaWJsZSFpbXBvcnRhbnQ7YmFja2ZhY2UtdmlzaWJpbGl0eTp2aXNpYmxlIWltcG9ydGFudDstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmZsaXBPdXRZO2FuaW1hdGlvbi1uYW1lOmZsaXBPdXRZfUAtd2Via2l0LWtleWZyYW1lcyBsaWdodFNwZWVkSW5SaWdodHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCkgc2tld1goLTMwZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApIHNrZXdYKC0zMGRlZyk7b3BhY2l0eTowfTYwJXstd2Via2l0LXRyYW5zZm9ybTpza2V3WCgyMGRlZyk7dHJhbnNmb3JtOnNrZXdYKDIwZGVnKTtvcGFjaXR5OjF9ODAley13ZWJraXQtdHJhbnNmb3JtOnNrZXdYKC01ZGVnKTt0cmFuc2Zvcm06c2tld1goLTVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgbGlnaHRTcGVlZEluUmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApIHNrZXdYKC0zMGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKSBza2V3WCgtMzBkZWcpO29wYWNpdHk6MH02MCV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goMjBkZWcpO3RyYW5zZm9ybTpza2V3WCgyMGRlZyk7b3BhY2l0eToxfTgwJXstd2Via2l0LXRyYW5zZm9ybTpza2V3WCgtNWRlZyk7dHJhbnNmb3JtOnNrZXdYKC01ZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fbGlnaHRTcGVlZEluUmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpsaWdodFNwZWVkSW5SaWdodDthbmltYXRpb24tbmFtZTpsaWdodFNwZWVkSW5SaWdodDstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dH1ALXdlYmtpdC1rZXlmcmFtZXMgbGlnaHRTcGVlZEluTGVmdHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApIHNrZXdYKDMwZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKSBza2V3WCgzMGRlZyk7b3BhY2l0eTowfTYwJXstd2Via2l0LXRyYW5zZm9ybTpza2V3WCgtMjBkZWcpO3RyYW5zZm9ybTpza2V3WCgtMjBkZWcpO29wYWNpdHk6MX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goNWRlZyk7dHJhbnNmb3JtOnNrZXdYKDVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fUBrZXlmcmFtZXMgbGlnaHRTcGVlZEluTGVmdHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApIHNrZXdYKDMwZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKSBza2V3WCgzMGRlZyk7b3BhY2l0eTowfTYwJXstd2Via2l0LXRyYW5zZm9ybTpza2V3WCgtMjBkZWcpO3RyYW5zZm9ybTpza2V3WCgtMjBkZWcpO29wYWNpdHk6MX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2tld1goNWRlZyk7dHJhbnNmb3JtOnNrZXdYKDVkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19saWdodFNwZWVkSW5MZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6bGlnaHRTcGVlZEluTGVmdDthbmltYXRpb24tbmFtZTpsaWdodFNwZWVkSW5MZWZ0Oy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0fUAtd2Via2l0LWtleWZyYW1lcyBsaWdodFNwZWVkT3V0UmlnaHR7MCV7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKSBza2V3WCgzMGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKSBza2V3WCgzMGRlZyk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIGxpZ2h0U3BlZWRPdXRSaWdodHswJXtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApIHNrZXdYKDMwZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApIHNrZXdYKDMwZGVnKTtvcGFjaXR5OjB9fS5hbmltYXRlX19saWdodFNwZWVkT3V0UmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpsaWdodFNwZWVkT3V0UmlnaHQ7YW5pbWF0aW9uLW5hbWU6bGlnaHRTcGVlZE91dFJpZ2h0Oy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbn1ALXdlYmtpdC1rZXlmcmFtZXMgbGlnaHRTcGVlZE91dExlZnR7MCV7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCkgc2tld1goLTMwZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKSBza2V3WCgtMzBkZWcpO29wYWNpdHk6MH19QGtleWZyYW1lcyBsaWdodFNwZWVkT3V0TGVmdHswJXtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKSBza2V3WCgtMzBkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApIHNrZXdYKC0zMGRlZyk7b3BhY2l0eTowfX0uYW5pbWF0ZV9fbGlnaHRTcGVlZE91dExlZnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpsaWdodFNwZWVkT3V0TGVmdDthbmltYXRpb24tbmFtZTpsaWdodFNwZWVkT3V0TGVmdDstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbjthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW59QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZUluezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMjAwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0yMDBkZWcpO29wYWNpdHk6MH10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO29wYWNpdHk6MX19QGtleWZyYW1lcyByb3RhdGVJbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTIwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMjAwZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjF9fS5hbmltYXRlX19yb3RhdGVJbnstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnJvdGF0ZUluO2FuaW1hdGlvbi1uYW1lOnJvdGF0ZUluOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXJ9QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZUluRG93bkxlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO29wYWNpdHk6MH10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO29wYWNpdHk6MX19QGtleWZyYW1lcyByb3RhdGVJbkRvd25MZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjF9fS5hbmltYXRlX19yb3RhdGVJbkRvd25MZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6cm90YXRlSW5Eb3duTGVmdDthbmltYXRpb24tbmFtZTpyb3RhdGVJbkRvd25MZWZ0Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IGJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgYm90dG9tfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJbkRvd25SaWdodHswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO29wYWNpdHk6MH10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO29wYWNpdHk6MX19QGtleWZyYW1lcyByb3RhdGVJbkRvd25SaWdodHswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO29wYWNpdHk6MH10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO29wYWNpdHk6MX19LmFuaW1hdGVfX3JvdGF0ZUluRG93blJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6cm90YXRlSW5Eb3duUmlnaHQ7YW5pbWF0aW9uLW5hbWU6cm90YXRlSW5Eb3duUmlnaHQ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IGJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IGJvdHRvbX1ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlSW5VcExlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgcm90YXRlSW5VcExlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtvcGFjaXR5OjB9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjF9fS5hbmltYXRlX19yb3RhdGVJblVwTGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnJvdGF0ZUluVXBMZWZ0O2FuaW1hdGlvbi1uYW1lOnJvdGF0ZUluVXBMZWZ0Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IGJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgYm90dG9tfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVJblVwUmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC05MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpO29wYWNpdHk6MH10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO29wYWNpdHk6MX19QGtleWZyYW1lcyByb3RhdGVJblVwUmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC05MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpO29wYWNpdHk6MH10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO29wYWNpdHk6MX19LmFuaW1hdGVfX3JvdGF0ZUluVXBSaWdodHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnJvdGF0ZUluVXBSaWdodDthbmltYXRpb24tbmFtZTpyb3RhdGVJblVwUmlnaHQ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IGJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IGJvdHRvbX1ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlT3V0ezAle29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMjAwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDIwMGRlZyk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIHJvdGF0ZU91dHswJXtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDIwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgyMDBkZWcpO29wYWNpdHk6MH19LmFuaW1hdGVfX3JvdGF0ZU91dHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnJvdGF0ZU91dDthbmltYXRpb24tbmFtZTpyb3RhdGVPdXQ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcn1ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlT3V0RG93bkxlZnR7MCV7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIHJvdGF0ZU91dERvd25MZWZ0ezAle29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO29wYWNpdHk6MH19LmFuaW1hdGVfX3JvdGF0ZU91dERvd25MZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6cm90YXRlT3V0RG93bkxlZnQ7YW5pbWF0aW9uLW5hbWU6cm90YXRlT3V0RG93bkxlZnQ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgYm90dG9tO3RyYW5zZm9ybS1vcmlnaW46bGVmdCBib3R0b219QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dERvd25SaWdodHswJXtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO29wYWNpdHk6MH19QGtleWZyYW1lcyByb3RhdGVPdXREb3duUmlnaHR7MCV7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTtvcGFjaXR5OjB9fS5hbmltYXRlX19yb3RhdGVPdXREb3duUmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpyb3RhdGVPdXREb3duUmlnaHQ7YW5pbWF0aW9uLW5hbWU6cm90YXRlT3V0RG93blJpZ2h0Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpyaWdodCBib3R0b207dHJhbnNmb3JtLW9yaWdpbjpyaWdodCBib3R0b219QC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZU91dFVwTGVmdHswJXtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO29wYWNpdHk6MH19QGtleWZyYW1lcyByb3RhdGVPdXRVcExlZnR7MCV7b3BhY2l0eToxfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTtvcGFjaXR5OjB9fS5hbmltYXRlX19yb3RhdGVPdXRVcExlZnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpyb3RhdGVPdXRVcExlZnQ7YW5pbWF0aW9uLW5hbWU6cm90YXRlT3V0VXBMZWZ0Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpsZWZ0IGJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOmxlZnQgYm90dG9tfUAtd2Via2l0LWtleWZyYW1lcyByb3RhdGVPdXRVcFJpZ2h0ezAle29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO29wYWNpdHk6MH19QGtleWZyYW1lcyByb3RhdGVPdXRVcFJpZ2h0ezAle29wYWNpdHk6MX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoOTBkZWcpO29wYWNpdHk6MH19LmFuaW1hdGVfX3JvdGF0ZU91dFVwUmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpyb3RhdGVPdXRVcFJpZ2h0O2FuaW1hdGlvbi1uYW1lOnJvdGF0ZU91dFVwUmlnaHQ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IGJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOnJpZ2h0IGJvdHRvbX1ALXdlYmtpdC1rZXlmcmFtZXMgaGluZ2V7MCV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXR9MjAlLDYwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoODBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0fTQwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDYwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw3MDBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw3MDBweCwwKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgaGluZ2V7MCV7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXR9MjAlLDYwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoODBkZWcpOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0fTQwJSw4MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDYwZGVnKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDtvcGFjaXR5OjF9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw3MDBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw3MDBweCwwKTtvcGFjaXR5OjB9fS5hbmltYXRlX19oaW5nZXstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoyczthbmltYXRpb24tZHVyYXRpb246MnM7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSoyKTthbmltYXRpb24tZHVyYXRpb246Y2FsYyh2YXIoLS1hbmltYXRlLWR1cmF0aW9uKSoyKTstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmhpbmdlO2FuaW1hdGlvbi1uYW1lOmhpbmdlOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjp0b3AgbGVmdDt0cmFuc2Zvcm0tb3JpZ2luOnRvcCBsZWZ0fUAtd2Via2l0LWtleWZyYW1lcyBqYWNrSW5UaGVCb3h7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4xKSByb3RhdGUoMzBkZWcpO3RyYW5zZm9ybTpzY2FsZSguMSkgcm90YXRlKDMwZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b219NTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTEwZGVnKX03MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDNkZWcpO3RyYW5zZm9ybTpyb3RhdGUoM2RlZyl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBqYWNrSW5UaGVCb3h7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4xKSByb3RhdGUoMzBkZWcpO3RyYW5zZm9ybTpzY2FsZSguMSkgcm90YXRlKDMwZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b219NTAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMTBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTEwZGVnKX03MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDNkZWcpO3RyYW5zZm9ybTpyb3RhdGUoM2RlZyl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19LmFuaW1hdGVfX2phY2tJblRoZUJveHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmphY2tJblRoZUJveDthbmltYXRpb24tbmFtZTpqYWNrSW5UaGVCb3h9QC13ZWJraXQta2V5ZnJhbWVzIHJvbGxJbnswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKSByb3RhdGUoLTEyMGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCkgcm90YXRlKC0xMjBkZWcpfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIHJvbGxJbnswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKSByb3RhdGUoLTEyMGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCkgcm90YXRlKC0xMjBkZWcpfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fcm9sbEluey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6cm9sbEluO2FuaW1hdGlvbi1uYW1lOnJvbGxJbn1ALXdlYmtpdC1rZXlmcmFtZXMgcm9sbE91dHswJXtvcGFjaXR5OjF9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKSByb3RhdGUoMTIwZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApIHJvdGF0ZSgxMjBkZWcpfX1Aa2V5ZnJhbWVzIHJvbGxPdXR7MCV7b3BhY2l0eToxfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCkgcm90YXRlKDEyMGRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKSByb3RhdGUoMTIwZGVnKX19LmFuaW1hdGVfX3JvbGxPdXR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpyb2xsT3V0O2FuaW1hdGlvbi1uYW1lOnJvbGxPdXR9QC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbnswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyk7dHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpfTUwJXtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgem9vbUluezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKTt0cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyl9NTAle29wYWNpdHk6MX19LmFuaW1hdGVfX3pvb21Jbnstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnpvb21JbjthbmltYXRpb24tbmFtZTp6b29tSW59QC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbkRvd257MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsLTEwMDBweCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoMCwtMTAwMHB4LDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDAsNjBweCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMCw2MHB4LDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpfX1Aa2V5ZnJhbWVzIHpvb21JbkRvd257MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsLTEwMDBweCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoMCwtMTAwMHB4LDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDAsNjBweCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMCw2MHB4LDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpfX0uYW5pbWF0ZV9fem9vbUluRG93bnstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnpvb21JbkRvd247YW5pbWF0aW9uLW5hbWU6em9vbUluRG93bn1ALXdlYmtpdC1rZXlmcmFtZXMgem9vbUluTGVmdHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoLTEwMDBweCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgtMTAwMHB4LDAsMCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMTBweCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgxMHB4LDAsMCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSl9fUBrZXlmcmFtZXMgem9vbUluTGVmdHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoLTEwMDBweCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgtMTAwMHB4LDAsMCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMTBweCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgxMHB4LDAsMCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSl9fS5hbmltYXRlX196b29tSW5MZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6em9vbUluTGVmdDthbmltYXRpb24tbmFtZTp6b29tSW5MZWZ0fUAtd2Via2l0LWtleWZyYW1lcyB6b29tSW5SaWdodHswJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoMTAwMHB4LDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDEwMDBweCwwLDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KX02MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKC0xMHB4LDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKC0xMHB4LDAsMCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSl9fUBrZXlmcmFtZXMgem9vbUluUmlnaHR7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDEwMDBweCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgxMDAwcHgsMCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgtMTBweCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgtMTBweCwwLDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpfX0uYW5pbWF0ZV9fem9vbUluUmlnaHR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTp6b29tSW5SaWdodDthbmltYXRpb24tbmFtZTp6b29tSW5SaWdodH1ALXdlYmtpdC1rZXlmcmFtZXMgem9vbUluVXB7MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsMTAwMHB4LDApO3RyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgwLDEwMDBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSl9NjAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgwLC02MHB4LDApO3RyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgwLC02MHB4LDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpfX1Aa2V5ZnJhbWVzIHpvb21JblVwezAle29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgwLDEwMDBweCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoMCwxMDAwcHgsMCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpfTYwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMCwtNjBweCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMCwtNjBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKX19LmFuaW1hdGVfX3pvb21JblVwey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6em9vbUluVXA7YW5pbWF0aW9uLW5hbWU6em9vbUluVXB9QC13ZWJraXQta2V5ZnJhbWVzIHpvb21PdXR7MCV7b3BhY2l0eToxfTUwJXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMywuMywuMyk7dHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpfXRve29wYWNpdHk6MH19QGtleWZyYW1lcyB6b29tT3V0ezAle29wYWNpdHk6MX01MCV7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjMsLjMsLjMpO3RyYW5zZm9ybTpzY2FsZTNkKC4zLC4zLC4zKX10b3tvcGFjaXR5OjB9fS5hbmltYXRlX196b29tT3V0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6em9vbU91dDthbmltYXRpb24tbmFtZTp6b29tT3V0fUAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0RG93bns0MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDAsLTYwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDAsLTYwcHgsMCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSk7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpfXRve29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgwLDIwMDBweCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoMCwyMDAwcHgsMCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSl9fUBrZXlmcmFtZXMgem9vbU91dERvd257NDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgwLC02MHB4LDApO3RyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgwLC02MHB4LDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoMCwyMDAwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsMjAwMHB4LDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpfX0uYW5pbWF0ZV9fem9vbU91dERvd257LXdlYmtpdC1hbmltYXRpb24tbmFtZTp6b29tT3V0RG93bjthbmltYXRpb24tbmFtZTp6b29tT3V0RG93bjstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGJvdHRvbTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBib3R0b219QC13ZWJraXQta2V5ZnJhbWVzIHpvb21PdXRMZWZ0ezQwJXtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoNDJweCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCg0MnB4LDAsMCl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4xKSB0cmFuc2xhdGUzZCgtMjAwMHB4LDAsMCk7dHJhbnNmb3JtOnNjYWxlKC4xKSB0cmFuc2xhdGUzZCgtMjAwMHB4LDAsMCl9fUBrZXlmcmFtZXMgem9vbU91dExlZnR7NDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCg0MnB4LDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDQycHgsMCwwKX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjEpIHRyYW5zbGF0ZTNkKC0yMDAwcHgsMCwwKTt0cmFuc2Zvcm06c2NhbGUoLjEpIHRyYW5zbGF0ZTNkKC0yMDAwcHgsMCwwKX19LmFuaW1hdGVfX3pvb21PdXRMZWZ0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6em9vbU91dExlZnQ7YW5pbWF0aW9uLW5hbWU6em9vbU91dExlZnQ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmxlZnQgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46bGVmdCBjZW50ZXJ9QC13ZWJraXQta2V5ZnJhbWVzIHpvb21PdXRSaWdodHs0MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKC00MnB4LDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKC00MnB4LDAsMCl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4xKSB0cmFuc2xhdGUzZCgyMDAwcHgsMCwwKTt0cmFuc2Zvcm06c2NhbGUoLjEpIHRyYW5zbGF0ZTNkKDIwMDBweCwwLDApfX1Aa2V5ZnJhbWVzIHpvb21PdXRSaWdodHs0MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKC00MnB4LDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKC00MnB4LDAsMCl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC4xKSB0cmFuc2xhdGUzZCgyMDAwcHgsMCwwKTt0cmFuc2Zvcm06c2NhbGUoLjEpIHRyYW5zbGF0ZTNkKDIwMDBweCwwLDApfX0uYW5pbWF0ZV9fem9vbU91dFJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6em9vbU91dFJpZ2h0O2FuaW1hdGlvbi1uYW1lOnpvb21PdXRSaWdodDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46cmlnaHQgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46cmlnaHQgY2VudGVyfUAtd2Via2l0LWtleWZyYW1lcyB6b29tT3V0VXB7NDAle29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC40NzUsLjQ3NSwuNDc1KSB0cmFuc2xhdGUzZCgwLDYwcHgsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDAsNjBweCwwKTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguNTUsLjA1NSwuNjc1LC4xOSl9dG97b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjEsLjEsLjEpIHRyYW5zbGF0ZTNkKDAsLTIwMDBweCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxKTthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpfX1Aa2V5ZnJhbWVzIHpvb21PdXRVcHs0MCV7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjQ3NSwuNDc1LC40NzUpIHRyYW5zbGF0ZTNkKDAsNjBweCwwKTt0cmFuc2Zvcm06c2NhbGUzZCguNDc1LC40NzUsLjQ3NSkgdHJhbnNsYXRlM2QoMCw2MHB4LDApOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpjdWJpYy1iZXppZXIoLjU1LC4wNTUsLjY3NSwuMTkpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC41NSwuMDU1LC42NzUsLjE5KX10b3tvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguMSwuMSwuMSkgdHJhbnNsYXRlM2QoMCwtMjAwMHB4LDApO3RyYW5zZm9ybTpzY2FsZTNkKC4xLC4xLC4xKSB0cmFuc2xhdGUzZCgwLC0yMDAwcHgsMCk7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmN1YmljLWJlemllciguMTc1LC44ODUsLjMyLDEpO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246Y3ViaWMtYmV6aWVyKC4xNzUsLjg4NSwuMzIsMSl9fS5hbmltYXRlX196b29tT3V0VXB7LXdlYmtpdC1hbmltYXRpb24tbmFtZTp6b29tT3V0VXA7YW5pbWF0aW9uLW5hbWU6em9vbU91dFVwOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgYm90dG9tO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGJvdHRvbX1ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJbkRvd257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBzbGlkZUluRG93bnswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDAlLDApO3Zpc2liaWxpdHk6dmlzaWJsZX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fc2xpZGVJbkRvd257LXdlYmtpdC1hbmltYXRpb24tbmFtZTpzbGlkZUluRG93bjthbmltYXRpb24tbmFtZTpzbGlkZUluRG93bn1ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJbkxlZnR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBzbGlkZUluTGVmdHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3Zpc2liaWxpdHk6dmlzaWJsZX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX0uYW5pbWF0ZV9fc2xpZGVJbkxlZnR7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpzbGlkZUluTGVmdDthbmltYXRpb24tbmFtZTpzbGlkZUluTGVmdH1ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGVJblJpZ2h0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3Zpc2liaWxpdHk6dmlzaWJsZX10b3std2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfX1Aa2V5ZnJhbWVzIHNsaWRlSW5SaWdodHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19LmFuaW1hdGVfX3NsaWRlSW5SaWdodHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnNsaWRlSW5SaWdodDthbmltYXRpb24tbmFtZTpzbGlkZUluUmlnaHR9QC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlSW5VcHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt2aXNpYmlsaXR5OnZpc2libGV9dG97LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX19QGtleWZyYW1lcyBzbGlkZUluVXB7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dmlzaWJpbGl0eTp2aXNpYmxlfXRvey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9fS5hbmltYXRlX19zbGlkZUluVXB7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpzbGlkZUluVXA7YW5pbWF0aW9uLW5hbWU6c2xpZGVJblVwfUAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dERvd257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKX19QGtleWZyYW1lcyBzbGlkZU91dERvd257MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKX19LmFuaW1hdGVfX3NsaWRlT3V0RG93bnstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnNsaWRlT3V0RG93bjthbmltYXRpb24tbmFtZTpzbGlkZU91dERvd259QC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlT3V0TGVmdHswJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApfXRve3Zpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9fUBrZXlmcmFtZXMgc2xpZGVPdXRMZWZ0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97dmlzaWJpbGl0eTpoaWRkZW47LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKX19LmFuaW1hdGVfX3NsaWRlT3V0TGVmdHstd2Via2l0LWFuaW1hdGlvbi1uYW1lOnNsaWRlT3V0TGVmdDthbmltYXRpb24tbmFtZTpzbGlkZU91dExlZnR9QC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlT3V0UmlnaHR7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX10b3t2aXNpYmlsaXR5OmhpZGRlbjstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKX19QGtleWZyYW1lcyBzbGlkZU91dFJpZ2h0ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97dmlzaWJpbGl0eTpoaWRkZW47LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCl9fS5hbmltYXRlX19zbGlkZU91dFJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uLW5hbWU6c2xpZGVPdXRSaWdodDthbmltYXRpb24tbmFtZTpzbGlkZU91dFJpZ2h0fUAtd2Via2l0LWtleWZyYW1lcyBzbGlkZU91dFVwezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97dmlzaWJpbGl0eTpoaWRkZW47LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKX19QGtleWZyYW1lcyBzbGlkZU91dFVwezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9dG97dmlzaWJpbGl0eTpoaWRkZW47LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKX19LmFuaW1hdGVfX3NsaWRlT3V0VXB7LXdlYmtpdC1hbmltYXRpb24tbmFtZTpzbGlkZU91dFVwO2FuaW1hdGlvbi1uYW1lOnNsaWRlT3V0VXB9IiwiQGltcG9ydCAnfmFuaW1hdGUuY3NzL2FuaW1hdGUubWluJztcclxuXHJcblxyXG4uZ2V0LWluLXRvdWNoOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1LDE1MCwyNTUsLjkpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC43cztcclxufVxyXG4ucGFnZS1hY3RpdmV7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlLW91dDtcclxuICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG9wYWNpdHk6IC42O1xyXG59XHJcbi5hYWR1IHtcclxuICAgIGxlZnQ6LTMxcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7ICovXHJcbiAgLyogdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgKi9cclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gIC8qIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2Utb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLW91dDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLW91dDsgKi9cclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1vdXQ7XHJcbiAgYm90dG9tOiA0M3B4O1xyXG4gIGZvbnQtc2l6ZToyNHB4IDtcclxuICBcclxuXHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { TestyComponent } from './testy/testy.component';
const routes = [
    // {
    //   path: 'work',
    //   loadChildren: () => import('./work/work.module').then(m => m.WorkModule)
    // },
    // {
    //   path: 'shared',
    //   loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
    // },
    // {
    //   path: 'developments',
    //   loadChildren: () => import('./developments/developments.module').then(m => m.DevelopmentsModule)
    // },
    // {
    //   path: 'general',
    //   loadChildren: () => import('./general/general.module').then(m => m.GeneralModule)
    // },
    { path: '', redirectTo: '', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "viZE":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/services.component.ts ***!
  \*******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wow */ "ME1z");
/* harmony import */ var _technology_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./technology.service */ "7s1k");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
// import { NgxSpinnerService } from 'ngx-spinner';







const _c0 = function (a1, a2) { return ["/services", a1, a2]; };
function ServicesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ServicesComponent_div_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const techh_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.setDocTitle("Services - " + techh_r1.service_name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Discover");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const techh_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, techh_r1.id, techh_r1.service_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", techh_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](techh_r1.service_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", techh_r1.service_description, " ");
} }
// import * as WOW from 'wowjs';
class ServicesComponent {
    // ,private spinner: NgxSpinnerService
    constructor(wowService, techService, titleSer) {
        this.wowService = wowService;
        this.techService = techService;
        this.titleSer = titleSer;
        this.wowService.init();
    }
    setDocTitle(title) {
        // console.log('current title:::::' + this.titleSer.getTitle());
        this.titleSer.setTitle(title);
    }
    ngOnInit() {
        this.getTech();
        aos__WEBPACK_IMPORTED_MODULE_0__["init"]();
        // AOS.init({
        //   // duration:2000
        //   delay: 500,
        //   easing: 'ease-in-out'
        // });
    }
    getTech() {
        //  this.spinner.show();
        this.techService.getTechnology().subscribe((res) => {
            // console.log(res);
            this.techy = res.data;
            console.log(this.techy);
            // this.spinner.hide();
            // this.sk=res.data;
            // console.log(this.sk);
        });
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_technology_service__WEBPACK_IMPORTED_MODULE_3__["TechnologyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"])); };
ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 6, vars: 1, consts: [[1, "services"], [1, "container"], ["data-aos", "flip-right", "data-aos-duration", "2000", 1, "sec-title"], [1, "row", "MT50"], ["class", "col-4", 4, "ngFor", "ngForOf"], [1, "col-4"], ["data-wow-duration", "1s", "data-aos", "flip-left", "data-aos-duration", "2000", "onclick", "window.scrollTo(0, 0);", 1, "hehe", 3, "routerLink", "click"], [1, "common"], ["height", "100%", "width", "100%", "alt", "", 3, "src"], [1, "valign"], [1, "proxima"], [1, "line"], [1, "service-content"], [1, "button"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ServicesComponent_div_5_Template, 13, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.techy);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["@media (min-width: 0) and (max-width: 575.98px) {\r\n\r\n    .services[_ngcontent-%COMP%]   .common[_ngcontent-%COMP%]{\r\n        opacity: 0.9;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNlcnZpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQG1lZGlhIChtaW4td2lkdGg6IDApIGFuZCAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG5cclxuICAgIC5zZXJ2aWNlcyAuY29tbW9ue1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "xkzP":
/*!*********************************************************!*\
  !*** ./src/app/shared/memorable/memorable.component.ts ***!
  \*********************************************************/
/*! exports provided: MemorableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemorableComponent", function() { return MemorableComponent; });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wow */ "ME1z");



class MemorableComponent {
    constructor(wowService) {
        this.wowService = wowService;
        this.wowService.init();
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_0__["init"]({
            duration: 2000,
            easing: 'ease-out-quart',
            once: true
        });
        // AOS.init({
        //   easing: "ease-in-sine",
        //   duration: 500,
        // });
    }
}
MemorableComponent.ɵfac = function MemorableComponent_Factory(t) { return new (t || MemorableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowService"])); };
MemorableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MemorableComponent, selectors: [["app-memorable"]], decls: 20, vars: 0, consts: [["data-logo-url", "assets/images/logo-black.svg", 1, "better-experience", "scroll-content"], [1, "container"], [1, "row"], [1, "section-title"], ["data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "wow", "fadeInUp", "animated"], [1, "col-7"], [1, "left-side"], ["id", "rev-3", "data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "wow", "slideInDown", "animated"], ["src", "assets/images/home-one.png", "alt", "none"], ["id", "rev-4", "data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "wow", "slideInUp", "animated"], ["src", "assets/images/home-two.png", "alt", ""], [1, "col-5"], [1, "right-side"], ["id", "rev-5", "data-wow-duration", "1s", "data-wow-delay", "0.5s", 1, "wow", "slideInRight", "animated"], ["src", "assets/images/home-three.png", "alt", "none"]], template: function MemorableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " We Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Memorable Experiences ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Virtual Reality and Augmented Reality is the best topic in current market. 9Brainz gives one of the best sevice in virtual reality and augemented reality. 9Brainz provide VR and AR development application and game in india as well as other countries. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW1vcmFibGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map