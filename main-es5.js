(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/homepage/homepage.component */
      "./src/app/components/homepage/homepage.component.ts");
      /* harmony import */


      var _components_states_states_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/states/states.component */
      "./src/app/components/states/states.component.ts");
      /* harmony import */


      var _components_about_covid_about_covid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/about-covid/about-covid.component */
      "./src/app/components/about-covid/about-covid.component.ts");

      var routes = [{
        path: "homepage",
        component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"]
      }, {
        path: "states/:name",
        component: _components_states_states_component__WEBPACK_IMPORTED_MODULE_3__["StatesComponent"]
      }, {
        path: "aboutcovid",
        component: _components_about_covid_about_covid_component__WEBPACK_IMPORTED_MODULE_4__["AboutCovidComponent"]
      }, {
        path: "**",
        component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Covid-app';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.constants.ts":
    /*!**********************************!*\
      !*** ./src/app/app.constants.ts ***!
      \**********************************/

    /*! exports provided: supporedLanguages */

    /***/
    function srcAppAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "supporedLanguages", function () {
        return supporedLanguages;
      });

      var supporedLanguages = [{
        viewValue: "हिंदी",
        value: "hi"
      }, {
        viewValue: "English",
        value: "en"
      }];
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: TranslationLoaderFactory, AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslationLoaderFactory", function () {
        return TranslationLoaderFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _components_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/header-nav/header-nav.component */
      "./src/app/components/header-nav/header-nav.component.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/sort */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _components_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/table-view/table-view.component */
      "./src/app/components/table-view/table-view.component.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/homepage/homepage.component */
      "./src/app/components/homepage/homepage.component.ts");
      /* harmony import */


      var _components_graphs_graphs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/graphs/graphs.component */
      "./src/app/components/graphs/graphs.component.ts");
      /* harmony import */


      var angular_google_charts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! angular-google-charts */
      "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _components_states_states_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./components/states/states.component */
      "./src/app/components/states/states.component.ts");
      /* harmony import */


      var _components_state_graph_state_graph_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./components/state-graph/state-graph.component */
      "./src/app/components/state-graph/state-graph.component.ts");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _components_about_covid_about_covid_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./components/about-covid/about-covid.component */
      "./src/app/components/about-covid/about-covid.component.ts");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
      /* harmony import */


      var _components_common_menu_menu_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./components/common/menu/menu.component */
      "./src/app/components/common/menu/menu.component.ts");

      function TranslationLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_33__["TranslateHttpLoader"](http);
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_23__["GoogleChartsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__["TranslateLoader"],
            useFactory: TranslationLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"]]
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_4__["HeaderNavComponent"], _components_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_18__["TableViewComponent"], _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_21__["HomepageComponent"], _components_graphs_graphs_component__WEBPACK_IMPORTED_MODULE_22__["GraphsComponent"], _components_states_states_component__WEBPACK_IMPORTED_MODULE_26__["StatesComponent"], _components_state_graph_state_graph_component__WEBPACK_IMPORTED_MODULE_27__["StateGraphComponent"], _components_about_covid_about_covid_component__WEBPACK_IMPORTED_MODULE_29__["AboutCovidComponent"], _components_common_menu_menu_component__WEBPACK_IMPORTED_MODULE_34__["MenuComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_23__["GoogleChartsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__["TranslateModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_4__["HeaderNavComponent"], _components_table_view_table_view_component__WEBPACK_IMPORTED_MODULE_18__["TableViewComponent"], _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_21__["HomepageComponent"], _components_graphs_graphs_component__WEBPACK_IMPORTED_MODULE_22__["GraphsComponent"], _components_states_states_component__WEBPACK_IMPORTED_MODULE_26__["StatesComponent"], _components_state_graph_state_graph_component__WEBPACK_IMPORTED_MODULE_27__["StateGraphComponent"], _components_about_covid_about_covid_component__WEBPACK_IMPORTED_MODULE_29__["AboutCovidComponent"], _components_common_menu_menu_component__WEBPACK_IMPORTED_MODULE_34__["MenuComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_23__["GoogleChartsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__["TranslateModule"].forRoot({
              loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__["TranslateLoader"],
                useFactory: TranslationLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClient"]]
              }
            })],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/about-covid/about-covid.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/about-covid/about-covid.component.ts ***!
      \*****************************************************************/

    /*! exports provided: AboutCovidComponent */

    /***/
    function srcAppComponentsAboutCovidAboutCovidComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutCovidComponent", function () {
        return AboutCovidComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../app.constants */
      "./src/app/app.constants.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/menu/menu.component */
      "./src/app/components/common/menu/menu.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

      var AboutCovidComponent = /*#__PURE__*/function () {
        function AboutCovidComponent(breakpointObserver, translateService) {
          _classCallCheck(this, AboutCovidComponent);

          this.breakpointObserver = breakpointObserver;
          this.translateService = translateService;
          this.languageArray = _app_constants__WEBPACK_IMPORTED_MODULE_3__["supporedLanguages"];
          this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result.matches;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
        }

        _createClass(AboutCovidComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.translateService.setDefaultLang('en');
          }
        }, {
          key: "onLanguageChange",
          value: function onLanguageChange(language) {
            this.translateService.use(language);
          }
        }]);

        return AboutCovidComponent;
      }();

      AboutCovidComponent.ɵfac = function AboutCovidComponent_Factory(t) {
        return new (t || AboutCovidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
      };

      AboutCovidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutCovidComponent,
        selectors: [["app-about-covid"]],
        decls: 147,
        vars: 115,
        consts: [[1, "sidenav-container"], ["position", "end", 1, "sidenav", 3, "fixedInViewport", "mode"], ["drawer", ""], ["color", "primary"], ["mat-list-item", "", "routerLink", "/homepage"], ["mat-list-item", "", "routerLink", "/aboutcovid"], ["color", "primary", 1, "display-flex"], [1, "menuBtns"], [3, "initialValue", "options", "onItemSelect"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 1, "menuBtn", 3, "click"], ["aria-label", "Side nav toggle icon"], ["fxLayout", "row wrap", "fxLayout.lt-sm", "column", "fxLayoutGap", "32px", "fxLayoutAlign", "stretch"], ["fxFlex", "0 1 calc(33.3% - 32px)", "fxFlex.lt-md", "0 1 calc(50% - 32px)", "fxFlex.lt-sm", "100%", 1, "example-card", "margin-top"], ["mat-card-image", "", "src", "assets/images/coronavirus.jpg", "alt", "Photo of a person holding coronavirus tag", 1, "cardImage"], ["mat-card-image", "", "src", "assets/images/what_is_corona.jpg", "alt", "Photo of a coronavirus", 1, "cardImage"], ["mat-card-image", "", "src", "assets/images/symptoms.jpg", "alt", "Photo of a person wearing mask", 1, "cardImage"], ["mat-card-image", "", "src", "assets/images/infection.jpg", "alt", "Photo of a person caughing", 1, "cardImage"], ["mat-card-image", "", "src", "assets/images/types.jpg", "alt", "Photo of a CoronaVirus testing", 1, "cardImage"], ["mat-card-image", "", "src", "assets/images/transmission.jpg", "alt", "Photo of a Transmission among people", 1, "cardImage"]],
        template: function AboutCovidComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About Covid-19");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-toolbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Covid-app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-menu", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemSelect", function AboutCovidComponent_Template_app_menu_onItemSelect_15_listener($event) {
              return ctx.onLanguageChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutCovidComponent_Template_button_click_16_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-card", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](84, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](88, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](91, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](94, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](97, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](100, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](103, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-card", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](108, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](113, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](117, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](120, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](123, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](126, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-card", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](131, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](136, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](140, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](143, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](146, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fixedInViewport", false)("mode", "over");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initialValue", "en")("options", ctx.languageArray);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "100%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 49, "aboutCovid.card1.header"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 51, "aboutCovid.card1.para1"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 53, "aboutCovid.card1.para2"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "100%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 55, "aboutCovid.card2.header"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 57, "aboutCovid.card2.para1"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 59, "aboutCovid.card2.para2"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "100%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 61, "aboutCovid.card3.header"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 63, "aboutCovid.card3.para1"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 65, "aboutCovid.card3.list.point1"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 67, "aboutCovid.card3.list.point2"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 69, "aboutCovid.card3.list.point3"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 71, "aboutCovid.card3.list.point4"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 73, "aboutCovid.card3.list.point5"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 75, "aboutCovid.card3.list.point6"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "100%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 77, "aboutCovid.card4.header"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](84, 79, "aboutCovid.card4.para1"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](88, 81, "aboutCovid.card4.list.point1"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](91, 83, "aboutCovid.card4.list.point2"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](94, 85, "aboutCovid.card4.list.point3"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](97, 87, "aboutCovid.card4.list.point4"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](100, 89, "aboutCovid.card4.list.point5"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](103, 91, "aboutCovid.card4.list.point6"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "100%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](108, 93, "aboutCovid.card5.header"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](113, 95, "aboutCovid.card5.para1"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](117, 97, "aboutCovid.card5.list.point1"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](120, 99, "aboutCovid.card5.list.point2"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](123, 101, "aboutCovid.card5.list.point3"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](126, 103, "aboutCovid.card5.list.point4"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", "100%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](131, 105, "aboutCovid.card6.header"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](136, 107, "aboutCovid.card6.para1"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](140, 109, "aboutCovid.card6.list.point1"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](143, 111, "aboutCovid.card6.list.point2"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](146, 113, "aboutCovid.card6.list.point3"), " ");
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContent"], _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.cardImage[_ngcontent-%COMP%] {\n  height: 200px;\n  padding: 2rem;\n  width: 90%;\n}\n\n.margin-top[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.cardFlex[_ngcontent-%COMP%] {\n  align-items: stretch;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  min-height: 530px;\n}\n\nul[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.menuBtn[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.display-flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.menuBtns[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex-direction: row-reverse;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1jb3ZpZC9hYm91dC1jb3ZpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFRTtFQUNFLG1CQUFBO0FBQ0o7O0FBRUU7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7QUFDSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNFO0VBQ0UsZUFBQTtBQUVKOztBQUNFO0VBQ0Usb0JBQUE7QUFFSjs7QUFDRTtFQUNFLGlCQUFBO0FBRUo7O0FBQ0U7RUFDRSxlQUFBO0FBRUo7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSwyQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1jb3ZpZC9hYm91dC1jb3ZpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAuc2lkZW5hdiB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIFxuICAuc2lkZW5hdiB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgfVxuICBcbiAgLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAuY29udGVudCB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgfVxuICAuY2FyZEltYWdle1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLm1hcmdpbi10b3Age1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gIC5jYXJkRmxleHtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICB9XG4gIG1hdC1jYXJke1xuICAgIG1pbi1oZWlnaHQ6IDUzMHB4O1xuICB9XG5cbiAgdWwge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuXG5cbi5tZW51QnRue1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmRpc3BsYXktZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tZW51QnRuc3tcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutCovidComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-about-covid",
            templateUrl: "./about-covid.component.html",
            styleUrls: ["./about-covid.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/common/menu/menu.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/components/common/menu/menu.component.ts ***!
      \**********************************************************/

    /*! exports provided: MenuComponent */

    /***/
    function srcAppComponentsCommonMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
        return MenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function MenuComponent_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var option_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onMenuClick(option_r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r2.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r2.viewValue, " ");
        }
      }

      var MenuComponent = /*#__PURE__*/function () {
        function MenuComponent() {
          _classCallCheck(this, MenuComponent);

          this.onItemSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(MenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onMenuClick",
          value: function onMenuClick(option) {
            this.onItemSelect.emit(option);
          }
        }]);

        return MenuComponent;
      }();

      MenuComponent.ɵfac = function MenuComponent_Factory(t) {
        return new (t || MenuComponent)();
      };

      MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MenuComponent,
        selectors: [["app-menu"]],
        inputs: {
          options: "options",
          initialValue: "initialValue"
        },
        outputs: {
          onItemSelect: "onItemSelect"
        },
        decls: 6,
        vars: 2,
        consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["aria-hidden", "false", "aria-label", "Translate icon"], ["xPosition", "before"], ["beforeMenu", "matMenu"], ["mat-menu-item", "", 3, "value", "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "value", "click"]],
        template: function MenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MenuComponent_button_5_Template, 2, 2, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuItem"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.scss']
          }]
        }], function () {
          return [];
        }, {
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          initialValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onItemSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/components/graphs/graphs.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/graphs/graphs.component.ts ***!
      \*******************************************************/

    /*! exports provided: GraphsComponent */

    /***/
    function srcAppComponentsGraphsGraphsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraphsComponent", function () {
        return GraphsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_covid_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/covid-api.service */
      "./src/app/services/covid-api.service.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
      /* harmony import */


      var angular_google_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! angular-google-charts */
      "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");

      function GraphsComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "graph.graphHeading") + " - " + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "country"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, "errorMessage"));
        }
      }

      function GraphsComponent_ng_template_2_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GraphsComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "google-chart", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r8.title))("type", ctx_r8.type)("data", ctx_r8.data)("options", ctx_r8.options)("width", ctx_r8.width)("height", ctx_r8.height);
        }
      }

      function GraphsComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GraphsComponent_ng_template_2_div_5_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GraphsComponent_ng_template_2_ng_template_6_Template, 3, 8, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-actions", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function GraphsComponent_ng_template_2_Template_mat_select_valueChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.onOptionSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GraphsComponent_ng_template_2_Template_button_click_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.last15Days($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, "graph.graphHeading") + " - " + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, "country"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.data.length === 0)("ngIfElse", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 13, "graph.selectAttribute"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "confirmData confirmedCase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 15, "graph.confirmedCase"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 17, "graph.recoveredCase"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 19, "graph.deceasedCase"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 21, "graph.last15Days"), " ");
        }
      }

      function GraphsComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "graph.graphHeading") + " - " + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "country"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](">", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, "errorMessage"), "");
        }
      }

      function GraphsComponent_ng_template_6_mat_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r17 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "tableColumn." + option_r17), " ");
        }
      }

      function GraphsComponent_ng_template_6_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function GraphsComponent_ng_template_6_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "google-chart", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r16.stateTitle) + " " + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, "graph.graphHeading"))("type", ctx_r16.stateType)("data", ctx_r16.stateData)("options", ctx_r16.stateoptions)("width", ctx_r16.width)("height", ctx_r16.height);
        }
      }

      function GraphsComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GraphsComponent_ng_template_6_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.selectedStateOption.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-autocomplete", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function GraphsComponent_ng_template_6_Template_mat_autocomplete_optionSelected_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.onStateChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, GraphsComponent_ng_template_6_mat_option_12_Template, 3, 4, "mat-option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GraphsComponent_ng_template_6_div_14_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GraphsComponent_ng_template_6_ng_template_15_Template, 4, 10, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, "graph.graphHeading") + " - " + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, "country"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 12, "graph.selectState"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r5.myControl)("matAutocomplete", _r12)("ngModel", ctx_r5.selectedStateOption.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 14, ctx_r5.filteredOptions));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.stateData.length === 0)("ngIfElse", _r15);
        }
      }

      var GraphsComponent = /*#__PURE__*/function () {
        function GraphsComponent(_covidAPI, cdRef, _translate) {
          _classCallCheck(this, GraphsComponent);

          this._covidAPI = _covidAPI;
          this.cdRef = cdRef;
          this._translate = _translate;
          this.chart = [];
          this.title = "graph.confirmedCase";
          this.type = "LineChart";
          this.recoveredData = [];
          this.confirmData = [];
          this.deceasedData = [];
          this.data = [];
          this.options = {
            colors: ["#e0440e", "#e6693e", "#ec8f6e", "#f3b49f", "#f6c7b6"],
            is3D: true,
            hAxis: {
              title: "Date"
            },
            // vAxis: {
            //   title: 'Number of COVID-19 confirmed cases'
            // },
            pointSize: 5,
            crosshair: {
              color: "#000000",
              trigger: "selection"
            }
          };
          this.width = window.innerWidth > 1279 ? window.innerWidth * 0.3 : window.innerWidth * 0.8;
          this.height = window.innerWidth > 1279 ? window.innerHeight * 0.4 : window.innerHeight * 0.35;
          this.stateTitle = "COVID-19 information in";
          this.stateType = "BarChart";
          this.stateData = [];
          this.stateGraphOptions = {};
          this.stateActiveCases = 0;
          this.stateName = "";
          this.stateConfirmed = 0;
          this.stateRecovered = 0;
          this.stateDeceased = 0;
          this.stateObject = {};
          this.selectedStateOption = {
            key: "Karnataka",
            value: "Karnataka"
          };
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.stateoptions = [];
          this.isGraphError = false;
          this.isStateGraphError = false;
        }

        _createClass(GraphsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // this._translate.get("graph.confirmedCase").subscribe((str)=>this.title=str)
            this._covidAPI.getCasesByDate().subscribe(function (res) {
              res["cases_time_series"].forEach(function (element) {
                _this.confirmData.push([element["date"], +element["totalconfirmed"]]);

                _this.data.push([element["date"], +element["totalconfirmed"]]);

                _this.deceasedData.push([element["date"], +element["totaldeceased"]]);

                _this.recoveredData.push([element["date"], +element["totalrecovered"]]);
              });

              _this.initilizeDailyGraphData(_this.confirmData);
            }, function (err) {
              _this.isGraphError = true;
            });

            this._covidAPI.getStates().subscribe(function (res) {
              Object.keys(res).forEach(function (key) {
                if (key !== "State Unassigned") {
                  _this.stateName = key;
                  Object.keys(res[key]).forEach(function (district) {
                    if (district === "districtData") {
                      Object.keys(res[key][district]).forEach(function (city) {
                        _this.stateActiveCases = _this.stateActiveCases + res[key][district][city]["active"];
                        _this.stateConfirmed = _this.stateConfirmed + res[key][district][city]["confirmed"];
                        _this.stateRecovered = _this.stateRecovered + res[key][district][city]["recovered"];
                        _this.stateDeceased = _this.stateDeceased + res[key][district][city]["deceased"];
                      });
                    }
                  });
                  _this.stateTitle = "tableColumn.Karnataka";
                  _this.stateObject[_this.stateName] = {
                    active: _this.stateActiveCases,
                    recovered: _this.stateRecovered,
                    deceased: _this.stateDeceased,
                    confirmed: _this.stateConfirmed
                  };
                }
              });
              _this.stateData = [[_this.returnTranslatedString("graph.activeCase"), _this.stateObject["Karnataka"].active], [_this.returnTranslatedString("graph.confirmedCase"), _this.stateObject["Karnataka"].confirmed], [_this.returnTranslatedString("graph.recoveredCase"), _this.stateObject["Karnataka"].recovered], [_this.returnTranslatedString("graph.deceasedCase"), _this.stateObject["Karnataka"].deceased]]; //console.log(this.stateObject)

              _this.selectedStateOption.value = _this.returnTranslatedString("tableColumn." + _this.selectedStateOption.key);
              _this.stateoptions = Object.keys(_this.stateObject);
            }, function (err) {
              _this.isStateGraphError = true;
            });

            this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
              return _this._filter(value);
            }));
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var _this2 = this;

            this.cdRef.detectChanges();
            this.stateData && this._translate.onLangChange.subscribe(function () {
              _this2.stateData = [[_this2.returnTranslatedString("graph.activeCase"), _this2.stateData[0][1]], [_this2.returnTranslatedString("graph.confirmedCase"), _this2.stateData[1][1]], [_this2.returnTranslatedString("graph.recoveredCase"), _this2.stateData[2][1]], [_this2.returnTranslatedString("graph.deceasedCase"), _this2.stateData[3][1]]];
              _this2.selectedStateOption.value = _this2.returnTranslatedString("tableColumn." + _this2.selectedStateOption.key);
            });
          }
        }, {
          key: "_filter",
          value: function _filter(value) {
            var filterValue = value.toLowerCase();
            return this.stateoptions.filter(function (option) {
              return option.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "onOptionSelect",
          value: function onOptionSelect(event) {
            var words = event.split(" ");
            this.data = this[words[0]];
            this.title = "graph.".concat(words[1]); //this._translate.get(`graph.${words[1]}`).subscribe((str)=>this.title=str)
            //this.title = `Number of COVID-19 ${words[1]} ${words[2]}`;
          }
        }, {
          key: "last15Days",
          value: function last15Days(event) {
            this.data = this.data.slice(this.data.length - 15, this.data.length); //this.title = this.title
            // this.title = this.title.includes(" in last 15 days")
            //   ? this.title
            //   : this.title + " in last 15 days";
          }
        }, {
          key: "initilizeDailyGraphData",
          value: function initilizeDailyGraphData(data) {
            this.data = data;
          }
        }, {
          key: "onStateChange",
          value: function onStateChange(event) {
            this.stateData = [[this.returnTranslatedString("graph.activeCase"), this.stateObject[event.option.value].active], [this.returnTranslatedString("graph.confirmedCase"), this.stateObject[event.option.value].confirmed], [this.returnTranslatedString("graph.recoveredCase"), this.stateObject[event.option.value].recovered], [this.returnTranslatedString("graph.deceasedCase"), this.stateObject[event.option.value].deceased]];
            this.selectedStateOption = {
              key: event.option.value,
              value: this.returnTranslatedString("tableColumn." + event.option.value)
            };
            this.stateTitle = "tableColumn." + event.option.value;
          }
        }, {
          key: "returnTranslatedString",
          value: function returnTranslatedString(key) {
            var convertedValue;

            this._translate.get(key).subscribe(function (str) {
              return convertedValue = str;
            });

            return convertedValue;
          }
        }]);

        return GraphsComponent;
      }();

      GraphsComponent.ɵfac = function GraphsComponent_Factory(t) {
        return new (t || GraphsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_covid_api_service__WEBPACK_IMPORTED_MODULE_3__["CovidApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
      };

      GraphsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GraphsComponent,
        selectors: [["app-graphs"]],
        decls: 8,
        vars: 4,
        consts: [[1, "example-card"], [4, "ngIf", "ngIfElse"], ["dispGraph", ""], [1, "example-card", "margin-top-10px"], ["dispStateGraph", ""], [1, "dispError"], ["class", "textCenter", 4, "ngIf", "ngIfElse"], ["showGraph", ""], [1, "display-flex", "spaceBetween"], ["appearance", "outline"], ["matNativeControl", "", 3, "value", "valueChange"], ["value", "confirmData confirmedCase", "selected", ""], ["value", "recoveredData recoveredCase"], ["value", "deceasedData deceasedCase"], ["mat-raised-button", "", "color", "primary", 1, "btn", 3, "click"], [1, "textCenter"], [1, "graphId1"], [3, "title", "type", "data", "options", "width", "height"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "example-form"], [1, "example-full-width", "padding-sides-1rem"], ["type", "text", "aria-label", "Number", "matInput", "", 3, "placeholder", "formControl", "matAutocomplete", "ngModel", "ngModelChange"], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["showStateGraph", ""], [3, "value"], [1, "graphId2"]],
        template: function GraphsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GraphsComponent_div_1_Template, 8, 8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GraphsComponent_ng_template_2_Template, 26, 23, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GraphsComponent_div_5_Template, 8, 8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GraphsComponent_ng_template_6_Template, 17, 16, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isGraphError)("ngIfElse", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isStateGraphError)("ngIfElse", _r4);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"], angular_google_charts__WEBPACK_IMPORTED_MODULE_12__["GoogleChartComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardAvatar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
        styles: [".graphId1[_ngcontent-%COMP%] {\n  widows: 100%;\n}\n\n.graphId2[_ngcontent-%COMP%] {\n  widows: 100%;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.display-flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.padding-sides-1rem[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  margin-right: 1rem;\n}\n\n.margin-top-10px[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n\n.actionBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  \n  .margin-top-10px[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n\n  .example-full-width[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n\n.btn[_ngcontent-%COMP%] {\n  height: 3rem;\n}\n\n.textCenter[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  size: 5rem;\n}\n\nmat-spinner[_ngcontent-%COMP%] {\n  zoom: 0.3;\n}\n\n.dispError[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 12px;\n}\n\n.spaceBetween[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFwaHMvZ3JhcGhzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsWUFBQTtBQUFGOztBQUdBO0VBRUUsWUFBQTtBQURGOztBQU1BO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFLQTtFQUNFLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFGRjs7QUFJQTtFQUNFLHVCQUFBO0VBQ0E7SUFDSSxnQkFBQTtFQURKOztFQUdFO0lBQ0UsVUFBQTtFQUFKO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLFNBQUE7QUFERjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSw4QkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ncmFwaHMvZ3JhcGhzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYXBoSWQxIHtcbiAgLy9vdmVyZmxvdzogc2Nyb2xsO1xuICB3aWRvd3M6IDEwMCU7XG4gIC8vIHBhZGRpbmctdG9wOiAzcmVtO1xufVxuLmdyYXBoSWQyIHtcbiAgLy9vdmVyZmxvdzogc2Nyb2xsO1xuICB3aWRvd3M6IDEwMCU7XG4gIC8vcGFkZGluZy10b3A6IDFyZW07XG59XG5cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXNwbGF5LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvL2p1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnBhZGRpbmctc2lkZXMtMXJlbSB7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuLm1hcmdpbi10b3AtMTBweCB7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbi5hY3Rpb25CdG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cbiAgLm1hcmdpbi10b3AtMTBweCB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxufVxuLmJ0biB7XG4gIGhlaWdodDogM3JlbTtcbn1cblxuLnRleHRDZW50ZXIge1xuICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHNpemU6IDVyZW07XG59XG5cbm1hdC1zcGlubmVyIHtcbiAgem9vbTogMC4zO1xufVxuLmRpc3BFcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnNwYWNlQmV0d2VlbntcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW5cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-graphs",
            templateUrl: "./graphs.component.html",
            styleUrls: ["./graphs.component.scss"]
          }]
        }], function () {
          return [{
            type: _services_covid_api_service__WEBPACK_IMPORTED_MODULE_3__["CovidApiService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/header-nav/header-nav.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/components/header-nav/header-nav.component.ts ***!
      \***************************************************************/

    /*! exports provided: HeaderNavComponent */

    /***/
    function srcAppComponentsHeaderNavHeaderNavComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderNavComponent", function () {
        return HeaderNavComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/layout */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../app.constants */
      "./src/app/app.constants.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/menu/menu.component */
      "./src/app/components/common/menu/menu.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _table_view_table_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../table-view/table-view.component */
      "./src/app/components/table-view/table-view.component.ts");
      /* harmony import */


      var _state_graph_state_graph_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../state-graph/state-graph.component */
      "./src/app/components/state-graph/state-graph.component.ts");
      /* harmony import */


      var _graphs_graphs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../graphs/graphs.component */
      "./src/app/components/graphs/graphs.component.ts");

      function HeaderNavComponent_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderNavComponent_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onClickBackButton();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_back_ios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderNavComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-state-graph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderNavComponent_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-graphs");
        }
      }

      var HeaderNavComponent = /*#__PURE__*/function () {
        function HeaderNavComponent(breakpointObserver, route, translateService) {
          _classCallCheck(this, HeaderNavComponent);

          this.breakpointObserver = breakpointObserver;
          this.route = route;
          this.translateService = translateService;
          this.languageArray = _app_constants__WEBPACK_IMPORTED_MODULE_3__["supporedLanguages"];
          this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            return result.matches;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
        }

        _createClass(HeaderNavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //const browserLang = this.translateService.getBrowserLang();
            // if(supporedLanguages.indexOf(browserLang) > -1){
            //   this.translateService.setDefaultLang(browserLang);
            // } else {
            this.translateService.setDefaultLang('en'); // }
          }
        }, {
          key: "onClickBackButton",
          value: function onClickBackButton() {
            this.route.navigate([this.backToUrl]);
          }
        }, {
          key: "onLanguageChange",
          value: function onLanguageChange(language) {
            this.translateService.use(language);
          }
        }]);

        return HeaderNavComponent;
      }();

      HeaderNavComponent.ɵfac = function HeaderNavComponent_Factory(t) {
        return new (t || HeaderNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]));
      };

      HeaderNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderNavComponent,
        selectors: [["app-header-nav"]],
        inputs: {
          columnsToDisplay: "columnsToDisplay",
          stateNameToDisplay: "stateNameToDisplay",
          showStateGraph: "showStateGraph",
          displayBackButton: "displayBackButton",
          backToUrl: "backToUrl",
          isState: "isState"
        },
        decls: 27,
        vars: 11,
        consts: [[1, "sidenav-container"], ["position", "end", 1, "sidenav", 3, "fixedInViewport", "mode"], ["drawer", ""], ["color", "primary"], ["mat-list-item", "", "routerLink", "/homepage"], ["mat-list-item", "", "routerLink", "/aboutcovid"], ["color", "primary", 1, "display-flex"], ["type", "button", "aria-label", "toolbar back button", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "menuBtns"], [3, "initialValue", "options", "onItemSelect"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 1, "", 3, "click"], ["aria-label", "Side nav toggle icon"], ["fxLayout", "row wrap", "fxLayoutGap", "16px grid", 1, "content"], ["fxFlex", "65%", "fxFlex.xs", "100%", "fxFlex.sm", "100%", "fxFlex.md", "100%"], [3, "columnsToDisplay", "isState", "stateNameToDisplay", "disableRowClick"], ["fxFlex", "35%", "fxFlex.xs", "100%", "fxFlex.sm", "100%", "fxFlex.md", "100%"], [4, "ngIf", "ngIfElse"], ["indaGraphs", ""], ["type", "button", "aria-label", "toolbar back button", "mat-icon-button", "", 3, "click"]],
        template: function HeaderNavComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-nav-list");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About Covid-19");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-sidenav-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-toolbar", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderNavComponent_button_12_Template, 3, 0, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Covid-app");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-menu", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemSelect", function HeaderNavComponent_Template_app_menu_onItemSelect_16_listener($event) {
              return ctx.onLanguageChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderNavComponent_Template_button_click_17_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-table-view", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HeaderNavComponent_div_24_Template, 2, 0, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HeaderNavComponent_ng_template_25_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fixedInViewport", false)("mode", "over");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayBackButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initialValue", "en")("options", ctx.languageArray);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnsToDisplay", ctx.columnsToDisplay)("isState", ctx.isState)("stateNameToDisplay", ctx.stateNameToDisplay)("disableRowClick", ctx.showStateGraph);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showStateGraph)("ngIfElse", _r3);
          }
        },
        directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _table_view_table_view_component__WEBPACK_IMPORTED_MODULE_14__["TableViewComponent"], _state_graph_state_graph_component__WEBPACK_IMPORTED_MODULE_15__["StateGraphComponent"], _graphs_graphs_component__WEBPACK_IMPORTED_MODULE_16__["GraphsComponent"]],
        styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.menuBtns[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex-direction: row-reverse;\n}\n\n.display-flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXItbmF2L2hlYWRlci1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci1uYXYvaGVhZGVyLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbi5tZW51QnRuc3tcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLmRpc3BsYXktZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderNavComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-header-nav",
            templateUrl: "./header-nav.component.html",
            styleUrls: ["./header-nav.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
          }];
        }, {
          columnsToDisplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          stateNameToDisplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showStateGraph: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          displayBackButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          backToUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/components/homepage/homepage.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/homepage/homepage.component.ts ***!
      \***********************************************************/

    /*! exports provided: HomepageComponent */

    /***/
    function srcAppComponentsHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
        return HomepageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_covid_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/covid-api.service */
      "./src/app/services/covid-api.service.ts");
      /* harmony import */


      var _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../header-nav/header-nav.component */
      "./src/app/components/header-nav/header-nav.component.ts");

      var HomepageComponent = /*#__PURE__*/function () {
        function HomepageComponent(_covidAPI) {
          _classCallCheck(this, HomepageComponent);

          this._covidAPI = _covidAPI;
          this.columnsToDisplay = ["State", "Confirmed", "Active", "Recovered", "Deceased"];
        }

        _createClass(HomepageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomepageComponent;
      }();

      HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
        return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_covid_api_service__WEBPACK_IMPORTED_MODULE_1__["CovidApiService"]));
      };

      HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomepageComponent,
        selectors: [["app-homepage"]],
        decls: 1,
        vars: 1,
        consts: [[3, "columnsToDisplay"]],
        template: function HomepageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-nav", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnsToDisplay", ctx.columnsToDisplay);
          }
        },
        directives: [_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_2__["HeaderNavComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-homepage',
            templateUrl: './homepage.component.html',
            styleUrls: ['./homepage.component.scss']
          }]
        }], function () {
          return [{
            type: _services_covid_api_service__WEBPACK_IMPORTED_MODULE_1__["CovidApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/state-graph/state-graph.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/state-graph/state-graph.component.ts ***!
      \*****************************************************************/

    /*! exports provided: StateGraphComponent */

    /***/
    function srcAppComponentsStateGraphStateGraphComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateGraphComponent", function () {
        return StateGraphComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_covid_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/covid-api.service */
      "./src/app/services/covid-api.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
      /* harmony import */


      var angular_google_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! angular-google-charts */
      "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");

      function StateGraphComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Covid-19 Cases in India");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Something went wrong, please try again later");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function StateGraphComponent_ng_template_2_mat_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r8 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "stateColumn." + ctx_r4.stateName + "." + option_r8), " ");
        }
      }

      function StateGraphComponent_ng_template_2_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function StateGraphComponent_ng_template_2_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "google-chart", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r7.districtTitle) + " " + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, "graph.graphHeading"))("type", ctx_r7.districtType)("data", ctx_r7.districtData)("options", ctx_r7.stateoptions)("width", ctx_r7.width)("height", ctx_r7.height);
        }
      }

      function StateGraphComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StateGraphComponent_ng_template_2_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.selectedDistrict.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-autocomplete", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function StateGraphComponent_ng_template_2_Template_mat_autocomplete_optionSelected_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.onStateChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StateGraphComponent_ng_template_2_mat_option_12_Template, 3, 4, "mat-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, StateGraphComponent_ng_template_2_div_14_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, StateGraphComponent_ng_template_2_ng_template_15_Template, 4, 10, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, "graph.graphHeading") + " - " + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, "tableColumn." + ctx_r2.stateName));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 12, "graph.selectDistrict"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.myControl)("matAutocomplete", _r3)("ngModel", ctx_r2.selectedDistrict.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 14, ctx_r2.filteredOptions));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.districtData.length === 0)("ngIfElse", _r6);
        }
      }

      var StateGraphComponent = /*#__PURE__*/function () {
        function StateGraphComponent(_covidAPI, router, cdRef, _translate) {
          _classCallCheck(this, StateGraphComponent);

          this._covidAPI = _covidAPI;
          this.router = router;
          this.cdRef = cdRef;
          this._translate = _translate;
          this.chart = [];
          this.width = window.innerWidth > 1279 ? window.innerWidth * 0.30 : window.innerWidth * 0.8;
          this.height = window.innerWidth > 1279 ? window.innerHeight * 0.4 : window.innerHeight * 0.35;
          this.districtTitle = "COVID-19 information in";
          this.districtType = "BarChart";
          this.districtData = [];
          this.districtGraphOptions = {};
          this.districtActiveCases = 0;
          this.districtName = "";
          this.districtConfirmed = 0;
          this.districtRecovered = 0;
          this.districtDeceased = 0;
          this.districtObject = {};
          this.stateName = "";
          this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
          this.stateoptions = [];
          this.selectedDistrict = {
            key: "",
            value: ""
          };
          this.isGraphError = false;
        }

        _createClass(StateGraphComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.stateName = this.router.snapshot.params.name;

            this._covidAPI.getStates().subscribe(function (res) {
              var districtsObj = res[_this3.stateName]["districtData"];
              _this3.districtObject = districtsObj;
              _this3.stateoptions = Object.keys(districtsObj);
              console.log(_this3.stateoptions);
              _this3.districtData = [[_this3.returnTranslatedString("graph.activeCase"), districtsObj[_this3.stateoptions[0]].active], [_this3.returnTranslatedString("graph.confirmedCase"), districtsObj[_this3.stateoptions[0]].confirmed], [_this3.returnTranslatedString("graph.recoveredCase"), districtsObj[_this3.stateoptions[0]].recovered], [_this3.returnTranslatedString("graph.deceasedCase"), districtsObj[_this3.stateoptions[0]].deceased]];
              _this3.districtTitle = "stateColumn.".concat(_this3.stateName, ".").concat(_this3.stateoptions[0]);
              _this3.selectedDistrict = {
                key: _this3.stateoptions[0],
                value: _this3.returnTranslatedString("stateColumn.".concat(_this3.stateName, ".").concat(_this3.stateoptions[0]))
              };
            }, function (err) {
              _this3.isGraphError = true;
            });

            this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) {
              return _this3._filter(value);
            }));
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            var _this4 = this;

            this.cdRef.detectChanges();
            this.districtData && this._translate.onLangChange.subscribe(function () {
              _this4.selectedDistrict.value = _this4.returnTranslatedString("stateColumn.".concat(_this4.stateName, ".").concat(_this4.selectedDistrict.key));
              _this4.districtData = [[_this4.returnTranslatedString("graph.activeCase"), _this4.districtData[0][1]], [_this4.returnTranslatedString("graph.confirmedCase"), _this4.districtData[1][1]], [_this4.returnTranslatedString("graph.recoveredCase"), _this4.districtData[2][1]], [_this4.returnTranslatedString("graph.deceasedCase"), _this4.districtData[3][1]]];
            });
          }
        }, {
          key: "_filter",
          value: function _filter(value) {
            var filterValue = value.toLowerCase();
            return this.stateoptions.filter(function (option) {
              return option.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "onStateChange",
          value: function onStateChange(event) {
            this.districtData = [[this.returnTranslatedString("graph.activeCase"), this.districtObject[event.option.value].active], [this.returnTranslatedString("graph.confirmedCase"), this.districtObject[event.option.value].confirmed], [this.returnTranslatedString("graph.recoveredCase"), this.districtObject[event.option.value].recovered], [this.returnTranslatedString("graph.deceasedCase"), this.districtObject[event.option.value].deceased]];
            this.selectedDistrict.key = event.option.value;
            this.selectedDistrict.value = this.returnTranslatedString("stateColumn.".concat(this.stateName, ".").concat(event.option.value));
            this.districtTitle = "stateColumn.".concat(this.stateName, ".").concat(event.option.value);
          }
        }, {
          key: "returnTranslatedString",
          value: function returnTranslatedString(key) {
            var convertedValue;

            this._translate.get(key).subscribe(function (str) {
              return convertedValue = str;
            });

            return convertedValue;
          }
        }]);

        return StateGraphComponent;
      }();

      StateGraphComponent.ɵfac = function StateGraphComponent_Factory(t) {
        return new (t || StateGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_covid_api_service__WEBPACK_IMPORTED_MODULE_3__["CovidApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]));
      };

      StateGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StateGraphComponent,
        selectors: [["app-state-graph"]],
        decls: 4,
        vars: 2,
        consts: [[1, "example-card", "margin-1rem"], [4, "ngIf", "ngIfElse"], ["dispGraph", ""], [1, "dispError"], ["mat-card-avatar", "", 1, "example-header-image"], [1, "example-form"], [1, "example-full-width", "padding-sides-1rem"], ["type", "text", "aria-label", "Number", "matInput", "", 3, "placeholder", "formControl", "matAutocomplete", "ngModel", "ngModelChange"], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "textCenter", 4, "ngIf", "ngIfElse"], ["showGraph", ""], [3, "value"], [1, "textCenter"], [1, "graphId"], [3, "title", "type", "data", "options", "width", "height"]],
        template: function StateGraphComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StateGraphComponent_div_1_Template, 5, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StateGraphComponent_ng_template_2_Template, 17, 16, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isGraphError)("ngIfElse", _r1);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardAvatar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], angular_google_charts__WEBPACK_IMPORTED_MODULE_13__["GoogleChartComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        styles: [".graphId[_ngcontent-%COMP%] {\n  widows: 100%;\n}\n\n.textCenter[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  size: 5rem;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.padding-sides-1rem[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  margin-right: 1rem;\n}\n\nmat-spinner[_ngcontent-%COMP%] {\n  zoom: 0.3;\n}\n\n.dispError[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 12px;\n}\n\n@media only screen and (max-width: 768px) {\n  \n  .example-full-width[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGF0ZS1ncmFwaC9zdGF0ZS1ncmFwaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQUE7QUFBRjs7QUFJQTtFQUVFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLFNBQUE7QUFGRjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBREY7O0FBR0E7RUFDRSx1QkFBQTtFQUNFO0lBQ0UsVUFBQTtFQUFKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0YXRlLWdyYXBoL3N0YXRlLWdyYXBoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYXBoSWQge1xuICAvL292ZXJmbG93OiBzY3JvbGw7XG4gIHdpZG93czogMTAwJTtcbiAgLy9wYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLnRleHRDZW50ZXIge1xuICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHNpemU6IDVyZW07XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFkZGluZy1zaWRlcy0xcmVtIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbm1hdC1zcGlubmVyIHtcbiAgem9vbTogMC4zO1xufVxuLmRpc3BFcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXG4gICAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateGraphComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-state-graph",
            templateUrl: "./state-graph.component.html",
            styleUrls: ["./state-graph.component.scss"]
          }]
        }], function () {
          return [{
            type: _services_covid_api_service__WEBPACK_IMPORTED_MODULE_3__["CovidApiService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/states/states.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/states/states.component.ts ***!
      \*******************************************************/

    /*! exports provided: StatesComponent */

    /***/
    function srcAppComponentsStatesStatesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StatesComponent", function () {
        return StatesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../header-nav/header-nav.component */
      "./src/app/components/header-nav/header-nav.component.ts");

      var StatesComponent = /*#__PURE__*/function () {
        function StatesComponent(router) {
          _classCallCheck(this, StatesComponent);

          this.router = router;
          this.columnsToDisplay = ["District", "Confirmed", "Active", "Recovered", "Deceased"];
        }

        _createClass(StatesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.stateName = this.router.snapshot.params.name;
          }
        }]);

        return StatesComponent;
      }();

      StatesComponent.ɵfac = function StatesComponent_Factory(t) {
        return new (t || StatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      StatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StatesComponent,
        selectors: [["app-states"]],
        decls: 1,
        vars: 6,
        consts: [[3, "columnsToDisplay", "isState", "stateNameToDisplay", "showStateGraph", "displayBackButton", "backToUrl"]],
        template: function StatesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-nav", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnsToDisplay", ctx.columnsToDisplay)("isState", true)("stateNameToDisplay", ctx.stateName)("showStateGraph", true)("displayBackButton", true)("backToUrl", "/homepage");
          }
        },
        directives: [_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_2__["HeaderNavComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhdGVzL3N0YXRlcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-states",
            templateUrl: "./states.component.html",
            styleUrls: ["./states.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/table-view/table-view.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/components/table-view/table-view.component.ts ***!
      \***************************************************************/

    /*! exports provided: TableViewComponent */

    /***/
    function srcAppComponentsTableViewTableViewComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableViewComponent", function () {
        return TableViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _services_covid_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/covid-api.service */
      "./src/app/services/covid-api.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/sort */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      function TableViewComponent_mat_label_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "graph.selectDistrict"));
        }
      }

      function TableViewComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "graph.selectState"));
        }
      }

      function TableViewComponent_ng_container_8_th_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-sort-header", column_r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "tableHeader." + column_r10.toLowerCase()), " ");
        }
      }

      function TableViewComponent_ng_container_8_td_2_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list-item", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list-item", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var column_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r18.convertNumberIntoK(element_r14[column_r10])), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14["delta"][column_r10], " ");
        }
      }

      function TableViewComponent_ng_container_8_td_2_div_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list-item", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var column_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r20.convertNumberIntoK(element_r14[column_r10])), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx_r20.convertNumberIntoK(element_r14[column_r10])), " ");
        }
      }

      function TableViewComponent_ng_container_8_td_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_ng_container_8_td_2_div_2_div_1_Template, 6, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_ng_container_8_td_2_div_2_ng_template_2_Template, 6, 6, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var element_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var column_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r14["delta"][column_r10] > 0)("ngIfElse", _r19);
        }
      }

      function TableViewComponent_ng_container_8_td_2_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var column_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r17.convertNumberIntoK(element_r14[column_r10])), " ");
        }
      }

      function TableViewComponent_ng_container_8_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_ng_container_8_td_2_div_2_Template, 4, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableViewComponent_ng_container_8_td_2_ng_template_3_Template, 3, 3, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r14["delta"]["Confirm"] > 0)("ngIfElse", _r16);
        }
      }

      function TableViewComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_ng_container_8_th_1_Template, 3, 4, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_ng_container_8_td_2_Template, 5, 2, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var column_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matColumnDef", column_r10);
        }
      }

      function TableViewComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_td_10_Template_button_click_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var element_r29 = ctx.$implicit;

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.openStateDetails($event, element_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " view district level status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r29 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r5.columnsToDisplay.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@detailExpand", element_r29 == ctx_r5.expandedElement ? "expanded" : "collapsed");
        }
      }

      function TableViewComponent_tr_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
        }
      }

      function TableViewComponent_tr_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableViewComponent_tr_12_Template_tr_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var element_r32 = ctx.$implicit;

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.expandedElement = ctx_r33.expandedElement === element_r32 ? null : element_r32;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r32 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("example-expanded-row", ctx_r7.expandedElement === element_r32);
        }
      }

      function TableViewComponent_div_13_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 28);
        }
      }

      var _c0 = function _c0() {
        return ["expandedDetail"];
      };

      function TableViewComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableViewComponent_div_13_tr_1_Template, 1, 0, "tr", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      }

      function TableViewComponent_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" No data matching the filter \"", _r3.value, "\" ");
        }
      }

      var TableViewComponent = /*#__PURE__*/function () {
        function TableViewComponent(_covidAPI, _router, router) {
          _classCallCheck(this, TableViewComponent);

          this._covidAPI = _covidAPI;
          this._router = _router;
          this.router = router;
          this.rows = [];
          this.delta = {
            "Confirmed": 0,
            "Recovered": 0,
            "Deceased": 0
          };
          this.State = "";
          this.Confirmed = 0;
          this.Recovered = 0;
          this.Active = 0;
          this.Deceased = 0;
          this.description = "";
        }

        _createClass(TableViewComponent, [{
          key: "initilizeData",
          value: function initilizeData(data) {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
          }
        }, {
          key: "getStateDetails",
          value: function getStateDetails() {
            var _this5 = this;

            this._covidAPI.getStates().subscribe(function (res) {
              switch (_this5.columnsToDisplay[0]) {
                case "District":
                  var districtsObj = res[_this5.stateNameToDisplay]["districtData"];
                  _this5.rows = new Array([]);
                  _this5.delta = {
                    "Confirmed": 0,
                    "Recovered": 0,
                    "Deceased": 0
                  };

                  for (var i in districtsObj) {
                    //console.log(districtsObj[i]["delta"])
                    _this5.delta["Confirmed"] = districtsObj[i]["delta"]["confirmed"]; //this.delta["Active"] = parseInt(this.delta["Active"] )+ parseInt(res[key][district][city]["delta"]["active"])

                    _this5.delta["Recovered"] = districtsObj[i]["delta"]["recovered"];
                    _this5.delta["Deceased"] = districtsObj[i]["delta"]["recovered"];

                    _this5.rows.push({
                      District: i,
                      Confirmed: districtsObj[i]['confirmed'],
                      Active: districtsObj[i]['active'],
                      Recovered: districtsObj[i]['recovered'],
                      Deceased: districtsObj[i]['deceased'],
                      description: "some",
                      "delta": _this5.delta
                    });
                  }

                  _this5.rows.shift(); //console.log(this.rows)


                  _this5.rows.sort(function (a, b) {
                    return a.Confiirmed - b.Confirmed;
                  });

                  _this5.initilizeData(_this5.rows.reverse());

                  break;

                case "State":
                  Object.keys(res).forEach(function (key) {
                    if (key !== "State Unassigned") {
                      _this5.State = key;
                      _this5.Active = 0;
                      _this5.Confirmed = 0;
                      _this5.Recovered = 0;
                      _this5.Deceased = 0;
                      _this5.delta = {
                        "Confirmed": 0,
                        "Recovered": 0,
                        "Deceased": 0
                      };
                      Object.keys(res[key]).forEach(function (district) {
                        if (district === "districtData") {
                          Object.keys(res[key][district]).forEach(function (city) {
                            //console.log(res[key][district][city]);
                            _this5.Active = _this5.Active + res[key][district][city]["active"];
                            _this5.Confirmed = _this5.Confirmed + res[key][district][city]["confirmed"];
                            _this5.Recovered = _this5.Recovered + res[key][district][city]["recovered"];
                            _this5.Deceased = _this5.Deceased + res[key][district][city]["deceased"]; //console.log(this.delta["Confirmed"])
                            //console.log(res[key][district][city]["delta"])

                            _this5.delta["Confirmed"] = _this5.delta["Confirmed"] + parseInt(res[key][district][city]["delta"]["confirmed"]); //this.delta["Active"] = parseInt(this.delta["Active"] )+ parseInt(res[key][district][city]["delta"]["active"])

                            _this5.delta["Recovered"] = _this5.delta["Recovered"] + parseInt(res[key][district][city]["delta"]["recovered"]);
                            _this5.delta["Deceased"] = _this5.delta["Deceased"] + parseInt(res[key][district][city]["delta"]["deceased"]);
                          });
                        }
                      });

                      _this5.rows.push(new Object({
                        State: _this5.State,
                        Confirmed: _this5.Confirmed,
                        Active: _this5.Active,
                        Recovered: _this5.Recovered,
                        Deceased: _this5.Deceased,
                        description: "some",
                        delta: {
                          Confirmed: _this5.delta["Confirmed"],
                          Recovered: _this5.delta["Recovered"],
                          Deceased: _this5.delta["Deceased"]
                        }
                      }));
                    }
                  });

                  _this5.rows.sort(function (a, b) {
                    return a.Confirmed - b.Confirmed;
                  });

                  _this5.initilizeData(_this5.rows.reverse());

                  break;
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.rows.splice(0, this.rows.length);
            this.getStateDetails();
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();
          }
        }, {
          key: "openStateDetails",
          value: function openStateDetails(event, row) {
            this._router.navigate(['/states/' + row.State]);
          }
        }, {
          key: "convertNumberIntoK",
          value: function convertNumberIntoK(value) {
            if (value >= 1000000) {
              value = Math.round(value / 1000000) + "M";
              return value;
            } else if (value >= 1000) {
              value = Math.round(value / 1000) + "K";
              return value;
            } else if (!isNaN(value)) {
              return value;
            }

            return !this.stateNameToDisplay ? "tableColumn." + value : "stateColumn.".concat(this.stateNameToDisplay, ".").concat(value);
          }
        }, {
          key: "sortData",
          value: function sortData(sort) {
            var data = this.rows.slice();

            if (!sort.active || sort.direction === '') {
              this.initilizeData(this.rows);
              return;
            }

            this.rows = data.sort(function (a, b) {
              var isAsc = sort.direction === 'asc';

              switch (sort.active) {
                case 'State':
                  return compare(a.State, b.State, isAsc);

                case 'District':
                  return compare(a.District, b.District, isAsc);

                case 'Confirmed':
                  return compare(a.Confirmed, b.Confirmed, isAsc);

                case 'Active':
                  return compare(a.Active, b.Active, isAsc);

                case 'Recovered':
                  return compare(a.Recovered, b.Recovered, isAsc);

                case 'Deceased':
                  return compare(a.Deceased, b.Deceased, isAsc);

                default:
                  return 0;
              }
            });
            this.initilizeData(this.rows);
          }
        }]);

        return TableViewComponent;
      }();

      TableViewComponent.ɵfac = function TableViewComponent_Factory(t) {
        return new (t || TableViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_covid_api_service__WEBPACK_IMPORTED_MODULE_3__["CovidApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      TableViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TableViewComponent,
        selectors: [["app-table-view"]],
        inputs: {
          columnsToDisplay: "columnsToDisplay",
          stateNameToDisplay: "stateNameToDisplay",
          disableRowClick: "disableRowClick",
          isState: "isState"
        },
        decls: 15,
        vars: 7,
        consts: [[1, "display-flex"], [4, "ngIf", "ngIfElse"], ["elseState", ""], ["matInput", "", "placeholder", "", 3, "keyup"], ["input", ""], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 1, "tableView", 3, "dataSource", "matSortChange"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], ["class", "mat-row", 4, "matNoDataRow"], [3, "matColumnDef"], ["mat-header-cell", "", "class", "columHeader mobileView", 3, "mat-sort-header", 4, "matHeaderCellDef"], ["mat-header-cell", "", 1, "columHeader", "mobileView", 3, "mat-sort-header"], ["mat-cell", ""], ["role", "list"], ["noRowReq", ""], ["nonDelta", ""], ["role", "listitem", 1, "reduceMargin", "mobileView", "tableRows"], [1, "example-element-detail"], [1, "example-element-description", "marginRight"], ["mat-stroked-button", "", "color", "primary", 1, "tableBtn", 3, "click"], [1, "icon-display"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", 1, "example-detail-row"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
        template: function TableViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableViewComponent_mat_label_2_Template, 3, 3, "mat-label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableViewComponent_ng_template_3_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TableViewComponent_Template_input_keyup_5_listener($event) {
              return ctx.applyFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function TableViewComponent_Template_table_matSortChange_7_listener($event) {
              return ctx.sortData($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableViewComponent_ng_container_8_Template, 3, 1, "ng-container", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableViewComponent_td_10_Template, 7, 2, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TableViewComponent_tr_11_Template, 1, 0, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableViewComponent_tr_12_Template, 1, 2, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableViewComponent_div_13_Template, 2, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableViewComponent_tr_14_Template, 3, 1, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.disableRowClick)("ngIfElse", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columnsToDisplay);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsToDisplay);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columnsToDisplay);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.disableRowClick);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatNoDataRow"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]],
        styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\n.deltaValue[_ngcontent-%COMP%] {\n  color: red;\n  display: flex;\n  font-size: 12px;\n  padding: 0em;\n  margin: 0em;\n}\n\n.reduceMargin[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 7px;\n  margin: 0;\n}\n\n.marginRight[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.columHeader[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.iconId[_ngcontent-%COMP%] {\n  transform: scale(0.6);\n}\n\n[_nghost-%COMP%]     .mat-list-item-content {\n  padding: 0 !important;\n}\n\n.mat-list-item[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.display-flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.menuBtn[_ngcontent-%COMP%] {\n  max-height: 2rem;\n}\n\n.mobileView[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n@media (max-width: 768px) {\n  .mobileView[_ngcontent-%COMP%] {\n    font-size: 9px;\n  }\n\n  .deltaValue[_ngcontent-%COMP%] {\n    color: red;\n    display: flex;\n    font-size: 7px;\n    padding: 0em;\n    margin: 0em;\n  }\n\n  .tableBtn[_ngcontent-%COMP%] {\n    font-size: 10px;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    height: 2rem;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  .icon-display[_ngcontent-%COMP%] {\n    transform: scale(0.7);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YWJsZS12aWV3L3RhYmxlLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxTQUFBO0FBQ0o7O0FBRUU7RUFDRSxzQkFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSjs7QUFFRTtFQUNFLHNCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFFSjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRUY7O0FBUUE7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFMRjs7QUFPQTtFQUNFLGlCQUFBO0FBSkY7O0FBTUE7RUFFRSxpQkFBQTtBQUpGOztBQU1BO0VBRUUscUJBQUE7QUFKRjs7QUFPQTtFQUNFLHFCQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtBQUpGOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQUtBO0VBQ0U7SUFDRSxjQUFBO0VBRkY7O0VBSUE7SUFDRSxVQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQURGOztFQUdBO0lBQ0UsZUFBQTtJQUNBLDBCQUFBO0lBQUEsdUJBQUE7SUFBQSxrQkFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBQUY7O0VBRUE7SUFDRSxxQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RhYmxlLXZpZXcvdGFibGUtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgdHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgXG4gIHRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIH1cbiAgXG4gIHRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICB9XG4gIFxuICAuZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgaGVpZ2h0OiAxMDRweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICB9XG4gIFxuICAuZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbi5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbi5kZWx0YVZhbHVle1xuICBjb2xvcjogcmVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDBlbTtcbiAgbWFyZ2luOiAwZW07XG59XG5cbi8vIC50YWJsZUJ0bntcbi8vICAgLy9oZWlnaHQ6IDJyZW07XG4vLyB9XG4vLyAudGFibGVSb3dze1xuXG4vLyB9XG5cbi5yZWR1Y2VNYXJnaW57XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogN3B4O1xuICBtYXJnaW46IDA7XG59XG4ubWFyZ2luUmlnaHR7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLmNvbHVtSGVhZGVye1xuICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHhcbn1cbi5pY29uSWR7XG4gIC8vZm9udC1zaXplOiAzMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNjApO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLm1hdC1saXN0LWl0ZW17XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmRpc3BsYXktZmxleHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1lbnVCdG4ge1xuICBtYXgtaGVpZ2h0OiAycmVtO1xufVxuLm1vYmlsZVZpZXcge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vYmlsZVZpZXd7XG4gICAgZm9udC1zaXplOiA5cHg7XG4gIH1cbiAgLmRlbHRhVmFsdWV7XG4gICAgY29sb3I6IHJlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogN3B4O1xuICAgIHBhZGRpbmc6IDBlbTtcbiAgICBtYXJnaW46IDBlbTtcbiAgfVxuICAudGFibGVCdG57XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICB9XG4gIC5pY29uLWRpc3BsYXkge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiB9XG59Il19 */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '0px',
            minHeight: '0'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            height: '*'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-table-view',
            templateUrl: './table-view.component.html',
            styleUrls: ['./table-view.component.scss'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              height: '0px',
              minHeight: '0'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              height: '*'
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
          }]
        }], function () {
          return [{
            type: _services_covid_api_service__WEBPACK_IMPORTED_MODULE_3__["CovidApiService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, {
          columnsToDisplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          stateNameToDisplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disableRowClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      function compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
      }
      /***/

    },

    /***/
    "./src/app/services/covid-api.service.ts":
    /*!***********************************************!*\
      !*** ./src/app/services/covid-api.service.ts ***!
      \***********************************************/

    /*! exports provided: CovidApiService */

    /***/
    function srcAppServicesCovidApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CovidApiService", function () {
        return CovidApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var CovidApiService = /*#__PURE__*/function () {
        function CovidApiService(http) {
          _classCallCheck(this, CovidApiService);

          this.http = http;
          this._registerUrl = "https://api.covid19india.org";
        }

        _createClass(CovidApiService, [{
          key: "getStates",
          value: function getStates() {
            return this.http.get(this._registerUrl + "/state_district_wise.json");
          }
        }, {
          key: "getCasesByDate",
          value: function getCasesByDate() {
            return this.http.get(this._registerUrl + "/data.json");
          }
        }]);

        return CovidApiService;
      }();

      CovidApiService.ɵfac = function CovidApiService_Factory(t) {
        return new (t || CovidApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      CovidApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CovidApiService,
        factory: CovidApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CovidApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/sumukha/Documents/Covid-19/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map