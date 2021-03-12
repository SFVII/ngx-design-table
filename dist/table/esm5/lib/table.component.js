import { __awaiter, __generator, __values } from "tslib";
import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { CellsComponentList } from "./setting/CellsComponentRegistry";
import { CoreMatTable } from "./core-data-table";
import { animate, state, style, transition, trigger } from "@angular/animations";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/tooltip";
import * as i3 from "@angular/material/table";
import * as i4 from "@angular/material/sort";
import * as i5 from "./cells-component/is-mat-icon/is-mat-icon.component";
import * as i6 from "@angular/router";
import * as i7 from "@angular/material/badge";
import * as i8 from "./cells-component/priority/priority.component";
import * as i9 from "./cells-component/origin/origin.component";
import * as i10 from "./cells-component/name-avatar/name-avatar.component";
import * as i11 from "./cells-component/date-format/date-format.component";
import * as i12 from "@angular/material/paginator";
var _c0 = ["MatPaginatorCurrent"];
var _c1 = ["table"];
function TableComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    var _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵlistener("click", function TableComponent_a_6_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r88); var ctx_r87 = i0.ɵɵnextContext(); var _r83 = i0.ɵɵreference(5); return ctx_r87.reset() && (_r83.value = ""); });
    i0.ɵɵelement(1, "img", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", "Annuler la recherche");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", "/assets/icons/search_off-24px.svg", i0.ɵɵsanitizeUrl);
} }
var _c2 = function (a0, a1) { return [a0, a1]; };
function TableComponent_table_7_ng_container_2_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 20);
    i0.ɵɵelement(1, "app-is-mat-icon", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r95 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r99 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r99.generateClass(i0.ɵɵpureFunction2(3, _c2, column_r95.class, column_r95.align ? "text-align-" + column_r95.align : "text-align-left")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r95.value);
} }
function TableComponent_table_7_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_7_ng_container_2_ng_container_1_th_1_Template, 2, 6, "th", 19);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_table_7_ng_container_2_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 23);
    i0.ɵɵelement(1, "app-is-mat-icon", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r95 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r101 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r101.generateClass(i0.ɵɵpureFunction2(3, _c2, column_r95.class, column_r95.align ? "text-align-" + column_r95.align : "text-align-left")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r95.value);
} }
function TableComponent_table_7_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_7_ng_container_2_ng_container_2_th_1_Template, 2, 6, "th", 22);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-is-mat-icon", 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var column_r95 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r95.display);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var element_r103 = i0.ɵɵnextContext(3).$implicit;
    var column_r95 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r103[column_r95.key], " ");
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 30);
    i0.ɵɵtemplate(1, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_ng_container_1_Template, 2, 1, "ng-container", 16);
    i0.ɵɵtemplate(2, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_ng_container_2_Template, 2, 1, "ng-container", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r103 = i0.ɵɵnextContext(2).$implicit;
    var column_r95 = i0.ɵɵnextContext().$implicit;
    var ctx_r111 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("routerLink", column_r95.override ? ctx_r111.buildLink(column_r95.override, element_r103) : element_r103[column_r95.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r95.display);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r95.display);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-is-mat-icon", 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var column_r95 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r95.display);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var element_r103 = i0.ɵɵnextContext(3).$implicit;
    var column_r95 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r103[column_r95.key], " ");
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 32);
    i0.ɵɵtemplate(1, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_ng_container_1_Template, 2, 1, "ng-container", 16);
    i0.ɵɵtemplate(2, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_ng_container_2_Template, 2, 1, "ng-container", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r103 = i0.ɵɵnextContext(2).$implicit;
    var column_r95 = i0.ɵɵnextContext().$implicit;
    var ctx_r112 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("routerLink", column_r95.override ? ctx_r112.buildLink(column_r95.override, element_r103) : element_r103[column_r95.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r95.display);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r95.display);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_Template, 3, 3, "a", 28);
    i0.ɵɵtemplate(2, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_Template, 3, 3, "a", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var element_r103 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", element_r103.new);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !element_r103.new);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "icon-priority", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var element_r103 = i0.ɵɵnextContext().$implicit;
    var column_r95 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", element_r103[column_r95.key]);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "icon-origin", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var element_r103 = i0.ɵɵnextContext().$implicit;
    var column_r95 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", element_r103[column_r95.key]);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "name-avatar", 34);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var element_r103 = i0.ɵɵnextContext().$implicit;
    var column_r95 = i0.ɵɵnextContext().$implicit;
    var ctx_r107 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r107.Join(element_r103, column_r95.override));
    i0.ɵɵproperty("src", element_r103[column_r95.key])("matTooltipClass", "my-tooltip");
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "date-format", 35);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var element_r103 = i0.ɵɵnextContext().$implicit;
    var column_r95 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("date", element_r103[column_r95.key]);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 36);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var element_r103 = i0.ɵɵnextContext().$implicit;
    var column_r95 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r103[column_r95.key] && element_r103[column_r95.key].length ? element_r103[column_r95.key].length : "-", " ");
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var element_r103 = i0.ɵɵnextContext().$implicit;
    var column_r95 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r103[column_r95.key], " ");
} }
function TableComponent_table_7_ng_container_2_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 24);
    i0.ɵɵelementContainerStart(1, 25);
    i0.ɵɵtemplate(2, TableComponent_table_7_ng_container_2_td_3_ng_container_2_Template, 3, 2, "ng-container", 26);
    i0.ɵɵtemplate(3, TableComponent_table_7_ng_container_2_td_3_ng_container_3_Template, 2, 1, "ng-container", 26);
    i0.ɵɵtemplate(4, TableComponent_table_7_ng_container_2_td_3_ng_container_4_Template, 2, 1, "ng-container", 26);
    i0.ɵɵtemplate(5, TableComponent_table_7_ng_container_2_td_3_ng_container_5_Template, 2, 3, "ng-container", 26);
    i0.ɵɵtemplate(6, TableComponent_table_7_ng_container_2_td_3_ng_container_6_Template, 2, 1, "ng-container", 26);
    i0.ɵɵtemplate(7, TableComponent_table_7_ng_container_2_td_3_ng_container_7_Template, 3, 1, "ng-container", 26);
    i0.ɵɵtemplate(8, TableComponent_table_7_ng_container_2_td_3_ng_container_8_Template, 2, 1, "ng-container", 27);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r95 = i0.ɵɵnextContext().$implicit;
    var ctx_r98 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r98.generateClass(i0.ɵɵpureFunction2(9, _c2, column_r95.class, column_r95.align ? "text-align-" + column_r95.align : "")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", column_r95.module);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "button-link");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "priority");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "origin");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "name-avatar");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "date-format");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "count-row");
} }
function TableComponent_table_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 17);
    i0.ɵɵtemplate(1, TableComponent_table_7_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 16);
    i0.ɵɵtemplate(2, TableComponent_table_7_ng_container_2_ng_container_2_Template, 2, 0, "ng-container", 16);
    i0.ɵɵtemplate(3, TableComponent_table_7_ng_container_2_td_3_Template, 9, 12, "td", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var column_r95 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("matColumnDef", column_r95.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r95.sort);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r95.sort);
} }
function TableComponent_table_7_ng_container_3_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 39);
    i0.ɵɵelementStart(1, "div", 40);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "json");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r142 = ctx.$implicit;
    var ctx_r141 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("@detailExpand", element_r142 == ctx_r141.expandedElement ? "expanded" : "collapsed");
    i0.ɵɵattribute("colspan", ctx_r141.columnsToDisplay.length);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, element_r142), " ");
} }
function TableComponent_table_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 37);
    i0.ɵɵtemplate(1, TableComponent_table_7_ng_container_3_td_1_Template, 4, 5, "td", 38);
    i0.ɵɵelementContainerEnd();
} }
function TableComponent_table_7_tr_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 41);
} }
function TableComponent_table_7_ng_container_5_tr_1_Template(rf, ctx) { if (rf & 1) {
    var _r147 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 44);
    i0.ɵɵlistener("click", function TableComponent_table_7_ng_container_5_tr_1_Template_tr_click_0_listener() { i0.ɵɵrestoreView(_r147); var element_r145 = ctx.$implicit; var ctx_r146 = i0.ɵɵnextContext(3); return ctx_r146.expandedElement === element_r145 ? ctx_r146.expandedElement = null : ctx_r146.expandedElement = element_r145; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r145 = ctx.$implicit;
    var ctx_r143 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("expanded", ctx_r143.expandedElement == element_r145);
} }
function TableComponent_table_7_ng_container_5_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 45);
} }
var _c3 = function () { return ["expandedDetailX"]; };
function TableComponent_table_7_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_7_ng_container_5_tr_1_Template, 1, 2, "tr", 42);
    i0.ɵɵtemplate(2, TableComponent_table_7_ng_container_5_tr_2_Template, 1, 0, "tr", 43);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r93 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matRowDefColumns", ctx_r93.columnsToDisplay);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(2, _c3));
} }
function TableComponent_table_7_ng_container_6_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 47);
} }
function TableComponent_table_7_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_7_ng_container_6_tr_1_Template, 1, 0, "tr", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r94 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matRowDefColumns", ctx_r94.columnsToDisplay);
} }
function TableComponent_table_7_Template(rf, ctx) { if (rf & 1) {
    var _r152 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table", 11, 12);
    i0.ɵɵlistener("matSortChange", function TableComponent_table_7_Template_table_matSortChange_0_listener($event) { i0.ɵɵrestoreView(_r152); var ctx_r151 = i0.ɵɵnextContext(); return ctx_r151.data.sortIt($event); });
    i0.ɵɵtemplate(2, TableComponent_table_7_ng_container_2_Template, 4, 3, "ng-container", 13);
    i0.ɵɵtemplate(3, TableComponent_table_7_ng_container_3_Template, 2, 0, "ng-container", 14);
    i0.ɵɵtemplate(4, TableComponent_table_7_tr_4_Template, 1, 0, "tr", 15);
    i0.ɵɵtemplate(5, TableComponent_table_7_ng_container_5_Template, 3, 3, "ng-container", 16);
    i0.ɵɵtemplate(6, TableComponent_table_7_ng_container_6_Template, 2, 1, "ng-container", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r85 = i0.ɵɵnextContext();
    i0.ɵɵproperty("dataSource", ctx_r85.data);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r85.displayedColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r85.displayDetail);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r85.columnsToDisplay);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r85.displayDetail);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r85.displayDetail);
} }
function TableComponent_mat_paginator_8_Template(rf, ctx) { if (rf & 1) {
    var _r155 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-paginator", 48, 49);
    i0.ɵɵlistener("page", function TableComponent_mat_paginator_8_Template_mat_paginator_page_0_listener($event) { i0.ɵɵrestoreView(_r155); var ctx_r154 = i0.ɵɵnextContext(); return ctx_r154.data.fetch($event.pageIndex); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r86 = i0.ɵɵnextContext();
    i0.ɵɵproperty("length", ctx_r86.data.totalElements)("pageSize", ctx_r86.data.size)("pageIndex", ctx_r86.data.number)("hidePageSize", true);
} }
var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.displayDetail = false;
        this.filter = [];
        this.index = 0;
    }
    TableComponent.prototype.ngOnInit = function () {
        this.expandedElement = false;
        this.buildHeaders().catch(function (err) { return console.log('Error build table', err); });
    };
    TableComponent.prototype.buildHeaders = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, k;
            var e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.sort()];
                    case 1:
                        _a.displayedColumns = _e.sent();
                        if (this.displayedColumns) {
                            this.columnsToDisplay = [];
                            try {
                                for (_b = __values(this.displayedColumns), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    k = _c.value;
                                    this.columnsToDisplay.push(k.key);
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TableComponent.prototype.generateClass = function (Class) {
        var e_2, _a;
        var MyClass = ['default-table-class'];
        try {
            for (var Class_1 = __values(Class), Class_1_1 = Class_1.next(); !Class_1_1.done; Class_1_1 = Class_1.next()) {
                var c = Class_1_1.value;
                if (c && c !== '') {
                    MyClass.push(c);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (Class_1_1 && !Class_1_1.done && (_a = Class_1.return)) _a.call(Class_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return MyClass;
    };
    TableComponent.prototype.sort = function () {
        return __awaiter(this, void 0, void 0, function () {
            var compare;
            return __generator(this, function (_a) {
                compare = function (a, b) {
                    return (a.order < b.order ? -1 : (a.order > b.order ? 1 : 0));
                };
                if (this.columnDefinitions) {
                    return [2 /*return*/, this.columnDefinitions.sort(compare)];
                }
                return [2 /*return*/];
            });
        });
    };
    TableComponent.prototype.buildLink = function (override, element) {
        if (override.length >= 2) {
            var basePath = override[0];
            for (var i = 1; i < override.length; i++) {
                basePath += '/' + element[override[i]];
            }
            return basePath;
        }
    };
    TableComponent.prototype.Join = function (elem, override, joinKey) {
        if (joinKey === void 0) { joinKey = '\n'; }
        var value = [];
        for (var x in elem) {
            if (override.indexOf(x) > -1) {
                value.push(elem[x]);
            }
        }
        return value.join(joinKey);
    };
    TableComponent.prototype.reset = function () {
        this.data.filter({
            target: {
                value: ''
            }
        });
        return true;
    };
    TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(); };
    TableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TableComponent, selectors: [["ngx-design-table"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
            i0.ɵɵstaticViewQuery(_c1, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginatorCurrent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sortCurrent = _t.first);
        } }, inputs: { columnDefinitions: "columnDefinitions", displayDetail: "displayDetail", displayComponent: "displayComponent", data: "data" }, decls: 9, vars: 4, consts: [[1, "table-wrapper"], [1, "row", 2, "height", "84px", "background", "transparent!important"], [1, "elevation-z1"], [1, "col-lg-12", "search-container"], ["type", "text", "placeholder", "Recherche", 1, "search-box", 3, "maxLength", "input"], ["filterOngoing", ""], ["class", "close-search", 3, "matTooltip", "click", 4, "ngIf"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "class", "mat-elevation-z8", 3, "dataSource", "matSortChange", 4, "ngIf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "hidePageSize", "page", 4, "ngIf"], [1, "close-search", 3, "matTooltip", "click"], [3, "src"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["table", "matSort"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetailX", 4, "ngIf"], ["mat-header-row", "", 4, "matHeaderRowDef"], [4, "ngIf"], [3, "matColumnDef"], ["mat-cell", "", 3, "class", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "class", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], [3, "input"], ["mat-header-cell", "", 3, "class", 4, "matHeaderCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["matTooltip", "Ouvrir", "class", "mat-button nowboard-btn btn-xs", "matBadge", "*", "matBadgePosition", "before", "matBadgeColor", "accent", 3, "routerLink", 4, "ngIf"], ["matTooltip", "Ouvrir", "class", "mat-button nowboard-btn btn-xs", 3, "routerLink", 4, "ngIf"], ["matTooltip", "Ouvrir", "matBadge", "*", "matBadgePosition", "before", "matBadgeColor", "accent", 1, "mat-button", "nowboard-btn", "btn-xs", 3, "routerLink"], [2, "padding-top", "10px", 3, "input"], ["matTooltip", "Ouvrir", 1, "mat-button", "nowboard-btn", "btn-xs", 3, "routerLink"], [3, "icon"], [3, "matTooltip", "src", "matTooltipClass"], [2, "padding-right", "10px", 3, "date"], [2, "padding-left", "14px"], ["matColumnDef", "expandedDetailX"], ["mat-cell", "", "style", "border-bottom:transparent!important;height: 0", 4, "matCellDef"], ["mat-cell", "", 2, "border-bottom", "transparent!important", "height", "0"], [1, "element-detail"], ["mat-header-row", ""], ["mat-row", "", "class", "element-row", 3, "expanded", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "detail-row", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", 1, "element-row", 3, "click"], ["mat-row", "", 1, "detail-row"], ["mat-row", "", "class", "element-row", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", 1, "element-row"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "hidePageSize", "page"], ["MatPaginatorCurrent", ""]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelementStart(4, "input", 4, 5);
            i0.ɵɵlistener("input", function TableComponent_Template_input_input_4_listener($event) { return ($event.target.value.length > 1 || $event.target.value.length === 0) && $event.target.value.length < 200 ? ctx.data.filter($event) : null; });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, TableComponent_a_6_Template, 2, 2, "a", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, TableComponent_table_7_Template, 7, 6, "table", 7);
            i0.ɵɵtemplate(8, TableComponent_mat_paginator_8_Template, 2, 4, "mat-paginator", 8);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r83 = i0.ɵɵreference(5);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("maxLength", 100);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", _r83.value);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.displayedColumns && ctx.columnsToDisplay);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.data);
        } }, directives: [i1.NgIf, i2.MatTooltip, i3.MatTable, i4.MatSort, i1.NgForOf, i3.MatHeaderRowDef, i3.MatColumnDef, i3.MatCellDef, i3.MatHeaderCellDef, i3.MatHeaderCell, i4.MatSortHeader, i5.IsMatIconComponent, i3.MatCell, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i6.RouterLinkWithHref, i7.MatBadge, i8.PriorityComponent, i9.OriginComponent, i10.NameAvatarComponent, i11.DateFormatComponent, i3.MatHeaderRow, i3.MatRowDef, i3.MatRow, i12.MatPaginator], pipes: [i1.JsonPipe], styles: [".table-wrapper table{width:100%}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .element-row .mat-cell{padding-right:5px}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width:1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width:1440px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:11px!important}.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}"], encapsulation: 2, data: { animation: [trigger('detailExpand', [
                    state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
                    state('expanded', style({ height: '*' })),
                    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ])] } });
    return TableComponent;
}());
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-design-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.scss'],
                animations: [trigger('detailExpand', [
                        state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
                        state('expanded', style({ height: '*' })),
                        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ])],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return []; }, { paginatorCurrent: [{
            type: ViewChild,
            args: ['MatPaginatorCurrent', { static: true }]
        }], sortCurrent: [{
            type: ViewChild,
            args: ['table', { static: true }]
        }], columnDefinitions: [{
            type: Input
        }], displayDetail: [{
            type: Input
        }], displayComponent: [{
            type: Input
        }], data: [{
            type: Input
        }] }); })();
export { CoreMatTable, CellsComponentList, TableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUuY29tcG9uZW50LnRzIiwibGliL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFJcEUsT0FBTyxFQUFDLFlBQVksRUFBc0UsTUFBTSxtQkFBbUIsQ0FBQztBQUNwSCxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNHdkUsNEJBR0U7SUFEQyxtTkFBMEMsRUFBRSxLQUFDO0lBQzlDLDBCQUNGO0lBQUEsaUJBQUk7O0lBSEQsbURBQXFDO0lBRWpDLGVBQTJDO0lBQTNDLDJFQUEyQzs7OztJQVlsRCw4QkFHRTtJQUFBLHNDQUEwRDtJQUM1RCxpQkFBSzs7OztJQUhELDJKQUFzRztJQUV2RixlQUFzQjtJQUF0Qix3Q0FBc0I7OztJQUozQyw2QkFDRTtJQUFBLG9HQUdFO0lBRUosMEJBQWU7OztJQUdiLDhCQUVFO0lBQUEsc0NBQTBEO0lBQzVELGlCQUFLOzs7O0lBRkQsNEpBQXNHO0lBQ3ZGLGVBQXNCO0lBQXRCLHdDQUFzQjs7O0lBSjNDLDZCQUNFO0lBQ0Esb0dBRUU7SUFFSiwwQkFBZTs7O0lBV1AsNkJBQ0U7SUFBQSxzQ0FBcUY7SUFDdkYsMEJBQWU7OztJQUQ2QixlQUF3QjtJQUF4QiwwQ0FBd0I7OztJQUVwRSw2QkFDRTtJQUFBLFlBQ0Y7SUFBQSwwQkFBZTs7OztJQURiLGVBQ0Y7SUFERSw2REFDRjs7O0lBVkYsNkJBS0U7SUFBQSxpSUFDRTtJQUVGLGlJQUNFO0lB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Q2YsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2VsbHNDb21wb25lbnRMaXN0fSBmcm9tIFwiLi9zZXR0aW5nL0NlbGxzQ29tcG9uZW50UmVnaXN0cnlcIjtcbmltcG9ydCB7TWF0U29ydH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NvcnRcIjtcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XG5cbmltcG9ydCB7Q29yZU1hdFRhYmxlLCBDb3JlTWF0VGFibGVJbnRlcmZhY2UsIEZpbHRlckRhdGVJbnRlcmZhY2UsIFBhZ2UsIFBhZ2VSZXF1ZXN0LCBTb3J0fSBmcm9tIFwiLi9jb3JlLWRhdGEtdGFibGVcIjtcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xuXG5pbnRlcmZhY2UgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSB7XG4gIGtleTogc3RyaW5nLCAvLyBvYmplY3Qga2V5XG4gIHZhbHVlOiBzdHJpbmcsIC8vIGRpc3BsYXkgY29sdW1uIHZhbHVlc1xuICByYXRpbz86IG51bWJlcixcbiAgb3JkZXI/OiBudW1iZXIsIC8vIHNvcnQgY29sdW1uXG4gIGNsYXNzPzogc3RyaW5nLCAvLyBjc3MgY2xhc3NcbiAgbW9kdWxlPzogQ2VsbHNDb21wb25lbnRMaXN0LFxuICBvdmVycmlkZT86IHN0cmluZyB8IHN0cmluZ1tdLCAvLyBmb3IgYnVpbGRpbmcgdXJsIG9yIGF2YXRhciBuYW1lXG4gIGRpc3BsYXk/OiBzdHJpbmcsIC8vIGZvcmNlIGRpc3BsYXlpbmcgb3RoZXIgc3R1ZmYgdGhhbiBlbGVtZW50W2ZvY3VzXVxuICBhbGlnbj86IHN0cmluZywgLy8gY2VsbCBjb250ZW50IGFsaWduICdsZWZ0IGNlbnRlciByaWdodCdcbiAgc29ydD86IGJvb2xlYW4gLy8gJ3NvcnRhYmxlIGNvbHVtbidcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWRlc2lnbi10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdkZXRhaWxFeHBhbmQnLCBbXG4gICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHtoZWlnaHQ6ICcwcHgnLCBtaW5IZWlnaHQ6ICcwJywgZGlzcGxheTogJ25vbmUnfSkpLFxuICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHtoZWlnaHQ6ICcqJ30pKSxcbiAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkJywgYW5pbWF0ZSgnMjI1bXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpJykpLFxuICBdKV0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5jbGFzcyBUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ01hdFBhZ2luYXRvckN1cnJlbnQnLCB7c3RhdGljOiB0cnVlfSkgcGFnaW5hdG9yQ3VycmVudDogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKCd0YWJsZScsIHtzdGF0aWM6IHRydWV9KSBzb3J0Q3VycmVudDogTWF0U29ydDtcblxuICBASW5wdXQoKSBjb2x1bW5EZWZpbml0aW9uczogW2Rpc3BsYXllZENvbHVtbnNJbnRlcmZhY2VdO1xuICBASW5wdXQoKSBkaXNwbGF5RGV0YWlsOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc3BsYXlDb21wb25lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgZGF0YTogQ29yZU1hdFRhYmxlSW50ZXJmYWNlO1xuICBwdWJsaWMgY29sdW1uc1RvRGlzcGxheTogc3RyaW5nW107XG4gIHB1YmxpYyBmaWx0ZXI6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgcHVibGljIGRpc3BsYXllZENvbHVtbnM6IGFueTtcbiAgcHVibGljIGV4cGFuZGVkRWxlbWVudDogYW55O1xuICBwdWJsaWMgaW5kZXggPSAwO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmV4cGFuZGVkRWxlbWVudCA9IGZhbHNlO1xuICAgIHRoaXMuYnVpbGRIZWFkZXJzKCkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmxvZygnRXJyb3IgYnVpbGQgdGFibGUnLCBlcnIpKTtcbiAgfVxuXG4gIGFzeW5jIGJ1aWxkSGVhZGVycygpIHtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBhd2FpdCB0aGlzLnNvcnQoKTtcbiAgICBpZiAodGhpcy5kaXNwbGF5ZWRDb2x1bW5zKSB7XG4gICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkgPSBbXTtcbiAgICAgIGZvciAobGV0IGsgb2YgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zKSB7XG4gICAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheS5wdXNoKGsua2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZUNsYXNzKENsYXNzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IE15Q2xhc3M6IHN0cmluZ1tdID0gWydkZWZhdWx0LXRhYmxlLWNsYXNzJ107XG4gICAgZm9yIChsZXQgYyBvZiBDbGFzcykge1xuICAgICAgaWYgKGMgJiYgYyAhPT0gJycpIHtcbiAgICAgICAgTXlDbGFzcy5wdXNoKGMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gTXlDbGFzcztcbiAgfVxuXG4gIGFzeW5jIHNvcnQoKSB7XG4gICAgY29uc3QgY29tcGFyZSA9IChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIChhLm9yZGVyIDwgYi5vcmRlciA/IC0xIDogKGEub3JkZXIgPiBiLm9yZGVyID8gMSA6IDApKVxuICAgIH1cbiAgICBpZiAodGhpcy5jb2x1bW5EZWZpbml0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMuY29sdW1uRGVmaW5pdGlvbnMuc29ydChjb21wYXJlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYnVpbGRMaW5rKG92ZXJyaWRlOiBzdHJpbmdbXSwgZWxlbWVudCkge1xuICAgIGlmIChvdmVycmlkZS5sZW5ndGggPj0gMikge1xuICAgICAgbGV0IGJhc2VQYXRoOiBzdHJpbmcgPSBvdmVycmlkZVswXTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgb3ZlcnJpZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYmFzZVBhdGggKz0gJy8nICsgZWxlbWVudFtvdmVycmlkZVtpXV07XG4gICAgICB9XG4gICAgICByZXR1cm4gYmFzZVBhdGg7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIEpvaW4oZWxlbTogYW55LCBvdmVycmlkZTogc3RyaW5nW10sIGpvaW5LZXk6IHN0cmluZyA9ICdcXG4nKTogc3RyaW5nIHtcbiAgICBjb25zdCB2YWx1ZTogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGxldCB4IGluIGVsZW0pIHtcbiAgICAgIGlmIChvdmVycmlkZS5pbmRleE9mKHgpID4gLTEpIHtcbiAgICAgICAgdmFsdWUucHVzaChlbGVtW3hdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLmpvaW4oam9pbktleSlcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZGF0YS5maWx0ZXIoe1xuICAgICAgdGFyZ2V0OiB7XG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbn1cblxuZXhwb3J0IHtcbiAgQ29yZU1hdFRhYmxlLFxuICBGaWx0ZXJEYXRlSW50ZXJmYWNlLFxuICBQYWdlLFxuICBQYWdlUmVxdWVzdCxcbiAgU29ydCxcbiAgZGlzcGxheWVkQ29sdW1uc0ludGVyZmFjZSxcbiAgQ2VsbHNDb21wb25lbnRMaXN0LFxuICBUYWJsZUNvbXBvbmVudFxufVxuIiwiPGRpdiBjbGFzcz1cInRhYmxlLXdyYXBwZXJcIj5cbiAgPGRpdiBjbGFzcz1cInJvd1wiIHN0eWxlPVwiaGVpZ2h0OiA4NHB4O2JhY2tncm91bmQ6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcIj5cbiAgICA8ZGl2IGNsYXNzPVwiIGVsZXZhdGlvbi16MVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMiBzZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cInNlYXJjaC1ib3hcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiUmVjaGVyY2hlXCIgW21heExlbmd0aF09XCIxMDBcIlxuICAgICAgICAgICAgICAgKGlucHV0KT1cIigoJGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPiAxIHx8ICRldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgJGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPCAyMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZGF0YS5maWx0ZXIoJGV2ZW50KSA6IG51bGwpXCJcbiAgICAgICAgICAgICAgICNmaWx0ZXJPbmdvaW5nPlxuICAgICAgICA8YSBjbGFzcz1cImNsb3NlLXNlYXJjaFwiICpuZ0lmPVwiZmlsdGVyT25nb2luZy52YWx1ZVwiXG4gICAgICAgICAgIFttYXRUb29sdGlwXT1cIidBbm51bGVyIGxhIHJlY2hlcmNoZSdcIlxuICAgICAgICAgICAoY2xpY2spPVwicmVzZXQoKSAmJiBmaWx0ZXJPbmdvaW5nLnZhbHVlID0gJydcIj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwiJy9hc3NldHMvaWNvbnMvc2VhcmNoX29mZi0yNHB4LnN2ZydcIj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8IS0tIFRhYmxlIC0tPlxuICA8dGFibGUgbWF0LXRhYmxlICN0YWJsZT1cIm1hdFNvcnRcIlxuICAgICAgICAgW2RhdGFTb3VyY2VdPVwiZGF0YSBcIiBtdWx0aVRlbXBsYXRlRGF0YVJvd3MgbWF0U29ydFxuICAgICAgICAgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCIgKm5nSWY9XCJkaXNwbGF5ZWRDb2x1bW5zICYmIGNvbHVtbnNUb0Rpc3BsYXlcIlxuICAgICAgICAgKG1hdFNvcnRDaGFuZ2UpPVwiZGF0YS5zb3J0SXQoJGV2ZW50KVwiPlxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwie3tjb2x1bW4ua2V5fX1cIiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGRpc3BsYXllZENvbHVtbnNcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uc29ydFwiPlxuICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmXG4gICAgICAgICAgICBbY2xhc3NdPVwiZ2VuZXJhdGVDbGFzcyhbY29sdW1uLmNsYXNzLCBjb2x1bW4uYWxpZ24gPyAndGV4dC1hbGlnbi0nK2NvbHVtbi5hbGlnbiA6ICd0ZXh0LWFsaWduLWxlZnQnXSlcIlxuICAgICAgICAgICAgbWF0LXNvcnQtaGVhZGVyPlxuICAgICAgICAgIDxhcHAtaXMtbWF0LWljb24gW2lucHV0XT1cImNvbHVtbi52YWx1ZVwiPjwvYXBwLWlzLW1hdC1pY29uPlxuICAgICAgICA8L3RoPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5zb3J0XCI+XG4gICAgICAgIDwhLS0gQWpvdXRlciBmb25jdGlvbiBnZW5lcmF0ZSBDbGFzcyAtLT5cbiAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZlxuICAgICAgICAgICAgW2NsYXNzXT1cImdlbmVyYXRlQ2xhc3MoW2NvbHVtbi5jbGFzcywgY29sdW1uLmFsaWduID8gJ3RleHQtYWxpZ24tJytjb2x1bW4uYWxpZ24gOiAndGV4dC1hbGlnbi1sZWZ0J10pXCI+XG4gICAgICAgICAgPGFwcC1pcy1tYXQtaWNvbiBbaW5wdXRdPVwiY29sdW1uLnZhbHVlXCI+PC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgIDwvdGg+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgICBbY2xhc3NdPVwiZ2VuZXJhdGVDbGFzcyhbY29sdW1uLmNsYXNzLCBjb2x1bW4uYWxpZ24gPyAndGV4dC1hbGlnbi0nK2NvbHVtbi5hbGlnbiA6ICcnXSlcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiY29sdW1uLm1vZHVsZVwiPlxuICAgICAgICAgIDwhLS0gQnV0dG9uIGxpbmsgLS0+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2J1dHRvbi1saW5rJ1wiPlxuICAgICAgICAgICAgPGEgKm5nSWY9XCJlbGVtZW50Lm5ld1wiIG1hdFRvb2x0aXA9XCJPdXZyaXJcIlxuICAgICAgICAgICAgICAgY2xhc3M9XCJtYXQtYnV0dG9uIG5vd2JvYXJkLWJ0biBidG4teHNcIlxuICAgICAgICAgICAgICAgcm91dGVyTGluaz1cInt7Y29sdW1uLm92ZXJyaWRlID8gYnVpbGRMaW5rKGNvbHVtbi5vdmVycmlkZSwgZWxlbWVudCkgOiBlbGVtZW50W2NvbHVtbi5rZXldfX1cIlxuICAgICAgICAgICAgICAgbWF0QmFkZ2U9XCIqXCIgbWF0QmFkZ2VQb3NpdGlvbj1cImJlZm9yZVwiXG4gICAgICAgICAgICAgICBtYXRCYWRnZUNvbG9yPVwiYWNjZW50XCI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgIDxhcHAtaXMtbWF0LWljb24gc3R5bGU9XCJwYWRkaW5nLXRvcDoxMHB4XCIgW2lucHV0XT1cImNvbHVtbi5kaXNwbGF5XCI+PC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAge3tlbGVtZW50W2NvbHVtbi5rZXldfX1cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSAqbmdJZj1cIiFlbGVtZW50Lm5ld1wiXG4gICAgICAgICAgICAgICBtYXRUb29sdGlwPVwiT3V2cmlyXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwibWF0LWJ1dHRvbiBub3dib2FyZC1idG4gYnRuLXhzXCJcbiAgICAgICAgICAgICAgIHJvdXRlckxpbms9XCJ7e2NvbHVtbi5vdmVycmlkZSA/IGJ1aWxkTGluayhjb2x1bW4ub3ZlcnJpZGUsIGVsZW1lbnQpIDogZWxlbWVudFtjb2x1bW4ua2V5XX19XCI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb2x1bW4uZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgIDxhcHAtaXMtbWF0LWljb24gc3R5bGU9XCJwYWRkaW5nLXRvcDoxMHB4XCIgW2lucHV0XT1cImNvbHVtbi5kaXNwbGF5XCI+PC9hcHAtaXMtbWF0LWljb24+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWNvbHVtbi5kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAge3tlbGVtZW50W2NvbHVtbi5rZXldfX1cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPCEtLSBpY29uIHByaW9yaXR5LS0+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3ByaW9yaXR5J1wiPlxuICAgICAgICAgICAgPGljb24tcHJpb3JpdHkgW2ljb25dPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvaWNvbi1wcmlvcml0eT5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8IS0tIGljb24gb3JpZ2luLS0+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ29yaWdpbidcIj5cbiAgICAgICAgICAgIDxpY29uLW9yaWdpbiBbaWNvbl09XCJlbGVtZW50W2NvbHVtbi5rZXldXCI+PC9pY29uLW9yaWdpbj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8IS0tIGljb24gbmFtZSBhdmF0YXItLT5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbmFtZS1hdmF0YXInXCI+XG4gICAgICAgICAgICA8bmFtZS1hdmF0YXIgbWF0VG9vbHRpcD1cInt7Sm9pbihlbGVtZW50LCBjb2x1bW4ub3ZlcnJpZGUpfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgW21hdFRvb2x0aXBDbGFzc109XCInbXktdG9vbHRpcCdcIj5cbiAgICAgICAgICAgIDwvbmFtZS1hdmF0YXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPCEtLSBkYXRlIGZvcm1hdCAtLT5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZGF0ZS1mb3JtYXQnXCI+XG4gICAgICAgICAgICA8ZGF0ZS1mb3JtYXQgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAxMHB4XCIgW2RhdGVdPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvZGF0ZS1mb3JtYXQ+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPCEtLSBjb3VudCByb3dzIC0tPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidjb3VudC1yb3cnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwicGFkZGluZy1sZWZ0OiAxNHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7eyhlbGVtZW50W2NvbHVtbi5rZXldICYmIGVsZW1lbnRbY29sdW1uLmtleV0ubGVuZ3RoID8gZWxlbWVudFtjb2x1bW4ua2V5XS5sZW5ndGggOiAnLScpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cbiAgICAgICAgICAgIHt7ZWxlbWVudFtjb2x1bW4ua2V5XX19XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiZXhwYW5kZWREZXRhaWxYXCIgKm5nSWY9XCJkaXNwbGF5RGV0YWlsXCI+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiIFthdHRyLmNvbHNwYW5dPVwiY29sdW1uc1RvRGlzcGxheS5sZW5ndGhcIlxuICAgICAgICAgIFtAZGV0YWlsRXhwYW5kXT1cImVsZW1lbnQgPT0gZXhwYW5kZWRFbGVtZW50ID8gJ2V4cGFuZGVkJyA6ICdjb2xsYXBzZWQnXCJcbiAgICAgICAgICBzdHlsZT1cImJvcmRlci1ib3R0b206dHJhbnNwYXJlbnQhaW1wb3J0YW50O2hlaWdodDogMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZWxlbWVudC1kZXRhaWxcIj5cbiAgICAgICAgICB7e2VsZW1lbnQgfCBqc29ufX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiY29sdW1uc1RvRGlzcGxheVwiPjwvdHI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRpc3BsYXlEZXRhaWxcIj5cbiAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgZWxlbWVudDsgY29sdW1uczogY29sdW1uc1RvRGlzcGxheTtcIlxuICAgICAgICAgIGNsYXNzPVwiZWxlbWVudC1yb3dcIlxuICAgICAgICAgIFtjbGFzcy5leHBhbmRlZF09XCJleHBhbmRlZEVsZW1lbnQgPT0gZWxlbWVudFwiXG4gICAgICAgICAgKGNsaWNrKT1cImV4cGFuZGVkRWxlbWVudCA9PT0gZWxlbWVudD8gZXhwYW5kZWRFbGVtZW50ID0gbnVsbCA6IGV4cGFuZGVkRWxlbWVudCA9IGVsZW1lbnRcIj5cbiAgICAgIDwvdHI+XG4gICAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogWydleHBhbmRlZERldGFpbFgnXVwiIGNsYXNzPVwiZGV0YWlsLXJvd1wiPjwvdHI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFkaXNwbGF5RGV0YWlsXCI+XG4gICAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IGVsZW1lbnQ7IGNvbHVtbnM6IGNvbHVtbnNUb0Rpc3BsYXk7XCJcbiAgICAgICAgICBjbGFzcz1cImVsZW1lbnQtcm93XCI+XG4gICAgICA8L3RyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L3RhYmxlPlxuICA8bWF0LXBhZ2luYXRvciAjTWF0UGFnaW5hdG9yQ3VycmVudCAqbmdJZj1cImRhdGFcIiBbbGVuZ3RoXT1cImRhdGEudG90YWxFbGVtZW50c1wiXG4gICAgICAgICAgICAgICAgIFtwYWdlU2l6ZV09XCJkYXRhLnNpemVcIiBbcGFnZUluZGV4XT1cImRhdGEubnVtYmVyXCIgW2hpZGVQYWdlU2l6ZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgKHBhZ2UpPVwiZGF0YS5mZXRjaCgkZXZlbnQucGFnZUluZGV4KVwiIHNob3dGaXJzdExhc3RCdXR0b25zPjwvbWF0LXBhZ2luYXRvcj5cbjwvZGl2PlxuIl19