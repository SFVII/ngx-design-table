import { __awaiter } from "tslib";
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
const _c0 = ["MatPaginatorCurrent"];
const _c1 = ["table"];
function TableComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 9);
    i0.ɵɵlistener("click", function TableComponent_a_6_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); const _r5 = i0.ɵɵreference(5); return ctx_r9.reset() && (_r5.value = ""); });
    i0.ɵɵelement(1, "img", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("matTooltip", "Annuler la recherche");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", "/assets/icons/search_off-24px.svg", i0.ɵɵsanitizeUrl);
} }
const _c2 = function (a0, a1) { return [a0, a1]; };
function TableComponent_table_7_ng_container_2_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 20);
    i0.ɵɵelement(1, "app-is-mat-icon", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r17 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r21.generateClass(i0.ɵɵpureFunction2(3, _c2, column_r17.class, column_r17.align ? "text-align-" + column_r17.align : "text-align-left")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r17.value);
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
    const column_r17 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r23.generateClass(i0.ɵɵpureFunction2(3, _c2, column_r17.class, column_r17.align ? "text-align-" + column_r17.align : "text-align-left")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r17.value);
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
    const column_r17 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r17.display);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(3).$implicit;
    const column_r17 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r25[column_r17.key], " ");
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 30);
    i0.ɵɵtemplate(1, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_ng_container_1_Template, 2, 1, "ng-container", 16);
    i0.ɵɵtemplate(2, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_ng_container_2_Template, 2, 1, "ng-container", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r17 = i0.ɵɵnextContext().$implicit;
    const ctx_r33 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("routerLink", column_r17.override ? ctx_r33.buildLink(column_r17.override, element_r25) : element_r25[column_r17.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r17.display);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r17.display);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-is-mat-icon", 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r17 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("input", column_r17.display);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(3).$implicit;
    const column_r17 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r25[column_r17.key], " ");
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 32);
    i0.ɵɵtemplate(1, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_ng_container_1_Template, 2, 1, "ng-container", 16);
    i0.ɵɵtemplate(2, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_ng_container_2_Template, 2, 1, "ng-container", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext(2).$implicit;
    const column_r17 = i0.ɵɵnextContext().$implicit;
    const ctx_r34 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("routerLink", column_r17.override ? ctx_r34.buildLink(column_r17.override, element_r25) : element_r25[column_r17.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r17.display);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r17.display);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_Template, 3, 3, "a", 28);
    i0.ɵɵtemplate(2, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_Template, 3, 3, "a", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", element_r25.new);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !element_r25.new);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "icon-priority", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext().$implicit;
    const column_r17 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", element_r25[column_r17.key]);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "icon-origin", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext().$implicit;
    const column_r17 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("icon", element_r25[column_r17.key]);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "name-avatar", 34);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext().$implicit;
    const column_r17 = i0.ɵɵnextContext().$implicit;
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r29.Join(element_r25, column_r17.override));
    i0.ɵɵproperty("src", element_r25[column_r17.key])("matTooltipClass", "my-tooltip");
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "date-format", 35);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext().$implicit;
    const column_r17 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("date", element_r25[column_r17.key]);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 36);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext().$implicit;
    const column_r17 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r25[column_r17.key] && element_r25[column_r17.key].length ? element_r25[column_r17.key].length : "-", " ");
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = i0.ɵɵnextContext().$implicit;
    const column_r17 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r25[column_r17.key], " ");
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
    const column_r17 = i0.ɵɵnextContext().$implicit;
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r20.generateClass(i0.ɵɵpureFunction2(9, _c2, column_r17.class, column_r17.align ? "text-align-" + column_r17.align : "")));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", column_r17.module);
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
    const column_r17 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("matColumnDef", column_r17.key);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", column_r17.sort);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !column_r17.sort);
} }
function TableComponent_table_7_ng_container_3_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 39);
    i0.ɵɵelementStart(1, "div", 40);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "json");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r64 = ctx.$implicit;
    const ctx_r63 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("@detailExpand", element_r64 == ctx_r63.expandedElement ? "expanded" : "collapsed");
    i0.ɵɵattribute("colspan", ctx_r63.columnsToDisplay.length);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, element_r64), " ");
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
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 44);
    i0.ɵɵlistener("click", function TableComponent_table_7_ng_container_5_tr_1_Template_tr_click_0_listener() { i0.ɵɵrestoreView(_r69); const element_r67 = ctx.$implicit; const ctx_r68 = i0.ɵɵnextContext(3); return ctx_r68.expandedElement === element_r67 ? ctx_r68.expandedElement = null : ctx_r68.expandedElement = element_r67; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r67 = ctx.$implicit;
    const ctx_r65 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("expanded", ctx_r65.expandedElement == element_r67);
} }
function TableComponent_table_7_ng_container_5_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 45);
} }
const _c3 = function () { return ["expandedDetailX"]; };
function TableComponent_table_7_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TableComponent_table_7_ng_container_5_tr_1_Template, 1, 2, "tr", 42);
    i0.ɵɵtemplate(2, TableComponent_table_7_ng_container_5_tr_2_Template, 1, 0, "tr", 43);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matRowDefColumns", ctx_r15.columnsToDisplay);
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
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matRowDefColumns", ctx_r16.columnsToDisplay);
} }
function TableComponent_table_7_Template(rf, ctx) { if (rf & 1) {
    const _r74 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table", 11, 12);
    i0.ɵɵlistener("matSortChange", function TableComponent_table_7_Template_table_matSortChange_0_listener($event) { i0.ɵɵrestoreView(_r74); const ctx_r73 = i0.ɵɵnextContext(); return ctx_r73.data.sortIt($event); });
    i0.ɵɵtemplate(2, TableComponent_table_7_ng_container_2_Template, 4, 3, "ng-container", 13);
    i0.ɵɵtemplate(3, TableComponent_table_7_ng_container_3_Template, 2, 0, "ng-container", 14);
    i0.ɵɵtemplate(4, TableComponent_table_7_tr_4_Template, 1, 0, "tr", 15);
    i0.ɵɵtemplate(5, TableComponent_table_7_ng_container_5_Template, 3, 3, "ng-container", 16);
    i0.ɵɵtemplate(6, TableComponent_table_7_ng_container_6_Template, 2, 1, "ng-container", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("dataSource", ctx_r7.data);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r7.displayedColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.displayDetail);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r7.columnsToDisplay);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.displayDetail);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r7.displayDetail);
} }
function TableComponent_mat_paginator_8_Template(rf, ctx) { if (rf & 1) {
    const _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-paginator", 48, 49);
    i0.ɵɵlistener("page", function TableComponent_mat_paginator_8_Template_mat_paginator_page_0_listener($event) { i0.ɵɵrestoreView(_r77); const ctx_r76 = i0.ɵɵnextContext(); return ctx_r76.data.fetch($event.pageIndex); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵproperty("length", ctx_r8.data.totalElements)("pageSize", ctx_r8.data.size)("pageIndex", ctx_r8.data.number)("hidePageSize", true);
} }
class TableComponent {
    constructor() {
        this.displayDetail = false;
        this.filter = [];
        this.index = 0;
    }
    ngOnInit() {
        this.expandedElement = false;
        this.buildHeaders().catch((err) => console.log('Error build table', err));
    }
    buildHeaders() {
        return __awaiter(this, void 0, void 0, function* () {
            this.displayedColumns = yield this.sort();
            if (this.displayedColumns) {
                this.columnsToDisplay = [];
                for (let k of this.displayedColumns) {
                    this.columnsToDisplay.push(k.key);
                }
            }
        });
    }
    generateClass(Class) {
        const MyClass = ['default-table-class'];
        for (let c of Class) {
            if (c && c !== '') {
                MyClass.push(c);
            }
        }
        return MyClass;
    }
    sort() {
        return __awaiter(this, void 0, void 0, function* () {
            const compare = (a, b) => {
                return (a.order < b.order ? -1 : (a.order > b.order ? 1 : 0));
            };
            if (this.columnDefinitions) {
                return this.columnDefinitions.sort(compare);
            }
        });
    }
    buildLink(override, element) {
        if (override.length >= 2) {
            let basePath = override[0];
            for (let i = 1; i < override.length; i++) {
                basePath += '/' + element[override[i]];
            }
            return basePath;
        }
    }
    Join(elem, override, joinKey = '\n') {
        const value = [];
        for (let x in elem) {
            if (override.indexOf(x) > -1) {
                value.push(elem[x]);
            }
        }
        return value.join(joinKey);
    }
    reset() {
        this.data.filter({
            target: {
                value: ''
            }
        });
        return true;
    }
}
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
        const _r5 = i0.ɵɵreference(5);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("maxLength", 100);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", _r5.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.displayedColumns && ctx.columnsToDisplay);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.data);
    } }, directives: [i1.NgIf, i2.MatTooltip, i3.MatTable, i4.MatSort, i1.NgForOf, i3.MatHeaderRowDef, i3.MatColumnDef, i3.MatCellDef, i3.MatHeaderCellDef, i3.MatHeaderCell, i4.MatSortHeader, i5.IsMatIconComponent, i3.MatCell, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i6.RouterLinkWithHref, i7.MatBadge, i8.PriorityComponent, i9.OriginComponent, i10.NameAvatarComponent, i11.DateFormatComponent, i3.MatHeaderRow, i3.MatRowDef, i3.MatRow, i12.MatPaginator], pipes: [i1.JsonPipe], styles: [".table-wrapper table{width:100%}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .element-row .mat-cell{padding-right:5px}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width:1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width:1440px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:11px!important}.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}"], encapsulation: 2, data: { animation: [trigger('detailExpand', [
                state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
                state('expanded', style({ height: '*' })),
                transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ])] } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUuY29tcG9uZW50LnRzIiwibGliL3RhYmxlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFJcEUsT0FBTyxFQUFDLFlBQVksRUFBc0UsTUFBTSxtQkFBbUIsQ0FBQztBQUNwSCxPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNHdkUsNEJBR0U7SUFEQyxtTkFBMEMsRUFBRSxLQUFDO0lBQzlDLDBCQUNGO0lBQUEsaUJBQUk7O0lBSEQsbURBQXFDO0lBRWpDLGVBQTJDO0lBQTNDLDJFQUEyQzs7OztJQVlsRCw4QkFHRTtJQUFBLHNDQUEwRDtJQUM1RCxpQkFBSzs7OztJQUhELDJKQUFzRztJQUV2RixlQUFzQjtJQUF0Qix3Q0FBc0I7OztJQUozQyw2QkFDRTtJQUFBLG9HQUdFO0lBRUosMEJBQWU7OztJQUdiLDhCQUVFO0lBQUEsc0NBQTBEO0lBQzVELGlCQUFLOzs7O0lBRkQsMkpBQXNHO0lBQ3ZGLGVBQXNCO0lBQXRCLHdDQUFzQjs7O0lBSjNDLDZCQUNFO0lBQ0Esb0dBRUU7SUFFSiwwQkFBZTs7O0lBV1AsNkJBQ0U7SUFBQSxzQ0FBcUY7SUFDdkYsMEJBQWU7OztJQUQ2QixlQUF3QjtJQUF4QiwwQ0FBd0I7OztJQUVwRSw2QkFDRTtJQUFBLFlBQ0Y7SUFBQSwwQkFBZTs7OztJQURiLGVBQ0Y7SUFERSw0REFDRjs7O0lBVkYsNkJBS0U7SUFBQSxpSUFDRTtJQUVGLGlJQUNFO0lB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O2dCQUN2QyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7YUFDdEYsQ0FBQyxDQUFDO2tEQUdDLGNBQWM7Y0FYbkIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFO3dCQUNuQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQzt3QkFDM0UsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQzt3QkFDdkMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO3FCQUN0RixDQUFDLENBQUM7Z0JBQ0gsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7O2tCQUVFLFNBQVM7bUJBQUMscUJBQXFCLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOztrQkFDL0MsU0FBUzttQkFBQyxPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOztrQkFFakMsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7QUE0RVIsT0FBTyxFQUNMLFlBQVksRUFNWixrQkFBa0IsRUFDbEIsY0FBYyxFQUNmLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NlbGxzQ29tcG9uZW50TGlzdH0gZnJvbSBcIi4vc2V0dGluZy9DZWxsc0NvbXBvbmVudFJlZ2lzdHJ5XCI7XG5pbXBvcnQge01hdFNvcnR9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zb3J0XCI7XG5pbXBvcnQge01hdFBhZ2luYXRvcn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvclwiO1xuXG5pbXBvcnQge0NvcmVNYXRUYWJsZSwgQ29yZU1hdFRhYmxlSW50ZXJmYWNlLCBGaWx0ZXJEYXRlSW50ZXJmYWNlLCBQYWdlLCBQYWdlUmVxdWVzdCwgU29ydH0gZnJvbSBcIi4vY29yZS1kYXRhLXRhYmxlXCI7XG5pbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcblxuaW50ZXJmYWNlIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2Uge1xuICBrZXk6IHN0cmluZywgLy8gb2JqZWN0IGtleVxuICB2YWx1ZTogc3RyaW5nLCAvLyBkaXNwbGF5IGNvbHVtbiB2YWx1ZXNcbiAgcmF0aW8/OiBudW1iZXIsXG4gIG9yZGVyPzogbnVtYmVyLCAvLyBzb3J0IGNvbHVtblxuICBjbGFzcz86IHN0cmluZywgLy8gY3NzIGNsYXNzXG4gIG1vZHVsZT86IENlbGxzQ29tcG9uZW50TGlzdCxcbiAgb3ZlcnJpZGU/OiBzdHJpbmcgfCBzdHJpbmdbXSwgLy8gZm9yIGJ1aWxkaW5nIHVybCBvciBhdmF0YXIgbmFtZVxuICBkaXNwbGF5Pzogc3RyaW5nLCAvLyBmb3JjZSBkaXNwbGF5aW5nIG90aGVyIHN0dWZmIHRoYW4gZWxlbWVudFtmb2N1c11cbiAgYWxpZ24/OiBzdHJpbmcsIC8vIGNlbGwgY29udGVudCBhbGlnbiAnbGVmdCBjZW50ZXIgcmlnaHQnXG4gIHNvcnQ/OiBib29sZWFuIC8vICdzb3J0YWJsZSBjb2x1bW4nXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1kZXNpZ24tdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICBhbmltYXRpb25zOiBbdHJpZ2dlcignZGV0YWlsRXhwYW5kJywgW1xuICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZSh7aGVpZ2h0OiAnMHB4JywgbWluSGVpZ2h0OiAnMCcsIGRpc3BsYXk6ICdub25lJ30pKSxcbiAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7aGVpZ2h0OiAnKid9KSksXG4gICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzIyNW1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKScpKSxcbiAgXSldLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdNYXRQYWdpbmF0b3JDdXJyZW50Jywge3N0YXRpYzogdHJ1ZX0pIHBhZ2luYXRvckN1cnJlbnQ6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZCgndGFibGUnLCB7c3RhdGljOiB0cnVlfSkgc29ydEN1cnJlbnQ6IE1hdFNvcnQ7XG5cbiAgQElucHV0KCkgY29sdW1uRGVmaW5pdGlvbnM6IFtkaXNwbGF5ZWRDb2x1bW5zSW50ZXJmYWNlXTtcbiAgQElucHV0KCkgZGlzcGxheURldGFpbDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNwbGF5Q29tcG9uZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRhdGE6IENvcmVNYXRUYWJsZUludGVyZmFjZTtcbiAgcHVibGljIGNvbHVtbnNUb0Rpc3BsYXk6IHN0cmluZ1tdO1xuICBwdWJsaWMgZmlsdGVyOiBBcnJheTxzdHJpbmc+ID0gW107XG4gIHB1YmxpYyBkaXNwbGF5ZWRDb2x1bW5zOiBhbnk7XG4gIHB1YmxpYyBleHBhbmRlZEVsZW1lbnQ6IGFueTtcbiAgcHVibGljIGluZGV4ID0gMDtcblxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5leHBhbmRlZEVsZW1lbnQgPSBmYWxzZTtcbiAgICB0aGlzLmJ1aWxkSGVhZGVycygpLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5sb2coJ0Vycm9yIGJ1aWxkIHRhYmxlJywgZXJyKSk7XG4gIH1cblxuICBhc3luYyBidWlsZEhlYWRlcnMoKSB7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gYXdhaXQgdGhpcy5zb3J0KCk7XG4gICAgaWYgKHRoaXMuZGlzcGxheWVkQ29sdW1ucykge1xuICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5ID0gW107XG4gICAgICBmb3IgKGxldCBrIG9mIHRoaXMuZGlzcGxheWVkQ29sdW1ucykge1xuICAgICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkucHVzaChrLmtleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2VuZXJhdGVDbGFzcyhDbGFzczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBNeUNsYXNzOiBzdHJpbmdbXSA9IFsnZGVmYXVsdC10YWJsZS1jbGFzcyddO1xuICAgIGZvciAobGV0IGMgb2YgQ2xhc3MpIHtcbiAgICAgIGlmIChjICYmIGMgIT09ICcnKSB7XG4gICAgICAgIE15Q2xhc3MucHVzaChjKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIE15Q2xhc3M7XG4gIH1cblxuICBhc3luYyBzb3J0KCkge1xuICAgIGNvbnN0IGNvbXBhcmUgPSAoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiAoYS5vcmRlciA8IGIub3JkZXIgPyAtMSA6IChhLm9yZGVyID4gYi5vcmRlciA/IDEgOiAwKSlcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sdW1uRGVmaW5pdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbHVtbkRlZmluaXRpb25zLnNvcnQoY29tcGFyZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGJ1aWxkTGluayhvdmVycmlkZTogc3RyaW5nW10sIGVsZW1lbnQpIHtcbiAgICBpZiAob3ZlcnJpZGUubGVuZ3RoID49IDIpIHtcbiAgICAgIGxldCBiYXNlUGF0aDogc3RyaW5nID0gb3ZlcnJpZGVbMF07XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG92ZXJyaWRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJhc2VQYXRoICs9ICcvJyArIGVsZW1lbnRbb3ZlcnJpZGVbaV1dO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGJhc2VQYXRoO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBKb2luKGVsZW06IGFueSwgb3ZlcnJpZGU6IHN0cmluZ1tdLCBqb2luS2V5OiBzdHJpbmcgPSAnXFxuJyk6IHN0cmluZyB7XG4gICAgY29uc3QgdmFsdWU6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChsZXQgeCBpbiBlbGVtKSB7XG4gICAgICBpZiAob3ZlcnJpZGUuaW5kZXhPZih4KSA+IC0xKSB7XG4gICAgICAgIHZhbHVlLnB1c2goZWxlbVt4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5qb2luKGpvaW5LZXkpXG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmRhdGEuZmlsdGVyKHtcbiAgICAgIHRhcmdldDoge1xuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7XG4gIENvcmVNYXRUYWJsZSxcbiAgRmlsdGVyRGF0ZUludGVyZmFjZSxcbiAgUGFnZSxcbiAgUGFnZVJlcXVlc3QsXG4gIFNvcnQsXG4gIGRpc3BsYXllZENvbHVtbnNJbnRlcmZhY2UsXG4gIENlbGxzQ29tcG9uZW50TGlzdCxcbiAgVGFibGVDb21wb25lbnRcbn1cbiIsIjxkaXYgY2xhc3M9XCJ0YWJsZS13cmFwcGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIiBzdHlsZT1cImhlaWdodDogODRweDtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XCI+XG4gICAgPGRpdiBjbGFzcz1cIiBlbGV2YXRpb24tejFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgc2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJzZWFyY2gtYm94XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZVwiIFttYXhMZW5ndGhdPVwiMTAwXCJcbiAgICAgICAgICAgICAgIChpbnB1dCk9XCIoKCRldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID4gMSB8fCAkZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICYmICRldmVudC50YXJnZXQudmFsdWUubGVuZ3RoIDwgMjAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGRhdGEuZmlsdGVyKCRldmVudCkgOiBudWxsKVwiXG4gICAgICAgICAgICAgICAjZmlsdGVyT25nb2luZz5cbiAgICAgICAgPGEgY2xhc3M9XCJjbG9zZS1zZWFyY2hcIiAqbmdJZj1cImZpbHRlck9uZ29pbmcudmFsdWVcIlxuICAgICAgICAgICBbbWF0VG9vbHRpcF09XCInQW5udWxlciBsYSByZWNoZXJjaGUnXCJcbiAgICAgICAgICAgKGNsaWNrKT1cInJlc2V0KCkgJiYgZmlsdGVyT25nb2luZy52YWx1ZSA9ICcnXCI+XG4gICAgICAgICAgPGltZyBbc3JjXT1cIicvYXNzZXRzL2ljb25zL3NlYXJjaF9vZmYtMjRweC5zdmcnXCI+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPCEtLSBUYWJsZSAtLT5cbiAgPHRhYmxlIG1hdC10YWJsZSAjdGFibGU9XCJtYXRTb3J0XCJcbiAgICAgICAgIFtkYXRhU291cmNlXT1cImRhdGEgXCIgbXVsdGlUZW1wbGF0ZURhdGFSb3dzIG1hdFNvcnRcbiAgICAgICAgIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiICpuZ0lmPVwiZGlzcGxheWVkQ29sdW1ucyAmJiBjb2x1bW5zVG9EaXNwbGF5XCJcbiAgICAgICAgIChtYXRTb3J0Q2hhbmdlKT1cImRhdGEuc29ydEl0KCRldmVudClcIj5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInt7Y29sdW1uLmtleX19XCIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBkaXNwbGF5ZWRDb2x1bW5zXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLnNvcnRcIj5cbiAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZlxuICAgICAgICAgICAgW2NsYXNzXT1cImdlbmVyYXRlQ2xhc3MoW2NvbHVtbi5jbGFzcywgY29sdW1uLmFsaWduID8gJ3RleHQtYWxpZ24tJytjb2x1bW4uYWxpZ24gOiAndGV4dC1hbGlnbi1sZWZ0J10pXCJcbiAgICAgICAgICAgIG1hdC1zb3J0LWhlYWRlcj5cbiAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uIFtpbnB1dF09XCJjb2x1bW4udmFsdWVcIj48L2FwcC1pcy1tYXQtaWNvbj5cbiAgICAgICAgPC90aD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4uc29ydFwiPlxuICAgICAgICA8IS0tIEFqb3V0ZXIgZm9uY3Rpb24gZ2VuZXJhdGUgQ2xhc3MgLS0+XG4gICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWZcbiAgICAgICAgICAgIFtjbGFzc109XCJnZW5lcmF0ZUNsYXNzKFtjb2x1bW4uY2xhc3MsIGNvbHVtbi5hbGlnbiA/ICd0ZXh0LWFsaWduLScrY29sdW1uLmFsaWduIDogJ3RleHQtYWxpZ24tbGVmdCddKVwiPlxuICAgICAgICAgIDxhcHAtaXMtbWF0LWljb24gW2lucHV0XT1cImNvbHVtbi52YWx1ZVwiPjwvYXBwLWlzLW1hdC1pY29uPlxuICAgICAgICA8L3RoPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgICAgW2NsYXNzXT1cImdlbmVyYXRlQ2xhc3MoW2NvbHVtbi5jbGFzcywgY29sdW1uLmFsaWduID8gJ3RleHQtYWxpZ24tJytjb2x1bW4uYWxpZ24gOiAnJ10pXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImNvbHVtbi5tb2R1bGVcIj5cbiAgICAgICAgICA8IS0tIEJ1dHRvbiBsaW5rIC0tPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIididXR0b24tbGluaydcIj5cbiAgICAgICAgICAgIDxhICpuZ0lmPVwiZWxlbWVudC5uZXdcIiBtYXRUb29sdGlwPVwiT3V2cmlyXCJcbiAgICAgICAgICAgICAgIGNsYXNzPVwibWF0LWJ1dHRvbiBub3dib2FyZC1idG4gYnRuLXhzXCJcbiAgICAgICAgICAgICAgIHJvdXRlckxpbms9XCJ7e2NvbHVtbi5vdmVycmlkZSA/IGJ1aWxkTGluayhjb2x1bW4ub3ZlcnJpZGUsIGVsZW1lbnQpIDogZWxlbWVudFtjb2x1bW4ua2V5XX19XCJcbiAgICAgICAgICAgICAgIG1hdEJhZGdlPVwiKlwiIG1hdEJhZGdlUG9zaXRpb249XCJiZWZvcmVcIlxuICAgICAgICAgICAgICAgbWF0QmFkZ2VDb2xvcj1cImFjY2VudFwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLmRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uIHN0eWxlPVwicGFkZGluZy10b3A6MTBweFwiIFtpbnB1dF09XCJjb2x1bW4uZGlzcGxheVwiPjwvYXBwLWlzLW1hdC1pY29uPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4uZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgIHt7ZWxlbWVudFtjb2x1bW4ua2V5XX19XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgKm5nSWY9XCIhZWxlbWVudC5uZXdcIlxuICAgICAgICAgICAgICAgbWF0VG9vbHRpcD1cIk91dnJpclwiXG4gICAgICAgICAgICAgICBjbGFzcz1cIm1hdC1idXR0b24gbm93Ym9hcmQtYnRuIGJ0bi14c1wiXG4gICAgICAgICAgICAgICByb3V0ZXJMaW5rPVwie3tjb2x1bW4ub3ZlcnJpZGUgPyBidWlsZExpbmsoY29sdW1uLm92ZXJyaWRlLCBlbGVtZW50KSA6IGVsZW1lbnRbY29sdW1uLmtleV19fVwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29sdW1uLmRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICA8YXBwLWlzLW1hdC1pY29uIHN0eWxlPVwicGFkZGluZy10b3A6MTBweFwiIFtpbnB1dF09XCJjb2x1bW4uZGlzcGxheVwiPjwvYXBwLWlzLW1hdC1pY29uPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb2x1bW4uZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgIHt7ZWxlbWVudFtjb2x1bW4ua2V5XX19XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwhLS0gaWNvbiBwcmlvcml0eS0tPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidwcmlvcml0eSdcIj5cbiAgICAgICAgICAgIDxpY29uLXByaW9yaXR5IFtpY29uXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L2ljb24tcHJpb3JpdHk+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPCEtLSBpY29uIG9yaWdpbi0tPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidvcmlnaW4nXCI+XG4gICAgICAgICAgICA8aWNvbi1vcmlnaW4gW2ljb25dPVwiZWxlbWVudFtjb2x1bW4ua2V5XVwiPjwvaWNvbi1vcmlnaW4+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPCEtLSBpY29uIG5hbWUgYXZhdGFyLS0+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ25hbWUtYXZhdGFyJ1wiPlxuICAgICAgICAgICAgPG5hbWUtYXZhdGFyIG1hdFRvb2x0aXA9XCJ7e0pvaW4oZWxlbWVudCwgY29sdW1uLm92ZXJyaWRlKX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFttYXRUb29sdGlwQ2xhc3NdPVwiJ215LXRvb2x0aXAnXCI+XG4gICAgICAgICAgICA8L25hbWUtYXZhdGFyPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwhLS0gZGF0ZSBmb3JtYXQgLS0+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUtZm9ybWF0J1wiPlxuICAgICAgICAgICAgPGRhdGUtZm9ybWF0IHN0eWxlPVwicGFkZGluZy1yaWdodDogMTBweFwiIFtkYXRlXT1cImVsZW1lbnRbY29sdW1uLmtleV1cIj48L2RhdGUtZm9ybWF0PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwhLS0gY291bnQgcm93cyAtLT5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInY291bnQtcm93J1wiPlxuICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cInBhZGRpbmctbGVmdDogMTRweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAge3soZWxlbWVudFtjb2x1bW4ua2V5XSAmJiBlbGVtZW50W2NvbHVtbi5rZXldLmxlbmd0aCA/IGVsZW1lbnRbY29sdW1uLmtleV0ubGVuZ3RoIDogJy0nKX19XG4gICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICB7e2VsZW1lbnRbY29sdW1uLmtleV19fVxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImV4cGFuZGVkRGV0YWlsWFwiICpuZ0lmPVwiZGlzcGxheURldGFpbFwiPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIiBbYXR0ci5jb2xzcGFuXT1cImNvbHVtbnNUb0Rpc3BsYXkubGVuZ3RoXCJcbiAgICAgICAgICBbQGRldGFpbEV4cGFuZF09XCJlbGVtZW50ID09IGV4cGFuZGVkRWxlbWVudCA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJ1wiXG4gICAgICAgICAgc3R5bGU9XCJib3JkZXItYm90dG9tOnRyYW5zcGFyZW50IWltcG9ydGFudDtoZWlnaHQ6IDBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImVsZW1lbnQtZGV0YWlsXCI+XG4gICAgICAgICAge3tlbGVtZW50IHwganNvbn19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImNvbHVtbnNUb0Rpc3BsYXlcIj48L3RyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkaXNwbGF5RGV0YWlsXCI+XG4gICAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IGVsZW1lbnQ7IGNvbHVtbnM6IGNvbHVtbnNUb0Rpc3BsYXk7XCJcbiAgICAgICAgICBjbGFzcz1cImVsZW1lbnQtcm93XCJcbiAgICAgICAgICBbY2xhc3MuZXhwYW5kZWRdPVwiZXhwYW5kZWRFbGVtZW50ID09IGVsZW1lbnRcIlxuICAgICAgICAgIChjbGljayk9XCJleHBhbmRlZEVsZW1lbnQgPT09IGVsZW1lbnQ/IGV4cGFuZGVkRWxlbWVudCA9IG51bGwgOiBleHBhbmRlZEVsZW1lbnQgPSBlbGVtZW50XCI+XG4gICAgICA8L3RyPlxuICAgICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IFsnZXhwYW5kZWREZXRhaWxYJ11cIiBjbGFzcz1cImRldGFpbC1yb3dcIj48L3RyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZGlzcGxheURldGFpbFwiPlxuICAgICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCBlbGVtZW50OyBjb2x1bW5zOiBjb2x1bW5zVG9EaXNwbGF5O1wiXG4gICAgICAgICAgY2xhc3M9XCJlbGVtZW50LXJvd1wiPlxuICAgICAgPC90cj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC90YWJsZT5cbiAgPG1hdC1wYWdpbmF0b3IgI01hdFBhZ2luYXRvckN1cnJlbnQgKm5nSWY9XCJkYXRhXCIgW2xlbmd0aF09XCJkYXRhLnRvdGFsRWxlbWVudHNcIlxuICAgICAgICAgICAgICAgICBbcGFnZVNpemVdPVwiZGF0YS5zaXplXCIgW3BhZ2VJbmRleF09XCJkYXRhLm51bWJlclwiIFtoaWRlUGFnZVNpemVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgIChwYWdlKT1cImRhdGEuZmV0Y2goJGV2ZW50LnBhZ2VJbmRleClcIiBzaG93Rmlyc3RMYXN0QnV0dG9ucz48L21hdC1wYWdpbmF0b3I+XG48L2Rpdj5cbiJdfQ==