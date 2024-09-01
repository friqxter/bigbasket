(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kunal.c.thakur\Desktop\Big basket\bb\src\main.ts */"zUnb");


/***/ }),

/***/ "1Isn":
/*!*******************************************************!*\
  !*** ./src/app/home/container/container.component.ts ***!
  \*******************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "R+oI");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "K1qF");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "vFUg");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "dWZF");





class ContainerComponent {
    constructor() {
        this.title = '';
        this.message = '';
    }
    onSearchTextEntered(search) {
    }
}
ContainerComponent.ɵfac = function ContainerComponent_Factory(t) { return new (t || ContainerComponent)(); };
ContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContainerComponent, selectors: [["app-container"]], decls: 4, vars: 0, template: function ContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".wrapper[_ngcontent-%COMP%]{\r\n    margin: 0px auto;\r\n    width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZiIsImZpbGUiOiJjb250YWluZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"] });


/***/ }),

/***/ "3wVm":
/*!******************************************!*\
  !*** ./src/app/Services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserService {
    constructor() {
        this.names = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('Login');
        this.bools = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    setName(val) {
        this.names.next(val);
    }
    getName() {
        console.log(this.names);
        return this.names.asObservable();
    }
    setBool(val) {
        this.bools.next(val);
    }
    getBool() {
        console.log(this.bools);
        return this.bools.asObservable();
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


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

/***/ "Cjp7":
/*!********************************************!*\
  !*** ./src/app/Services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchService {
    constructor() {
        this.searches = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
    }
    setSearch(val) {
        this.searches.next(val);
        console.log(this.searches);
    }
    getSearch() {
        return this.searches.asObservable();
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "K1qF":
/*!***********************************************************!*\
  !*** ./src/app/home/container/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HeaderComponent {
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 37, vars: 0, consts: [[1, "col-md-11", 2, "margin", "auto"], ["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide", 2, "margin", "auto"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "2", "aria-label", "Slide 3"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/banner-1.webp", "alt", "...", 1, "d-block", "w-100", "rounded"], [1, "carousel-item"], ["src", "assets/banner-2.webp", "alt", "...", 1, "d-block", "w-100", "rounded"], ["src", "assets/banner-3.webp", "alt", "...", 1, "d-block", "w-100", "rounded"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "row", "row1", "justify-content-center", "align-items-center"], ["routerLink", "/home/categories/fruits", 1, "btn", "bg-bskt3", "col-lg-1"], [1, "text1"], ["routerLink", "/home/categories/snacks", 1, "btn", "bg-bskt2", "col-lg-1"], ["routerLink", "/home/categories/Beverages", 1, "btn", "bg-bskt3", "col-lg-1"], ["routerLink", "/home/categories/bakery", 1, "btn", "bg-bskt3", "col-lg-1"], [1, "btn", "bg-bskt3", "bg-bskt-4", "col-lg-1"], ["routerLink", "/home/categories/oil", 1, "text1"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Fruits & Veg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Snacks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Beverages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Bakery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Household");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".header[_ngcontent-%COMP%]{\r\n    height: 280px;\r\n    padding:30px 40px;\r\n    display: flex;\r\n    background-color: #fff;\r\n}\r\n.site-slogan[_ngcontent-%COMP%]{\r\n    width: 420px;\r\n    margin-left: 50px;\r\n    text-align: center;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    font-size: 45px;\r\n}\r\n.carousel-inner[_ngcontent-%COMP%]{\r\n    height: 280px;\r\n}\r\n.carousel[_ngcontent-%COMP%] {\r\n    padding: 50px;\r\n}\r\n.bg-bskt2[_ngcontent-%COMP%]{\r\n    background-color: \r\n\r\n    #476f00;\r\n    color: white;\r\n    \r\n    padding: 0;\r\n    margin: auto;\r\n    width:13%;\r\n }\r\n.bg-bskt3[_ngcontent-%COMP%]{\r\n    background-color: \r\n\r\n    #ececec;\r\n    margin: auto;\r\n    padding: 0;\r\n    width:13%;\r\n }\r\n.row1[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    margin: auto;\r\n  }\r\n.text1[_ngcontent-%COMP%]{\r\n\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-top: 7%;\r\n    margin-bottom: 7%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0k7O1dBRU87SUFDUCxZQUFZOztJQUVaLFVBQVU7SUFDVixZQUFZO0lBQ1osU0FBUztDQUNaO0FBQ0E7SUFDRzs7V0FFTztJQUNQLFlBQVk7SUFDWixVQUFVO0lBQ1YsU0FBUztDQUNaO0FBRUM7SUFDRSxVQUFVO0lBQ1YsWUFBWTtFQUNkO0FBRUE7O0lBRUUsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25CIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICBwYWRkaW5nOjMwcHggNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5zaXRlLXNsb2dhbntcclxuICAgIHdpZHRoOiA0MjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmgye1xyXG4gICAgZm9udC1zaXplOiA0NXB4O1xyXG59XHJcbi5jYXJvdXNlbC1pbm5lcntcclxuICAgIGhlaWdodDogMjgwcHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbCB7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcbi5iZy1ic2t0MntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFxyXG5cclxuICAgICM0NzZmMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDoxMyU7XHJcbiB9XHJcbiAuYmctYnNrdDN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBcclxuXHJcbiAgICAjZWNlY2VjO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOjEzJTtcclxuIH1cclxuXHJcbiAgLnJvdzF7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLnRleHQxe1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3JTtcclxuICB9Il19 */"] });


/***/ }),

/***/ "P/aO":
/*!******************************************!*\
  !*** ./src/app/Services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "pW2F");



class CartService {
    constructor(pl) {
        this.pl = pl;
        this.cartItemList = [];
        this.productList = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
    }
    getProducts() {
        console.log(this.cartItemList);
        return this.productList.asObservable();
    }
    setProduct(product) {
        this.cartItemList.push(...product);
        this.productList.next(product);
    }
    addtoCart(product, val) {
        for (let i = 0; i < val; i++) {
            this.cartItemList.push(product);
            this.productList.next(this.cartItemList);
        }
        console.log(this.cartItemList);
    }
    removeCartItem(product) {
        this.cartItemList.map((a, index) => {
            if (product.id === a.id) {
                this.cartItemList.splice(index, 1);
            }
        });
        this.productList.next(this.cartItemList);
    }
    removeAllCart() {
        this.cartItemList = [];
        this.productList.next(this.cartItemList);
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_product_service__WEBPACK_IMPORTED_MODULE_2__["productservice"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "R+oI":
/*!*****************************************************!*\
  !*** ./src/app/home/container/nav/nav.component.ts ***!
  \*****************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/user.service */ "3wVm");
/* harmony import */ var _Services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/cart.service */ "P/aO");
/* harmony import */ var _Services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/search.service */ "Cjp7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function NavComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx_r0.nameDisplay, "");
} }
function NavComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Select location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.nameDisplay);
} }
class NavComponent {
    constructor(router, userService, cartService, searchService) {
        this.router = router;
        this.userService = userService;
        this.cartService = cartService;
        this.searchService = searchService;
        this.sitename = 'Shopping';
        this.displayNotification = false;
        this.nameDisplay = 'Login/Signup';
        this.totalItem = 0;
        this.searchText = '';
    }
    ngOnInit() {
        this.userService.getName()
            .subscribe(res => {
            this.nameDisplay = res;
        });
        this.userService.getBool()
            .subscribe(res => {
            this.displayNotification = res;
        });
        this.cartService.getProducts()
            .subscribe(res => {
            this.totalItem = res.length;
        });
    }
    onClick() {
        this.router.navigateByUrl('/login');
    }
    onClick2() {
        this.router.navigateByUrl('/cart');
    }
    onClick3() {
        this.searchService.setSearch(this.searchText);
        console.log(this.searchText);
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 44, vars: 5, consts: [[1, "container-fluid", "shadow", "px-11", "mb-5", "bg-body", "rounded"], [1, "row", "justify-content-around", "rowww", "align-items-center"], [1, "col-lg-2"], ["href", "#", 1, "navbar-brand"], ["src", "assets/logo.jpg", "alt", "", "height", "100"], [1, "col-lg-5"], [1, "d-flex"], ["type", "search", "placeholder", "Search for products", "aria-label", "Search", 1, "form-control", "me-2", 2, "width", "100%", "margin-left", "5%", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-outline-success", 3, "click"], ["class", "col-lg-2", 4, "ngIf"], [1, "col-lg-3"], [1, "text-center"], ["data-mdb-button-init", "", "data-mdb-ripple-init", "", "class", "btn bg-bskt", "style", "color: white;font-size: 20px;padding-top: 0.5rem; padding-bottom: 0.5rem; margin-left: 6%;", 3, "click", 4, "ngIf"], [1, "btn", "btst", 2, "background-color", "#FF7F7F", 3, "click"], [1, "fa-solid", "fa-basket-shopping", 2, "font-size", "20px", "color", "white", "padding-top", "0.5rem", "padding-bottom", "0.5rem"], [1, "badge", "bg-danger", 2, "font-size", "8px"], [1, "row", "jusify-content-center", "align-items-center"], [1, "col"], [1, "navbar", "rowww", "navbar-expand-lg", "navbar-light"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", 2, "width", "98%", "margin", "auto"], [1, "btn", "bg-bskt2", "col-lg-1"], [1, "text1"], ["routerLink", "/home", "aria-current", "page", 1, "nav-link", "active", "pad"], [1, "nav-link", "pad"], [1, "btn", "bg-bskt3", "col-lg-1"], [1, "text-center", 2, "color", "#A0CD4A", "margin", "0"], [1, "btn", "bg-bskt3", 2, "width", "80%", "margin-left", "30%"], [1, "text1", 2, "font-size", "15px"], [1, "fa-solid", "fa-compass"], ["data-mdb-button-init", "", "data-mdb-ripple-init", "", 1, "btn", "bg-bskt", 2, "color", "white", "font-size", "20px", "padding-top", "0.5rem", "padding-bottom", "0.5rem", "margin-left", "6%", 3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavComponent_Template_input_ngModelChange_8_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_button_click_9_listener() { return ctx.onClick3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavComponent_div_11_Template, 3, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavComponent_div_12_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, NavComponent_button_15_Template, 2, 1, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_button_click_16_listener() { return ctx.onClick2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nav", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Combos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Offers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayNotification);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.displayNotification);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.displayNotification);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalItem);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".navbar[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    \r\n}\r\n.site-name[_ngcontent-%COMP%]{\r\n    padding: 0px 30px;\r\n    color:#E74C3C;\r\n}\r\n.site-menu[_ngcontent-%COMP%]{\r\n    padding: 0px 30px;\r\n    margin-left: 100px;\r\n}\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color:#212F3D;\r\n    margin: 0px 10px;\r\n}\r\n.rowww[_ngcontent-%COMP%]{\r\n    padding-left:50px;\r\n    padding-right: 50px;\r\n    width: 100%;\r\n    margin: auto;\r\n }\r\n.bg-bskt[_ngcontent-%COMP%]{\r\n    background-color: black;\r\n }\r\n.btst[_ngcontent-%COMP%] {\r\n    margin-left: 40px;\r\n }\r\n.pad[_ngcontent-%COMP%]{\r\n    margin-left: 40px;\r\n    margin-right: 40px;\r\n }\r\n.bg-bskt2[_ngcontent-%COMP%]{\r\n    background-color: \r\n\r\n    #476f00;\r\n }\r\n.bg-bskt2[_ngcontent-%COMP%]{\r\n   background-color: \r\n\r\n   #476f00;\r\n   color: white;\r\n   \r\n   padding: 0;\r\n   margin: auto;\r\n   width:13%;\r\n}\r\n.bg-bskt3[_ngcontent-%COMP%]{\r\n   background-color: \r\n\r\n   #ececec;\r\n   margin: auto;\r\n   padding: 0;\r\n   width:13%;\r\n}\r\n.text1[_ngcontent-%COMP%]{\r\n\r\n   text-align: center;\r\n   \r\n   margin-top: 7%;\r\n   margin-bottom: 7%;\r\n }\r\nhr[_ngcontent-%COMP%]{\r\n   border-color: #476f00;border-width: 3px; border-style: solid; width: 100%; opacity: 100; margin-top: 0; margin-bottom: 0;\r\n }\r\n.fa-solid[_ngcontent-%COMP%]{\r\n   margin-right: 10px;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTs7QUFFakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNDO0lBQ0csaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtDQUNmO0FBRUE7SUFDRyx1QkFBdUI7Q0FDMUI7QUFFQTtJQUNHLGlCQUFpQjtDQUNwQjtBQUVBO0lBQ0csaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNyQjtBQUVBO0lBQ0c7O1dBRU87Q0FDVjtBQUNBO0dBQ0U7O1VBRU87R0FDUCxZQUFZOztHQUVaLFVBQVU7R0FDVixZQUFZO0dBQ1osU0FBUztBQUNaO0FBQ0E7R0FDRzs7VUFFTztHQUNQLFlBQVk7R0FDWixVQUFVO0dBQ1YsU0FBUztBQUNaO0FBQ0E7O0dBRUcsa0JBQWtCOztHQUVsQixjQUFjO0dBQ2QsaUJBQWlCO0NBQ25CO0FBQ0E7R0FDRSxxQkFBcUIsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0I7Q0FDMUg7QUFDQTtHQUNFLGtCQUFrQjtDQUNwQiIsImZpbGUiOiJuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgXHJcbn1cclxuLnNpdGUtbmFtZXtcclxuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgY29sb3I6I0U3NEMzQztcclxufVxyXG4uc2l0ZS1tZW51e1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiMyMTJGM0Q7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4O1xyXG59XHJcbiAucm93d3d7XHJcbiAgICBwYWRkaW5nLWxlZnQ6NTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuIH1cclxuXHJcbiAuYmctYnNrdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gfVxyXG5cclxuIC5idHN0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gfVxyXG5cclxuIC5wYWR7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuIH1cclxuIFxyXG4gLmJnLWJza3Qye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXHJcblxyXG4gICAgIzQ3NmYwMDtcclxuIH1cclxuIC5iZy1ic2t0MntcclxuICAgYmFja2dyb3VuZC1jb2xvcjogXHJcblxyXG4gICAjNDc2ZjAwO1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIFxyXG4gICBwYWRkaW5nOiAwO1xyXG4gICBtYXJnaW46IGF1dG87XHJcbiAgIHdpZHRoOjEzJTtcclxufVxyXG4uYmctYnNrdDN7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IFxyXG5cclxuICAgI2VjZWNlYztcclxuICAgbWFyZ2luOiBhdXRvO1xyXG4gICBwYWRkaW5nOiAwO1xyXG4gICB3aWR0aDoxMyU7XHJcbn1cclxuLnRleHQxe1xyXG5cclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBcclxuICAgbWFyZ2luLXRvcDogNyU7XHJcbiAgIG1hcmdpbi1ib3R0b206IDclO1xyXG4gfVxyXG4gaHJ7XHJcbiAgIGJvcmRlci1jb2xvcjogIzQ3NmYwMDtib3JkZXItd2lkdGg6IDNweDsgYm9yZGVyLXN0eWxlOiBzb2xpZDsgd2lkdGg6IDEwMCU7IG9wYWNpdHk6IDEwMDsgbWFyZ2luLXRvcDogMDsgbWFyZ2luLWJvdHRvbTogMDtcclxuIH1cclxuIC5mYS1zb2xpZHtcclxuICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gfSJdfQ== */"] });


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
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services/product.service */ "pW2F");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/user.service */ "3wVm");
/* harmony import */ var _Services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/cart.service */ "P/aO");
/* harmony import */ var _Services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/search.service */ "Cjp7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor() {
        this.title = 'bb';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_Services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _Services_product_service__WEBPACK_IMPORTED_MODULE_0__["productservice"], _Services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _Services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "UvY/":
/*!*********************************************************!*\
  !*** ./src/app/home/categories/categories.component.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/product.service */ "pW2F");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/search.service */ "Cjp7");
/* harmony import */ var _container_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../container/nav/nav.component */ "R+oI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _container_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../container/footer/footer.component */ "dWZF");








function CategoriesComponent_ul_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fruits_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fruits_r3.name, " ");
} }
function CategoriesComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r4.name, "");
} }
function CategoriesComponent_div_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "1 Kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "ADD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ((p_r5.productPrice + 10 - p_r5.productPrice) / p_r5.productPrice * 100).toFixed(0), "% off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r5.productImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", p_r5.productPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/home/", p_r5.productId, "");
} }
class CategoriesComponent {
    constructor(product, activatedroute, searchService) {
        this.product = product;
        this.activatedroute = activatedroute;
        this.searchService = searchService;
        this.categoryNames = [{ name: 'organic' }, { name: 'fresh' }, { name: 'sales' }, { name: 'expired' }, { name: 'discount' }];
        this.fruitNames = [{ name: 'Apples' }, { name: 'Oranges' }, { name: 'Strawberry' }, { name: 'Banana' }, { name: 'Pumpkin' }];
        this.searchTexts = '';
    }
    ngOnInit() {
        this.categoryname = this.activatedroute.snapshot.paramMap.get('category');
        this.products = this.product.products.filter(x => x.categoryName.toLowerCase().includes(this.categoryname.toLowerCase()));
        this.searchService.getSearch().subscribe(res => {
            this.searchTexts = res;
            this.products = this.products.filter(x => x.productName.toLowerCase().includes(this.searchTexts.toLowerCase()));
        });
    }
}
CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["productservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"])); };
CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], decls: 119, vars: 3, consts: [[1, "col-md-10", 2, "margin", "auto"], ["id", "carouselExampleIndicators", "data-bs-ride", "carousel", 1, "carousel", "slide", 2, "margin", "auto"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide-to", "2", "aria-label", "Slide 3"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/banner-4.webp", "alt", "...", 1, "d-block", "w-100", "rounded"], [1, "carousel-item"], ["src", "assets/banner-5.webp", "alt", "...", 1, "d-block", "w-100", "rounded"], ["src", "assets/banner-6.webp", "alt", "...", 1, "d-block", "w-100", "rounded"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleIndicators", "data-bs-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "container-fluid", "fruite", "py-5"], [1, "container", "py-5"], [1, "row", "g-4", "justify-content-center"], [1, "col-lg-12"], [1, "row", "g-4"], [1, "col-xl-3"], [1, "input-group", "w-100", "mx-auto", "d-flex"], [1, "btn", "bg-bskt3", "bg-light", 2, "width", "80%"], [1, "text1", 2, "font-size", "18px"], [1, "fa-solid", "fa-eye-slash", 2, "margin-right", "10px"], [1, "col-5"], [1, "col-xl-3", 2, "margin-left", "6%"], [1, "bg-light", "ps-3", "py-3", "rounded", "d-flex", "justify-content-between", "mb-4"], ["for", "fruits"], ["id", "fruits", "name", "fruitlist", "form", "fruitform", 1, "border-0", "form-select-sm", "bg-light", "me-3"], ["value", "volvo"], ["value", "saab"], ["value", "opel"], ["value", "audi"], [1, "row", "g-4", "justify-content-between"], [1, "col-lg-2"], [1, "row", "g-4", 2, "margin-top", "5%"], [1, "mb-3"], ["class", "list-unstyled fruite-categorie", 4, "ngFor", "ngForOf"], [1, "mb-2"], ["type", "range", "id", "rangeInput", "name", "rangeInput", "min", "0", "max", "500", "value", "0", "oninput", "amount.value=rangeInput.value", 1, "form-range", "w-100"], ["id", "amount", "name", "amount", "min-velue", "0", "max-value", "500", "for", "rangeInput"], ["class", "mb-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "justify-content-start"], ["type", "checkbox", "id", "Categories-1", "name", "Categories-1", "value", "Beverages", 1, "me-2"], [1, "d-flex", "mb-2"], [1, "fa", "fa-star"], [1, "fa", "fa-star", "text-secondary"], [1, "col-lg-9"], [1, "row", "container2", "justify-content-start"], ["class", "col-lg-3", 4, "ngFor", "ngForOf"], [1, "list-unstyled", "fruite-categorie"], [1, "d-flex", "justify-content-between", "fruite-name"], ["for", "Categories-1"], [1, "col-lg-3"], [1, "product-card", "shadow"], [1, "product-image-container"], [1, "product-badge"], [1, "badge-text"], ["alt", "Green Capsicum", 1, "product-image", 3, "src"], [1, "product-brand"], [1, "product-name"], [1, "product-weight"], [1, "weight-text"], [1, "product-price"], [1, "add-to-cart-container"], [1, "fa-regular", "fa-bookmark", "cart-icon"], [1, "add-button", 3, "routerLink"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Hide filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Default Sorting:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Nothing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Popularity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Organic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Fantastic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, CategoriesComponent_ul_54_Template, 4, 1, "ul", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "output", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Additional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, CategoriesComponent_div_66_Template, 4, 1, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Product rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, CategoriesComponent_div_117_Template, 20, 6, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fruitNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_container_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _container_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".card-top[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background: #fff;\r\n    \r\n    \r\n    border-radius: .25rem;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 64px;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n    margin: 0px 15px;\r\n    text-align: center;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: blue;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    margin: 30px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n    height: 200px;\r\n    margin: auto;\r\n    transition: 0.3s ease-in-out;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    transition: 0.3s ease-in-out;\r\n    transform: scale(1.1);\r\n}\r\n\r\n.bg-bskt[_ngcontent-%COMP%]{\r\n    background-color: #A0CD4A;\r\n }\r\n\r\n.container2[_ngcontent-%COMP%]{\r\n    background-color: \r\n    #f7f7f7;\r\n }\r\n\r\n.fruite[_ngcontent-%COMP%]   .tab-class[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background: var(--bs-secondary) !important;\r\n}\r\n\r\n.fruite[_ngcontent-%COMP%]   .tab-class[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    color: var(--bs-white) !important; \r\n}\r\n\r\n.fruite[_ngcontent-%COMP%]   .fruite-categorie[_ngcontent-%COMP%]   .fruite-name[_ngcontent-%COMP%] {\r\n    line-height: 40px;\r\n}\r\n\r\n.fruite[_ngcontent-%COMP%]   .fruite-categorie[_ngcontent-%COMP%]   .fruite-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    transition: 0.5s;\r\n}\r\n\r\n.fruite[_ngcontent-%COMP%]   .fruite-categorie[_ngcontent-%COMP%]   .fruite-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: var(--bs-secondary);\r\n}\r\n\r\n.fruite[_ngcontent-%COMP%]   .fruite-item[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    transition: 0.5s;\r\n}\r\n\r\n.fruite[_ngcontent-%COMP%]   .fruite-item[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 55px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.fruite[_ngcontent-%COMP%]   .fruite-item[_ngcontent-%COMP%]   .fruite-img[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    transition: 0.5s;\r\n    border-radius: 10px 10px 0 0;\r\n}\r\n\r\n.fruite[_ngcontent-%COMP%]   .fruite-item[_ngcontent-%COMP%]   .fruite-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    transition: 0.5s;\r\n}\r\n\r\n.fruite[_ngcontent-%COMP%]   .fruite-item[_ngcontent-%COMP%]   .fruite-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.3);\r\n}\r\n\r\n.card-top[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background: #fff;\r\n    \r\n    \r\n    border-radius: .25rem;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 64px;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n    margin: 0px 15px;\r\n    text-align: center;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: blue;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    margin: 30px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n    height: 200px;\r\n    margin: auto;\r\n    transition: 0.3s ease-in-out;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    transition: 0.3s ease-in-out;\r\n    transform: scale(1.1);\r\n}\r\n\r\n.bg-bskt[_ngcontent-%COMP%]{\r\n    background-color: #A0CD4A;\r\n }\r\n\r\n.bg-white[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n }\r\n\r\n.container2[_ngcontent-%COMP%]{\r\n    background-color: \r\n    #ececec;\r\n    width: 83.6%;\r\n    position: relative;\r\n    margin: auto;\r\n    margin-top: 40px;\r\n   \r\n }\r\n\r\n.bg-bg[_ngcontent-%COMP%]{\r\n    background-color: \r\n    #ececec;\r\n }\r\n\r\n.smart-basket-container[_ngcontent-%COMP%] {\r\n    background-color: #d9d9d9;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    padding: 22px 50px;\r\n    border: 1px solid #d9d9d9;\r\n  }\r\n\r\n.smart-basket-title[_ngcontent-%COMP%] {\r\n    color: #000;\r\n    font: 400 30px Inter, sans-serif;\r\n    margin-left: 4px;\r\n    margin-top: 20px;\r\n  }\r\n\r\n.product-card[_ngcontent-%COMP%] {\r\n    border-radius: 13px;\r\n    background-color: #fff;\r\n    display: flex;\r\n    margin-top: 44px;\r\n    width: 223px;\r\n    max-width: 100%;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    padding: 28px 14px 18px;\r\n    margin: auto;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    \r\n  }\r\n\r\n.product-image-container[_ngcontent-%COMP%] {\r\n    border-radius: 7px;\r\n    align-self: stretch;\r\n    display: flex;\r\n    width: 100%;\r\n    flex-direction: column;\r\n    color: var(--sds-color-text-brand-on-brand);\r\n    white-space: nowrap;\r\n    padding: 0 21px 21px 0;\r\n    border: 1px solid #d9d9d9;\r\n  }\r\n\r\n.product-badge[_ngcontent-%COMP%] {\r\n    border-radius: 9px 0 8px 0;\r\n    background-color: #476f00;\r\n    align-self: flex-start;\r\n    z-index: 10;\r\n    display: flex;\r\n    margin-top: -8px;\r\n    min-height: 33px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 9px 12px;\r\n\r\n  }\r\n\r\n.badge-text[_ngcontent-%COMP%] {\r\n    \r\n    align-self: stretch;\r\n    margin: auto 0;\r\n    color: white;\r\n  }\r\n\r\n.product-image[_ngcontent-%COMP%] {\r\n    aspect-ratio: 1.61;\r\n    object-fit: contain;\r\n    object-position: center;\r\n    width: 153px;\r\n    align-self: flex-end;\r\n    margin-top: -9px;\r\n    max-width: 100%;\r\n  }\r\n\r\n.product-brand[_ngcontent-%COMP%] {\r\n    color: #b3aeae;\r\n    line-height: 16px;\r\n    opacity: var(--sds-size-stroke-border);\r\n    margin-top: 28px;\r\n    font-size: 10px;\r\n  }\r\n\r\n.product-name[_ngcontent-%COMP%] {\r\n    color: #000;\r\n    opacity: var(--sds-size-stroke-border);\r\n    margin-top: 0px;\r\n    font-size: 10px;\r\n  }\r\n\r\n.product-weight[_ngcontent-%COMP%] {\r\n    border-radius: 7px;\r\n    align-self: stretch;\r\n    display: flex;\r\n    margin-top: 18px;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    color: #b3aeae;\r\n    justify-content: center;\r\n    padding: 6px 12px;\r\n    border: 1px solid #d9d9d9;\r\n  }\r\n\r\n.weight-text[_ngcontent-%COMP%] {\r\n    opacity: var(--sds-size-stroke-border);\r\n  }\r\n\r\n.product-price[_ngcontent-%COMP%] {\r\n    color: #000;\r\n    opacity: var(--sds-size-stroke-border);\r\n    margin-top: 13px;\r\n  }\r\n\r\n.add-to-cart-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-top: 65px;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    gap: 20px;\r\n\r\n    white-space: nowrap;\r\n    justify-content: space-between;\r\n  }\r\n\r\n.cart-icon[_ngcontent-%COMP%] {\r\n    aspect-ratio: 1.05;\r\n    object-fit: contain;\r\n    object-position: center;\r\n    width: 39px;\r\n    border-radius: 2px;\r\n    border-radius: 7px;\r\n    align-self: stretch;\r\n    display: flex;\r\n    \r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    color: black;\r\n    justify-content: center;\r\n    padding: 6px 12px;\r\n    border: 1px solid #d9d9d9;\r\n  }\r\n\r\n.drop[_ngcontent-%COMP%]{\r\n   position: relative;\r\n   left: 270%;\r\n  }\r\n\r\n.add-button[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    border-color: red;\r\n    color: red;\r\n    width: 80%;\r\n    border-radius: 8px 8px 8px 8px;\r\n\r\n  }\r\n\r\n@media (max-width: 991px) {\r\n    .smart-basket-container[_ngcontent-%COMP%] {\r\n      padding: 0 20px;\r\n    }\r\n  \r\n    .product-card[_ngcontent-%COMP%] {\r\n      margin-top: 40px;\r\n    }\r\n  \r\n    .product-image-container[_ngcontent-%COMP%] {\r\n      padding-right: 20px;\r\n      white-space: initial;\r\n    }\r\n  \r\n    .product-badge[_ngcontent-%COMP%] {\r\n      white-space: initial;\r\n    }\r\n  \r\n    .product-weight[_ngcontent-%COMP%] {\r\n      padding-right: 20px;\r\n    }\r\n  \r\n    .add-to-cart-container[_ngcontent-%COMP%] {\r\n      margin-top: 40px;\r\n      white-space: initial;\r\n    }\r\n  }\r\n\r\n.bg-bskt3[_ngcontent-%COMP%]{\r\n    background-color: \r\n \r\n    #ececec;\r\n    margin-left: 0;\r\n    padding: 0;\r\n    width:20%;\r\n }\r\n\r\n.text1[_ngcontent-%COMP%]{\r\n\r\n    text-align: center;\r\n   \r\n    margin-top: 7%;\r\n    margin-bottom: 7%;\r\n  }\r\n\r\n.fa-star[_ngcontent-%COMP%]{\r\n    color: #476f00;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZ0JBQWdCOzs7SUFHaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFQTtJQUNHO1dBQ087Q0FDVjs7QUFFQTtJQUNHLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZ0JBQWdCOzs7SUFHaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FB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Q2hCLG9CQUFvQjtJQUN0QjtFQUNGOztBQUNBO0lBQ0U7O1dBRU87SUFDUCxjQUFjO0lBQ2QsVUFBVTtJQUNWLFNBQVM7Q0FDWjs7QUFDQTs7SUFFRyxrQkFBa0I7O0lBRWxCLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0FBRUY7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6ImNhdGVnb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXRvcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBcclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG59XHJcblxyXG4uaXRlbSBpbWcge1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIG1hcmdpbjogMHB4IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbi5jYXJkIGltZyB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNhcmQgaW1nOmhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuLmJnLWJza3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTBDRDRBO1xyXG4gfVxyXG4gXHJcbiAuY29udGFpbmVyMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFxyXG4gICAgI2Y3ZjdmNztcclxuIH1cclxuXHJcbiAuZnJ1aXRlIC50YWItY2xhc3MgLm5hdi1pdGVtIGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJzLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZydWl0ZSAudGFiLWNsYXNzIC5uYXYtaXRlbSBhLmFjdGl2ZSBzcGFuIHtcclxuICAgIGNvbG9yOiB2YXIoLS1icy13aGl0ZSkgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi5mcnVpdGUgLmZydWl0ZS1jYXRlZ29yaWUgLmZydWl0ZS1uYW1lIHtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uZnJ1aXRlIC5mcnVpdGUtY2F0ZWdvcmllIC5mcnVpdGUtbmFtZSBhIHtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5mcnVpdGUgLmZydWl0ZS1jYXRlZ29yaWUgLmZydWl0ZS1uYW1lIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWJzLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5mcnVpdGUgLmZydWl0ZS1pdGVtIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLmZydWl0ZSAuZnJ1aXRlLWl0ZW06aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDU1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4uZnJ1aXRlIC5mcnVpdGUtaXRlbSAuZnJ1aXRlLWltZyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbn1cclxuXHJcbi5mcnVpdGUgLmZydWl0ZS1pdGVtIC5mcnVpdGUtaW1nIGltZyB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uZnJ1aXRlIC5mcnVpdGUtaXRlbSAuZnJ1aXRlLWltZyBpbWc6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG59XHJcbi5jYXJkLXRvcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBcclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG59XHJcblxyXG4uaXRlbSBpbWcge1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIG1hcmdpbjogMHB4IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbi5jYXJkIGltZyB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNhcmQgaW1nOmhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuLmJnLWJza3R7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTBDRDRBO1xyXG4gfVxyXG4gLmJnLXdoaXRle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiB9XHJcbiAuY29udGFpbmVyMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFxyXG4gICAgI2VjZWNlYztcclxuICAgIHdpZHRoOiA4My42JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgIFxyXG4gfVxyXG4gLmJnLWJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXHJcbiAgICAjZWNlY2VjO1xyXG4gfVxyXG5cclxuXHJcblxyXG4gLnNtYXJ0LWJhc2tldC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAyMnB4IDUwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xyXG4gIH1cclxuICBcclxuICAuc21hcnQtYmFza2V0LXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udDogNDAwIDMwcHggSW50ZXIsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiA0NHB4O1xyXG4gICAgd2lkdGg6IDIyM3B4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgcGFkZGluZzogMjhweCAxNHB4IDE4cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1pbWFnZS1jb250YWluZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBjb2xvcjogdmFyKC0tc2RzLWNvbG9yLXRleHQtYnJhbmQtb24tYnJhbmQpO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHBhZGRpbmc6IDAgMjFweCAyMXB4IDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1iYWRnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHggMCA4cHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzZmMDA7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgIG1pbi1oZWlnaHQ6IDMzcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA5cHggMTJweDtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIC5iYWRnZS10ZXh0IHtcclxuICAgIFxyXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIG1hcmdpbjogYXV0byAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1pbWFnZSB7XHJcbiAgICBhc3BlY3QtcmF0aW86IDEuNjE7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTUzcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi10b3A6IC05cHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LWJyYW5kIHtcclxuICAgIGNvbG9yOiAjYjNhZWFlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBvcGFjaXR5OiB2YXIoLS1zZHMtc2l6ZS1zdHJva2UtYm9yZGVyKTtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LW5hbWUge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBvcGFjaXR5OiB2YXIoLS1zZHMtc2l6ZS1zdHJva2UtYm9yZGVyKTtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3Qtd2VpZ2h0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGNvbG9yOiAjYjNhZWFlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWlnaHQtdGV4dCB7XHJcbiAgICBvcGFjaXR5OiB2YXIoLS1zZHMtc2l6ZS1zdHJva2UtYm9yZGVyKTtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtcHJpY2Uge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBvcGFjaXR5OiB2YXIoLS1zZHMtc2l6ZS1zdHJva2UtYm9yZGVyKTtcclxuICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZGQtdG8tY2FydC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDY1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGdhcDogMjBweDtcclxuXHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICBcclxuICAuY2FydC1pY29uIHtcclxuICAgIGFzcGVjdC1yYXRpbzogMS4wNTtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xyXG4gIH1cclxuXHJcbiAgLmRyb3B7XHJcbiAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgbGVmdDogMjcwJTtcclxuICB9XHJcbiAgXHJcbiAgLmFkZC1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweCA4cHggOHB4IDhweDtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLnNtYXJ0LWJhc2tldC1jb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucHJvZHVjdC1jYXJkIHtcclxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5wcm9kdWN0LWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnByb2R1Y3QtYmFkZ2Uge1xyXG4gICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcclxuICAgIH1cclxuICBcclxuICAgIC5wcm9kdWN0LXdlaWdodCB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYWRkLXRvLWNhcnQtY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5iZy1ic2t0M3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFxyXG4gXHJcbiAgICAjZWNlY2VjO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6MjAlO1xyXG4gfVxyXG4gLnRleHQxe1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgXHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDclO1xyXG4gIH1cclxuXHJcbi5mYS1zdGFye1xyXG4gICAgY29sb3I6ICM0NzZmMDA7XHJcbn1cclxuIFxyXG4gIl19 */"] });


/***/ }),

/***/ "WLUK":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _indpro_indpro_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indpro/indpro.component */ "tiIO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.module */ "ct+p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ProductsModule {
}
ProductsModule.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HOMEModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_indpro_indpro_component__WEBPACK_IMPORTED_MODULE_1__["IndproComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HOMEModule"]], exports: [_indpro_indpro_component__WEBPACK_IMPORTED_MODULE_1__["IndproComponent"]] }); })();


/***/ }),

/***/ "X4IP":
/*!*********************************************!*\
  !*** ./src/app/cart/cart/cart.component.ts ***!
  \*********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/cart.service */ "P/aO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_container_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home/container/nav/nav.component */ "R+oI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CartComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_tr_18_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.removeItem(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.productImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.productDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.productPrice);
} }
class CartComponent {
    constructor(cartService, router) {
        this.cartService = cartService;
        this.router = router;
        this.products = [];
    }
    ngOnInit() {
        this.cartService.getProducts()
            .subscribe(res => {
            console.log(res);
            this.products = res;
        });
    }
    removeItem(item) {
        this.cartService.removeCartItem(item);
    }
    emptycart() {
        this.cartService.removeAllCart();
    }
    navigate() {
        this.router.navigateByUrl('/home');
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 27, vars: 1, consts: [[1, "container"], [1, "card-table"], [1, "cart-product"], [1, "table", "table-responsive"], [4, "ngFor", "ngForOf"], ["colspan", "4"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-primary", 3, "click"], ["alt", "", 2, "width", "120px", 3, "src"], [2, "width", "25%"], [2, "width", "12%"], [1, "fas", "fa-trash-alt"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sr.No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Product Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CartComponent_tr_18_Template, 14, 5, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_22_listener() { return ctx.emptycart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Empty Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_25_listener() { return ctx.navigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Shop More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_home_container_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".card[_ngcontent-%COMP%] {\r\n    height: 60vh;\r\n    margin: 25px;\r\n    padding: 25px;\r\n}\r\n\r\n.center[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: inherit;\r\n    border: none;\r\n    outline: none;\r\n    height: 162px;\r\n    width: 250px;\r\n    margin: 20px 0px;\r\n}\r\n\r\nh4[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    text-align: center;\r\n}\r\n\r\n.card-table[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: none;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: .25rem;\r\n}\r\n\r\n.center[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    font-size: 14px !important;\r\n    margin-top: 20px !important;\r\n    font-weight: 400;\r\n    padding: 12px 72px;\r\n    border-radius: 3px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG9DQUFvQztJQUNwQyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6ImNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbi5jZW50ZXIgaW1nIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGhlaWdodDogMTYycHg7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4O1xyXG59XHJcblxyXG5oNCxcclxuaDYge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC10YWJsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi13aWR0aDogbm9uZTtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbn1cclxuXHJcbi5jZW50ZXIgLmJ0biB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDcycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcclxufSJdfQ== */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.module */ "ct+p");
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/products.module */ "WLUK");
/* harmony import */ var _cart_cart_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart/cart.module */ "v35Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HOMEModule"], _products_products_module__WEBPACK_IMPORTED_MODULE_6__["ProductsModule"], _cart_cart_module__WEBPACK_IMPORTED_MODULE_7__["CartModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HOMEModule"], _products_products_module__WEBPACK_IMPORTED_MODULE_6__["ProductsModule"], _cart_cart_module__WEBPACK_IMPORTED_MODULE_7__["CartModule"]] }); })();


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HOMEModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOMEModule", function() { return HOMEModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _container_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/nav/nav.component */ "R+oI");
/* harmony import */ var _container_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/header/header.component */ "K1qF");
/* harmony import */ var _container_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/products/products.component */ "vFUg");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _container_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./container/footer/footer.component */ "dWZF");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./container/container.component */ "1Isn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./categories/categories.component */ "UvY/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class HOMEModule {
}
HOMEModule.ɵfac = function HOMEModule_Factory(t) { return new (t || HOMEModule)(); };
HOMEModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: HOMEModule });
HOMEModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](HOMEModule, { declarations: [_container_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _container_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _container_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _container_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _container_container_component__WEBPACK_IMPORTED_MODULE_7__["ContainerComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_9__["CategoriesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]], exports: [_container_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _container_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _container_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _container_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _container_container_component__WEBPACK_IMPORTED_MODULE_7__["ContainerComponent"], _categories_categories_component__WEBPACK_IMPORTED_MODULE_9__["CategoriesComponent"]] }); })();


/***/ }),

/***/ "dWZF":
/*!***********************************************************!*\
  !*** ./src/app/home/container/footer/footer.component.ts ***!
  \***********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function FooterComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const footer_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](footer_r1.name);
} }
class FooterComponent {
    constructor() {
        this.footerData = [{ name: 'About Us' }, { name: 'Become A bigbasket Rider' }, { name: 'In News' }, { name: 'Green bigbasket' }, { name: 'Privacy Policy' }, { name: 'Affiliate' }, { name: 'Terms & Conditions' }, { name: 'Careers at bigbasket' }];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 44, vars: 1, consts: [[1, "footer"], [1, "container"], [1, "row"], [1, "offset-md-1", "col-md-2"], [4, "ngFor", "ngForOf"], ["href", "#"], ["src", "assets/bigbasket-logo.jpg", "alt", "", 1, "footImg3"], [1, "d-flex"], ["src", "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg", "alt", "", 1, "footImg"], ["src", "assets/download-on-the-app-store-apple-logo-svgrepo-com.svg", "alt", "", 1, "footImg2"], [1, "fa-brands", "fa-square-facebook"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-twitter"], [1, "fa-brands", "fa-pinterest"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Big Basket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FooterComponent_ul_6_Template, 4, 1, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "bb Wallet FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "bb Wallet T&Cs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Vendor Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.footerData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".footer[_ngcontent-%COMP%] {\r\n    background-color: #101010;\r\n    color: #fff;\r\n    padding: 30px 0px;\r\n    margin-bottom: -30px;\r\n    max-height: 100%;\r\n  }\r\n  \r\n  .footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    padding: 0;\r\n  }\r\n  \r\n  .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-size: 13px;\r\n  }\r\n  \r\n  .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: underline;\r\n  }\r\n  \r\n  .footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    font-size: 28px;\r\n    margin-right: 40px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .footImg[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    width: 102px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .footImg2[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    width: 100px;\r\n    margin-top: 5px;\r\n    margin-left: 20px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .footImg3[_ngcontent-%COMP%] {\r\n    height: 80px;\r\n    width: 80px;\r\n    cursor: pointer;\r\n    margin-top: 0;\r\n    background: #fff;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDEwMTA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXIgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXIgdWwgbGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvb3RlciB1bCBsaSBhIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyIHVsIGxpIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXIgdWwgbGkgYSBpIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuZm9vdEltZyB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMTAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290SW1nMiB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290SW1nMyB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ "pW2F":
/*!*********************************************!*\
  !*** ./src/app/Services/product.service.ts ***!
  \*********************************************/
/*! exports provided: productservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productservice", function() { return productservice; });
class productservice {
    constructor() {
        this.products = [
            {
                "productId": 2273,
                "productSku": "abc45",
                "productName": "pttaghobhi",
                "productPrice": 75,
                "productShortName": "xyzaaa",
                "productDescription": "thành Function UpdateProduct Amazon can't worrking ProductDescription",
                "createdDate": "2024-07-08T12:24:12.767",
                "deliveryTimeSpan": "1-3 days",
                "categoryId": 55,
                "productImageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlSmMQmoGhFnckZYMqmw7jMfr6xdBRVHpsd-PrU0D1UFa3_NB0",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 1007,
                "productSku": "jkkjj",
                "productName": "Watermelon123456",
                "productPrice": 50,
                "productShortName": "watermelon1",
                "productDescription": "tarbuj",
                "createdDate": "2024-04-24T18:52:03.133",
                "deliveryTimeSpan": "1-3 day",
                "categoryId": 55,
                "productImageUrl": "data:image/jpeg;base64,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",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 780,
                "productSku": "Wa-223",
                "productName": "Famous Dahi Bara",
                "productPrice": 40,
                "productShortName": "Water-Lemnon2",
                "productDescription": "dfdsfsd",
                "createdDate": "2024-04-01T17:15:55.533",
                "deliveryTimeSpan": "1-2 day",
                "categoryId": 75,
                "productImageUrl": "https://www.cooking4allseasons.com/wp-content/uploads/2020/09/Dahi-Bara-Ghuguni-Alu-Dum.jpg",
                "categoryName": "Snacks"
            },
            {
                "productId": 779,
                "productSku": "Wa-22",
                "productName": "Fish Curry bengal",
                "productPrice": 100,
                "productShortName": "Water-Lemnon",
                "productDescription": "dfdsfsd",
                "createdDate": "2024-04-01T17:15:08.597",
                "deliveryTimeSpan": "1-2 daya",
                "categoryId": 59,
                "productImageUrl": "https://vaya.in/recipes/wp-content/uploads/2018/04/Kerala-Fish-Curry.jpg",
                "categoryName": "Snacks & Branded Foods"
            },
            {
                "productId": 1121,
                "productSku": "kvuj",
                "productName": "onion",
                "productPrice": 90,
                "productShortName": "vj",
                "productDescription": "devfdvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv",
                "createdDate": "2024-05-21T15:45:53.207",
                "deliveryTimeSpan": "1-2",
                "categoryId": 55,
                "productImageUrl": "data:image/jpeg;base64,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",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 2274,
                "productSku": "abc1254",
                "productName": "mvhj",
                "productPrice": 12,
                "productShortName": "vhjv",
                "productDescription": "agvfugfy",
                "createdDate": "2024-07-08T14:19:26.197",
                "deliveryTimeSpan": "3-4 days",
                "categoryId": 55,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/m/40077518_1-fresho-cucumber.jpg?tr=w-1920,q=80",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 2286,
                "productSku": "fesf",
                "productName": "chili",
                "productPrice": 52,
                "productShortName": "vfdf",
                "productDescription": "chili",
                "createdDate": "2024-07-09T16:35:55.46",
                "deliveryTimeSpan": "1-2 days",
                "categoryId": 55,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/l/10000333_14-fresho-chilli-green-long-medium.jpg",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 1047,
                "productSku": "xyd",
                "productName": "pineapple",
                "productPrice": 250,
                "productShortName": "upapple",
                "productDescription": "With the shape of a pine cone, the fruit is loosely fibrous and juicy with white to yellowish flesh. The edible center part is firm, leathery and sweet. Do not forget to check our delicious fruit recipe - https://www.bigbasket.com/cookbook/recipes/865/american-pineapple-upside-down-cake-egg-free/",
                "createdDate": "2024-04-26T10:53:53.433",
                "deliveryTimeSpan": "1 day",
                "categoryId": 55,
                "productImageUrl": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTEhIWFRUVFxoYGRgYFxcYFxkZHRgYGRobGh8YHSggHxolHhcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mICUtMjUtLS0tLS8tLy0tLS0tLS0uLS0tLS0tLS0tLS0tLS0rLS8tLy0tLS8vLS0rLS0vLf/AABEIALEBHQMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABQMEBgIBB//EAD0QAAIBAgQDBgMGBQQBBQAAAAECEQADBBIhMQVBUQYTImFxgTKRoUKxwdHh8BQjUmJyB0OC8ZIWM2Oisv/EABsBAQADAQEBAQAAAAAAAAAAAAACAwQBBQYH/8QANBEAAgECBAMGBgIDAQADAAAAAAECAxEEEiExQVHwEyJhcYGxBTKRocHR4fEUI0JSBhUz/9oADAMBAAIRAxEAPwD7jQBQBQBQBQBQBQBQBQBQHFq6GmORI9wYNAV8di+7a0OT3Mh8vAxH1Cj3rjdjjZHgOIi5cu2jAa00eqkAg/WD+tE9bBPWxaxN8Isnqo9yQB99dDZLQ6FAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFAFABoCjgOJLcJUjLcUlWU9R0PMHceRGgqKlc5cvVI6Z/B4/u8bdsOdHi4nuoBHzB+VRWjIXtI47cMRZtkbi6CD0ORzNRqbCewgs8RK49nH+6qNHn3ayPmGFQUtbkG9bj7tBjswsZToWzHyiBB/wDIn2qcpaEpO6GfAMQblkMxklmJnlLFgPQAge1TT0JRd0dY3Exds2wTJJY+gUgA+5n/AI0Deti/XSQUAUAUAUAUAUAUAUAUAUAUAUAUAUAUAUAUAUAUAUAUAUAUAUB4zAbmOVAe0AUBku11h7NxcTb2MLcHn9lvwnyWqqitqQkuIw4Tx0OoJMjrzHkaRqXOKXMz/ba07YizcseJihIgwTkbUD+7xgx5V2Ts0cmXsXxAYvCa+G4jgXFIghiCuoOomak9UdbvEzfFZV7VzaVHsQSD931qjYgNuIDPh3YbhGPsQfuNSeqOF7sPj5TKTzj5iR+I96nFk4uzLOJvzjJ5JC/L9SalxDfeJuOdoO5sNcWM7nJZUjdyN28huR0EbmjehPMePiWZLdhXJaEF158WuXMAR9oyZI2nSOR6nHLgaBRGgqRMJoD2gCgCgCgCgCgCgCgCgCgCgCgCgCgCgCgCgCgCgCgCgIsTh1uKUcSrDX8x0IOoPIiuNXBmBxi7hrhs3iWj4WOzryM7g9d9Z5VTncXZlbbQ4scestozZD/dsfQ7VapJklNHFzieGvZ7FxspIgq2kg7Mp2IO4IPLqDXHKL0Z1tGFxC3MFeKnUfRlOze/0IIrNJOLK2i1jL4uKHQmV1XXYxBB9RpXVK5AtYPEpiEJOlzLBI3KyCJ6gEAxyjSNasUr6HRRx60VSf6Wnyhun/ID50aBb4FjRcsss7ow+an9KI4SdnrLWsjHVLirqOTRJU+ehjqPeOxOsui4VvNmMnOffzqaWpFsT8UxX8RjUQHwWTkHqNbh/wDIZf8AgKi9ya2NNwxsj3HiYc6e5/E1JM4nZlPtF2va1NqzDX2iTuloctOb6zHmJ5A8lOxYmPuyuDNvDqWJa5c/mXHJlmZtZJPQQB0AAGgqUdiSHFSOhQBQBQBQBQBQBQBQBQBQBQBQBQBQBQBQBQBQBQHhNAQ4vGW7QBuOqAmJYhRPISdJNcbS3BT4jg7OLt5cynmrKQSp6iOXlUZJSRxq58+4lbu4djauDz8iP6l8qyu8HZlbQnx10aTqBsZIKzvB9h8qmmpbkbHb47OgXNmyzB+0OoI5+o8tK66b4HLkGF4lkO+h5fgartY7uX8PjgGDoY/f3VYcHNy4l5CD8LCD5GupixkUxLYO+bbagzlPIg7fkassDcdmsSLlprLcojqJ2PswHzrkSTIuNXzbYuRrkk/5LKn/API+dWrmVPcS9lEzX0J1M6nqTuaqS1LB/wAZ4p/D4YuID3GIWYgaEsxnkJHvlHOmyCMl2awT37vgmARLnVixJ/qnUnWTPPSopXZOx9exOLtYdBnaABAG7GByA3q5tIs2FeH45cusciZQIyqRLNJgFmmFXQjST9Jr7S7sgruz4fr+xrZx4OphRqDJ1VxOZTy0AmZ1rqqIsdNoqtxZWVijJnU6DMCrCRqCOo9wQd41r/yISV4yX10LOwkmsydvIhHHbQzI2ctuVglgrRqZiBrtvAqP+VBO2t+SJf4s3rpbme4THEWQHLeCPHIBdB8J12ZoAI8zViqaakJU05aceHiXTxO2ULK6EgAxmESdhPmYHuK72sWnZkOylfVMnwV7MgJOokH1Bg1OMrq5GSsyepEQoAoAoAoAoAoAoAoAoAoAoAoCPEWFdSjqGVhBBEgjzoDE8W7JYi3mbCX3dCDNm45OnMKxPiHk/wAzVUoPgRaMk2MuWWyvaKMu4KkR8oP0NU7ELHTcYR47zMwB2zz6xOo/63rktULMY2eGYa+pKu6rESSp11JBGXSInf7qRtexNw7mZc9Ra/Yp8/8AJxAjnmUjT1DflvVOIx9GhdSl3rbcSdLDzm02tOYu4j2Tx9vMci3ANsj+Ij0YDXbQfWkfiGHnZSbi/FflXOvC1F8uo1s9hL4gi+AOhtz6gw/tpXIY+k900udv1d/VCWEnwaLGK4firMFVDKFAgHxaCCSDvJk+EnflV9GpCps9eRHE08kvDSz68RRxZVxNvw6Omonkeh8q0x00ZmRZ4FxTK6nrofQ1yxMd9sPFY7xTqBmPmNFuD1jK3/A1Ynoyt7ibstxRLbZ7jAKoJPM+w5nkBzNRJXFHHuMvinUZSgtghVkEDUksx0128hlqvV+RLY1XZTHi2FTD5Jg5bjglXcgElQCGjQqGO8CAw1qE6qhazXXIupU3O9l+vUY4cl7uS62e9JJaMygQIDEwAAQTC+H15ZpYi9S0V68Pc2wwj7K83x9ev2eJimY91admZiZbMQCQJyjSVEhYIAGkgbk53WlOpkjrpry68V+zXDDwpQUpbffrw/gi4riHW2EDyZzOEVogA+EH4nJMHMZ0nYCqsROce5vztwV+Ot/MuoQjJ5rW5X6svT7nuA404tXGS0wW2rOSSAxbfKsKcqkKevXerIYiUY2jGwqYWLmlKV2+tQ4fkuPbuFCXc/zCrQQIOpnUwD9RGsVDDxVZqbd2MQ5U4uK2Wxb4vgLSI15s91whUBrrkQxXMMsBYmJkTp5CtVaSpUnrd+dzPQcqlVK1l4I94Pw4WrQKR4lzEkAqDqRAjUzzEkyZmKroRk4qd9WuuvwTxFRObi1s+tekXbmIx1rO/gKFAyhVIuKx+LMskNy89xHXS6lWNNtWv9DOoUJzUdRvwXjS3rVt8wbPADLoCSOYOo1B015VfSr5l3tzPWw7hJpDS3dDbEGDGnWr009jO01ud104FAFAFAFAFAFAFAFAFAFAV8diGRcyWmun+lCgb/7so+tcYMfxHt89pirYK5bP/wApyT6QpBHoag5tcCLkZ/ina58UuVrNmOR+Jl9Dm0PyqmVW/AO9lcW8M4WcQzKu4A1jYHT5+Xn6kZa9eNKOZl1Clnvr1/XXPccB4KuHtsBuSJOubTbWY+QHL1PlSxdWupL5Ut+fPR8PHj5GxQhTso69ci7we41y2GuLlfmD1Gk++8cqjToxlK+/i77+pOvaErRehfNsfKrnCCV+RSpMixqgqRJWQYI325VHEThZRbtfYlTve+4uwHDj3OS4waS0GMsT7kyOs7mstOClBTWm9tdb7PrgaKlW1S8UJOP9kS6FrDBbuhk65gAQFJ3jX5xXpYfHVKcl21nFLhuvHx8duNuRirUYzUnHRt38H4eBmOxfZ58Q1w3X7oWyIiGzE7xroB5idRXvSteyPNjsWe0dxrdm7YuGSBKtsGGmo9jBHnUJXSI7sxd3F5bbEHWQB6mT9ACfWK4+6tSW225L2OT+KN1WU9xGRiDluG7mU28vSDvM6E1TiaqpJN6vr3PQwmFdRO+361N7w7C2Eti4jFVAOZQBOWB8DA/CZgmJgRPOvLg+0/2PR8efoz2Mrh/rS8v5XXMmsYJjN3OncXfGCrGTB0VswGUDKNNfpU4UJZd9PDw4CVWKeW3eXP3FnD8ZctuyWka4zNozSQM7SDJ3Pi5T8XPlXTqyu7cer+vAvqUqco3nokT4THOuIuBQFdHKggaLmOZN+UMAeuU8tBGmkqud7s5UgnRS4DjjHEkbwFgEediMxywGUH+uCpjoavxmIUYWiZcLQkpZnw6+guwHCLxTImIyF4ORdBEaAGJOke/rWejTnJXi+vE1VsRCMu9G9iBez6WbV8nEspu/GJZlUASSSsNMLzPlrpl3yVqKz6/npGeNVzr3ivbcZdlkxHdZibbGSVDMwAjQ66mQANxG8Vjw6e9L0TfX5LcY6ea07+NrHnEOLY1Coe0hs3Va2zI05GaAjawYnQmI13HO2VapKnOL3tovcrjQoZk4PVPjyL/B7YXDqqnLnItMvNSbgU6DUMM0zy0pg4yyqXHj535eBXjZqU3fzX0HuE4oqE5wFutlDDbODorA6zzH3xWtYrJ8y19/IxzwzlrF3jr6eDHJxS5c0zqBA3zGIEddRv1rcpJq5iyu9iepEQoAoAoAoAoAoAoAoAoAoDi4oYEEBvI6j3oD59xXDWDfZL1q3bAgZbZJGZhIMqFiQCSNDIEgyK8vFYiNFuT8vX+t/wCT0MPhpVqdnHbbXhx+/Wg84bw5LKgIIAgD8z5nWvBnU7Z5uF9L+/r9lorak3JWyrTrrzGYPvW2L4blLKLm4HKkKLeUsG+0WBnbYCBr61TOc43jJcG0+dtfrzL0oON+N9uFi3aeQD1qcJKcFLmvYpkrOxFiz8J6Ej6fpWXFyklTkt02vqn+mTpK90e2TIEiNW/D9KtpNSjHMuLXscno36Ewg61ptGWqIaoV3eEW0zNaUW2YsxK6SSZJYc5qMcTWw7UrtpcPBcuVly9b7EZUYTVrWPk3b/jtxS1hlytIkHlGsjyIjUcia+ijWhVpqcNUzy5U3TlZmZs49BaVWQO9w+FDz1EHyEjQ+R6VGV3ryLacHNpI+h4MKuFF0jLdYeLU5c5MHQ/a0hjzg9TXlznFxcuOtvwfRUKMoNQ4cfyW7OGurbNsoUtqpAmJfwkSN4T7QJ1Mis0qcravRal/aQbut39ipZ4kxw5RQS6IQSIAVwAd9QdROk8q52jslw/BY6Sz5vEd8HxCPZlIkBYaIaCGAzdYVY/5H1rXh7KGttOvsY8RGWfz69xLf4Vdxl6bThSScxWAxIkQoZiQAJJgHX0qiF6lR5V6X28bLXU1uoqEFmJcXwfucLdIJzKwdJYmApUgy2xaHHoRUnh38z49cORGOJU6iRNwDHWnAvBo7nUMdNWBVfUAFjz1A3qWHbp6VFaxDE082kdblTifauzfW5ZSWYowCiMrlvDKGfCZM5Tp0Imr6ylUgmuDOUaPY1Ffj1Yb9muO2GtC2+gUnMG5wTIYHzJBXXasdKoqKyT01J4rDTlJzhqaKwRmbvWkOAVkZSMsSzdZOUwQIge23S2Z/o8530UOAg7T8Ka/duDDhRdtG1fU5oBbOwJYdBkE/gTryEbzk4vlf8+pdCrkpxU+N1+i7dxNvE4RccFjJbud7baGUEH+aGHMSjajffWanVoqpaXFdfkqozlSn2T42tz8BxwTFlrFu9cSCJbuwZFrwgEGN2CzvsSRV9F305GaurSaXHjz6ZoMJiUuor22DKwkEc61Jp7GRpxdmTV04FAFAFAFAFAFAFAFAFAZjtYxJ7u1cFt3ALtrGUMNHjqAwB00BGxrz8dUyrLF6tHoYGOueSul7+BU4fgLZTPnW4xdlnQ7MQTM84+RAr5zHYeMaV895N269/7Nc8RJSypWVhzbAAA10qeGhkio32Mcnrc9uoRqpgn5H9a0V6co3qUnZvhwf8+/tyLT0Z45DAN01joR+z9a65qpTVRcOHJrp68r8jqWV2PFSBpsdR5HmKgqbirLZ6rz4rrwGa71B9jPUEfT9ahNaPN/6Vvt+2FvodkaiP30q+SWdJdbWI8DzmY0kn5CupNt5dE2/ojunEI8/wAf2ajJWu2/v1r1wFz51/qr2S79BiMOmbELEoSf5iAbKCYkaHTfxczWjC11QqqEn3ZcOT5+T4+PqVVaHaLMt0YP/TrDJfYPeBDobjo8jK3hUeIRupgKZAgkcq9bEyUdCeCV/Nfk1+CtXHQBzKlhkhSM4aczn0A29Cd9PKVHPrrbX8ntuqovSxMONWmw6lvHca2uYLqQPtEaGG5aj7BqOdqGTht19g6D7RtDlFtLaVkJ7vIdJU7iJLQAfI+2+90IQyXXIzylNzs97mV4dh8TJ/mNbS3lyLIz7wgckbTsvpVOVOLS34m2Uo3u+PTJUxRw151JBEF7RJ1OYsTBOmYEyDv4jXUsju99n+GRaVWGgx4zx+3cBtLcDXWB2GZSYkK0faJgbjeTWlzbWxnpYdweZ7Gf4FwvMCLnhDORkkd2pByEETrqpGpIkDastWWeqowfDfjrqa1OUKblL6GswvAgly21wFrdvxjMoUZhooXmNMxPkI56X0qEYyflr4mGric8bLf2F3aDCJh7tm4jMMz6DdSSpJIJ2InbzJrNiIStKK2te5sw1V1FaRoBwdbqlmvXS0AkG4o1MbALB3rkKblHvyMzxHZysor6CzG4cYe+l1rpuW+6KuzQTkOZSmYGNYJ2/wBvnWrCwiruO3vw9imtVzxy5bO/8+/uUOyF++y423czDD3rsWwRAIzPnAkGM4ySI+0dAZrVFKMcsSmq7yU2kmur/k02E4Qf4ZkxN4uX8ORZCksQfNpJDE67E1CnT7NOUmQnXzyShHY2XBeGrhrK2l2WfmSSY8pNehGOVWPPqTc5ZmXqkQCgCgCgCgCgCgCgCgF/GPBbe6H7sojNm5QBJzDYjT25VVVVotp2ZbS1ko2vcxV3HoLlxWuA3+6zmQPFcbw9NYACx0ArxMRU7+ZvZP6u1/t9j2aVGXZppd2/23HvDsgC20+FFCjmdgNSOcAV5VWuq9aMY/Kr6+L59eepRVUleUt2XChFXKhKGi6/ZTmTJFucjV0atrxnt11z/MHHkERqPu9yCaaQeeHHw8btN+HP6i99GcXJ2HUVTUck8sNrko24gCDXIyjNu41RJNanukuuRE9KHT6/X8T9KscHZRXr5K7+7ZxNHGJfYfQb1TiZK8V9FxfXvpxJQW7FPEsB3l5LmcjIsBRz13nzEDn7c4V5020uPD0NNKo403G258yPCTh+I4u2gUJd7tpn4EuNcYwI3zhx7r0NblUlXw8E3qrp+astfS33O4VKnOT4aP36+g6GPtojoSBcUZUU6nxIr7CSY8R8p1rqzQvHgbOzztSt4vrxDs9gkCjwqe9MuyzyXKywQDoT8MbcpNdjTzN3e2xytUy+Aqt3MQbd3DpHdquXPBBMaZQN9Bllj/1VdR257deppai5Zn6DjgXEvA1q8ozh1QgidVUZSs6hdVI6a9AatpzUXZ9f0Z61FvvRfAqdocty6LWfTIfFoAElQVBQZokgczE1XVqXebl7llCDjGz4lvBcBC2rToohJueFkMMPg2mfFHyq6MMzvx5lFSvq4ifG2f4e+IBVLhDLJnJcPIwT4XnrofWo1dJZo7r7r+C+m+0hZjTBcSzC6BraDK+V9gxz58seITlU9Kk6+Va21KnhtVbfqxX4xxO3iO5t2dQrrpdIzCVZAAx+KSVWT/UNhqM01nd9tLW8rfb6GmjTdFNy+wzvcQtotpcpt3LLKxU+E9NtBG8aEc/Oo4eVtJXT9zPOk5tvdMZcXe5ewzSu7IweMsSSASWOsZyoUc/8q9WGq2PMaUZ6PrpFvslhhdljHd24RArSpaAWeREmW5edScrd1FNS614su8bQr4AdT4k05yN+vIelV5rySezuTpbZlwHHBe+e2rXHAEKVVQJj+46jXoAPXXTXRk5QTuZqyjGTSQ2q4pCgCgCgCgCgCgCgOWcAgHnt67x6xJ9jQGY7c4q53Js2kJd2tx4kAZO8XPuZAEgHT7Wk1jxcm4ZI6Nm7Axip55bL34GYxOH7u0twgZ7kMVC+L4l8II1+E5ddBvXztbDuEkpS34cuf1PZo1M8mo7Lx8H+jV4QokBNtPUyBqfP8qpbhQruK0209F16HnVM0+9IsPcLfBlPqSD7VdKtKorUrPz3uVKKj81yFHI1gr1B2+f5xWeM2tdVzT/f7LGk/Ent3f31rVTnl1X9lconTMDXJyjVt17kUmjma4o6krHoNTaV7nDvvNKn2tlb7kcupG7e3nzqmpO1ne3XXPy5zSIjlXrJ5nWovJBK2/N6skrsxXbnBIty3iVSWzC3eifGhIy5gOhgD/I1ow2Ibm6d/Hyaev1XDwLqFPvXXER28Xbe41xB3hFpVBMEHwS4B08egYjmBW9pSlaWmv8AF/0bFeMLrrXpFoPdtsVt2Gvi5DDIM4ztbynbRRoCSY39Kg5RpTldpdfc5KcJQi5MZ8J7NYvu2kFGJPhLqS3iDTIAEnbWNPaq6U4Sl3b2fh9iFbFw0vqZ/tlwq4ly2xR7TABTdhoIWTMgZJyg8zHrpWmbUdbXRbhZ9pG0ZdcdCBeDI6Dun8eVCjBiSCwYiT/cFM1BQlfX1LZVknZhhuPG0qrdlDbBVxGk7wsHmcpA86RUlKy24CVKLVypxriOJxEfy4S4VtLbO8M4EkREkAiJnUHerabp5td+DKp03GHdfmR2OHNh2NgvNu5LMNZbIQCT/aSQPMJ51nxMk3e2sdPr11Y0UEnquJteF4YKpUMqgCSoUTEc50APXUCdjWSnhlPvSbbKK9WztYvYJcY3d3TctBWXwKUD7FsnjBDEMoU7zIM16udpbGGcabbWviUe0vak3LBsNbC3FxFtDlMqwVlYkGJBEqxB2CsZOU1bRqKaa42KKmH7KSle6ZpewjA4NIQ299GbM3+RMDc67VCO8l4lVf5l5L+i7xJJdVIHrqGkToNepH0qM5uFtN3+xTSaY8wFgJbVRJ0EkmST1JNehTVooyTd5NlipkQoAoAoAoAoAoAoCLE4cOpVvmNCCNQQeRB1rjV0di2ndHzrjDkY4LczXyA4YqSMvhULKzAlW1CiJhoGWa8yrJKr33ra3X5PYoxvQvHRafn24fQX4biCjD4YFSWy22YIIJfKs8tTMz615uLqxlJKOtnfw0NlGjLNLW25quHuLihlEdQZBBB1mdZnXXrNeTXcq2JcuVvqjNUj2bysvPaM8oO5/Sr+wnn30e/9aGdSVjzD2mTTMCPPl8zVlGk6btmT8/7OznGXAnSwOWkfL9+lWxoxveGlvp15FTm+JHcMHaqGkpXX2Jx2JbWorbQV0QkFxdKlVp2Wgi9SLcVgqptNonswE8hPy/GorM1aKv14jTizy606ZgT5ehqdWTlaOZN+HkzsVbWwm7XYRbuExCEkZrTDQEmQpIiNSZjTnVtJqNWM1umuvwd1asj57hrb2rOUhVuuAcokfzIJJnlLQBO0n1HrSoxctH6/g306zsrrzt4n0fsxjCltQ24Cg6R4oE6cq8H/ACZUsTUk+PS+xmxNJStY0FvHjmK1w+KR3lHzZglQZIL6N5/Ij3ir44ujLVfsi6c4kV3BWX3tofYT+lWLEJ7P6P8AB1SnHixBxLsHhLrB8txXEkEOxgnQn+ZmFccpa+Phb2NNPHVI2vrbn0it/wCicqju2Ep4lzAibgjKzEToCJiN+g0q6jfdonLG5r348uQgxnYzFFBnts11TIuW2RhMQJDEEjYERsetTrwb1irrivA0YfGU1o3bzEli/fQEYjDXUddGlPDoNfMgg8gdzWfJ2fdW3C+j9jYstXVfZ3G3AOOqL/dvNmy4lGzQFu5QuUKfhVl6iMygD4jVsJJ022/p+zPiaLi00r8+vqLbuCF22cSBmIuv3kZFkLKXcxCzsoj+nffayi3FZX4Ne/szNU70tOuHubnDcPbAoBbZrgIOVLlxssxmOZgCRKq50BE8q1P5tTDdTRabitu4itql22pfuXK58v8AuDScxEA6aygBiTTNGa08woSg2nsx/wAH4gLgyMwLqoJIEBlOzAcj1XdT5EE6ou6M045WMqkQCgCgCgCgCgCgCgObj5QSZgCdASdOgGpPkKA+dcTdXxOIuAPbIyOJUq0gBS3uABB5R5142LcJKU7NNfXQ9rD5oxjB2aYl4FhF8VwPKriHtuCygWkhjJJ6zbO/QaQaojho1IJtb28Ga6tdx7r5X89v5NZhLwU6NmjSeenXr0n2rw8YnRxCau1bS+/8lEo547DTvdBWpVHZGXLqBukf1ewqMqs4yvd28EMqfI7FyevvFc7TOlr7dfci42Bk00rqho3HYJ6nNt4FXUamVI7JXZO7iK21KsXErjF3ILb715+fdpFjR3ceBoP386VKuSOi8+rkUrsquXO0VhlUrSbcbehelBblLiN0hDm086vTnKFpbllNLNofEFwN/DXWvYJiczE5l0dQSTGWdYmMw1PlJFfdSwqlBRk9jzI1pRm5LW7/ACfU+At/E2rdzMVJIciMpJ1BEctSdPKvhsXB0sTODtfrY9mNW8FK2jQ+wiMsgAnXQ6CZ6xuaxZJuWaKfh1+Cuo4y3ZZF8r/T8iagpuk9LP0bKsilzA4lt+dQniJSebZ+B1UlsS2Mew51fh/iNalLe5XPDxYws8QB3r3sP8UU13kZZYdrYsfxK1vWLpMr7ORw7KdCRHQ7Vx1qb/6OqLXAR8X7I4HFKBcspoZ8Ph113A0O53BpTqRvem0Xf5FVKzd146+5X4V2JsYdWRGco26sZG4zTAEyoCmZ0A5ipwbUrs7VxMqi4LyGnGMNdZU7pgGUgySJ2InxAydedWyqRSu9Cim0nqccJwEXTfvt42zKAWEAEgDY5TmAnbST1NXUZQerauxUk7ZYrRDXBcNS0Sy5iTMZmLZQTJVZ2WQNPKtCViiUm9y7XSIUAUAUAUAUAUAUAUBh+299rV9W+w1kqdgJzQSesSg/5HlNebjpuLta907dcdz1MDCMoXfB9exkMNfJtXLVtUAYm5buTolwhXUkNpBnNM89OQrHTrxilCStordfs9CdK7Ur+a5oZ8J4gvgGWGJCFeYuTBHsR7RXl/EY9rUWXfiWdk1Bu+m/obOyIA5mp0tIJ31PLlqyG7eYiWIA8gSd4j1n0qmrOc/m0XrexOMEnZEyMAo/fzpeEI2INNsLdyqqU77BxOWSakm5nU7HgUmpXbO3RIykDSuVoyUe6QTTep4jHcx5g/hUac5/M7eKf4OtLYgxFwA+E/j8qqq1IqXc262LKcW1qK+L3/ARmE8oB3HUGr8+m9/L8l9KPe2PnV7hrZYzEKfsgRX6BF6I8eXzPzND2BwzJnRMxJcEA6gAgAny2E8tBXyvx+jKWIp9mtcvs+PgrnoYWS7KTm+P4Pp2AwYQSdW+g9KngsHGis275/oxVqznotinxTB7svuPxrF8RwOf/ZT34+Pj1v5mjD1rd2Qst9I2r5x03msbHzAtULHbEiPV0JNLQg0S99V7ruxDIcG6aolWmuJJRR6l4zvXadacZZrs44Jos2ca3WPWvSoY+snaTt57FMqMSwuL6xW6OOe00ip0uRKt1eVa6dem1eLK3GXEWY/G2sODdkrG8MRJJAHgGjMTAEjnVH/2cs/Z0k79cC+FGVRqL69eAy7P3r1y2Ll0jK4BQRBgjc+u49a+gw7k6acnwRkrxhGTjHgNauKAoAoAoAoAoAoCO85AlVLHoCB952rjOpXepgO3eBxF1T3xQKQe7yyUGhzW2MBmkHNsJyacxXnYmEr5pW02/Pjfqx62CqU46Qv4/h8ly9RGMaiNmNsOt1EAyNbKZ7aQxAJzL4Qoy6mF8qh2ad1bTx+hc3JJa6r8lfh90LxETZ1ZAc8eMlRpl0OYlYJGnwtE7Vk7BzWSb2e3hwv16Gqc32Xdejv17m5svJA3B/fPmPzrxpwdOp2W64eT2fp+zG1pcsLYYTAH1EefrU1SqU01H+uHXV63OL3ObqEc/wB/vlWWpTfXX0JRdzrDqTM8tauoU275uBGo7bFu2JE9a101eObmUPR2K4MH9/v/ALrCtGWtXOrt4BZNaJVEqV2jkYNysit/Eg89OR/A1lVZS1+/4Zd2bRGfEdInodqjGm5SutPYl8q1EXHMNEATqMu8+JiFG+pMn61tpUe+o/8ArrQvp1LpsuYrs4WbKIHn0FfYYrGU8PG8t3suL65/0eFC8jS8G4Vaw6wgifiY/Ex8/wAq8ntp1ZZ6pJ8kW7mMAqueOjHY7Gi2GcNqKlGrGorxGVx0Ys4jhSfEnuo5+f6V5OOw3artKfquZsoVUu7L6kuE4WChz/EeY+z+dW4X4XSdJxq/M+PLy/PMhVxUlK8dvcoYi0UOU7/QjTUV5OKw0sOskt+fNeBppzU+8jhTWFLUmztjsK1L5VGxBLiBYRU24ZUul1/HiEnc7QjY1bTslkn114EWne6KtxipPTzMVRLNB2RdFKSOhiSRPn86m27Xf9nOzSdisLP8RdS2di0n/EDxe+sTykHlXpfCKarYhyd9F11+iNWXZU2zcqoAgbCvsUrHhntAFAFAFAFAFAFAFALe0OFN3D3UVA7FTlBMeLlry1qutDPBxLaE8lSMr21+x8zx3BimY/Abd0gE8jMo/urw3+TV4tRSod6L04rr2PdhVVWyfFf2hVgi93vLxzKLKkjbPOYBzziENzTczyqvsnNSu7u3pzNUpRp5VzZquEYu4pXvCXUwVfSYIkHw6EHTfWsONjUspSWqe69n+PEoqQhNdzR8jUYTHJckKwJG4nUdNKuoVO0jd6Hm1KMoatHN1xmgbj1gbxMbVU4LO78Pp6kop5bvYgtsSInnqR1rHGTkrX46ljSTvYsB/HHQAR5mT91av+/JW9f6Krd25FdkwdNfy0/Csck20+fS/BZGyuiF2zEj0YeR3++RUXK8nbjZrz/ssSyq5BlBJB3+UjrUYxUpNPf3LLtJNEJuBDmbTLOvkeR+nyq6n3WcfeVlxL3DMMHfvSsxGQnYNrJA5nbXlFbsJiFByq5bv/lvZPW/4/ZlxDaj2ae+/kNgY1NUSqvM6tR3ZntfRFPFY2dBWXEY+U9EaKVC2rKhumqM83qXqKPbWKYGBzqMcRVg+4zkqUWtRxh0O53PKvdwym0nLd8DBOS2RxicWF0FTq4uMO7ElTpOWrImdbq5W0PI8xUO2pYiHZ1PR8iajKm80RaVKEq2/Xkd9RXlOg6VRwn6Pnua1JTV4nIeRI5VRdvvLh190StZ2Zwjjf7J+h51FJcdmdae3E7Jg12UnB2lsRtclDL0rXCcVsiNmUsXcBkTH7mqpXrTyRV2WwTWo04JwFlAuNcdGIPhEAgGNDIPQGK+w+HYPsKKT3ert1yPNxWKU5WS0NDaBA1Mnr76fSvRRhZ3QBQBQBQBQBQBQHk0BVx7sEJUnMNoXNPKCJEjXqPWuPbQlG19TEccwN5SbzWSVZSLnjDP1BKqMqAbeEtuCSYE4K1Cybaunvz/AIPSw9aLtFOzW3XH1sY3gpNh7rIudLjZCpfKudgDoIIkrJiB66isdOpLs9VdbeNj0asYylvZ7/QcYTiQyC00hUEJsCYJ8DQIBAIAMkEAzqDPZTpSg79enMrjTlGd0XOymKS3du+EKGdQW/uK6KdNNp9SebV5TcoKNTVxWnkuH9/ovxkXUhHXWwy4x2kt28QmHyNnuZfHsgDNkkmZJEjQDmNem2MI1Y5kvuZKOHcoOTe3DjorjfD2I06GvP7Bxaj4lM531I7Zm7dPmkfcfxqGa9SXO6/X7JyX+uK8z25sT0E/eaqcO7dcv2xHcpXJ36A/Kfwqlxvtw9rl6aOjuDzqxU9VJ7kL6WLeGwIuasJXp1/StKp5jPOq4aLca3rioPTYVZiKkacdfRddczNCLkxbdxJO5rzM0prNN+RrjTS2KRNZHG2hpSC1dkwNTMQOtX0bqVuZyUbK7HOBwWQSdXP0FexQwqornN/Y8+tXzuy+X3JMVfyiBqTuatqyVKGVat7sjThmd2LTqda8zLrqbNlodhY2q108sboje528XBDb8jzB/Lyp2naJRqej4ogrwd4i+0pQlG3H1G49t6p7NwduutzVJqazIh2ZhyJB8oOn31ROLT0LN0mwtYgElRr9YI/7+tSUWlla6XWpyUHZMkvXwq6nXp1rqdoeJGMbvwPeGYItetXbqvlElYUlTOxaAdAQCNuR2ivoPhGAlD/dU47Lw5soxVdKEqcH5myRwdp002I+U19EeMdUAUAUAUAUAUAUAUBG7UBCz106VsRlZSrCVYEEdQRBFGk1ZnU2ndGDxvALOHz2gmexdPeHNci4jDcgnUyQsNuCdTtWGtTdN6LTr7HqUa7qrvPvLw0YubEhpF1cr5QQAM2bSDqYgzJgiI2nUDDiIRnBqT16+xqpZovu6oj4JirS95bYKbZOWAvizDxZTsvwkGd9D0mqaTUY3lfU0VlOTTT1Q2xF7Cm8pcd6qAZLhzSCGMK6neNw+v8AdESaKloRbpPTlqr+XViqMKrhbZ8tPs+Hl9DVYXHpcGZCGA0kGZ9/3tWd4tN6pprgzDOjKGkj0Mi7c9aj2lOL04i0pblZbiyfPQ/v3qmnOLbLGnoI+J3mtvbFsO5nUCIAgyxkxt01M7GradK3di9rvz8C+MsybkXuFt3rARtqR9378qrc801GK3K6ncjc0lxgogb1sqdxWW5ginJi3E3DBHM158oSs092bKcVc4fQa11xsiS1ZWO58v8AsfdWdwvJlvAZcLwBTVgM7En/ABB5Dz863UsPKDT/AOn9l4eJjxFdT0jsvuXMRiAugOvM1rlVhT7kX5sohTctWLbt3WT6+grFObcrv+ka4x0sjiTpy1quztcloT8q1PWLTK+JXUeKev7H4V5/ZNzzdeBa33bFhlFwAHRhsenUelaqc4zWR78PyUq8HdbcRZiFg6jxDTp5+9QceEka4O602MnhOHYi1jGcOBh2JZgSMo0gQDtrHQaegrdJwr0sqV5Ll+TXUqwdNX3NvZ4Dbu/++ofaB4hEHMNQQd4r1cD8JVFN1rNvhwXXE8Wpj5p/6nb8mnsoAAAIAEADYAbV6x57d3dktDgUAUAUAUAUAUAUB4aAguCunSs9dBWuzXTpSvqdq6dM1xHgudnMgAxAI0UZfswREmZBBHpWGeChO6fobqeMcLfcy2HxCYdnw122BaIzKygjUT8JBWGGkbEaRtVH+NUopuScvLf2NjrwrWcXZrmX34oqEK8umQMGnxFDGR2+zsDMRryEGaZ5WmpJs7BPdNCzDceSziA4vC0mshnIRjIjw5ob1/UVjWE7Tu5fLS7Rrqun2d5tew4/9YZzmzIQBoyENbjXWQZA8J1YAGCJnSq5fB1J9+WvDQzKVNR7q+4j4x/qYgGS0pLH7SwY15a8/P5Cr6XwGcv+tPFWv9Llbr0Kb7134L87FO129vXG8NrICI3zMfuAHlrXpUPglKmu9Jvnra/5M08Vf5Y+V+rGp7M8TdFYlWDPrmLAtEaA/wBp1I5ySYMzWbH/AAlTt/j3VuC+XXfx90ShXzf/AKtfn6GowmOz9QfWvBlQqUZ5aiafv+H6F9otXi00X2aRMgflWmNKU9SCsnYou52nTU+v7mstSlJaGiNty7w3ASwLkHKZVRPxf1N6ToOUTJ0ieGpxUrN6rh4mavXdmoq1+Phy9evGl2p4hftXrIsAuCSGQZRoY8UkT4ddiN62ySjKWZ6rZncJThOm869S8RJGsx8przXGLmtboK6R66bzrz/L9+VWOFruWr6scUuQCOf2a6raX4DX6kdm7OvX7qpjO6uyco20K73I0HKD9f0rI52WnD8Fqjfcmt3PFPLeo3cp5uG5CUdLHnGsEb6fy3yXV1U7g9VYcwevIwfI+zQqUKjSrq6+/pbprQzKVSn8rKPBOAXUMuQTzMkmvraLpqmlSso8LbdffmYakm33tzX4TDlRUmyougVE4e0AUAUAUAUAUAUAUB4aA4cUBXuLXTpWuV0FS4K6dK15JoSM7xPsyl4ktJmpqVjtxBjOwMqVRiB92kaRsI0jaoyUZNSa1LI1XFW4Gbv/AOmLDYAn3q7OQtEt4bsRiVQ2lLIh+IJCZv8AMqAXHkxIqNoXzW1O3SViWz/pzG8/Wu6HXUHfD+x6W/sx5mmYi5Nmgw3C7a761DMRd2W7q241G2xBIj9+dZcRhqOIVqkb2/JZSqVKfysy/aprty2Ldq4VOcAtJWV1mfQa6dPavGeF/wAarZ3kraaa+TR7GGrRks705jTgmLVLKo15bhUAMwjf0FefXqyu80WuV017k5JVJXj7jNMcVRxb1YqY5nQE6fX51hjmzf6+O/h4/wBkJ0k5Jz2Qh7NcNvd+2IvG4S1vKBcYsUJYEgTrEAe4PWtdaupQ7OK248zTiJwUMkLb30NdbMDzrE24XPPauzppMee/tVl5TS62OKyIb/w+Z/6rs33SyHzBh9IHkPursUloJ66lY25LNJkaRyifv1rK6UpJtFmayS4EGGxYLELMK2RgRzhTp1HiGvr0qVOk4yV9mSnB218y6+Iy61fKGVGbLcmwXGlDANzMQNT7dT5Vr+GfEZUqnZyV030/2VVsI5K64GoUV9aeWdUAUAUAUAUAUAUAUAUAUByRQETrXTpWuW66CB7NdADC0uLna4MVy4uSLhV6UuLnfcL/AEigOWsDpXQRNgxS4Im4aDXLnbgOGL0pcXPG4avSuDMLOJcCt3BDT5ERI5aSK7ZXuTjUklZGTx/+nWGuGS1z5r+VSzE1UZOnZB1EJjcQNIklHI8wWBIPmKxywWGbv2aT8NPaxasVUta5Ywy4jCplzNfA2ZiO89zsfWRXnYn4PGUs9BqN91w81y9vIupYiL0qfUtcN4uLqSRlYEgrIzDca+Z396+exdKphqnZ1V5Pn5GxRjPWGqLuHxRqijVadhOmSYlcw0rXKKkrEIPK9Tq2I+lStoRbuLuKoMrbtm5fLb5V2LUdy2m9UI+zmJxGVzet5ADpmPiPnHIec1fiVCDWVovq5G+6aDhnD72JbMT3drWJBzN0gdN9TvyrXhvh0q0c1S8VwMFfEQpaLV8fA1HDODWrGqiW/qbVvboPIV62GwVHDruLXm9zz62JqVd9uQyrWUBQBQBQBQBQBQBQBQBQBQBQHJFAclK7cHJSlwGSgPQtLg9igDLS4PctcAZaA9y0B5loDwpQEdyxNdudKlzBUO3ITgTQ7ciuYAnlQZjNcd7Id74kUhuTAwR71J2ayyV1yZZCq4u6dhdg+B8TtaZhdXkHIDD0Yax6g15WJ+C4StrFZH4bfT9WNVPGuL11GGDw2PyhbmGGbXVbiZN9Nzm2rzqvwKpmtTmsvje/2VvYt/zabV3v4E78Nx7fCLKeru33IKnH/wCP8ZVX9P5/BxY+mt4X9bfhkuH7PYsqBcvW55lUYz6S2n1q9fA6Oa7nK3LT31/BB/EOUUNcF2aCwXuM5HWAPkBXpUcJQo/JFX57v6u5kniJz3Y9s4cLtV5TcmocCgCgCgCgCgCgCgCgCgCgCgCgCgPKA8oAoAoAoD2gCgPaAKAKADQHlAcmgOTXTpyaA5oDyugK4geiug7FcOEgrgOqAKAKAKAKAKAKAKAKAKA//9k=",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 2250,
                "productSku": "y6t54r",
                "productName": "Mumbai wada pav",
                "productPrice": 15,
                "productShortName": "ujytre",
                "productDescription": "Mumbai wada pav",
                "createdDate": "2024-07-02T11:15:43.6",
                "deliveryTimeSpan": "1 day",
                "categoryId": 65,
                "productImageUrl": "https://i.ytimg.com/vi/atsGQroxcuc/maxresdefault.jpg",
                "categoryName": "Atta, Flours & Sooji"
            },
            {
                "productId": 900,
                "productSku": "VYTTYFTTY",
                "productName": "Ladoo",
                "productPrice": 25,
                "productShortName": "tomato",
                "productDescription": "m kkbhbhibibibbbh",
                "createdDate": "2024-04-17T17:20:28.17",
                "deliveryTimeSpan": "1-2 days",
                "categoryId": 59,
                "productImageUrl": "https://img-global.cpcdn.com/recipes/6a044188ce8e0432/1502x1064cq70/motichoor-ladoo-recipe-main-photo.jpg",
                "categoryName": "Snacks & Branded Foods"
            },
            {
                "productId": 891,
                "productSku": "qwertyui",
                "productName": "Sweet",
                "productPrice": 10,
                "productShortName": "tomato",
                "productDescription": "asdfzxcxcvxcv",
                "createdDate": "2024-04-17T16:15:25.323",
                "deliveryTimeSpan": "1-2 days",
                "categoryId": 57,
                "productImageUrl": "https://th.bing.com/th/id/OIP.I9E0jP5Rodk696NyBXKhcgHaEM?rs=1&pid=ImgDetMain",
                "categoryName": "Bakery, Cakes & Dairy"
            },
            {
                "productId": 1057,
                "productSku": "tyu",
                "productName": "Tomato",
                "productPrice": 100,
                "productShortName": "Tomato",
                "productDescription": "it is good",
                "createdDate": "2024-04-28T10:13:15.967",
                "deliveryTimeSpan": "1-2 days",
                "categoryId": 55,
                "productImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 989,
                "productSku": "TOMATE1",
                "productName": "Odisha Rasagola",
                "productPrice": 80,
                "productShortName": "tomate",
                "productDescription": "TOMATE FRESCO",
                "createdDate": "2024-04-23T08:35:27.873",
                "deliveryTimeSpan": "1 - 2 dias",
                "categoryId": 68,
                "productImageUrl": "https://th.bing.com/th/id/OIP.T-vhVtXOayrciyZQI9x48AHaGl?rs=1&pid=ImgDetMain",
                "categoryName": "Bakery Snacks"
            },
            {
                "productId": 2284,
                "productSku": "tina1",
                "productName": "tina",
                "productPrice": 30,
                "productShortName": "tina",
                "productDescription": "ff",
                "createdDate": "2024-07-09T12:38:53.147",
                "deliveryTimeSpan": "1-2 days",
                "categoryId": 59,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/banner_images/B2C061811354-21877-DT-460-all-cm-220624.jpg?tr=w-1920,q=80",
                "categoryName": "Snacks & Branded Foods"
            },
            {
                "productId": 714,
                "productSku": "Soft Drink",
                "productName": "Odia Thali",
                "productPrice": 825,
                "productShortName": "Thums Up",
                "productDescription": "<p>Thums Up Soft Drink - Refreshing, Strong, 2 l Pet Bottle</p>",
                "createdDate": "2024-02-18T00:55:12.81",
                "deliveryTimeSpan": "1-2 days",
                "categoryId": 63,
                "productImageUrl": "https://i.pinimg.com/736x/42/27/bc/4227bccb1dce550a9c692c0f162574c1.jpg",
                "categoryName": "Exotic Fruits & Veggies"
            },
            {
                "productId": 1092,
                "productSku": "1233",
                "productName": "Thali",
                "productPrice": 24,
                "productShortName": "thali",
                "productDescription": "LOL fooos",
                "createdDate": "2024-05-11T23:06:30.813",
                "deliveryTimeSpan": "1",
                "categoryId": 56,
                "productImageUrl": "https://images.squarespace-cdn.com/content/v1/5f2fa039103c7a08856032c1/1604272693005-ZQ92CEHMNV5FAVCOX60U/Adjustments.jpeg",
                "categoryName": "Foodgrains, Oil & Masala"
            },
            {
                "productId": 715,
                "productSku": "1",
                "productName": "Mutton Thali",
                "productPrice": 150,
                "productShortName": "thakkaliiiii",
                "productDescription": "",
                "createdDate": "2024-02-22T00:43:15.76",
                "deliveryTimeSpan": "5",
                "categoryId": 88,
                "productImageUrl": "https://i.pinimg.com/originals/c2/97/3d/c2973d9724d9bed330774c9c1ddc64e9.jpg",
                "categoryName": "Oil & Masala"
            },
            {
                "productId": 753,
                "productSku": "123",
                "productName": "egg Biryani",
                "productPrice": 100,
                "productShortName": "test",
                "productDescription": "",
                "createdDate": "2024-03-17T03:58:57.527",
                "deliveryTimeSpan": "2",
                "categoryId": 69,
                "productImageUrl": "https://www.pavaniskitchen.com/wp-content/uploads/2021/04/egg-biryani-recipe-1024x1024.jpg",
                "categoryName": "Cakes & Pastries"
            },
            {
                "productId": 2312,
                "productSku": "343453",
                "productName": "gsrbxsdrbxftg",
                "productPrice": 45345354,
                "productShortName": "test",
                "productDescription": "<p></p><p>14</p><p>126</p><p>2</p><p>6453</p><p></p><p></p>",
                "createdDate": "2024-08-06T21:01:10.783",
                "deliveryTimeSpan": "2024-08-27T15:30:44.000Z",
                "categoryId": 58,
                "productImageUrl": "https://fptshop.com.vn/noi-chien-khong-dau/noi-chien-khong-dau-kangaroo-8-lit-kg8af3a?sku=00800206",
                "categoryName": "Beverages"
            },
            {
                "productId": 731,
                "productSku": "test1",
                "productName": "Biscuit",
                "productPrice": 32,
                "productShortName": "tessssss",
                "productDescription": "the ebsttttttt",
                "createdDate": "2024-03-06T18:15:33.923",
                "deliveryTimeSpan": "1-2",
                "categoryId": 55,
                "productImageUrl": "data:image/jpeg;base64,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",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 748,
                "productSku": "tea",
                "productName": "Tata Tea Agni",
                "productPrice": 344,
                "productShortName": "tea",
                "productDescription": "Morning time",
                "createdDate": "2024-03-15T08:31:33",
                "deliveryTimeSpan": "45",
                "categoryId": 57,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/m/263613_4-tata-tea-agni-leaf-tea.jpg?tr=w-1080,q=80",
                "categoryName": "Bakery, Cakes & Dairy"
            },
            {
                "productId": 2276,
                "productSku": "12546",
                "productName": "Tata salt",
                "productPrice": 55,
                "productShortName": "Tata salt ",
                "productDescription": "get tests  ",
                "createdDate": "2024-07-08T14:31:31.82",
                "deliveryTimeSpan": "1-2 days",
                "categoryId": 56,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/l/40081603_5-tata-salt-salt-iodized.jpg",
                "categoryName": "Foodgrains, Oil & Masala"
            },
            {
                "productId": 2295,
                "productSku": " t",
                "productName": "t",
                "productPrice": 55,
                "productShortName": "t",
                "productDescription": " t",
                "createdDate": "2024-07-16T16:31:14.45",
                "deliveryTimeSpan": "t",
                "categoryId": 101,
                "productImageUrl": "t",
                "categoryName": "Toys"
            },
            {
                "productId": 2279,
                "productSku": "ajkbas",
                "productName": "garlic-super",
                "productPrice": 120,
                "productShortName": "super",
                "productDescription": "garlic",
                "createdDate": "2024-07-08T15:11:25.507",
                "deliveryTimeSpan": "1-2 days",
                "categoryId": 55,
                "productImageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSoWBHkSwG_1_sgigZWLu3Tbi2xWN6hwdixriJNfD8bkk6vn0_C",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 1153,
                "productSku": "ff",
                "productName": "Subji",
                "productPrice": 30,
                "productShortName": "subji",
                "productDescription": "wdef",
                "createdDate": "2024-05-24T10:51:54.917",
                "deliveryTimeSpan": "1-5 ",
                "categoryId": 55,
                "productImageUrl": "data:image/jpeg;base64,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",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 2249,
                "productSku": "adjieji",
                "productName": "Strawberry Juice Drink",
                "productPrice": 34,
                "productShortName": "Strawberry Juice Drink",
                "productDescription": "Snapple Kiwi Strawberry is the perfect blend of tangy kiwi (the fruit, not the bird!) and delicious strawberry. Kiwi and strawberry are a match made in flavor heaven. Do yourself a flavor! Snapple Kiwi Strawberry is all natural, gluten-free, made from 5% real juice, and contains no artificial flavors or sweeteners. Even better, our 16oz and 20oz bottles are recyclable and made from 100% recycled plastic, excluding the cap and label. Snapple always brings the flavor. That's what we have been doing ever since we were a small brand created by three friends in the New York area. We started out by selling our apple juice to health clubs in 1973. Since then, we have expanded our flavor portfolio throughout the 80s into teas, fruit drinks, and lemonades. Snapple went national in the early 90s, and now you can find us in more than 30 flavors and in all 50 states across the country. And for an extra dose of fun, don't forget to check out our Snapple 'Real Facts' under our caps!",
                "createdDate": "2024-06-30T19:46:02.327",
                "deliveryTimeSpan": "1-2",
                "categoryId": 58,
                "productImageUrl": "https://m.media-amazon.com/images/I/81YRD0+mytL._SX679_PIbundle-12,TopRight,0,0_AA679SH20_.jpg",
                "categoryName": "Beverages"
            },
            {
                "productId": 931,
                "productSku": "asdfasdfzxcvz",
                "productName": "Sting",
                "productPrice": 10,
                "productShortName": "Sting",
                "productDescription": "",
                "createdDate": "2024-04-19T15:17:38.503",
                "deliveryTimeSpan": "1-2 days",
                "categoryId": 76,
                "productImageUrl": "https://th.bing.com/th/id/OIP.pKCxPCoMNivR7b0_gSvdXAHaEo?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                "categoryName": "soft drinks"
            },
            {
                "productId": 2265,
                "productSku": "sas",
                "productName": "avc",
                "productPrice": 21,
                "productShortName": "staving",
                "productDescription": "dvd",
                "createdDate": "2024-07-07T14:33:29.423",
                "deliveryTimeSpan": "1221",
                "categoryId": 55,
                "productImageUrl": "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.jpg",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 742,
                "productSku": "Whole Chicken ",
                "productName": "Chicken",
                "productPrice": 225,
                "productShortName": "Starter",
                "productDescription": "<p>delicious chicken</p>",
                "createdDate": "2024-03-12T11:10:19.65",
                "deliveryTimeSpan": "less than 1 day",
                "categoryId": 77,
                "productImageUrl": "data:image/jpeg;base64,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",
                "categoryName": "BBQ"
            },
            {
                "productId": 1124,
                "productSku": "sss",
                "productName": "sss",
                "productPrice": 0,
                "productShortName": "ssssss",
                "productDescription": "",
                "createdDate": "2024-05-21T16:04:09.1",
                "deliveryTimeSpan": "1-9",
                "categoryId": 65,
                "productImageUrl": "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.jpg",
                "categoryName": "Atta, Flours & Sooji"
            },
            {
                "productId": 2267,
                "productSku": "ss",
                "productName": "ss",
                "productPrice": 18,
                "productShortName": "sss",
                "productDescription": "In the rich tapestry of Indian cuisine, cauliflower holds a cherished place as a versatile and widely used vegetable. Known as \"Gobi\" in Hindi, it features prominently in various regional dishes. From the iconic Punjabi favourite \"Aloo Gobi\" (potato and cauliflower curry) to the spicy Maharashtrian \"Gobi Masala,\" it adapts seamlessly to different cooking styles and flavours. Cauliflower is also enjoyed battered and fried as \"Gobi Pakoras\" or as a delicious addition to biryanis and pulavs. Its ability to absorb spices and its unique texture make it a beloved ingredient, offering a hearty and satisfying element to Indian meals. Don't forget to check out our delicious fruit recipe: https://www.bigbasket.com/cookbook/recipes/2144/cauliflower-cheese-pancakes/",
                "createdDate": "2024-07-07T15:55:49.807",
                "deliveryTimeSpan": "1-3 days",
                "categoryId": 58,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/l/10000074_19-fresho-cauliflower.jpg",
                "categoryName": "Beverages"
            },
            {
                "productId": 759,
                "productSku": "xyvyxikki",
                "productName": "Tata Tea Agni",
                "productPrice": 78452,
                "productShortName": "Sou",
                "productDescription": "<p>Slayem</p>",
                "createdDate": "2024-03-26T02:32:39.19",
                "deliveryTimeSpan": "2",
                "categoryId": 55,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/m/263613_4-tata-tea-agni-leaf-tea.jpg?tr=w-1080,q=80",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 1002,
                "productSku": "sopa",
                "productName": "sopa",
                "productPrice": 12,
                "productShortName": "sopa",
                "productDescription": "sopa de pollo",
                "createdDate": "2024-04-24T09:54:15.82",
                "deliveryTimeSpan": "1 - 2 dias",
                "categoryId": 55,
                "productImageUrl": "data:image/jpeg;base64,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",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 1056,
                "productSku": "NYkaa-SKINgenius",
                "productName": "NYkaa-SKINgenius",
                "productPrice": 100,
                "productShortName": "SKINgenius",
                "productDescription": "Sculpting and Hydrating product",
                "createdDate": "2024-04-28T01:27:38.517",
                "deliveryTimeSpan": "1 day",
                "categoryId": 90,
                "productImageUrl": "https://cosmeticsarenas.com/wp-content/uploads/2020/12/Nykaa-SKINgenius-Sculpting-Hydrating-Foundation-Best-Nykaa-Makeup-Products.jpg",
                "categoryName": "eyob"
            },
            {
                "productId": 690,
                "productSku": "Winkies",
                "productName": "Sita Phal",
                "productPrice": 12,
                "productShortName": "Sita Phal",
                "productDescription": "asdf",
                "createdDate": "2024-02-08T12:07:16.557",
                "deliveryTimeSpan": "2day",
                "categoryId": 55,
                "productImageUrl": "https://imgs.search.brave.com/6MoV_TX4m5_80qfouX2vReN1xDCc1pD_Psyz_je2E50/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMDYvMTE4MzA2/LTA1MC0xMjMzQjU3/NS9DdXN0YXJkLWFw/cGxlLmpwZz93PTMw/MA",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 950,
                "productSku": "shishira",
                "productName": "sreeshma",
                "productPrice": 20,
                "productShortName": "siri",
                "productDescription": "califlower",
                "createdDate": "2024-04-19T21:44:49.81",
                "deliveryTimeSpan": "1-2 days",
                "categoryId": 57,
                "productImageUrl": "data:image/webp;base64,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",
                "categoryName": "Bakery, Cakes & Dairy"
            },
            {
                "productId": 2223,
                "productSku": "ertyuytre",
                "productName": "werew",
                "productPrice": 150,
                "productShortName": "sdffwreff",
                "productDescription": "qwertyuiiuhg",
                "createdDate": "2024-06-17T12:52:46.633",
                "deliveryTimeSpan": "1-2 days",
                "categoryId": 55,
                "productImageUrl": "https://cdn.pixabay.com/photo/2012/04/13/21/00/bell-pepper-33623_1280.png",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 2320,
                "productSku": "101",
                "productName": "test product",
                "productPrice": 123,
                "productShortName": "sdd",
                "productDescription": "test data",
                "createdDate": "2024-08-14T09:45:38.637",
                "deliveryTimeSpan": "string",
                "categoryId": 55,
                "productImageUrl": "string",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 747,
                "productSku": "sd",
                "productName": "sdsd",
                "productPrice": 43,
                "productShortName": "sd",
                "productDescription": "sdsd",
                "createdDate": "2024-03-15T08:29:45.91",
                "deliveryTimeSpan": "34",
                "categoryId": 56,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/l/10000269_32-fresho-pomegranate.jpg",
                "categoryName": "Foodgrains, Oil & Masala"
            },
            {
                "productId": 915,
                "productSku": "Samosa",
                "productName": "Samosa",
                "productPrice": 10,
                "productShortName": "Samosa",
                "productDescription": "Samosa Recipe | Spicy Potato Samosa",
                "createdDate": "2024-04-18T13:57:05.197",
                "deliveryTimeSpan": "2day",
                "categoryId": 59,
                "productImageUrl": "https://vegecravings.com/wp-content/uploads/2017/03/samosa-recipe-step-by-step-instructions.jpg",
                "categoryName": "Snacks & Branded Foods"
            },
            {
                "productId": 845,
                "productSku": "12",
                "productName": "Coriander (Dhaniya)",
                "productPrice": 78,
                "productShortName": "sad",
                "productDescription": "demooosndaskd askldjlkas aslkdas dklsad asdja dasldas ,dasmd",
                "createdDate": "2024-04-12T12:47:42.807",
                "deliveryTimeSpan": "1-2days",
                "categoryId": 81,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/m/10000326_14-fresho-coriander-leaves.jpg?tr=w-1920,q=80",
                "categoryName": "Cat E"
            },
            {
                "productId": 760,
                "productSku": "sab",
                "productName": "Sablito",
                "productPrice": 2,
                "productShortName": "SAB",
                "productDescription": "<p>sablitooooo</p>",
                "createdDate": "2024-03-26T04:33:01.007",
                "deliveryTimeSpan": "1",
                "categoryId": 75,
                "productImageUrl": "https://ayshek.com/wp-content/uploads/2020/05/ca9d45_cf7c9af35b584771ae165a4399612f8amv2.png",
                "categoryName": "Snacks"
            },
            {
                "productId": 852,
                "productSku": "A-2000",
                "productName": "rtyuu",
                "productPrice": 900,
                "productShortName": "rtyu",
                "productDescription": "rtyu",
                "createdDate": "2024-04-13T20:18:38.06",
                "deliveryTimeSpan": "5",
                "categoryId": 63,
                "productImageUrl": "9",
                "categoryName": "Exotic Fruits & Veggies"
            },
            {
                "productId": 824,
                "productSku": "Rose",
                "productName": "Rose V1",
                "productPrice": 10,
                "productShortName": "Rose V1",
                "productDescription": "This flower basket consists of exotic red roses. This beautiful arrangement makes a perfect floral gift. The number of roses in the basket is 50 and it will cheer up a loved one on any special occasion as a token of love and appreciation.",
                "createdDate": "2024-04-02T12:21:39.423",
                "deliveryTimeSpan": "1 day",
                "categoryId": 64,
                "productImageUrl": "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-basket-of-50-red-roses-61671-m.jpg",
                "categoryName": "Flower Bouquets, Bunches"
            },
            {
                "productId": 2219,
                "productSku": "ERC",
                "productName": "Electric Rice Cooker",
                "productPrice": 3545,
                "productShortName": "Rice Cooker",
                "productDescription": "",
                "createdDate": "2024-06-14T11:59:41.037",
                "deliveryTimeSpan": "1-2 days",
                "categoryId": 93,
                "productImageUrl": "data:image/jpeg;base64,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",
                "categoryName": "Home and kitchen"
            },
            {
                "productId": 751,
                "productSku": "gfsdg",
                "productName": "Cabbage..",
                "productPrice": 5,
                "productShortName": "reghr",
                "productDescription": "Fresho Cauliflower, 1 pc (approx. 400 to 600 g)",
                "createdDate": "2024-03-17T03:56:20.86",
                "deliveryTimeSpan": "",
                "categoryId": 56,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/l/40200233_1-fresho-cabbage.jpg",
                "categoryName": "Foodgrains, Oil & Masala"
            },
            {
                "productId": 1122,
                "productSku": "لالالالالا",
                "productName": "yes this ",
                "productPrice": 100,
                "productShortName": "Ram",
                "productDescription": "Ram",
                "createdDate": "2024-05-21T15:50:37.357",
                "deliveryTimeSpan": "1452",
                "categoryId": 61,
                "productImageUrl": "https://api.pizzahut.io/v1/content/en-in/in-1/images/promo/hut300.25d8a775409b50ec421e1bfb74be6937.1.jpg",
                "categoryName": "Cuts & Sprouts"
            },
            {
                "productId": 992,
                "productSku": "m,m,m",
                "productName": "Raita",
                "productPrice": 10,
                "productShortName": "raita",
                "productDescription": "afa",
                "createdDate": "2024-04-23T16:00:37.323",
                "deliveryTimeSpan": "2day",
                "categoryId": 57,
                "productImageUrl": "https://th.bing.com/th?id=OSK.HEROoV6jKYtnp6Hiwo_HKure1pwyCuOyDnnugPb5kU_4338&w=472&h=280&c=13&rs=2&o=6&dpr=1.3&pid=SANGAM",
                "categoryName": "Bakery, Cakes & Dairy"
            },
            {
                "productId": 867,
                "productSku": "2",
                "productName": "qwe",
                "productPrice": 10,
                "productShortName": "qweq",
                "productDescription": "sfas",
                "createdDate": "2024-04-16T11:35:57.12",
                "deliveryTimeSpan": "2 days",
                "categoryId": 56,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/m/10000326_14-fresho-coriander-leaves.jpg?tr=w-1920,q=80",
                "categoryName": "Foodgrains, Oil & Masala"
            },
            {
                "productId": 1049,
                "productSku": "11",
                "productName": "qqq",
                "productPrice": 120,
                "productShortName": "qqss",
                "productDescription": "bb",
                "createdDate": "2024-04-27T02:53:46.117",
                "deliveryTimeSpan": "1",
                "categoryId": 55,
                "productImageUrl": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F6d%2FGood_Food_Display_-_NCI_Visuals_Online.jpg%2F800px-Good_Food_Display_-_NCI_Visuals_Online.jpg&tbnid=pLW_YpnHIjShJM&vet=12ahUKEwjVkqmr5eCFAxVX5TgGHW5eDPwQMygAegQIARBp..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFood&docid=F4fzcSFVcTK1kM&w=800&h=533&itg=1&q=food&ved=2ahUKEwjVkqmr5eCFAxVX5TgGHW5eDPwQMygAegQIARBp",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 744,
                "productSku": "fgdfg",
                "productName": "Promegranate",
                "productPrice": 566,
                "productShortName": "Promegranate",
                "productDescription": "With a ruby colour and an intensely floral, sweet-tart flavour, the pomegranate delivers both taste and beauty. You can remove the skin and the membranes to get at the delicious fruit with nutty seeds. Fresho Pomegranates are finely sorted and graded to deliver the best-tasting pomegranates to you.\n\n",
                "createdDate": "2024-03-15T08:17:11.86",
                "deliveryTimeSpan": "2-4 days",
                "categoryId": 55,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/m/10000269_32-fresho-pomegranate.jpg?tr=w-1920,q=80",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 1164,
                "productSku": "Vegetable",
                "productName": "Priyanka ",
                "productPrice": 10,
                "productShortName": "Priya",
                "productDescription": "",
                "createdDate": "2024-05-25T17:39:07.657",
                "deliveryTimeSpan": "10",
                "categoryId": 55,
                "productImageUrl": "",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 890,
                "productSku": "zxddd",
                "productName": "potato",
                "productPrice": 200,
                "productShortName": "potato",
                "productDescription": "d jkbjdbj",
                "createdDate": "2024-04-17T16:06:09.813",
                "deliveryTimeSpan": "1-2 days",
                "categoryId": 55,
                "productImageUrl": "https://images7.alphacoders.com/376/thumb-1920-376174.jpg",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 2248,
                "productSku": "SKU",
                "productName": "Pomegranate",
                "productPrice": 235,
                "productShortName": "Pomegranate",
                "productDescription": "Bursting with vibrant, jewel-like seeds, our Pomegranates are a feast for the senses. Grown organically, these luscious fruits offer a perfect blend of sweetness and tang. Ideal for snacking, salads, or juicing, they add a touch of elegance to any dish.",
                "createdDate": "2024-06-28T14:20:31.843",
                "deliveryTimeSpan": "2-3 Days",
                "categoryId": 55,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/l/20000708_14-fresho-pomegranate.jpg",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 1144,
                "productSku": "8989898 ",
                "productName": "pkpkpkpkpk",
                "productPrice": 0,
                "productShortName": "pkpkpkpkpk",
                "productDescription": "cxxc",
                "createdDate": "2024-05-22T23:47:04.937",
                "deliveryTimeSpan": "",
                "categoryId": 58,
                "productImageUrl": "https://th.bing.com/th?id=OIP.bPBCgvp9N0SUbVYJnBg2IQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
                "categoryName": "Beverages"
            },
            {
                "productId": 916,
                "productSku": "test bbb",
                "productName": "Pizza Diavola Big",
                "productPrice": 225,
                "productShortName": "Pizza",
                "productDescription": "testttt",
                "createdDate": "2024-04-18T15:11:32.89",
                "deliveryTimeSpan": "30-120 min",
                "categoryId": 57,
                "productImageUrl": "https://vibescafe.ro/wp-content/uploads/2020/03/pizza_diavola.jpg",
                "categoryName": "Bakery, Cakes & Dairy"
            },
            {
                "productId": 962,
                "productSku": "zz",
                "productName": "Capsicam Pizza123",
                "productPrice": 145,
                "productShortName": "pizza",
                "productDescription": "Pizza Images ",
                "createdDate": "2024-04-20T15:30:55.917",
                "deliveryTimeSpan": "1",
                "categoryId": 59,
                "productImageUrl": "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.jpg",
                "categoryName": "Snacks & Branded Foods"
            },
            {
                "productId": 1208,
                "productSku": "ABC123",
                "productName": "Veggie pizza nice",
                "productPrice": 20,
                "productShortName": "pizza",
                "productDescription": "yummy pizza mama",
                "createdDate": "2024-06-10T12:56:31.393",
                "deliveryTimeSpan": "30mins",
                "categoryId": 75,
                "productImageUrl": "https://media-cdn.tripadvisor.com/media/photo-s/12/68/de/a9/vegi.jpg",
                "categoryName": "Snacks"
            },
            {
                "productId": 839,
                "productSku": "1111",
                "productName": "pizaa",
                "productPrice": 0,
                "productShortName": "pizu",
                "productDescription": "ghkjhgfdsa",
                "createdDate": "2024-04-11T15:29:23.617",
                "deliveryTimeSpan": "58",
                "categoryId": 82,
                "productImageUrl": "https://th.bing.com/th/id/OIP.QRGIAm7af4Y98bJ01__KIQHaD4?w=323&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "categoryName": "string"
            },
            {
                "productId": 838,
                "productSku": "xyz",
                "productName": "Burger",
                "productPrice": 0,
                "productShortName": "pizu",
                "productDescription": "ghkjhgfdsa",
                "createdDate": "2024-04-11T15:28:01.66",
                "deliveryTimeSpan": "",
                "categoryId": 75,
                "productImageUrl": "https://th.bing.com/th/id/OIP.QRGIAm7af4Y98bJ01__KIQHaD4?w=323&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "categoryName": "Snacks"
            },
            {
                "productId": 840,
                "productSku": "8888",
                "productName": "Burger",
                "productPrice": 0,
                "productShortName": "pizu",
                "productDescription": "ghkjhgfdsa",
                "createdDate": "2024-04-11T15:34:03.787",
                "deliveryTimeSpan": "58",
                "categoryId": 65,
                "productImageUrl": "https://th.bing.com/th/id/OIP.QRGIAm7af4Y98bJ01__KIQHaD4?w=323&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
                "categoryName": "Atta, Flours & Sooji"
            },
            {
                "productId": 961,
                "productSku": "z",
                "productName": "Pink",
                "productPrice": 50,
                "productShortName": "Pink",
                "productDescription": "Wheat Flour, Calcium Carbonate, Iron, Nicotinamide, Thiamin",
                "createdDate": "2024-04-20T15:28:49.763",
                "deliveryTimeSpan": "1-2 Days",
                "categoryId": 83,
                "productImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6vZHzZSh1FqITMxfeuwLFI-9ywutF-OkiQA&s",
                "categoryName": "Fragrances"
            },
            {
                "productId": 925,
                "productSku": "0000",
                "productName": "Peas",
                "productPrice": 0,
                "productShortName": "Pea",
                "productDescription": "Fresh Peas from Pakistan",
                "createdDate": "2024-04-18T19:49:43.467",
                "deliveryTimeSpan": "1 Day",
                "categoryId": 55,
                "productImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaKTkUuw6dAsZfJh_H2GAUrxAciUDkQB49xQ&s",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 835,
                "productSku": "dfgg",
                "productName": "Panipuri",
                "productPrice": 550,
                "productShortName": "Panipuri",
                "productDescription": "fghjj",
                "createdDate": "2024-04-06T23:15:04.84",
                "deliveryTimeSpan": "1 day",
                "categoryId": 75,
                "productImageUrl": "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sneha-archanaskitchen.com/Sweet__Spicy_Pineapple_Pani_Puri_Recipe_.jpg",
                "categoryName": "Snacks"
            },
            {
                "productId": 756,
                "productSku": "okkk",
                "productName": "oats",
                "productPrice": 100,
                "productShortName": "ots",
                "productDescription": "testinggg",
                "createdDate": "2024-03-18T18:52:37.057",
                "deliveryTimeSpan": "",
                "categoryId": 59,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/l/40254376_3-muscleblaze-muscleblaze-peanut-butter-with-added-omega-creamy-1-kg.jpg",
                "categoryName": "Snacks & Branded Foods"
            },
            {
                "productId": 911,
                "productSku": "222",
                "productName": "Orange",
                "productPrice": 1000,
                "productShortName": "Orange",
                "productDescription": "Fresh Oranges Imported from Khanpur Pakistan",
                "createdDate": "2024-04-18T10:55:52.76",
                "deliveryTimeSpan": "1 Day",
                "categoryId": 55,
                "productImageUrl": "data:image/jpeg;base64,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",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 1055,
                "productSku": "on",
                "productName": "onion",
                "productPrice": 30,
                "productShortName": "onion",
                "productDescription": "good for healthy",
                "createdDate": "2024-04-27T22:23:12.193",
                "deliveryTimeSpan": "1-2 days",
                "categoryId": 55,
                "productImageUrl": "data:image/jpeg;base64,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",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 1179,
                "productSku": "sarfjlb",
                "productName": "Onion",
                "productPrice": 40,
                "productShortName": "Onion",
                "productDescription": "Onions are the world’s oldest cultivated vegetable. The colour of red onions is mainly attributable to anthocyanins found in the cells of the bulb’s scale leaves.",
                "createdDate": "2024-06-02T16:33:08.947",
                "deliveryTimeSpan": "1-5",
                "categoryId": 55,
                "productImageUrl": "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/05/20204137/shutterstock_1284082165-1-768x512.jpg",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 1078,
                "productSku": "sus",
                "productName": "Onion",
                "productPrice": 20,
                "productShortName": "Onion",
                "productDescription": "nice",
                "createdDate": "2024-05-09T12:29:30.163",
                "deliveryTimeSpan": "1 Day",
                "categoryId": 55,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/l/40075537_5-fresho-onion.jpg",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 906,
                "productSku": "Mustard Oil",
                "productName": "Mustard oil",
                "productPrice": 200,
                "productShortName": "oil",
                "productDescription": "Fortune Premium Kachi Ghani Pure Mustard Oil, 1Litre PET Bottle",
                "createdDate": "2024-04-18T07:26:43.17",
                "deliveryTimeSpan": "2day",
                "categoryId": 56,
                "productImageUrl": "https://m.media-amazon.com/images/I/61A1MNF8b2L._SL1500_.jpg",
                "categoryName": "Foodgrains, Oil & Masala"
            },
            {
                "productId": 782,
                "productSku": "abc11",
                "productName": "Odia Thali check",
                "productPrice": 30,
                "productShortName": "Odia Thali check",
                "productDescription": "Watermelon is a flowering plant species of the Cucurbitaceae family and the name of its edible fruit. A scrambling and trailing vine-like plant, it is a highly cultivated fruit worldwide, with more than 1,000 varieties.",
                "createdDate": "2024-04-01T18:25:15.83",
                "deliveryTimeSpan": "1-2days",
                "categoryId": 59,
                "productImageUrl": "https://i.ytimg.com/vi/hhymqTj9CsA/maxresdefault.jpg",
                "categoryName": "Snacks & Branded Foods"
            },
            {
                "productId": 1151,
                "productSku": "8",
                "productName": "neem",
                "productPrice": 200,
                "productShortName": "neem",
                "productDescription": "",
                "createdDate": "2024-05-24T10:35:45.927",
                "deliveryTimeSpan": "2",
                "categoryId": 63,
                "productImageUrl": "",
                "categoryName": "Exotic Fruits & Veggies"
            },
            {
                "productId": 686,
                "productSku": "110",
                "productName": "Mushroom",
                "productPrice": 100,
                "productShortName": "Mushroom",
                "productDescription": "Mango Fruits from MP",
                "createdDate": "2024-02-08T09:53:07.327",
                "deliveryTimeSpan": "10",
                "categoryId": 55,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/m/10000273_16-fresho-mushrooms-button.jpg?tr=w-1920,q=80",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 758,
                "productSku": "food",
                "productName": "Pomegranate",
                "productPrice": 30,
                "productShortName": "milk",
                "productDescription": "Quaker Oats 2kg | Rolled Oats | 100% Natural Wholegrain | Nutritious Breakfast Cereals | Porridge | Easy to Cook",
                "createdDate": "2024-03-19T13:17:29.077",
                "deliveryTimeSpan": "",
                "categoryId": 57,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/l/10000269_32-fresho-pomegranate.jpg",
                "categoryName": "Bakery, Cakes & Dairy"
            },
            {
                "productId": 776,
                "productSku": "Milk",
                "productName": "Milk",
                "productPrice": 60,
                "productShortName": "Milk",
                "productDescription": "Glass of milk with gable top package close up. Cow milk carton and milk cup isolated on white background. Vector illustration for milk, food service, dairy, beverages, gastronomy, health food",
                "createdDate": "2024-04-01T11:21:15.017",
                "deliveryTimeSpan": "1 day",
                "categoryId": 57,
                "productImageUrl": "https://as1.ftcdn.net/v2/jpg/01/06/68/88/1000_F_106688812_rVoRFXazgIMEUJdvffG9p0XvP8Lntf0a.jpg",
                "categoryName": "Bakery, Cakes & Dairy"
            },
            {
                "productId": 687,
                "productSku": "Alphanso Mangoes",
                "productName": "Alphanso Mangoes",
                "productPrice": 1000,
                "productShortName": "Mangoes",
                "productDescription": "Ratnagiri Alphanso mangoes",
                "createdDate": "2024-02-08T11:27:40.297",
                "deliveryTimeSpan": "1 day",
                "categoryId": 55,
                "productImageUrl": "https://www.mishry.com/wp-content/uploads/2020/05/mango-5224186_1280.jpg",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 738,
                "productSku": "SAC",
                "productName": "Mango",
                "productPrice": 100,
                "productShortName": "Mango",
                "productDescription": "mango fruit",
                "createdDate": "2024-03-07T12:16:22.86",
                "deliveryTimeSpan": "1 Day",
                "categoryId": 55,
                "productImageUrl": "https://plantskingdom.in/cdn/shop/products/Background-hd-Mango-Wallpaper-Download_700x700.jpg?v=1657427057",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 1046,
                "productSku": "xys",
                "productName": "mango",
                "productPrice": 345,
                "productShortName": "mango",
                "productDescription": "Banganpalli are sourced from Andhra Pradesh and known for their unique sweet and rich taste. They are moderately juicy and aromatic with a maize-yellow colour. Click here for delicious fruit recipes - https://www.bigbasket.com/flavors/collections/228/fresh-fruits/",
                "createdDate": "2024-04-26T10:51:31.82",
                "deliveryTimeSpan": "1 day",
                "categoryId": 55,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/l/1200345_2-bb-combo-mango-banganpalli.jpg",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 2244,
                "productSku": "nomore",
                "productName": "Maggi",
                "productPrice": 40,
                "productShortName": "Maggi",
                "productDescription": "Maggi, Good Food Good Luck",
                "createdDate": "2024-06-26T19:49:36.75",
                "deliveryTimeSpan": "2-3 hours",
                "categoryId": 75,
                "productImageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxP1eDo2a6r_aWbWRp6By5Va-r8romHyGU7w&s",
                "categoryName": "Snacks"
            },
            {
                "productId": 743,
                "productSku": "AD",
                "productName": "Local",
                "productPrice": 50,
                "productShortName": "LTC",
                "productDescription": "Test Description",
                "createdDate": "2024-03-12T23:04:26.233",
                "deliveryTimeSpan": "25-10-2024",
                "categoryId": 58,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/m/263613_4-tata-tea-agni-leaf-tea.jpg?tr=w-1080,q=80",
                "categoryName": "Beverages"
            },
            {
                "productId": 983,
                "productSku": "njhkhhl",
                "productName": " Loki",
                "productPrice": 20,
                "productShortName": "loki",
                "productDescription": "hilhihihihp",
                "createdDate": "2024-04-22T11:10:51.03",
                "deliveryTimeSpan": "1 day",
                "categoryId": 55,
                "productImageUrl": "https://assetscdn1.paytm.com/images/catalog/product/H/HO/HOMBOTTLE-GOURDRDRO688555EFF350F1/1563035031810_1..jpg?imwidth=320&impolicy=hq",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 661,
                "productSku": "Lemon",
                "productName": "Lemon",
                "productPrice": 40,
                "productShortName": "Lemons",
                "productDescription": "",
                "createdDate": "2024-01-29T17:03:02.9",
                "deliveryTimeSpan": "1 day",
                "categoryId": 55,
                "productImageUrl": "https://www.bigbasket.com/media/uploads/p/m/10000128_17-fresho-lemon.jpg?tr=w-1920,q=80",
                "categoryName": "Fruits & Vegetables"
            },
            {
                "productId": 2316,
                "productSku": "abcdef",
                "productName": "ledifinger",
                "productPrice": 45,
                "productShortName": "ledifinger",
                "productDescription": "ledi finger is best for human health",
                "createdDate": "2024-08-09T15:05:49.61",
                "deliveryTimeSpan": "1-3 days",
                "categoryId": 55,
                "productImageUrl": "https://freshunlimited.in/cdn/shop/products/Lady_Finger_612x.png?v=1609402730",
                "categoryName": "Fruits & Vegetables"
            }
        ];
    }
}


/***/ }),

/***/ "tiIO":
/*!*****************************************************!*\
  !*** ./src/app/products/indpro/indpro.component.ts ***!
  \*****************************************************/
/*! exports provided: IndproComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndproComponent", function() { return IndproComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/product.service */ "pW2F");
/* harmony import */ var _Services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/cart.service */ "P/aO");
/* harmony import */ var _home_container_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../home/container/nav/nav.component */ "R+oI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_container_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../home/container/footer/footer.component */ "dWZF");







class IndproComponent {
    constructor(activatedroute, productservice, cartService) {
        this.activatedroute = activatedroute;
        this.productservice = productservice;
        this.cartService = cartService;
        this.noprods = 0;
    }
    ngOnInit() {
        console.log('Hey this is not working');
        this.productIdd = this.activatedroute.snapshot.paramMap.get('id');
        this.productList = this.productservice.products.find((x) => x.productId == this.productIdd);
    }
    addtocart(item) {
        this.cartService.addtoCart(item, this.noprods);
    }
    plus() {
        this.noprods += 1;
    }
    minus() {
        if (this.noprods > 0) {
            this.noprods -= 1;
        }
    }
}
IndproComponent.ɵfac = function IndproComponent_Factory(t) { return new (t || IndproComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["productservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
IndproComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndproComponent, selectors: [["app-indpro"]], decls: 40, vars: 6, consts: [[1, "row", "justify-content-around"], [1, "col-lg-4"], [1, "border", "rounded"], ["href", "#"], ["alt", "Image", 1, "img-fluid", "rounded", "img1", 3, "src"], [1, "col-lg-6"], [1, "grey", "text-decoration-underline"], [1, "fw-bold", "mb-1"], [1, "grey"], [1, "grey", "text-decoration-line-through"], [1, "green"], [1, "fw-bold"], [1, "mb-1"], [1, "input-group", "quantity", "mb-5", 2, "width", "100px"], [1, "input-group-btn"], [1, "btn", "btn-sm", "btn-minus", "rounded-circle", "bg-light", "border", 3, "click"], [1, "fa", "fa-minus"], ["type", "text", 1, "form-control", "form-control-sm", "text-center", "border-0", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-sm", "btn-plus", "rounded-circle", "bg-light", "border", 3, "click"], [1, "fa", "fa-plus"], [1, "add-to-cart-container"], [1, "add-button", 3, "click"], [1, "white"], [1, "mb-4"]], template: function IndproComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fresho!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "MRP: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "You save: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "(inclusive of all taxes)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndproComponent_Template_button_click_25_listener() { return ctx.minus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndproComponent_Template_input_ngModelChange_27_listener($event) { return ctx.noprods = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndproComponent_Template_button_click_29_listener() { return ctx.plus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndproComponent_Template_button_click_32_listener() { return ctx.addtocart(ctx.productList); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Add to basket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Susp endisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder; chain pickerel hatchetfish, pencilfish snailfish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.productList.productImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productList.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx.productList.productPrice + 10, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ((ctx.productList.productPrice + 10 - ctx.productList.productPrice) / ctx.productList.productPrice * 100).toFixed(0), "% off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: \u20B9", ctx.productList.productPrice, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.noprods);
    } }, directives: [_home_container_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _home_container_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: [".img1[_ngcontent-%COMP%]{\r\n    height: 20%;\r\n    width: 80%;\r\n    margin-left: 10%;\r\n    margin-top: 10%;\r\n    margin-bottom: 10%;\r\n\r\n}\r\n\r\n.grey[_ngcontent-%COMP%]{\r\n    color: grey;\r\n}\r\n\r\n.green[_ngcontent-%COMP%]{\r\n    color:#476f00;\r\n}\r\n\r\n.add-button[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n border: none;\r\n    color: red;\r\n    width: 60%;\r\n    background-color: #cc0000;\r\n    border-radius: 8px 8px 8px 8px;\r\n    aspect-ratio: 6.05;\r\n    margin-bottom: 40px;\r\n\r\n  }\r\n\r\n.add-to-cart-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n\r\n    width: 100%;\r\n    max-width: 100%;\r\n    white-space: nowrap;\r\n    justify-content: start;\r\n  }\r\n\r\n.white[_ngcontent-%COMP%]{\r\n    color:white;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZHByby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVIOztHQUVHOztBQUNIO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjs7QUFFdEI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksU0FBUztDQUNaLFlBQVk7SUFDVCxVQUFVO0lBQ1YsVUFBVTtJQUNWLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjs7RUFFckI7O0FBQ0E7SUFDRSxhQUFhOztJQUViLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4Qjs7QUFJQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJpbmRwcm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltZ3tcclxuICAgIG1hcmdpbjogYXV0bztcclxufSAqL1xyXG5cclxuLyogLmJyZHJ7XHJcbiAgICBcclxufSAqL1xyXG4uaW1nMXtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcblxyXG59XHJcbi5ncmV5e1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi5ncmVlbntcclxuICAgIGNvbG9yOiM0NzZmMDA7XHJcbn1cclxuLmFkZC1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MwMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCA4cHggOHB4O1xyXG4gICAgYXNwZWN0LXJhdGlvOiA2LjA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHJcbiAgfVxyXG4gIC5hZGQtdG8tY2FydC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIH1cclxuICBcclxuXHJcblxyXG4gIC53aGl0ZXtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "v35Q":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart/cart.component */ "X4IP");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.module */ "ct+p");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class CartModule {
}
CartModule.ɵfac = function CartModule_Factory(t) { return new (t || CartModule)(); };
CartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CartModule });
CartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_2__["HOMEModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CartModule, { declarations: [_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_2__["HOMEModule"]], exports: [_cart_cart_component__WEBPACK_IMPORTED_MODULE_1__["CartComponent"]] }); })();


/***/ }),

/***/ "vFUg":
/*!***************************************************************!*\
  !*** ./src/app/home/container/products/products.component.ts ***!
  \***************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/product.service */ "pW2F");
/* harmony import */ var _Services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/search.service */ "Cjp7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function ProductsComponent_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "1 Kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ADD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ((p_r3.productPrice + 10 - p_r3.productPrice) / p_r3.productPrice * 100).toFixed(0), "% off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r3.productImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r3.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r3.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", p_r3.productPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/home/", p_r3.productId, "");
} }
function ProductsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Smart Basket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductsComponent_ng_container_0_div_4_Template, 21, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.products);
} }
function ProductsComponent_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "1 Kg ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ADD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ((p_r5.productPrice + 10 - p_r5.productPrice) / p_r5.productPrice * 100).toFixed(0), "% off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r5.productImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r5.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", p_r5.productPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/home/", p_r5.productId, "");
} }
function ProductsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Smart Basket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductsComponent_ng_container_1_div_4_Template, 21, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.products2);
} }
class ProductsComponent {
    constructor(productservice, searchService) {
        this.productservice = productservice;
        this.searchService = searchService;
        this.searchTexts = '';
    }
    ngOnInit() {
        this.products = this.productservice.products;
        this.searchService.getSearch().subscribe(res => {
            this.searchTexts = res;
            if (this.searchTexts !== '') {
                this.products2 = this.products.filter(x => x.productName.toLowerCase().includes(this.searchTexts.toLowerCase()));
                console.log('Text is changed ' + this.products2.productName);
            }
        });
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["productservice"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "row", "container2", "container-fluid"], [1, "smart-basket-title"], ["class", "col-lg-3 col-3", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-3"], [1, "product-card", "shadow"], [1, "product-image-container"], [1, "product-badge"], [1, "badge-text"], ["alt", "Green Capsicum", 1, "product-image", 3, "src"], [1, "product-brand"], [1, "product-name"], [1, "product-weight"], [1, "weight-text"], [1, "fa-solid", "fa-caret-down", "drop"], [1, "product-price"], [1, "add-to-cart-container"], [1, "fa-regular", "fa-bookmark", "cart-icon"], [1, "add-button", 3, "routerLink"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductsComponent_ng_container_0_Template, 5, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductsComponent_ng_container_1_Template, 5, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchTexts === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.searchTexts === ""));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".card-top[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    word-wrap: break-word;\r\n    background: #fff;\r\n    \r\n    \r\n    border-radius: .25rem;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 64px;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n    margin: 0px 15px;\r\n    text-align: center;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: blue;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    margin: 30px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 250px;\r\n    height: 200px;\r\n    margin: auto;\r\n    transition: 0.3s ease-in-out;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    transition: 0.3s ease-in-out;\r\n    transform: scale(1.1);\r\n}\r\n\r\n.bg-bskt[_ngcontent-%COMP%]{\r\n    background-color: #A0CD4A;\r\n }\r\n\r\n.container2[_ngcontent-%COMP%]{\r\n    background-color: \r\n    #ececec;\r\n    width: 83.6%;\r\n    position: relative;\r\n    margin: auto;\r\n    margin-top: 40px;\r\n   \r\n }\r\n\r\n.smart-basket-container[_ngcontent-%COMP%] {\r\n    background-color: #d9d9d9;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    padding: 22px 50px;\r\n    border: 1px solid #d9d9d9;\r\n  }\r\n\r\n.smart-basket-title[_ngcontent-%COMP%] {\r\n    color: #000;\r\n    font: 400 30px Inter, sans-serif;\r\n    margin-left: 4px;\r\n    margin-top: 20px;\r\n  }\r\n\r\n.product-card[_ngcontent-%COMP%] {\r\n    border-radius: 13px;\r\n    background-color: #fff;\r\n    display: flex;\r\n    margin-top: 44px;\r\n    width: 223px;\r\n    max-width: 100%;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    padding: 28px 14px 18px;\r\n    margin: auto;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    \r\n  }\r\n\r\n.product-image-container[_ngcontent-%COMP%] {\r\n    border-radius: 7px;\r\n    align-self: stretch;\r\n    display: flex;\r\n    width: 100%;\r\n    flex-direction: column;\r\n    color: var(--sds-color-text-brand-on-brand);\r\n    white-space: nowrap;\r\n    padding: 0 21px 21px 0;\r\n    border: 1px solid #d9d9d9;\r\n  }\r\n\r\n.product-badge[_ngcontent-%COMP%] {\r\n    border-radius: 9px 0 8px 0;\r\n    background-color: #476f00;\r\n    align-self: flex-start;\r\n    z-index: 10;\r\n    display: flex;\r\n    margin-top: -8px;\r\n    min-height: 33px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 9px 12px;\r\n\r\n  }\r\n\r\n.badge-text[_ngcontent-%COMP%] {\r\n    \r\n    align-self: stretch;\r\n    margin: auto 0;\r\n    color: white;\r\n  }\r\n\r\n.product-image[_ngcontent-%COMP%] {\r\n    aspect-ratio: 1.61;\r\n    object-fit: contain;\r\n    object-position: center;\r\n    width: 153px;\r\n    align-self: flex-end;\r\n    margin-top: -9px;\r\n    max-width: 100%;\r\n  }\r\n\r\n.product-brand[_ngcontent-%COMP%] {\r\n    color: #b3aeae;\r\n    line-height: 16px;\r\n    opacity: var(--sds-size-stroke-border);\r\n    margin-top: 28px;\r\n  }\r\n\r\n.product-name[_ngcontent-%COMP%] {\r\n    color: #000;\r\n    opacity: var(--sds-size-stroke-border);\r\n    margin-top: 0px;\r\n  }\r\n\r\n.product-weight[_ngcontent-%COMP%] {\r\n    border-radius: 7px;\r\n    align-self: stretch;\r\n    display: flex;\r\n    margin-top: 18px;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    color: #b3aeae;\r\n    justify-content: center;\r\n    padding: 6px 12px;\r\n    border: 1px solid #d9d9d9;\r\n  }\r\n\r\n.weight-text[_ngcontent-%COMP%] {\r\n    opacity: var(--sds-size-stroke-border);\r\n  }\r\n\r\n.product-price[_ngcontent-%COMP%] {\r\n    color: #000;\r\n    opacity: var(--sds-size-stroke-border);\r\n    margin-top: 13px;\r\n  }\r\n\r\n.add-to-cart-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin-top: 65px;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    gap: 20px;\r\n\r\n    white-space: nowrap;\r\n    justify-content: space-between;\r\n  }\r\n\r\n.cart-icon[_ngcontent-%COMP%] {\r\n    aspect-ratio: 1.05;\r\n    object-fit: contain;\r\n    object-position: center;\r\n    width: 39px;\r\n    border-radius: 2px;\r\n    border-radius: 7px;\r\n    align-self: stretch;\r\n    display: flex;\r\n    \r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    color: black;\r\n    justify-content: center;\r\n    padding: 6px 12px;\r\n    border: 1px solid #d9d9d9;\r\n  }\r\n\r\n.drop[_ngcontent-%COMP%]{\r\n   position: relative;\r\n   left: 270%;\r\n  }\r\n\r\n.add-button[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    border-color: red;\r\n    color: red;\r\n    width: 80%;\r\n    border-radius: 8px 8px 8px 8px;\r\n\r\n  }\r\n\r\n@media (max-width: 991px) {\r\n    .smart-basket-container[_ngcontent-%COMP%] {\r\n      padding: 0 20px;\r\n    }\r\n  \r\n    .product-card[_ngcontent-%COMP%] {\r\n      margin-top: 40px;\r\n    }\r\n  \r\n    .product-image-container[_ngcontent-%COMP%] {\r\n      padding-right: 20px;\r\n      white-space: initial;\r\n    }\r\n  \r\n    .product-badge[_ngcontent-%COMP%] {\r\n      white-space: initial;\r\n    }\r\n  \r\n    .product-weight[_ngcontent-%COMP%] {\r\n      padding-right: 20px;\r\n    }\r\n  \r\n    .add-to-cart-container[_ngcontent-%COMP%] {\r\n      margin-top: 40px;\r\n      white-space: initial;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGdCQUFnQjs7O0lBR2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSx5QkFBeUI7Q0FDNUI7O0FBRUE7SUFDRztXQUNPO0lBQ1AsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCOztDQUVuQjs7QUFJQTtJQUNHLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7O0VBRXJCOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7O0VBRW5COztBQUVBOztJQUVFLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWTtFQUNkOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsc0NBQXNDO0lBQ3RDLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxzQ0FBc0M7SUFDdEMsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLHNDQUFzQztFQUN4Qzs7QUFFQTtJQUNFLFdBQVc7SUFDWCxzQ0FBc0M7SUFDdEMsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFNBQVM7O0lBRVQsbUJBQW1CO0lBQ25CLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhOztJQUViLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCOztBQUVBO0dBQ0Msa0JBQWtCO0dBQ2xCLFVBQVU7RUFDWDs7QUFFQTtJQUNFLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFVBQVU7SUFDViw4QkFBOEI7O0VBRWhDOztBQUVBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsbUJBQW1CO01BQ25CLG9CQUFvQjtJQUN0Qjs7SUFFQTtNQUNFLG9CQUFvQjtJQUN0Qjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLGdCQUFnQjtNQUNoQixvQkFBb0I7SUFDdEI7RUFDRiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtdG9wIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIFxyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbn1cclxuXHJcbi5pdGVtIGltZyB7XHJcbiAgICB3aWR0aDogNjRweDtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgbWFyZ2luOiAwcHggMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW0gYTpob3ZlciB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuLmNhcmQgaW1nIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY2FyZCBpbWc6aG92ZXIge1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4uYmctYnNrdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBMENENEE7XHJcbiB9XHJcbiBcclxuIC5jb250YWluZXIye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogXHJcbiAgICAjZWNlY2VjO1xyXG4gICAgd2lkdGg6IDgzLjYlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgXHJcbiB9XHJcblxyXG5cclxuXHJcbiAuc21hcnQtYmFza2V0LWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDIycHggNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbWFydC1iYXNrZXQtdGl0bGUge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250OiA0MDAgMzBweCBJbnRlciwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDQ0cHg7XHJcbiAgICB3aWR0aDogMjIzcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAyOHB4IDE0cHggMThweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGNvbG9yOiB2YXIoLS1zZHMtY29sb3ItdGV4dC1icmFuZC1vbi1icmFuZCk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZzogMCAyMXB4IDIxcHggMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LWJhZGdlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweCAwIDhweCAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3NmYwMDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICAgbWluLWhlaWdodDogMzNweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDlweCAxMnB4O1xyXG5cclxuICB9XHJcbiAgXHJcbiAgLmJhZGdlLXRleHQge1xyXG4gICAgXHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9kdWN0LWltYWdlIHtcclxuICAgIGFzcGVjdC1yYXRpbzogMS42MTtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxNTNweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLXRvcDogLTlweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtYnJhbmQge1xyXG4gICAgY29sb3I6ICNiM2FlYWU7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIG9wYWNpdHk6IHZhcigtLXNkcy1zaXplLXN0cm9rZS1ib3JkZXIpO1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG9wYWNpdHk6IHZhcigtLXNkcy1zaXplLXN0cm9rZS1ib3JkZXIpO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC13ZWlnaHQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgY29sb3I6ICNiM2FlYWU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcclxuICB9XHJcbiAgXHJcbiAgLndlaWdodC10ZXh0IHtcclxuICAgIG9wYWNpdHk6IHZhcigtLXNkcy1zaXplLXN0cm9rZS1ib3JkZXIpO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdC1wcmljZSB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG9wYWNpdHk6IHZhcigtLXNkcy1zaXplLXN0cm9rZS1ib3JkZXIpO1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxuICB9XHJcbiAgXHJcbiAgLmFkZC10by1jYXJ0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogNjVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG5cclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJ0LWljb24ge1xyXG4gICAgYXNwZWN0LXJhdGlvOiAxLjA1O1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDM5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbiAgfVxyXG5cclxuICAuZHJvcHtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBsZWZ0OiAyNzAlO1xyXG4gIH1cclxuICBcclxuICAuYWRkLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDhweCA4cHggOHB4O1xyXG5cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuc21hcnQtYmFza2V0LWNvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5wcm9kdWN0LWNhcmQge1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnByb2R1Y3QtaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucHJvZHVjdC1iYWRnZSB7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnByb2R1Y3Qtd2VpZ2h0IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5hZGQtdG8tY2FydC1jb250YWluZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcclxuICAgIH1cclxuICB9XHJcbiAiXX0= */"] });


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
/* harmony import */ var _home_container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/container/container.component */ "1Isn");
/* harmony import */ var _products_indpro_indpro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/indpro/indpro.component */ "tiIO");
/* harmony import */ var _home_categories_categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/categories/categories.component */ "UvY/");
/* harmony import */ var _cart_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart/cart.component */ "X4IP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_container_container_component__WEBPACK_IMPORTED_MODULE_1__["ContainerComponent"]
    },
    {
        path: 'cart',
        component: _cart_cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"]
    },
    {
        path: 'home/:id',
        component: _products_indpro_indpro_component__WEBPACK_IMPORTED_MODULE_2__["IndproComponent"]
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginModule)
    },
    {
        path: 'home/categories/:category',
        component: _home_categories_categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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