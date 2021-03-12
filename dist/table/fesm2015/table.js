import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineComponent, ɵɵNgOnChangesFeature, ɵɵtemplate, ɵɵclassMap, ɵɵpropertyInterpolate1, ɵɵadvance, ɵɵtextInterpolate, ɵɵproperty, ɵsetClassMetadata, Component, Input, ɵɵelement, ɵɵpipe, ɵɵpropertyInterpolate, ɵɵpipeBind3, ɵɵsanitizeHtml, ɵɵstyleMap, ɵɵsanitizeUrl, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵtextInterpolate1, ViewChild, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵdefineInjectable, Injectable, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵreference, ɵɵpureFunction2, ɵɵattribute, ɵɵpipeBind1, ɵɵclassProp, ɵɵpureFunction0, ViewEncapsulation } from '@angular/core';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { NgIf, DatePipe, CommonModule, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault, JsonPipe } from '@angular/common';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { __awaiter } from 'tslib';
import { Subject, from } from 'rxjs';
import { startWith, switchMap, debounceTime, share, pluck } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/collections';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatTable, MatHeaderRowDef, MatColumnDef, MatCellDef, MatHeaderCellDef, MatHeaderCell, MatCell, MatHeaderRow, MatRowDef, MatRow, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortHeader, MatSortModule } from '@angular/material/sort';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { MatBadge, MatBadgeModule } from '@angular/material/badge';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

function CustomerRankComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "star_rate");
    ɵɵelementEnd();
} }
class CustomerRankComponent {
    constructor(changeDetectorRefs) {
        this.changeDetectorRefs = changeDetectorRefs;
    }
    ngOnInit() {
        this._type = (this.type || '').replace(/[^A-Z0-9]+/ig, "");
        if (this._type.toLocaleLowerCase() === 'gold') {
            this.typeClass = 'gold';
            this.type = this.type.toUpperCase();
        }
        else if (this._type.toLocaleLowerCase() === 'silver') {
            this.typeClass = 'silver';
            this.type = this.type.toUpperCase();
        }
        else if (this._type.toLocaleLowerCase() === 'bronze') {
            this.typeClass = 'bronze';
            this.type = this.type.toUpperCase();
        }
        else {
            this.type = 'Classic'.toUpperCase();
            this.typeClass = 'default';
        }
        this.changeDetectorRefs.detectChanges();
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
CustomerRankComponent.ɵfac = function CustomerRankComponent_Factory(t) { return new (t || CustomerRankComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
CustomerRankComponent.ɵcmp = ɵɵdefineComponent({ type: CustomerRankComponent, selectors: [["app-customer-rank"]], inputs: { type: "type" }, features: [ɵɵNgOnChangesFeature], decls: 4, vars: 5, consts: [[3, "matTooltip"], [2, "color", "black"], [4, "ngIf"]], template: function CustomerRankComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵelementStart(1, "span", 1);
        ɵɵtext(2);
        ɵɵelementEnd();
        ɵɵtemplate(3, CustomerRankComponent_mat_icon_3_Template, 2, 0, "mat-icon", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap(ctx.typeClass);
        ɵɵpropertyInterpolate1("matTooltip", "Contrat de type : ", ctx.type, "");
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.type);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.type !== "CLASSIC");
    } }, directives: [MatTooltip, NgIf, MatIcon], styles: [".gold[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:gold!important}.silver[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:silver!important}.bronze[_ngcontent-%COMP%]{font-weight:700;font-size:12px;color:#cd7f32!important}.default[_ngcontent-%COMP%]{font-weight:700;font-size:12px;color:#000!important}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CustomerRankComponent, [{
        type: Component,
        args: [{
                selector: 'app-customer-rank',
                templateUrl: './customer-rank.component.html',
                styleUrls: ['./customer-rank.component.scss']
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { type: [{
            type: Input
        }] }); })();

class DateFormatComponent {
    constructor() {
        this.timezone = 'fr';
    }
    ngOnInit() {
    }
    run(date) {
        if (date) {
            let t = date.split(' ');
            return `<span class="time-badge">
                    <span class="hour">${t[0]}</span>
                    <span class="minute">${t[1]}</span>
                </span>`;
        }
        else {
            return `<span class="time-badge">
                    <span class="hour">-</span>
                    <span class="minute"></span>
                </span>`;
        }
    }
    ngOnChanges(changes) {
    }
}
DateFormatComponent.ɵfac = function DateFormatComponent_Factory(t) { return new (t || DateFormatComponent)(); };
DateFormatComponent.ɵcmp = ɵɵdefineComponent({ type: DateFormatComponent, selectors: [["date-format"]], inputs: { date: "date", timezone: "timezone" }, features: [ɵɵNgOnChangesFeature], decls: 3, vars: 10, consts: [[3, "matTooltip", "innerHTML"]], template: function DateFormatComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "span", 0);
        ɵɵpipe(1, "date");
        ɵɵpipe(2, "date");
    } if (rf & 2) {
        ɵɵpropertyInterpolate("matTooltip", ɵɵpipeBind3(1, 2, ctx.date, "short", ctx.timezone));
        ɵɵproperty("innerHTML", ctx.run(ɵɵpipeBind3(2, 6, ctx.date, "short", ctx.timezone)), ɵɵsanitizeHtml);
    } }, directives: [MatTooltip], pipes: [DatePipe], styles: ["span.time-badge[_ngcontent-%COMP%]{display:block;text-align:center!important;padding-right:25px}span.time-badge[_ngcontent-%COMP%]   .hour[_ngcontent-%COMP%]{display:block;font-weight:900;font-size:12px}span.time-badge[_ngcontent-%COMP%]   .minute[_ngcontent-%COMP%]{display:block;font-weight:300;font-size:10px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DateFormatComponent, [{
        type: Component,
        args: [{
                selector: 'date-format',
                templateUrl: './date-format.component.html',
                styleUrls: ['./date-format.component.scss']
            }]
    }], function () { return []; }, { date: [{
            type: Input
        }], timezone: [{
            type: Input
        }] }); })();

class EquipementStatusComponent {
    constructor(changeDetectorRefs) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.css = {};
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        const params = {
            "actif": "/assets/icons/status/actif.png",
            "oui": "/assets/icons/status/actif.png",
            "hs": "/assets/icons/status/HS.png",
            "inactif": "/assets/icons/status/inactif.png",
            "non": "/assets/icons/status/inactif.png",
            "spare": "/assets/icons/status/spare.png",
        };
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean];
        }
        this.changeDetectorRefs.detectChanges();
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
EquipementStatusComponent.ɵfac = function EquipementStatusComponent_Factory(t) { return new (t || EquipementStatusComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
EquipementStatusComponent.ɵcmp = ɵɵdefineComponent({ type: EquipementStatusComponent, selectors: [["app-equipement-status"]], inputs: { type: "type", size: "size" }, features: [ɵɵNgOnChangesFeature], decls: 2, vars: 6, consts: [[3, "matTooltip"], [3, "src"]], template: function EquipementStatusComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵelement(1, "img", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleMap(ctx.css);
        ɵɵpropertyInterpolate("matTooltip", ctx.type);
        ɵɵadvance(1);
        ɵɵstyleMap(ctx.css);
        ɵɵproperty("src", ctx.icon, ɵɵsanitizeUrl);
    } }, directives: [MatTooltip], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EquipementStatusComponent, [{
        type: Component,
        args: [{
                selector: 'app-equipement-status',
                templateUrl: './equipement-status.component.html',
                styleUrls: ['./equipement-status.component.scss']
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { type: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();

class EquipementTypeComponent {
    constructor(changeDetectorRefs) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.css = {};
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = {
            "firewall": "/assets/icons/equipment/firewallnwt.png",
            "nas": "/assets/icons/equipment/nasnwt.png",
            "pcfixe": "/assets/icons/equipment/pcfixe_1.png",
            "pcportable": "/assets/icons/equipment/pcportable_1.png",
            "portable": "/assets/icons/equipment/pcportable_1.png",
            "clientleger": "/assets/icons/equipment/pcportable_1.png",
            "clientléger": "/assets/icons/equipment/pcportable_1.png",
            "onduleur": "/assets/icons/equipment/ondulateur.png",
            "serveur": "/assets/icons/equipment/serveur.png",
            "server": "/assets/icons/equipment/serveur.png",
            "servervirtuel": "/assets/icons/equipment/vps.png",
            "serveurvirtuel": "/assets/icons/equipment/vps.png",
            "vm": "/assets/icons/equipment/vps.png",
            "wifi": "/assets/icons/equipment/wifi.png",
            "workstationfixe": "/assets/icons/equipment/pcfixe_1.png",
            "workstationportable": "/assets/icons/equipment/pcportable_1.png",
            "imprimante": "/assets/icons/equipment/printer.png",
        };
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        const server = this.name.toLocaleLowerCase().includes('srv');
        if (params[clean]) {
            this.icon = params[clean];
        }
        else if (server) {
            this.icon = "/assets/icons/equipment/serveur.png";
        }
        else {
            this.icon = "/assets/icons/equipment/default.png";
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
EquipementTypeComponent.ɵfac = function EquipementTypeComponent_Factory(t) { return new (t || EquipementTypeComponent)(ɵɵdirectiveInject(ChangeDetectorRef)); };
EquipementTypeComponent.ɵcmp = ɵɵdefineComponent({ type: EquipementTypeComponent, selectors: [["app-equipement-type"]], inputs: { name: "name", type: "type", size: "size" }, features: [ɵɵNgOnChangesFeature], decls: 2, vars: 6, consts: [[3, "matTooltip"], [3, "src"]], template: function EquipementTypeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵelement(1, "img", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleMap(ctx.css);
        ɵɵpropertyInterpolate("matTooltip", ctx.type);
        ɵɵadvance(1);
        ɵɵstyleMap(ctx.css);
        ɵɵproperty("src", ctx.icon, ɵɵsanitizeUrl);
    } }, directives: [MatTooltip], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EquipementTypeComponent, [{
        type: Component,
        args: [{
                selector: 'app-equipement-type',
                templateUrl: './equipement-type.component.html',
                styleUrls: ['./equipement-type.component.scss']
            }]
    }], function () { return [{ type: ChangeDetectorRef }]; }, { name: [{
            type: Input
        }], type: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();

class GenderComponent {
    constructor() {
        this.css = {};
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = {
            "m": "/assets/icons/nowteam/salutations/man.png",
            "mme": "/assets/icons/nowteam/salutations/woman.png",
        };
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.css.maxWidth = String(((this.size || 40) - 10)) + 'px';
            this.css.maxHeight = String(((this.size || 40) - 10)) + 'px';
            this.icon = "/assets/icons/status/HS.png";
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
GenderComponent.ɵfac = function GenderComponent_Factory(t) { return new (t || GenderComponent)(); };
GenderComponent.ɵcmp = ɵɵdefineComponent({ type: GenderComponent, selectors: [["app-gender"]], inputs: { type: "type", size: "size" }, features: [ɵɵNgOnChangesFeature], decls: 2, vars: 6, consts: [[3, "matTooltip"], [3, "src"]], template: function GenderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵelement(1, "img", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleMap(ctx.css);
        ɵɵpropertyInterpolate("matTooltip", ctx.type);
        ɵɵadvance(1);
        ɵɵstyleMap(ctx.css);
        ɵɵproperty("src", ctx.icon, ɵɵsanitizeUrl);
    } }, directives: [MatTooltip], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GenderComponent, [{
        type: Component,
        args: [{
                selector: 'app-gender',
                templateUrl: './gender.component.html',
                styleUrls: ['./gender.component.scss']
            }]
    }], function () { return []; }, { type: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();

function IsMatIconComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.display);
} }
function IsMatIconComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r2.display);
} }
class IsMatIconComponent {
    constructor() {
        this.isIcon = false;
    }
    ngOnInit() {
        if (this.input && this.input.indexOf(('icon.')) > -1) {
            console.log('heheheeh', this.input);
            this.isIcon = true;
            this.display = this.input.split('.')[1];
        }
        else {
            this.isIcon = false;
            this.display = this.input;
        }
    }
}
IsMatIconComponent.ɵfac = function IsMatIconComponent_Factory(t) { return new (t || IsMatIconComponent)(); };
IsMatIconComponent.ɵcmp = ɵɵdefineComponent({ type: IsMatIconComponent, selectors: [["app-is-mat-icon"]], inputs: { input: "input" }, decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function IsMatIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, IsMatIconComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        ɵɵtemplate(1, IsMatIconComponent_ng_container_1_Template, 3, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.isIcon);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isIcon);
    } }, directives: [NgIf, MatIcon], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(IsMatIconComponent, [{
        type: Component,
        args: [{
                selector: 'app-is-mat-icon',
                templateUrl: './is-mat-icon.component.html',
                styleUrls: ['./is-mat-icon.component.scss']
            }]
    }], function () { return []; }, { input: [{
            type: Input
        }] }); })();

const _c0 = ["avatar"];
class NameAvatarComponent {
    constructor() {
        this.fontSize = '24px';
        this._padding = '4px';
        this._display = 'flex';
        this._borderRadius = '50px';
        this._size = 'cover';
        this.afterInit = false;
        this.defaultFontSize = 12;
        this.defaultDimension = 24;
    }
    ngOnInit() {
        if (this.src) {
            let deg = Math.random() * (10 - 360) + 10;
            this.icon.nativeElement.style.backgroundImage = `linear-gradient(${deg}deg, #9d107d, 
                                                             #8b3391, #7647a0, #5f56a8, #4862ab)`;
            this.icon.nativeElement.style.borderRadius = this._borderRadius;
            this.icon.nativeElement.style.marginLeft = '16px';
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.fontSize = (parseInt(this.fontSize, 0) / 2) + 'px';
            this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';
            this.icon.nativeElement.style.fontWeight = '900';
            this.icon.nativeElement.style.color = 'white';
            const tmp = this.src.split(' ');
            this.letter = (tmp[0][0] + (tmp[1] && tmp[1][0] ? tmp[1][0] : tmp[0][1])).toUpperCase();
        }
        else if (this.afterInit === false) {
            this.afterInit = true;
        }
    }
    ngAfterViewInit() {
        if (this.afterInit) {
            this.ngOnInit();
        }
    }
    getRatio() {
    }
}
NameAvatarComponent.ɵfac = function NameAvatarComponent_Factory(t) { return new (t || NameAvatarComponent)(); };
NameAvatarComponent.ɵcmp = ɵɵdefineComponent({ type: NameAvatarComponent, selectors: [["name-avatar"]], viewQuery: function NameAvatarComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.icon = _t.first);
    } }, inputs: { src: "src", fontSize: "fontSize" }, decls: 3, vars: 1, consts: [["avatar", ""]], template: function NameAvatarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", null, 0);
        ɵɵtext(2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.letter, "\n");
    } }, styles: ["div[_ngcontent-%COMP%]{align-items:center;justify-content:center;padding:0!important}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NameAvatarComponent, [{
        type: Component,
        args: [{
                selector: 'name-avatar',
                templateUrl: './name-avatar.component.html',
                styleUrls: ['./name-avatar.component.scss']
            }]
    }], function () { return []; }, { src: [{
            type: Input
        }], fontSize: [{
            type: Input
        }], icon: [{
            type: ViewChild,
            args: ['avatar', { static: true }]
        }] }); })();

const _c0$1 = ["icon"];
class PngIconComponent {
    constructor() {
        this.fontSize = '24px';
        this._padding = '5px';
        this._display = 'inline-flex';
        this._size = 'cover';
    }
    ngOnInit() {
        if (this.src) {
            this.icon.nativeElement.style.backgroundImage = `url(${this.src})`;
            this.icon.nativeElement.style.backgroundSize = this._size;
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.padding = this._padding;
            if (this.color) {
                this.icon.nativeElement.style.color = this.color;
            }
        }
    }
}
PngIconComponent.ɵfac = function PngIconComponent_Factory(t) { return new (t || PngIconComponent)(); };
PngIconComponent.ɵcmp = ɵɵdefineComponent({ type: PngIconComponent, selectors: [["png-icon"]], viewQuery: function PngIconComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.icon = _t.first);
    } }, inputs: { src: "src", fontSize: "fontSize", color: "color" }, decls: 2, vars: 0, consts: [["icon", ""]], template: function PngIconComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "span", null, 0);
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PngIconComponent, [{
        type: Component,
        args: [{
                selector: 'png-icon',
                templateUrl: './png-icon.component.html',
                styleUrls: ['./png-icon.component.scss']
            }]
    }], function () { return []; }, { src: [{
            type: Input
        }], fontSize: [{
            type: Input
        }], color: [{
            type: Input
        }], icon: [{
            type: ViewChild,
            args: ['icon', { static: true }]
        }] }); })();

class OriginComponent {
    constructor() {
    }
    ngOnInit() {
        const list = [{
                "label": "Web",
                "data": "assets/icons/nowteam/Web.png"
            }, {
                "label": "PRTG",
                "data": "assets/icons/nowteam/PRTG.png"
            }, {
                "label": "Mail",
                "data": "assets/icons/nowteam/Mail.png"
            }, {
                "label": "Téléphone",
                "data": "assets/icons/nowteam/Telephone.png"
            }, {
                "label": "Bot",
                "data": "assets/icons/nowteam/Bot.png"
            }];
        const flter = list.filter((e) => {
            return this.icon.includes(e.label);
        });
        this.iconSrc = flter && flter.length && flter[0].data ? flter[0].data : '';
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
OriginComponent.ɵfac = function OriginComponent_Factory(t) { return new (t || OriginComponent)(); };
OriginComponent.ɵcmp = ɵɵdefineComponent({ type: OriginComponent, selectors: [["icon-origin"]], inputs: { icon: "icon" }, features: [ɵɵNgOnChangesFeature], decls: 1, vars: 2, consts: [[2, "margin", "auto", "text-align", "center", 3, "matTooltip", "src"]], template: function OriginComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "png-icon", 0);
    } if (rf & 2) {
        ɵɵpropertyInterpolate("matTooltip", ctx.icon);
        ɵɵproperty("src", ctx.iconSrc);
    } }, directives: [PngIconComponent, MatTooltip], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OriginComponent, [{
        type: Component,
        args: [{
                selector: 'icon-origin',
                templateUrl: './origin.component.html',
                styleUrls: ['./origin.component.scss']
            }]
    }], function () { return []; }, { icon: [{
            type: Input
        }] }); })();

class PhoneDisplayComponent {
    constructor() {
    }
    ngOnInit() {
        this.display = this.normalize(this.number);
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
    normalize(str) {
        str = (str || '').replace(/[^\d]/g, "");
        if (str.length == 10) {
            //reformat and return phone number
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+33) $1.$2.$3.$4.$5");
        }
        else if (str.length > 10 && str.length <= 13) {
            if (str.length === 11) {
                str = '0' + str;
            }
            if (str.length === 13 && str.includes('+')) {
                let tmp = str.slice(0, 3);
                let end = str.slice(3, str.length);
                str = tmp + '0' + end;
            }
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+$1) $2.$3.$4.$5.$6");
        }
        return null;
    }
}
PhoneDisplayComponent.ɵfac = function PhoneDisplayComponent_Factory(t) { return new (t || PhoneDisplayComponent)(); };
PhoneDisplayComponent.ɵcmp = ɵɵdefineComponent({ type: PhoneDisplayComponent, selectors: [["app-phone-display"]], inputs: { number: "number" }, features: [ɵɵNgOnChangesFeature], decls: 2, vars: 1, template: function PhoneDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "strong");
        ɵɵtext(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate(ctx.display || "-");
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PhoneDisplayComponent, [{
        type: Component,
        args: [{
                selector: 'app-phone-display',
                templateUrl: './phone-display.component.html',
                styleUrls: ['./phone-display.component.scss']
            }]
    }], function () { return []; }, { number: [{
            type: Input
        }] }); })();

class PngIconModule {
}
PngIconModule.ɵmod = ɵɵdefineNgModule({ type: PngIconModule });
PngIconModule.ɵinj = ɵɵdefineInjector({ factory: function PngIconModule_Factory(t) { return new (t || PngIconModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PngIconModule, { declarations: [PngIconComponent], imports: [CommonModule], exports: [PngIconComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PngIconModule, [{
        type: NgModule,
        args: [{
                declarations: [PngIconComponent],
                imports: [
                    CommonModule
                ],
                exports: [
                    PngIconComponent
                ]
            }]
    }], null, null); })();

class PriorityComponent {
    constructor() {
    }
    ngOnInit() {
        const list = [{
                "label": "5 - Critique (Production)",
                "data": "assets/icons/nowteam/critiqueprod.png"
            }, {
                "label": "4 - Critique",
                "data": "assets/icons/nowteam/critique.png"
            }, {
                "label": "3 - Urgente",
                "data": "assets/icons/nowteam/urgent.png"
            }, {
                "label": "2 - Normale",
                'data': "assets/icons/nowteam/normal.png"
            }, {
                "label": "1 - Basse",
                "data": "assets/icons/nowteam/basse.png"
            }];
        const data = list.filter((e) => {
            return this.icon.includes(e.label);
        });
        if (data && data.length) {
            this.iconSrc = data[0].data;
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
PriorityComponent.ɵfac = function PriorityComponent_Factory(t) { return new (t || PriorityComponent)(); };
PriorityComponent.ɵcmp = ɵɵdefineComponent({ type: PriorityComponent, selectors: [["icon-priority"]], inputs: { icon: "icon" }, features: [ɵɵNgOnChangesFeature], decls: 1, vars: 2, consts: [[3, "matTooltip", "src"]], template: function PriorityComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "png-icon", 0);
    } if (rf & 2) {
        ɵɵpropertyInterpolate("matTooltip", ctx.icon);
        ɵɵproperty("src", ctx.iconSrc);
    } }, directives: [PngIconComponent, MatTooltip], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PriorityComponent, [{
        type: Component,
        args: [{
                selector: 'icon-priority',
                templateUrl: './priority.component.html',
                styleUrls: ['./priority.component.scss']
            }]
    }], function () { return []; }, { icon: [{
            type: Input
        }] }); })();

class YesNoComponent {
    constructor() {
        this.displayNo = false;
        this.displayYes = true;
        this.css = {};
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = {
            "true": "/assets/icons/status/actif.png",
            "false": "/assets/icons/status/incatif.png"
        };
        if (this.valid && this.displayYes) {
            this.icon = params["true"];
        }
        else if (this.displayNo) {
            this.icon = params["false"];
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
YesNoComponent.ɵfac = function YesNoComponent_Factory(t) { return new (t || YesNoComponent)(); };
YesNoComponent.ɵcmp = ɵɵdefineComponent({ type: YesNoComponent, selectors: [["app-yes-nox"]], inputs: { valid: "valid", displayNo: "displayNo", displayYes: "displayYes", size: "size" }, features: [ɵɵNgOnChangesFeature], decls: 2, vars: 5, consts: [[3, "src"]], template: function YesNoComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span");
        ɵɵelement(1, "img", 0);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleMap(ctx.css);
        ɵɵadvance(1);
        ɵɵstyleMap(ctx.css);
        ɵɵproperty("src", ctx.icon, ɵɵsanitizeUrl);
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(YesNoComponent, [{
        type: Component,
        args: [{
                selector: 'app-yes-nox',
                templateUrl: './yes-no.component.html',
                styleUrls: ['./yes-no.component.scss']
            }]
    }], function () { return []; }, { valid: [{
            type: Input
        }], displayNo: [{
            type: Input
        }], displayYes: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();

class TableService {
    constructor() {
    }
}
TableService.ɵfac = function TableService_Factory(t) { return new (t || TableService)(); };
TableService.ɵprov = ɵɵdefineInjectable({ token: TableService, factory: TableService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/***********************************************************
 **  @project MS_Nowboard                              **
 **  @file ComponentRegistry                                         **
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>  **
 **  @Date 12/03/2021                                         **
 ***********************************************************/
var CellsComponentList;
(function (CellsComponentList) {
    CellsComponentList["ButtonLink"] = "button-link";
    CellsComponentList["Priority"] = "priority";
    CellsComponentList["Origin"] = "origin";
    CellsComponentList["NameAvatar"] = "name-avatar";
    CellsComponentList["DateFormat"] = "date-format";
    CellsComponentList["CountRow"] = "count-row";
})(CellsComponentList || (CellsComponentList = {}));

class CoreMatTable extends DataSource {
    constructor(data, sortRules, rangeRules, size = 20, detailRaws = true) {
        super();
        this.number = 0;
        this.pageNumber = new Subject();
        this.pageSort = new Subject();
        this.pageFilter = new Subject();
        this.pageFilterDate = new Subject();
        this.size = size;
        this.data = [...data];
        this.totalElements = data.length;
        this.page$ = this.pageFilterDate.pipe(startWith(rangeRules), switchMap(range => this.pageFilter.pipe(debounceTime(500)).pipe(startWith(''), switchMap(filter => this.pageSort.pipe(startWith(sortRules), switchMap(sortAction => this.pageNumber.pipe(startWith(0), switchMap(page => from([{
                content: this.slice(this.sortData(this.filterData(this.filterDateRange(this.data, range), filter), sortAction), page, this.size, detailRaws)
            }])), share())))))));
    }
    filterDateRange(data, range) {
        if (!range.valueStart && !range.valueEnd) {
            return data;
        }
        else {
            return data.filter((e) => {
                if (range.valueStart && range.valueEnd) {
                    return new Date(e[range.active]) >= new Date(range.valueStart)
                        && new Date(e[range.active]) <= new Date(range.valueEnd);
                }
                else if (range.valueStart && !range.valueEnd) {
                    return new Date(e[range.active]) >= new Date(range.valueStart);
                }
                else if (!range.valueStart && range.valueEnd) {
                    return new Date(e[range.active]) <= new Date(range.valueEnd);
                }
            });
        }
    }
    ponderation(str, searchKey) {
        let stack = str.split(' ');
        let pond = 0;
        for (let s of stack) {
            let search = s.replace(new RegExp(' ', 'g'), '');
            if (search && search.includes(searchKey)) {
                pond++;
            }
        }
        return pond;
    }
    filterData(data, filter) {
        const result = [];
        if (filter && filter.replace(/[^a-zA-Z ]/g, " ")) {
            for (let e of data) {
                e.pond = 0;
                const dataRaw = JSON.stringify(e).toLowerCase()
                    .replace(/[^a-zA-Z ]/g, " ");
                const stack = filter.toLowerCase().replace(/[^a-zA-Z ]/g, " ")
                    .split(' ');
                let combination = 0;
                for (let k of stack) {
                    if (dataRaw.includes(k)) {
                        const pond = this.ponderation(dataRaw, k);
                        if (!e.pond) {
                            e.pond = 0;
                        }
                        e.pond += pond;
                        combination++;
                    }
                }
                if (e.pond && combination === stack.length) {
                    result.push(e);
                }
            }
            return result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
        }
        else {
            return data;
        }
    }
    sortData(data, sortAction) {
        if (sortAction.direction !== '') {
            return data.sort((a, b) => {
                return this.compare(a[sortAction.active], b[sortAction.active], sortAction.direction === 'asc');
            });
        }
        else {
            return data;
        }
    }
    compare(a, b, isAsc) {
        if (!a) {
            a = null;
        }
        if (!b) {
            b = null;
        }
        return (((Array.isArray(a) ? a.length : a) > ((Array.isArray(b) ? b.length : b)) ? -1 : 1) * (isAsc ? 1 : -1));
    }
    fetch(page) {
        this.pageNumber.next(page);
    }
    sortIt(sortidea) {
        this.pageSort.next(sortidea);
    }
    filter(myFilter) {
        this.pageFilter.next(myFilter.target.value);
    }
    filterDate(dateFilter) {
        this.pageFilterDate.next(dateFilter);
    }
    connect() {
        return this.page$.pipe(pluck('content'));
    }
    disconnect() {
    }
    slice(data, start = 0, end = 20, detailRow = true) {
        const rows = [];
        this.totalElements = data.length;
        data = data.slice(start * end, (start * end) + end);
        if (detailRow) {
            data.forEach(element => rows.push(element));
            return rows;
        }
        else {
            return data;
        }
    }
}

const _c0$2 = ["MatPaginatorCurrent"];
const _c1 = ["table"];
function TableComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 9);
    ɵɵlistener("click", function TableComponent_a_6_Template_a_click_0_listener() { ɵɵrestoreView(_r10); const ctx_r9 = ɵɵnextContext(); const _r5 = ɵɵreference(5); return ctx_r9.reset() && (_r5.value = ""); });
    ɵɵelement(1, "img", 10);
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵproperty("matTooltip", "Annuler la recherche");
    ɵɵadvance(1);
    ɵɵproperty("src", "/assets/icons/search_off-24px.svg", ɵɵsanitizeUrl);
} }
const _c2 = function (a0, a1) { return [a0, a1]; };
function TableComponent_table_7_ng_container_2_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 20);
    ɵɵelement(1, "app-is-mat-icon", 21);
    ɵɵelementEnd();
} if (rf & 2) {
    const column_r17 = ɵɵnextContext(2).$implicit;
    const ctx_r21 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r21.generateClass(ɵɵpureFunction2(3, _c2, column_r17.class, column_r17.align ? "text-align-" + column_r17.align : "text-align-left")));
    ɵɵadvance(1);
    ɵɵproperty("input", column_r17.value);
} }
function TableComponent_table_7_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableComponent_table_7_ng_container_2_ng_container_1_th_1_Template, 2, 6, "th", 19);
    ɵɵelementContainerEnd();
} }
function TableComponent_table_7_ng_container_2_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 23);
    ɵɵelement(1, "app-is-mat-icon", 21);
    ɵɵelementEnd();
} if (rf & 2) {
    const column_r17 = ɵɵnextContext(2).$implicit;
    const ctx_r23 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r23.generateClass(ɵɵpureFunction2(3, _c2, column_r17.class, column_r17.align ? "text-align-" + column_r17.align : "text-align-left")));
    ɵɵadvance(1);
    ɵɵproperty("input", column_r17.value);
} }
function TableComponent_table_7_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableComponent_table_7_ng_container_2_ng_container_2_th_1_Template, 2, 6, "th", 22);
    ɵɵelementContainerEnd();
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "app-is-mat-icon", 31);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r17 = ɵɵnextContext(4).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("input", column_r17.display);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = ɵɵnextContext(3).$implicit;
    const column_r17 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r25[column_r17.key], " ");
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 30);
    ɵɵtemplate(1, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_ng_container_1_Template, 2, 1, "ng-container", 16);
    ɵɵtemplate(2, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_ng_container_2_Template, 2, 1, "ng-container", 16);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r25 = ɵɵnextContext(2).$implicit;
    const column_r17 = ɵɵnextContext().$implicit;
    const ctx_r33 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("routerLink", column_r17.override ? ctx_r33.buildLink(column_r17.override, element_r25) : element_r25[column_r17.key]);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", column_r17.display);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !column_r17.display);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "app-is-mat-icon", 31);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r17 = ɵɵnextContext(4).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("input", column_r17.display);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = ɵɵnextContext(3).$implicit;
    const column_r17 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r25[column_r17.key], " ");
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 32);
    ɵɵtemplate(1, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_ng_container_1_Template, 2, 1, "ng-container", 16);
    ɵɵtemplate(2, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_ng_container_2_Template, 2, 1, "ng-container", 16);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r25 = ɵɵnextContext(2).$implicit;
    const column_r17 = ɵɵnextContext().$implicit;
    const ctx_r34 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("routerLink", column_r17.override ? ctx_r34.buildLink(column_r17.override, element_r25) : element_r25[column_r17.key]);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", column_r17.display);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !column_r17.display);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_Template, 3, 3, "a", 28);
    ɵɵtemplate(2, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_Template, 3, 3, "a", 29);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", element_r25.new);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !element_r25.new);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "icon-priority", 33);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = ɵɵnextContext().$implicit;
    const column_r17 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("icon", element_r25[column_r17.key]);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "icon-origin", 33);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = ɵɵnextContext().$implicit;
    const column_r17 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("icon", element_r25[column_r17.key]);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "name-avatar", 34);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = ɵɵnextContext().$implicit;
    const column_r17 = ɵɵnextContext().$implicit;
    const ctx_r29 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵpropertyInterpolate("matTooltip", ctx_r29.Join(element_r25, column_r17.override));
    ɵɵproperty("src", element_r25[column_r17.key])("matTooltipClass", "my-tooltip");
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "date-format", 35);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = ɵɵnextContext().$implicit;
    const column_r17 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("date", element_r25[column_r17.key]);
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 36);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = ɵɵnextContext().$implicit;
    const column_r17 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", element_r25[column_r17.key] && element_r25[column_r17.key].length ? element_r25[column_r17.key].length : "-", " ");
} }
function TableComponent_table_7_ng_container_2_td_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const element_r25 = ɵɵnextContext().$implicit;
    const column_r17 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r25[column_r17.key], " ");
} }
function TableComponent_table_7_ng_container_2_td_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 24);
    ɵɵelementContainerStart(1, 25);
    ɵɵtemplate(2, TableComponent_table_7_ng_container_2_td_3_ng_container_2_Template, 3, 2, "ng-container", 26);
    ɵɵtemplate(3, TableComponent_table_7_ng_container_2_td_3_ng_container_3_Template, 2, 1, "ng-container", 26);
    ɵɵtemplate(4, TableComponent_table_7_ng_container_2_td_3_ng_container_4_Template, 2, 1, "ng-container", 26);
    ɵɵtemplate(5, TableComponent_table_7_ng_container_2_td_3_ng_container_5_Template, 2, 3, "ng-container", 26);
    ɵɵtemplate(6, TableComponent_table_7_ng_container_2_td_3_ng_container_6_Template, 2, 1, "ng-container", 26);
    ɵɵtemplate(7, TableComponent_table_7_ng_container_2_td_3_ng_container_7_Template, 3, 1, "ng-container", 26);
    ɵɵtemplate(8, TableComponent_table_7_ng_container_2_td_3_ng_container_8_Template, 2, 1, "ng-container", 27);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const column_r17 = ɵɵnextContext().$implicit;
    const ctx_r20 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r20.generateClass(ɵɵpureFunction2(9, _c2, column_r17.class, column_r17.align ? "text-align-" + column_r17.align : "")));
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", column_r17.module);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "button-link");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "priority");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "origin");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "name-avatar");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "date-format");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "count-row");
} }
function TableComponent_table_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0, 17);
    ɵɵtemplate(1, TableComponent_table_7_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 16);
    ɵɵtemplate(2, TableComponent_table_7_ng_container_2_ng_container_2_Template, 2, 0, "ng-container", 16);
    ɵɵtemplate(3, TableComponent_table_7_ng_container_2_td_3_Template, 9, 12, "td", 18);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r17 = ctx.$implicit;
    ɵɵpropertyInterpolate("matColumnDef", column_r17.key);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", column_r17.sort);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !column_r17.sort);
} }
function TableComponent_table_7_ng_container_3_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 39);
    ɵɵelementStart(1, "div", 40);
    ɵɵtext(2);
    ɵɵpipe(3, "json");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r64 = ctx.$implicit;
    const ctx_r63 = ɵɵnextContext(3);
    ɵɵproperty("@detailExpand", element_r64 == ctx_r63.expandedElement ? "expanded" : "collapsed");
    ɵɵattribute("colspan", ctx_r63.columnsToDisplay.length);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, element_r64), " ");
} }
function TableComponent_table_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0, 37);
    ɵɵtemplate(1, TableComponent_table_7_ng_container_3_td_1_Template, 4, 5, "td", 38);
    ɵɵelementContainerEnd();
} }
function TableComponent_table_7_tr_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 41);
} }
function TableComponent_table_7_ng_container_5_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r69 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 44);
    ɵɵlistener("click", function TableComponent_table_7_ng_container_5_tr_1_Template_tr_click_0_listener() { ɵɵrestoreView(_r69); const element_r67 = ctx.$implicit; const ctx_r68 = ɵɵnextContext(3); return ctx_r68.expandedElement === element_r67 ? ctx_r68.expandedElement = null : ctx_r68.expandedElement = element_r67; });
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r67 = ctx.$implicit;
    const ctx_r65 = ɵɵnextContext(3);
    ɵɵclassProp("expanded", ctx_r65.expandedElement == element_r67);
} }
function TableComponent_table_7_ng_container_5_tr_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 45);
} }
const _c3 = function () { return ["expandedDetailX"]; };
function TableComponent_table_7_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableComponent_table_7_ng_container_5_tr_1_Template, 1, 2, "tr", 42);
    ɵɵtemplate(2, TableComponent_table_7_ng_container_5_tr_2_Template, 1, 0, "tr", 43);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("matRowDefColumns", ctx_r15.columnsToDisplay);
    ɵɵadvance(1);
    ɵɵproperty("matRowDefColumns", ɵɵpureFunction0(2, _c3));
} }
function TableComponent_table_7_ng_container_6_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 47);
} }
function TableComponent_table_7_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableComponent_table_7_ng_container_6_tr_1_Template, 1, 0, "tr", 46);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("matRowDefColumns", ctx_r16.columnsToDisplay);
} }
function TableComponent_table_7_Template(rf, ctx) { if (rf & 1) {
    const _r74 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "table", 11, 12);
    ɵɵlistener("matSortChange", function TableComponent_table_7_Template_table_matSortChange_0_listener($event) { ɵɵrestoreView(_r74); const ctx_r73 = ɵɵnextContext(); return ctx_r73.data.sortIt($event); });
    ɵɵtemplate(2, TableComponent_table_7_ng_container_2_Template, 4, 3, "ng-container", 13);
    ɵɵtemplate(3, TableComponent_table_7_ng_container_3_Template, 2, 0, "ng-container", 14);
    ɵɵtemplate(4, TableComponent_table_7_tr_4_Template, 1, 0, "tr", 15);
    ɵɵtemplate(5, TableComponent_table_7_ng_container_5_Template, 3, 3, "ng-container", 16);
    ɵɵtemplate(6, TableComponent_table_7_ng_container_6_Template, 2, 1, "ng-container", 16);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵproperty("dataSource", ctx_r7.data);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r7.displayedColumns);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.displayDetail);
    ɵɵadvance(1);
    ɵɵproperty("matHeaderRowDef", ctx_r7.columnsToDisplay);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.displayDetail);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r7.displayDetail);
} }
function TableComponent_mat_paginator_8_Template(rf, ctx) { if (rf & 1) {
    const _r77 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-paginator", 48, 49);
    ɵɵlistener("page", function TableComponent_mat_paginator_8_Template_mat_paginator_page_0_listener($event) { ɵɵrestoreView(_r77); const ctx_r76 = ɵɵnextContext(); return ctx_r76.data.fetch($event.pageIndex); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    ɵɵproperty("length", ctx_r8.data.totalElements)("pageSize", ctx_r8.data.size)("pageIndex", ctx_r8.data.number)("hidePageSize", true);
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
TableComponent.ɵcmp = ɵɵdefineComponent({ type: TableComponent, selectors: [["ngx-design-table"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$2, true);
        ɵɵstaticViewQuery(_c1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.paginatorCurrent = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sortCurrent = _t.first);
    } }, inputs: { columnDefinitions: "columnDefinitions", displayDetail: "displayDetail", displayComponent: "displayComponent", data: "data" }, decls: 9, vars: 4, consts: [[1, "table-wrapper"], [1, "row", 2, "height", "84px", "background", "transparent!important"], [1, "elevation-z1"], [1, "col-lg-12", "search-container"], ["type", "text", "placeholder", "Recherche", 1, "search-box", 3, "maxLength", "input"], ["filterOngoing", ""], ["class", "close-search", 3, "matTooltip", "click", 4, "ngIf"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "class", "mat-elevation-z8", 3, "dataSource", "matSortChange", 4, "ngIf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "hidePageSize", "page", 4, "ngIf"], [1, "close-search", 3, "matTooltip", "click"], [3, "src"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["table", "matSort"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetailX", 4, "ngIf"], ["mat-header-row", "", 4, "matHeaderRowDef"], [4, "ngIf"], [3, "matColumnDef"], ["mat-cell", "", 3, "class", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "class", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], [3, "input"], ["mat-header-cell", "", 3, "class", 4, "matHeaderCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["matTooltip", "Ouvrir", "class", "mat-button nowboard-btn btn-xs", "matBadge", "*", "matBadgePosition", "before", "matBadgeColor", "accent", 3, "routerLink", 4, "ngIf"], ["matTooltip", "Ouvrir", "class", "mat-button nowboard-btn btn-xs", 3, "routerLink", 4, "ngIf"], ["matTooltip", "Ouvrir", "matBadge", "*", "matBadgePosition", "before", "matBadgeColor", "accent", 1, "mat-button", "nowboard-btn", "btn-xs", 3, "routerLink"], [2, "padding-top", "10px", 3, "input"], ["matTooltip", "Ouvrir", 1, "mat-button", "nowboard-btn", "btn-xs", 3, "routerLink"], [3, "icon"], [3, "matTooltip", "src", "matTooltipClass"], [2, "padding-right", "10px", 3, "date"], [2, "padding-left", "14px"], ["matColumnDef", "expandedDetailX"], ["mat-cell", "", "style", "border-bottom:transparent!important;height: 0", 4, "matCellDef"], ["mat-cell", "", 2, "border-bottom", "transparent!important", "height", "0"], [1, "element-detail"], ["mat-header-row", ""], ["mat-row", "", "class", "element-row", 3, "expanded", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "detail-row", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", 1, "element-row", 3, "click"], ["mat-row", "", 1, "detail-row"], ["mat-row", "", "class", "element-row", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", 1, "element-row"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "hidePageSize", "page"], ["MatPaginatorCurrent", ""]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵelementStart(4, "input", 4, 5);
        ɵɵlistener("input", function TableComponent_Template_input_input_4_listener($event) { return ($event.target.value.length > 1 || $event.target.value.length === 0) && $event.target.value.length < 200 ? ctx.data.filter($event) : null; });
        ɵɵelementEnd();
        ɵɵtemplate(6, TableComponent_a_6_Template, 2, 2, "a", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(7, TableComponent_table_7_Template, 7, 6, "table", 7);
        ɵɵtemplate(8, TableComponent_mat_paginator_8_Template, 2, 4, "mat-paginator", 8);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r5 = ɵɵreference(5);
        ɵɵadvance(4);
        ɵɵproperty("maxLength", 100);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", _r5.value);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.displayedColumns && ctx.columnsToDisplay);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.data);
    } }, directives: [NgIf, MatTooltip, MatTable, MatSort, NgForOf, MatHeaderRowDef, MatColumnDef, MatCellDef, MatHeaderCellDef, MatHeaderCell, MatSortHeader, IsMatIconComponent, MatCell, NgSwitch, NgSwitchCase, NgSwitchDefault, RouterLinkWithHref, MatBadge, PriorityComponent, OriginComponent, NameAvatarComponent, DateFormatComponent, MatHeaderRow, MatRowDef, MatRow, MatPaginator], pipes: [JsonPipe], styles: [".table-wrapper table{width:100%}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .element-row .mat-cell{padding-right:5px}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width:1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width:1440px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:11px!important}.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}"], encapsulation: 2, data: { animation: [trigger('detailExpand', [
                state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
                state('expanded', style({ height: '*' })),
                transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ])] } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableComponent, [{
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

class TableModule {
}
TableModule.ɵmod = ɵɵdefineNgModule({ type: TableModule });
TableModule.ɵinj = ɵɵdefineInjector({ factory: function TableModule_Factory(t) { return new (t || TableModule)(); }, imports: [[
            PngIconModule,
            MatPaginatorModule,
            MatTableModule,
            MatSortModule,
            MatTooltipModule,
            CommonModule,
            MatIconModule,
            RouterModule,
            MatBadgeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TableModule, { declarations: [TableComponent,
        CustomerRankComponent,
        DateFormatComponent,
        EquipementStatusComponent,
        EquipementTypeComponent,
        GenderComponent,
        IsMatIconComponent,
        NameAvatarComponent,
        OriginComponent,
        PhoneDisplayComponent,
        PriorityComponent,
        YesNoComponent], imports: [PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule], exports: [TableComponent,
        CustomerRankComponent,
        DateFormatComponent,
        EquipementStatusComponent,
        EquipementTypeComponent,
        GenderComponent,
        IsMatIconComponent,
        NameAvatarComponent,
        OriginComponent,
        PhoneDisplayComponent,
        PriorityComponent,
        YesNoComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TableModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    TableComponent,
                    CustomerRankComponent,
                    DateFormatComponent,
                    EquipementStatusComponent,
                    EquipementTypeComponent,
                    GenderComponent,
                    IsMatIconComponent,
                    NameAvatarComponent,
                    OriginComponent,
                    PhoneDisplayComponent,
                    PriorityComponent,
                    YesNoComponent
                ],
                imports: [
                    PngIconModule,
                    MatPaginatorModule,
                    MatTableModule,
                    MatSortModule,
                    MatTooltipModule,
                    CommonModule,
                    MatIconModule,
                    RouterModule,
                    MatBadgeModule
                ],
                exports: [
                    TableComponent,
                    CustomerRankComponent,
                    DateFormatComponent,
                    EquipementStatusComponent,
                    EquipementTypeComponent,
                    GenderComponent,
                    IsMatIconComponent,
                    NameAvatarComponent,
                    OriginComponent,
                    PhoneDisplayComponent,
                    PriorityComponent,
                    YesNoComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of table
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CellsComponentList, CoreMatTable, CustomerRankComponent, DateFormatComponent, EquipementStatusComponent, EquipementTypeComponent, GenderComponent, IsMatIconComponent, NameAvatarComponent, OriginComponent, PhoneDisplayComponent, PngIconComponent, PngIconModule, PriorityComponent, TableComponent, TableModule, TableService, YesNoComponent };
//# sourceMappingURL=table.js.map
