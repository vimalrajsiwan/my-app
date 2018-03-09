webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertService = /** @class */ (function () {
    function AlertService() {
    }
    AlertService.prototype.success = function (message) {
        this.subject = message;
    };
    AlertService.prototype.error = function (message) {
        this.subject = message;
    };
    AlertService.prototype.getMessage = function () {
        return this.subject;
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n  color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"fullPage\">\n    <app-header></app-header>\n  \n   <router-outlet></router-outlet>\n  \n    <app-footer></app-footer>\n    \n  </div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_guard_guard__ = __webpack_require__("../../../../../src/app/auth-guard.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__alert_service__ = __webpack_require__("../../../../../src/app/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__iuserservice_service__ = __webpack_require__("../../../../../src/app/iuserservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__country_state_region_service__ = __webpack_require__("../../../../../src/app/country-state-region.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__employee_service_service__ = __webpack_require__("../../../../../src/app/employee-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__editor_template_service__ = __webpack_require__("../../../../../src/app/editor-template.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__company_product_service__ = __webpack_require__("../../../../../src/app/company-product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__product_insert_product_insert_component__ = __webpack_require__("../../../../../src/app/product-insert/product-insert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__product_info_service__ = __webpack_require__("../../../../../src/app/product-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__up_load_up_load_component__ = __webpack_require__("../../../../../src/app/up-load/up-load.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__collapse_example_collapse_example_component__ = __webpack_require__("../../../../../src/app/collapse-example/collapse-example.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__cascade_drop_down_cascade_drop_down_component__ = __webpack_require__("../../../../../src/app/cascade-drop-down/cascade-drop-down.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_accordion__ = __webpack_require__("../../../../ngx-accordion/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_ngx_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ngx_ckeditor__ = __webpack_require__("../../../../ngx-ckeditor/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ngx_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_ngx_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__employee_accordion_employee_accordion_component__ = __webpack_require__("../../../../../src/app/employee-accordion/employee-accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__editor_template_editor_template_component__ = __webpack_require__("../../../../../src/app/editor-template/editor-template.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var appRoute = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__login_form_login_form_component__["a" /* LoginFormComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_18__register_register_component__["a" /* RegisterComponent */] },
    { path: 'employee/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_guard_guard__["a" /* AuthGuardGuard */]], component: __WEBPACK_IMPORTED_MODULE_28__employee_accordion_employee_accordion_component__["a" /* EmployeeAccordionComponent */] },
    { path: 'cascade', canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_guard_guard__["a" /* AuthGuardGuard */]], component: __WEBPACK_IMPORTED_MODULE_25__cascade_drop_down_cascade_drop_down_component__["a" /* CascadeDropDownComponent */] },
    { path: 'collapse', canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_guard_guard__["a" /* AuthGuardGuard */]], component: __WEBPACK_IMPORTED_MODULE_24__collapse_example_collapse_example_component__["a" /* CollapseExampleComponent */] },
    { path: 'product', canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_guard_guard__["a" /* AuthGuardGuard */]], component: __WEBPACK_IMPORTED_MODULE_20__product_insert_product_insert_component__["a" /* ProductInsertComponent */] },
    { path: 'dashboard', canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_guard_guard__["a" /* AuthGuardGuard */]], component: __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'productList', canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_guard_guard__["a" /* AuthGuardGuard */]], component: __WEBPACK_IMPORTED_MODULE_22__product_list_product_list_component__["a" /* ProductListComponent */] },
    { path: 'upload', canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_guard_guard__["a" /* AuthGuardGuard */]], component: __WEBPACK_IMPORTED_MODULE_23__up_load_up_load_component__["a" /* UpLoadComponent */] },
    { path: 'editorTemplate', canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_guard_guard__["a" /* AuthGuardGuard */]], component: __WEBPACK_IMPORTED_MODULE_29__editor_template_editor_template_component__["a" /* EditorTemplateComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_19__not_found_not_found_component__["a" /* NotFoundComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(appRoute), __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_26_ngx_accordion__["AccordionModule"], __WEBPACK_IMPORTED_MODULE_27_ngx_ckeditor__["CKEditorModule"],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_7__login_form_login_form_component__["a" /* LoginFormComponent */], __WEBPACK_IMPORTED_MODULE_17__dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_18__register_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_19__not_found_not_found_component__["a" /* NotFoundComponent */], __WEBPACK_IMPORTED_MODULE_20__product_insert_product_insert_component__["a" /* ProductInsertComponent */], __WEBPACK_IMPORTED_MODULE_22__product_list_product_list_component__["a" /* ProductListComponent */], __WEBPACK_IMPORTED_MODULE_23__up_load_up_load_component__["a" /* UpLoadComponent */], __WEBPACK_IMPORTED_MODULE_24__collapse_example_collapse_example_component__["a" /* CollapseExampleComponent */], __WEBPACK_IMPORTED_MODULE_25__cascade_drop_down_cascade_drop_down_component__["a" /* CascadeDropDownComponent */], __WEBPACK_IMPORTED_MODULE_28__employee_accordion_employee_accordion_component__["a" /* EmployeeAccordionComponent */], __WEBPACK_IMPORTED_MODULE_29__editor_template_editor_template_component__["a" /* EditorTemplateComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_12__iuserservice_service__["a" /* IuserserviceService */], __WEBPACK_IMPORTED_MODULE_10__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__auth_guard_guard__["a" /* AuthGuardGuard */], __WEBPACK_IMPORTED_MODULE_14__employee_service_service__["a" /* EmployeeServiceService */],
                __WEBPACK_IMPORTED_MODULE_21__product_info_service__["a" /* ProductInfoService */], __WEBPACK_IMPORTED_MODULE_11__alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_16__company_product_service__["a" /* CompanyProductService */], __WEBPACK_IMPORTED_MODULE_15__editor_template_service__["a" /* EditorTemplateService */],
                __WEBPACK_IMPORTED_MODULE_13__country_state_region_service__["a" /* CountryStateRegionService */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth-guard.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_service__ = __webpack_require__("../../../../../src/app/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardGuard = /** @class */ (function () {
    function AuthGuardGuard(_userService, _router, _alertService) {
        this._userService = _userService;
        this._router = _router;
        this._alertService = _alertService;
    }
    AuthGuardGuard.prototype.canActivate = function (next, state) {
        debugger;
        if (localStorage.getItem('currentUser')) {
            return true;
            // return this._userService.getUserLoggedIn();
        }
        else {
            this._alertService.error("Please Login to Access This Page");
            this._router.navigate(['/']);
            return false;
        }
        // 
        // console.log('you r not authorizad');
    };
    AuthGuardGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__alert_service__["a" /* AlertService */]])
    ], AuthGuardGuard);
    return AuthGuardGuard;
}());



/***/ }),

/***/ "../../../../../src/app/cascade-drop-down/cascade-drop-down.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .accordion {\r\n    background-color: #eee;\r\n    color: #444;\r\n    cursor: pointer;\r\n    padding: 18px;\r\n    width: 100%;\r\n    border: none;\r\n    text-align: left;\r\n    outline: none;\r\n    font-size: 15px;\r\n    transition: 0.4s;\r\n}\r\n\r\n.active, .accordion:hover {\r\n    background-color: #ccc;\r\n}\r\n\r\n.accordion:after {\r\n    content: '\\002B';\r\n    color: #777;\r\n    font-weight: bold;\r\n    float: right;\r\n    margin-left: 5px;\r\n}\r\n\r\n.active:after {\r\n    content: \"\\2212\";\r\n}\r\n\r\n.panel {\r\n    padding: 0 18px;\r\n    background-color: white;\r\n    max-height: 0;\r\n    overflow: hidden;\r\n    transition: max-height 0.2s ease-out;\r\n}\r\n */\r\n\r\n\r\n /* body {\r\n    color: #6a6c6f;\r\n    background-color: #f1f3f6;\r\n    margin-top: 30px;\r\n  }\r\n  \r\n  .container {\r\n    max-width: 960px;\r\n  }\r\n  \r\n  .panel-default>.panel-heading {\r\n    color: #333;\r\n    background-color: #fff;\r\n    border-color: #e4e5e7;\r\n    padding: 0;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n  }\r\n  \r\n  .panel-default>.panel-heading a {\r\n    display: block;\r\n    padding: 10px 15px;\r\n  }\r\n  \r\n  .panel-default>.panel-heading a:after {\r\n    content: \"\";\r\n    position: relative;\r\n    top: 1px;\r\n    display: inline-block;\r\n    font-family: 'Glyphicons Halflings';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    line-height: 1;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    float: right;\r\n    transition: transform .25s linear;\r\n    -webkit-transition: -webkit-transform .25s linear;\r\n  }\r\n  \r\n  .panel-default>.panel-heading a[aria-expanded=\"true\"] {\r\n    background-color: #eee;\r\n  }\r\n  \r\n  .panel-default>.panel-heading a[aria-expanded=\"true\"]:after {\r\n    content: \"\\2212\";\r\n    -webkit-transform: rotate(180deg);\r\n    transform: rotate(180deg);\r\n  }\r\n  \r\n  .panel-default>.panel-heading a[aria-expanded=\"false\"]:after {\r\n    content: \"\\002b\";\r\n    -webkit-transform: rotate(90deg);\r\n    transform: rotate(90deg);\r\n    color: #777;\r\n    font-weight: bold;\r\n    float: right;\r\n    \r\n  } */\r\n\r\n\r\n .card>.card-header button[aria-expanded=\"false\"]:after {\r\n    content: \"+\";\r\n    -webkit-transform: rotate(90deg);\r\n    transform: rotate(90deg);\r\n    transform: rotate(90deg);\r\n    color: #777;\r\n    font-weight: bold;\r\n    margin-left: 200px;\r\n  }\r\n\r\n\r\n .card>.card-header button[aria-expanded=\"true\"]:after {\r\n    content: \"\\2212\";\r\n    -webkit-transform: rotate(180deg);\r\n    transform: rotate(90deg);\r\n    color: #777;\r\n    font-weight: bold;\r\n    margin-left: 200px;\r\n  }\r\n\r\n\r\n .card>.card-header button{\r\n    display: block;\r\n    padding: 10px 15px;\r\n  }\r\n\r\n\r\n /* .accordion-option {\r\n    width: 100%;\r\n    float: left;\r\n    clear: both;\r\n    margin: 15px 0;\r\n  }\r\n  \r\n  .accordion-option .title {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    float: left;\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\n  \r\n  .accordion-option .toggle-accordion {\r\n    float: right;\r\n    font-size: 16px;\r\n    color: #6a6c6f;\r\n  }\r\n  \r\n  .accordion-option .toggle-accordion:before {\r\n    content: \"Expand All\";\r\n  }\r\n  \r\n  .accordion-option .toggle-accordion.active:before {\r\n    content: \"Collapse All\";\r\n  } */\r\n\r\n\r\n /** Core styling */\r\n\r\n\r\n /* .accordion{\r\n\tpadding: 0;\r\n\tmargin:  0;\r\n\tposition: relative;\r\n\tlist-style: none;\r\n}\r\n\t.accordion > *{\r\n\t\tposition: absolute;\r\n\t\toverflow: hidden;\r\n\t\tpadding: 0;\r\n\t\tmargin:  0;\r\n\t}\r\n\t\t.accordion > *,\r\n\t\t.accordion.edge-visible,\r\n\t\t.accordion .accordion{\r\n\t\t\t-webkit-transition: .3s ease all;\r\n\t\t\t-moz-transition:    .3s ease all;\r\n\t\t\t-o-transition:      .3s ease all;\r\n\t\t\ttransition:         .3s ease all;\r\n\t\t}\r\n\t\t */\r\n\r\n\r\n /** Transform-related */\r\n\r\n\r\n /* .accordion,\r\n\t\t.accordion > *{\r\n\t\t\twill-change: height, transform;\r\n\t\t\t-webkit-perspective: 90em;\r\n\t\t\t-moz-perspective:    90em;\r\n\t\t\tperspective:         90em;\r\n\t\t\t\r\n\t\t\t-webkit-backface-visibility: hidden;\r\n\t\t\t-moz-backface-visibility:    hidden;\r\n\t\t\tbackface-visibility:         hidden;\r\n\t\t\t\r\n\t\t\t-webkit-transform:  translate3d(0,0,0);\r\n\t\t\t-moz-transform:     translate3d(0,0,0);\r\n\t\t\t-ms-transform:      translateY(0);\r\n\t\t\t-o-transform:       translate3d(0,0,0);\r\n\t\t\ttransform:          translate3d(0,0,0);\r\n\t\t} */\r\n\r\n\r\n /** Rule to disable transitions between gap corrections */\r\n\r\n\r\n /* .snap.accordion > *,\r\n\t\t.snap.accordion .accordion{\r\n\t\t\t-webkit-transition: none !important;\r\n\t\t\t-moz-transition:    none !important;\r\n\t\t\t-o-transition:      none !important;\r\n\t\t\ttransition:         none !important;\r\n\t\t} */\r\n\r\n\r\n /** Headings */\r\n\r\n\r\n /* .accordion > * > :first-child{\r\n\t\t\tcursor: pointer;\r\n\t\t\tmargin: 0;\r\n\t\t\t\r\n\t\t\t-webkit-user-select: none;\r\n\t\t\t-moz-user-select:    none;\r\n\t\t\t-ms-user-select:     none;\r\n\t\t\tuser-select:         none;\r\n\t\t} */\r\n\r\n\r\n /** Collapsible content */\r\n\r\n\r\n /* .accordion > * > :last-child{\r\n\t\t\toverflow: hidden;\r\n\t\t\t-webkit-transition: .3s ease height, .3s step-start visibility;\r\n\t\t\t-moz-transition:    .3s ease height, .3s step-start visibility;\r\n\t\t\t-o-transition:      .3s ease height, .3s step-start visibility;\r\n\t\t\ttransition:         .3s ease height, .3s step-start visibility;\r\n\t\t}\r\n\t\t\t.accordion > .closed > :last-child,\r\n\t\t\t.accordion > .closed .accordion > .open > :last-child{\r\n\t\t\t\t-webkit-transition-timing-function: ease, step-end;\r\n\t\t\t\t-moz-transition-timing-function:    ease, step-end;\r\n\t\t\t\t-o-transition-timing-function:      ease, step-end;\r\n\t\t\t\ttransition-timing-function:         ease, step-end;\r\n\t\t\t\tvisibility: hidden;\r\n\t\t\t} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cascade-drop-down/cascade-drop-down.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n      <div class=\"col-md-10 alert-success\">\n          <h1 style=\"text-align: center;\" >Cascade Drop Down List Example </h1>\n      </div>\n      <div class=\"col-md-2\">\n          <div style=\"margin-top: 2px;\">\n              <input type=\"button\" (click)=\"logOut()\" value=\"Log Out\" class=\"btn btn-success\">\n          </div>\n      </div>\n\n</div>\n<br>\n\n<div class=\"row\">\n<div class=\"col-md-3\"></div>\n<div class=\"col-md-6\">  \n<form #userForm=\"ngForm\"  (ngSubmit)=\"onClick($event)\">\n<div class=\"row form-group\">\n      <div class=\"col-md-4\">\n            <h3>Select Country</h3>\n      </div>\n      <div class=\"col-md-8\">\n            <select id=\"ddlCountry\"  class=\"form-control\" #refCountry name=\"refCountry\"\n            [(ngModel)]=\"currentC\"   (change)=\"onCountryChange($event)\" >\n                      <option value=\"0\" selected>--Select Country--</option>\n                      <option value=\"{{cnt.CountryID}}\"  *ngFor=\"let cnt of country;\">\n                                    {{cnt.CountryName}}\n                      </option>\n            </select> \n            <!-- <span>{{refCountry.className}}</span> -->\n      </div>\n</div>\n\n<div class=\"row form-group\">\n    <div class=\"col-md-4\">\n          <h3>Select State</h3>\n    </div>\n    <div class=\"col-md-8\">\n          <select id=\"ddlState\" disabled=\"!refCountry.pristine\" class=\"form-control\" \n          #refState name=\"refState\" \n          (change)=\"onStateChange($event)\" >\n                    <option value=\"0\" >---Select State----</option>\n                    <option value=\"{{stt.StateID}}\" *ngFor=\"let stt of state;\" >\n                                    {{stt.StateName}}\n                    </option>\n          </select> \n    </div>\n</div>\n\n<div class=\"row form-group\">\n      <div class=\"col-md-4\">\n            <h3>Select Region</h3>\n      </div>\n      <div class=\"col-md-8\">\n            <select id=\"ddlRegion\" class=\"form-control-lg\" disabled=\"!refState.pristine\" \n            class=\"form-control\" \n            #refRegion name=\"refRegion\" \n            (change)=\"onRegionChange($event)\" >\n                      <option value=\"0\" >--Select Region---</option>\n                      <option value=\"{{rgn.RegionID}}\" *ngFor=\"let rgn of region;\">\n                                      {{rgn.RegionName}}\n                      </option>\n            </select> \n      </div>\n</div> \n\n<div class=\"row form-group\">\n      <div class=\"col-md-4\">\n            <h3>Enter Name</h3>(Auto Complete)[Hard Codded]\n      </div>\n      <div class=\"col-md-8\">\n            <input type=\"text\" class=\"form-control\"  #refName=\"ngModel\" name=\"refName\" ngModel required >\n            <br>\n            <input type=\"search\" list=\"languages\" class=\"form-control\"\n             placeholder=\"Pick a programming language..\"\n             #refAutoName=\"ngModel\" name=\"refAutoName\" ngModel required\n             >\n\n                  <datalist id=\"languages\">\n                        <option value=\"PHP\" >\n                        <option value=\"C++\" >\n                        <option value=\"Java\" >\n                        <option value=\"Ruby\" >\n                        <option value=\"Python\" >\n                        <option value=\"Go\" >\n                        <option value=\"Perl\" >\n                        <option value=\"Erlang\" >\n                  </datalist>\n      </div>\n</div> \n\n<div class=\"row form-group\">\n      <div class=\"col-md-4\">\n            (Auto Complete)[From Server]\n      </div>\n      <div class=\"col-md-8\">\n            <input type=\"search\" list=\"nameList\" class=\"form-control ui-icon-search\"\n             placeholder=\"Search....\"\n             #refAutoNameServer=\"ngModel\" name=\"refAutoNameServer\" ngModel required >\n                  <datalist id=\"nameList\" *ngIf=\"(refAutoNameServer.value!='')\">\n                        <option value=\"{{uList.name}}\" \n                        *ngFor=\"let uList of userList;\">\n                         {{uList.name}} </option>\n\n                  </datalist>\n                  <!-- <div *ngFor=\"let uList of userList |\n                  searchFilter: refAutoNameServer.value \">\n                  {{uList.name}}</div> -->\n      </div>\n</div>\n\n<input type=\"submit\" [disabled]=\"!userForm.form.valid\" value=\"Fill Data\" id=\"btnID\" class=\"btn btn-success\"  >\n\n</form>\n<br>\n\n\n\n\n</div>\n<div class=\"col-md-3\"></div>\n</div>\n\n\n\n<div class=\"row\">\n<div class=\"col-md-12\">\n      <table  class=\"table table-striped table-light\">\n            <tr>\n                  <td>Employee ID</td>\n                  <td>Employee First Name </td>\n                  <td>Employee Last Name</td>\n                  <td>Employee Gender</td>\n                  <td>Employee Salary</td>\n                  <td>Employee State</td>\n            </tr>\n            <tr *ngFor=\"let emp of employeeList\" (dblclick)=\"rowClick($event)\" >\n                  <ng-container *ngIf=\"(emp.Id<=10)\">\n                  <td>{{emp.Id}}</td>\n                  <td>{{emp.FirstName}}</td>\n                  <td>{{emp.LastName}}</td>\n                  <td>{{emp.Gender}}</td>\n                  <td>{{emp.Salary}}</td>\n                  <td>{{emp.State}}</td>\n            </ng-container>\n            </tr>\n      </table>\n</div>\n</div>\n\n<h1 class=\"alert-success\" style=\"text-align: center;\" >Employee List accordion example</h1>\n<div class=\"row\">\n<div class=\"col-md-6\">\n      <div id=\"accordion\">\n                  <div class=\"card\">\n                              <div class=\"card-header\" id=\"heading1\">\n                                    <button class=\"btn collapsed\" data-toggle=\"collapse\" data-target=\"#collapse1\" aria-expanded=\"false\" aria-controls=\"collapse1\">\n                                                Click to View\n                                    </button>\n                              </div>\n                              <div id=\"collapse1\" class=\"collapse\" aria-labelledby=\"heading1\" data-parent=\"#accordion\">\n                                    <div class=\"card-body\">\n                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                                    </div>\n                              </div>\n                        </div>\n            <div class=\"card\">\n                  <div class=\"card-header\" id=\"headingOne\">\n                        <button class=\"btn\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\n                              Collapsible Group Item #1\n                        </button>\n                  </div>\n                  <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                        <div class=\"card-body\">\n                         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                        </div>\n                  </div>\n            </div>\n            <div class=\"card\">\n                  <div class=\"card-header\" id=\"headingTwo\">\n                        <button class=\"btn collapsed\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                              Collapsible Group Item #2\n                        </button>\n                  </div>\n                  <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n                        <div class=\"card-body\">\n                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                        </div>\n                  </div>\n            </div>\n            <div class=\"card\">\n                  <div class=\"card-header\" id=\"headingThree\">\n                        <button class=\"btn collapsed\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                        Collapsible Group Item #3\n                        </button>\n                  </div>\n                  <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\n                        <div class=\"card-body\">\n                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                        </div>\n                  </div>\n            </div>\n            \n      </div>\n     \n</div>\n\n<div class=\"col-md-6\">\n      <div id=\"accordion\">\n            <div *ngFor=\"let emp of employeeList;\">\n                        <ng-container *ngIf=\"(emp.Id<=10)\">\n                  <div class=\"card\">\n                        <div class=\"card-header\" id=\"headingEmpList\">\n                              <button class=\"btn\" data-toggle=\"collapse\" data-target=\"#collapseEmpList\" \n                                    aria-expanded=\"true\" aria-controls=\"collapseEmpList\">\n                                    {{emp.FirstName}} {{emp.LastName}}\n                              </button>\n                        </div>\n                        <!-- aria-labelledby=\"headingEmpList {{emp.Id}}\"  -->\n                        <div id=\"collapseEmpList\" class=\"collapse show\" aria-labelledby=\"headingEmpList\"\n                              data-parent=\"#accordion\">\n                                    <div class=\"card-body\">\n                                          <table  class=\"table table-striped table-light\">\n                                                <tr>\n                                                      <td>Employee ID</td>\n                                                      <td>{{emp.Id}}</td>\n                                                </tr>\n                                                <tr>\n                                                      <td>Employee First Name </td>\n                                                      <td>{{emp.FirstName}}</td>\n                                                </tr>\n                                                <tr>\n                                                      <td>Employee Last Name</td>\n                                                      <td>{{emp.LastName}}</td>\n                                                </tr>\n                                                <tr>\n                                                      <td>Employee Gender</td>\n                                                      <td>{{emp.Gender}}</td>\n                                                </tr>\n                                                <tr>\n                                                      <td>Employee Salary</td>\n                                                      <td>{{emp.Salary}}</td>\n                                                </tr>\n                                                <tr>\n                                                      <td>Employee Salary</td>\n                                                      <td>{{emp.State}}</td>\n                                                      </tr>\n                                          </table>\n                                    </div>\n                        </div>\n                  </div>\n                        </ng-container>\n            </div>\n                  \n            </div>\n</div>\n\n\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/cascade-drop-down/cascade-drop-down.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CascadeDropDownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__country_state_region_service__ = __webpack_require__("../../../../../src/app/country-state-region.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employee_service_service__ = __webpack_require__("../../../../../src/app/employee-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__iuserservice_service__ = __webpack_require__("../../../../../src/app/iuserservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Servicess




var CascadeDropDownComponent = /** @class */ (function () {
    function CascadeDropDownComponent(_countryStateRegionService, _userServiceLogOut, _userServiceList, _employeeService, _router) {
        this._countryStateRegionService = _countryStateRegionService;
        this._userServiceLogOut = _userServiceLogOut;
        this._userServiceList = _userServiceList;
        this._employeeService = _employeeService;
        this._router = _router;
        this.currentC = 0;
        this.currentS = 0;
        this.currentR = 0;
        this.statusMessage = "Loading Data.... plz wait....";
        this.editorValue = "";
        this.items = [{
                id: 1,
                name: "First",
                description: "First accordion"
            }, {
                id: 2,
                name: "Second",
                description: "Second accordion"
            }, {
                id: 3,
                name: "Third",
                description: "Third accordion"
            }];
    }
    CascadeDropDownComponent.prototype.addItem = function () {
        this.items.push({
            id: this.items.length + 1,
            name: "Item #" + (this.items.length + 1),
            description: "Item #" + (this.items.length + 1) + " accordion"
        });
    };
    CascadeDropDownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._countryStateRegionService.getCountry()
            .subscribe(function (productsData) { return _this.country = productsData; }, function (error) {
            _this.statusMessage = "Problem with the service";
        });
        this._userServiceList.getUsers()
            .subscribe(function (userData) { return _this.userList = userData; }, function (error) {
            _this.statusMessage = "Problem with the service";
        });
        this._employeeService.getEmployee()
            .subscribe(function (userData) { return _this.employeeList = userData; }, function (error) {
            _this.statusMessage = "Problem with the service";
        });
    };
    CascadeDropDownComponent.prototype.getStateByCountryID = function (id) {
        var _this = this;
        this._countryStateRegionService.getStateByCountryID(id)
            .subscribe(function (productsData) { return _this.state = productsData; }, function (error) {
            _this.statusMessage = "Problem with the service";
        });
    };
    CascadeDropDownComponent.prototype.getRegionByStateID = function (id) {
        var _this = this;
        this._countryStateRegionService.getRegionByStateID(id)
            .subscribe(function (productsData) { return _this.region = productsData; }, function (error) {
            _this.statusMessage = "Problem with the service";
        });
    };
    CascadeDropDownComponent.prototype.onCountryChange = function (event) {
        var newVal = event.target.value;
        console.log(newVal);
        var selectElementText = event.target['options'][event.target['options'].selectedIndex].text;
        console.log(selectElementText);
        if (newVal > 0) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__("#ddlState").removeAttr("disabled");
            this.getStateByCountryID(newVal);
        }
        else {
            this.state = [];
            __WEBPACK_IMPORTED_MODULE_2_jquery__("#ddlState").attr("disabled", "disabled");
            this.region = [];
            __WEBPACK_IMPORTED_MODULE_2_jquery__("#ddlRegion").attr("disabled", "disabled");
        }
    };
    CascadeDropDownComponent.prototype.onStateChange = function (event) {
        var newVal = event.target.value;
        console.log(newVal);
        var selectElementText = event.target['options'][event.target['options'].selectedIndex].text;
        console.log(selectElementText);
        if (newVal > 0) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__("#ddlRegion").removeAttr("disabled");
            this.getRegionByStateID(newVal);
        }
        else {
            this.region = [];
            __WEBPACK_IMPORTED_MODULE_2_jquery__("#ddlRegion").attr("disabled", "disabled");
        }
    };
    CascadeDropDownComponent.prototype.onRegionChange = function (event) {
        var newVal = event.target.value;
        console.log(newVal);
        var selectElementText = event.target['options'][event.target['options'].selectedIndex].text;
        console.log(selectElementText);
    };
    CascadeDropDownComponent.prototype.onClick = function (event) {
        debugger;
        alert(this.country.length);
    };
    CascadeDropDownComponent.prototype.logOut = function () {
        localStorage.removeItem('currentUser');
        this._userServiceLogOut.isUserLoggedIn = false;
        this._router.navigate(["/"]);
    };
    CascadeDropDownComponent.prototype.rowClick = function (event) {
        debugger;
        var row = __WEBPACK_IMPORTED_MODULE_2_jquery__(event.target).closest('tr');
        var Id = row.find('td:eq(0)').text();
        this._router.navigate(['/employee', Id]);
    };
    CascadeDropDownComponent.prototype.editorOnClick = function (event) {
        debugger;
        console.log(this.editorValue);
    };
    CascadeDropDownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cascade-drop-down',
            template: __webpack_require__("../../../../../src/app/cascade-drop-down/cascade-drop-down.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cascade-drop-down/cascade-drop-down.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__country_state_region_service__["a" /* CountryStateRegionService */],
            __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__iuserservice_service__["a" /* IuserserviceService */],
            __WEBPACK_IMPORTED_MODULE_4__employee_service_service__["a" /* EmployeeServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], CascadeDropDownComponent);
    return CascadeDropDownComponent;
}()); //End of Class



/***/ }),

/***/ "../../../../../src/app/collapse-example/collapse-example.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/collapse-example/collapse-example.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-10 alert-success\">\n      <h1 style=\"text-align: center;\" >Expande Collapse Example </h1>\n  </div>\n  <div class=\"col-md-2\">\n      <div style=\"margin-top: 2px;\">\n          <input type=\"button\" (click)=\"logOut()\" value=\"Log Out\" class=\"btn btn-success\">\n      </div>\n  </div>\n</div>\n<br>\n<table class=\"table table-bordered table-hover\">\n  <thead>\n      <tr class=\"alert-success\">\n        <th>Toggal</th>\n          <th>CompanyID</th>\n          <th>Company Name</th>\n          <th>Company Owner</th>\n          <td>Company Type</td>\n      </tr>\n  </thead>\n  <tbody>\n      <ng-container *ngFor=\"let compProduct of compProducts;\">\n          <tr>\n              <td><input id=\"togal\" type=\"button\" value=\"{{compProduct.CompanyID}}\" (click)=\"btnClick($event)\" > </td>\n              <td>{{compProduct.CompanyID}}</td>\n              <td>{{compProduct.CompanyName}}</td>\n              <td>{{compProduct.CompanyOwner}}</td>\n              <td>{{compProduct.CompanyType}}</td>\n          </tr>\n         \n          <tr class=\"Company_{{compProduct.CompanyID}}\"  style=\"display: none;\" >\n              <!-- <td> <div>   \n                      <table border=\"1\" class=\"tableCompany_{{compProduct.CompanyID}}\" id=\"exceltable\">\n                      </table> \n                  </div> \n               </td> -->\n               <td></td>\n              <td colspan=\"4\">\n              <ng-container>\n                      <tr class='alert-success'>\n                              <TD>Product Name</TD>\n                              <TD>Product Price</TD>\n                      </tr>\n              </ng-container>\n                      \n                  <ng-container *ngFor=\"let Product of childcompProducts;\">\n                      <tr>\n                          <td style=\"display: none;\" >{{Product.ProductID}}</td>\n                          <td style=\"display: none;\">{{Product.ProductImage}}</td>\n                          <td>{{Product.ProductName}}</td>\n                          <td>{{Product.ProductPrice}}</td>\n                      </tr>\n                  </ng-container>\n              </td>\n          </tr>\n         \n\n      </ng-container>\n     \n      <tr *ngIf=\"!compProducts\">\n\n          <td colspan=\"6\">{{statusMessage}}</td>\n      </tr>\n      <tr *ngIf=\"compProducts && compProducts.length==0\">\n          <td colspan=\"6\">No products to display</td>\n      </tr>\n     \n  </tbody>\n  <tfoot>\n    <tr class=\"alert-info\">\n        <td colspan=\"6\"></td>\n    </tr>\n  </tfoot>\n\n</table> \n\n\n\n<div class=\"container\">\n<h2>Simple Expande Collapse Example</h2>\n<button  type=\"button\" class=\"btn btn-info\" data-toggle=\"collapse\" data-target=\"#demoCollapse\">\n  Click to Open\n </button>\n<div id=\"demoCollapse\" class=\"collapse in\" >\n<h1> Hi, This is vimal raj</h1>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/collapse-example/collapse-example.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseExampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_product_service__ = __webpack_require__("../../../../../src/app/company-product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CollapseExampleComponent = /** @class */ (function () {
    function CollapseExampleComponent(_compProductService, _userServiceLogOut, _userService, _router) {
        this._compProductService = _compProductService;
        this._userServiceLogOut = _userServiceLogOut;
        this._userService = _userService;
        this._router = _router;
        this.tOggle = false;
        this.statusMessage = "Loading Data.... plz wait....";
        this.collapsed1 = true;
    }
    CollapseExampleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._compProductService.getCompany()
            .subscribe(function (productsData) { return _this.compProducts = productsData; }, function (error) {
            _this.statusMessage = "Problem with the service";
        });
    };
    CollapseExampleComponent.prototype.getProductByCompanyID = function (id) {
        var _this = this;
        this._compProductService.getProductsByCompany(id)
            .subscribe(function (productsData) { return _this.childcompProducts = productsData; }, function (error) {
            _this.statusMessage = "Problem with the service";
        });
    };
    CollapseExampleComponent.prototype.btnClick = function (event) {
        debugger;
        var id = event.target.id;
        var value = event.target.value;
        this.getProductByCompanyID(value);
        if (this.tOggle == true) {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('.Company_' + value).hide();
            this.tOggle = false;
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('.Company_' + value).show();
            this.tOggle = true;
        }
    };
    CollapseExampleComponent.prototype.logOut = function () {
        localStorage.removeItem('currentUser');
        this._userServiceLogOut.isUserLoggedIn = false;
        this._router.navigate(["/"]);
    };
    CollapseExampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-collapse-example',
            template: __webpack_require__("../../../../../src/app/collapse-example/collapse-example.component.html"),
            styles: [__webpack_require__("../../../../../src/app/collapse-example/collapse-example.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__company_product_service__["a" /* CompanyProductService */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], CollapseExampleComponent);
    return CollapseExampleComponent;
}()); // End of Class



/***/ }),

/***/ "../../../../../src/app/company-product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw__ = __webpack_require__("../../../../rxjs/add/Observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyProductService = /** @class */ (function () {
    function CompanyProductService(_http) {
        this._http = _http;
    }
    CompanyProductService.prototype.getCompany = function () {
        return this._http.get('http://vimalraj.somee.com/api/ComponyCumProduct')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompanyProductService.prototype.getProductsByCompany = function (id) {
        var url = "http://vimalraj.somee.com/api/ComponyCumProduct/";
        return this._http.get(url + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompanyProductService.prototype.handleError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    CompanyProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CompanyProductService);
    return CompanyProductService;
}());



/***/ }),

/***/ "../../../../../src/app/country-state-region.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryStateRegionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw__ = __webpack_require__("../../../../rxjs/add/Observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// //import 'rxjs/add/operator/toPromise';

var CountryStateRegionService = /** @class */ (function () {
    function CountryStateRegionService(_http) {
        this._http = _http;
    }
    CountryStateRegionService.prototype.getCountry = function () {
        return this._http.get('http://vimalraj.somee.com/api/CascadeCountry')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CountryStateRegionService.prototype.getStateByCountryID = function (id) {
        var url = "http://vimalraj.somee.com/api/CascadeCountry/";
        return this._http.get(url + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CountryStateRegionService.prototype.getRegionByStateID = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = "http://vimalraj.somee.com/api/CascadeCountry";
        return this._http.post(url, id, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CountryStateRegionService.prototype.handleError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    CountryStateRegionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CountryStateRegionService);
    return CountryStateRegionService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to DasBoard</h1>\n<h2>You are Authenticated Hello {{name}}</h2>\n<!-- <input type=\"text\" id=\"txt1\" />\n<button (click)=\"show()\" class=\"btn \">Click Me</button> -->\n<br />\n<a routerLink=\"/\">Go Back</a>\n<button  (click)=\"logOut()\" class=\"btn btn-danger\">Log Out</button>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import * as $ from 'jquery';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        debugger;
        this.name = (localStorage.getItem('currentUser'));
        console.log('Is user Logged In', this._userService.getUserLoggedIn(), this.name);
    };
    DashboardComponent.prototype.show = function () {
        //alert($("#txt1").val());
        alert(localStorage.getItem('currentUser'));
    };
    DashboardComponent.prototype.logOut = function () {
        localStorage.removeItem('currentUser');
        this._userService.isUserLoggedIn = false;
        this._router.navigate(["/"]);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/editor-template.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorTemplateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw__ = __webpack_require__("../../../../rxjs/add/Observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// //import 'rxjs/add/operator/toPromise';

var EditorTemplateService = /** @class */ (function () {
    function EditorTemplateService(_http) {
        this._http = _http;
    }
    EditorTemplateService.prototype.getEditorTemplate = function () {
        return this._http.get('http://vimalraj.somee.com/api/Template')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EditorTemplateService.prototype.insertEditorTemplate = function (model) {
        debugger;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("http://vimalraj.somee.com/api/Template", model, options)
            .map(function (response) { return console.log(response.toString()); })
            .catch(this.handleError);
    };
    EditorTemplateService.prototype.editEditorTemplate = function (id, model) {
        debugger;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=UTS-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put("http://vimalraj.somee.com/api/Template/" + id, model, options)
            .map(function (response) { return console.log(response.toString()); })
            .catch(this.handleError);
    };
    EditorTemplateService.prototype.deleteEditorTemplate = function (id) {
        debugger;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=UTS-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.delete("http://vimalraj.somee.com/api/Template/" + id)
            .map(function (response) { return console.log(response.toString()); })
            .catch(this.handleError);
    };
    // uploadImage(formData){// insert record
    //   debugger;
    //   let headers = new Headers({ 'Content-Type': 'application/json; charset=UTS-8' });
    //    let options = new RequestOptions({ headers: headers});
    //   return this._http.post("http://localhost:54163/api/LoginUser/Edit",model,options)
    // 		.map(response =>console.log( response.json()));
    // }
    //   upload(files){
    //     debugger;
    //     let headers = new Headers({ 'Content-Type': 'multipart/form-data','Accept': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //     return  this._http.post("http://vimalraj.somee.com/api/LoginUser/UploadFile",files)
    //              .map(response => response.json())
    //              .catch(error => Observable.throw(error));
    // }
    EditorTemplateService.prototype.handleError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    EditorTemplateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], EditorTemplateService);
    return EditorTemplateService;
}());



/***/ }),

/***/ "../../../../../src/app/editor-template/editor-template.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid{border-left:5px solid red;}\r\n\t\t     input.ng-valid{ border-left: 5px solid green;}\r\n\t\t     select.ng-invalid{border-left:5px solid red;}\r\n\t\t     select.ng-valid{ border-left: 5px solid green;}\r\n\t\t\t ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/editor-template/editor-template.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n      <table class=\"table table-bordered table-primary\">\n          <tr>\n            <th>Template ID</th>\n            <th>Description</th>\n            <th>Created By[Name]</th>\n            <th>TemplateData</th>\n            <th>Action</th>\n          </tr>\n         \n          <!-- (dblclick)=\"rowClickTemplate($event)\" -->\n          <tr class=\"alert-success\" *ngFor=\"let edtTemp of editorTemplateList;\"  (dblclick)=\"rowClickTemplate($event)\"> \n              <td>{{edtTemp.TemplateID}}</td>\n              <td>{{edtTemp.Description}}</td>\n              <td>{{edtTemp.CreatedBy}}</td>\n              <td>{{edtTemp.TemplateData}}</td>\n              <td> \n                  <input type=\"button\" value=\"Edit\" class=\"btn btn-primary\" (click)=\"btnEditClick(edtTemp)\">\n                  <input type=\"button\" value=\"Delete\" class=\"btn btn-primary\" (click)=\"btnDeleteClick(edtTemp)\">\n              </td>\n          </tr>\n          <tr class=\"alert-danger\" *ngIf=\"!editorTemplateList\">\n              <td colspan=\"5\"> {{statusMessage}}</td>  \n          </tr>\n          <tr class=\"alert-danger\" *ngIf=\"editorTemplateList && editorTemplateList.length==0\">\n              <td colspan=\"5\"> No Templates to display </td>  \n          </tr>\n      </table>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"jumbotron\">\n        <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm.value); userForm.reset();\">\n            <div class=\"row\"> \n                <div class=\"col-md-8\" style=\"text-align: center; margin-top: -50px;\">\n                    <h2>{{actionRecord}}</h2>\n                </div>\n                <div class=\"col-md-4\">\n                      <div style=\"margin-top: -45px; margin-left: 10px;\">\n                              <input type=\"button\" (click)=\"logOut()\" value=\"Log Out\" class=\"btn btn-success\">\n                          </div>\n                  </div>\n            </div>\n            <div class=\"row\" style=\"margin-top: -45px;\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label> Description </label>\n                        <input type=\"text\" required #Description=\"ngModel\" minlength=\"4\" \n                            maxlength=\"15\" class=\"form-control\" name=\"Description\" ngModel />\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                            <div *ngIf=\"Description.errors&& (Description.dirty || Description.touched) \" \n                            class=\"alert-danger\"    style=\"margin-top: 37px;\">\n                                <label [hidden]=\"!Description.errors.required\">\n                                    Please Enter Description\n                                </label>\n                                <label [hidden]=\"!Description.errors.minlength\">\n                                    Please Enter Atleast 4 charecter\n                                </label>\n                            </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>CreatedBy Name</label>\n                        <input type=\"text\" required #CreatedBy=\"ngModel\" minlength=\"4\" \n                            maxlength=\"15\" class=\"form-control\" name=\"CreatedBy\" ngModel />\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                            <div *ngIf=\"CreatedBy.errors&& (CreatedBy.dirty || CreatedBy.touched) \"\n                             class=\"alert-danger\" style=\"margin-top: 37px;\">\n                                <label [hidden]=\"!CreatedBy.errors.required\">\n                                    Please Enter CreatedBy Name\n                                </label>\n                                <label [hidden]=\"!CreatedBy.errors.minlength\">\n                                    Please Enter Atleast 4 charecter\n                                </label>\n                            </div>\n                </div>\n  \n              </div>\n  \n              <div class=\"row\">\n                  <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                          <label>TemplateData </label>\n                                  <ck-editor name=\"editor1\"  id=\"editor1\"\n                                  #editor1 required\n                                     [(ngModel)]=\"editorValue\" \n                                     skin=\"moono-lisa\"\n                                     [config]=\"ckConfig\" \n                                     [fullPage]=\"true\">\n                                  </ck-editor>\n                      </div>\n                  </div>\n              </div>\n             \n  \n              <div class=\"row\" style=\"margin-top:15px;\">\n                  <div class=\"col-md-6\" >\n                      <button [disabled]=\"!userForm.form.valid\" type=\"submit\" style=\"width:25%\" class=\"btn btn-success\">Submit</button>\n                      &nbsp; &nbsp;<button type=\"reset\" class=\"btn btn-danger\" style=\"width:25%\">Clear</button>\n                      <!-- <input type=\"button\" id=\"btn\" value=\"alert\" (click)=\"btnClick()\"> -->\n                  \n                  </div>\n              </div>\n      </form>\n    </div>\n      </div>\n  </div>\n  \n  \n  <!-- View Model -->\n  <!-- Button trigger modal -->\n  <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" hidden=\"hidden\" id=\"btnViewTemp\" data-target=\"#exampleModal\">\n          Launch demo modal\n        </button>\n        \n        <!-- Modal -->\n        <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                      <div class=\"form-group\">\n                              <label> Description </label>\n                              <input type=\"text\" value=\"{{viewDescription}}\" \n                                   class=\"form-control\" name=\"Description\" readonly />\n                      </div>\n                      <div class=\"form-group\">\n                              <label>CreatedBy Name</label>\n                              <input type=\"text\" value=\"{{viewCreatedBy}}\" \n                                   class=\"form-control\" name=\"CreatedBy\" readonly />\n                      </div>\n                      <div class=\"form-group\">\n                              <label>Template Data</label>\n                              <div  id=\"viewTempData\" class=\"form-control\"\n                                    name=\"TempData\" readonly \n                                   style=\"height: 100px; overflow-y: scroll\" aria-multiline=\"true\">\n                      </div>\n                      </div>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n                <!-- <button type=\"button\" class=\"btn btn-primary\">Save changes</button> -->\n              </div>\n            </div>\n          </div>\n        </div>\n  \n  \n  <!-- Edit Model -->\n  <!-- Button trigger modal -->\n  <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" hidden=\"hidden\" id=\"btnEditTemp\" data-target=\"#exampleModalEdit\">\n          Launch demo modal\n        </button>\n        \n        <!-- Modal -->\n        <div class=\"modal fade\" id=\"exampleModalEdit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n          <form #editUserForm=\"ngForm\"  >\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                      <div class=\"form-group\">\n                              <label> Template ID </label>\n                              <b>{{editId}}</b>\n                      </div>\n                      <div class=\"form-group\">\n                              <label> Description </label>\n                              <input type=\"text\" required  id=\"editDescription\" minlength=\"4\" \n                              maxlength=\"15\" class=\"form-control\" name=\"editDescription\" [(ngModel)]=\"editDescription\"  />\n                      </div>\n                      <div class=\"form-group\">\n                              <label>CreatedBy Name</label>\n                              <input type=\"text\" required minlength=\"4\" \n                                  maxlength=\"15\" class=\"form-control\" id=\"editCreatedBy\" name=\"editCreatedBy\" [(ngModel)]=\"editCreatedBy\" />\n                          </div>\n                      <div class=\"form-group\">\n                              <label>TemplateData </label>\n                                      <ck-editor name=\"editEditor1\"  id=\"editEditor1\"\n                                      #editEditor1 required\n                                         [(ngModel)]=\"editEditorValue\" \n                                         skin=\"moono-lisa\"\n                                         [config]=\"ckConfigEdit\" \n                                         [fullPage]=\"true\">\n                                      </ck-editor>\n                          </div>\n              </div>\n              <div class=\"modal-footer\">\n                      <button [disabled]=\"!editUserForm.form.valid\" type=\"button\" style=\"width:25%\"\n                       data-dismiss=\"modal\" class=\"btn btn-success\" (click)=\"onSubmitEdit(editUserForm.value)\" >Submit</button>\n                <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n                <!-- <button type=\"button\" class=\"btn btn-primary\">Save changes</button> -->\n              </div>\n  \n          </form>\n            </div>\n          </div>\n        </div>"

/***/ }),

/***/ "../../../../../src/app/editor-template/editor-template.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorTemplateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editor_template_service__ = __webpack_require__("../../../../../src/app/editor-template.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditorTemplateComponent = /** @class */ (function () {
    function EditorTemplateComponent(_activatedRoute, location, _userServiceLogOut, _editorTemplateService, _router) {
        this._activatedRoute = _activatedRoute;
        this.location = location;
        this._userServiceLogOut = _userServiceLogOut;
        this._editorTemplateService = _editorTemplateService;
        this._router = _router;
        this.editorValue = "";
        this.statusMessage = "Loading Data.... plz wait....";
        this.actionRecord = "Add Record";
        this.editId = 0;
        this.editCreatedBy = "";
        this.editDescription = "";
        this.editEditorValue = "";
        //@ViewChild("dd") Description: ElementRef;
        this.ckConfig = {
            uiColor: '#99000',
            toolbarGroups: [
                { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                { name: 'paragraph', groups: ['list'] },
                { name: 'clipboard', groups: ['undo'] }
            ],
            removeButtons: 'Anchor,Outdent,Indent,Strike,Superscript,Subscript,PasteText,Cut,Copy,Paste,Scayt,PasteFromWord,SelectAll',
            forcePasteAsPlainText: true,
            extraPlugins: 'divarea',
            removePlugins: 'elementspath,resize',
            height: 250
        };
        this.ckConfigEdit = {
            uiColor: '#99000',
            toolbarGroups: [
                { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                { name: 'paragraph', groups: ['list'] },
                { name: 'clipboard', groups: ['undo'] }
            ],
            removeButtons: 'Anchor,Outdent,Indent,Strike,Superscript,Subscript,PasteText,Cut,Copy,Paste,Scayt,PasteFromWord,SelectAll',
            forcePasteAsPlainText: true,
            extraPlugins: 'divarea',
            removePlugins: 'elementspath,resize',
            height: 150
        };
    }
    EditorTemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._editorTemplateService.getEditorTemplate()
            .subscribe(function (userData) { return _this.editorTemplateList = userData; }, function (error) {
            _this.statusMessage = "Problem with the service";
        });
    };
    EditorTemplateComponent.prototype.getAllRecord = function () {
        var _this = this;
        this._editorTemplateService.getEditorTemplate()
            .subscribe(function (userData) { return _this.editorTemplateList = userData; }, function (error) {
            _this.statusMessage = "Problem with the service";
        });
    };
    EditorTemplateComponent.prototype.onSubmit = function (model) {
        var _this = this;
        var postedIEditorTemplate = {};
        postedIEditorTemplate.CreatedBy = model.CreatedBy;
        postedIEditorTemplate.Description = model.Description;
        postedIEditorTemplate.TemplateData = model.editor1;
        this._editorTemplateService.insertEditorTemplate(postedIEditorTemplate)
            .subscribe(function (userData) { return _this.statusMessage = userData; }, function (error) {
            _this.statusMessage = "Problem with the service";
        });
        this.ngOnInit();
        this.ngOnInit();
        this.getAllRecord();
    };
    EditorTemplateComponent.prototype.removeClick = function (event) {
        for (var name_1 in CKEDITOR.instances) {
            CKEDITOR.instances[name_1].destroy(true);
        }
    };
    EditorTemplateComponent.prototype.rowClickTemplate = function ($event) {
        debugger;
        var row = __WEBPACK_IMPORTED_MODULE_4_jquery__(event.target).closest('tr');
        var Id = row.find('td:eq(0)').text();
        this.viewDescription = row.find('td:eq(1)').text();
        this.viewCreatedBy = row.find('td:eq(2)').text();
        this.viewTempData = row.find('td:eq(3)').text();
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#viewTempData").html(this.viewTempData);
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#btnViewTemp").trigger("click");
    };
    EditorTemplateComponent.prototype.btnEditClick = function (data) {
        debugger;
        // var row = $(event.target).closest('tr');
        // this.editId =parseInt(row.find('td:eq(0)').text());
        // this.editDescription = row.find('td:eq(1)').text();
        // this.editCreatedBy= row.find('td:eq(2)').text();
        // this.editEditorValue = row.find('td:eq(3)').text();
        this.editId = data.TemplateID;
        this.editDescription = data.Description;
        this.editCreatedBy = data.CreatedBy;
        this.editEditorValue = data.TemplateData;
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#btnEditTemp").trigger("click");
    };
    EditorTemplateComponent.prototype.onSubmitEdit = function (model) {
        var _this = this;
        debugger;
        var id = this.editId;
        var postedIEditorTemplate = {};
        postedIEditorTemplate.TemplateID = this.editId;
        postedIEditorTemplate.CreatedBy = model.editCreatedBy;
        postedIEditorTemplate.Description = model.editDescription;
        postedIEditorTemplate.TemplateData = model.editEditor1;
        //$("#exampleModalEdit").attr("data-dismiss","model");
        this._editorTemplateService.editEditorTemplate(id, postedIEditorTemplate)
            .subscribe(function (userData) { return _this.statusMessage = userData; }, function (error) {
            _this.statusMessage = "Problem with the service";
        });
        this.ngOnInit();
        this.ngOnInit();
        this.getAllRecord();
        // this.getAllRecord();
    };
    EditorTemplateComponent.prototype.btnDeleteClick = function (data) {
        var _this = this;
        var id = data.TemplateID;
        this._editorTemplateService.deleteEditorTemplate(id)
            .subscribe(function (userData) { return _this.statusMessage = userData; }, function (error) {
            _this.statusMessage = "Problem with the service";
        });
        this.ngOnInit();
        this.ngOnInit();
        this.getAllRecord();
    };
    EditorTemplateComponent.prototype.logOut = function () {
        localStorage.removeItem('currentUser');
        this._userServiceLogOut.isUserLoggedIn = false;
        this._router.navigate(["/"]);
    };
    EditorTemplateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editor-template',
            template: __webpack_require__("../../../../../src/app/editor-template/editor-template.component.html"),
            styles: [__webpack_require__("../../../../../src/app/editor-template/editor-template.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__editor_template_service__["a" /* EditorTemplateService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EditorTemplateComponent);
    return EditorTemplateComponent;
}()); //End of Class



/***/ }),

/***/ "../../../../../src/app/employee-accordion/employee-accordion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n  .card>.card-header button[aria-expanded=\"false\"]:after {\r\n    content: \"+\";\r\n    -webkit-transform: rotate(90deg);\r\n    transform: rotate(90deg);\r\n    transform: rotate(90deg);\r\n    color: #777;\r\n    font-weight: bold;\r\n    margin-left: 200px;\r\n  }\r\n\r\n  .card>.card-header button[aria-expanded=\"true\"]:after {\r\n    content: \"\\2212\";\r\n    -webkit-transform: rotate(180deg);\r\n    transform: rotate(90deg);\r\n    color: #777;\r\n    font-weight: bold;\r\n    margin-left: 200px;\r\n  }\r\n\r\n  .card>.card-header button{\r\n    display: block;\r\n    padding: 10px 15px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employee-accordion/employee-accordion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3\">\n\n  </div>\n  <div class=\"col-md-6\">\n      <table *ngIf=\"employee\" class=\"table table-bordered table-hover\">\n          <tr>\n              <td colspan=\"2\" class=\"alert-success\" \n              style=\"text-align: center;font-size: 33px;font-weight: bold;\">\n              Employee Details</td>\n          </tr>\n          <tr>\n              <td>First Name</td>\n              <td>{{employee.FirstName}}</td>\n          </tr>\n          <tr>\n              <td>Last Name</td>\n              <td>{{employee.LastName}}</td>\n          </tr>\n          <tr>\n              <td>Gender</td>\n              <td>{{employee.Gender}}</td>\n          </tr>\n          <tr>\n              <td>Salary</td>\n              <td>{{employee.Salary}}</td>\n          </tr>\n          <tr>\n              <td>State</td>\n              <td>{{employee.State}}</td>\n          </tr>\n      \n      </table>\n    </div>\n    <div class=\"col-md-3\">\n        <div style=\"margin-top:5px;\">\n            <input type=\"button\" class=\"btn btn-primary\" (click)=\"goBack();\" \n                   value=\"Back to Employee List\" />\n        </div>\n      </div>\n\n \n    <div *ngIf=\"!employee\">\n        {{statusMessage}}\n    </div>\n    \n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-6\">\n          <div id=\"accordion\" *ngIf=\"employee\">\n            \n                <div class=\"card\">\n                      <div class=\"card-header\" id=\"headingId\">\n                            <button class=\"btn\" data-toggle=\"collapse\" data-target=\"#collapseId\" aria-expanded=\"true\" \n                            aria-controls=\"collapseId\">\n                                  Employee ID\n                            </button>\n                      </div>\n                                \n                      <div id=\"collapseId\" class=\"collapse show\" aria-labelledby=\"headingId\" data-parent=\"#accordion\">\n                            <div class=\"card-body\">\n                                {{employee.Id}}\n                            </div>\n                      </div>\n                </div>\n                <div class=\"card\">\n                      <div class=\"card-header\" id=\"headingFname\">\n                            <button class=\"btn collapsed\" data-toggle=\"collapse\" data-target=\"#collapseFname\" \n                            aria-expanded=\"false\" aria-controls=\"collapseFname\">\n                                  Employee First Name\n                            </button>\n                      </div>\n                      <div id=\"collapseFname\" class=\"collapse\" aria-labelledby=\"headingFname\" data-parent=\"#accordion\">\n                            <div class=\"card-body\">\n                                {{employee.FirstName}}\n                            </div>\n                            </div>\n                      </div>\n                <div class=\"card\">\n                      <div class=\"card-header\" id=\"headingLname\">\n                            <button class=\"btn collapsed\" data-toggle=\"collapse\" data-target=\"#collapseLname\"\n                             aria-expanded=\"false\" aria-controls=\"collapseLname\">\n                                Employee Last Name\n                            </button>\n                      </div>\n                      <div id=\"collapseLname\" class=\"collapse\" aria-labelledby=\"headingLname\" data-parent=\"#accordion\">\n                            <div class=\"card-body\">\n                                {{employee.LastName}}\n                            </div>\n                      </div>\n                </div>\n                <div class=\"card\">\n                    <div class=\"card-header\" id=\"headingGender\">\n                          <button class=\"btn collapsed\" data-toggle=\"collapse\" data-target=\"#collapseGender\" \n                          aria-expanded=\"false\" aria-controls=\"collapseGender\">\n                          Employee Gender\n                          </button>\n                    </div>\n                    <div id=\"collapseGender\" class=\"collapse\" aria-labelledby=\"headingGender\" \n                    data-parent=\"#accordion\">\n                          <div class=\"card-body\">\n                              {{employee.Gender}}\n                          </div>\n                    </div>\n              </div>\n              <div class=\"card\">\n                  <div class=\"card-header\" id=\"headingSalary\">\n                        <button class=\"btn collapsed\" data-toggle=\"collapse\" data-target=\"#collapseSalary\" \n                        aria-expanded=\"false\" aria-controls=\"collapseSalary\">\n                        Employee Salary\n                        </button>\n                  </div>\n                  <div id=\"collapseSalary\" class=\"collapse\" aria-labelledby=\"headingSalary\" \n                  data-parent=\"#accordion\">\n                        <div class=\"card-body\">\n                            {{employee.Salary}}\n                        </div>\n                  </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-header\" id=\"headingState\">\n                      <button class=\"btn collapsed\" data-toggle=\"collapse\" data-target=\"#collapseState\" \n                      aria-expanded=\"false\" aria-controls=\"collapseState\">\n                      Employee State\n                      </button>\n                </div>\n                <div id=\"collapseState\" class=\"collapse\" aria-labelledby=\"headingState\" \n                data-parent=\"#accordion\">\n                      <div class=\"card-body\">\n                          {{employee.State}}\n                      </div>\n                </div>\n          </div>\n          </div>\n         \n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/employee-accordion/employee-accordion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeAccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employee_service_service__ = __webpack_require__("../../../../../src/app/employee-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeAccordionComponent = /** @class */ (function () {
    function EmployeeAccordionComponent(_activatedRoute, location, _employeeService, _router) {
        this._activatedRoute = _activatedRoute;
        this.location = location;
        this._employeeService = _employeeService;
        this._router = _router;
    }
    EmployeeAccordionComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        var empID = this._activatedRoute.snapshot.params["id"];
        this._employeeService.getEmployeeByCode(empID)
            .subscribe(function (userData) { return _this.employee = userData; }, function (error) {
            _this.statusMessage = "Problem with the service";
        });
    };
    EmployeeAccordionComponent.prototype.goBack = function () {
        //this.location.back();
        this._router.navigate(["/cascade"]);
    };
    EmployeeAccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employee-accordion',
            template: __webpack_require__("../../../../../src/app/employee-accordion/employee-accordion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/employee-accordion/employee-accordion.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_3__employee_service_service__["a" /* EmployeeServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EmployeeAccordionComponent);
    return EmployeeAccordionComponent;
}()); //End of class



/***/ }),

/***/ "../../../../../src/app/employee-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw__ = __webpack_require__("../../../../rxjs/add/Observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import 'rxjs/add/operator/toPromise';

//import { Post } from './post
var EmployeeServiceService = /** @class */ (function () {
    function EmployeeServiceService(_http) {
        this._http = _http;
    }
    EmployeeServiceService.prototype.getEmployee = function () {
        return this._http.get("http://vimalraj.somee.com/api/Employees")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmployeeServiceService.prototype.getEmployeeByCode = function (id) {
        debugger;
        var url = "http://vimalraj.somee.com/api/Employees/";
        return this._http.get(url + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmployeeServiceService.prototype.deleteEmployeeById = function (empCode) {
        return this._http.post("http://vimalraj.somee.com/api/Employees/DeleteEmployee?Id=" + empCode, "", "")
            .map(function (response) { return response.toString(); })
            .catch(this.handleError);
    };
    EmployeeServiceService.prototype.insertEmployee = function (empID, empFname, empLname, empGender, empSalary, empStatus) {
        return this._http.post("http://vimalraj.somee.com/api/Employees/InsertEmployee?id=" + empID + "&fname=" + empFname + "&lname=" + empLname + "&gender=" + empGender + "&salary=" + empSalary + "&status=" + empStatus, "", "")
            .map(function (response) { return response.toString(); })
            .catch(this.handleError);
    };
    EmployeeServiceService.prototype.insertUserEmployee = function (userFname, userLname, userGender, userHAddress, userCity, userState, userZip, userEmail, userMob, userSalary) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("http://vimalraj.somee.com/api/UserRegistration?fname=" + userFname + "&lname=" + userLname + "&gender=" + userGender + "&haddress=" + userHAddress + "&city=" + userCity + "&state=" + userState + "&zip=" + userZip + "&email=" + userEmail + "&mob=" + userMob + "&salary=" + userSalary, "", "")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmployeeServiceService.prototype.handleError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    EmployeeServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], EmployeeServiceService);
    return EmployeeServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding: 1rem;\r\n    background-color: #41b1e6;\r\n    text-align: center;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  @Copyright Reserved. Contect for Website Development <b> Mr. Vimal Raj 9631127666, 8851626273 </b>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header{\r\n    text-align:center;\r\n    padding : 20px 0;\r\n    font-size:30px;\r\n    border-bottom:2px solid #eee;\r\n}\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n}\r\nli {\r\n    float: left;\r\n   \r\n}\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\nli a:hover:not(.active) {\r\n    background-color: #111;\r\n}\r\n.active {\r\n    background-color: #4CAF50;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<ul style=\"text-align:center;\">\n  <!-- <li routerLinkActive=\"active\"><a [routerLink]=\"['/']\">Home</a></li>\n  <li routerLinkActive=\"active\"><a [routerLink]=\"['/register']\" >Register</a> -->\n  <!-- <li routerLinkActive=\"active\"><a [routerLink]=\"['/upload']\" >Upload Picture</a> -->\n  <li routerLinkActive=\"active\"><a [routerLink]=\"['/dashboard']\" >Dashboard </a>\n  <li routerLinkActive=\"active\"><a [routerLink]=\"['/product']\" >Insert Product</a>\n  <li routerLinkActive=\"active\"><a [routerLink]=\"['/productList']\" >Product List</a>\n  <li routerLinkActive=\"active\"><a [routerLink]=\"['upload']\" >All upload functionality</a>\n  <li routerLinkActive=\"active\"><a [routerLink]=\"['collapse']\" >Collapse Expande</a>\n  <li routerLinkActive=\"active\"><a [routerLink]=\"['cascade']\" >Country</a>\n  <li routerLinkActive=\"active\"><a [routerLink]=\"['/editorTemplate']\" >Editor Template</a>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_userService) {
        this._userService = _userService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        console.log('Is user Logged In', this._userService.getUserLoggedIn());
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/iuserservice.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IuserserviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw__ = __webpack_require__("../../../../rxjs/add/Observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// //import 'rxjs/add/operator/toPromise';

var IuserserviceService = /** @class */ (function () {
    function IuserserviceService(_http) {
        this._http = _http;
    }
    IuserserviceService.prototype.getUsers = function () {
        return this._http.get('http://vimalraj.somee.com/api/LoginUser')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    IuserserviceService.prototype.insertUser = function (
        // userName: string, userUserName: string,userPassword:string,userEmail:string,userAddress:string, userGender: string
        model) {
        debugger;
        // let CUser={
        //   name:userName,
        // UserName:userUserName,
        // Password:userPassword,
        // email:userEmail,
        // gender:userGender,
        // address:userAddress
        // }
        // thAnonymousSubscriptionme=userName;
        // this.CreateUser.UserName=userUserName;
        // this.CreateUser.Password=userPassword;
        // this.CreateUser.email=userEmail;
        // this.CreateUser.gender=userGender;
        // this.CreateUser.address=userAddress;
        //const body = JSON.stringify(CUser);
        //var model= JSON.stringify(mmodel);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //let headers=new Headers();
        //headers.append("Content-Type","application/x-www-form-urlencoded");
        //headers.append("Accept","application/json");
        //let options=new RequestOptions({headers:headers});
        //let param='json='+body;
        // const options = new RequestOptions({
        //   headers: Content-Type,
        //   responseType: ResponseContentType.Json,
        //   params: params,
        //   body: data,
        //   withCredentials: false
        // });
        return this._http.post("http://vimalraj.somee.com/api/LoginUser", model, options)
            .map(function (response) { return console.log(response.toString()); })
            .catch(this.handleError);
    };
    IuserserviceService.prototype.iinsertUser = function (model) {
        debugger;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json; charset=UTS-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("http://vimalraj.somee.com/api/LoginUser", model, options)
            .map(function (response) { return console.log(response.json()); });
    };
    // uploadImage(formData){// insert record
    //   debugger;
    //   let headers = new Headers({ 'Content-Type': 'application/json; charset=UTS-8' });
    //    let options = new RequestOptions({ headers: headers});
    //   return this._http.post("http://localhost:54163/api/LoginUser/Edit",model,options)
    // 		.map(response =>console.log( response.json()));
    // }
    IuserserviceService.prototype.upload = function (files) {
        debugger;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'multipart/form-data', 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("http://vimalraj.somee.com/api/LoginUser/UploadFile", files)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error); });
    };
    IuserserviceService.prototype.handleError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    IuserserviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], IuserserviceService);
    return IuserserviceService;
}());

// insertUser(userName: string, userUserName: string,userPassword:string,userEmail:string,userAddress:string, userGender: string): Observable<string> {// insert record
//   return this._http.post("http://localhost:54163/api/LoginUser?name=" + userName + "&userName=" + userUserName + "&password=" + userPassword + "&email=" + userEmail + "&address=" + userAddress + "&gender=" + userGender, "", "")
//     .map((response: Response) => response.toString())
//     .catch(this.handleError);
// } 


/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n    -webkit-box-flex:1;\r\n        -ms-flex-positive:1;\r\n            flex-grow:1;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-pack:center;\r\n        -ms-flex-pack:center;\r\n            justify-content:center;\r\n    -webkit-box-align:center;\r\n        -ms-flex-align:center;\r\n            align-items:center;\r\n}\r\n\r\ndiv.input{\r\n    position:relative;\r\n    margin-top:20px;\r\n}\r\n\r\ndiv.input lable{\r\n    position:absolute;\r\n    top:0;\r\n    -webkit-transform:translateY(-50%);\r\n            transform:translateY(-50%);\r\n    left:10px;\r\n    background:white;\r\n    padding:5px 2px;\r\n}\r\n\r\ndiv.input input{\r\n    padding : 10px 20px;\r\n    font-size:25px;\r\n    outline:0;\r\n     \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <div *ngIf=\"statusMessage\">\n  <div class=\"alert alert-danger\" *ngIf=\"!(statusMessage=='')\">\n      {{statusMessage}}\n      </div>\n    </div>\n  <h2>Login</h2>\n  <form  name=\"form\" (ngSubmit)=\"onSubmit($event)\">\n      <div class=\"form-group\" >\n          <label>Username</label>\n          <input type=\"text\" class=\"form-control\" id=\"userName\"  />\n      </div>\n      <div class=\"form-group\" >\n          <label >Password</label>\n          <input type=\"password\" class=\"form-control\" id=\"password\"  />\n      </div>\n      <div class=\"form-group\">\n          <input type=\"submit\" value=\"Submit\"  class=\"btn btn-primary\">\n          <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n      </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__iuserservice_service__ = __webpack_require__("../../../../../src/app/iuserservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_service__ = __webpack_require__("../../../../../src/app/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(_router, _userService, _iUserService, _alertService) {
        this._router = _router;
        this._userService = _userService;
        this._iUserService = _iUserService;
        this._alertService = _alertService;
        this.loading = false;
        if (localStorage.getItem('currentUser')) {
            this._router.navigate(["dashboard"]);
        }
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statusMessage = this._alertService.getMessage();
        this._iUserService.getUsers() //good place bec service takes time to load
            .subscribe(function (usersData) { return _this.Users = usersData; }, function (error) {
            _this.statusMessage = "Problem with the service";
        });
    };
    LoginFormComponent.prototype.getUserNamePassword = function (userName, passWord) {
        debugger;
        return this.Users.filter(function (e) { return e.UserName === userName && e.Password === passWord; }).length;
    };
    LoginFormComponent.prototype.onSubmit = function (evt) {
        debugger;
        evt.preventDefault();
        var uname = evt.target.elements[0].value;
        var password = evt.target.elements[1].value;
        if (this.getUserNamePassword(uname, password) >= 1) {
            localStorage.setItem('currentUser', uname);
            this._userService.setUserLoggedIn();
            this._router.navigate(["dashboard"]);
        }
        else {
            this._alertService.error("Invalid Username Or Password");
            this.loading = false;
            this.statusMessage = this._alertService.getMessage();
        }
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__("../../../../../src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-form/login-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__iuserservice_service__["a" /* IuserserviceService */],
            __WEBPACK_IMPORTED_MODULE_4__alert_service__["a" /* AlertService */]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"alert-danger\">\n  Page Not Found\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw__ = __webpack_require__("../../../../rxjs/add/Observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_Observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// //import 'rxjs/add/operator/toPromise';

var ProductInfoService = /** @class */ (function () {
    function ProductInfoService(_http) {
        this._http = _http;
    }
    ProductInfoService.prototype.getProducts = function () {
        return this._http.get('http://vimalraj.somee.com/api/Product')
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProductInfoService.prototype.insertProduct = function (files) {
        debugger;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'multipart/form-data', 'Accept': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("http://vimalraj.somee.com/api/Product/Insert", files)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error); });
    };
    ProductInfoService.prototype.handleError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    ProductInfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProductInfoService);
    return ProductInfoService;
}());



/***/ }),

/***/ "../../../../../src/app/product-insert/product-insert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n    -webkit-box-flex:1;\r\n        -ms-flex-positive:1;\r\n            flex-grow:1;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-pack:center;\r\n        -ms-flex-pack:center;\r\n            justify-content:center;\r\n    -webkit-box-align:center;\r\n        -ms-flex-align:center;\r\n            align-items:center;\r\n}\r\n\r\ndiv.input{\r\n    position:relative;\r\n    margin-top:20px;\r\n}\r\n\r\ndiv.input lable{\r\n    position:absolute;\r\n    top:0;\r\n    -webkit-transform:translateY(-50%);\r\n            transform:translateY(-50%);\r\n    left:10px;\r\n    background:white;\r\n    padding:5px 2px;\r\n}\r\n\r\ndiv.input input{\r\n    padding : 10px 20px;\r\n    font-size:25px;\r\n    outline:0;\r\n     \r\n}\r\n\r\ninput.ng-invalid{border-left:5px solid red}\r\n\r\ninput.ng-valid{border-left:5px solid green}\r\n\r\nselect.ng-valid{border-left:5px solid green}\r\n\r\nselect.ng-invalid{border-left:5px solid red}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-insert/product-insert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\" style=\"margin-right: 100px;\">\n    <h2>Product Insert</h2>\n    <div style=\"margin-top: -43px; margin-left: 800px;\">\n          <input type=\"button\" (click)=\"logOut()\" value=\"Log Out\" class=\"btn btn-success\">\n    </div>\n  <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm.value); userForm.reset();\">\n      <div class=\"form-group\">\n          <label for=\"Name\">Product Name</label>\n          <input type=\"text\" required #pNameRef=\"ngModel\" minlength=\"3\" maxlength=\"15\"\n           class=\"form-control\" name=\"pName\"  ngModel/>\n           <div *ngIf=\"pNameRef.errors && (pNameRef.dirty || pNameRef.touched) \" class=\"alert-warning\">\n                <label [hidden]=\"!pNameRef.errors.required\">\n                    Please Enter Product Name\n                </label>\n                <label [hidden]=\"!pNameRef.errors.minlength\">\n                    Please Enter Atleast 3 charecter\n                </label>\n            </div>\n      </div>\n      <div class=\"form-group\" >\n          <label for=\"Price\">Product Price </label>\n          <input type=\"text\" required class=\"form-control\" name=\"pPrice\" maxlength=\"10\"\n            #pPriceRef=\"ngModel\"  pattern=\"^[0-9]\\d*(\\.\\d+)?$\"  ngModel />\n          <div class=\"alertDiv\">\n                <div *ngIf=\"pPriceRef.errors && (pPriceRef.dirty || pPriceRef.touched)\" class=\"alert-warning\">\n                    <label [hidden]=\"!pPriceRef.errors.required\">\n                        Please Enter Price\n                    </label>\n                    <label [hidden]=\"!pPriceRef.errors.pattern\">\n                        Please Enter Digit\n                    </label>\n                </div>\n            </div>\n      </div>\n      <div class=\"form-group\" >\n        <label for=\"Image\">Product Image </label>\n        <input type=\"file\" class=\"form-control\" name=\"Image\" ngModel (change)=\"upload($event)\">\n      </div>\n      <div class=\"form-group\">\n          <input type=\"submit\" [disabled]=\"!userForm.form.valid\" class=\"btn btn-primary\" >\n          <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n          <a [routerLink]=\"['/']\" class=\"btn btn-link\">Cancel</a>\n      </div>\n  </form>\n  <!-- <div>\n    <img src=\"http://localhost:54163/UploadedFiles/Banana.jpg\" alt=\"Fallbackimage\">\n  </div> -->\n</div>\n<!-- <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !pName.valid }\">\n      <label for=\"Name\">Product Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"pName\" [(ngModel)]=\"model.pName\" #Name=\"ngModel\" required />\n      <div *ngIf=\"f.submitted && !pName.valid\" class=\"help-block\">Product Name is required</div>\n  </div>\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !Price.valid }\">\n      <label for=\"Price\">Product Price </label>\n      <input type=\"text\" class=\"form-control\" name=\"Price\" [(ngModel)]=\"model.Price\" #Email=\"ngModel\" required />\n      <div *ngIf=\"f.submitted && !Price.valid\" class=\"help-block\">Price is required</div>\n  </div>\n  <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !Image.valid }\">\n    <label for=\"Image\">Product Image </label>\n    <input type=\"file\" class=\"form-control\" name=\"Image\" [(ngModel)]=\"model.Image\" #Address=\"ngModel\" required />\n    <div *ngIf=\"f.submitted && !Image.valid\" class=\"help-block\">Image is required</div>\n  </div>\n  <div class=\"form-group\">\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n      <a [routerLink]=\"['/']\" class=\"btn btn-link\">Cancel</a>\n  </div>\n</form> -->"

/***/ }),

/***/ "../../../../../src/app/product-insert/product-insert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductInsertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_info_service__ = __webpack_require__("../../../../../src/app/product-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductInsertComponent = /** @class */ (function () {
    function ProductInsertComponent(router, _iProductService, //private element:ElementRef) {
        _userService, _router) {
        this.router = router;
        this._iProductService = _iProductService;
        this._userService = _userService;
        this._router = _router;
        this.model = {};
        this.loading = false;
        this.fData = new FormData;
        //element.nativeElement.style.color="RED";
    }
    ProductInsertComponent.prototype.ngOnInit = function () {
        //setInterval(()=>this.send2server(),2000);
    };
    ProductInsertComponent.prototype.upload = function (event) {
        var files = event.target.files;
        console.log(files[0]);
        this.fData.append("UploadedImage", files[0]);
    };
    ProductInsertComponent.prototype.onSubmit = function (value) {
        var _this = this;
        debugger;
        alert(value.pName);
        console.log(value);
        this.fData.append("pName", value.pName);
        this.fData.append("pPrice", value.pPrice);
        console.log(this.fData);
        this.loading = true;
        this._iProductService.insertProduct(this.fData)
            .subscribe(function (success) {
            console.log(success);
            _this.msg = success;
            _this.router.navigate(['/productList']);
        }, function (error) {
            console.log(error);
        });
        alert(this.msg);
    };
    // @HostListener("document:click",["$event"]) elemClick(elem){
    //   console.log("Clicked",elem);
    // }
    // send2server(){
    //   console.log(this.pNameRef.value);
    // }
    ProductInsertComponent.prototype.logOut = function () {
        localStorage.removeItem('currentUser');
        this._userService.isUserLoggedIn = false;
        this._router.navigate(["/"]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("pNameRef"),
        __metadata("design:type", Object)
    ], ProductInsertComponent.prototype, "pNameRef", void 0);
    ProductInsertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-insert',
            template: __webpack_require__("../../../../../src/app/product-insert/product-insert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-insert/product-insert.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__product_info_service__["a" /* ProductInfoService */],
            __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProductInsertComponent);
    return ProductInsertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul { padding:0; width:780px; margin:20px auto}\r\n  \tli { display:inline;}\r\n  \t.tn{ \r\n\t   margin:2px 0px;\r\n\t   -webkit-box-shadow:#999 1px 1px 3px 1px;\r\n\t           box-shadow:#999 1px 1px 3px 1px; \r\n\t   cursor: pointer \r\n        }\r\n  \t.modal-content {\r\n\t    width: 670px !important;\r\n    }\r\n  \t.selectedImage{ \r\n        width:640px;\r\n        position:relative }\r\n  \t.caption{\r\n        position:absolute;\r\n            height:70px;\r\n        width:100%;\r\n        top:410;\r\n        left:0;\r\n        opacity:0.9;\r\n        background-color:black;\r\n        color:white;\r\n        padding:5px;\r\n        font-family:verdana;\r\n        font-size:12px;\r\n    }\r\n  \tp {\r\n       -webkit-margin-before: 5px !important;\r\n       -webkit-margin-after: 5px !important;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-10\">\n      <table class=\"table table-bordered table-hover\">\n          <thead>\n              <tr class=\"alert-success\">\n                  <th>ID</th>\n                  <th>Product Name</th>\n                  <th>Product Price</th>\n                  <th>Product Image Name</th>\n                  <th width=\"200px;\">Product Image</th>\n                  <th width=\"200px;\">Download Image</th>\n                  <!--<th>First</th>\n                  <th>Last</th>\n                  <th>ODD</th>\n                  <th>Even</th>-->\n\n              </tr>\n          </thead>\n          <tbody>\n              <ng-container *ngFor=\"let product of products;\">\n                  <tr>\n                      <!-- <td>\n                          <a [routerLink]=\"['/Employee',employee.Id]\">\n                              {{employee.Id}}\n                          </a>\n                      </td> -->\n                      <td>{{product.productid}}</td>\n                      <td>{{product.productname}}</td>\n                      <td>{{product.price}}</td>\n                      <td>{{product.productImage}}</td>\n                      <td>\n                        <img src=\"http://vimalraj.somee.com/UploadedFiles/{{product.productImage}}\" \n                        style=\"height: 200px; width: 250px;\"\n                        alt=\"Fallbackimage\"\n                        data-toggle=\"modal\" data-target=\"#selectedImageModal\" class=\"tn\"\n                                    (click)=setSelectedImage(product)>\n                        \n                      </td>\n                      <td>\n                          <a href=\"http://vimalraj.somee.com/UploadedFiles/{{product.productImage}}\" download>\n                          <img src=\"http://vimalraj.somee.com/UploadedFiles/{{product.productImage}}\"\n                          style=\"height: 200px; width: 250px;\">\n                          </a>\n                      </td>\n                      <!--<td>{{f}}</td>\n                      <td>{{l}}</td>\n                      <td>{{o}}</td>\n                      <td>{{e}}</td>-->\n\n\n                  </tr>\n\n              </ng-container>\n              <!--<tr *ngFor=\"let employee of employees; trackBy:trackByEmpIndex; let i=index;let f=first; let l=last; let o=odd; let e=even;\">\n                  <td>{{employee.Id  }}</td>\n                  <td>{{employee.FirstName | uppercase | employeeTitle:employee.Gender }}</td>\n                   <td>{{employee.LastName  }}</td>\n                  <td>{{employee.Gender }}</td>\n                  <td>{{employee.Salary | currency:'USD':true:'1.2-2'}}</td>\n                  <td>{{f}}</td>\n                  <td>{{l}}</td>\n                  <td>{{o}}</td>\n                  <td>{{e}}</td>\n\n              </tr>-->\n              <tr *ngIf=\"!products\">\n\n                  <td colspan=\"6\">{{statusMessage}}</td>\n              </tr>\n              <tr *ngIf=\"products && products.length==0\">\n                  <td colspan=\"6\">No products to display</td>\n              </tr>\n             \n          </tbody>\n          <tfoot>\n            <tr class=\"alert-info\">\n                <td colspan=\"6\"></td>\n            </tr>\n          </tfoot>\n\n      </table>   \n  </div>\n\n  <div class=\"col-md-2\">\n    <div style=\"margin-top: 2px;\">\n            <input type=\"button\" (click)=\"logOut()\" value=\"Log Out\" class=\"btn btn-success\">\n    </div>\n</div>\n  \n</div>\n\n<div class=\"modal fade\" id=\"selectedImageModal\" >\n\t  <div class=\"modal-dialog\" role=\"document\">\n\t    <div class=\"modal-content\">\n\t      <div class=\"modal-body\">\n          <h1>{{selectedImage}}</h1>\n           <img *ngIf=\"selectedImage\" src=\"http://vimalraj.somee.com/UploadedFiles/{{selectedImage}}\"\n           style=\"height: 200px; width: 250px;\"\n           alt=\"{{selectedImage}}\" >\n\t      </div>\n\t    </div>\n\t  </div>\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_info_service__ = __webpack_require__("../../../../../src/app/product-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(_productService, _userService, _router) {
        this._productService = _productService;
        this._userService = _userService;
        this._router = _router;
        this.statusMessage = "Loading Data.... plz wait....";
        //this.employees = this._employeeService.getEmployee();
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._productService.getProducts() //good place bec service takes time to load
            .subscribe(function (productsData) { return _this.products = productsData; }, function (error) {
            _this.statusMessage = "Problem with the service";
        });
    };
    ProductListComponent.prototype.loadAllRecord = function () {
        var _this = this;
        this._productService.getProducts() //good place bec service takes time to load
            .subscribe(function (productsData) { return _this.products = productsData; }, function (error) {
            _this.statusMessage = "Problem with the service";
        });
    };
    ProductListComponent.prototype.setSelectedImage = function (pdt) {
        this.selectedImage = pdt.productImage;
    };
    ProductListComponent.prototype.logOut = function () {
        localStorage.removeItem('currentUser');
        this._userService.isUserLoggedIn = false;
        this._router.navigate(["/"]);
    };
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__("../../../../../src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__product_info_service__["a" /* ProductInfoService */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host{\r\n    -webkit-box-flex:1;\r\n        -ms-flex-positive:1;\r\n            flex-grow:1;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-pack:center;\r\n        -ms-flex-pack:center;\r\n            justify-content:center;\r\n    -webkit-box-align:center;\r\n        -ms-flex-align:center;\r\n            align-items:center;\r\n}\r\ninput.ng-invalid{border-left:5px solid red}\r\ninput.ng-valid{border-left:5px solid green}\r\nselect.ng-valid{border-left:5px solid green}\r\nselect.ng-invalid{border-left:5px solid red}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\" style=\"overflow-x: auto; overflow-y: autol;\">\n    <h2>Register</h2>\n    <form name=\"f\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n        <div class=\"row\">\n        <div class=\"col-md-8 form-group\">\n            <label for=\"Name\">Name</label>\n            <input type=\"text\" class=\"form-control\" minlength=\"4\" maxlength=\"15\" name=\"firstName\" [(ngModel)]=\"model.Name\" #Name=\"ngModel\" required />\n        </div>\n        <div class=\"col-md-4\" style=\"margin-top: 37px;\">\n                  <div *ngIf=\"Name.errors && (Name.dirty || Name.touched) \" class=\"alert-danger\">\n                      <label [hidden]=\"!Name.errors.required\" >\n                           Enter First Name\n                      </label>\n                      <label [hidden]=\"!Name.errors.minlength\" >\n                           Enter Atleast 4 charecter\n                      </label>\n                  </div>\n              </div>\n          </div>\n          <div class=\"row\">\n                  <div class=\"col-md-8 form-group\">\n                      <label for=\"Email\">Email </label>\n                      <input type=\"text\" class=\"form-control\" name=\"Email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n                          [(ngModel)]=\"model.Email\" #Email=\"ngModel\" maxlength=\"50\" required />\n                  </div>\n                  <div class=\"col-md-4\" style=\"margin-top: 37px;\">\n                          <div *ngIf=\"Email.errors && (Email.dirty || Email.touched)\" class=\"alert-danger\">\n                               <label [hidden]=\"!Email.errors.required\">\n                                    Enter Email ID\n                               </label>\n                               <label [hidden]=\"!Email.errors.pattern\">\n                                    Enter a valid email.\n                                </label>\n                          </div>\n                   </div>\n          </div>\n        \n          <div class=\"row\">\n                  <div class=\"col-md-8 form-group\">\n                          <label for=\"Address\">Address </label>\n                          <input type=\"text\" class=\"form-control\" name=\"Address\" [(ngModel)]=\"model.Address\"\n                           #Address=\"ngModel\" maxlength=\"20\" required />\n                  </div>\n                  <div class=\"col-md-4\" style=\"margin-top: 37px;\">\n                          <div *ngIf=\"Address.errors && (Address.dirty || Address.touched) \" class=\"alert-danger\">\n                              <label [hidden]=\"!Address.errors.required\" >\n                                   Enter Address\n                              </label>\n                          </div>\n                  </div>\n        </div>\n        <div class=\"row\">\n              <div class=\"col-md-8 form-group\">\n                      <label for=\"Gender\">Gender </label>\n                      <select class=\"form-control\" required name=\"Gender\" [(ngModel)]=\"model.Gender\">\n                       <!-- #username=\"ngModel\" -->\n                                      <option selected>Male</option>\n                                      <option>Female</option>\n                      </select>\n              </div>\n        </div>\n        <div class=\"row\">\n              <div class=\"col-md-8 form-group\">\n                          <label for=\"username\">Username</label>\n                          <input type=\"text\" class=\"form-control\" maxlength=\"20\" minlength=\"4\" \n                          name=\"username\" [(ngModel)]=\"model.username\" (keyup)=\"checkUername($event)\"\n                           #username=\"ngModel\" required />\n              </div>\n              <div class=\"col-md-4\" style=\"margin-top: 37px;\">\n                      <div *ngIf=\"username.errors && (username.dirty || username.touched) \" class=\"alert-danger\">\n                          <label [hidden]=\"!username.errors.required\" >\n                               Enter User Name\n                          </label>\n                          <label [hidden]=\"!username.errors.minlength\" >\n                               Enter Atleast 4 charecter\n                          </label>\n                      </div>\n                      <div *ngIf=\"userNameAvailtable\" class=\"alert-danger\">\n                            {{userNameAvailtable}}\n                    </div>\n              </div>\n        </div>\n        <div class=\"row\">\n              <div class=\"col-md-8 form-group\">\n                          <label for=\"password\">Password</label>\n                          <input type=\"password\" class=\"form-control\" maxlength=\"20\" minlength=\"4\"\n                          name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n              </div>\n              <div class=\"col-md-4\" style=\"margin-top: 37px;\">\n                      <div *ngIf=\"password.errors && (password.dirty || password.touched) \" class=\"alert-danger\">\n                          <label [hidden]=\"!password.errors.required\" >\n                               Enter Password\n                          </label>\n                          <label [hidden]=\"!password.errors.minlength\" >\n                               Enter Atleast 4 charecter\n                          </label>\n                      </div>\n              </div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"(!f.form.valid) || (userNameAvailtable!='')\" class=\"btn btn-primary\">Register</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/']\" class=\"btn btn-link\">Cancel</a>\n        </div>\n    </form>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__iuserservice_service__ = __webpack_require__("../../../../../src/app/iuserservice.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, 
        //private _alertService:AlertService,
        _iUserService) {
        //this.objUser= new user(100,"v","v","v","v","v","v");
        this.router = router;
        this._iUserService = _iUserService;
        this.model = {};
        //objUser:user;
        this.loading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.Gender = "Male";
        this._iUserService.getUsers() //good place bec service takes time to load
            .subscribe(function (usersData) { return _this.Users = usersData; }, function (error) {
            _this.statusMessage = "Problem with the service";
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        debugger;
        // alert(this.model.name);
        this.loading = true;
        //  let  CUser= {
        //   name:this.model.Name,
        // UserName:this.model.username,
        // Password:this.model.password,
        // email:this.model.Email,
        // gender:this.model.Gender,
        // address:this.model.Address
        // }
        // this.objUser.UserName=this.model.username
        // this.objUser.Password=this.model.password; 
        // this.objUser.email=this.model.Email;
        // this.objUser.address=this.model.Address;
        // this.objUser.gender=this.model.Gender;
        // this._iUserService.iinsertUser(this.objUser)
        // .subscribe((status)=>
        // {
        //   console.log(status);
        // }
        // )
        this._iUserService.insertUser(
        // this.model.Name, this.model.username, this.model.password, 
        // this.model.Email, this.model.Address,this.model.Gender
        //this.objUser
        this.model)
            .subscribe(function (data) {
            //this._alertService.success('Registration successful');
            _this.router.navigate(['/']);
        }, function (error) {
            //this._alertService.error("Error");
            _this.loading = false;
        });
    };
    RegisterComponent.prototype.checkUername = function (event) {
        var userName;
        userName = event.target.value;
        this.checkuserNameAvailtable(userName);
    };
    RegisterComponent.prototype.checkuserNameAvailtable = function (userName) {
        var isAvailable;
        isAvailable = this.Users.filter(function (u) { return u.UserName == userName; }).length;
        if (userName.length >= 4) {
            if (isAvailable != 0) {
                this.userNameAvailtable = "Someone already has that username. Try another?";
            }
            else {
                this.userNameAvailtable = "";
            }
            console.log(this.userNameAvailtable);
        }
        else {
            this.userNameAvailtable = "";
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__iuserservice_service__["a" /* IuserserviceService */]])
    ], RegisterComponent);
    return RegisterComponent;
}()); //End Class

//  class user{
//   userid:number;
//   name:string;
//   UserName:string;
//   Password:string;
//   email:string;
//   address:string;
//   gender:string;
//   constructor(i:number, n:string,un:string,p:string,e:string,g:string,a:string){
//     this.userid=i;
//     this.name=n;
//     this.UserName=un;
//     this.Password=p;
//     this.email=e;
//     this.address=a;
//     this.gender=g;
//   }
// } 


/***/ }),

/***/ "../../../../../src/app/up-load/up-load.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".set-border {\r\n    border: 5px inset #4f4f4f;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/up-load/up-load.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-10 alert-success\">\n        <h1 style=\"text-align: center;\" >FILE UPLOAD </h1>\n    </div>\n    <div class=\"col-md-2\">\n        <div style=\"margin-top: 2px;\">\n            <input type=\"button\" (click)=\"logOut()\" value=\"Log Out\" class=\"btn btn-success\">\n        </div>\n    </div>\n</div>\n<br>\n\n<div class=\"row\">\n\n<div class=\"col-md-6\"> <h3>Only Image Upload</h3>\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n                <div class=\"jumbotron\">\n                        <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm.value);\">\n                            <div class=\"row\" style=\"height: 200px;\">\n                                <div class=\"col-md-6\" >\n                                        <div class=\"form-group\">\n                                    <input type=\"file\" id=\"uploadFile\" accept=\"image/*\"   (change)=\"upload($event)\" #fileInput  class=\"form-control\" name=\"fileUpd\"  >\n                                    <!-- <div *ngIf=\"fileInput.errors && (fileInput.dirty || fileInput.touched)\" class=\"alert-danger\">\n                                            <label [hidden]=\"!fileInput.errors.required\">\n                                                Please Enter Salary\n                                            </label>\n                                            <label [hidden]=\"!fileInput.errors\">\n                                                Please Enter Digit {{fileInput.errors.required}}\n                                            </label>\n                                        </div>\n                                        <div *ngIf=\"!fileSelected\">\n                                                <span class=\"help-block error\" [hidden]=\"!fileInput.fileSelected\"> \n                                                  File is Required \n                                                </span>\n                                               </div> -->\n                                       \n                                    <br>\n                                    <br>\n                                    <span id=\"errorFile\" class=\"alert-danger\"></span>\n                                        </div>\n                                </div>\n                                <div class=\"col-md-4\">\n                                        <div >\n                                           <div style=\"border:1px solid rgb(17, 17, 17); height: 200px; width: 200px;\">\n                                           <img src=\"\" id=\"showImage\" required />\n                                           </div>\n                                        </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                    <div class=\"col-md-4\">\n                                             <input type=\"submit\" disabled=\"disabled\" id=\"btnSubmit\" class=\"btn btn-primary\" value=\"Upload Pic\" > \n                                             <!-- <button  type=\"submit\"  class=\"btn btn-success\">Submit</button> -->\n                                        </div>\n                                <div class=\"col-md-4\">\n                                        <!-- <input type=\"reset\"  class=\"btn btn-danger\" value=\"Clear Pic\" >  -->\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"clearFile()\">clear file</button>\n                                </div>\n                            </div>\n                            </form>\n                        </div>\n        </div>\n        <div class=\"col-md-6\">\n            \n            </div>\n    </div>\n   \n</div>\n\n\n\n</div>\n\n\n\n<div class=\"row\">\n\n        <div class=\"col-md-6\"> <h3>Only Excel File Upload</h3>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                        <div class=\"jumbotron\">\n                                <form #userFormExcel=\"ngForm\" (ngSubmit)=\"onSubmitExcel(userFormExcel.value);\">\n                                    <div class=\"row\" style=\"height: 200px;\">\n                                        <div class=\"col-md-6\" >\n                                                <div class=\"form-group\">\n                                            <input type=\"file\" id=\"uploadFileExcel\" \n                                            accept=\"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\"\n                                               (change)=\"uploadExcel($event)\" #fileInputExcel  class=\"form-control\" \n                                               name=\"fileUpd\" >\n                                            <!-- <div *ngIf=\"fileInput.errors && (fileInput.dirty || fileInput.touched)\" class=\"alert-danger\">\n                                                    <label [hidden]=\"!fileInput.errors.required\">\n                                                        Please Enter Salary\n                                                    </label>\n                                                    <label [hidden]=\"!fileInput.errors\">\n                                                        Please Enter Digit {{fileInput.errors.required}}\n                                                    </label>\n                                                </div>\n                                                <div *ngIf=\"!fileSelected\">\n                                                        <span class=\"help-block error\" [hidden]=\"!fileInput.fileSelected\"> \n                                                          File is Required \n                                                        </span>\n                                                       </div> -->\n                                               \n                                            <br>\n                                            <br>\n                                            <span id=\"errorFileExcel\" class=\"alert-danger\"></span>\n                                            \n                                                </div>\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                                <div>\n                                                   <div style=\"border:1px solid rgb(17, 17, 17); height: 200px; width: 200px;\">\n                                                   <img src=\"\" id=\"showImageExcel\" required />\n                                                   </div>\n                                                </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                            <div class=\"col-md-4\">\n                                                     <input type=\"submit\" disabled=\"disabled\" id=\"btnSubmitExcel\" class=\"btn btn-primary\" value=\"Upload Pic\" > \n                                                     <!-- <button  type=\"submit\"  class=\"btn btn-success\">Submit</button> -->\n                                                </div>\n                                        <div class=\"col-md-4\">\n                                                <!-- <input type=\"reset\"  class=\"btn btn-danger\" value=\"Clear Pic\" >  -->\n                                            <button type=\"button\" class=\"btn btn-danger\" (click)=\"clearFileExcel()\">clear file</button>\n                                        </div>\n                                    </div>\n                                    </form>\n                                </div>\n                </div>\n                <div class=\"col-md-6\">\n                    \n                    </div>\n            </div>\n           \n        </div>\n\n        <div class=\"col-md-6\"> <h3>Only Excel File Upload</h3>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                        <div class=\"jumbotron set-border\" style=\"padding: 0; height:365px;overflow-x:scroll;overflow-y:scroll;\" width=\"100%\" >\n                                \n                                    <table border=\"1\" class=\"\" id=\"exceltable\"></table>\n                        </div>\n                </div>\n            </div>\n        </div>\n\n\n</div>\n\n\n\n\n\n\n\n<div class=\"row\">\n\n        <div class=\"col-md-6\"> <h3>Only PDF File Upload</h3>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                        <div class=\"jumbotron\">\n                                <form #userFormPDF=\"ngForm\" (ngSubmit)=\"onSubmitPDF(userFormPDF.value);\">\n                                    <div class=\"row\" style=\"height: 200px;\">\n                                        <div class=\"col-md-6\" >\n                                                <div class=\"form-group\">\n                                            <input type=\"file\" id=\"uploadFile\" accept=\" application/pdf\"   (change)=\"uploadPDF($event)\" #fileInputPDF  class=\"form-control\" name=\"fileUpd\"  >\n                                            <br>\n                                            <br>\n                                            <span id=\"errorFilePDF\" class=\"alert-danger\"></span>\n                                                </div>\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                                <div >\n                                                   <div style=\"border:1px solid rgb(17, 17, 17); height: 200px; width: 200px;\">\n                                                   <img src=\"\" id=\"showImagePDF\" required />\n                                                   </div>\n                                                </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                            <div class=\"col-md-4\">\n                                                     <input type=\"submit\" disabled=\"disabled\" id=\"btnSubmitPDF\" class=\"btn btn-primary\" value=\"Upload Pic\" > \n                                                </div>\n                                            <div class=\"col-md-4\">\n                                                     <button type=\"button\" class=\"btn btn-danger\" (click)=\"clearFilePDF()\">clear file</button>\n                                            </div>\n                                    </div>\n                                    </form>\n                                </div>\n                </div>\n                <div class=\"col-md-6\">\n                    \n                    </div>\n            </div>\n           \n        </div>\n\n        <!-- <div class=\"col-md-6\"> <h3>Only OFFICE File Upload</h3>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                        <div class=\"jumbotron\">\n                                <form #userFormOFFICE=\"ngForm\" (ngSubmit)=\"onSubmitOFFICE(userFormOFFICE.value);\">\n                                    <div class=\"row\" style=\"height: 200px;\">\n                                        <div class=\"col-md-6\" >\n                                                <div class=\"form-group\">\n                                            <input type=\"file\" id=\"uploadFile\" \n                                      accept=\"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain,\"   \n                                            (change)=\"uploadOFFICE($event)\" #fileInputOFFICE \n                                             class=\"form-control\" name=\"fileUpd\"  >\n                                            <br>\n                                            <br>\n                                            <span id=\"errorFileOFFICE\" class=\"alert-danger\"></span>\n                                                </div>\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                                <div >\n                                                   <div style=\"border:1px solid rgb(17, 17, 17); height: 200px; width: 200px;\">\n                                                   <img src=\"\" id=\"showImageOFFICE\" required />\n                                                   </div>\n                                                </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                            <div class=\"col-md-4\">\n                                                     <input type=\"submit\" disabled=\"disabled\" id=\"btnSubmitOFFICE\" class=\"btn btn-primary\" value=\"Upload File\" > \n                                                </div>\n                                            <div class=\"col-md-4\">\n                                                     <button type=\"button\" class=\"btn btn-danger\" (click)=\"clearFileOFFICE()\">Clear File</button>\n                                            </div>\n                                    </div>\n                                    </form>\n                                </div>\n                </div>\n                <div class=\"col-md-6\">\n                    \n                    </div>\n            </div>\n           \n        </div> -->\n\n        <div class=\"col-md-6\"> <h3>Only PDF File Upload</h3>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                        <div class=\"jumbotron\" style=\"padding: 0;\">\n                                <iframe width=\"100%\" height=\"365px;\" id=\"iframePDF\" class=\"set-border\" [attr.src]=\"\" type=\"application/pdf\">\n                                </iframe>\n                        </div>\n                </div>\n            </div>\n        </div>\n        \n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-6\"> <h3>Only OFFICE File Upload</h3>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                    <div class=\"jumbotron\">\n                            <form #userFormOFFICE=\"ngForm\" (ngSubmit)=\"onSubmitOFFICE(userFormOFFICE.value);\">\n                                <div class=\"row\" style=\"height: 200px;\">\n                                    <div class=\"col-md-6\" >\n                                            <div class=\"form-group\">\n                                        <input type=\"file\" id=\"uploadFile\" \n                                  accept=\"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain,\"   \n                                        (change)=\"uploadOFFICE($event)\" #fileInputOFFICE \n                                         class=\"form-control\" name=\"fileUpd\"  >\n                                        <br>\n                                        <br>\n                                        <span id=\"errorFileOFFICE\" class=\"alert-danger\">\n\n                                        </span>\n\n                                            </div>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                            <div >\n                                               <div style=\"border:1px solid rgb(17, 17, 17); height: 200px; width: 200px;\">\n                                               <img src=\"\" id=\"showImageOFFICE\" required />\n                                               </div>\n                                            </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                        <div class=\"col-md-4\">\n                                                 <input type=\"submit\" disabled=\"disabled\" id=\"btnSubmitOFFICE\" class=\"btn btn-primary\" value=\"Upload File\" > \n                                            </div>\n                                        <div class=\"col-md-4\">\n                                                 <button type=\"button\" class=\"btn btn-danger\" (click)=\"clearFileOFFICE()\">Clear File</button>\n                                        </div>\n                                </div>\n                                </form>\n                            </div>\n            </div>\n            <div class=\"col-md-6\">\n                \n                </div>\n        </div>\n       \n    </div>\n\n</div>\n<!-- <div style=\"height:450px;\"> <h3>Only Image Upload</h3>\n    <form name=\"FileForm\">\n<input type=\"file\" id=\"uploadFile\" accept=\"image/*\"   (change)=\"upload($event)\" #fileInput >\n<img src=\"\" id=\"showImage\" width=\"200px\" />\n<button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"clearFile()\">clear file</button>\n</form>\n<BR>\n<br> -->\n\n\n<!-- <input type=\"button\" id=\"btnUpload\" (click)=\"onUpload()\" class=\"btn-primary\" value=\"Upload File\"> -->\n<!-- <input type=\"text\" required #fnameRef=\"ngModel\" minlength=\"4\" maxlength=\"15\" class=\"form-control\" name=\"firstName\" ngModel />\n                    <!--<label>First Name all class:= {{fnameRef.className}}</label>-->\n                    <!-- <div class=\"alertDiv\">\n                        <div *ngIf=\"fnameRef.errors&& (fnameRef.dirty || fnameRef.touched) \" class=\"ValidationError\">\n                            <label [hidden]=\"!fnameRef.errors.required\">\n                                Please Enter First Name\n                            </label>\n                            <label [hidden]=\"!fnameRef.errors.minlength\">\n                                Please Enter Atleast 4 charecter\n                            </label>\n                        </div>\n                    </div> -->"

/***/ }),

/***/ "../../../../../src/app/up-load/up-load.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpLoadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iuserservice_service__ = __webpack_require__("../../../../../src/app/iuserservice.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xlsx__ = __webpack_require__("../../../../xlsx/xlsx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpLoadComponent = /** @class */ (function () {
    function UpLoadComponent(_userService, _userServiceLogOut, _router) {
        this._userService = _userService;
        this._userServiceLogOut = _userServiceLogOut;
        this._router = _router;
        this.model = {};
        this.loading = false;
        this.fData = new FormData;
        this.fDataExcel = new FormData;
        this.fDataPDF = new FormData;
        this.fDataOFFICE = new FormData;
    }
    UpLoadComponent.prototype.ngOnInit = function () {
        // $("#btnSubmit").attr('disabled','true');
    };
    UpLoadComponent.prototype.upload = function (event) {
        debugger;
        var files = event.target.files;
        //let fData = new FormData;
        var file = event.target.files[0];
        console.log(files[0]);
        console.log(this.myFile);
        var ext = this.isValidFileExtension(files);
        // this._userService.upload(fData)  // Insert Service
        // .subscribe((success) => {console.log(success);this.msg=success;},
        // error => {
        //   console.log(error)
        // }) 
        //event.
        if (ext < 0) {
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#showImage').attr('src', "").width('').height('');
            this.fileInput.nativeElement.value = '';
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#errorFile").text("Please Select only Image Files");
            //$("#btnSubmit").prop('disabled','true');
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#btnSubmit").attr("disabled", "disabled");
        }
        else {
            // var file = event.originalEvent.srcElement.files[0];
            //this.model = file;
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#errorFile").text("");
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#btnSubmit").removeAttr("disabled");
            this.fData.append("UploadedImage", files[0]);
            var reader = new FileReader();
            reader.onload = function (e) {
                __WEBPACK_IMPORTED_MODULE_5_jquery__('#showImage')
                    .attr('src', e.target.result)
                    .width(198)
                    .height(198);
            };
            reader.readAsDataURL(files[0]);
        }
    };
    UpLoadComponent.prototype.isValidFileExtension = function (files) {
        var ext = files[0].name.toUpperCase().split('.').pop() || files[0].name;
        var extensions = "JPG,JPEG,PNG,BMP,GIF,TIFF";
        var exists = extensions.indexOf(ext);
        return exists;
    };
    UpLoadComponent.prototype.clearFile = function () {
        debugger;
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#btnSubmit").attr("disabled", "disabled");
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#errorFile").text("");
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#showImage').attr('src', "").width('').height('');
        // $("#btnSubmit").prop('visible','false');
        this.fileInput.nativeElement.value = '';
    };
    UpLoadComponent.prototype.onSubmit = function (value) {
        var _this = this;
        debugger;
        //alert(this.model.fileInput);
        console.log(value);
        console.log(this.fData);
        this.loading = true;
        this._userService.upload(this.fData)
            .subscribe(function (success) {
            console.log(success);
            _this.msg = success;
        }, function (error) {
            console.log(error);
        });
        this.msg = "File Uploaded SuccessFully";
        alert(this.msg);
        __WEBPACK_IMPORTED_MODULE_5_jquery__("input[type=submit]").attr("disabled", "disabled");
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#errorFile").text("");
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#showImage').attr('src', "").width('').height('');
        // $("#btnSubmit").prop('visible','false');
        this.fileInput.nativeElement.value = '';
    };
    //-------------------------------------------Excel File----------------------------------------------------//
    //Excel File Upload
    UpLoadComponent.prototype._handleReaderLoaded = function (readerEvt) {
        debugger;
        var binaryString = readerEvt.target.result;
        var filestring = btoa(binaryString); // Converting binary string data. 
    };
    UpLoadComponent.prototype.uploadExcel = function (event) {
        debugger;
        // let files = event.target.files;
        // //let conten=event.target.result; 
        // var reader = new FileReader(); 
        // reader.onload = this._handleReaderLoaded.bind(this); 
        // //reader.readAsBinaryString(files[0]); 
        // console.log(files[0]); 
        // reader.readAsText(files[0])
        // // $('#showImageExcel')
        // //          .attr('src', event.target.result)
        // //          .width(198)
        // //          .height(198);
        //  $("#errorFileExcel").text(reader.result);
        // console.log(reader.result);
        // var file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
        //       var pattern = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
        //       console.log('choosen file type is ' + file); 
        //       console.dir("dir is " + file);       
        //       if (!file.type.match(pattern)) {  
        //            //this.showToast('ERROR', 'Error', 'Invalid file format');
        //           return 0;
        //       }        
        //     let wb: XLSX.IWorkBook = XLSX.readFile(file, {type: 'binary'});
        //        console.log(wb);
        //        let sheetName = wb.SheetNames[0];
        //        console.log("Selected file sheet Name "+ sheetName);  
        //let wb:XLSX.IWorkBook
        var files = event.target.files;
        var file = event.target.files[0];
        var ext = this.isValidFileExtensionExcel(files);
        if (ext < 0) {
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#showImageExcel').attr('src', "").width('').height('');
            this.fileInputExcel.nativeElement.value = '';
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#errorFileExcel").text("Please Select only Excel Files");
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#btnSubmitExcel").attr("disabled", "disabled");
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#errorFileExcel").text("");
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#btnSubmitExcel").removeAttr("disabled");
            this.fDataExcel.append("UploadedImage", files[0]);
            var reader = new FileReader();
            reader.onload = function (e) {
                debugger;
                var data = e.target.result;
                //console.log(data);
                // data = new Uint8Array(data);
                // console.log(data);
                var result;
                var workbook = __WEBPACK_IMPORTED_MODULE_4_xlsx__["read"](data, { type: 'array' });
                var sheet_name_list = workbook.SheetNames;
                var xlData = __WEBPACK_IMPORTED_MODULE_4_xlsx__["utils"].sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
                //console.log(xlData.length);
                //console.log(xlData[0]);
                var rowHeader = "";
                var collumnHeader = "";
                var collumnBody = "";
                var rowBody = "";
                var colHead = [];
                //Table Header
                for (var num = 0; num < xlData.length; num++) {
                    for (var columnName in xlData[num]) {
                        if (colHead.indexOf(columnName) === -1) {
                            collumnHeader += "<td>" + columnName + "</td>";
                            colHead.push(columnName);
                            console.log(columnName);
                        }
                    }
                }
                rowHeader += "<tr>" + collumnHeader + "</tr>";
                __WEBPACK_IMPORTED_MODULE_5_jquery__("#exceltable").append(rowHeader);
                //Table Body
                for (var i = 0; i < xlData.length; i++) {
                    var tabCell = "";
                    for (var j = 0; j < colHead.length; j++) {
                        tabCell = xlData[i][colHead[j]];
                        collumnBody += "<td>" + tabCell + "</td>";
                    }
                    rowBody += "<tr>" + collumnBody + "</tr>";
                    collumnBody = "";
                }
                __WEBPACK_IMPORTED_MODULE_5_jquery__("#exceltable").append(rowBody);
                //alert(col);
                //alert(col);
                //}
                //     var sheet_name_list = workbook.SheetNames;
                //     sheet_name_list.forEach(function (y) { /* iterate through sheets */
                //       //Convert the cell value to Json
                //       var roa = XLSX.utils.sheet_to_json(workbook.Sheets[y]);
                //       if (roa.length > 0) {
                //           result = roa;
                //       }
                //   });
                //  //Get the first column first cell value
                //   alert(result[0].Column1);
                // var sheetHtml=workbook.Sheets[0];
                // var dd=XLSX.stream.to_html(sheetHtml);
                // console.log(dd);
                //console.log(XLSX.utils.sheet_to_html(sheetHtml));
                // var exceljson = XLSX.utils.sheet_to_json(workbook.Sheets[0]); 
                // console.log(exceljson);
                //this.BindTable(exceljson, '#exceltable'); 
                //$("#exceltable").append(xlData[0].toString());
                __WEBPACK_IMPORTED_MODULE_5_jquery__('#showImageExcel')
                    .attr('src', e.target.result)
                    .width(198)
                    .height(198);
            };
            //reader.readAsDataURL(files[0]);
            reader.readAsArrayBuffer(files[0]);
        }
    };
    //Excel File Extension
    UpLoadComponent.prototype.isValidFileExtensionExcel = function (files) {
        var ext = files[0].name.toUpperCase().split('.').pop() || files[0].name;
        var extensions = "XLS,XLSX";
        var exists = extensions.indexOf(ext);
        return exists;
    };
    //Excel File Clear
    UpLoadComponent.prototype.clearFileExcel = function () {
        debugger;
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#btnSubmitExcel").attr("disabled", "disabled");
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#errorFileExcel").text("");
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#showImageExcel').attr('src', "").width('').height('');
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#exceltable").text("");
        this.fileInputExcel.nativeElement.value = '';
    };
    //Excel File Submit
    UpLoadComponent.prototype.onSubmitExcel = function (value) {
        var _this = this;
        debugger;
        //alert(this.model.fileInput);
        console.log(value);
        console.log(this.fDataExcel);
        this.loading = true;
        this._userService.upload(this.fDataExcel)
            .subscribe(function (success) {
            console.log(success);
            _this.msg = success;
        }, function (error) {
            console.log(error);
        });
        this.msg = "File Uploaded SuccessFully";
        alert(this.msg);
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#btnSubmitExcel").attr("disabled", "disabled");
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#errorFileExcel").text("");
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#showImageExcel').attr('src', "").width('').height('');
        // $("#btnSubmit").prop('visible','false');
        this.fileInputExcel.nativeElement.value = '';
    };
    //-------------------------------------------PDF File----------------------------------------------------//
    //PDF File Upload
    UpLoadComponent.prototype.uploadPDF = function (event) {
        debugger;
        var files = event.target.files;
        var file = event.target.files[0];
        var ext = this.isValidFileExtensionPDF(files);
        if (ext < 0) {
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#showImagePDF').attr('src', "").width('').height('');
            this.fileInputPDF.nativeElement.value = '';
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#errorFilePDF").text("Please Select only PDF Files");
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#btnSubmitPDF").attr("disabled", "disabled");
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#errorFilePDF").text("");
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#btnSubmitPDF").removeAttr("disabled");
            this.fDataPDF.append("UploadedImage", files[0]);
            var reader = new FileReader();
            reader.onload = function (e) {
                __WEBPACK_IMPORTED_MODULE_5_jquery__('#showImagePDF')
                    .attr('src', e.target.result)
                    .width(198)
                    .height(198);
                __WEBPACK_IMPORTED_MODULE_5_jquery__('#iframePDF')
                    .attr('src', e.target.result);
            };
            reader.readAsDataURL(files[0]);
        }
    };
    //PDF File Extension
    UpLoadComponent.prototype.isValidFileExtensionPDF = function (files) {
        var ext = files[0].name.toUpperCase().split('.').pop() || files[0].name;
        var extensions = "PDF";
        var exists = extensions.indexOf(ext);
        return exists;
    };
    //PDF File Clear
    UpLoadComponent.prototype.clearFilePDF = function () {
        debugger;
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#btnSubmitPDF").attr("disabled", "disabled");
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#errorFilePDF").text("");
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#showImagePDF').attr('src', "").width('').height('');
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#iframePDF').attr("src", "");
        this.fileInputPDF.nativeElement.value = '';
    };
    //PDF File Submit
    UpLoadComponent.prototype.onSubmitPDF = function (value) {
        var _this = this;
        debugger;
        console.log(value);
        console.log(this.fDataPDF);
        this.loading = true;
        this._userService.upload(this.fDataPDF)
            .subscribe(function (success) {
            console.log(success);
            _this.msg = success;
        }, function (error) {
            console.log(error);
        });
        this.msg = "File Uploaded SuccessFully";
        alert(this.msg);
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#btnSubmitPDF").attr("disabled", "disabled");
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#errorFilePDF").text("");
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#showImagePDF').attr('src', "").width('').height('');
        this.fileInputPDF.nativeElement.value = '';
    };
    //-------------------------------------------OFFICE File----------------------------------------------------//
    //OFFICE File Upload
    UpLoadComponent.prototype.uploadOFFICE = function (event) {
        debugger;
        var files = event.target.files;
        var file = event.target.files[0];
        var ext = this.isValidFileExtensionOFFICE(files);
        if (ext < 0) {
            __WEBPACK_IMPORTED_MODULE_5_jquery__('#showImageOFFICE').attr('src', "").width('').height('');
            this.fileInputOFFICE.nativeElement.value = '';
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#errorFileOFFICE").text("Please Select only OFFICE Files");
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#btnSubmitOFFICE").attr("disabled", "disabled");
        }
        else {
            __WEBPACK_IMPORTED_MODULE_5_jquery__("#btnSubmitOFFICE").removeAttr("disabled");
            this.fDataOFFICE.append("UploadedImage", files[0]);
            var reader = new FileReader();
            reader.onload = function (e) {
                __WEBPACK_IMPORTED_MODULE_5_jquery__('#showImageOFFICE')
                    .attr('src', e.target.result)
                    .width(198)
                    .height(198);
            };
            reader.readAsDataURL(files[0]);
        }
    };
    //OFFICE File Extension
    UpLoadComponent.prototype.isValidFileExtensionOFFICE = function (files) {
        var ext = files[0].name.toUpperCase().split('.').pop() || files[0].name;
        var extensions = "TXT,RTF,XLS,XLSX,PPT,PPTX,DOC,DOCX,";
        var exists = extensions.indexOf(ext);
        return exists;
    };
    //OFFICE File Clear
    UpLoadComponent.prototype.clearFileOFFICE = function () {
        debugger;
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#btnSubmitOFFICE").attr("disabled", "disabled");
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#errorFileOFFICE").text("");
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#showImageOFFICE').attr('src', "").width('').height('');
        this.fileInputOFFICE.nativeElement.value = '';
    };
    //OFFICE File Submit
    UpLoadComponent.prototype.onSubmitOFFICE = function (value) {
        var _this = this;
        debugger;
        console.log(value);
        console.log(this.fDataOFFICE);
        this.loading = true;
        this._userService.upload(this.fDataOFFICE)
            .subscribe(function (success) {
            console.log(success);
            _this.msg = success;
        }, function (error) {
            console.log(error);
        });
        this.msg = "File Uploaded SuccessFully";
        alert(this.msg);
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#btnSubmitOFFICE").attr("disabled", "disabled");
        __WEBPACK_IMPORTED_MODULE_5_jquery__("#errorFileOFFICE").text("");
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#showImageOFFICE').attr('src', "").width('').height('');
        this.fileInputOFFICE.nativeElement.value = '';
    };
    UpLoadComponent.prototype.BindTableHeader = function (jsondata, tableid) {
        var columnSet = [];
        var headerTr$ = __WEBPACK_IMPORTED_MODULE_5_jquery__('<tr/>');
        for (var i = 0; i < jsondata.length; i++) {
            var rowHash = jsondata[i];
            for (var key in rowHash) {
                if (rowHash.hasOwnProperty(key)) {
                    if (__WEBPACK_IMPORTED_MODULE_5_jquery__["inArray"](key, columnSet) == -1) {
                        columnSet.push(key);
                        headerTr$.append(__WEBPACK_IMPORTED_MODULE_5_jquery__('<th/>').html(key));
                    }
                }
            }
        }
        __WEBPACK_IMPORTED_MODULE_5_jquery__(tableid).append(headerTr$);
        return columnSet;
    };
    UpLoadComponent.prototype.BindTable = function (jsondata, tableid) {
        var columns = this.BindTableHeader(jsondata, tableid); /*Gets all the column headings of Excel*/
        for (var i = 0; i < jsondata.length; i++) {
            var row$ = __WEBPACK_IMPORTED_MODULE_5_jquery__('<tr/>');
            for (var colIndex = 0; colIndex < columns.length; colIndex++) {
                var cellValue = jsondata[i][columns[colIndex]];
                if (cellValue == null)
                    cellValue = "";
                row$.append(__WEBPACK_IMPORTED_MODULE_5_jquery__('<td/>').html(cellValue));
            }
            __WEBPACK_IMPORTED_MODULE_5_jquery__(tableid).append(row$);
        }
    };
    UpLoadComponent.prototype.logOut = function () {
        localStorage.removeItem('currentUser');
        this._userServiceLogOut.isUserLoggedIn = false;
        this._router.navigate(["/"]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], UpLoadComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInputExcel'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], UpLoadComponent.prototype, "fileInputExcel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInputPDF'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], UpLoadComponent.prototype, "fileInputPDF", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInputOFFICE'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], UpLoadComponent.prototype, "fileInputOFFICE", void 0);
    UpLoadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-up-load',
            template: __webpack_require__("../../../../../src/app/up-load/up-load.component.html"),
            styles: [__webpack_require__("../../../../../src/app/up-load/up-load.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__iuserservice_service__["a" /* IuserserviceService */],
            __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], UpLoadComponent);
    return UpLoadComponent;
}());

// for (var i = 0; i < files.length; i++) {
//     fData.append("file[]", files[i]);
// }
// var _data = {
//     filename: 'Sample File',
//     id: '0001'
// }
// handleResponse(response: any) {
//     console.log(response);
// }
// handleError(error: string) {
//     console.log(error);
// }
// private  isValidFileExtension(files):number{
//   debugger;
//   // Make array of file extensions
//   //var extensions = (files)
//   //                .map(function (x) { return x.toLocaleUpperCase().trim() });
//   //for (var i = 0; i < files.length; i++) {
//       // Get file extension
//       var ext = files[0].name.toUpperCase().split('.').pop() || files[0].name;
//       // Check the extension exists
//      let extensions="JPG,JPEG,PNG,BMP,GIF,TIFF";
//       var exists = extensions.indexOf(ext);
//      return exists;
//   //}
// }
// clearFile() {
//   $("#errorFile").text("");
//   $('#showImage').attr('src', "").width('').height('');
//   $('#showImage').attr('src', "").width('').height('');
//   this.fileInput.nativeElement.value = '';
// } 


/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
        this.isUserLoggedIn = false;
    }
    UserService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedIn = true;
        this.userName = "vimal raj";
    };
    UserService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map