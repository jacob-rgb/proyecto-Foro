(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+rxs":
/*!***********************************************************************!*\
  !*** ./src/app/components/widgets/search-box/search-box.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxComponent", function() { return SearchBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class SearchBoxComponent {
    constructor() {
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.posts = [];
        this.termino = "";
    }
    ngOnInit() {
    }
    // Función encargada de emitir al elemento padre el término de búsqueda indicado
    emitTermino() {
        if (this.termino.length > 0) {
            this.onSearch.emit(this.termino);
            this.termino = "";
        }
    }
}
SearchBoxComponent.ɵfac = function SearchBoxComponent_Factory(t) { return new (t || SearchBoxComponent)(); };
SearchBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBoxComponent, selectors: [["app-search-box"]], inputs: { posts: "posts" }, outputs: { onSearch: "onSearch" }, decls: 8, vars: 1, consts: [["id", "main", 1, "pt-3", "px-3", "pb-2"], [1, "form", "d-flex"], ["type", "text", "name", "buscar", "id", "buscar", 1, "form-control", 3, "ngModel", "ngModelChange", "keydown.enter"], ["type", "button", 1, "", 3, "click"], [1, "fas", "fa-search"]], template: function SearchBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Buscar: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchBoxComponent_Template_input_ngModelChange_4_listener($event) { return ctx.termino = $event; })("keydown.enter", function SearchBoxComponent_Template_input_keydown_enter_4_listener() { return ctx.emitTermino(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBoxComponent_Template_button_click_5_listener() { return ctx.emitTermino(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.termino);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["#main[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border: 3px solid var(--primary);\n  border-radius: 5px;\n  background-color: var(--fondo);\n}\n\n#buscar[_ngcontent-%COMP%] {\n  max-width: 100px;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  box-shadow: 2px 2px 3px var(--primary), -2px -2px 3px var(--primary) !important;\n  border-color: var(--primary);\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: var(--primary);\n  border-color: var(--secondary);\n  border-radius: 8px;\n  margin-left: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2VhcmNoLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLCtFQUFBO0VBQ0EsNEJBQUE7QUFHSjs7QUFEQTtFQUNJLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSUoiLCJmaWxlIjoic2VhcmNoLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXByaW1hcnkpIDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbmRvKTtcclxufVxyXG4jYnVzY2FyIHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogIDJweCAycHggM3B4IHZhcigtLXByaW1hcnkpLCAtMnB4IC0ycHggM3B4IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQgO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-box',
                templateUrl: './search-box.component.html',
                styleUrls: ['./search-box.component.scss']
            }]
    }], function () { return []; }, { onSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], posts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\DOCUMENTOSHDD\Proyectos\foroCopia\ProyectoPrueba\src\main.ts */"zUnb");


/***/ }),

/***/ "1WV5":
/*!*****************************************************************!*\
  !*** ./src/app/components/widgets/ref-bar/ref-bar.component.ts ***!
  \*****************************************************************/
/*! exports provided: RefBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefBarComponent", function() { return RefBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_compConexions_conex_resp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/compConexions/conex-resp.service */ "D4jO");



class RefBarComponent {
    constructor(conexS) {
        this.conexS = conexS;
        this.num = 0;
    }
    ngOnInit() {
        this.conexS.customNum.subscribe(number => this.num = number);
    }
}
RefBarComponent.ɵfac = function RefBarComponent_Factory(t) { return new (t || RefBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_compConexions_conex_resp_service__WEBPACK_IMPORTED_MODULE_1__["ConexRespService"])); };
RefBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefBarComponent, selectors: [["app-ref-bar"]], inputs: { post: "post" }, decls: 16, vars: 3, consts: [[1, "row"], [1, "col-md-3"], [1, "row", "justify-content-center"]], template: function RefBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Votos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Resp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Vistas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.likes + ctx.post.dislikes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.numresp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.post.vistas);
    } }, styles: [".col-md-3[_ngcontent-%COMP%] {\n  width: -webkit-min-content;\n  width: min-content;\n  font-size: small;\n  border: 2px solid var(--primary);\n  border-radius: 10px;\n  text-align: center;\n  margin: 0 1px;\n  padding: 6px;\n}\n\n@media screen and (max-width: 800px) {\n  .row[_ngcontent-%COMP%]:first-child {\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVmLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0VBQUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLDBCQUFBO0lBQ0EseUJBQUE7SUFDQSx1QkFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoicmVmLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2wtbWQtMyB7XHJcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSkgO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAxcHg7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAucm93OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ref-bar',
                templateUrl: './ref-bar.component.html',
                styleUrls: ['./ref-bar.component.scss']
            }]
    }], function () { return [{ type: src_app_services_compConexions_conex_resp_service__WEBPACK_IMPORTED_MODULE_1__["ConexRespService"] }]; }, { post: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "2kgN":
/*!*************************************************************************!*\
  !*** ./src/app/components/widgets/publi-block/publi-block.component.ts ***!
  \*************************************************************************/
/*! exports provided: PubliBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubliBlockComponent", function() { return PubliBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["box"];
function PubliBlockComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PubliBlockComponent_div_0_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.dropPubli(_r4, _r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PubliBlockComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PubliBlockComponent_div_0_div_2_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.premium == "false");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.premium == "false" ? ctx_r0.urlP : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjkAAABYCAMAAAAgAhaJAAAAjVBMVEX///8zPE4uOEpVXWsrNUgpM0djaXUwOUwhLULKzNBnbns4QVLw8PJ4fYmHi5YlL0Sytbz4+PlCS1wTIjrW2NzP0dTi5Oe3ur/z9PWip64eKkBsc39xd4Hn6OpLU2E9RleYnKRaYW/Awsesr7WBhpCOk52coKhIUGCSl5+GipMQIDmoq7N9gYsAGDRQV2c4LeTtAAAQoUlEQVR4nO2dC3equhKAAyYGX0WsovVR66Pa7u31//+8C2pbmJk8kISufa9zzjqry0MgCR+TycwkYewhD3nIQx7ykIc85CEPecj/msyu8tvVeMg/JMlkevg8La5y+vzYdVa/XaX/MzmcWwXZ2Hy+k1KRVuv8ji45gUss5bi1qXKy6jyNYpELv8rlb9HrTlNb9bMHFXy1erJZDrBv9rYlx5tSQZv69EE3n0+o+Vubbt8MDtNxuqqoup+isCDRKTEX6UQyu1R+F4oH6JK2KN61cK3+1/nU/PR0d1rPhQywSB6JxcvYqtm3Cn5XYT60KmaS2ZqX78uD1LJoJ+CFnuA9i3Krayu+HybafXjJNC73MvkmJBfRnL8uP4YddAO1PIlS74uDRRvLRQJOkMOJN2uWyEROMlmOOInNV13EerG1oL8LKhi7IWeH2i0+LIt2euVymAIkq3ZYKhMS5Ni/iJCLsHc8dSx67yKAnCDamdv4W+TMpm1a2xRF8ueumR0/5PRxu8OjpdIB5ARiaWyEW3JuvTc/ftjBA8mRvYmxjb9ETqfL7W7L5cI0ZvkhB/bM5c4vlmV7sCA2H4F4ICe/S9xbWFgNiJzsIzH1+u+Qk7af7W/K5wP9VMsPOWdCIcrYriwiJ4j+Gor4IeeieM5mtY3ICcTG1MbfIOfvkfieNRKftbMTL+SMn6ma2Jj9jCJHrjv6Ir7IyZ8dn0wKBJMTxAM9b79ATrqMTfYNlDDea5rhhZwBCXfYtpruYnICKfWK0yM52VsN3/UYEOQE/E3fxsbJmZyrKZyrxF21ceqDnPFIQbeVr4ggJ+Ab7QTLKznZ22hr1Q5FjhR6S7Vpcraj+27HR8pv1gc5Hwq8LWZJjCYn4Fr/mmdyAr7WzZYocjI1qSvSNDnToOpI9V2zteqr8UBOX1nNuY13kiQnmOvcQb7JyUxlTbeQ5ARhSzPCNkxOR4bmkgoJXxUDlgdyXiJVLYgOIppJkhNwzVDnnZwg7KkfT5MTiJFaTd5FjrQRahqy5UpwJBdxFEWxUF+i8uK7J2emsnJyH5mF0lGQI0P1u/NPTiDnyscryAkitR/qHnLWIxshbMn0SL8QyaPn0eLtsN1uX94Gx3nE6es4PbNxT85QM6SKN3N5BTlBuFaq/3vICUVcljxsLENl5cORynBRkaOJYN1BTjRkiY2gGyUb8qORYr342/+5PkmGyyOtecSCaoNzcvrwjqXqqgbNgqjICURXNcG6g5ywdXgpy8fTYLF5XSujgWFP8XglOWrnyj3k2HnDsLyTBnx0fMP6P31pzanWzylXrHNytrGqHy/tN4cglOQE8UlR5A5yOH2v/mS3H81p9sWCNlzU5ISqiUmD5HSo+QoPDrQC7+96lI+BaodzcoBulOV6y8DcVCU5ysHuLnJU9muy2i4EyQ6noyBqcgJ+pnVsg+SsiQGId9X25mpJtJ23cG+5Jmf8p3S7cDEo19yc/6MhJxB0aafkXFqxl2TkjYyCaMgJRJtuY2Pk7PBEV0bvOmf+7J0IUxCZI67J+QRpTrtO+QFcofJ/REdOOCI/FufkZIMupbU5GcnUkRPEZC5kY+Skr4gC2TOlng3xJEtiX7JjckDgQfYSGDeXphCEjpwg5JSZeg85hpgkWw0ItxSnkra05AScsuwaI+cFW51khcryF9tGeJ7omJxDuaYi++KG8/JPJm+glpxsiCbQ8aBzMntnidHhVIKinhwpiE+lKXJmGIH406LcATVJnqHScUvOrFeuqcgMxBXwDEaGibmenIB/4lfuQ+dkjTkR6RMEBnpyyAlWU+RgK0dheEHB2Q5oZu6WHBB4uL4eEAAVqrn1TQzkBHOsbb3onEzrdFH/hYSlYyCHCvQ3RU4bTqwsMl0vkvZQySO4xCk5SausXsJLaztlRSRHeqVjIkdiB7sfnUP1XzDHfhATOYHYwGc1RA7o+bwqlim9bIqGORiudkrOsNzRsnWd/S3KzzCEIEzkBGEAJ8eedE42w8KWIg5GGckJYtjihsh5gTWT3HZBB1QC2EZ2Sc4MOJHiW2bEtGwjY2OrJEZysrk58Ed4IydZQLdY2EblzOSgT70Zcmao9rHt0qVMC0ATiS/Kve6SnA6YAkZf728NbGTtgiQzOYEAjfBGDhuXoc8d8chQsCAH+hCbIWcF+j2rvP3K8QQVBis6XJIDGvsz/waGs1zr7mJBTiDKU0t/5LANtHRwByFyCP8zWEjTDDkdiL2wMe6+BEVKwzL9DslJgX7j30+CicmRzhtIrH1ALwIs3vJlIWeyhUobGzqQHL5Hhmk+wSp+7neQI97GE4PA2f8bfPe8Cn0T2AgQrXZIzr5cUd6dKf+XLgQByZFd9N3nn3URPo86Jz2Dh0u0WQVaHbzdEfkC8bLYxjsyu3omCY6gSfDdwvFGLyvY7cCd4o6c9Fh+UtEq3EL6NV4FSA7fj4mUmbA4t/eoc5IB7H6UpoPImbIDEbmInwpt9JGHHI7ALaClQjmjNAIdobLsXHBHDugtKYvPgVQtlbfB5AzYGPZB3g3Bz7fvUedgR/wztDIJctiC0DryZ2LghRwJyUGzI02vEwIHOznyQ04CAw8l3fYXtEITgsDkJGxKfMNi8I2OT3KQS2wOvUkUOSsihVOKb03bCDkrSK/N/izFlqNvxg85kA1RGlNh8Eqo424UOWRK5I+t6nG0Yh34WDTJocghVyv+bOfRCDkpJMd2T4ibIBPjjxdyoM8RrsoDr14TgiDJSagFx/Mv9e9T56RwooT6nyQn35YLVZh/Wde/Qw7SlnoZN6NzoFIPwX1gCEUdQCHJYf0WRkf2bl3hU+f0oY2Fgic0OWxHORO6tzY2QQ7SGXO7aOeXrBA5pa/dETnQ0S3PcO7ahReo3Jk0OWi8u9zklsDgU+cgXypy6CjIYXvKOLt+MP8mOeWYpyNyoGbD/jKQ4KVZUUKTw7aER/CWWe2THDS3tSaHfPnxZYRthJzxPzFawdtESKPAbzdUhSBU5LAhMdMVy1y3+RytZogcGDVUkkNOsOL8w/8dO8e4g1VZGrGQYSWpBeRv4BoqvS4XJTnsk1L/uQbwqXOQnRPDua2SHNoPlS+k+Z1ZecW5VSOzcjhpprYPgN2o+urV5MygP/erwj51zhiG0SLYQ2py2JZYqp1vttqMD7mmJxBuZiPX7smBgQfizTHszVaEINTksD6l/rMJlk+ds4UPtPIEfsmBimCd7iJHzE3SA01CMfya0Yeze3L+gv6hnZUw7CyeqKt05GRGHw5+hsdV36POQTs7P0NPlI4c9kFFsN7uICd+WaUGgbYlDFlKerWaQpqIeCZw1hPTawjhqI8iQBfRkUNk1mYXHNOuP3I+4ZdnE/Es9M2G8EOtT6AVfvJz9kjp1MqyAAaeC3JAtqhqtT+DyQdETi8zkMN2MFsp75AuzJx3N1qt2tDF2TJmWZTeT9oickTgD37IQdE+Qaw4UgoK+ICFYw7IQcnOstUlZQNfArktu54c/CERb8Khzpmg/kO9rycnM7HNe/T5ISeFA229bNKR82xSZEMGkpOCFxJQDgYDOQm11wIQh+QgUPGmCAZy2Na8EbEfcvrwU7U/fIPKYO+6zmAng5F2ElKb1RrIYauzER13o1UC+88igx2945dfIgenk9ZaNQOoq0/ORLmhpFmo/RBN5LCU8K+VxZ3Oge5Lm1Uz6B0n1OYGoDboyS7Iwcvt7FfqoTpGwBtRnxzKPWcr4Rnfz0gOm5r2aHWmc/DmjIS+N5KTzY9NC4j9kDND529ItMpR0XC8OrgHLqlNTnr3WJULsdGDmRxyglUUV+TMsCPXYnUw8Y5Twwjra105TojjdjsS4M0YojdwSW1yPmqoHPIFWpDDTnr174oc7Maj9l6yIIdN9BMsX+Sk+BMTNsdiErugrOE8uC45KXUgkb0QeyvYkNPXT7Ac2Tk7PCoKQtnbkMOG+u2ZfO28RPgwwjdjKWKzf5z+W5ccmH5cVXAIwoYctnrV2TpudA7Rf+S+T1bkYFu73EZ0vRtyCF0nuWlqPsRbeBBfeF1yjPMck6BIhRU5bKI7jdKJzpkGhMqheseOHDJH5Kc26HJHO0zC4MnlVnvdyT3JgQrw4xUHNcmBmX7VBZ21aEcO22osBwc6Z/VJZqBTl1qSM9NYyf7IWf2hHqfb1XZAfJOS44lBPXISNPkwn2kBC8CEZEty2EENbX1ythtqcIEujatYkoMXGhfbiK52tR/yjjKwdDtpU3xLgop65KDAQ898pgXMlBJgTxRbchQn9+VSk5x+50iOhYqVbrbksIniSA6v5CTL+rv3kweT1SIngdN+/jk2yid4YgiW+FuT08fb+H3dsgY5SeelFZHKAQZuvsSaHDKT+tZGdO29J4agM0Ng2t1N8hNDdnYnhoQ9quGQHLGzqNvs9jyYfmx1ChGKHYM9UazJYaujwnKwspBnpTfBskatOn+fFq2eoAcVGSgCzfbksDfFeGV5StExl9fX1/NFWplsrtK+yDUj4QSrSZ78EFxPKTp2314upxQt1KcUhfSJguhkmPjZLP+5BW/geMHJ42xMj5StckOtycnmnPSbsCBHjhZlGf15fp5HglPb9l/7T+W3r0BO0qW1jvXJaOFVvmzG7z+vP+cJCQKnrhDbaX/f03wymoTmxE10ZwophV/HvRXUHs9WQZEt2kGtxHQFcmjzz+58K5gJYvAukIfVXaUCOYy1yP52dxojeRDUS40ZsJSKvfnqkAOT4zmOI1OSQLdzOcG1CjmKPvFxGqMah0rkjMkD7jyTw/Z3oyOV0fUa5KxgCkes3TnyR6D2LJtHlchhS0oTuz8BlpqWfkklcliHGg59k5McVIOwQUIy+e4iNciBW8NL3Wm5RUHfXSkEUY0c8gg/96dO64bhauSghSLXNqLLnJKT749wz/HBfK1WBjXIgWdu2acq7uFDo8KbrkYOS4mjv9ySIyONy5VVJoe9E+e/eCeHdY7V02GE8uxSVoccZOjSi2AomcCixQUZFclhHWzcOiVHyHd9BaqSk5wQOg2Qk+9zXm3Ekvyki2/dTQ4KPNhNya8CnVPFEERVcojER4fkhOJk8lFVJYf1kR+qCXJYMhW6MDG8TxxPtR1/Nzlo22I6qEMLSuor7NRbmRz2Du/mjBw+P2+N88XK5GBDrxFyMmT3a9shS6w/dEc2svvJQSseyNQVlazgxLyw/q06OQyGZtyQI0XQtYnFVCcH7Y7eEDmZnTAQChd5ueXx3rhL053k4FVgioN1FQJdQQWNdQc5cKcCB+RIPl+/d6z8U3eQw/6CrcWbIidPHzlK7aAluTiezMfK300OWm4Nz3/RywTd8jv15Q5y4ASrJjkhF8FxYB6mbvIUhSVRe5sL8i5kKL+LxM2Rk31n0/1oroAn/2BOO6vRoy2ugZCQEtWvYpkGvPxjRG9MYXruj3yfEtEBt45tVkZdCn1XV2ByhnG5MWTTJOcimovz8rC1X0bLDpfY448cTWfc5pIsi0XOeIV9ex6Lyz/gP+L6b/m3wt+R4eC5y8NX230vu43IO+2GTNZr2X3lYphafjF70GwrOb/vYDFyibhGtq/wnl8T8/EGPsymKbtSkRNSgFubdm26g6ddJ11VUp//qvS3h89l+zy6nRlxbp8+hlV2SXnI/7Mk/XQ8yZOmJmlaYYLzkIc85CEPechDHvKQhzzkIe7kv5iQZ7AyON+GAAAAAElFTkSuQmCC", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class PubliBlockComponent {
    constructor(router) {
        this.router = router;
        this.urlP = "";
        this.premium = localStorage.getItem('isPremium');
    }
    ngOnInit() {
        setTimeout(() => {
            this.url = window.location.href;
        }, 50);
    }
    ngDoCheck() {
        setTimeout(() => {
            this.url = window.location.href;
        }, 50);
    }
    ngAfterViewInit() {
        this.mostrarcontent();
    }
    // Función encargada de mostrar u ocultar el contenido publicitario según parámetro booleano (this.premium) 
    dropPubli(img, cont) {
        if (this.premium == "false") {
            img.style.opacity = 0.3;
            cont.className += " otro";
        }
        else {
            img.style.opacity = 1;
            cont.classList.remove('otro');
        }
    }
    // Función que se encarga de mostrar el contenido animado (deslizandose hacia abajo)
    mostrarcontent() {
        this.content.nativeElement.classList.remove('animado');
        this.content.nativeElement.classList.add('mostrararriba');
    }
}
PubliBlockComponent.ɵfac = function PubliBlockComponent_Factory(t) { return new (t || PubliBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
PubliBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PubliBlockComponent, selectors: [["app-publi-block"]], viewQuery: function PubliBlockComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { urlP: "urlP" }, decls: 1, vars: 1, consts: [["class", "box", 4, "ngIf"], [1, "box"], ["box", ""], ["class", "boton", 4, "ngIf"], [1, "img"], ["imagenCont", ""], ["alt", "Header-Img", 1, "", 3, "src"], ["imagen", ""], [1, "boton"], [3, "click"]], template: function PubliBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PubliBlockComponent_div_0_Template, 7, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.url != "http://localhost:3800/404" && ctx.url != "http://localhost:4200/404" && ctx.url != "http://localhost:4200/cuenta");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".box[_ngcontent-%COMP%] {\n  width: 60%;\n  margin: 1em auto;\n  border: 3px solid var(--blue);\n  border-radius: 5px;\n  justify-content: center;\n  background-color: var(--fondo);\n}\n\n.boton[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 0;\n  padding: 1px;\n  justify-content: flex-end;\n}\n\n.box[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 1em;\n  justify-content: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n  display: flex;\n  max-height: 25px;\n  max-width: 25px;\n  align-items: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n.otro[_ngcontent-%COMP%]::after {\n  margin-top: 1em;\n  max-width: 200px;\n  position: absolute;\n  color: black;\n  z-index: 0;\n  content: \"Sentimos que nuestro contenido publicitario no haya sido de su agrado\" !important;\n}\n\n@media screen and (max-width: 700px) {\n  .box[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .otro[_ngcontent-%COMP%]::after {\n    margin-top: -1em;\n    max-width: 200px;\n    position: absolute;\n    color: black;\n    z-index: 0;\n    content: \"Sentimos que nuestro contenido publicitario no haya sido de su agrado\" !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHVibGktYmxvY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUdKOztBQURBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxVQUFBO0FBS0o7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMkZBQUE7QUFHSjs7QUFBQTtFQUVJO0lBQ0ksVUFBQTtFQUVOOztFQUNFO0lBQ0ksZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSwyRkFBQTtFQUVOO0FBQ0YiLCJmaWxlIjoicHVibGktYmxvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmx1ZSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbmRvKTtcclxufVxyXG4uYm90b24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcbi5ib3ggLmltZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNXB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG4ub3RybyB7XHJcbiBcclxufVxyXG4ub3Rybzo6YWZ0ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiBibGFjayA7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgY29udGVudDogXCJTZW50aW1vcyBxdWUgbnVlc3RybyBjb250ZW5pZG8gcHVibGljaXRhcmlvIG5vIGhheWEgc2lkbyBkZSBzdSBhZ3JhZG9cIiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG5cclxuICAgIC5ib3h7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm90cm86OmFmdGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMWVtO1xyXG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjayA7XHJcbiAgICAgICAgei1pbmRleDogMCA7XHJcbiAgICAgICAgY29udGVudDogXCJTZW50aW1vcyBxdWUgbnVlc3RybyBjb250ZW5pZG8gcHVibGljaXRhcmlvIG5vIGhheWEgc2lkbyBkZSBzdSBhZ3JhZG9cIiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PubliBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-publi-block',
                templateUrl: './publi-block.component.html',
                styleUrls: ['./publi-block.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["box"]
        }], urlP: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "2uCp":
/*!*******************************************************************!*\
  !*** ./src/app/components/widgets/tags-box/tags-box.component.ts ***!
  \*******************************************************************/
/*! exports provided: TagsBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsBoxComponent", function() { return TagsBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TagsBoxComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagsBoxComponent_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const tag_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.emitTag(tag_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r1);
} }
class TagsBoxComponent {
    constructor() {
        this.onTagClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.tags = ['javascript', 'mongoDb', 'Data-Science', 'full-stack', 'css', 'grid', 'flexbox', 'http', 'back-end', 'PHP', 'angular', 'react', 'mySQL', 'bootcamp', 'MVC', 'nodeJs', 'express', 'metheor', 'webpack'];
    }
    ngOnInit() {
    }
    /* Función encargada de emitir al elemento padre el término de búsqueda indicado
    * @param termino: string con el contenido que se desea emitir
    */
    emitTag(termino) {
        this.onTagClick.emit(termino);
    }
}
TagsBoxComponent.ɵfac = function TagsBoxComponent_Factory(t) { return new (t || TagsBoxComponent)(); };
TagsBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagsBoxComponent, selectors: [["app-tags-box"]], outputs: { onTagClick: "onTagClick" }, decls: 5, vars: 1, consts: [["id", "main", 1, "pt-3", "px-3", "pb-2"], [1, "row", "p-1"], ["class", "tag m-1", 3, "click", 4, "ngFor", "ngForOf"], [1, "tag", "m-1", 3, "click"]], template: function TagsBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Buscar por tags: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TagsBoxComponent_a_4_Template, 2, 1, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["#main[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border: 3px solid var(--primary);\n  border-radius: 5px;\n  background-color: var(--fondo);\n}\n\n.tag[_ngcontent-%COMP%] {\n  padding: 5px;\n  background-color: var(--blue);\n  color: white;\n  border-radius: 8px;\n}\n\n@media screen and (max-width: 700px) {\n  #main[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGFncy1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0k7SUFDSSxhQUFBO0VBRU47QUFDRiIsImZpbGUiOiJ0YWdzLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXByaW1hcnkpIDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbmRvKTtcclxufVxyXG4udGFnIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgI21haW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagsBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tags-box',
                templateUrl: './tags-box.component.html',
                styleUrls: ['./tags-box.component.scss']
            }]
    }], function () { return []; }, { onTagClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "481S":
/*!******************************************************!*\
  !*** ./src/app/validators/campos-iguales.service.ts ***!
  \******************************************************/
/*! exports provided: CamposIgualesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamposIgualesService", function() { return CamposIgualesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CamposIgualesService {
    constructor() { }
    /*  Función encargada de validar si los dos campos que se le pasan por parámetro coinciden;
    * @param campo1: string con el valor del primer campo a comparar;
    * @ param campo2: string con el valor del segundo campo a comparar;
    */
    camposIguales(campo1, campo2) {
        return (formGroup) => {
            var _a, _b, _c, _d;
            const pass1 = (_a = formGroup.get(campo1)) === null || _a === void 0 ? void 0 : _a.value;
            const pass2 = (_b = formGroup.get(campo2)) === null || _b === void 0 ? void 0 : _b.value;
            if (pass1 !== pass2) {
                (_c = formGroup.get(campo2)) === null || _c === void 0 ? void 0 : _c.setErrors({ noIguales: true });
                return { noIguales: true };
            }
            (_d = formGroup.get(campo2)) === null || _d === void 0 ? void 0 : _d.setErrors(null);
            return null;
        };
    }
}
CamposIgualesService.ɵfac = function CamposIgualesService_Factory(t) { return new (t || CamposIgualesService)(); };
CamposIgualesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CamposIgualesService, factory: CamposIgualesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CamposIgualesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5CZ+":
/*!***************************************************************************!*\
  !*** ./src/app/components/views/add-post-page/add-post-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddPostPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPostPageComponent", function() { return AddPostPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_PostModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/PostModel */ "fd6a");
/* harmony import */ var src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/posts-service.service */ "XDXz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_markdown_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-markdown-editor */ "ehUW");









const _c0 = ["container"];
function AddPostPageComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "T\u00EDtulo no V\u00E1lido: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "M\u00EDnimo 5 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPostPageComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Campo obligatorio *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddPostPageComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Contenido no V\u00E1lido: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "M\u00EDnimo 15 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddPostPageComponent {
    constructor(postS, fb, route, markdownService) {
        this.postS = postS;
        this.fb = fb;
        this.route = route;
        this.markdownService = markdownService;
        this.rows = 12;
        this.userInf = JSON.parse(sessionStorage.getItem('uInf')) || '';
        this.post = new _models_PostModel__WEBPACK_IMPORTED_MODULE_1__["post"](this.userInf.id, this.userInf.username, '', 0, 0, this.userInf.email, [], 0, '', '', 0);
    }
    ngOnInit() {
        this.editorOptions = {
            parser: (val) => this.markdownService.compile(val.trim())
        };
    }
    ngAfterViewInit() {
        this.mostrarcontent();
    }
    /* Función para crear nuevo post en la DB por medio de una petición http y redirecciona a la home
    * @param form: recibe un parámetro que hace referencia al formulario con el body que se envía a la petición para hacerle un reset;
    */
    addPost(form) {
        this.postS.savePost(this.post).subscribe((res) => {
            form.reset();
            window.alert('Post subido correctamente');
            this.route.navigate(['']);
        }, (err) => {
            console.log(err);
            form.reset();
        });
    }
    hidePreview(e) { console.log(e.getContent()); }
    // Función que se encarga de mostrar el contenido animado (deslizandose hacia arriba)
    mostrarcontent() {
        this.content.nativeElement.classList.remove('animado');
        this.content.nativeElement.classList.add('mostrarabajo');
    }
    clicks() {
        console.log(this.post);
    }
}
AddPostPageComponent.ɵfac = function AddPostPageComponent_Factory(t) { return new (t || AddPostPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_2__["PostsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownService"])); };
AddPostPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddPostPageComponent, selectors: [["app-add-post-page"]], viewQuery: function AddPostPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 38, vars: 8, consts: [[1, "container", "p-3"], ["container", ""], [1, "text-center"], [1, "cajaForm", "p-3", "m-3"], [3, "ngSubmit"], ["postForm", "ngForm"], [1, "form-row"], [1, "form-group", "col-md-4"], ["for", "title", 3, "click"], ["type", "text", "name", "title", "id", "form_title", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], ["class", "error", 4, "ngIf"], ["for", "categorie"], ["name", "categorie", "id", "categorie", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["categoria", "ngModel"], [1, "form-group", "align-items-start"], ["for", "contenido", 1, ""], ["required", "", "name", "contenido", "textareaId", "contenido", "name", "markdownText", 3, "ngModel", "options", "ngModelChange", "onFullscreenExit"], ["body", "ngModel"], [1, "form-group", "p-5", "text-right"], ["type", "submit", 1, "btn", "btn-warning", "text-light", 3, "disabled"], [1, "error"]], template: function AddPostPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "A\u00F1ade un nuevo Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddPostPageComponent_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.addPost(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddPostPageComponent_Template_label_click_9_listener() { return ctx.clicks(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "T\u00EDtulo de tu Post:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPostPageComponent_Template_input_ngModelChange_12_listener($event) { return ctx.post.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AddPostPageComponent_div_14_Template, 4, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Categor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPostPageComponent_Template_select_ngModelChange_19_listener($event) { return ctx.post.categoria = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Full-Stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Big-Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cybersecurity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AddPostPageComponent_div_27_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contenido:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AddPostPageComponent_div_32_Template, 4, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "angular-markdown-editor", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddPostPageComponent_Template_angular_markdown_editor_ngModelChange_33_listener($event) { return ctx.post.body = $event; })("onFullscreenExit", function AddPostPageComponent_Template_angular_markdown_editor_onFullscreenExit_33_listener() { return ctx.hidePreview; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Crear Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.post.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.touched && !_r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.post.categoria);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r4.touched && !_r4.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.touched && !_r7.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.post.body)("options", ctx.editorOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r1.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], angular_markdown_editor__WEBPACK_IMPORTED_MODULE_7__["AngularMarkdownEditorComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: var(--fondo);\n  border: 3px solid var(--primary);\n  border-radius: 10px;\n}\n\n.cajaForm[_ngcontent-%COMP%] {\n  padding: 1em;\n  border: 2px solid var(--primary);\n  border-radius: 10px;\n}\n\n#form_title[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 70%;\n  font-size: large;\n}\n\n#form_contenido[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  width: 90%;\n  height: 60vh;\n  font-size: large;\n}\n\n#form_id[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  max-width: 70px;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  box-shadow: 2px 2px 3px var(--primary), -2px -2px 3px var(--primary);\n  border-color: var(--primary) !important;\n}\n\ninput[formControlName][_ngcontent-%COMP%]:focus {\n  box-shadow: 2px 2px 3px var(--primary), -2px -2px 3px var(--primary);\n  border-color: var(--primary) !important;\n}\n\ntextarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  box-shadow: 2px 2px 3px var(--primary), -2px -2px 3px var(--primary) !important;\n  border-color: var(--primary) !important;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-color: var(--secondary);\n}\n\n@media screen and (max-width: 700px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n\n  #form_title[_ngcontent-%COMP%], #form_id[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .cajaForm[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    padding: 0.5rem !important;\n    border: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLXBvc3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksVUFBQTtBQUtKOztBQUZBO0VBQ0ksb0VBQUE7RUFDQSx1Q0FBQTtBQUtKOztBQUZBO0VBQ0ksb0VBQUE7RUFDQSx1Q0FBQTtBQUtKOztBQUhBO0VBQ0ksK0VBQUE7RUFDQSx1Q0FBQTtBQU1KOztBQUpBO0VBQ0ksa0NBQUE7QUFPSjs7QUFKQTtFQUNJO0lBQ0kscUJBQUE7RUFPTjs7RUFKRTtJQUNJLFVBQUE7RUFPTjs7RUFKRTtJQUNJLG9CQUFBO0lBQ0EsMEJBQUE7SUFDQSxZQUFBO0VBT047QUFDRiIsImZpbGUiOiJhZGQtcG9zdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb25kbyk7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmNhamFGb3JtIHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI2Zvcm1fdGl0bGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG4jZm9ybV9jb250ZW5pZG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA2MHZoO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG4jZm9ybV9pZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1heC13aWR0aDogNzBweDtcclxufVxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogIDJweCAycHggM3B4IHZhcigtLXByaW1hcnkpLCAtMnB4IC0ycHggM3B4IHZhcigtLXByaW1hcnkpIDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXRbZm9ybUNvbnRyb2xOYW1lXTpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiAgMnB4IDJweCAzcHggdmFyKC0tcHJpbWFyeSksIC0ycHggLTJweCAzcHggdmFyKC0tcHJpbWFyeSkgO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG59XHJcbnRleHRhcmVhOmZvY3VzLCBzZWxlY3Q6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogIDJweCAycHggM3B4IHZhcigtLXByaW1hcnkpLCAtMnB4IC0ycHggM3B4IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQgO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI2Zvcm1fdGl0bGUsICNmb3JtX2lkIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYWphRm9ybSB7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddPostPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-post-page',
                templateUrl: './add-post-page.component.html',
                styleUrls: ['./add-post-page.component.scss']
            }]
    }], function () { return [{ type: src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_2__["PostsServiceService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownService"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["container"]
        }] }); })();


/***/ }),

/***/ "6nF/":
/*!*************************************************************************!*\
  !*** ./src/app/components/widgets/add-comment/add-comment.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentComponent", function() { return AddCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_commentModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/commentModel */ "OeCN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/posts-service.service */ "XDXz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function AddCommentComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddCommentComponent {
    constructor(fb, postS, router) {
        this.fb = fb;
        this.postS = postS;
        this.router = router;
        this.userInf = JSON.parse(sessionStorage.getItem('uInf')) || '';
        this.comment = new _models_commentModel__WEBPACK_IMPORTED_MODULE_1__["comment"](this.userInf.id, this.postId, this.userInf.username, 0, 0, this.userInf.email, [], '');
    }
    ngOnInit() {
        this.comment.postId = this.postId;
    }
    /* Función encargada de añadir nuevo comentario a la DB
    * @param form: recibe el formulario para hacerle un reset
    */
    addComment(form) {
        this.postS.saveComment(this.comment).subscribe((res) => {
            this.postS.addResp(this.postId).subscribe(() => {
            });
            form.reset();
            this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
                this.router.navigate([`/posts/${this.postId}`]);
            });
        }, (err) => {
            console.log(err);
        });
    }
}
AddCommentComponent.ɵfac = function AddCommentComponent_Factory(t) { return new (t || AddCommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_3__["PostsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AddCommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddCommentComponent, selectors: [["app-add-comment"]], inputs: { postId: "postId" }, decls: 15, vars: 3, consts: [[1, "cajaAddComment"], [1, "form", 3, "ngSubmit"], ["commentForm", "ngForm"], [1, "form-group"], ["for", "contenido"], ["class", "error", 4, "ngIf"], ["name", "body", "id", "body", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["body", "ngModel"], [1, "form-group", "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-warning", "text-light", 3, "disabled"], [1, "error"]], template: function AddCommentComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A\u00F1ade un nuevo Cometario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddCommentComponent_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.addComment(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mensaje: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddCommentComponent_div_9_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddCommentComponent_Template_textarea_ngModelChange_10_listener($event) { return ctx.comment.body = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Crear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.touched && !_r2.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.comment.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".cajaAddComment[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding: 10px;\n  border: 2px solid var(--primary);\n  border-radius: 10px;\n}\n\n#postid[_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n#postcontenido[_ngcontent-%COMP%] {\n  height: 20vh;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: 2px 2px 3px var(--primary), -2px -2px 3px var(--primary);\n  border-color: var(--primary);\n}\n\n@media screen and (max-width: 700px) {\n  #postid[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLWNvbW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSjs7QUFEQTtFQUNJLFVBQUE7QUFJSjs7QUFGQTtFQUNJLG9FQUFBO0VBQ0EsNEJBQUE7QUFLSjs7QUFIQTtFQUNJO0lBQ0ksVUFBQTtFQU1OO0FBQ0YiLCJmaWxlIjoiYWRkLWNvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FqYUFkZENvbW1lbnQge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4jcG9zdGlkIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuI3Bvc3Rjb250ZW5pZG8ge1xyXG4gICAgaGVpZ2h0OiAyMHZoO1xyXG59XHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogIDJweCAycHggM3B4IHZhcigtLXByaW1hcnkpLCAtMnB4IC0ycHggM3B4IHZhcigtLXByaW1hcnkpIDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgICNwb3N0aWQge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddCommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-comment',
                templateUrl: './add-comment.component.html',
                styleUrls: ['./add-comment.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_3__["PostsServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, { postId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9MEO":
/*!**************************************************************!*\
  !*** ./src/app/services/resolves/onepostresolver.service.ts ***!
  \**************************************************************/
/*! exports provided: OnepostresolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnepostresolverService", function() { return OnepostresolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class OnepostresolverService {
    constructor(http) {
        this.http = http;
    }
    /* Resolver encargado de obtener el post coincidente con el id  que se pasa como parametro de la ruta
    * Devuelve un observable con el post coincidente
    */
    resolve(route) {
        const userId = route.params['id'];
        const url = `https://foro-app-jr.herokuapp.com/api/post/${userId}`;
        return this.http.get(url);
    }
}
OnepostresolverService.ɵfac = function OnepostresolverService_Factory(t) { return new (t || OnepostresolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OnepostresolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OnepostresolverService, factory: OnepostresolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnepostresolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "9yQK":
/*!***********************************************************!*\
  !*** ./src/app/components/widgets/post/post.component.ts ***!
  \***********************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PostComponent {
    constructor() { }
    ngOnInit() {
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], decls: 1, vars: 0, template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.scss']
            }]
    }], function () { return []; }, null); })();


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

/***/ "BMgT":
/*!*********************************************************************!*\
  !*** ./src/app/components/views/contact-us/contact-us.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["container"];
function ContactUsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email no V\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "M\u00EDnimo 10 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactUsComponent {
    constructor(fb) {
        this.fb = fb;
        this.formContact = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10)],]
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.mostrarcontent();
    }
    // Función que se encarga de mostrar el contenido animado (deslizandose hacia arriba)
    mostrarcontent() {
        this.content.nativeElement.classList.remove('animado');
        this.content.nativeElement.classList.add('mostrarabajo');
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], viewQuery: function ContactUsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 37, vars: 4, consts: [[1, "container", "p-4"], ["container", ""], [1, "row"], ["id", "col1", 1, "col-md-6"], [1, "pt-3"], ["id", "col2", 1, "col-md-6"], [1, "text-center"], ["action", "", 3, "formGroup"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "InputEmail", "aria-describedby", "emailHelp", "placeholder", "Enter email", "formControlName", "email", 1, "form-control"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["class", "error", 4, "ngIf"], ["for", "description"], ["name", "description", "id", "description", "cols", "30", "rows", "3", "formControlName", "description", 1, "form-control"], [1, "form-group", "text-center"], ["type", "submit", 1, "btn", 3, "disabled"], [1, "error"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Neoland ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " En Neoland estamos encantados de atender cualquier duda, problema o necesidad que te surga a lo largo de tu experiencia con nosotros; Escribe a nuestro soporte y en un m\u00E1ximo de 48 horas tendr\u00E1s respuesta de nuestros especialistas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " No olvides que tambi\u00E9n puedes contactarnos v\u00EDa: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " E-mail: NeolandForo@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Tlf: 965432778 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Fax: 941 446 227");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email adress: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "We'll never share your email with anyone else.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ContactUsComponent_div_28_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Message: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ContactUsComponent_div_33_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formContact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formContact.controls["email"].invalid && ctx.formContact.controls["email"].value.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formContact.controls["description"].invalid && ctx.formContact.controls["description"].value.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.formContact.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: var(--fondo);\n  border: 3px solid var(--primary);\n  border-radius: 10px;\n}\n\n#col1[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n#col2[_ngcontent-%COMP%] {\n  padding: 1em;\n  border: 3px solid var(--primary);\n  border-radius: 10px;\n}\n\n#col2[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #c5840c;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background: var(--secondary);\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: 2px 2px 3px var(--primary), -2px -2px 3px var(--primary);\n  border-color: var(--primary);\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0FBSUo7O0FBRkE7RUFDSSw0QkFBQTtBQUtKOztBQUFBO0VBQ00sb0VBQUE7RUFDQSw0QkFBQTtBQUdOOztBQURBO0VBQ0ksVUFBQTtBQUlKIiwiZmlsZSI6ImNvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbmRvKTtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4jY29sMSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcbiNjb2wyIHtcclxuICAgIHBhZGRpbmc6MWVtIDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXByaW1hcnkpIDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuI2NvbDIgaDQge1xyXG4gICAgY29sb3I6ICByZ2IoMTk3LCAxMzIsIDEyKTtcclxufVxyXG4uYnRuIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XHJcbn1cclxuI0lucHV0RW1haWwge1xyXG4gICBcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgICAgYm94LXNoYWRvdzogIDJweCAycHggM3B4IHZhcigtLXByaW1hcnkpLCAtMnB4IC0ycHggM3B4IHZhcigtLXByaW1hcnkpIDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-us',
                templateUrl: './contact-us.component.html',
                styleUrls: ['./contact-us.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["container"]
        }] }); })();


/***/ }),

/***/ "D4jO":
/*!**************************************************************!*\
  !*** ./src/app/services/compConexions/conex-resp.service.ts ***!
  \**************************************************************/
/*! exports provided: ConexRespService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConexRespService", function() { return ConexRespService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ConexRespService {
    constructor() {
        this.numRespuestas = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.customNum = this.numRespuestas.asObservable();
    }
}
ConexRespService.ɵfac = function ConexRespService_Factory(t) { return new (t || ConexRespService)(); };
ConexRespService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConexRespService, factory: ConexRespService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConexRespService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HqVv":
/*!************************************************!*\
  !*** ./src/app/guards/cuenta-usuario.guard.ts ***!
  \************************************************/
/*! exports provided: CuentaUsuarioGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaUsuarioGuard", function() { return CuentaUsuarioGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");




class CuentaUsuarioGuard {
    constructor(authS) {
        this.authS = authS;
    }
    prueba() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authS.validarcuenta().subscribe(data => {
                console.log(data);
            });
        });
    }
    canActivate(route, state) {
        return this.authS.validarcuenta();
    }
    canLoad(route, segments) {
        return this.authS.validarcuenta();
    }
}
CuentaUsuarioGuard.ɵfac = function CuentaUsuarioGuard_Factory(t) { return new (t || CuentaUsuarioGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
CuentaUsuarioGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CuentaUsuarioGuard, factory: CuentaUsuarioGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CuentaUsuarioGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "IUwK":
/*!*******************************************************************!*\
  !*** ./src/app/components/views/post-page/post-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: PostPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageComponent", function() { return PostPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/posts-service.service */ "XDXz");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _widgets_comments_box_comments_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../widgets/comments-box/comments-box.component */ "bwXQ");








const _c0 = ["container"];
const _c1 = ["prueba"];
function PostPageComponent_div_0_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Borrar Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostPageComponent_div_0_Template_h3_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.test(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Formulada: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "a las:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Activa: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " hoy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Vista:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Categor\u00EDa:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostPageComponent_div_0_Template_div_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.sumLike(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostPageComponent_div_0_Template_div_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.sumDislike(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", null, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "markdown", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, PostPageComponent_div_0_div_47_Template, 3, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " postId: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " userId: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "app-comments-box", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.defPost.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 20, ctx_r0.defPost.createdAt, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 23, ctx_r0.defPost.createdAt, "mediumTime"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.defPost.vistas, " veces ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.defPost.categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.tokenValid)("ngClass", ctx_r0.likesClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.defPost.likes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.tokenValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.defPost.dislikes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r0.defPost.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.defPost.userId === ctx_r0.userI.id ? "row justify-content-between" : "row justify-content-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.defPost.userId === ctx_r0.userI.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Formulada por usuario: ", ctx_r0.defPost.username, " a fecha de: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 26, ctx_r0.defPost.createdAt), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.defPost.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.defPost._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.defPost.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("postId", ctx_r0.defPost._id);
} }
class PostPageComponent {
    constructor(route, apiS, authS, router) {
        this.route = route;
        this.apiS = apiS;
        this.authS = authS;
        this.router = router;
        this.defPost = [];
        // Comprobar si hay un token para autorizar o no el uso de algún elemento
        this.tokenValid = this.authS.getUser();
    }
    get userI() {
        const info = JSON.parse(sessionStorage.getItem('uInf'));
        if (info === null) {
            return { id: '' };
        }
        return info;
    }
    ngOnInit() {
        this.route.data.subscribe(response => {
            this.defPost = response.data.post;
            this.likesClass = this.mostrarLikes();
        });
        window.scrollTo(0, 0);
    }
    ngAfterViewInit() {
        this.mostrarcontent();
        this.apiS.addView(this.defPost._id).subscribe((data) => {
        });
    }
    // Función que se encarga de mostrar el contenido animado (deslizandose hacia arriba)
    mostrarcontent() {
        this.content.nativeElement.classList.remove('animado');
        this.content.nativeElement.classList.add('mostrarabajo');
    }
    mostrarLikes() {
        const likesArray = this.userI.likes;
        console.log(likesArray);
        return likesArray.includes(this.defPost.id) ? 'marked' : 'no-marked';
    }
    // Función encargada de sumar un like a el post en la DB 
    sumLike() {
        this.apiS.addLikePost(this.defPost._id, this.userI.id).subscribe((data) => {
            console.log(data);
        });
    }
    // Función encargada de sumar un dislike a el post en la DB 
    sumDislike() {
        this.apiS.addDislikePost(this.defPost._id).subscribe(() => {
        });
    }
    // Función encargada de borrar post de la DB y redireccionar a la home
    borrarPost() {
        this.apiS.deletePost(this.defPost._id).subscribe(resp => {
            console.log(resp);
            this.router.navigate(['/home']);
        });
    }
    // Función de prueba no relevante
    test() {
        let negritaExp = /([\*])(.)\1/g;
        if (this.defPost.body.match(negritaExp)) {
            let negrita = this.defPost.body.match(negritaExp);
            console.log(negrita);
            let mensaje = `<p>${this.defPost.body}</p>`;
            this.prueba.nativeElement.innerHTML = mensaje;
        }
    }
}
PostPageComponent.ɵfac = function PostPageComponent_Factory(t) { return new (t || PostPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_2__["PostsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PostPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostPageComponent, selectors: [["app-post-page"]], viewQuery: function PostPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.prueba = _t.first);
    } }, decls: 15, vars: 1, consts: [["class", "container", 4, "ngIf"], ["id", "modalPost", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn"], ["type", "button", "data-dismiss", "modal", 1, "btn", 3, "click"], [1, "container"], ["container", ""], [1, "row", "p-3"], [1, "col"], [1, "", 3, "click"], [1, "grey"], [1, "container", "noborder"], [1, "row"], ["id", "colLike", 1, "col-md-1"], [1, "m-3", 3, "click"], ["id", "like", 3, "disabled", "ngClass"], [1, "far", "fa-thumbs-up", "fa-2x"], ["id", "dislike", 3, "disabled"], [1, "far", "fa-thumbs-down", "fa-2x"], [1, "col-md-11"], ["prueba", ""], [3, "data"], ["class", "col-lg-4", 4, "ngIf"], [1, "col-lg-4"], [1, "postInfo"], ["src", "../../../../assets/imgUserprueba.png", "alt", "", "width", "30", "height", "30"], [1, "p-1"], [3, "postId"], ["data-toggle", "modal", "data-target", "#modalPost", 1, "btn", "mb-2"]], template: function PostPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostPageComponent_div_0_Template, 69, 28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00BF Estas seguro de que deseas borrar el post ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostPageComponent_Template_button_click_13_listener() { return ctx.borrarPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Si, Estoy seguro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.defPost);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownComponent"], _widgets_comments_box_comments_box_component__WEBPACK_IMPORTED_MODULE_6__["CommentsBoxComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  border: 3px solid var(--primary);\n  border-radius: 8px;\n  padding: 10px;\n  background-color: var(--fondo);\n}\n\n.grey[_ngcontent-%COMP%] {\n  color: grey;\n  margin: 5px;\n}\n\n.noborder[_ngcontent-%COMP%] {\n  border: none !important;\n}\n\n.postInfo[_ngcontent-%COMP%] {\n  background: rgba(236, 187, 94, 0.6);\n  padding: 5px;\n}\n\n#like[_ngcontent-%COMP%] {\n  color: #53c953;\n  border: none;\n}\n\n#dislike[_ngcontent-%COMP%] {\n  color: red;\n  border: none;\n}\n\n#like[_ngcontent-%COMP%]:disabled, #dislike[_ngcontent-%COMP%]:disabled {\n  color: gray;\n}\n\nhr[_ngcontent-%COMP%] {\n  background-color: var(--primary);\n}\n\n#modalPost[_ngcontent-%COMP%] {\n  top: 30%;\n}\n\nmarkdown[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 95% !important;\n  margin: 0 auto;\n  object-fit: cover;\n}\n\n.marked[_ngcontent-%COMP%] {\n  background-color: #1e831e;\n  color: white !important;\n}\n\n@media screen and (max-width: 700px) {\n  #colLike[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccG9zdC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLHVCQUFBO0FBR0o7O0FBREE7RUFDSSxtQ0FBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBS0Y7O0FBSEE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUhBOztFQUVJLFdBQUE7QUFNSjs7QUFIQTtFQUNJLGdDQUFBO0FBTUo7O0FBSEE7RUFDSSxRQUFBO0FBTUo7O0FBSEE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQU1KOztBQUhBO0VBQ0kseUJBQUE7RUFDQSx1QkFBQTtBQU1KOztBQUhBO0VBQ0k7SUFDSSxhQUFBO0VBTU47QUFDRiIsImZpbGUiOiJwb3N0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbmRvKTtcclxufVxyXG4uZ3JleSB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcbi5ub2JvcmRlciB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4ucG9zdEluZm8ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIzNiwgMTg3LCA5NCwgMC42KTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4jbGlrZSB7XHJcbiAgY29sb3I6IHJnYig4MywgMjAxLCA4Myk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbiNkaXNsaWtlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbiNsaWtlOmRpc2FibGVkLFxyXG4jZGlzbGlrZTpkaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuXHJcbiNtb2RhbFBvc3Qge1xyXG4gICAgdG9wOiAzMCU7XHJcbn1cclxuXHJcbm1hcmtkb3duIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLm1hcmtlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsIDEzMSwgMzApO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAjY29sTGlrZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-page',
                templateUrl: './post-page.component.html',
                styleUrls: ['./post-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_2__["PostsServiceService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["container"]
        }], prueba: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["prueba"]
        }] }); })();


/***/ }),

/***/ "KRBT":
/*!*************************************************!*\
  !*** ./src/app/services/interceptor.service.ts ***!
  \*************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class InterceptorService {
    constructor(router) {
        this.router = router;
    }
    // Interceptor encargado de incluir el header "x-token" en todas las peticiones que se hacen
    intercept(req, next) {
        const token = sessionStorage.getItem('accesToken');
        let request = req;
        if (token) {
            request = req.clone({
                setHeaders: {
                    "x-token": token
                }
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            if (err.status === 401) {
                this.router.navigateByUrl('/home');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }));
    }
}
InterceptorService.ɵfac = function InterceptorService_Factory(t) { return new (t || InterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
InterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InterceptorService, factory: InterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 30, vars: 0, consts: [[1, "footer"], [1, "row", "mt-2"], [1, "col-md-6"], [1, "list-group"], [1, "list-group-item"], ["href", ""], [1, "formContainer"], ["action", "", 1, "form"], ["type", "email", "name", "email", "id", "email", "placeholder", "Correo electr\u00F3nico:", 1, "form-control", "mb-2"], ["name", "mensaje", "id", "mensaje", "placeholder", "\u00BF En que te podemos ayudar ?", 1, "form-control"], [1, "btn", "mt-1", "form-control"], [1, "row", "my-3", "justify-content-center"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pol\u00EDtica de Privacidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pol\u00EDtica de Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pol\u00EDticas del Foro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Derechos de Autor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Alg\u00FAn Problema ? - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cont\u00E1ctanos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "@Copyright 2021 Autor: Jacobo Ram\u00EDrez Rivera");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["*[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 20px;\n  background-color: rgba(24, 21, 21, 0.7);\n  position: relative;\n  z-index: 1;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  background-color: #2c2b2b;\n  text-align: center;\n}\n\n.formContainer[_ngcontent-%COMP%] {\n  padding: 8px;\n  border: 2px solid var(--primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLGdDQUFBO0FBQUoiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDIxLCAyMSwgMC43KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0MywgNDMpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmZvcm1Db250YWluZXIge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OeCN":
/*!****************************************!*\
  !*** ./src/app/models/commentModel.ts ***!
  \****************************************/
/*! exports provided: comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comment", function() { return comment; });
class comment {
    constructor(userId, postId, userName, likes, dislikes, email, imgs, body) {
        this.userId = userId;
        this.postId = postId;
        this.userName = userName;
        this.likes = likes;
        this.dislikes = dislikes;
        this.email = email;
        this.imgs = imgs;
        this.body = body;
    }
}


/***/ }),

/***/ "QXgJ":
/*!*********************************************************************!*\
  !*** ./src/app/components/widgets/baby-yoda/baby-yoda.component.ts ***!
  \*********************************************************************/
/*! exports provided: BabyYodaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BabyYodaComponent", function() { return BabyYodaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BabyYodaComponent {
    constructor() { }
    ngOnInit() {
    }
}
BabyYodaComponent.ɵfac = function BabyYodaComponent_Factory(t) { return new (t || BabyYodaComponent)(); };
BabyYodaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BabyYodaComponent, selectors: [["app-baby-yoda"]], decls: 11, vars: 0, consts: [[1, "caja"], ["id", "y-body"], ["id", "y-head"], ["id", "left-eye"], ["id", "right-eye"], ["id", "mouth"], ["id", "left-ear"], ["id", "right-ear"], ["id", "cup"], ["id", "steam"]], template: function BabyYodaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "~");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@keyframes blink {\n  0% {\n    background: linear-gradient(rgba(237, 225, 209, 0.5) 0, #000 0);\n  }\n  1% {\n    background: linear-gradient(rgba(237, 225, 209, 0.5) 30%, #000 0);\n  }\n  1.5% {\n    background: linear-gradient(rgba(237, 225, 209, 0.5) 60%, #000 0);\n  }\n  2% {\n    background: linear-gradient(rgba(237, 225, 209, 0.5) 100%, #000 0);\n  }\n  2.1% {\n    background: linear-gradient(rgba(237, 225, 209, 0.5) 0, #000 0);\n  }\n  100% {\n    background: linear-gradient(rgba(237, 225, 209, 0.5) 0, #000 0);\n  }\n}\n@keyframes blink-dot {\n  0% {\n    opacity: 1;\n  }\n  1% {\n    opacity: 0.5;\n  }\n  1.5% {\n    opacity: 0;\n  }\n  2% {\n    opacity: 0;\n  }\n  2.1% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes left-ear-twitch {\n  0% {\n    transform: rotate(8deg) translateY(0);\n  }\n  1% {\n    transform: rotate(6deg) translateY(3px);\n  }\n  2% {\n    transform: rotate(8deg) translateY(0);\n  }\n  100% {\n    transform: rotate(8deg) translateY(0);\n  }\n}\n@keyframes right-ear-twitch {\n  0% {\n    transform: rotate(-8deg) translateY(0);\n  }\n  1.5% {\n    transform: rotate(-6deg) translateY(3px);\n  }\n  2% {\n    transform: rotate(-8deg) translateY(0);\n  }\n  100% {\n    transform: rotate(-8deg) translateY(0);\n  }\n}\n@keyframes headbob {\n  0% {\n    bottom: -3px;\n    transform: rotate(0);\n  }\n  5% {\n    bottom: -5px;\n    transform: rotate(2deg);\n  }\n  6% {\n    bottom: -5px;\n    transform: rotate(0);\n  }\n  8% {\n    bottom: -8px;\n    transform: rotate(-2deg);\n  }\n  10% {\n    bottom: -3px;\n    transform: rotate(0);\n  }\n}\n@keyframes oohh {\n  0% {\n    width: 100%;\n    border-bottom: 1px solid #709F70;\n  }\n  10% {\n    width: 5px;\n    border-bottom: 5px solid #709F70;\n  }\n  50% {\n    width: 100%;\n    border-bottom: 1px solid #709F70;\n  }\n}\n@keyframes sip {\n  0% {\n    top: calc(100% + 5px);\n  }\n  10% {\n    top: calc(100% - 10px);\n  }\n  30% {\n    top: calc(100% + 5px);\n  }\n}\n@keyframes steam {\n  0% {\n    transform: rotateZ(90deg) scale(1);\n    opacity: 0.4;\n  }\n  3% {\n    transform: rotateZ(90deg) scale(1.3);\n    opacity: 0.2;\n  }\n  5% {\n    transform: rotateZ(90deg) scale(1.5);\n    opacity: 0.1;\n  }\n  7% {\n    transform: rotateZ(90deg) scale(1.8);\n    opacity: 0;\n  }\n  100% {\n    transform: rotateZ(90deg) scale(0);\n    opacity: 0;\n  }\n}\n#y-body[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 90px;\n  background: none;\n  border-radius: 5px 5px 30px 30px;\n  border-bottom: 80px solid #937D62;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  position: relative;\n  z-index: 8;\n}\n#y-body[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background: repeating-linear-gradient(75deg, #D3CBC0, #BDB6AC 2%);\n  height: 20px;\n  width: calc(100% + 10px);\n  display: block;\n  position: absolute;\n  bottom: -10px;\n  left: -5px;\n  border-radius: 5px;\n  z-index: 10;\n  filter: drop-shadow(0 0 1px #BDB6AC);\n}\n#y-body[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 5px;\n  border-right: 5px solid #847058;\n  height: 100%;\n  position: absolute;\n  left: 46%;\n  top: 80px;\n  filter: drop-shadow(-1px -1px 1px #76644F);\n  transform: rotate(4deg);\n  border-radius: 0 0 100%/50px 100px;\n}\n#y-head[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 80px;\n  background: linear-gradient(#6E936E 2px, #8AB88A);\n  border-radius: 100% 100%;\n  position: absolute;\n  bottom: -3px;\n  z-index: 5;\n  left: -5px;\n  display: flex;\n  justify-content: center;\n  filter: drop-shadow(0 -1px 2px rgba(110, 147, 110, 0.6));\n  animation: 12s headbob infinite;\n}\n#y-head[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  height: 5px;\n  width: 8px;\n  background: #7DB17D;\n  display: flex;\n  align-self: center;\n  border-radius: 100%;\n  z-index: 3;\n  filter: drop-shadow(0 1px 1px #6E936E);\n}\n#left-eye[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 20px;\n  background: #000;\n  display: inline-block;\n  position: absolute;\n  bottom: 48%;\n  left: 18%;\n  border-radius: 100%;\n  box-shadow: 0 0 2px 3px rgba(237, 225, 209, 0.5);\n  animation: 10s blink infinite;\n}\n#left-eye[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  background: #fff;\n  width: 2px;\n  height: 2px;\n  position: absolute;\n  top: 15%;\n  left: 25%;\n  border-radius: 100%;\n  animation: 10s blink-dot infinite;\n}\n#right-eye[_ngcontent-%COMP%] {\n  height: 15px;\n  width: 20px;\n  background: #000;\n  display: inline-block;\n  position: absolute;\n  bottom: 48%;\n  right: 20%;\n  border-radius: 100%;\n  box-shadow: 0 0 2px 3px rgba(237, 225, 209, 0.5);\n  animation: 10s blink infinite;\n}\n#right-eye[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  background: #fff;\n  width: 2px;\n  height: 2px;\n  position: absolute;\n  top: 15%;\n  left: 25%;\n  border-radius: 100%;\n  animation: 10s blink-dot infinite;\n}\n#mouth[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #97C097, #8AB88A);\n  width: 25px;\n  height: 20px;\n  border-radius: 100%;\n  position: absolute;\n  top: 49%;\n}\n#mouth[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 11px;\n  margin: auto;\n  background: repeating-linear-gradient(90deg, #97C097 1px, #8AB88A 5px, #97C097 1px);\n  border-top: none;\n  border-bottom: 1px solid #709F70;\n  border-radius: 100% 100% 30px 30px;\n  animation: 12s oohh infinite;\n}\n#left-ear[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 35px;\n  background: linear-gradient(#6E936E 2px, #8AB88A);\n  border-radius: 1px 2px 0 100%;\n  z-index: 1;\n  position: absolute;\n  top: 5px;\n  left: -47px;\n  animation: 8s left-ear-twitch infinite;\n}\n#left-ear[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  background: linear-gradient(200deg, #E5C3C8 40%, #8AB88A);\n  width: 48px;\n  height: 28px;\n  border-radius: 5px 5px 5px 100%;\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  opacity: 0.6;\n}\n#right-ear[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 35px;\n  background: linear-gradient(#6E936E 2px, #8AB88A);\n  border-radius: 2px 1px 100% 0;\n  position: absolute;\n  right: -47px;\n  top: 5px;\n  transform: rotate(-8deg);\n  animation: 8s right-ear-twitch infinite;\n}\n#right-ear[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  background: linear-gradient(-200deg, #E5C3C8 40%, #8AB88A);\n  width: 48px;\n  height: 28px;\n  border-radius: 5px 5px 100% 5px;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  opacity: 0.6;\n}\n#cup[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 23px;\n  border-radius: 3px 3px 10px 10px;\n  background: #602c2c;\n  position: absolute;\n  left: calc(50% - 15px);\n  top: calc(100% + 5px);\n  z-index: 20;\n  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));\n  animation: 15s sip infinite;\n}\n#cup[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  background: linear-gradient(90deg, #6E936E 20%, #8AB88A);\n  height: 15px;\n  width: 28px;\n  position: absolute;\n  left: -20px;\n  top: 6px;\n  border-radius: 20px 8px 50px 30px;\n  transform: rotate(-18deg);\n  filter: drop-shadow(-4px 1px 0 #BDB6AC);\n}\n#cup[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  background: linear-gradient(90deg, #8AB88A 20%, #6E936E);\n  height: 15px;\n  width: 28px;\n  border-radius: 8px 30px 20px 50px;\n  position: absolute;\n  right: -15px;\n  top: 12px;\n  transform: rotate(25deg);\n  filter: drop-shadow(3px 1px 0 #BDB6AC);\n}\n#steam[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  transform: rotateZ(90deg);\n  bottom: 0.3rem;\n  left: -0.23rem;\n  color: #fff;\n  font-size: 20px;\n  animation: 5s steam infinite;\n  z-index: 1;\n}\n#steam[_ngcontent-%COMP%]:before {\n  content: \"~\";\n  color: #fff;\n  position: absolute;\n  top: 0.5rem;\n}\n#steam[_ngcontent-%COMP%]:after {\n  content: \"~\";\n  color: #fff;\n  position: absolute;\n  top: -0.5rem;\n  left: 0;\n}\n#y-body[_ngcontent-%COMP%]:hover    > #y-head[_ngcontent-%COMP%] {\n  transition: 2s ease;\n  transform: translateY(-7px);\n  animation: none;\n}\n.caja[_ngcontent-%COMP%] {\n  margin-top: 60%;\n  display: flex;\n  justify-content: center;\n}\n@media screen and (max-width: 700px) {\n  .caja[_ngcontent-%COMP%] {\n    margin-top: 16%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYmFieS15b2RhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCRTtFQUNFO0lBR0UsK0RBQUE7RUFESjtFQUdFO0lBR0UsaUVBQUE7RUFESjtFQUdFO0lBR0UsaUVBQUE7RUFESjtFQUdFO0lBR0Usa0VBQUE7RUFESjtFQUdFO0lBR0UsK0RBQUE7RUFESjtFQUdFO0lBR0UsK0RBQUE7RUFESjtBQUNGO0FBdUJFO0VBQ0U7SUFDRSxVQUFBO0VBREo7RUFHRTtJQUNFLFlBQUE7RUFESjtFQUdFO0lBQ0UsVUFBQTtFQURKO0VBR0U7SUFDRSxVQUFBO0VBREo7RUFHRTtJQUNFLFVBQUE7RUFESjtFQUdFO0lBQ0UsVUFBQTtFQURKO0FBQ0Y7QUFxQkU7RUFDRTtJQUVFLHFDQUFBO0VBREo7RUFHRTtJQUVFLHVDQUFBO0VBREo7RUFHRTtJQUVFLHFDQUFBO0VBREo7RUFHRTtJQUVFLHFDQUFBO0VBREo7QUFDRjtBQXFCRTtFQUNFO0lBRUUsc0NBQUE7RUFESjtFQUdFO0lBRUUsd0NBQUE7RUFESjtFQUdFO0lBRUUsc0NBQUE7RUFESjtFQUdFO0lBRUUsc0NBQUE7RUFESjtBQUNGO0FBOEJFO0VBQ0U7SUFDRSxZQUFBO0lBRUEsb0JBQUE7RUFESjtFQUdFO0lBQ0UsWUFBQTtJQUVBLHVCQUFBO0VBREo7RUFHRTtJQUNFLFlBQUE7SUFFQSxvQkFBQTtFQURKO0VBR0U7SUFDRSxZQUFBO0lBRUEsd0JBQUE7RUFESjtFQUdFO0lBQ0UsWUFBQTtJQUVBLG9CQUFBO0VBREo7QUFDRjtBQWlCRTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdDQUFBO0VBREo7RUFHRTtJQUNFLFVBQUE7SUFDQSxnQ0FBQTtFQURKO0VBR0U7SUFDRSxXQUFBO0lBQ0EsZ0NBQUE7RUFESjtBQUNGO0FBY0U7RUFDRTtJQUNFLHFCQUFBO0VBREo7RUFHRTtJQUNFLHNCQUFBO0VBREo7RUFHRTtJQUNFLHFCQUFBO0VBREo7QUFDRjtBQThCRTtFQUNFO0lBRUUsa0NBQUE7SUFDQSxZQUFBO0VBREo7RUFHRTtJQUVFLG9DQUFBO0lBQ0EsWUFBQTtFQURKO0VBR0U7SUFFRSxvQ0FBQTtJQUNBLFlBQUE7RUFESjtFQUdFO0lBRUUsb0NBQUE7SUFDQSxVQUFBO0VBREo7RUFHRTtJQUVFLGtDQUFBO0lBQ0EsVUFBQTtFQURKO0FBQ0Y7QUFHRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQURKO0FBR0U7RUFDRSxXQUFBO0VBR0EsaUVBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLG9DQUFBO0FBQUo7QUFFRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFFQSwwQ0FBQTtFQUdBLHVCQUFBO0VBQ0Esa0NBQUE7QUFDSjtBQUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFFQSxpREFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFHQSxhQUFBO0VBR0EsdUJBQUE7RUFFQSx3REFBQTtFQUVBLCtCQUFBO0FBRUo7QUFBRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUdBLGFBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0FBR0o7QUFERTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUVBLGdEQUFBO0VBRUEsNkJBQUE7QUFJSjtBQUZFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBRUEsaUNBQUE7QUFLSjtBQUhFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBRUEsZ0RBQUE7RUFFQSw2QkFBQTtBQU1KO0FBSkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQ0FBQTtBQU9KO0FBTEU7RUFHRSxxREFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFRSjtBQU5FO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxtRkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUVBLDRCQUFBO0FBU0o7QUFQRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsaURBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBRUEsc0NBQUE7QUFVSjtBQVJFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSx5REFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQVdKO0FBVEU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGlEQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBR0Esd0JBQUE7RUFFQSx1Q0FBQTtBQVlKO0FBVkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLDBEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBYUo7QUFYRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFFQSxpREFBQTtFQUVBLDJCQUFBO0FBY0o7QUFaRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBR0Esd0RBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxpQ0FBQTtFQUdBLHlCQUFBO0VBRUEsdUNBQUE7QUFlSjtBQWJFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFHQSx3REFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBR0Esd0JBQUE7RUFFQSxzQ0FBQTtBQWdCSjtBQWRFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUdBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUVBLDRCQUFBO0VBQ0EsVUFBQTtBQWlCSjtBQWZFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFrQko7QUFoQkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7QUFtQko7QUFqQkU7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQW9CSjtBQWxCRTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFxQk47QUFsQkU7RUFDSTtJQUNJLGVBQUE7RUFxQlI7QUFDRiIsImZpbGUiOiJiYWJ5LXlvZGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcclxuICAgIDAlIHtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLCByZ2JhKDIzNywyMjUsMjA5LC41KSksIGNvbG9yLXN0b3AoMCwgIzAwMCkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyMzcsMjI1LDIwOSwuNSkgMCwgIzAwMCAwKTtcclxuICAgIH0gXHJcbiAgICAxJSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMzAlLCByZ2JhKDIzNywyMjUsMjA5LC41KSksIGNvbG9yLXN0b3AoMCwgIzAwMCkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyMzcsMjI1LDIwOSwuNSkgMzAlLCAjMDAwIDApO1xyXG4gICAgfVxyXG4gICAgMS41JSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoNjAlLCByZ2JhKDIzNywyMjUsMjA5LC41KSksIGNvbG9yLXN0b3AoMCwgIzAwMCkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyMzcsMjI1LDIwOSwuNSkgNjAlLCAjMDAwIDApO1xyXG4gICAgfVxyXG4gICAgMiUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjM3LDIyNSwyMDksLjUpKSwgY29sb3Itc3RvcCgwLCAjMDAwKSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDIzNywyMjUsMjA5LC41KSAxMDAlLCAjMDAwIDApO1xyXG4gICAgfVxyXG4gICAgMi4xJSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCwgcmdiYSgyMzcsMjI1LDIwOSwuNSkpLCBjb2xvci1zdG9wKDAsICMwMDApKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjM3LDIyNSwyMDksLjUpIDAsICMwMDAgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLCByZ2JhKDIzNywyMjUsMjA5LC41KSksIGNvbG9yLXN0b3AoMCwgIzAwMCkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyMzcsMjI1LDIwOSwuNSkgMCwgIzAwMCAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBibGluayB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChyZ2JhKDIzNywyMjUsMjA5LC41KSAwLCAjMDAwIDApO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAsIHJnYmEoMjM3LDIyNSwyMDksLjUpKSwgY29sb3Itc3RvcCgwLCAjMDAwKSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDIzNywyMjUsMjA5LC41KSAwLCAjMDAwIDApO1xyXG4gICAgfSBcclxuICAgIDElIHtcclxuICAgICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHJnYmEoMjM3LDIyNSwyMDksLjUpIDMwJSwgIzAwMCAwKTtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgzMCUsIHJnYmEoMjM3LDIyNSwyMDksLjUpKSwgY29sb3Itc3RvcCgwLCAjMDAwKSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDIzNywyMjUsMjA5LC41KSAzMCUsICMwMDAgMCk7XHJcbiAgICB9XHJcbiAgICAxLjUlIHtcclxuICAgICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHJnYmEoMjM3LDIyNSwyMDksLjUpIDYwJSwgIzAwMCAwKTtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCg2MCUsIHJnYmEoMjM3LDIyNSwyMDksLjUpKSwgY29sb3Itc3RvcCgwLCAjMDAwKSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDIzNywyMjUsMjA5LC41KSA2MCUsICMwMDAgMCk7XHJcbiAgICB9XHJcbiAgICAyJSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChyZ2JhKDIzNywyMjUsMjA5LC41KSAxMDAlLCAjMDAwIDApO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjM3LDIyNSwyMDksLjUpKSwgY29sb3Itc3RvcCgwLCAjMDAwKSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDIzNywyMjUsMjA5LC41KSAxMDAlLCAjMDAwIDApO1xyXG4gICAgfVxyXG4gICAgMi4xJSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChyZ2JhKDIzNywyMjUsMjA5LC41KSAwLCAjMDAwIDApO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAsIHJnYmEoMjM3LDIyNSwyMDksLjUpKSwgY29sb3Itc3RvcCgwLCAjMDAwKSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDIzNywyMjUsMjA5LC41KSAwLCAjMDAwIDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChyZ2JhKDIzNywyMjUsMjA5LC41KSAwLCAjMDAwIDApO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAsIHJnYmEoMjM3LDIyNSwyMDksLjUpKSwgY29sb3Itc3RvcCgwLCAjMDAwKSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDIzNywyMjUsMjA5LC41KSAwLCAjMDAwIDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmstZG90IHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eToxO1xyXG4gICAgfSBcclxuICAgIDElIHtcclxuICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICB9XHJcbiAgICAxLjUlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDIlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDIuMSUge1xyXG4gICAgICBvcGFjaXR5OjE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGJsaW5rLWRvdCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIG9wYWNpdHk6MTtcclxuICAgIH0gXHJcbiAgICAxJSB7XHJcbiAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgfVxyXG4gICAgMS41JSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAyJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAyLjElIHtcclxuICAgICAgb3BhY2l0eToxO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6MTtcclxuICAgIH1cclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGxlZnQtZWFyLXR3aXRjaCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOGRlZykgdHJhbnNsYXRlWSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOGRlZykgdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICAgIDElIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2ZGVnKSB0cmFuc2xhdGVZKDNweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDZkZWcpIHRyYW5zbGF0ZVkoM3B4KTtcclxuICAgIH1cclxuICAgIDIlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg4ZGVnKSB0cmFuc2xhdGVZKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg4ZGVnKSB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOGRlZykgdHJhbnNsYXRlWSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOGRlZykgdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZWZ0LWVhci10d2l0Y2gge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDhkZWcpIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDhkZWcpIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgICAxJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNmRlZykgdHJhbnNsYXRlWSgzcHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2ZGVnKSB0cmFuc2xhdGVZKDNweCk7XHJcbiAgICB9XHJcbiAgICAyJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOGRlZykgdHJhbnNsYXRlWSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOGRlZykgdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDhkZWcpIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDhkZWcpIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyByaWdodC1lYXItdHdpdGNoIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZykgdHJhbnNsYXRlWSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgICAxLjUlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNmRlZykgdHJhbnNsYXRlWSgzcHgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNmRlZykgdHJhbnNsYXRlWSgzcHgpO1xyXG4gICAgfVxyXG4gICAgMi41JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKSB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKSB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHJpZ2h0LWVhci10d2l0Y2gge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC04ZGVnKSB0cmFuc2xhdGVZKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZykgdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICAgIDEuNSUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC02ZGVnKSB0cmFuc2xhdGVZKDNweCk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC02ZGVnKSB0cmFuc2xhdGVZKDNweCk7XHJcbiAgICB9XHJcbiAgICAyJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKSB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKSB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgaGVhZGJvYiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIGJvdHRvbTogLTNweDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO1xyXG4gICAgICB0cmFuc2Zvcm06cm90YXRlKDApO1xyXG4gICAgfVxyXG4gICAgNSUge1xyXG4gICAgICBib3R0b206IC01cHg7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06cm90YXRlKDFkZWcpO1xyXG4gICAgfVxyXG4gICAgNiUge1xyXG4gICAgICBib3R0b206IC01cHg7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTtcclxuICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgwKTtcclxuICAgIH1cclxuICAgIDglIHtcclxuICAgICAgYm90dG9tOiAtOHB4O1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTFkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06cm90YXRlKC0xZGVnKTtcclxuICAgIH1cclxuICAgIDEwJSB7XHJcbiAgICAgIGJvdHRvbTogLTNweDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO1xyXG4gICAgICB0cmFuc2Zvcm06cm90YXRlKDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGhlYWRib2Ige1xyXG4gICAgMCUge1xyXG4gICAgICBib3R0b206IC0zcHg7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTtcclxuICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgwKTtcclxuICAgIH1cclxuICAgIDUlIHtcclxuICAgICAgYm90dG9tOiAtNXB4O1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMmRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMmRlZyk7XHJcbiAgICB9XHJcbiAgICA2JSB7XHJcbiAgICAgIGJvdHRvbTogLTVweDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO1xyXG4gICAgICB0cmFuc2Zvcm06cm90YXRlKDApO1xyXG4gICAgfVxyXG4gICAgOCUge1xyXG4gICAgICBib3R0b206IC04cHg7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMmRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTpyb3RhdGUoLTJkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAlIHtcclxuICAgICAgYm90dG9tOiAtM3B4O1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBvb2hoIHtcclxuICAgIDAlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzA5RjcwO1xyXG4gICAgfVxyXG4gICAgMTAlIHtcclxuICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICM3MDlGNzA7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzA5RjcwO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIG9vaGgge1xyXG4gICAgMCUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3MDlGNzA7XHJcbiAgICB9XHJcbiAgICAxMCUge1xyXG4gICAgICB3aWR0aDogNXB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzcwOUY3MDtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcwOUY3MDtcclxuICAgIH1cclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNpcCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRvcDogY2FsYygxMDAlICsgNXB4KTtcclxuICAgIH1cclxuICAgIDEwJSB7XHJcbiAgICAgIHRvcDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICB9XHJcbiAgICAzMCUge1xyXG4gICAgICB0b3A6IGNhbGMoMTAwJSArIDVweCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgc2lwIHtcclxuICAgIDAlIHtcclxuICAgICAgdG9wOiBjYWxjKDEwMCUgKyA1cHgpO1xyXG4gICAgfVxyXG4gICAgMTAlIHtcclxuICAgICAgdG9wOiBjYWxjKDEwMCUgLSAxMHB4KTtcclxuICAgIH1cclxuICAgIDMwJSB7XHJcbiAgICAgIHRvcDogY2FsYygxMDAlICsgNXB4KTtcclxuICAgIH1cclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHN0ZWFtIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpIHNjYWxlKDEpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpIHNjYWxlKDEpO1xyXG4gICAgICBvcGFjaXR5OiAuMztcclxuICAgIH1cclxuICAgIDMlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpIHNjYWxlKDEuMyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWig5MGRlZykgc2NhbGUoMS4zKTtcclxuICAgICAgb3BhY2l0eTogLjI7XHJcbiAgICB9XHJcbiAgICA1JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKSBzY2FsZSgxLjUpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpIHNjYWxlKDEuNSk7XHJcbiAgICAgIG9wYWNpdHk6LjE7XHJcbiAgICB9XHJcbiAgICA3JSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKSBzY2FsZSgxLjgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpIHNjYWxlKDEuOCk7XHJcbiAgICAgIG9wYWNpdHk6MDsgXHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpIHNjYWxlKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpIHNjYWxlKDApO1xyXG4gICAgICBvcGFjaXR5OjA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgc3RlYW0ge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWig5MGRlZykgc2NhbGUoMSk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWig5MGRlZykgc2NhbGUoMSk7XHJcbiAgICAgIG9wYWNpdHk6IC40O1xyXG4gICAgfVxyXG4gICAgMyUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWig5MGRlZykgc2NhbGUoMS4zKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKSBzY2FsZSgxLjMpO1xyXG4gICAgICBvcGFjaXR5OiAuMjtcclxuICAgIH1cclxuICAgIDUlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpIHNjYWxlKDEuNSk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWig5MGRlZykgc2NhbGUoMS41KTtcclxuICAgICAgb3BhY2l0eTouMTtcclxuICAgIH1cclxuICAgIDclIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpIHNjYWxlKDEuOCk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlWig5MGRlZykgc2NhbGUoMS44KTtcclxuICAgICAgb3BhY2l0eTowO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKSBzY2FsZSgwKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKSBzY2FsZSgwKTtcclxuICAgICAgb3BhY2l0eTowO1xyXG4gICAgfVxyXG4gIH1cclxuICAjeS1ib2R5IHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDMwcHggMzBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDgwcHggc29saWQgIzkzN0Q2MjtcclxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogODtcclxuICB9XHJcbiAgI3ktYm9keTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDc1ZGVnLCAjRDNDQkMwLCAjQkRCNkFDIDIlKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoMTVkZWcsICNEM0NCQzAsICNCREI2QUMgMiUpO1xyXG4gICAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg3NWRlZywgI0QzQ0JDMCwgI0JEQjZBQyAyJSk7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMTBweCk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTotMTBweDtcclxuICAgIGxlZnQ6IC01cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB6LWluZGV4OjEwO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxcHggI0JEQjZBQyk7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxcHggI0JEQjZBQyk7XHJcbiAgfVxyXG4gICN5LWJvZHk6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA1cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCAjODQ3MDU4O1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQ2JTtcclxuICAgIHRvcDo4MHB4O1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KC0xcHggLTFweCAxcHggIzc2NjQ0Rik7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KC0xcHggLTFweCAxcHggIzc2NjQ0Rik7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDRkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDRkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNGRlZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTAwJS81MHB4IDEwMHB4O1xyXG4gIH1cclxuICAjeS1oZWFkIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCM2RTkzNkUgMnB4LCAjOEFCODhBKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNkU5MzZFIDJweCwgIzhBQjg4QSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlIDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206LTNweDtcclxuICAgIHotaW5kZXg6NTtcclxuICAgIGxlZnQ6LTVweDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMCAtMXB4IDJweCByZ2JhKDExMCwxNDcsMTEwLCAuNikpO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIC0xcHggMnB4IHJnYmEoMTEwLDE0NywxMTAsIC42KSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogMTJzIGhlYWRib2IgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IDEycyBoZWFkYm9iIGluZmluaXRlO1xyXG4gIH1cclxuICAjeS1oZWFkOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzdEQjE3RDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIHotaW5kZXg6MztcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggMXB4ICM2RTkzNkUpO1xyXG4gIH1cclxuICAjbGVmdC1leWUge1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOjQ4JTtcclxuICAgIGxlZnQ6IDE4JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAycHggM3B4IHJnYmEoMjM3LDIyNSwyMDksLjUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAzcHggcmdiYSgyMzcsMjI1LDIwOSwuNSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogMTBzIGJsaW5rIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiAxMHMgYmxpbmsgaW5maW5pdGU7XHJcbiAgfVxyXG4gICNsZWZ0LWV5ZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDoycHg7XHJcbiAgICBoZWlnaHQ6MnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjE1JTtcclxuICAgIGxlZnQ6MjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAxMHMgYmxpbmstZG90IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiAxMHMgYmxpbmstZG90IGluZmluaXRlO1xyXG4gIH1cclxuICAjcmlnaHQtZXllIHtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTo0OCU7XHJcbiAgICByaWdodDogMjAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDJweCAzcHggcmdiYSgyMzcsMjI1LDIwOSwuNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMnB4IDNweCByZ2JhKDIzNywyMjUsMjA5LC41KTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAxMHMgYmxpbmsgaW5maW5pdGU7XHJcbiAgICBhbmltYXRpb246IDEwcyBibGluayBpbmZpbml0ZTtcclxuICB9XHJcbiAgI3JpZ2h0LWV5ZTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDoycHg7XHJcbiAgICBoZWlnaHQ6MnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjE1JTtcclxuICAgIGxlZnQ6MjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAxMHMgYmxpbmstZG90IGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiAxMHMgYmxpbmstZG90IGluZmluaXRlO1xyXG4gIH1cclxuICAjbW91dGgge1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgIzk3QzA5NywgIzhBQjg4QSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCM5N0MwOTcpLCB0bygjOEFCODhBKSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjOTdDMDk3LCAjOEFCODhBKTtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OjIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjQ5JTtcclxuICB9XHJcbiAgI21vdXRoOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDExcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGJhY2tncm91bmQ6IC1vLXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQobGVmdCwgIzk3QzA5NyAxcHgsICM4QUI4OEEgNXB4LCAjOTdDMDk3IDFweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjOTdDMDk3IDFweCwgIzhBQjg4QSA1cHgsICM5N0MwOTcgMXB4KTtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcwOUY3MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCUgMTAwJSAzMHB4IDMwcHg7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogNXMgb29oaC0xIGluZmluaXRlO1xyXG4gICAgYW5pbWF0aW9uOiAxMnMgb29oaCBpbmZpbml0ZTtcclxuICB9XHJcbiAgI2xlZnQtZWFyIHtcclxuICAgIHdpZHRoOjU1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoIzZFOTM2RSAycHgsICM4QUI4OEEpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM2RTkzNkUgMnB4LCAjOEFCODhBKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweCAycHggMCAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDo1cHg7XHJcbiAgICBsZWZ0Oi00N3B4O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IDhzIGxlZnQtZWFyLXR3aXRjaCBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogOHMgbGVmdC1lYXItdHdpdGNoIGluZmluaXRlO1xyXG4gIH1cclxuICAjbGVmdC1lYXI6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjAwZGVnLCAjRTVDM0M4IDQwJSwgIzhBQjg4QSk7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6NXB4O1xyXG4gICAgbGVmdDo1cHg7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxuICB9XHJcbiAgI3JpZ2h0LWVhciB7XHJcbiAgICB3aWR0aDo1NXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KCM2RTkzNkUgMnB4LCAjOEFCODhBKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNkU5MzZFIDJweCwgIzhBQjg4QSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHggMXB4IDEwMCUgMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtNDdweDtcclxuICAgIHRvcDo1cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC04ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogOHMgcmlnaHQtZWFyLXR3aXRjaCBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogOHMgcmlnaHQtZWFyLXR3aXRjaCBpbmZpbml0ZTtcclxuICB9XHJcbiAgI3JpZ2h0LWVhcjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMjAwZGVnLCAjRTVDM0M4IDQwJSwgIzhBQjg4QSk7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMTAwJSA1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6NXB4O1xyXG4gICAgcmlnaHQ6NXB4O1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbiAgfVxyXG4gICNjdXAge1xyXG4gICAgd2lkdGg6MzBweDtcclxuICAgIGhlaWdodDoyM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjAyYzJjO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogY2FsYyg1MCUgLSAxNXB4KTtcclxuICAgIHRvcDogY2FsYygxMDAlICsgNXB4KTtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDJweCByZ2JhKDAsMCwwLC4yKSk7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDJweCByZ2JhKDAsMCwwLC4yKSk7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogMTVzIHNpcCBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogMTVzIHNpcCBpbmZpbml0ZTtcclxuICB9XHJcbiAgI2N1cDpiZWZvcmUge1xyXG4gICAgY29udGVudDonJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDotby1saW5lYXItZ3JhZGllbnQobGVmdCwgIzZFOTM2RSAyMCUsICM4QUI4OEEpO1xyXG4gICAgYmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgyMCUsICM2RTkzNkUpLCB0bygjOEFCODhBKSk7XHJcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZywgIzZFOTM2RSAyMCUsICM4QUI4OEEpO1xyXG4gICAgaGVpZ2h0OjE1cHg7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6LTIwcHg7XHJcbiAgICB0b3A6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggOHB4IDUwcHggMzBweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTE4ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtMThkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4ZGVnKTtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygtNHB4IDFweCAwICNCREI2QUMpO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygtNHB4IDFweCAwICNCREI2QUMpO1xyXG4gIH1cclxuICAjY3VwOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjOEFCODhBIDIwJSwgIzZFOTM2RSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgyMCUsICM4QUI4OEEpLCB0bygjNkU5MzZFKSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM4QUI4OEEgMjAlLCAjNkU5MzZFKTtcclxuICAgIGhlaWdodDoxNXB4O1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHggMzBweCAyMHB4IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDotMTVweDtcclxuICAgIHRvcDogMTJweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI1ZGVnKTtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggMXB4IDAgI0JEQjZBQyk7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAxcHggMCAjQkRCNkFDKTtcclxuICB9XHJcbiAgI3N0ZWFtIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWig5MGRlZyk7XHJcbiAgICBib3R0b206LjNyZW07XHJcbiAgICBsZWZ0Oi0uMjNyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiA1cyBzdGVhbSBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogNXMgc3RlYW0gaW5maW5pdGU7XHJcbiAgICB6LWluZGV4OjE7XHJcbiAgfVxyXG4gICNzdGVhbTpiZWZvcmUge1xyXG4gICAgY29udGVudDonfic7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDouNXJlbTsgXHJcbiAgfVxyXG4gICNzdGVhbTphZnRlciB7XHJcbiAgICBjb250ZW50Oid+JztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOi0uNXJlbTsgXHJcbiAgICBsZWZ0OjA7XHJcbiAgfVxyXG4gICN5LWJvZHk6aG92ZXIgPiAjeS1oZWFke1xyXG4gICAgdHJhbnNpdGlvbjogMnMgZWFzZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcclxuICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLmNhamEge1xyXG4gICAgICBtYXJnaW4tdG9wOiA2MCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgICAgLmNhamEge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTYlO1xyXG4gICAgICB9XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BabyYodaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-baby-yoda',
                templateUrl: './baby-yoda.component.html',
                styleUrls: ['./baby-yoda.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "R6fY":
/*!*******************************************************************!*\
  !*** ./src/app/components/views/not-found/not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NotFoundComponent {
    constructor() {
        this.noPubli = true;
    }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 1, vars: 0, consts: [["src", "../../../../assets/notfound.png", "alt", "not-found"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: ["img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RnxK":
/*!***********************************************************!*\
  !*** ./src/app/validators/user-name-validator.service.ts ***!
  \***********************************************************/
/*! exports provided: UserNameValidatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNameValidatorService", function() { return UserNameValidatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UserNameValidatorService {
    constructor(http) {
        this.http = http;
    }
    /*  validador  encargada de validar si el username que se le pasa como param coincide con el de algun usuario de la DB;
    * @param control: string con el valor del username que se quiere validar;
    * Devuelve un observable que contiene un validationError con un booleano según la respuesta;
    */
    validate(control) {
        const username = control.value;
        const path = 'https://foro-app-jr.herokuapp.com/api/verificausername/' + username;
        return this.http.get(path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => {
            return (resp.existe) ? { usernameTomado: true } : null;
        }));
    }
}
UserNameValidatorService.ɵfac = function UserNameValidatorService_Factory(t) { return new (t || UserNameValidatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserNameValidatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserNameValidatorService, factory: UserNameValidatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserNameValidatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_widgets_publi_block_publi_block_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/widgets/publi-block/publi-block.component */ "2kgN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");






class AppComponent {
    constructor() {
        this.title = 'ProyectoPrueba';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [[1, "sticky"], [3, "urlP"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-publi-block", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("urlP", "https://thumbs.dreamstime.com/t/publicidad-horizontal-coloreada-de-la-bandera-de-la-pizza-del-vector-78135404.jpg");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _components_widgets_publi_block_publi_block_component__WEBPACK_IMPORTED_MODULE_2__["PubliBlockComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Ujp+":
/*!*****************************************************************!*\
  !*** ./src/app/components/widgets/comment/comment.component.ts ***!
  \*****************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/posts-service.service */ "XDXz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function CommentComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Borrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CommentComponent {
    constructor(postS) {
        this.postS = postS;
    }
    get userI() {
        const info = JSON.parse(sessionStorage.getItem('uInf'));
        if (info === null) {
            return { id: '' };
        }
        return info;
    }
    ngOnInit() {
    }
    // Función para borrar comentario de la DB y hacer un reload de la página
    borrarComment() {
        this.postS.deleteComment(this.comentario._id).subscribe(resp => {
            console.log(resp);
            location.reload();
        });
    }
}
CommentComponent.ɵfac = function CommentComponent_Factory(t) { return new (t || CommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_1__["PostsServiceService"])); };
CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentComponent, selectors: [["app-comment"]], inputs: { comentario: "comentario" }, decls: 48, vars: 10, consts: [[1, "cuerpo"], [1, "d-flex", "justify-content-between", "encabezadoComment"], [1, "row", "justify-content-end"], [1, "col-md-6", "align-self-center", "pl-4"], ["href", "", "id", "like", 1, "mr-3"], [1, "far", "fa-thumbs-up", "fa-2x"], ["href", "", "id", "dislike"], [1, "far", "fa-thumbs-down", "fa-2x"], [1, "col-md-6"], [1, "postInfo", "mr-4"], [1, "grey"], ["src", "../../../../assets/imgUserprueba.png", "alt", "", "width", "30", "height", "30"], [1, "p-1"], ["class", "d-flex justify-content-end", 4, "ngIf"], ["id", "modalComments", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn"], ["type", "button", "data-dismiss", "modal", 1, "btn", 3, "click"], [1, "d-flex", "justify-content-end"], ["data-toggle", "modal", "data-target", "#modalComments", 1, "btn", "m-1"]], template: function CommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " commentId: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CommentComponent_div_33_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u00BF Estas seguro de que deseas borrar el comentario ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentComponent_Template_button_click_46_listener() { return ctx.borrarComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Si, Estoy seguro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comentario.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Formulado a fecha de: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 7, ctx.comentario.createdAt, "short"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comentario.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comentario.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comentario.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.comentario._id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comentario.userId === ctx.userI.id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".cuerpo[_ngcontent-%COMP%] {\n  border: 2px solid var(--primary);\n  border-radius: 5px;\n  margin: 10px;\n  padding: 10px;\n}\n\n.postInfo[_ngcontent-%COMP%] {\n  background: rgba(236, 187, 94, 0.6);\n  padding: 5px;\n}\n\n#like[_ngcontent-%COMP%] {\n  color: #53c953;\n}\n\n#dislike[_ngcontent-%COMP%] {\n  color: red;\n}\n\n#modalComments[_ngcontent-%COMP%] {\n  top: 30%;\n}\n\n@media screen and (max-width: 990px) {\n  .encabezadoComment[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .postInfo[_ngcontent-%COMP%] {\n    margin-right: 0;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29tbWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksbUNBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0FBR0o7O0FBREE7RUFDSSxVQUFBO0FBSUo7O0FBREE7RUFDSSxRQUFBO0FBSUo7O0FBREE7RUFDSTtJQUNJLHNCQUFBO0VBSU47O0VBRkU7SUFDSSxlQUFBO0lBQ0EsV0FBQTtFQUtOO0FBQ0YiLCJmaWxlIjoiY29tbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdWVycG8ge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5wb3N0SW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM2LCAxODcsIDk0LCAwLjYpO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbiNsaWtlIHtcclxuICAgIGNvbG9yOiByZ2IoODMsIDIwMSwgODMpOztcclxufVxyXG4jZGlzbGlrZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4jbW9kYWxDb21tZW50cyB7XHJcbiAgICB0b3A6IDMwJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOiA5OTBweCkge1xyXG4gICAgLmVuY2FiZXphZG9Db21tZW50IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLnBvc3RJbmZvIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comment',
                templateUrl: './comment.component.html',
                styleUrls: ['./comment.component.scss']
            }]
    }], function () { return [{ type: src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_1__["PostsServiceService"] }]; }, { comentario: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "XDXz":
/*!***************************************************!*\
  !*** ./src/app/services/posts-service.service.ts ***!
  \***************************************************/
/*! exports provided: PostsServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsServiceService", function() { return PostsServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class PostsServiceService {
    constructor(http) {
        this.http = http;
    }
    /* Función encargada de llamar al endpoint para obtener todos los posts ;
    *  Devuelve un observable que contiene todos los posts de la DB;
    */
    getPosts() {
        return this.http.get('https://foro-app-jr.herokuapp.com/api/posts');
    }
    /* Función encargada de llamar al endpoint para obtener todos los posts coincidentes con la categoría que se pasa como param ;
    *  @param category: string con el valor de la categoria a buscar;
    *  Devuelve un observable con los posts coincidentes ;
    */
    getPostsbyCategory(category) {
        return this.http.get(`https://foro-app-jr.herokuapp.com/api/postscat/${category}`);
    }
    /* Función encargada de llamar al endpoint para obtener todos los posts que incluyan en su titulo el parámetro que se le pasa a la función;
    *  @param termino: string con el valor de la palabra a buscar;
    *  Devuelve un observable con los posts coincidentes ;
    */
    getPostsbyWord(termino) {
        return this.http.get(`https://foro-app-jr.herokuapp.com/api/postsword/${termino}`);
    }
    /* Función encargada de llamar al endpoint para obtener todos los posts coincidentes con el userId que se pasa como param ;
    *  @param id: string con el valor del user.Id que se quiere buscar;
    * Devuelve un observable con los posts coincidentes ;
    */
    getPostsbyUserId(id) {
        return this.http.get(`https://foro-app-jr.herokuapp.com/api/postsuserid/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((resp) => resp.posts));
    }
    /* Función encargada de llamar al endpoint para borrar el post coincidente con el id que se pasa como param;
    *  @param id: string con el valor del id del post que se quiere borrar;
    * Devuelve un observable con el post borrado ;
    */
    deletePost(id) {
        return this.http.delete(`https://foro-app-jr.herokuapp.com/api/post/${id}`);
    }
    /* Función encargada de llamar al endpoint para obtener todos los comentarios coincidentes con el postId que se pasa como param ;
    *  @param id: string con el valor del postId a buscar;
    *  Devuelve un observable con los comentarios coincidentes;
    */
    getComments(id) {
        return this.http.get(`https://foro-app-jr.herokuapp.com/api/comments/${id}`);
    }
    /* Función encargada de llamar al endpoint para borrar el comentario coincidente con el id que se pasa como param;
    *  @param id: string con el valor del id del comentario que se quiere borrar;
    * Devuelve un observable con el comentario borrado ;
    */
    deleteComment(id) {
        return this.http.delete(`https://foro-app-jr.herokuapp.com/api/comments/${id}`);
    }
    /* Función encargada de llamar al endpoint para sumar +1 a las vistas del post que coincida con el id que se pasa como param;
    *  @param id: string con el valor del id del post al que se le quiere sumar una vista;
    * Devuelve un observable con el post al que se le ha sumado la vista;
    */
    addView(id) {
        return this.http.get(`https://foro-app-jr.herokuapp.com/api/vista/${id}`);
    }
    /* Función encargada de llamar al endpoint para sumar +1 a las respuestas del post que coincida con el id que se pasa como param;
    *  @param id: string con el valor del id del post al que se le quiere sumar una respuesta;
    * Devuelve un observable con el post al que se le ha sumado la respuesta;
    */
    addResp(id) {
        return this.http.get(`https://foro-app-jr.herokuapp.com/api/resp/${id}`);
    }
    /* Función encargada de llamar al endpoint para sumar +1 a los likes del post que coincida con el id que se pasa como param;
    *  @param id: string con el valor del id del post al que se le quiere sumar un like;
    * Devuelve un observable con el post al que se le ha sumado el like;
    */
    addLikePost(id, userId) {
        return this.http.get(`https://foro-app-jr.herokuapp.com/api/likeP/${id}/${userId}`);
    }
    /* Función encargada de llamar al endpoint para sumar +1 a los likes del comentario que coincida con el id que se pasa como param;
    *  @param id: string con el valor del id del comentario al que se le quiere sumar un like;
    * Devuelve un observable con el comentario al que se le ha sumado el like;
    */
    addlikeComment(id) {
        return this.http.get(`https://foro-app-jr.herokuapp.com/api/likeC/${id}`);
    }
    /* Función encargada de llamar al endpoint para sumar +1 a los dislikes del post que coincida con el id que se pasa como param;
    *  @param id: string con el valor del id del post al que se le quiere sumar un dislike;
    * Devuelve un observable con el post al que se le ha sumado el dislike;
    */
    addDislikePost(id) {
        return this.http.get(`https://foro-app-jr.herokuapp.com/api/dislikeP/${id}`);
    }
    /* Función encargada de llamar al endpoint para sumar +1 a los dislikes del comentario que coincida con el id que se pasa como param;
    *  @param id: string con el valor del id del comentario al que se le quiere sumar un dislike;
    * Devuelve un observable con el comentario al que se le ha sumado el dislike;
    */
    addDislikeComment(id) {
        return this.http.get(`https://foro-app-jr.herokuapp.com/api/dislikeC/${id}`);
    }
    /* Función encargada de llamar al endpoint para crear nuevo post en la DB con la información que se pasa como parámetro;
    *  @param post: objeto que contiene la información del post a crear;
    * Devuelve un observable con el post creado;
    */
    savePost(post) {
        let params = JSON.stringify(post);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-type', 'application/json');
        let url = 'https://foro-app-jr.herokuapp.com/api/save-post';
        return this.http.post(url, params, { headers: headers });
    }
    /* Función encargada de llamar al endpoint para crear nuevo comentario en la DB con la información que se pasa como parámetro;
    *  @param comment: objeto que contiene la información del comentario a crear;
    * Devuelve un observable con el comentario creado;
    */
    saveComment(comment) {
        let params = JSON.stringify(comment);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-type', 'application/json');
        let url = 'https://foro-app-jr.herokuapp.com/api/save-comment';
        return this.http.post(url, params, { headers: headers });
    }
}
PostsServiceService.ɵfac = function PostsServiceService_Factory(t) { return new (t || PostsServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostsServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsServiceService, factory: PostsServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var angular_markdown_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-markdown-editor */ "ehUW");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _components_widgets_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/widgets/add-comment/add-comment.component */ "6nF/");
/* harmony import */ var _components_views_add_post_page_add_post_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/views/add-post-page/add-post-page.component */ "5CZ+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_widgets_baby_yoda_baby_yoda_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/widgets/baby-yoda/baby-yoda.component */ "QXgJ");
/* harmony import */ var _components_widgets_categories_bar_categories_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/widgets/categories-bar/categories-bar.component */ "xmJq");
/* harmony import */ var _components_widgets_comment_comment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/widgets/comment/comment.component */ "Ujp+");
/* harmony import */ var _components_widgets_comments_box_comments_box_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/widgets/comments-box/comments-box.component */ "bwXQ");
/* harmony import */ var _components_views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/views/contact-us/contact-us.component */ "BMgT");
/* harmony import */ var _components_views_cuenta_cuenta_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/views/cuenta/cuenta.component */ "nruq");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_main_section_main_section_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/main-section/main-section.component */ "gdYy");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_views_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/views/not-found/not-found.component */ "R6fY");
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/posts/posts.component */ "hMVD");
/* harmony import */ var _components_widgets_post_post_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/widgets/post/post.component */ "9yQK");
/* harmony import */ var _components_views_post_page_post_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/views/post-page/post-page.component */ "IUwK");
/* harmony import */ var _components_widgets_publi_block_publi_block_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/widgets/publi-block/publi-block.component */ "2kgN");
/* harmony import */ var _components_widgets_ref_bar_ref_bar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/widgets/ref-bar/ref-bar.component */ "1WV5");
/* harmony import */ var _components_widgets_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/widgets/search-box/search-box.component */ "+rxs");
/* harmony import */ var _components_widgets_tags_box_tags_box_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/widgets/tags-box/tags-box.component */ "2uCp");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _services_compConexions_conex_resp_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/compConexions/conex-resp.service */ "D4jO");
/* harmony import */ var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/interceptor.service */ "KRBT");



































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_compConexions_conex_resp_service__WEBPACK_IMPORTED_MODULE_30__["ConexRespService"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_31__["InterceptorService"],
            multi: true }
    ], imports: [[
            angular_markdown_editor__WEBPACK_IMPORTED_MODULE_7__["AngularMarkdownEditorModule"].forRoot({ iconlibrary: 'fa' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forRoot(),
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_views_add_post_page_add_post_page_component__WEBPACK_IMPORTED_MODULE_10__["AddPostPageComponent"],
        _components_widgets_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_9__["AddCommentComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
        _components_widgets_baby_yoda_baby_yoda_component__WEBPACK_IMPORTED_MODULE_12__["BabyYodaComponent"],
        _components_widgets_categories_bar_categories_bar_component__WEBPACK_IMPORTED_MODULE_13__["CategoriesBarComponent"],
        _components_views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_16__["ContactUsComponent"],
        _components_widgets_comments_box_comments_box_component__WEBPACK_IMPORTED_MODULE_15__["CommentsBoxComponent"],
        _components_widgets_comment_comment_component__WEBPACK_IMPORTED_MODULE_14__["CommentComponent"],
        _components_views_cuenta_cuenta_component__WEBPACK_IMPORTED_MODULE_17__["CuentaComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
        _components_main_section_main_section_component__WEBPACK_IMPORTED_MODULE_19__["MainSectionComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"],
        _components_widgets_publi_block_publi_block_component__WEBPACK_IMPORTED_MODULE_25__["PubliBlockComponent"],
        _components_views_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_21__["NotFoundComponent"],
        _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_22__["PostsComponent"],
        _components_widgets_post_post_component__WEBPACK_IMPORTED_MODULE_23__["PostComponent"],
        _components_views_post_page_post_page_component__WEBPACK_IMPORTED_MODULE_24__["PostPageComponent"],
        _components_widgets_ref_bar_ref_bar_component__WEBPACK_IMPORTED_MODULE_26__["RefBarComponent"],
        _components_widgets_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_27__["SearchBoxComponent"],
        _components_widgets_tags_box_tags_box_component__WEBPACK_IMPORTED_MODULE_28__["TagsBoxComponent"]], imports: [angular_markdown_editor__WEBPACK_IMPORTED_MODULE_7__["AngularMarkdownEditorModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                declarations: [
                    _components_views_add_post_page_add_post_page_component__WEBPACK_IMPORTED_MODULE_10__["AddPostPageComponent"],
                    _components_widgets_add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_9__["AddCommentComponent"],
                    _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                    _components_widgets_baby_yoda_baby_yoda_component__WEBPACK_IMPORTED_MODULE_12__["BabyYodaComponent"],
                    _components_widgets_categories_bar_categories_bar_component__WEBPACK_IMPORTED_MODULE_13__["CategoriesBarComponent"],
                    _components_views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_16__["ContactUsComponent"],
                    _components_widgets_comments_box_comments_box_component__WEBPACK_IMPORTED_MODULE_15__["CommentsBoxComponent"],
                    _components_widgets_comment_comment_component__WEBPACK_IMPORTED_MODULE_14__["CommentComponent"],
                    _components_views_cuenta_cuenta_component__WEBPACK_IMPORTED_MODULE_17__["CuentaComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                    _components_main_section_main_section_component__WEBPACK_IMPORTED_MODULE_19__["MainSectionComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_20__["NavbarComponent"],
                    _components_widgets_publi_block_publi_block_component__WEBPACK_IMPORTED_MODULE_25__["PubliBlockComponent"],
                    _components_views_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_21__["NotFoundComponent"],
                    _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_22__["PostsComponent"],
                    _components_widgets_post_post_component__WEBPACK_IMPORTED_MODULE_23__["PostComponent"],
                    _components_views_post_page_post_page_component__WEBPACK_IMPORTED_MODULE_24__["PostPageComponent"],
                    _components_widgets_ref_bar_ref_bar_component__WEBPACK_IMPORTED_MODULE_26__["RefBarComponent"],
                    _components_widgets_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_27__["SearchBoxComponent"],
                    _components_widgets_tags_box_tags_box_component__WEBPACK_IMPORTED_MODULE_28__["TagsBoxComponent"],
                ],
                imports: [
                    angular_markdown_editor__WEBPACK_IMPORTED_MODULE_7__["AngularMarkdownEditorModule"].forRoot({ iconlibrary: 'fa' }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__["BrowserAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forRoot(),
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ],
                providers: [
                    _services_compConexions_conex_resp_service__WEBPACK_IMPORTED_MODULE_30__["ConexRespService"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                        useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_31__["InterceptorService"],
                        multi: true }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bwXQ":
/*!***************************************************************************!*\
  !*** ./src/app/components/widgets/comments-box/comments-box.component.ts ***!
  \***************************************************************************/
/*! exports provided: CommentsBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsBoxComponent", function() { return CommentsBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/posts-service.service */ "XDXz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-comment/add-comment.component */ "6nF/");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../comment/comment.component */ "Ujp+");









function CommentsBoxComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "*Reg\u00EDstrate para a\u00F1adir tus comentarios");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CommentsBoxComponent_app_add_comment_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-add-comment", 14);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("postId", ctx_r1.postId);
} }
function CommentsBoxComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-comment", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("comentario", comment_r3);
} }
const _c0 = function (a1) { return { itemsPerPage: 4, currentPage: a1 }; };
class CommentsBoxComponent {
    constructor(activatedRoute, authS, postS) {
        this.activatedRoute = activatedRoute;
        this.authS = authS;
        this.postS = postS;
        this.p = 1;
        this.addComment = false;
        this.commentsList = [];
        this.tokenValid = this.authS.getUser();
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(response => {
            this.commentsList = response.data2.comments.reverse();
        });
    }
    // Función que se encarga de mostrar y ocultar la caja de añadir-comentario según el estado de la propiedad booleana encarga de ello (this.addComment)
    changeAddComment() {
        this.addComment = !this.addComment;
    }
}
CommentsBoxComponent.ɵfac = function CommentsBoxComponent_Factory(t) { return new (t || CommentsBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_3__["PostsServiceService"])); };
CommentsBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentsBoxComponent, selectors: [["app-comments-box"]], inputs: { postId: "postId" }, decls: 27, vars: 12, consts: [[1, "row", "p-3", "mt-3"], [1, "col-lg-8"], [1, "row", "justify-content-between"], [1, "btn", "m-1"], [1, "col-md-4"], ["type", "button", 1, "btn", "text-light", 3, "disabled", "click"], [4, "ngIf"], [3, "postId", 4, "ngIf"], [1, "row"], [1, "col-md-2"], [1, "col-md-10"], [4, "ngFor", "ngForOf"], [1, "my-pagination", 3, "maxSize", "pageChange"], [1, "col-lg-4"], [3, "postId"], [3, "comentario"]], template: function CommentsBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Activo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "M\u00E1s antiguo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Votos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsBoxComponent_Template_button_click_14_listener() { return ctx.changeAddComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add Comment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CommentsBoxComponent_p_18_Template, 3, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CommentsBoxComponent_app_add_comment_19_Template, 1, 1, "app-add-comment", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CommentsBoxComponent_div_23_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "pagination-controls", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CommentsBoxComponent_Template_pagination_controls_pageChange_25_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.commentsList.length, " Respuestas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tokenValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.addComment ? "-" : "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tokenValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 7, ctx.commentsList, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.p)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxSize", 3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"], _add_comment_add_comment_component__WEBPACK_IMPORTED_MODULE_6__["AddCommentComponent"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_7__["CommentComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]], styles: ["small[_ngcontent-%COMP%] {\n  color: #a7a6a6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29tbWVudHMtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6ImNvbW1lbnRzLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNtYWxsIHtcclxuICAgIGNvbG9yOiByZ2IoMTY3LCAxNjYsIDE2Nik7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comments-box',
                templateUrl: './comments-box.component.html',
                styleUrls: ['./comments-box.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_3__["PostsServiceService"] }]; }, { postId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "fd6a":
/*!*************************************!*\
  !*** ./src/app/models/PostModel.ts ***!
  \*************************************/
/*! exports provided: post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
class post {
    constructor(userId, username, title, likes, dislikes, email, images, numresp, body, categoria, vistas) {
        this.userId = userId;
        this.username = username;
        this.title = title;
        this.likes = likes;
        this.dislikes = dislikes;
        this.email = email;
        this.images = images;
        this.numresp = numresp;
        this.body = body;
        this.categoria = categoria;
        this.vistas = vistas;
    }
}


/***/ }),

/***/ "gdYy":
/*!*******************************************************************!*\
  !*** ./src/app/components/main-section/main-section.component.ts ***!
  \*******************************************************************/
/*! exports provided: MainSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSectionComponent", function() { return MainSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/posts-service.service */ "XDXz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _widgets_categories_bar_categories_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/categories-bar/categories-bar.component */ "xmJq");
/* harmony import */ var _widgets_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/search-box/search-box.component */ "+rxs");
/* harmony import */ var _widgets_tags_box_tags_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/tags-box/tags-box.component */ "2uCp");
/* harmony import */ var _widgets_baby_yoda_baby_yoda_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/baby-yoda/baby-yoda.component */ "QXgJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../posts/posts.component */ "hMVD");










const _c0 = ["contenedor"];
function MainSectionComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-posts", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("posts", ctx_r2.posts);
} }
function MainSectionComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainSectionComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainSectionComponent_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainSectionComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainSectionComponent_div_8_div_1_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainSectionComponent_div_8_div_2_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainSectionComponent_div_8_div_3_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainSectionComponent_div_8_div_4_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Full-Stack");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Big-Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Cybersecurity");
} }
class MainSectionComponent {
    constructor(postS, AcRoute) {
        this.postS = postS;
        this.AcRoute = AcRoute;
        this.categorie = "All";
    }
    ngOnInit() {
        // Utilizar datos del resolver para dárselas a la propiedas 'posts'
        this.AcRoute.data.subscribe(response => {
            this.posts = response.data.posts;
        });
    }
    ngAfterViewInit() {
        this.mostrarcontent();
    }
    // Crear animaciones de desplazamiento
    mostrarcontent() {
        this.content.nativeElement.classList.remove('animado');
        this.content.nativeElement.classList.add('mostrarderecha');
    }
    //Filtrar por Categorías
    filtrarPorCat(category) {
        if (category == "all") {
            this.postS.getPosts().subscribe(resp => {
                this.posts = resp.posts;
            });
        }
        else {
            this.postS.getPostsbyCategory(category).subscribe(resp => {
                this.posts = resp.posts;
            });
        }
    }
    // Filtrar por término de busqueda;
    filtrarPorBusqueda(termino) {
        this.postS.getPostsbyWord(termino).subscribe(resp => {
            this.posts = resp.posts;
        });
    }
}
MainSectionComponent.ɵfac = function MainSectionComponent_Factory(t) { return new (t || MainSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_1__["PostsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
MainSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainSectionComponent, selectors: [["app-main-section"]], viewQuery: function MainSectionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 9, vars: 2, consts: [[1, "row", "container", "justify-content-center"], [1, "categories", "col-lg-2", "m-1"], ["contenedor", ""], [1, "cajacol1"], [1, "", 3, "cat"], [1, "m-1", 3, "posts", "onSearch"], [3, "onTagClick"], ["class", "posts  m-1 col-lg-9", "ngSwitch", "categorie", 4, "ngIf"], ["ngSwitch", "categorie", 1, "posts", "m-1", "col-lg-9"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], [3, "posts"]], template: function MainSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-categories-bar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cat", function MainSectionComponent_Template_app_categories_bar_cat_4_listener($event) { return ctx.filtrarPorCat($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-search-box", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSearch", function MainSectionComponent_Template_app_search_box_onSearch_5_listener($event) { return ctx.filtrarPorBusqueda($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-tags-box", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onTagClick", function MainSectionComponent_Template_app_tags_box_onTagClick_6_listener($event) { return ctx.filtrarPorBusqueda($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-baby-yoda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MainSectionComponent_div_8_Template, 5, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("posts", ctx.posts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts);
    } }, directives: [_widgets_categories_bar_categories_bar_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesBarComponent"], _widgets_search_box_search_box_component__WEBPACK_IMPORTED_MODULE_4__["SearchBoxComponent"], _widgets_tags_box_tags_box_component__WEBPACK_IMPORTED_MODULE_5__["TagsBoxComponent"], _widgets_baby_yoda_baby_yoda_component__WEBPACK_IMPORTED_MODULE_6__["BabyYodaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_8__["PostsComponent"]], styles: [".row[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n@media screen and (max-width: 700px) {\n  .cajacol1[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWluLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLGFBQUE7RUFDTjtBQUNGIiwiZmlsZSI6Im1haW4tc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAuY2FqYWNvbDEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-section',
                templateUrl: './main-section.component.html',
                styleUrls: ['./main-section.component.scss']
            }]
    }], function () { return [{ type: src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_1__["PostsServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["contenedor"]
        }] }); })();


/***/ }),

/***/ "hMVD":
/*!*****************************************************!*\
  !*** ./src/app/components/posts/posts.component.ts ***!
  \*****************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _widgets_ref_bar_ref_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/ref-bar/ref-bar.component */ "1WV5");







const _c0 = ["contenedor"];
function PostsComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "*Reg\u00EDstrate para poder compartir tus posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return ["/posts/", a1]; };
function PostsComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-ref-bar", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, post_r4._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](post_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Modificado por \u00FAltima vez: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 5, post_r4.updatedAt, "shortDate"), " a las ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 8, post_r4.updatedAt, "mediumTime"), " ");
} }
const _c2 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
function PostsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostsComponent_div_10_div_1_Template, 17, 13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "pagination-controls", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PostsComponent_div_10_Template_pagination_controls_pageChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r2.posts, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r2.p)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxSize", 5);
} }
class PostsComponent {
    constructor(authS) {
        this.authS = authS;
        this.p = 1;
        this.lista = [];
        //Comprobar si hay un usuario registrado
        this.tokenValid = this.authS.getUser();
    }
    ngOnInit() {
        scrollTo(0, 0);
    }
    ngAfterViewInit() {
        this.mostrarcontent();
    }
    // Crear la animación de desplazamiento 
    mostrarcontent() {
        this.content.nativeElement.classList.remove('animado');
        this.content.nativeElement.classList.add('mostrarizquierda');
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
PostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostsComponent, selectors: [["app-posts"]], viewQuery: function PostsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { posts: "posts" }, decls: 11, vars: 5, consts: [[1, "container", "animado"], ["contenedor", ""], [1, "row", "justify-content-around"], [1, "text-center"], [1, "col-md-3"], [1, "btn", "btn-warning", 3, "disabled"], ["routerLink", "/addPost"], [4, "ngIf"], ["class", "recip", 4, "ngIf"], [1, "gr"], [1, "recip"], ["class", "postL", 4, "ngFor", "ngForOf"], [1, "pag", "row", "justify-content-center", "p-2"], [1, "my-pagination", 3, "maxSize", "pageChange"], [1, "postL"], ["div", ""], [3, "routerLink"], [1, "row", "m-1"], [1, "col-md-4"], [3, "post"], [1, "col-md-4", "ml-2"], [1, "row", "px-2", "justify-content-center"], ["id", "blue"], [1, "col-md-3", "ml-2", "align-self-end"], [1, "row", "justify-content-center"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add Post +");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PostsComponent_p_9_Template, 3, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PostsComponent_div_10_Template, 5, 7, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.tokenValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](!ctx.tokenValid ? "text-light not-active" : "text-light");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tokenValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], _widgets_ref_bar_ref_bar_component__WEBPACK_IMPORTED_MODULE_5__["RefBarComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  border: 3px solid var(--primary);\n  border-radius: 5px;\n  padding: 10px;\n  background-color: var(--fondo);\n}\n\n.recip[_ngcontent-%COMP%] {\n  margin-top: 0.8em;\n}\n\n.recip[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  text-decoration: none;\n}\n\n.postL[_ngcontent-%COMP%] {\n  border: 2px solid var(--blue);\n  border-radius: 10px;\n  margin: 1em 0;\n  padding: 1em;\n  align-items: center;\n}\n\n#blue[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n\n.not-active[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: help;\n}\n\n.gr[_ngcontent-%COMP%] {\n  color: #a7a6a6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb3N0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUFHSjs7QUFEQTtFQUNJLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtBQUtKOztBQUFBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0FBSUoiLCJmaWxlIjoicG9zdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbmRvKTtcclxufVxyXG4ucmVjaXAge1xyXG4gICAgbWFyZ2luLXRvcDogMC44ZW07XHJcbn1cclxuLnJlY2lwIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5wb3N0TCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibHVlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4jYmx1ZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XHJcbn1cclxuLm15LXBhZ2luYXRpb24gICB7XHJcbiAgICBcclxufVxyXG4ubm90LWFjdGl2ZSB7IFxyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxyXG4gICAgY3Vyc29yOmhlbHA7IFxyXG59IFxyXG4uZ3Ige1xyXG4gICAgY29sb3I6IHJnYigxNjcsIDE2NiwgMTY2KTtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-posts',
                templateUrl: './posts.component.html',
                styleUrls: ['./posts.component.scss']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, { posts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["contenedor"]
        }] }); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_validators_email_validator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/validators/email-validator.service */ "xQV9");
/* harmony import */ var src_app_validators_user_name_validator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/validators/user-name-validator.service */ "RnxK");
/* harmony import */ var src_app_validators_campos_iguales_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/validators/campos-iguales.service */ "481S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = ["nav"];
const _c1 = ["brand"];
const _c2 = ["modal"];
function NavbarComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.useri.name);
} }
function NavbarComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login/Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mi cuenta");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_hr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function NavbarComponent_a_24_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_a_24_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log-Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El username es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La contrase\u00F1a es obligatoria ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "* Debe de tener al menos 6 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_span_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El nombre es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_span_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Los apellidos son obligatorios");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_span_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.usernameErrorMsg);
} }
function NavbarComponent_span_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.emailErrorMsg);
} }
function NavbarComponent_span_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La contrase\u00F1a es obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "* Debe de tener al menos 6 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_span_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Las contrase\u00F1as deben de coincidir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_span_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Las contrase\u00F1as deben de coincidir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(authS, router, fb, emailValidator, usernameValidator, camposigualesValidator) {
        this.authS = authS;
        this.router = router;
        this.fb = fb;
        this.emailValidator = emailValidator;
        this.usernameValidator = usernameValidator;
        this.camposigualesValidator = camposigualesValidator;
        this.logged = this.authS.getUser();
        this.useri = this.userInfo;
        // Formulario de registro
        this.registerForm = this.fb.group({
            name: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            surname: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, [this.usernameValidator]],
            email: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email], [this.emailValidator]],
            password: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password2: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        }, {
            validators: [this.camposigualesValidator.camposIguales('password', 'password2')]
        });
        // Formulario de login
        this.loginForm = this.fb.group({
            username: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    get userInfo() {
        const info = JSON.parse(sessionStorage.getItem('uInf'));
        if (info === null)
            return { id: '' };
        return info;
    }
    get emailErrorMsg() {
        var _a;
        const errors = (_a = this.registerForm.get('email')) === null || _a === void 0 ? void 0 : _a.errors;
        if (errors === null || errors === void 0 ? void 0 : errors.required) {
            return 'Email es obligatorio, mínimo 6 caracteres';
        }
        else if (errors === null || errors === void 0 ? void 0 : errors.email) {
            return 'El valor ingresado no tiene formato de correo';
        }
        else if (errors === null || errors === void 0 ? void 0 : errors.emailTomado) {
            return 'El email ya fue tomado, la próxima vez deberías estar más rápido';
        }
        return '';
    }
    get usernameErrorMsg() {
        var _a;
        const errors = (_a = this.registerForm.get('username')) === null || _a === void 0 ? void 0 : _a.errors;
        if (errors === null || errors === void 0 ? void 0 : errors.required) {
            return 'El username es obligatorio';
        }
        else if (errors === null || errors === void 0 ? void 0 : errors.usernameTomado) {
            return 'Este username ya existe, podría ser tu hermano gemelo malvado; Escalofriante !';
        }
        return '';
    }
    ngOnInit() {
    }
    /* Función para loguear usuario en la DB y obtener token
    * @param form: recibe el form para hacerle us reset
    */
    loguear(form) {
        let data = this.loginForm.value;
        this.authS.login(data).subscribe(res => {
            sessionStorage.setItem('accesToken', res.dataUser.accessToken);
            sessionStorage.setItem('uInf', JSON.stringify(res.dataUser));
            // document.cookie = `udat= ${JSON.stringify(res.dataUser)}; expires= ${res.dataUser.expiresIn}`;
            this.authS.setUser();
            this.router.navigateByUrl('/home');
            window.location.reload();
        }, (err) => {
            window.alert('Ha ocurrido un error, revisa que tu nombre de Usuario y Contraseña sean los indicados');
        });
        form.reset();
    }
    /* Función para registrar nuevo usuario en la DB y obtener token
    * @param form: recibe el form para hacerle us reset
    */
    registrar(form) {
        let data = this.registerForm.value;
        this.authS.newUser(data).subscribe(res => {
            window.alert('Usuario Registrado Correctamente');
            sessionStorage.setItem('accesToken', res.dataUser.accessToken);
            sessionStorage.setItem('uInf', JSON.stringify(res.dataUser));
            this.authS.setUser();
            form.reset();
            this.router.navigateByUrl('/home');
            window.location.reload();
        }, (err) => {
            window.alert('Error en el registro, Compruebe que todos los campos están rellenados de manera correcta');
        });
    }
    // Función log-out, elimina datos de usuario y token de Sstorage y redirecciona a la home
    logout() {
        sessionStorage.removeItem('accesToken');
        sessionStorage.removeItem('uInf');
        this.router.navigateByUrl('/home');
    }
    // Función para verificar si los campos de registerForm tienen algún error
    campoEsValido(campo) {
        return this.registerForm.controls[campo].errors
            && this.registerForm.controls[campo].touched;
    }
    // Función para verificar si los campos de loginForm tienen algún error
    campoEsValido2(campo) {
        return this.loginForm.controls[campo].errors
            && this.loginForm.controls[campo].touched;
    }
    // Función que quita el padding de la navbar cuando el scrollY de la página es superior al número deseado
    onScroll() {
        let links = document.querySelectorAll('.nav-link');
        if (window.scrollY >= 20) {
            links.forEach((item) => {
                item.classList.add('xx');
            });
            this.navbar.nativeElement.classList.remove('py-3');
            this.brand.nativeElement.classList.add('x');
        }
        else {
            window.scroll(0, 0);
            links.forEach((item) => {
                item.classList.remove('xx');
            });
            this.navbar.nativeElement.classList.add('py-3');
            this.brand.nativeElement.classList.remove('x');
        }
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_validators_email_validator_service__WEBPACK_IMPORTED_MODULE_4__["EmailValidatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_validators_user_name_validator_service__WEBPACK_IMPORTED_MODULE_5__["UserNameValidatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_validators_campos_iguales_service__WEBPACK_IMPORTED_MODULE_6__["CamposIgualesService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], viewQuery: function NavbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navbar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.brand = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
    } }, decls: 124, vars: 18, consts: [[1, "navbar", "navbar-expand-md", "py-3", "px-5", 3, "scroll"], ["nav", ""], ["routerLink", "/home", "routerLinkActive", "active", 1, "navbar-brand", "text-light"], ["brand", ""], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavbar", 1, "navbar-toggler"], [1, "text-light"], [1, "fas", "fa-bars", "fa-2x"], ["id", "collapsibleNavbar", 1, "collapse", "navbar-collapse", "justify-content-end", "px-5"], [1, "navbar-nav", "text-center"], [1, "nav-item"], ["routerLink", "/home", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "nav-link"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbardrop", "data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], [1, "fas", "fa-user-circle", "fa-2x"], ["class", "ml-1", 4, "ngIf"], [1, "dropdown-menu"], ["class", "dropdown-item nav-link", "data-toggle", "modal", "data-target", "#loginModal", "href", "#", 4, "ngIf"], ["class", "dropdown-item nav-link", "routerLink", "/cuenta", "routerLinkActive", "active", 4, "ngIf"], [4, "ngIf"], ["class", "dropdown-item nav-link", "href", "#", 3, "click", 4, "ngIf"], ["id", "loginModal", "tabindex", "-2", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["modal", ""], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header", "border-bottom-0"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-title", "text-center"], [1, "d-flex", "flex-column", "text-center"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "formControlName", "username", "id", "email1", "placeholder", "Tu nombre de usuario...", "required", "", 1, "form-control"], ["class", "form-text text-danger", 4, "ngIf"], ["type", "password", "formControlName", "password", "id", "password1", "placeholder", "Tu contrase\u00F1a...", "required", "", 1, "form-control"], ["type", "submit", "data-dismiss", "modal", "aria-label", "Close", 1, "btn", "btn-block", "btn-round", 3, "disabled", "click"], [1, "text-center", "text-muted", "delimiter"], [1, "d-flex", "justify-content-center", "social-buttons"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Twitter", 1, "mx-2", "btn", "btn-secondary", "btn-round"], [1, "fab", "fa-twitter"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Facebook", 1, "mx-2", "btn", "btn-secondary", "btn-round"], [1, "fab", "fa-facebook"], ["type", "button", "data-toggle", "tooltip", "data-placement", "top", "title", "Linkedin", 1, "mx-2", "btn", "btn-secondary", "btn-round"], [1, "fab", "fa-linkedin"], [1, "modal-footer", "d-flex", "justify-content-center"], [1, "signup-section"], ["href", "#", "data-toggle", "modal", "data-target", "#signUpModal", "data-dismiss", "modal", "aria-label", "Close", 1, "text-info"], ["id", "signUpModal", "tabindex", "-2", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "d-flex", "flex-column"], [3, "formGroup"], ["for", "name"], ["type", "text", "formControlName", "name", "placeholder", "Tu nombre...", "required", "", 1, "form-control"], ["type", "text", "formControlName", "surname", "placeholder", "Tus Apellidos...", "required", "", 1, "form-control"], ["for", "username"], ["type", "text", "formControlName", "username", "placeholder", "Tus Nombre de Usuario...", "required", "", "minlength", "6", 1, "form-control"], ["for", "email"], ["type", "email", "formControlName", "email", "placeholder", "Tu Correo electr\u00F3nico...", "required", "", 1, "form-control"], ["for", "password"], ["type", "password", "formControlName", "password", "placeholder", "Tu Contrase\u00F1a...", "required", "", "minlength", "6", 1, "form-control"], ["for", "password2"], ["type", "password", "formControlName", "password2", "placeholder", "Repite la contrase\u00F1a", "required", "", "minlength", "6", 1, "form-control"], ["data-dismiss", "modal", "aria-label", "Close", 1, "text-info"], [1, "ml-1"], ["data-toggle", "modal", "data-target", "#loginModal", "href", "#", 1, "dropdown-item", "nav-link"], ["routerLink", "/cuenta", "routerLinkActive", "active", 1, "dropdown-item", "nav-link"], ["href", "#", 1, "dropdown-item", "nav-link", 3, "click"], [1, "form-text", "text-danger"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_Template_nav_scroll_0_listener() { return ctx.onScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Neoland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NavbarComponent_span_19_Template, 3, 1, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, NavbarComponent_a_21_Template, 2, 0, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NavbarComponent_a_22_Template, 2, 0, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NavbarComponent_hr_23_Template, 1, 0, "hr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, NavbarComponent_a_24_Template, 2, 0, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "form", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NavbarComponent_Template_form_ngSubmit_38_listener() { return ctx.loguear(ctx.loginForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, NavbarComponent_span_41_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, NavbarComponent_span_44_Template, 4, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_45_listener() { return ctx.loguear(ctx.loginForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "or use a social network");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Not a member yet? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 48, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "form", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, NavbarComponent_span_80_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Apellidos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, NavbarComponent_span_85_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Nombre de Usuario:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, NavbarComponent_span_90_Template, 2, 1, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Correo Electr\u00F3nico:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, NavbarComponent_span_95_Template, 2, 1, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, NavbarComponent_span_100_Template, 4, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, NavbarComponent_span_101_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Confirma la contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, NavbarComponent_span_106_Template, 2, 0, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_107_listener() { return ctx.registrar(ctx.registerForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Reg\u00EDstrate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "or use a social network");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Tienes alguna pregunta ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.useri);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.logged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.campoEsValido2("username"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.campoEsValido2("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.campoEsValido("name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.campoEsValido("surname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.campoEsValido("username"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.campoEsValido("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.campoEsValido("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.campoEsValido("password2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.campoEsValido("password2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"]], styles: ["nav[_ngcontent-%COMP%] {\n  line-height: 30px;\n  position: sticky;\n  width: 100%;\n  top: 0;\n  z-index: 9999;\n  transition: all 0.2s;\n}\n\n.navbar-nav[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  margin: auto 2px;\n  font-family: \"Press Start 2P\", cursive;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-image: linear-gradient(210deg, orange, #d4b374);\n  font-weight: bold;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: white;\n  transition: all 0.5s;\n  border-radius: 20px;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  background-color: var(--blue);\n}\n\n.navbar-toggler-icon[_ngcontent-%COMP%] {\n  color: blue !important;\n}\n\n.btn-block[_ngcontent-%COMP%] {\n  background-color: #ffbd43;\n}\n\n.x[_ngcontent-%COMP%] {\n  font-size: smaller;\n}\n\n.xx[_ngcontent-%COMP%] {\n  font-size: small;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  transition: all 0.4s;\n  font-family: \"Press Start 2P\", cursive;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  background-image: linear-gradient(210deg, orange, #d4b374);\n  border-radius: 10px;\n}\n\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  margin: 10px;\n  width: -webkit-min-content;\n  width: min-content;\n}\n\n#signUpModal[_ngcontent-%COMP%] {\n  max-height: 100%;\n  overflow-y: scroll;\n}\n\n#signUpModal[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  box-shadow: 2px 2px 3px var(--primary), -2px -2px 3px var(--primary);\n  border-color: var(--primary) !important;\n}\n\ntextarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  box-shadow: 2px 2px 3px var(--primary), -2px -2px 3px var(--primary);\n  border-color: var(--primary) !important;\n}\n\n@media screen and (min-width: 700px) {\n  .dropdown-menu[_ngcontent-%COMP%] {\n    left: -130px;\n    width: 270px;\n  }\n\n  .navbar-brand[_ngcontent-%COMP%] {\n    font-size: x-large;\n  }\n\n  .x[_ngcontent-%COMP%] {\n    font-size: medium;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtFQUNBLHNDQUFBO0FBR0o7O0FBREE7RUFDSSwwREFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhBO0VBQ0ksNkJBQUE7QUFNSjs7QUFKQTtFQUNJLHNCQUFBO0FBT0o7O0FBTEM7RUFDRyx5QkFBQTtBQVFKOztBQUxBO0VBQ0ksa0JBQUE7QUFRSjs7QUFOQTtFQUNJLGdCQUFBO0FBU0o7O0FBUEE7RUFDSSxvQkFBQTtFQUNBLHNDQUFBO0FBVUo7O0FBUkE7RUFDSSwwREFBQTtFQUNBLG1CQUFBO0FBV0o7O0FBVEE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQUEsa0JBQUE7QUFZSjs7QUFWQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFhSjs7QUFWQTtFQUNJLGFBQUE7QUFhSjs7QUFWQTtFQUNJLG9FQUFBO0VBQ0EsdUNBQUE7QUFhSjs7QUFYQTtFQUNJLG9FQUFBO0VBQ0EsdUNBQUE7QUFjSjs7QUFYQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUFjTjs7RUFaRTtJQUNJLGtCQUFBO0VBZU47O0VBYkU7SUFDSSxpQkFBQTtFQWdCTjtBQUNGIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgICBsaW5lLWhlaWdodDozMHB4O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcbi5uYXZiYXItbmF2IHtcclxuICAgIGxpbmUtaGVpZ2h0OjMwcHg7XHJcbn1cclxuLm5hdi1pdGVtIHtcclxuICAgIG1hcmdpbjogYXV0byAycHg7XHJcbiAgICBmb250LWZhbWlseTogJ1ByZXNzIFN0YXJ0IDJQJywgY3Vyc2l2ZTtcclxufVxyXG4ubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMTBkZWcsIG9yYW5nZSwgcmdiKDIxMiwgMTc5LCAxMTYpKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkIDtcclxufVxyXG4ubmF2LWxpbmsge1xyXG4gICAgY29sb3I6IHdoaXRlOyBcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4ubmF2LWxpbms6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XHJcbn1cclxuLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gICAgY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxufVxyXG4gLmJ0bi1ibG9jayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxODksIDY3KTtcclxufVxyXG5cclxuLngge1xyXG4gICAgZm9udC1zaXplOnNtYWxsZXI7XHJcbn1cclxuLnh4IHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIGZvbnQtZmFtaWx5OiAnUHJlc3MgU3RhcnQgMlAnLCBjdXJzaXZlO1xyXG59XHJcbi5kcm9wZG93bi1tZW51IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMTBkZWcsIG9yYW5nZSwgcmdiKDIxMiwgMTc5LCAxMTYpKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnUgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB3aWR0aDogbWluLWNvbnRlbnQ7XHJcbn1cclxuI3NpZ25VcE1vZGFsIHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbiNzaWduVXBNb2RhbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogIDJweCAycHggM3B4IHZhcigtLXByaW1hcnkpLCAtMnB4IC0ycHggM3B4IHZhcigtLXByaW1hcnkpIDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSkgIWltcG9ydGFudDtcclxufVxyXG50ZXh0YXJlYTpmb2N1cywgc2VsZWN0OmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6ICAycHggMnB4IDNweCB2YXIoLS1wcmltYXJ5KSwgLTJweCAtMnB4IDNweCB2YXIoLS1wcmltYXJ5KSA7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XHJcbiAgICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgbGVmdDogLTEzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyNzBweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXItYnJhbmQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIH1cclxuICAgIC54IHtcclxuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIH1cclxuICAgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_validators_email_validator_service__WEBPACK_IMPORTED_MODULE_4__["EmailValidatorService"] }, { type: src_app_validators_user_name_validator_service__WEBPACK_IMPORTED_MODULE_5__["UserNameValidatorService"] }, { type: src_app_validators_campos_iguales_service__WEBPACK_IMPORTED_MODULE_6__["CamposIgualesService"] }]; }, { navbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["nav"]
        }], brand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["brand"]
        }], modal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["modal"]
        }] }); })();


/***/ }),

/***/ "jJYJ":
/*!************************************************************!*\
  !*** ./src/app/services/resolves/post-resolver.service.ts ***!
  \************************************************************/
/*! exports provided: PostResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostResolverService", function() { return PostResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PostResolverService {
    constructor(http) {
        this.http = http;
    }
    /* Resolver encargado de obtener todos los posts
    * Devuelve un observable con todos los posts
    */
    resolve(route) {
        const url = `https://foro-app-jr.herokuapp.com/api/posts`;
        return this.http.get(url);
    }
}
PostResolverService.ɵfac = function PostResolverService_Factory(t) { return new (t || PostResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PostResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostResolverService, factory: PostResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AuthService {
    constructor(_http) {
        this._http = _http;
        this.user = sessionStorage.getItem('accesToken') && sessionStorage.getItem('uInf') ? true : false;
    }
    getUser() {
        return this.user;
    }
    setUser() {
        this.user = !this.user;
    }
    /* Función encargada de llamar al endpoint para crear un nuevo usuario con la información obtenida por parámetro
    *  @params usuario: contiene la informacíon del nuevo usuario a crear;
    *  Devuelve un observable que contiene la info no sensible del usuario creado
    */
    newUser(usuario) {
        const url = `https://foro-app-jr.herokuapp.com/api/register`;
        return this._http.post(url, usuario);
    }
    /* Función encargada de llamar al endpoint para loguear un usuario existente en la DB con la información obtenida por parámetro
    *  @params userData: contiene la informacíon del formulario de login
    *  Devuelve un observable que contiene la info no sensible del usuario logueado
    */
    login(userData) {
        const url = `https://foro-app-jr.herokuapp.com/api/login`;
        return this._http.post(url, userData);
    }
    /* Función encargada de llamar al endpoint para crear editar un usuario existenete en la DB  con la información obtenida por parámetro
    *  @params changes: contiene la informacíon para editar usuario;
    *  @params id: es el id del usuario que se desea editar, se pasa como parámetro en el endpoint;
    *  Devuelve un observable que contiene la info no sensible del usuario editado
    */
    editUser(changes, id) {
        const url = `https://foro-app-jr.herokuapp.com/api/usuarios/${id}`;
        return this._http.put(url, changes);
    }
    /* Función encargada de llamar al endpoint para validar una cuenta mediante el "x-token" de los headers
    *  @params usuario: contiene la informacíon del nuevo usuario a crear
    *  Devuelve un observable que contiene un booleano dependiendo de si la verificacion es correcta o no
    */
    validarcuenta() {
        const url = `https://foro-app-jr.herokuapp.com/api/validarcuenta`;
        return this._http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((resp) => resp.verificado));
    }
    /* Función encargada de llamar al endpoint para borrar usuario con el id obtenido por parámetro
    *  @params usuario: string con el username del usuario
    *  @params id: string con el id del usuario;
    * @params password: La password enviada para verificar si el usuario es el propietario de la cuenta;
    *  Devuelve un observable que contiene la info no sensible del usuario borrado
    */
    deleteUser(usuario, id, password) {
        const url = `https://foro-app-jr.herokuapp.com/api/usuarios/${usuario}/${id}`;
        return this._http.post(url, password);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "nruq":
/*!*************************************************************!*\
  !*** ./src/app/components/views/cuenta/cuenta.component.ts ***!
  \*************************************************************/
/*! exports provided: CuentaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CuentaComponent", function() { return CuentaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/posts-service.service */ "XDXz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_validators_campos_iguales_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/validators/campos-iguales.service */ "481S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../posts/posts.component */ "hMVD");










function CuentaComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El nombre es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CuentaComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Los apellidos son obligatorios");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CuentaComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El username es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CuentaComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.emailErrorMsg);
} }
function CuentaComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "La contrase\u00F1a es obligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "* Debe contener al menos 6 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CuentaComponent_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Las contrase\u00F1as deben de coincidir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CuentaComponent_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Las contrase\u00F1as deben de coincidir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CuentaComponent {
    constructor(authS, fb, postS, router, camposigualesValidator) {
        this.authS = authS;
        this.fb = fb;
        this.postS = postS;
        this.router = router;
        this.camposigualesValidator = camposigualesValidator;
        // Formulario para editar usuario
        this.formEditar = this.fb.group({
            name: [this.userI.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            surname: [this.userI.surname, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: [this.userI.username, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [this.userI.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password2: [,],
            password3: [,],
        }, {
            validators: [this.camposigualesValidator.camposIguales('password2', 'password3')]
        });
        this.formBorrar = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    get emailErrorMsg() {
        var _a;
        const errors = (_a = this.formEditar.get('email')) === null || _a === void 0 ? void 0 : _a.errors;
        if (errors === null || errors === void 0 ? void 0 : errors.required) {
            return 'Email es obligatorio';
        }
        else if (errors === null || errors === void 0 ? void 0 : errors.email) {
            return 'El valor ingresado no tiene formato de correo';
        }
        return '';
    }
    get userI() {
        const info = JSON.parse(sessionStorage.getItem('uInf'));
        if (info === null) {
            return { id: '' };
        }
        return info;
    }
    ngOnInit() {
        scrollTo(0, 0);
        this.postS.getPostsbyUserId(this.userI.id).subscribe(resp => {
            this.userPosts = resp;
        });
    }
    /* Función para cambiar los datos de un usuario en la DB y cambiar el contenido de la sesionStorage
    * @param form: recibe por parámetro el formulario para hacerle un reset
    */
    editarUsuario(form) {
        let data = { changes: this.formEditar.value, id: this.userI.id };
        this.authS.editUser(data, this.userI.id).subscribe(data => {
            if (data.ok == false) {
                // form.reset('password', 'password2', 'password3')
                return window.alert(data.msg);
            }
            sessionStorage.setItem('uInf', JSON.stringify(data.dataUser));
            window.alert('Usuario Editado');
            this.router.navigateByUrl('/home').then(() => {
                this.router.navigate(['/cuenta']);
            });
        });
    }
    /* Función para borrar usuario de la DB y remover el contenido de la sesionStorage, después redirecciona a la home
    * @param form: recibe por parámetro el formulario para hacerle un reset
    */
    borrarUsuario(form) {
        this.authS.deleteUser(this.userI.username, this.userI.id, this.formBorrar.value).subscribe(resp => {
            console.log(resp);
            if (resp.msg === 'contraseña incorrecta') {
                form.reset();
                return window.alert('Contraseña incorrecta');
            }
            sessionStorage.removeItem('accesToken');
            sessionStorage.removeItem('uInf');
            this.router.navigateByUrl('/home').then(() => {
                window.location.reload();
            });
        });
    }
    // Función para validar si los diferentes controllers tienen fallos
    campoEsValido(campo) {
        return this.formEditar.controls[campo].errors
            && this.formEditar.controls[campo].touched;
    }
}
CuentaComponent.ɵfac = function CuentaComponent_Factory(t) { return new (t || CuentaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_3__["PostsServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_validators_campos_iguales_service__WEBPACK_IMPORTED_MODULE_5__["CamposIgualesService"])); };
CuentaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CuentaComponent, selectors: [["app-cuenta"]], decls: 69, vars: 14, consts: [[1, "container"], [1, "row"], [1, "col-md-5", "mt-2"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "formControlName", "name", "required", "", 1, "form-control"], ["class", "form-text text-danger", 4, "ngIf"], ["type", "text", "formControlName", "surname", "required", "", 1, "form-control"], ["for", "username"], ["type", "text", "formControlName", "username", "required", "", "minlength", "6", 1, "form-control"], ["for", "email"], ["type", "email", "formControlName", "email", "required", "", 1, "form-control"], ["for", "password"], ["type", "password", "formControlName", "password", "required", "", "minlength", "6", 1, "form-control"], ["for", "password2"], ["type", "password", "formControlName", "password2", "minlength", "6", 1, "form-control"], ["for", "password3"], ["type", "password", "formControlName", "password3", "placeholder", "Repite la contrase\u00F1a", "minlength", "6", 1, "form-control"], ["type", "submit", 1, "btn", "btn-block", "btn-round", 3, "disabled", "click"], ["type", "submit", "data-toggle", "modal", "data-target", "#modalUser", 1, "btn", "btn-block", "btn-round"], [1, "col-md-6", "mt-2"], [1, "text-center"], [3, "posts"], ["id", "modalUser", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-body"], ["type", "password", "formControlName", "password", "name", "password", 1, "form-control"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn"], ["type", "button", "data-dismiss", "modal", 1, "btn", 3, "click"], [1, "form-text", "text-danger"]], template: function CuentaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Informaci\u00F3n de Usuario: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CuentaComponent_span_14_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Apellidos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CuentaComponent_span_19_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Nombre de Usuario:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CuentaComponent_span_24_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Correo Electr\u00F3nico:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CuentaComponent_span_29_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CuentaComponent_span_34_Template, 4, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Nueva Contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CuentaComponent_span_39_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Confirma nueva contrase\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CuentaComponent_span_44_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CuentaComponent_Template_button_click_45_listener() { return ctx.editarUsuario(ctx.formEditar); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Editar Informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Borrar Usario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Mis Posts: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-posts", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Introduce tu contrase\u00F1a para borrar la cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CuentaComponent_Template_button_click_67_listener() { return ctx.borrarUsuario(ctx.formBorrar); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Borrar Definitivamente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bienvenido, ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 12, ctx.userI.name), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formEditar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.campoEsValido("name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.campoEsValido("surname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.campoEsValido("username"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.campoEsValido("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.campoEsValido("password"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.campoEsValido("password3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.campoEsValido("password3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.formEditar.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("posts", ctx.userPosts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formBorrar);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MinLengthValidator"], _posts_posts_component__WEBPACK_IMPORTED_MODULE_7__["PostsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  padding: 1em;\n  border: 2px solid var(--secondary);\n  background-color: var(--fondo);\n}\n\n#modalUser[_ngcontent-%COMP%] {\n  top: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY3VlbnRhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxRQUFBO0FBQ0oiLCJmaWxlIjoiY3VlbnRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9uZG8pO1xyXG59XHJcblxyXG4jbW9kYWxVc2VyIHtcclxuICAgIHRvcDogMzAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CuentaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cuenta',
                templateUrl: './cuenta.component.html',
                styleUrls: ['./cuenta.component.scss']
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_posts_service_service__WEBPACK_IMPORTED_MODULE_3__["PostsServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_validators_campos_iguales_service__WEBPACK_IMPORTED_MODULE_5__["CamposIgualesService"] }]; }, null); })();


/***/ }),

/***/ "r2QT":
/*!****************************************************************!*\
  !*** ./src/app/services/resolves/comments-resolver.service.ts ***!
  \****************************************************************/
/*! exports provided: CommentsResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsResolverService", function() { return CommentsResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CommentsResolverService {
    constructor(http) {
        this.http = http;
    }
    /* Resolver encargado de obtener los comentarios coincidentes con el postId que se pasa como parametro de la ruta
    * Devuelve un observable con los comentarios coincidentes
    */
    resolve(route) {
        const id = route.params.id;
        const url = `https://foro-app-jr.herokuapp.com/api/comments/${id}`;
        return this.http.get(url);
    }
}
CommentsResolverService.ɵfac = function CommentsResolverService_Factory(t) { return new (t || CommentsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CommentsResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommentsResolverService, factory: CommentsResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_main_section_main_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-section/main-section.component */ "gdYy");
/* harmony import */ var _components_views_add_post_page_add_post_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/views/add-post-page/add-post-page.component */ "5CZ+");
/* harmony import */ var _components_views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/views/contact-us/contact-us.component */ "BMgT");
/* harmony import */ var _components_views_cuenta_cuenta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/views/cuenta/cuenta.component */ "nruq");
/* harmony import */ var _components_views_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/views/not-found/not-found.component */ "R6fY");
/* harmony import */ var _components_views_post_page_post_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/views/post-page/post-page.component */ "IUwK");
/* harmony import */ var _guards_cuenta_usuario_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/cuenta-usuario.guard */ "HqVv");
/* harmony import */ var _services_resolves_comments_resolver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/resolves/comments-resolver.service */ "r2QT");
/* harmony import */ var _services_resolves_onepostresolver_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/resolves/onepostresolver.service */ "9MEO");
/* harmony import */ var _services_resolves_post_resolver_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/resolves/post-resolver.service */ "jJYJ");














const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_main_section_main_section_component__WEBPACK_IMPORTED_MODULE_2__["MainSectionComponent"], resolve: { data: _services_resolves_post_resolver_service__WEBPACK_IMPORTED_MODULE_11__["PostResolverService"] } },
    { path: 'contact', component: _components_views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"] },
    { path: 'posts/:id', component: _components_views_post_page_post_page_component__WEBPACK_IMPORTED_MODULE_7__["PostPageComponent"], resolve: { data: _services_resolves_onepostresolver_service__WEBPACK_IMPORTED_MODULE_10__["OnepostresolverService"], data2: _services_resolves_comments_resolver_service__WEBPACK_IMPORTED_MODULE_9__["CommentsResolverService"] } },
    { path: 'addPost', component: _components_views_add_post_page_add_post_page_component__WEBPACK_IMPORTED_MODULE_3__["AddPostPageComponent"], canActivate: [_guards_cuenta_usuario_guard__WEBPACK_IMPORTED_MODULE_8__["CuentaUsuarioGuard"]] },
    { path: 'cuenta', canActivate: [_guards_cuenta_usuario_guard__WEBPACK_IMPORTED_MODULE_8__["CuentaUsuarioGuard"]], component: _components_views_cuenta_cuenta_component__WEBPACK_IMPORTED_MODULE_5__["CuentaComponent"] },
    { path: '404', component: _components_views_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"], pathMatch: 'full' },
    { path: '**', redirectTo: "/404", pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xQV9":
/*!*******************************************************!*\
  !*** ./src/app/validators/email-validator.service.ts ***!
  \*******************************************************/
/*! exports provided: EmailValidatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailValidatorService", function() { return EmailValidatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class EmailValidatorService {
    constructor(http) {
        this.http = http;
    }
    /*  validador  encargada de validar si el email que se le pasa como param coincide con el de algun usuario de la DB;
    * @param control: string con el valor del email que se quiere validar;
    * Devuelve un observable que contiene un validationError con un booleano según la respuesta;
    */
    validate(control) {
        const email = control.value;
        const path = 'https://foro-app-jr.herokuapp.com/api/verificaemail/' + email;
        return this.http.get(path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => {
            return (resp.existe) ? { emailTomado: true } : null;
        }));
    }
}
EmailValidatorService.ɵfac = function EmailValidatorService_Factory(t) { return new (t || EmailValidatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
EmailValidatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmailValidatorService, factory: EmailValidatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailValidatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "xmJq":
/*!*******************************************************************************!*\
  !*** ./src/app/components/widgets/categories-bar/categories-bar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CategoriesBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesBarComponent", function() { return CategoriesBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class CategoriesBarComponent {
    constructor() {
        this.cat = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.categorie = 'all';
    }
    ngOnInit() {
    }
    showCategorie() {
        console.log(this.categorie);
    }
    // Función encargada de hacer un emit al componente padre cada vez que cambia el input de categoría
    emitCat() {
        this.cat.emit(this.categorie);
    }
}
CategoriesBarComponent.ɵfac = function CategoriesBarComponent_Factory(t) { return new (t || CategoriesBarComponent)(); };
CategoriesBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesBarComponent, selectors: [["app-categories-bar"]], outputs: { cat: "cat" }, decls: 14, vars: 1, consts: [["id", "main", 1, "pt-3", "px-3", "pb-2"], ["for", "Categories"], [3, "click"], ["name", "Categories", "id", "selectorCat", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], ["value", "all"], ["value", "Full-Stack"], ["value", "Big-Data"], ["value", "Cybersecurity"]], template: function CategoriesBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriesBarComponent_Template_h4_click_3_listener() { return ctx.showCategorie(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Categor\u00EDas: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategoriesBarComponent_Template_select_ngModelChange_5_listener($event) { return ctx.categorie = $event; })("change", function CategoriesBarComponent_Template_select_change_5_listener() { return ctx.emitCat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Full-Stack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Big-Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cybersecurity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.categorie);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["#main[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border: 3px solid var(--primary);\n  border-radius: 5px;\n  background-color: var(--fondo);\n}\n\nselect[_ngcontent-%COMP%]:focus {\n  box-shadow: 2px 2px 3px var(--primary), -2px -2px 3px var(--primary) !important;\n  border-color: var(--primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2F0ZWdvcmllcy1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFDQTtFQUNJLCtFQUFBO0VBQ0EsNEJBQUE7QUFFSiIsImZpbGUiOiJjYXRlZ29yaWVzLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXByaW1hcnkpIDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbmRvKTtcclxufVxyXG5zZWxlY3Q6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogIDJweCAycHggM3B4IHZhcigtLXByaW1hcnkpLCAtMnB4IC0ycHggM3B4IHZhcigtLXByaW1hcnkpICFpbXBvcnRhbnQgO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-categories-bar',
                templateUrl: './categories-bar.component.html',
                styleUrls: ['./categories-bar.component.scss']
            }]
    }], function () { return []; }, { cat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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