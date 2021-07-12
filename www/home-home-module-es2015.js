(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title class=\"ion-text-center\">* Leyenda Pristine *</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar name=\"input-pair\" mode=\"ios\" placeholder=\"Buscar\" debounce=\"1200\"\n  [(ngModel)]=\"name\" enterkeyhint=\"enter\" (keyup)=\"getItems($event)\" (ionClear)=\"clearSearch()\"\n         style=\"padding-left: 5px;padding-right: 5px;padding-bottom: 0px; height: 65px;\">\n    </ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor=\"let l of leyendList\" class=\"filtered\">\n      <ion-label style=\"font-weight: 600\">( {{l.name}} )</ion-label>\n      <ion-text color=\"medium\">{{l.description}}</ion-text>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filtered {\n  --background: #e6e6fa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmUvRGVza3RvcC9UUkFCQUpPL0FQUFMvTFByaXN0aW5lQXBwL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlcmVkIHtcbiAgICAtLWJhY2tncm91bmQ6ICNlNmU2ZmE7XG59IiwiLmZpbHRlcmVkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTZlNmZhO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() {
        this.name = '';
        this.leyendList = [];
        this.fromCache = [];
    }
    ngOnInit() {
        this.leyendList = [{
                name: "PTT",
                description: "Trader entrenado por Pristine"
            }, {
                name: "BT",
                description: "Cola de piso"
            }, {
                name: "TT",
                description: "Cola de techo"
            }, {
                name: "PTO",
                description: "Oportunidades de Trading Pristine"
            }, {
                name: "Up Trend",
                description: "Tendencia alcista"
            }, {
                name: "Down Trend",
                description: "Tendencia bajista"
            }, {
                name: "PBS",
                description: "Patrón de compra Pristine"
            }, {
                name: "PSS",
                description: "Patrón de venta en corto Pristine"
            }, {
                name: "LH",
                description: "Máximo menor"
            }, {
                name: "HL",
                description: "Mínimo mayor"
            }, {
                name: "LL",
                description: "Mínimo menor"
            }, {
                name: "HH",
                description: "Máximo mayor"
            }, {
                name: "+CDG",
                description: "Cambio de guardia Pristine al alza"
            }, {
                name: "-CDG",
                description: "Cambio de guardia Pristine a la baja"
            }, {
                name: "NG",
                description: "Gap novato"
            }, {
                name: "PG",
                description: "Gap profesional"
            }, {
                name: "NRB",
                description: "Velas de rango estrecho"
            }, {
                name: "NB",
                description: "Velas de cuerpo estrecho"
            }, {
                name: "mS",
                description: "Soporte menor"
            }, {
                name: "mR",
                description: "Resistencia menor"
            }, {
                name: "MS",
                description: "Soporte mayor"
            }, {
                name: "MR",
                description: "Resistencia mayor"
            }, {
                name: "CBS",
                description: "Patrón culminante de compra"
            }, {
                name: "CSS",
                description: "Patrón culminante de venta en corto"
            }, {
                name: "PBO",
                description: "Rompimiento alcista Pristine"
            }, {
                name: "PBD",
                description: "Rompimiento bajista Pristine"
            }, {
                name: "R&F",
                description: "Rebote y fracaso"
            }, {
                name: "+GS",
                description: "Sorpresa de Gap alcista"
            }, {
                name: "-GS",
                description: "Sorpresa de Gap bajista"
            }, {
                name: "+20/20",
                description: "Alcista 20/20"
            }, {
                name: "-20/20",
                description: "Bajista 20/20"
            }, {
                name: "+Trap",
                description: "Táctica bull trap"
            }, {
                name: "-Trap",
                description: "Táctica bear trap"
            }, {
                name: "+123",
                description: "Compra de continuación"
            }, {
                name: "-123",
                description: "Venta de continuación"
            }, {
                name: "GnS",
                description: "Táctica gap-n-snap"
            }, {
                name: "GnC",
                description: "Táctica gap-n-crap"
            }, {
                name: "-Mort",
                description: "Táctica de hipoteca bajista"
            }, {
                name: "+Mort",
                description: "Táctica de hipoteca alcista"
            }
        ];
        this.fromCache = this.leyendList;
    }
    getItems($event) {
        this.leyendList = this.fromCache;
        const val = $event.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.leyendList = this.leyendList.filter((item) => {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.leyendList = this.fromCache;
        }
    }
    clearSearch() {
        this.leyendList = this.fromCache;
    }
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map