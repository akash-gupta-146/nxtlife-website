webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div[parallelex-content] h2{\n    margin-top:0px;\n    color:white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"parallelex-block\">\n        <div parallelex-background class=\"parallel-image3\">\n          <div parallelex-content>\n                <app-block-heading [blockData]=\"heading\"></app-block-heading>\n            <div class=\"quote\">\n                    “Technology can be our best friend, and technology can also be the biggest party pooper of our lives. It interrupts our own story, interrupts our ability to have a thought or a daydream, to imagine something wonderful, because we're too busy bridging the walk from the cafeteria back to the office on the cell phone”                \n              <div writer>\n                  <b>-Steven Spielberg</b>\n            </div>\n            </div>\n          </div>\n        </div>\n      </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
        this.heading = { title: 'About us', paragraph: 'NxtLife Technologies (a UK Based Product Development Company) formed by group of passionate people from London Business School to develop innovative solutions that will assist people to do things right, bring a change and make an impact.' };
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "router-outlet{\n    padding-top:100px;\n}\ndiv[blank]{\n    height:55px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!-- <app-carousel></app-carousel>\n<app-strategic-planning></app-strategic-planning> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__strategic_planning_strategic_planning_component__ = __webpack_require__("../../../../../src/app/strategic-planning/strategic-planning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routing_module__ = __webpack_require__("../../../../../src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nxtlife_services_nxtlife_services_component__ = __webpack_require__("../../../../../src/app/nxtlife-services/nxtlife-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__block_heading_block_heading_component__ = __webpack_require__("../../../../../src/app/block-heading/block-heading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("../../../../@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__screenshots_screenshots_component__ = __webpack_require__("../../../../../src/app/screenshots/screenshots.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__carousel_carousel_component__["a" /* CarouselComponent */],
            __WEBPACK_IMPORTED_MODULE_5__strategic_planning_strategic_planning_component__["a" /* StrategicPlanningComponent */],
            __WEBPACK_IMPORTED_MODULE_7__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__nxtlife_services_nxtlife_services_component__["a" /* NxtlifeServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_13__block_heading_block_heading_component__["a" /* BlockHeadingComponent */],
            __WEBPACK_IMPORTED_MODULE_15__screenshots_screenshots_component__["a" /* ScreenshotsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_14__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyCaq46VJQf5eWFf2RAZQLUzA_YzMDA1tQA'
            })
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/block-heading/block-heading.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* //block heading */\ndiv[block-heading]{\n    text-align:center;\n  }\ndiv[block-heading] h2{\n    position:relative;\n    margin:44px;\n    color:#676767;\n  }\ndiv[block-heading] h2:before{\n    content: \"\";\n    position: absolute;\n    width: 150px;\n    bottom: 0;\n    left: 50%;\n    margin-left: -70px;\n    height: 2px;\n    background: #ebebeb;\n    bottom: -10px;\n  }\ndiv[block-heading] h2:after{\n    content: \"\";\n    position: absolute;\n    width: 24px;\n    height: 24px;\n    bottom: -20px;\n    left: 50%;\n    margin-left: -12px;\n    border: 5px solid #fff;\n    border-radius: 20px;\n    background: var(--main-one);\n  }\n/* end of block heading */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/block-heading/block-heading.component.html":
/***/ (function(module, exports) {

module.exports = "<div block-heading>\n  <h2 class=\"animation rubberBand\">{{blockData.title}}</h2>\n  <p>{{ blockData.paragraph }}</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/block-heading/block-heading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockHeadingComponent; });
/* unused harmony export Block */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlockHeadingComponent = (function () {
    function BlockHeadingComponent() {
    }
    BlockHeadingComponent.prototype.ngOnInit = function () {
    };
    return BlockHeadingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Block)
], BlockHeadingComponent.prototype, "blockData", void 0);
BlockHeadingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-block-heading',
        template: __webpack_require__("../../../../../src/app/block-heading/block-heading.component.html"),
        styles: [__webpack_require__("../../../../../src/app/block-heading/block-heading.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BlockHeadingComponent);

var Block = (function () {
    function Block() {
    }
    return Block;
}());

//# sourceMappingURL=block-heading.component.js.map

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div[overlay]{\n    background:white;\n}\ndiv[overlay] img{\n    /* opacity:0.6; */\n}\ndiv[cover]{\n    position:relative;\n}\n.carousel-item div[caption]{\n    color:white;\n    text-align:center;\n    position:absolute;\n    bottom:3.5vh;\n    z-index:1;\n    width:100%;\n}\ndiv[green]{\n    color: rgb(0, 55, 0) !important;\n}\ndiv[dark]{\n    color:black !important;\n}\n.carousel-item div[caption] h2{\n    font-size:3vw;\n}\n.carousel-item div[caption] span{\n    font-size:2vw;\n}\n/* NxtLife SLides */\n.carousel-item div[nxtLife-slide]{\n    color:white;\n    z-index:1;\n    position:absolute;\n    width: 100vw;\n}\n.carousel-item div[nxtLife-slide] h2{\n    position: absolute;\n    top:10vw;\n    left: 5vw;\n    font-size: 3vw;\n    -webkit-animation-name:slideInLeft;\n            animation-name:slideInLeft;\n    -webkit-animation-duration: 1.5s;\n            animation-duration: 1.5s;\n}\n.carousel-item div[overlay] .nxtlife-logo1{\n    position: absolute;\n    right: 12vw;\n    top: 15vw;\n    width: 20vw;\n    z-index: 1;\n    -webkit-animation-name: slideInUp;\n            animation-name: slideInUp;\n    -webkit-animation-duration: 1.5s;\n            animation-duration: 1.5s;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"nxtlifeCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#nxtlifeCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#nxtlifeCarousel\" data-slide-to=\"1\"></li>\n    <li data-target=\"#nxtlifeCarousel\" data-slide-to=\"2\"></li>\n    <li data-target=\"#nxtlifeCarousel\" data-slide-to=\"3\"></li>\n    <li data-target=\"#nxtlifeCarousel\" data-slide-to=\"4\"></li>\n    <li data-target=\"#nxtlifeCarousel\" data-slide-to=\"5\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n              <div nxtLife-slide>\n                <h2>NxtLife Technologies</h2>\n                <span>\"\"</span>\n              </div>\n              <div overlay>\n              <img class=\"d-block w-100\" src=\"assets/images/carousel/0.png\" alt=\"First slide\"/>\n               <img src=\"assets/images/nxtlife-logo.svg\" class=\"nxtlife-logo1\">\n            </div>\n            </div>\n\n\n            <div class=\"carousel-item\">\n\n          <div cover>\n            <div caption>\n              <h3>Strategic Planning</h3>\n              <span>\"Links Today With Tomorrow\"</span>\n            </div>\n            <div overlay class=\"image-effect\">\n              <img class=\"d-block w-100\" src=\"assets/images/carousel/sp/back.png\" alt=\"First slide\">\n              <img src=\"assets/images/carousel/sp/bridge1.png\" class=\"animating bridge1\" />\n              <img src=\"assets/images/carousel/sp/bridge2.png\" class=\"animating bridge2\" />\n              <img src=\"assets/images/carousel/sp/hand.png\" class=\"animating hand\" />\n            </div>\n          </div>\n        </div>\n    \n    <div class=\"carousel-item\">\n      <div plane>\n          <div class=\"plane-container\">\n              \n              <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n              width=\"1131.53px\" height=\"379.304px\" viewBox=\"0 0 1131.53 379.304\" enable-background=\"new 0 0 1131.53 379.304\"\n              xml:space=\"preserve\" class=\"plane\">\n              <polygon fill=\"#D8D8D8\" points=\"72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223  \"/>\n              <polygon fill=\"#C4C4C3\" points=\"1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102   \"/>\n              </svg>\n              \n              </div>\n      \n        <div caption dark>\n          <h2>Stakeholders’ Experience Management</h2>\n          <span>\"Design & Manage stakeholders' journey\"</span>\n        </div>\n        <div overlay>\n        <img class=\"d-block w-100\" src=\"assets/images/carousel/sem/back.png\" alt=\"First slide\">\n      </div>\n    </div>\n      </div>    \n\n      <div class=\"carousel-item\">\n        <div bird>\n            <div id=\"pictureframe\">\n                <div id=\"bird\">\n                  <div id=\"body2\"></div>\n                  <div id=\"body1\"></div>\n                  <div id=\"wing-l\"></div>  \n                  <div id=\"wing-r\"></div>  \n                </div>\n              </div> \n            \n          <div caption>\n            <h3>Risk Management & Internal Audit</h3>\n            <span>\"consectetur adipiscing elit. Etiam posuere urna in suscipit tempor\"</span>\n          </div>\n          <div overlay>\n          <img class=\"d-block w-100\" src=\"assets/images/carousel/rm/back.png\" alt=\"First slide\">\n        </div>\n      </div>\n        </div> \n        \n        <div class=\"carousel-item\">\n            <div caption green>\n              <h3>Quality Assurance & Accreditation</h3>\n              <span>\"consectetur adipiscing elit. Etiam posuere urna in suscipit tempor\"</span>\n            </div>\n            <div overlay>\n            <img class=\"d-block w-100\" src=\"assets/images/carousel/qa/back.png\" alt=\"First slide\">\n          </div>\n          </div>        \n\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#nxtlifeCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#nxtlifeCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    return CarouselComponent;
}());
CarouselComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-carousel',
        template: __webpack_require__("../../../../../src/app/carousel/carousel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/carousel/carousel.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CarouselComponent);

//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div[contact-details]{\n    display: block;\n    margin:auto;\n    background:white;\n    padding:20px;\n    -webkit-box-shadow:0 4px 8px gray;\n            box-shadow:0 4px 8px gray;\n}\ndiv[contact-details]{\n    \n}\ntable td{\n    color:var(--main-one)\n }\ndiv[contact-details] tr td[icon]{\n    width:20%;\n}\ndiv[contact-details] tr td[detail]{\n    width:80%;\n    font-size:13px;\n}\ndiv[contact-form]{\n    padding:20px;\n    display: block;\n    margin:auto;\n    background:white;\n    padding:20px;\n    -webkit-box-shadow:0 4px 8px gray;\n            box-shadow:0 4px 8px gray;\n    border-radius: 0 25px 0 25px;\n}\ninput, textarea{\n    width:100%;\n    padding:10px;\n    border:1px solid gray;\n}\n.submit-button{\n    float: right;\n    border: 1px solid var(--main-one);\n    background: var(--main-one);\n    color: white;\n    padding: 10px 40px;\n    font-size: 1.5vw;\n    -webkit-transition:0.2s;\n    transition:0.2s;\n}\n.submit-button:hover{\n    background:var(--main-two);\n    -webkit-box-shadow:1px 1px 5px var(--main-two);\n            box-shadow:1px 1px 5px var(--main-two);\n    border: 1px solid var(--main-two);\n}\n#map {\n        width: 100%;\n        height: 400px;\n        background-color: grey;\n      }\nagm-map {\n        height: 300px;\n      }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-block-heading [blockData]=\"heading\"></app-block-heading>\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-sm-12\">\n          <div contact-details>\n            <table>\n              <tr>\n                  <td icon>\n                      <i class=\"material-icons\">call</i>\n                  </td>\n                  <td detail>\n                      +44 744 8114431\n                  </td>\n                </tr>\n                <tr>\n                    <td icon>\n                        <i class=\"material-icons\">home</i>\n                    </td>\n                    <td detail>\n                        21, Middlewich House Taywood Road <br>\n                        Northolt, Middlesex, UB5 6GF\n                    </td>\n                  </tr>\n                <tr>\n                    <td icon>\n                        <i class=\"material-icons\">email</i>\n                    </td>\n                    <td detail>\n                        info@nxtlifetechnologies.com\n                    </td>\n                  </tr>\n\n            </table>\n          </div>\n        </div>\n        <div class=\"col-lg-8 col-sm-12\">\n            <div contact-form>\n          <div class=\"row\">\n            <div class=\"col-lg-6 col-sm-12  mt-3\">\n              <input type=\"text\" placeholder=\"Name\">\n            </div>\n            <div class=\"col-lg-6 col-sm-12  mt-3\">\n                <input type=\"email\" placeholder=\"Email\">\n              </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-sm-12 mt-3\">\n              <input type=\"text\" placeholder=\"Subject\">\n            </div>\n          </div>  \n          <div class=\"row\">\n              <div class=\"col-lg-12 col-sm-12  mt-3\">\n                <textarea  placeholder=\"Add Message\" row=3></textarea>\n              </div>\n            </div> \n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                  <button type=\"button\" class=\"submit-button\">\n                       Send\n                  </button>\n              </div>\n            </div>                \n          </div>\n      </div>\n</div>\n</div>\n<div class=\"row mt-3\"></div>\n\n    <agm-map class=\"mt-3\" [latitude]=\"lat\" [longitude]=\"lng\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n      </agm-map>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
        // lat: number = 29.690900;
        // lng: number = 77.151907;
        this.lat = 51.5292013;
        this.lng = -0.3785563;
        this.heading = { title: 'Contact us', paragraph: '' };
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@-webkit-keyframes slideUp{\n    from{\n        opacity:0;\n        -webkit-transform:translatey(100px);\n                transform:translatey(100px);\n    }\n    to{\n        opacity:1;\n        -webkit-transform:translatey(0px);\n                transform:translatey(0px);\n    }\n}\n\n@keyframes slideUp{\n    from{\n        opacity:0;\n        -webkit-transform:translatey(100px);\n                transform:translatey(100px);\n    }\n    to{\n        opacity:1;\n        -webkit-transform:translatey(0px);\n                transform:translatey(0px);\n    }\n}\n\n.navbar{\n    /* position: fixed;\n    z-index: 1;\n    width: 100%; */\n    color: #fff;\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 10;\n    padding: 10px 7vw;\n}\n\n.navbar-brand span[blue]{\n    color: var(--main-one) ;\n}\n\n.navbar-brand span[green]{\n    color: var(--main-two);\n}\n\n.navbar-brand{\n    display:none;\n}\n\n.navbar-nav li a{\n    color:white;\n}\n\n.navbar-nav .active, .navbar-nav li:hover{\n    color:white;\n    border-bottom:2px solid white;\n}\n\n.dropdown-menu{\n    -webkit-animation-name: slideUp;\n            animation-name: slideUp;\n    border-radius: 0px;\n    -webkit-animation-duration: 0.3s !important;\n            animation-duration: 0.3s !important;\n    background: #0000004a;\n    border-top:0;\n    border-left:0;\n    border-right:0;\n    border-bottom:2px solid white;\n    display: none;\n}\n\n.dropdown:hover .dropdown-menu{\n    display: block;\n}\n\n.dropdown-menu .dropdown-item:hover,.dropdown-menu .dropdown-item:focus, .dropdown-menu .active  {\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    color:black !important;\n}\n\n.dropdown i{\n    font-size: inherit;\n}\n\n/* //scrolled page header styles */\n\n.page-scroll-header {\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    background-color: #fff !important;\n    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.582);\n            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.582);\n    padding:0 7vw;\n}\n\n.page-scroll-header .navbar-nav li a{\n    color:var(--main-one);\n}\n\n.page-scroll-header .navbar-nav .active, .page-scroll-header  .navbar-nav li:hover{\n    color:black;\n    border-bottom:3px solid var(--main-one);\n}\n\n.page-scroll-header .navbar-brand{\n    display:block;\n}\n\n.page-scroll-header .dropdown-menu{\n    -webkit-animation-name: slideUp;\n            animation-name: slideUp;\n    border-radius: 0px;\n    -webkit-animation-duration: 0.3s !important;\n            animation-duration: 0.3s !important;\n    background: white;\n    border-top:0;\n    border-left:0;\n    border-right:0;\n    border-bottom:2px solid var(--main-one);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" [ngClass]=\"{'page-scroll-header': isScrolled}\">\n  <a class=\"navbar-brand\" [ngx-scroll-to]=\"'#home'\" routerLink=\"home\">\n    <img src=\"/assets/images/nxtlife-logo.svg\" width=\"30\" height=\"30\" alt=\"\">\n    <span blue>Nxt</span><span green>Life</span>\n    <span blue>Technologies</span>\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <!-- contents for left side -->\n    </ul>\n    <ul class=\"my-2 my-lg-0 navbar-nav\">\n      <li class=\"nav-item active\" [ngx-scroll-to]=\"'#home'\">\n        <a class=\"nav-link\" routerLink=\"\">Home\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link\"  [ngx-scroll-to]=\"'#products'\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Products\n          <i class=\"material-icons\">arrow_drop_down</i>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\">Stakeholders’ Experience Management</a>\n          <a class=\"dropdown-item\" href=\"#\">Learning Experience Management</a>\n          <a class=\"dropdown-item\" href=\"#\">Customer Experience Management</a>\n          <a class=\"dropdown-item\" href=\"#\">Stakeholders’ Risk Management</a>\n          <a class=\"dropdown-item\" routerLink=\"sp\">Strategic Planning</a>\n        </div>\n      </li>\n      <li class=\"nav-item dropdown\" >\n        <a class=\"nav-link\" [ngx-scroll-to]=\"'#services'\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Services\n          <i class=\"material-icons\">arrow_drop_down</i>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\">Consultancy</a>\n          <a class=\"dropdown-item\">Training</a>\n          <a class=\"dropdown-item\" href=\"#\">Software Development</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngx-scroll-to]=\"'#about'\">About us</a>\n      </li>\n\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.isScrolled = false;
        this.currPos = 0;
        this.startPos = 0;
        this.changePos = 100;
    }
    HeaderComponent.prototype.updateHeader = function (evt) {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        if (this.currPos >= this.changePos) {
            this.isScrolled = true;
        }
        else {
            this.isScrolled = false;
        }
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")],
        host: {
            '(window:scroll)': 'updateHeader($event)'
        }
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-carousel id=\"home\"></app-carousel>\n<app-products id=\"products\"></app-products>\n<app-nxtlife-services id=\"services\"></app-nxtlife-services>\n<app-about id=\"about\"></app-about>\n<app-contact id=\"contact\"></app-contact>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/nxtlife-services/nxtlife-services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes hoverSlide{\n    from{\n        width:0px;\n    }\n    to{\n        width:100%;\n    }\n}\n\n@keyframes hoverSlide{\n    from{\n        width:0px;\n    }\n    to{\n        width:100%;\n    }\n}\n\n.hover-card{\n    height:250px;\n    /* background: #FF5722; */\n    background:var(--main-one);\n    border-radius: 10px;\n    margin:10px;\n    padding:10px;\n    position:relative;\n}\n\n.hover-card div[content]{\n    position:relative;\n    left:50%;\n    top:50%;\n    -webkit-transform:translate(-50%,-50%);\n            transform:translate(-50%,-50%);\n    text-align:center;\n    color:white;\n    \n}\n\n.hover-card img{\n    height: 150px;\n    display:block;\n    margin:auto;\n}\n\n.hover-card div[hover-area]{\n    position:absolute;\n    border-radius: 10px;\n    width:100%;\n    height:100%;\n    display:none;\n    background: #000000c2;\n    top:0;\n    left:0;\n    -webkit-animation-name:hoverSlide;\n            animation-name:hoverSlide;\n    -webkit-animation-duration:0.3s;\n            animation-duration:0.3s;\n}\n\n.hover-card:hover div[hover-area]{\n    -webkit-transition:0.3s;\n    transition:0.3s;\n    display:block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nxtlife-services/nxtlife-services.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-block-heading [blockData]=\"heading\"></app-block-heading>\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-sm-12\">\n      <div class=\"hover-card\">\n        <div content>\n          <img src=\"assets/images/software-development.png\">\n          <br>\n          <h5>Software Development</h5>\n        </div>\n        <div hover-area>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-sm-12\">\n      <div class=\"hover-card\">\n        <div content>\n          <img src=\"assets/images/training.png\">\n          <br>\n          <h5>Training</h5>\n        </div>\n        <div hover-area>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-sm-12\">\n      <div class=\"hover-card\">\n        <div content>\n          <img src=\"assets/images/consultancy.png\">\n          <br>\n          <h5>Consultancy</h5>\n        </div>\n        <div hover-area>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/nxtlife-services/nxtlife-services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NxtlifeServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NxtlifeServicesComponent = (function () {
    function NxtlifeServicesComponent() {
        this.heading = { title: 'Services', paragraph: "There are many variations of lorem of Lorem Ipsum available for use a sit amet, consectetur debits adipisicing lacus.There\n      are many variations of lorem of Lorem Ipsum available for use a sit amet, consectetur debits adipisicing lacus" };
    }
    NxtlifeServicesComponent.prototype.ngOnInit = function () {
    };
    return NxtlifeServicesComponent;
}());
NxtlifeServicesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nxtlife-services',
        template: __webpack_require__("../../../../../src/app/nxtlife-services/nxtlife-services.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nxtlife-services/nxtlife-services.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NxtlifeServicesComponent);

//# sourceMappingURL=nxtlife-services.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container bar\">\n    <app-block-heading [blockData]=\"heading\"></app-block-heading>\n  <div class=\"row\" nxtlife-list>\n    <div class=\"col-lg-6 col-sm-12\" routerLink=\"/sp\">\n      <div li class=\"animation fadeInRight\">\n        <div bullet>\n          <i class=\"fa fa-check-square-o\"></i>\n        </div>\n        <div text>\n          <h5>Strategic Planning</h5>\n          <p>Links Today With Tomorrow</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div li class=\"animation fadeInRight\">\n        <div bullet>\n          <i class=\"fa fa-check-square-o\"></i>\n        </div>\n        <div text>\n          <h5>Stakeholders’ Experience Management</h5>\n          <p>Design & Manage stakeholders' journey</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div li class=\"animation fadeInRight\">\n        <div bullet>\n          <i class=\"fa fa-check-square-o\"></i>\n        </div>\n        <div text>\n          <h5>Risk Management & Internal Audit</h5>\n          <p>consectetur adipiscing elit. Etiam posuere urna in suscipit tempor</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div li class=\"animation fadeInRight\">\n        <div bullet>\n          <i class=\"fa fa-check-square-o\"></i>\n        </div>\n        <div text>\n          <h5>Quality Assurance & Accreditation</h5>\n          <p>consectetur adipiscing elit. Etiam posuere urna in suscipit tempor</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div li class=\"animation fadeInRight\">\n        <div bullet>\n          <i class=\"fa fa-check-square-o\"></i>\n        </div>\n        <div text>\n          <h5>Learning Experience & Management</h5>\n          <p>consectetur adipiscing elit. Etiam posuere urna in suscipit tempor</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"parallelex-block\">\n        <div parallelex-background class=\"parallel-image2\">\n          <div parallelex-content>\n            <div class=\"quote\">\n                    “Technology can be our best friend, and technology can also be the biggest party pooper of our lives. It interrupts our own story, interrupts our ability to have a thought or a daydream, to imagine something wonderful, because we're too busy bridging the walk from the cafeteria back to the office on the cell phone”                \n              <div writer>\n                  <b>-Steven Spielberg</b>\n            </div>\n            </div>\n          </div>\n        </div>\n    \n      </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = (function () {
    function ProductsComponent() {
        this.heading = { title: 'Products', paragraph: "There are many variations of lorem of Lorem Ipsum available for use a sit amet, consectetur debits adipisicing lacus.There\n      are many variations of lorem of Lorem Ipsum available for use a sit amet, consectetur debits adipisicing lacus" };
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductsComponent);

//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__strategic_planning_strategic_planning_component__ = __webpack_require__("../../../../../src/app/strategic-planning/strategic-planning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    { path: 'sp', component: __WEBPACK_IMPORTED_MODULE_3__strategic_planning_strategic_planning_component__["a" /* StrategicPlanningComponent */] }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        declarations: [],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]]
    })
], RoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/screenshots/screenshots.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::-webkit-scrollbar { \n    display: none; \n}\ndiv[screenshots]{\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    overflow-x: scroll;\n}\ndiv[screenshots] div[block]{\n    /* margin:0 5px; */\n}\ndiv[screenshots] div[block] img{\n    height:200px;\n    width:300px;\n    -webkit-transition: 0.2s;\n    transition: 0.2s;\n}\ndiv[screenshots] div[block] img:hover{\n    padding:20px;\n}\ndiv[block]{\n    position: relative;\n    -webkit-transition: 0.2s;\n    transition: 0.2s;\n}\n.modal-content span{\n    position: absolute;;\n    right:20px;\n    cursor: pointer;\n    font-size: 40px;\n}\n.modal-content span:hover{\n    color:var(--main-one) !important;\n}\n.modal-image{\n    width:100%;\n}\n.modal-content{\n    background:transparent;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/screenshots/screenshots.component.html":
/***/ (function(module, exports) {

module.exports = "<div screenshots>\n  <div block  data-toggle=\"modal\" *ngFor=\"let image of images;let i = index\" (click)=\"setImage(i)\" data-target=\"#image-modal\">\n    <div  style=\"width: 18rem;\">\n      <img [src]=\"image.src\" >\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"image-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n            <span aria-hidden=\"true\" data-dismiss=\"modal\">&times;</span>\n        <img class=\"modal-image\" [src]=\"images[imageId].src\">\n      </div>\n    </div>\n  </div>\n\n  "

/***/ }),

/***/ "../../../../../src/app/screenshots/screenshots.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScreenshotsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScreenshotsComponent = (function () {
    function ScreenshotsComponent() {
        this.imageId = 0;
    }
    ScreenshotsComponent.prototype.ngOnInit = function () {
        this.images = [
            { src: "https://media.istockphoto.com/photos/strategy-concept-hand-drawn-on-blackboard-picture-id477435500?k=6&m=477435500&s=612x612&w=0&h=UHBPQm5Zp_NR7WAR33JfBR5-OnglW80Z87Rj4I-4XhU=" },
            { src: "http://jasonalexis.com/wp-content/uploads/2016/10/strategy-760x498.jpg" },
            { src: "https://www.ingredientsnetwork.com/47/pdcnewsitem/04/86/26/strategy_web.jpg" },
            { src: "http://www.acetz.com/blog/wp-content/uploads/2015/02/digital-marketing-strategy.jpg" },
            { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK3X_W3d0QuTEuYbOx6uLj2PzFBTv45kA_byIvx37VpV0aInnILA" },
            { src: "https://media.istockphoto.com/photos/strategy-concept-hand-drawn-on-blackboard-picture-id477435500?k=6&m=477435500&s=612x612&w=0&h=UHBPQm5Zp_NR7WAR33JfBR5-OnglW80Z87Rj4I-4XhU=" },
            { src: "https://media.istockphoto.com/photos/strategy-concept-hand-drawn-on-blackboard-picture-id477435500?k=6&m=477435500&s=612x612&w=0&h=UHBPQm5Zp_NR7WAR33JfBR5-OnglW80Z87Rj4I-4XhU=" },
            { src: "https://media.istockphoto.com/photos/strategy-concept-hand-drawn-on-blackboard-picture-id477435500?k=6&m=477435500&s=612x612&w=0&h=UHBPQm5Zp_NR7WAR33JfBR5-OnglW80Z87Rj4I-4XhU=" },
            { src: "https://www.ingredientsnetwork.com/47/pdcnewsitem/04/86/26/strategy_web.jpg" },
            { src: "http://www.acetz.com/blog/wp-content/uploads/2015/02/digital-marketing-strategy.jpg" },
        ];
    };
    ScreenshotsComponent.prototype.setImage = function (i) {
        this.imageId = i;
    };
    return ScreenshotsComponent;
}());
ScreenshotsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-screenshots',
        template: __webpack_require__("../../../../../src/app/screenshots/screenshots.component.html"),
        styles: [__webpack_require__("../../../../../src/app/screenshots/screenshots.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ScreenshotsComponent);

//# sourceMappingURL=screenshots.component.js.map

/***/ }),

/***/ "../../../../../src/app/strategic-planning/strategic-planning.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div[image] img{\n    width:100%;\n}\n\ndiv[text]{\n    display:grid;\n}\n\ndiv[text] div[para]{\n    -ms-flex-item-align: center;\n        align-self: center;\n    justify-self: center;\n}\n\ndiv[records] div[block]{\n    text-align: center;\n    color:white;\n}\n\ndiv[records] div[block] img{\n    width: 150px;\n    display: block;\n    margin:auto;\n}\n\n.container{\n    margin-top:20px;\n}\n\n/* //carousel */\n\ndiv[overlay]{\n    background:white;\n}\n\ndiv[overlay] img{\n    /* opacity:0.6; */\n}\n\ndiv[cover]{\n    position:relative;\n}\n\n.carousel-item div[caption]{\n    color:white;\n    text-align:center;\n    position:absolute;\n    bottom:3.5vh;\n    z-index:1;\n    width:100%;\n    text-shadow: 0 2px 8px black;\n}\n\n.carousel-item div[caption] h2{\n    font-size:3vw;\n}\n\n.carousel-item div[caption] span{\n    font-size:2.5vw;\n}\n\n.quote{\n    text-align:center;\n    font-size:30px;\n}\n\n.quote div[writer]{\n    font-weight: bold;\n    font-size:25px;\n    text-align: right;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/strategic-planning/strategic-planning.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"nxtlifeCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <div cover>\n        <div caption>\n          <h3>Strategic Planning</h3>\n          <span>\"Links Today With Tomorrow\"</span>\n        </div>\n        <div overlay class=\"image-effect\">\n          <img class=\"d-block w-100\" src=\"assets/images/carousel/sp/back.png\" alt=\"First slide\">\n          <img src=\"assets/images/carousel/sp/bridge1.png\" class=\"animating bridge1\" />\n          <img src=\"assets/images/carousel/sp/bridge2.png\" class=\"animating bridge2\" />\n          <img src=\"assets/images/carousel/sp/hand.png\" class=\"animating hand\" />\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- First block -->\n  <div class=\"container bar\">\n      <app-block-heading [blockData]=\"heading[0]\"></app-block-heading>\n      \n    <div class=\"row\">\n      <div image class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n        <img class=\"animation fadeInLeft\" src=\"assets/images/carousel/sp/higher-education.png\">\n      </div>\n      <div text class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12\">\n        <div para class=\"animation fadeInRight\">\n          <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta magna quis augue ornare, ut placerat nisl porta. Vivamus\n            bibendum mollis sapien, vitae iaculis nibh aliquam ut. Proin tincidunt eros eu odio malesuada bibendum. Curabitur\n            eget pharetra eros. Sed rutrum est ex, ut gravida tellus elementum ut. Ut fringilla pellentesque massa vel fringilla.\n            Vivamus molestie malesuada mi, non interdum mi semper luctus. Ut pharetra diam quis consectetur semper.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- end of first block -->\n\n  <!-- fluid section/parallelex -->\n  <div class=\"parallelex-block\">\n    <div parallelex-background class=\"parallel-image1\">\n      <div parallelex-content>\n        <div class=\"quote\">\n                “Strategy is thinking about a choice and choosing to stick with your thinking”                \n          <div writer>\n                —Henry Mintzberg\n        </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <!-- end of fluid section -->\n\n  <!-- Second block -->\n  <div class=\"container bar\">\n      <app-block-heading [blockData]=\"heading[1]\"></app-block-heading>\n    <div class=\"row level eighty\">\n      <div text class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12\">\n        <div para class=\"animation fadeInLeft\">\n        \n          <p>\n            Phasellus malesuada sit amet orci sit amet ultricies. Vestibulum elit tellus, rhoncus ac neque at, feugiat porttitor massa.\n            Vivamus gravida eget ligula eu ullamcorper. Sed interdum sollicitudin tortor tincidunt pretium. Cras vel dapibus\n            erat. Pellentesque metus erat, suscipit non felis a, sagittis pretium quam. Proin pretium a arcu ut ultricies.\n            Sed porta mattis felis, ut varius arcu scelerisque eu. Praesent facilisis ornare elit. Sed ut ex a est mattis\n            tincidunt. In tellus justo, aliquam sit amet libero quis, pretium bibendum massa.\n          </p>\n        </div>\n      </div>\n      <div image class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n        <img class=\"animation fadeInRight\" src=\"assets/images/product.png\">\n      </div>\n    </div>\n  </div>\n  <!-- end of second block -->\n\n\n  <!-- Fluid section -->\n  <div class=\"parallelex-block\">\n    <div parallelex-background class=\"parallel-image1\">\n      <div parallelex-content>\n        <app-screenshots></app-screenshots>\n      </div>\n    </div>\n  </div>\n  <!-- end of fluid section -->\n\n  <!-- Third block -->\n  <div class=\"container bar\">\n      <app-block-heading [blockData]=\"heading[2]\"></app-block-heading>\n    <div class=\"row\">\n      <div image class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n        <img class=\"animation fadeInLeft\" src=\"assets/images/benefits.png\">\n      </div>\n      <div text class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12\">\n        <div nxtlife-list class=\"animation fadeInRight\">\n          <div li>\n            <div bullet>\n              <i class=\"fa fa-check-square-o\"></i>\n            </div>\n            <div text>\n                Phasellus malesuada sit amet orci sit amet ultricies. Vestibulum elit tellus, rhoncus ac neque at.\n            </div>\n          </div>\n          <div li>\n              <div bullet>\n                <i class=\"fa fa-check-square-o\"></i>\n              </div>\n              <div text>\n                  Phasellus malesuada sit amet orci sit amet ultricies. Vestibulum elit tellus, rhoncus ac neque at.Phasellus malesuada sit amet orci sit amet ultricies. Vestibulum elit tellus, rhoncus ac neque at.\n              </div>\n            </div>\n            <div li>\n                <div bullet>\n                  <i class=\"fa fa-check-square-o\"></i>\n                </div>\n                <div text>\n                    Phasellus malesuada sit amet orci sit amet ultricies. Vestibulum elit tellus, rhoncus ac neque at.Phasellus malesuada sit amet orci sit amet ultricies. Vestibulum elit tellus, rhoncus ac neque at.\n                </div>\n              </div>\n              <div li>\n                  <div bullet>\n                    <i class=\"fa fa-check-square-o\"></i>\n                  </div>\n                  <div text>\n                      Phasellus malesuada sit amet orci sit amet ultricies. Vestibulum elit tellus, rhoncus ac neque at.\n                  </div>\n                </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/strategic-planning/strategic-planning.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrategicPlanningComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StrategicPlanningComponent = (function () {
    function StrategicPlanningComponent() {
        this.heading = [
            {
                title: 'Strategic Planning in higher education',
                paragraph: ''
            },
            {
                title: 'Product Description',
                paragraph: ''
            },
            {
                title: 'Benefits',
                paragraph: ''
            },
        ];
    }
    StrategicPlanningComponent.prototype.ngOnInit = function () {
    };
    return StrategicPlanningComponent;
}());
StrategicPlanningComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-strategic-planning',
        template: __webpack_require__("../../../../../src/app/strategic-planning/strategic-planning.component.html"),
        styles: [__webpack_require__("../../../../../src/app/strategic-planning/strategic-planning.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StrategicPlanningComponent);

//# sourceMappingURL=strategic-planning.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map