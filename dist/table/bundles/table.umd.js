(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/tooltip'), require('@angular/common'), require('@angular/material/icon'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/collections'), require('@angular/animations'), require('@angular/material/table'), require('@angular/material/sort'), require('@angular/router'), require('@angular/material/badge'), require('@angular/material/paginator')) :
    typeof define === 'function' && define.amd ? define('table', ['exports', '@angular/core', '@angular/material/tooltip', '@angular/common', '@angular/material/icon', 'rxjs', 'rxjs/operators', '@angular/cdk/collections', '@angular/animations', '@angular/material/table', '@angular/material/sort', '@angular/router', '@angular/material/badge', '@angular/material/paginator'], factory) :
    (global = global || self, factory(global.table = {}, global.ng.core, global.ng.material.tooltip, global.ng.common, global.ng.material.icon, global.rxjs, global.rxjs.operators, global.ng.cdk.collections, global.ng.animations, global.ng.material.table, global.ng.material.sort, global.ng.router, global.ng.material.badge, global.ng.material.paginator));
}(this, (function (exports, core, tooltip, common, icon, rxjs, operators, collections, animations, table, sort, router, badge, paginator) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    function CustomerRankComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "mat-icon");
        core.ɵɵtext(1, "star_rate");
        core.ɵɵelementEnd();
    } }
    var CustomerRankComponent = /** @class */ (function () {
        function CustomerRankComponent(changeDetectorRefs) {
            this.changeDetectorRefs = changeDetectorRefs;
        }
        CustomerRankComponent.prototype.ngOnInit = function () {
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
        };
        CustomerRankComponent.prototype.ngOnChanges = function (changes) {
            this.ngOnInit();
        };
        CustomerRankComponent.ɵfac = function CustomerRankComponent_Factory(t) { return new (t || CustomerRankComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        CustomerRankComponent.ɵcmp = core.ɵɵdefineComponent({ type: CustomerRankComponent, selectors: [["app-customer-rank"]], inputs: { type: "type" }, features: [core.ɵɵNgOnChangesFeature], decls: 4, vars: 5, consts: [[3, "matTooltip"], [2, "color", "black"], [4, "ngIf"]], template: function CustomerRankComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "span", 0);
                core.ɵɵelementStart(1, "span", 1);
                core.ɵɵtext(2);
                core.ɵɵelementEnd();
                core.ɵɵtemplate(3, CustomerRankComponent_mat_icon_3_Template, 2, 0, "mat-icon", 2);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassMap(ctx.typeClass);
                core.ɵɵpropertyInterpolate1("matTooltip", "Contrat de type : ", ctx.type, "");
                core.ɵɵadvance(2);
                core.ɵɵtextInterpolate(ctx.type);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.type !== "CLASSIC");
            } }, directives: [tooltip.MatTooltip, common.NgIf, icon.MatIcon], styles: [".gold[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:gold!important}.silver[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:silver!important}.bronze[_ngcontent-%COMP%]{font-weight:700;font-size:12px;color:#cd7f32!important}.default[_ngcontent-%COMP%]{font-weight:700;font-size:12px;color:#000!important}"] });
        return CustomerRankComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(CustomerRankComponent, [{
            type: core.Component,
            args: [{
                    selector: 'app-customer-rank',
                    templateUrl: './customer-rank.component.html',
                    styleUrls: ['./customer-rank.component.scss']
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }]; }, { type: [{
                type: core.Input
            }] }); })();

    var DateFormatComponent = /** @class */ (function () {
        function DateFormatComponent() {
            this.timezone = 'fr';
        }
        DateFormatComponent.prototype.ngOnInit = function () {
        };
        DateFormatComponent.prototype.run = function (date) {
            if (date) {
                var t = date.split(' ');
                return "<span class=\"time-badge\">\n                    <span class=\"hour\">" + t[0] + "</span>\n                    <span class=\"minute\">" + t[1] + "</span>\n                </span>";
            }
            else {
                return "<span class=\"time-badge\">\n                    <span class=\"hour\">-</span>\n                    <span class=\"minute\"></span>\n                </span>";
            }
        };
        DateFormatComponent.prototype.ngOnChanges = function (changes) {
        };
        DateFormatComponent.ɵfac = function DateFormatComponent_Factory(t) { return new (t || DateFormatComponent)(); };
        DateFormatComponent.ɵcmp = core.ɵɵdefineComponent({ type: DateFormatComponent, selectors: [["date-format"]], inputs: { date: "date", timezone: "timezone" }, features: [core.ɵɵNgOnChangesFeature], decls: 3, vars: 10, consts: [[3, "matTooltip", "innerHTML"]], template: function DateFormatComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelement(0, "span", 0);
                core.ɵɵpipe(1, "date");
                core.ɵɵpipe(2, "date");
            } if (rf & 2) {
                core.ɵɵpropertyInterpolate("matTooltip", core.ɵɵpipeBind3(1, 2, ctx.date, "short", ctx.timezone));
                core.ɵɵproperty("innerHTML", ctx.run(core.ɵɵpipeBind3(2, 6, ctx.date, "short", ctx.timezone)), core.ɵɵsanitizeHtml);
            } }, directives: [tooltip.MatTooltip], pipes: [common.DatePipe], styles: ["span.time-badge[_ngcontent-%COMP%]{display:block;text-align:center!important;padding-right:25px}span.time-badge[_ngcontent-%COMP%]   .hour[_ngcontent-%COMP%]{display:block;font-weight:900;font-size:12px}span.time-badge[_ngcontent-%COMP%]   .minute[_ngcontent-%COMP%]{display:block;font-weight:300;font-size:10px}"] });
        return DateFormatComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DateFormatComponent, [{
            type: core.Component,
            args: [{
                    selector: 'date-format',
                    templateUrl: './date-format.component.html',
                    styleUrls: ['./date-format.component.scss']
                }]
        }], function () { return []; }, { date: [{
                type: core.Input
            }], timezone: [{
                type: core.Input
            }] }); })();

    var EquipementStatusComponent = /** @class */ (function () {
        function EquipementStatusComponent(changeDetectorRefs) {
            this.changeDetectorRefs = changeDetectorRefs;
            this.css = {};
            this.css.maxWidth = String((this.size || 22)) + 'px';
            this.css.maxHeight = String((this.size || 22)) + 'px';
        }
        EquipementStatusComponent.prototype.ngOnInit = function () {
            this.css.maxWidth = String((this.size || 22)) + 'px';
            this.css.maxHeight = String((this.size || 22)) + 'px';
            var params = {
                "actif": "/assets/icons/status/actif.png",
                "oui": "/assets/icons/status/actif.png",
                "hs": "/assets/icons/status/HS.png",
                "inactif": "/assets/icons/status/inactif.png",
                "non": "/assets/icons/status/inactif.png",
                "spare": "/assets/icons/status/spare.png",
            };
            var clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
            if (params[clean]) {
                this.icon = params[clean];
            }
            this.changeDetectorRefs.detectChanges();
        };
        EquipementStatusComponent.prototype.ngOnChanges = function (changes) {
            this.ngOnInit();
        };
        EquipementStatusComponent.ɵfac = function EquipementStatusComponent_Factory(t) { return new (t || EquipementStatusComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        EquipementStatusComponent.ɵcmp = core.ɵɵdefineComponent({ type: EquipementStatusComponent, selectors: [["app-equipement-status"]], inputs: { type: "type", size: "size" }, features: [core.ɵɵNgOnChangesFeature], decls: 2, vars: 6, consts: [[3, "matTooltip"], [3, "src"]], template: function EquipementStatusComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "span", 0);
                core.ɵɵelement(1, "img", 1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵstyleMap(ctx.css);
                core.ɵɵpropertyInterpolate("matTooltip", ctx.type);
                core.ɵɵadvance(1);
                core.ɵɵstyleMap(ctx.css);
                core.ɵɵproperty("src", ctx.icon, core.ɵɵsanitizeUrl);
            } }, directives: [tooltip.MatTooltip], styles: [""] });
        return EquipementStatusComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(EquipementStatusComponent, [{
            type: core.Component,
            args: [{
                    selector: 'app-equipement-status',
                    templateUrl: './equipement-status.component.html',
                    styleUrls: ['./equipement-status.component.scss']
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }]; }, { type: [{
                type: core.Input
            }], size: [{
                type: core.Input
            }] }); })();

    var EquipementTypeComponent = /** @class */ (function () {
        function EquipementTypeComponent(changeDetectorRefs) {
            this.changeDetectorRefs = changeDetectorRefs;
            this.css = {};
            this.css.maxWidth = String((this.size || 40)) + 'px';
            this.css.maxHeight = String((this.size || 40)) + 'px';
        }
        EquipementTypeComponent.prototype.ngOnInit = function () {
            this.css.maxWidth = String((this.size || 40)) + 'px';
            this.css.maxHeight = String((this.size || 40)) + 'px';
            var params = {
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
            var clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
            var server = this.name.toLocaleLowerCase().includes('srv');
            if (params[clean]) {
                this.icon = params[clean];
            }
            else if (server) {
                this.icon = "/assets/icons/equipment/serveur.png";
            }
            else {
                this.icon = "/assets/icons/equipment/default.png";
            }
        };
        EquipementTypeComponent.prototype.ngOnChanges = function (changes) {
            this.ngOnInit();
        };
        EquipementTypeComponent.ɵfac = function EquipementTypeComponent_Factory(t) { return new (t || EquipementTypeComponent)(core.ɵɵdirectiveInject(core.ChangeDetectorRef)); };
        EquipementTypeComponent.ɵcmp = core.ɵɵdefineComponent({ type: EquipementTypeComponent, selectors: [["app-equipement-type"]], inputs: { name: "name", type: "type", size: "size" }, features: [core.ɵɵNgOnChangesFeature], decls: 2, vars: 6, consts: [[3, "matTooltip"], [3, "src"]], template: function EquipementTypeComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "span", 0);
                core.ɵɵelement(1, "img", 1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵstyleMap(ctx.css);
                core.ɵɵpropertyInterpolate("matTooltip", ctx.type);
                core.ɵɵadvance(1);
                core.ɵɵstyleMap(ctx.css);
                core.ɵɵproperty("src", ctx.icon, core.ɵɵsanitizeUrl);
            } }, directives: [tooltip.MatTooltip], styles: [""] });
        return EquipementTypeComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(EquipementTypeComponent, [{
            type: core.Component,
            args: [{
                    selector: 'app-equipement-type',
                    templateUrl: './equipement-type.component.html',
                    styleUrls: ['./equipement-type.component.scss']
                }]
        }], function () { return [{ type: core.ChangeDetectorRef }]; }, { name: [{
                type: core.Input
            }], type: [{
                type: core.Input
            }], size: [{
                type: core.Input
            }] }); })();

    var GenderComponent = /** @class */ (function () {
        function GenderComponent() {
            this.css = {};
        }
        GenderComponent.prototype.ngOnInit = function () {
            this.css.maxWidth = String((this.size || 40)) + 'px';
            this.css.maxHeight = String((this.size || 40)) + 'px';
            var params = {
                "m": "/assets/icons/nowteam/salutations/man.png",
                "mme": "/assets/icons/nowteam/salutations/woman.png",
            };
            var clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
            if (params[clean]) {
                this.icon = params[clean];
            }
            else {
                this.css.maxWidth = String(((this.size || 40) - 10)) + 'px';
                this.css.maxHeight = String(((this.size || 40) - 10)) + 'px';
                this.icon = "/assets/icons/status/HS.png";
            }
        };
        GenderComponent.prototype.ngOnChanges = function (changes) {
            this.ngOnInit();
        };
        GenderComponent.ɵfac = function GenderComponent_Factory(t) { return new (t || GenderComponent)(); };
        GenderComponent.ɵcmp = core.ɵɵdefineComponent({ type: GenderComponent, selectors: [["app-gender"]], inputs: { type: "type", size: "size" }, features: [core.ɵɵNgOnChangesFeature], decls: 2, vars: 6, consts: [[3, "matTooltip"], [3, "src"]], template: function GenderComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "span", 0);
                core.ɵɵelement(1, "img", 1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵstyleMap(ctx.css);
                core.ɵɵpropertyInterpolate("matTooltip", ctx.type);
                core.ɵɵadvance(1);
                core.ɵɵstyleMap(ctx.css);
                core.ɵɵproperty("src", ctx.icon, core.ɵɵsanitizeUrl);
            } }, directives: [tooltip.MatTooltip], styles: [""] });
        return GenderComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(GenderComponent, [{
            type: core.Component,
            args: [{
                    selector: 'app-gender',
                    templateUrl: './gender.component.html',
                    styleUrls: ['./gender.component.scss']
                }]
        }], function () { return []; }, { type: [{
                type: core.Input
            }], size: [{
                type: core.Input
            }] }); })();

    function IsMatIconComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "span");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r79 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r79.display);
    } }
    function IsMatIconComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "mat-icon");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r80 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r80.display);
    } }
    var IsMatIconComponent = /** @class */ (function () {
        function IsMatIconComponent() {
            this.isIcon = false;
        }
        IsMatIconComponent.prototype.ngOnInit = function () {
            if (this.input && this.input.indexOf(('icon.')) > -1) {
                console.log('heheheeh', this.input);
                this.isIcon = true;
                this.display = this.input.split('.')[1];
            }
            else {
                this.isIcon = false;
                this.display = this.input;
            }
        };
        IsMatIconComponent.ɵfac = function IsMatIconComponent_Factory(t) { return new (t || IsMatIconComponent)(); };
        IsMatIconComponent.ɵcmp = core.ɵɵdefineComponent({ type: IsMatIconComponent, selectors: [["app-is-mat-icon"]], inputs: { input: "input" }, decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function IsMatIconComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, IsMatIconComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
                core.ɵɵtemplate(1, IsMatIconComponent_ng_container_1_Template, 3, 1, "ng-container", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", !ctx.isIcon);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.isIcon);
            } }, directives: [common.NgIf, icon.MatIcon], styles: [""] });
        return IsMatIconComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(IsMatIconComponent, [{
            type: core.Component,
            args: [{
                    selector: 'app-is-mat-icon',
                    templateUrl: './is-mat-icon.component.html',
                    styleUrls: ['./is-mat-icon.component.scss']
                }]
        }], function () { return []; }, { input: [{
                type: core.Input
            }] }); })();

    var _c0 = ["avatar"];
    var NameAvatarComponent = /** @class */ (function () {
        function NameAvatarComponent() {
            this.fontSize = '24px';
            this._padding = '4px';
            this._display = 'flex';
            this._borderRadius = '50px';
            this._size = 'cover';
            this.afterInit = false;
            this.defaultFontSize = 12;
            this.defaultDimension = 24;
        }
        NameAvatarComponent.prototype.ngOnInit = function () {
            if (this.src) {
                var deg = Math.random() * (10 - 360) + 10;
                this.icon.nativeElement.style.backgroundImage = "linear-gradient(" + deg + "deg, #9d107d, \n                                                             #8b3391, #7647a0, #5f56a8, #4862ab)";
                this.icon.nativeElement.style.borderRadius = this._borderRadius;
                this.icon.nativeElement.style.marginLeft = '16px';
                this.icon.nativeElement.style.display = this._display;
                this.icon.nativeElement.style.width = this.fontSize;
                this.icon.nativeElement.style.height = this.fontSize;
                this.icon.nativeElement.style.fontSize = (parseInt(this.fontSize, 0) / 2) + 'px';
                this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';
                this.icon.nativeElement.style.fontWeight = '900';
                this.icon.nativeElement.style.color = 'white';
                var tmp = this.src.split(' ');
                this.letter = (tmp[0][0] + (tmp[1] && tmp[1][0] ? tmp[1][0] : tmp[0][1])).toUpperCase();
            }
            else if (this.afterInit === false) {
                this.afterInit = true;
            }
        };
        NameAvatarComponent.prototype.ngAfterViewInit = function () {
            if (this.afterInit) {
                this.ngOnInit();
            }
        };
        NameAvatarComponent.prototype.getRatio = function () {
        };
        NameAvatarComponent.ɵfac = function NameAvatarComponent_Factory(t) { return new (t || NameAvatarComponent)(); };
        NameAvatarComponent.ɵcmp = core.ɵɵdefineComponent({ type: NameAvatarComponent, selectors: [["name-avatar"]], viewQuery: function NameAvatarComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.icon = _t.first);
            } }, inputs: { src: "src", fontSize: "fontSize" }, decls: 3, vars: 1, consts: [["avatar", ""]], template: function NameAvatarComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", null, 0);
                core.ɵɵtext(2);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(2);
                core.ɵɵtextInterpolate1(" ", ctx.letter, "\n");
            } }, styles: ["div[_ngcontent-%COMP%]{align-items:center;justify-content:center;padding:0!important}"] });
        return NameAvatarComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(NameAvatarComponent, [{
            type: core.Component,
            args: [{
                    selector: 'name-avatar',
                    templateUrl: './name-avatar.component.html',
                    styleUrls: ['./name-avatar.component.scss']
                }]
        }], function () { return []; }, { src: [{
                type: core.Input
            }], fontSize: [{
                type: core.Input
            }], icon: [{
                type: core.ViewChild,
                args: ['avatar', { static: true }]
            }] }); })();

    var _c0$1 = ["icon"];
    var PngIconComponent = /** @class */ (function () {
        function PngIconComponent() {
            this.fontSize = '24px';
            this._padding = '5px';
            this._display = 'inline-flex';
            this._size = 'cover';
        }
        PngIconComponent.prototype.ngOnInit = function () {
            if (this.src) {
                this.icon.nativeElement.style.backgroundImage = "url(" + this.src + ")";
                this.icon.nativeElement.style.backgroundSize = this._size;
                this.icon.nativeElement.style.display = this._display;
                this.icon.nativeElement.style.width = this.fontSize;
                this.icon.nativeElement.style.height = this.fontSize;
                this.icon.nativeElement.style.padding = this._padding;
                if (this.color) {
                    this.icon.nativeElement.style.color = this.color;
                }
            }
        };
        PngIconComponent.ɵfac = function PngIconComponent_Factory(t) { return new (t || PngIconComponent)(); };
        PngIconComponent.ɵcmp = core.ɵɵdefineComponent({ type: PngIconComponent, selectors: [["png-icon"]], viewQuery: function PngIconComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0$1, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.icon = _t.first);
            } }, inputs: { src: "src", fontSize: "fontSize", color: "color" }, decls: 2, vars: 0, consts: [["icon", ""]], template: function PngIconComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelement(0, "span", null, 0);
            } }, styles: [""] });
        return PngIconComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PngIconComponent, [{
            type: core.Component,
            args: [{
                    selector: 'png-icon',
                    templateUrl: './png-icon.component.html',
                    styleUrls: ['./png-icon.component.scss']
                }]
        }], function () { return []; }, { src: [{
                type: core.Input
            }], fontSize: [{
                type: core.Input
            }], color: [{
                type: core.Input
            }], icon: [{
                type: core.ViewChild,
                args: ['icon', { static: true }]
            }] }); })();

    var OriginComponent = /** @class */ (function () {
        function OriginComponent() {
        }
        OriginComponent.prototype.ngOnInit = function () {
            var _this = this;
            var list = [{
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
            var flter = list.filter(function (e) {
                return _this.icon.includes(e.label);
            });
            this.iconSrc = flter && flter.length && flter[0].data ? flter[0].data : '';
        };
        OriginComponent.prototype.ngOnChanges = function (changes) {
            this.ngOnInit();
        };
        OriginComponent.ɵfac = function OriginComponent_Factory(t) { return new (t || OriginComponent)(); };
        OriginComponent.ɵcmp = core.ɵɵdefineComponent({ type: OriginComponent, selectors: [["icon-origin"]], inputs: { icon: "icon" }, features: [core.ɵɵNgOnChangesFeature], decls: 1, vars: 2, consts: [[2, "margin", "auto", "text-align", "center", 3, "matTooltip", "src"]], template: function OriginComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelement(0, "png-icon", 0);
            } if (rf & 2) {
                core.ɵɵpropertyInterpolate("matTooltip", ctx.icon);
                core.ɵɵproperty("src", ctx.iconSrc);
            } }, directives: [PngIconComponent, tooltip.MatTooltip], styles: [""] });
        return OriginComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(OriginComponent, [{
            type: core.Component,
            args: [{
                    selector: 'icon-origin',
                    templateUrl: './origin.component.html',
                    styleUrls: ['./origin.component.scss']
                }]
        }], function () { return []; }, { icon: [{
                type: core.Input
            }] }); })();

    var PhoneDisplayComponent = /** @class */ (function () {
        function PhoneDisplayComponent() {
        }
        PhoneDisplayComponent.prototype.ngOnInit = function () {
            this.display = this.normalize(this.number);
        };
        PhoneDisplayComponent.prototype.ngOnChanges = function (changes) {
            this.ngOnInit();
        };
        PhoneDisplayComponent.prototype.normalize = function (str) {
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
                    var tmp = str.slice(0, 3);
                    var end = str.slice(3, str.length);
                    str = tmp + '0' + end;
                }
                return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+$1) $2.$3.$4.$5.$6");
            }
            return null;
        };
        PhoneDisplayComponent.ɵfac = function PhoneDisplayComponent_Factory(t) { return new (t || PhoneDisplayComponent)(); };
        PhoneDisplayComponent.ɵcmp = core.ɵɵdefineComponent({ type: PhoneDisplayComponent, selectors: [["app-phone-display"]], inputs: { number: "number" }, features: [core.ɵɵNgOnChangesFeature], decls: 2, vars: 1, template: function PhoneDisplayComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "strong");
                core.ɵɵtext(1);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵadvance(1);
                core.ɵɵtextInterpolate(ctx.display || "-");
            } }, styles: [""] });
        return PhoneDisplayComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PhoneDisplayComponent, [{
            type: core.Component,
            args: [{
                    selector: 'app-phone-display',
                    templateUrl: './phone-display.component.html',
                    styleUrls: ['./phone-display.component.scss']
                }]
        }], function () { return []; }, { number: [{
                type: core.Input
            }] }); })();

    var PngIconModule = /** @class */ (function () {
        function PngIconModule() {
        }
        PngIconModule.ɵmod = core.ɵɵdefineNgModule({ type: PngIconModule });
        PngIconModule.ɵinj = core.ɵɵdefineInjector({ factory: function PngIconModule_Factory(t) { return new (t || PngIconModule)(); }, imports: [[
                    common.CommonModule
                ]] });
        return PngIconModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(PngIconModule, { declarations: [PngIconComponent], imports: [common.CommonModule], exports: [PngIconComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PngIconModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [PngIconComponent],
                    imports: [
                        common.CommonModule
                    ],
                    exports: [
                        PngIconComponent
                    ]
                }]
        }], null, null); })();

    var PriorityComponent = /** @class */ (function () {
        function PriorityComponent() {
        }
        PriorityComponent.prototype.ngOnInit = function () {
            var _this = this;
            var list = [{
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
            var data = list.filter(function (e) {
                return _this.icon.includes(e.label);
            });
            if (data && data.length) {
                this.iconSrc = data[0].data;
            }
        };
        PriorityComponent.prototype.ngOnChanges = function (changes) {
            this.ngOnInit();
        };
        PriorityComponent.ɵfac = function PriorityComponent_Factory(t) { return new (t || PriorityComponent)(); };
        PriorityComponent.ɵcmp = core.ɵɵdefineComponent({ type: PriorityComponent, selectors: [["icon-priority"]], inputs: { icon: "icon" }, features: [core.ɵɵNgOnChangesFeature], decls: 1, vars: 2, consts: [[3, "matTooltip", "src"]], template: function PriorityComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelement(0, "png-icon", 0);
            } if (rf & 2) {
                core.ɵɵpropertyInterpolate("matTooltip", ctx.icon);
                core.ɵɵproperty("src", ctx.iconSrc);
            } }, directives: [PngIconComponent, tooltip.MatTooltip], styles: [""] });
        return PriorityComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(PriorityComponent, [{
            type: core.Component,
            args: [{
                    selector: 'icon-priority',
                    templateUrl: './priority.component.html',
                    styleUrls: ['./priority.component.scss']
                }]
        }], function () { return []; }, { icon: [{
                type: core.Input
            }] }); })();

    var YesNoComponent = /** @class */ (function () {
        function YesNoComponent() {
            this.displayNo = false;
            this.displayYes = true;
            this.css = {};
        }
        YesNoComponent.prototype.ngOnInit = function () {
            this.css.maxWidth = String((this.size || 40)) + 'px';
            this.css.maxHeight = String((this.size || 40)) + 'px';
            var params = {
                "true": "/assets/icons/status/actif.png",
                "false": "/assets/icons/status/incatif.png"
            };
            if (this.valid && this.displayYes) {
                this.icon = params["true"];
            }
            else if (this.displayNo) {
                this.icon = params["false"];
            }
        };
        YesNoComponent.prototype.ngOnChanges = function (changes) {
            this.ngOnInit();
        };
        YesNoComponent.ɵfac = function YesNoComponent_Factory(t) { return new (t || YesNoComponent)(); };
        YesNoComponent.ɵcmp = core.ɵɵdefineComponent({ type: YesNoComponent, selectors: [["app-yes-nox"]], inputs: { valid: "valid", displayNo: "displayNo", displayYes: "displayYes", size: "size" }, features: [core.ɵɵNgOnChangesFeature], decls: 2, vars: 5, consts: [[3, "src"]], template: function YesNoComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "span");
                core.ɵɵelement(1, "img", 0);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵstyleMap(ctx.css);
                core.ɵɵadvance(1);
                core.ɵɵstyleMap(ctx.css);
                core.ɵɵproperty("src", ctx.icon, core.ɵɵsanitizeUrl);
            } }, styles: [""] });
        return YesNoComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(YesNoComponent, [{
            type: core.Component,
            args: [{
                    selector: 'app-yes-nox',
                    templateUrl: './yes-no.component.html',
                    styleUrls: ['./yes-no.component.scss']
                }]
        }], function () { return []; }, { valid: [{
                type: core.Input
            }], displayNo: [{
                type: core.Input
            }], displayYes: [{
                type: core.Input
            }], size: [{
                type: core.Input
            }] }); })();

    var TableService = /** @class */ (function () {
        function TableService() {
        }
        TableService.ɵfac = function TableService_Factory(t) { return new (t || TableService)(); };
        TableService.ɵprov = core.ɵɵdefineInjectable({ token: TableService, factory: TableService.ɵfac, providedIn: 'root' });
        return TableService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TableService, [{
            type: core.Injectable,
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

    (function (CellsComponentList) {
        CellsComponentList["ButtonLink"] = "button-link";
        CellsComponentList["Priority"] = "priority";
        CellsComponentList["Origin"] = "origin";
        CellsComponentList["NameAvatar"] = "name-avatar";
        CellsComponentList["DateFormat"] = "date-format";
        CellsComponentList["CountRow"] = "count-row";
    })(exports.CellsComponentList || (exports.CellsComponentList = {}));

    var CoreMatTable = /** @class */ (function (_super) {
        __extends(CoreMatTable, _super);
        function CoreMatTable(data, sortRules, rangeRules, size, detailRaws) {
            if (size === void 0) { size = 20; }
            if (detailRaws === void 0) { detailRaws = true; }
            var _this = _super.call(this) || this;
            _this.number = 0;
            _this.pageNumber = new rxjs.Subject();
            _this.pageSort = new rxjs.Subject();
            _this.pageFilter = new rxjs.Subject();
            _this.pageFilterDate = new rxjs.Subject();
            _this.size = size;
            _this.data = __spread(data);
            _this.totalElements = data.length;
            _this.page$ = _this.pageFilterDate.pipe(operators.startWith(rangeRules), operators.switchMap(function (range) { return _this.pageFilter.pipe(operators.debounceTime(500)).pipe(operators.startWith(''), operators.switchMap(function (filter) { return _this.pageSort.pipe(operators.startWith(sortRules), operators.switchMap(function (sortAction) { return _this.pageNumber.pipe(operators.startWith(0), operators.switchMap(function (page) { return rxjs.from([{
                    content: _this.slice(_this.sortData(_this.filterData(_this.filterDateRange(_this.data, range), filter), sortAction), page, _this.size, detailRaws)
                }]); }), operators.share()); })); })); }));
            return _this;
        }
        CoreMatTable.prototype.filterDateRange = function (data, range) {
            if (!range.valueStart && !range.valueEnd) {
                return data;
            }
            else {
                return data.filter(function (e) {
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
        };
        CoreMatTable.prototype.ponderation = function (str, searchKey) {
            var e_1, _a;
            var stack = str.split(' ');
            var pond = 0;
            try {
                for (var stack_1 = __values(stack), stack_1_1 = stack_1.next(); !stack_1_1.done; stack_1_1 = stack_1.next()) {
                    var s = stack_1_1.value;
                    var search = s.replace(new RegExp(' ', 'g'), '');
                    if (search && search.includes(searchKey)) {
                        pond++;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (stack_1_1 && !stack_1_1.done && (_a = stack_1.return)) _a.call(stack_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return pond;
        };
        CoreMatTable.prototype.filterData = function (data, filter) {
            var e_2, _a, e_3, _b;
            var result = [];
            if (filter && filter.replace(/[^a-zA-Z ]/g, " ")) {
                try {
                    for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                        var e = data_1_1.value;
                        e.pond = 0;
                        var dataRaw = JSON.stringify(e).toLowerCase()
                            .replace(/[^a-zA-Z ]/g, " ");
                        var stack = filter.toLowerCase().replace(/[^a-zA-Z ]/g, " ")
                            .split(' ');
                        var combination = 0;
                        try {
                            for (var stack_2 = (e_3 = void 0, __values(stack)), stack_2_1 = stack_2.next(); !stack_2_1.done; stack_2_1 = stack_2.next()) {
                                var k = stack_2_1.value;
                                if (dataRaw.includes(k)) {
                                    var pond = this.ponderation(dataRaw, k);
                                    if (!e.pond) {
                                        e.pond = 0;
                                    }
                                    e.pond += pond;
                                    combination++;
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (stack_2_1 && !stack_2_1.done && (_b = stack_2.return)) _b.call(stack_2);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        if (e.pond && combination === stack.length) {
                            result.push(e);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return result.filter((function (e) { return e.pond; })).sort(function (a, b) { return a > b ? 1 : (a < b ? -1 : 0); });
            }
            else {
                return data;
            }
        };
        CoreMatTable.prototype.sortData = function (data, sortAction) {
            var _this = this;
            if (sortAction.direction !== '') {
                return data.sort(function (a, b) {
                    return _this.compare(a[sortAction.active], b[sortAction.active], sortAction.direction === 'asc');
                });
            }
            else {
                return data;
            }
        };
        CoreMatTable.prototype.compare = function (a, b, isAsc) {
            if (!a) {
                a = null;
            }
            if (!b) {
                b = null;
            }
            return (((Array.isArray(a) ? a.length : a) > ((Array.isArray(b) ? b.length : b)) ? -1 : 1) * (isAsc ? 1 : -1));
        };
        CoreMatTable.prototype.fetch = function (page) {
            this.pageNumber.next(page);
        };
        CoreMatTable.prototype.sortIt = function (sortidea) {
            this.pageSort.next(sortidea);
        };
        CoreMatTable.prototype.filter = function (myFilter) {
            this.pageFilter.next(myFilter.target.value);
        };
        CoreMatTable.prototype.filterDate = function (dateFilter) {
            this.pageFilterDate.next(dateFilter);
        };
        CoreMatTable.prototype.connect = function () {
            return this.page$.pipe(operators.pluck('content'));
        };
        CoreMatTable.prototype.disconnect = function () {
        };
        CoreMatTable.prototype.slice = function (data, start, end, detailRow) {
            if (start === void 0) { start = 0; }
            if (end === void 0) { end = 20; }
            if (detailRow === void 0) { detailRow = true; }
            var rows = [];
            this.totalElements = data.length;
            data = data.slice(start * end, (start * end) + end);
            if (detailRow) {
                data.forEach(function (element) { return rows.push(element); });
                return rows;
            }
            else {
                return data;
            }
        };
        return CoreMatTable;
    }(collections.DataSource));

    var _c0$2 = ["MatPaginatorCurrent"];
    var _c1 = ["table"];
    function TableComponent_a_6_Template(rf, ctx) { if (rf & 1) {
        var _r88 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "a", 9);
        core.ɵɵlistener("click", function TableComponent_a_6_Template_a_click_0_listener() { core.ɵɵrestoreView(_r88); var ctx_r87 = core.ɵɵnextContext(); var _r83 = core.ɵɵreference(5); return ctx_r87.reset() && (_r83.value = ""); });
        core.ɵɵelement(1, "img", 10);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        core.ɵɵproperty("matTooltip", "Annuler la recherche");
        core.ɵɵadvance(1);
        core.ɵɵproperty("src", "/assets/icons/search_off-24px.svg", core.ɵɵsanitizeUrl);
    } }
    var _c2 = function (a0, a1) { return [a0, a1]; };
    function TableComponent_table_7_ng_container_2_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "th", 20);
        core.ɵɵelement(1, "app-is-mat-icon", 21);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var column_r95 = core.ɵɵnextContext(2).$implicit;
        var ctx_r99 = core.ɵɵnextContext(2);
        core.ɵɵclassMap(ctx_r99.generateClass(core.ɵɵpureFunction2(3, _c2, column_r95.class, column_r95.align ? "text-align-" + column_r95.align : "text-align-left")));
        core.ɵɵadvance(1);
        core.ɵɵproperty("input", column_r95.value);
    } }
    function TableComponent_table_7_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, TableComponent_table_7_ng_container_2_ng_container_1_th_1_Template, 2, 6, "th", 19);
        core.ɵɵelementContainerEnd();
    } }
    function TableComponent_table_7_ng_container_2_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "th", 23);
        core.ɵɵelement(1, "app-is-mat-icon", 21);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var column_r95 = core.ɵɵnextContext(2).$implicit;
        var ctx_r101 = core.ɵɵnextContext(2);
        core.ɵɵclassMap(ctx_r101.generateClass(core.ɵɵpureFunction2(3, _c2, column_r95.class, column_r95.align ? "text-align-" + column_r95.align : "text-align-left")));
        core.ɵɵadvance(1);
        core.ɵɵproperty("input", column_r95.value);
    } }
    function TableComponent_table_7_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, TableComponent_table_7_ng_container_2_ng_container_2_th_1_Template, 2, 6, "th", 22);
        core.ɵɵelementContainerEnd();
    } }
    function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "app-is-mat-icon", 31);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var column_r95 = core.ɵɵnextContext(4).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("input", column_r95.display);
    } }
    function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var element_r103 = core.ɵɵnextContext(3).$implicit;
        var column_r95 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", element_r103[column_r95.key], " ");
    } }
    function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "a", 30);
        core.ɵɵtemplate(1, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_ng_container_1_Template, 2, 1, "ng-container", 16);
        core.ɵɵtemplate(2, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_ng_container_2_Template, 2, 1, "ng-container", 16);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r103 = core.ɵɵnextContext(2).$implicit;
        var column_r95 = core.ɵɵnextContext().$implicit;
        var ctx_r111 = core.ɵɵnextContext(2);
        core.ɵɵpropertyInterpolate("routerLink", column_r95.override ? ctx_r111.buildLink(column_r95.override, element_r103) : element_r103[column_r95.key]);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", column_r95.display);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !column_r95.display);
    } }
    function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "app-is-mat-icon", 31);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var column_r95 = core.ɵɵnextContext(4).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("input", column_r95.display);
    } }
    function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var element_r103 = core.ɵɵnextContext(3).$implicit;
        var column_r95 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", element_r103[column_r95.key], " ");
    } }
    function TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "a", 32);
        core.ɵɵtemplate(1, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_ng_container_1_Template, 2, 1, "ng-container", 16);
        core.ɵɵtemplate(2, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_ng_container_2_Template, 2, 1, "ng-container", 16);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r103 = core.ɵɵnextContext(2).$implicit;
        var column_r95 = core.ɵɵnextContext().$implicit;
        var ctx_r112 = core.ɵɵnextContext(2);
        core.ɵɵpropertyInterpolate("routerLink", column_r95.override ? ctx_r112.buildLink(column_r95.override, element_r103) : element_r103[column_r95.key]);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", column_r95.display);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !column_r95.display);
    } }
    function TableComponent_table_7_ng_container_2_td_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_1_Template, 3, 3, "a", 28);
        core.ɵɵtemplate(2, TableComponent_table_7_ng_container_2_td_3_ng_container_2_a_2_Template, 3, 3, "a", 29);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var element_r103 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", element_r103.new);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !element_r103.new);
    } }
    function TableComponent_table_7_ng_container_2_td_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "icon-priority", 33);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var element_r103 = core.ɵɵnextContext().$implicit;
        var column_r95 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("icon", element_r103[column_r95.key]);
    } }
    function TableComponent_table_7_ng_container_2_td_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "icon-origin", 33);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var element_r103 = core.ɵɵnextContext().$implicit;
        var column_r95 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("icon", element_r103[column_r95.key]);
    } }
    function TableComponent_table_7_ng_container_2_td_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "name-avatar", 34);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var element_r103 = core.ɵɵnextContext().$implicit;
        var column_r95 = core.ɵɵnextContext().$implicit;
        var ctx_r107 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵpropertyInterpolate("matTooltip", ctx_r107.Join(element_r103, column_r95.override));
        core.ɵɵproperty("src", element_r103[column_r95.key])("matTooltipClass", "my-tooltip");
    } }
    function TableComponent_table_7_ng_container_2_td_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "date-format", 35);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var element_r103 = core.ɵɵnextContext().$implicit;
        var column_r95 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("date", element_r103[column_r95.key]);
    } }
    function TableComponent_table_7_ng_container_2_td_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "span", 36);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var element_r103 = core.ɵɵnextContext().$implicit;
        var column_r95 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", element_r103[column_r95.key] && element_r103[column_r95.key].length ? element_r103[column_r95.key].length : "-", " ");
    } }
    function TableComponent_table_7_ng_container_2_td_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var element_r103 = core.ɵɵnextContext().$implicit;
        var column_r95 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", element_r103[column_r95.key], " ");
    } }
    function TableComponent_table_7_ng_container_2_td_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "td", 24);
        core.ɵɵelementContainerStart(1, 25);
        core.ɵɵtemplate(2, TableComponent_table_7_ng_container_2_td_3_ng_container_2_Template, 3, 2, "ng-container", 26);
        core.ɵɵtemplate(3, TableComponent_table_7_ng_container_2_td_3_ng_container_3_Template, 2, 1, "ng-container", 26);
        core.ɵɵtemplate(4, TableComponent_table_7_ng_container_2_td_3_ng_container_4_Template, 2, 1, "ng-container", 26);
        core.ɵɵtemplate(5, TableComponent_table_7_ng_container_2_td_3_ng_container_5_Template, 2, 3, "ng-container", 26);
        core.ɵɵtemplate(6, TableComponent_table_7_ng_container_2_td_3_ng_container_6_Template, 2, 1, "ng-container", 26);
        core.ɵɵtemplate(7, TableComponent_table_7_ng_container_2_td_3_ng_container_7_Template, 3, 1, "ng-container", 26);
        core.ɵɵtemplate(8, TableComponent_table_7_ng_container_2_td_3_ng_container_8_Template, 2, 1, "ng-container", 27);
        core.ɵɵelementContainerEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var column_r95 = core.ɵɵnextContext().$implicit;
        var ctx_r98 = core.ɵɵnextContext(2);
        core.ɵɵclassMap(ctx_r98.generateClass(core.ɵɵpureFunction2(9, _c2, column_r95.class, column_r95.align ? "text-align-" + column_r95.align : "")));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitch", column_r95.module);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "button-link");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "priority");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "origin");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "name-avatar");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "date-format");
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngSwitchCase", "count-row");
    } }
    function TableComponent_table_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0, 17);
        core.ɵɵtemplate(1, TableComponent_table_7_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 16);
        core.ɵɵtemplate(2, TableComponent_table_7_ng_container_2_ng_container_2_Template, 2, 0, "ng-container", 16);
        core.ɵɵtemplate(3, TableComponent_table_7_ng_container_2_td_3_Template, 9, 12, "td", 18);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var column_r95 = ctx.$implicit;
        core.ɵɵpropertyInterpolate("matColumnDef", column_r95.key);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", column_r95.sort);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !column_r95.sort);
    } }
    function TableComponent_table_7_ng_container_3_td_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "td", 39);
        core.ɵɵelementStart(1, "div", 40);
        core.ɵɵtext(2);
        core.ɵɵpipe(3, "json");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r142 = ctx.$implicit;
        var ctx_r141 = core.ɵɵnextContext(3);
        core.ɵɵproperty("@detailExpand", element_r142 == ctx_r141.expandedElement ? "expanded" : "collapsed");
        core.ɵɵattribute("colspan", ctx_r141.columnsToDisplay.length);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate1(" ", core.ɵɵpipeBind1(3, 3, element_r142), " ");
    } }
    function TableComponent_table_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0, 37);
        core.ɵɵtemplate(1, TableComponent_table_7_ng_container_3_td_1_Template, 4, 5, "td", 38);
        core.ɵɵelementContainerEnd();
    } }
    function TableComponent_table_7_tr_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "tr", 41);
    } }
    function TableComponent_table_7_ng_container_5_tr_1_Template(rf, ctx) { if (rf & 1) {
        var _r147 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "tr", 44);
        core.ɵɵlistener("click", function TableComponent_table_7_ng_container_5_tr_1_Template_tr_click_0_listener() { core.ɵɵrestoreView(_r147); var element_r145 = ctx.$implicit; var ctx_r146 = core.ɵɵnextContext(3); return ctx_r146.expandedElement === element_r145 ? ctx_r146.expandedElement = null : ctx_r146.expandedElement = element_r145; });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var element_r145 = ctx.$implicit;
        var ctx_r143 = core.ɵɵnextContext(3);
        core.ɵɵclassProp("expanded", ctx_r143.expandedElement == element_r145);
    } }
    function TableComponent_table_7_ng_container_5_tr_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "tr", 45);
    } }
    var _c3 = function () { return ["expandedDetailX"]; };
    function TableComponent_table_7_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, TableComponent_table_7_ng_container_5_tr_1_Template, 1, 2, "tr", 42);
        core.ɵɵtemplate(2, TableComponent_table_7_ng_container_5_tr_2_Template, 1, 0, "tr", 43);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r93 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("matRowDefColumns", ctx_r93.columnsToDisplay);
        core.ɵɵadvance(1);
        core.ɵɵproperty("matRowDefColumns", core.ɵɵpureFunction0(2, _c3));
    } }
    function TableComponent_table_7_ng_container_6_tr_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "tr", 47);
    } }
    function TableComponent_table_7_ng_container_6_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, TableComponent_table_7_ng_container_6_tr_1_Template, 1, 0, "tr", 46);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r94 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("matRowDefColumns", ctx_r94.columnsToDisplay);
    } }
    function TableComponent_table_7_Template(rf, ctx) { if (rf & 1) {
        var _r152 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "table", 11, 12);
        core.ɵɵlistener("matSortChange", function TableComponent_table_7_Template_table_matSortChange_0_listener($event) { core.ɵɵrestoreView(_r152); var ctx_r151 = core.ɵɵnextContext(); return ctx_r151.data.sortIt($event); });
        core.ɵɵtemplate(2, TableComponent_table_7_ng_container_2_Template, 4, 3, "ng-container", 13);
        core.ɵɵtemplate(3, TableComponent_table_7_ng_container_3_Template, 2, 0, "ng-container", 14);
        core.ɵɵtemplate(4, TableComponent_table_7_tr_4_Template, 1, 0, "tr", 15);
        core.ɵɵtemplate(5, TableComponent_table_7_ng_container_5_Template, 3, 3, "ng-container", 16);
        core.ɵɵtemplate(6, TableComponent_table_7_ng_container_6_Template, 2, 1, "ng-container", 16);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r85 = core.ɵɵnextContext();
        core.ɵɵproperty("dataSource", ctx_r85.data);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngForOf", ctx_r85.displayedColumns);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r85.displayDetail);
        core.ɵɵadvance(1);
        core.ɵɵproperty("matHeaderRowDef", ctx_r85.columnsToDisplay);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r85.displayDetail);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r85.displayDetail);
    } }
    function TableComponent_mat_paginator_8_Template(rf, ctx) { if (rf & 1) {
        var _r155 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "mat-paginator", 48, 49);
        core.ɵɵlistener("page", function TableComponent_mat_paginator_8_Template_mat_paginator_page_0_listener($event) { core.ɵɵrestoreView(_r155); var ctx_r154 = core.ɵɵnextContext(); return ctx_r154.data.fetch($event.pageIndex); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r86 = core.ɵɵnextContext();
        core.ɵɵproperty("length", ctx_r86.data.totalElements)("pageSize", ctx_r86.data.size)("pageIndex", ctx_r86.data.number)("hidePageSize", true);
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
        TableComponent.ɵcmp = core.ɵɵdefineComponent({ type: TableComponent, selectors: [["ngx-design-table"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
                core.ɵɵstaticViewQuery(_c0$2, true);
                core.ɵɵstaticViewQuery(_c1, true);
            } if (rf & 2) {
                var _t;
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.paginatorCurrent = _t.first);
                core.ɵɵqueryRefresh(_t = core.ɵɵloadQuery()) && (ctx.sortCurrent = _t.first);
            } }, inputs: { columnDefinitions: "columnDefinitions", displayDetail: "displayDetail", displayComponent: "displayComponent", data: "data" }, decls: 9, vars: 4, consts: [[1, "table-wrapper"], [1, "row", 2, "height", "84px", "background", "transparent!important"], [1, "elevation-z1"], [1, "col-lg-12", "search-container"], ["type", "text", "placeholder", "Recherche", 1, "search-box", 3, "maxLength", "input"], ["filterOngoing", ""], ["class", "close-search", 3, "matTooltip", "click", 4, "ngIf"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "class", "mat-elevation-z8", 3, "dataSource", "matSortChange", 4, "ngIf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "hidePageSize", "page", 4, "ngIf"], [1, "close-search", 3, "matTooltip", "click"], [3, "src"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["table", "matSort"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetailX", 4, "ngIf"], ["mat-header-row", "", 4, "matHeaderRowDef"], [4, "ngIf"], [3, "matColumnDef"], ["mat-cell", "", 3, "class", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "class", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], [3, "input"], ["mat-header-cell", "", 3, "class", 4, "matHeaderCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["matTooltip", "Ouvrir", "class", "mat-button nowboard-btn btn-xs", "matBadge", "*", "matBadgePosition", "before", "matBadgeColor", "accent", 3, "routerLink", 4, "ngIf"], ["matTooltip", "Ouvrir", "class", "mat-button nowboard-btn btn-xs", 3, "routerLink", 4, "ngIf"], ["matTooltip", "Ouvrir", "matBadge", "*", "matBadgePosition", "before", "matBadgeColor", "accent", 1, "mat-button", "nowboard-btn", "btn-xs", 3, "routerLink"], [2, "padding-top", "10px", 3, "input"], ["matTooltip", "Ouvrir", 1, "mat-button", "nowboard-btn", "btn-xs", 3, "routerLink"], [3, "icon"], [3, "matTooltip", "src", "matTooltipClass"], [2, "padding-right", "10px", 3, "date"], [2, "padding-left", "14px"], ["matColumnDef", "expandedDetailX"], ["mat-cell", "", "style", "border-bottom:transparent!important;height: 0", 4, "matCellDef"], ["mat-cell", "", 2, "border-bottom", "transparent!important", "height", "0"], [1, "element-detail"], ["mat-header-row", ""], ["mat-row", "", "class", "element-row", 3, "expanded", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "detail-row", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", 1, "element-row", 3, "click"], ["mat-row", "", 1, "detail-row"], ["mat-row", "", "class", "element-row", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", 1, "element-row"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageIndex", "hidePageSize", "page"], ["MatPaginatorCurrent", ""]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "div", 1);
                core.ɵɵelementStart(2, "div", 2);
                core.ɵɵelementStart(3, "div", 3);
                core.ɵɵelementStart(4, "input", 4, 5);
                core.ɵɵlistener("input", function TableComponent_Template_input_input_4_listener($event) { return ($event.target.value.length > 1 || $event.target.value.length === 0) && $event.target.value.length < 200 ? ctx.data.filter($event) : null; });
                core.ɵɵelementEnd();
                core.ɵɵtemplate(6, TableComponent_a_6_Template, 2, 2, "a", 6);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵtemplate(7, TableComponent_table_7_Template, 7, 6, "table", 7);
                core.ɵɵtemplate(8, TableComponent_mat_paginator_8_Template, 2, 4, "mat-paginator", 8);
                core.ɵɵelementEnd();
            } if (rf & 2) {
                var _r83 = core.ɵɵreference(5);
                core.ɵɵadvance(4);
                core.ɵɵproperty("maxLength", 100);
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", _r83.value);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.displayedColumns && ctx.columnsToDisplay);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", ctx.data);
            } }, directives: [common.NgIf, tooltip.MatTooltip, table.MatTable, sort.MatSort, common.NgForOf, table.MatHeaderRowDef, table.MatColumnDef, table.MatCellDef, table.MatHeaderCellDef, table.MatHeaderCell, sort.MatSortHeader, IsMatIconComponent, table.MatCell, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, router.RouterLinkWithHref, badge.MatBadge, PriorityComponent, OriginComponent, NameAvatarComponent, DateFormatComponent, table.MatHeaderRow, table.MatRowDef, table.MatRow, paginator.MatPaginator], pipes: [common.JsonPipe], styles: [".table-wrapper table{width:100%}.table-wrapper png-icon{padding-left:17px}.table-wrapper tr:nth-child(1){min-height:48px}.table-wrapper .detail-row{height:auto!important}.table-wrapper tr.element-row:not(.expanded-row):hover{background:#f5f5f5}.table-wrapper tr.element-row:not(.expanded-row):active{background:#efefef}.table-wrapper .element-row .mat-cell{padding-right:5px}.table-wrapper .text-align-right{text-align:right!important}.table-wrapper .text-align-left{text-align:left!important}.table-wrapper .text-align-center{text-align:center!important}.table-wrapper .element-detail{overflow:hidden;display:flex;padding-top:10px;padding-bottom:10px}@media screen and (min-width:1441px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:13px!important}}.table-wrapper .u-1{width:4%!important;max-width:4%!important;min-width:4%!important}.table-wrapper .u-2{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-3{width:7%!important;max-width:7%!important;min-width:7%!important}@media screen and (max-width:1440px){.table-wrapper .mat-cell{padding-top:15px;padding-bottom:10px;font-size:11px!important}.table-wrapper .u-1{width:5%!important;max-width:5%!important;min-width:5%!important}.table-wrapper .u-2{width:6%!important;max-width:6%!important;min-width:6%!important}.table-wrapper .u-3{width:10%!important;max-width:10%!important;min-width:10%!important}}.table-wrapper .u-4{max-width:11%!important;width:11%!important;min-width:11%!important}.table-wrapper .u-5{max-width:10%!important;width:10%!important;min-width:10%!important}.table-wrapper .u-6{max-width:15%!important;width:15%!important;min-width:15%!important}.table-wrapper .u-7{width:20%!important;min-width:20%!important}.table-wrapper .u-8{width:25%!important;min-width:25%!important}.table-wrapper .u-9{width:30%!important;min-width:30%!important}"], encapsulation: 2, data: { animation: [animations.trigger('detailExpand', [
                        animations.state('collapsed', animations.style({ height: '0px', minHeight: '0', display: 'none' })),
                        animations.state('expanded', animations.style({ height: '*' })),
                        animations.transition('expanded <=> collapsed', animations.animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ])] } });
        return TableComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TableComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ngx-design-table',
                    templateUrl: './table.component.html',
                    styleUrls: ['./table.component.scss'],
                    animations: [animations.trigger('detailExpand', [
                            animations.state('collapsed', animations.style({ height: '0px', minHeight: '0', display: 'none' })),
                            animations.state('expanded', animations.style({ height: '*' })),
                            animations.transition('expanded <=> collapsed', animations.animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                        ])],
                    encapsulation: core.ViewEncapsulation.None
                }]
        }], function () { return []; }, { paginatorCurrent: [{
                type: core.ViewChild,
                args: ['MatPaginatorCurrent', { static: true }]
            }], sortCurrent: [{
                type: core.ViewChild,
                args: ['table', { static: true }]
            }], columnDefinitions: [{
                type: core.Input
            }], displayDetail: [{
                type: core.Input
            }], displayComponent: [{
                type: core.Input
            }], data: [{
                type: core.Input
            }] }); })();

    var TableModule = /** @class */ (function () {
        function TableModule() {
        }
        TableModule.ɵmod = core.ɵɵdefineNgModule({ type: TableModule });
        TableModule.ɵinj = core.ɵɵdefineInjector({ factory: function TableModule_Factory(t) { return new (t || TableModule)(); }, imports: [[
                    PngIconModule,
                    paginator.MatPaginatorModule,
                    table.MatTableModule,
                    sort.MatSortModule,
                    tooltip.MatTooltipModule,
                    common.CommonModule,
                    icon.MatIconModule,
                    router.RouterModule,
                    badge.MatBadgeModule
                ]] });
        return TableModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(TableModule, { declarations: [TableComponent,
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
            paginator.MatPaginatorModule,
            table.MatTableModule,
            sort.MatSortModule,
            tooltip.MatTooltipModule,
            common.CommonModule,
            icon.MatIconModule,
            router.RouterModule,
            badge.MatBadgeModule], exports: [TableComponent,
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
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TableModule, [{
            type: core.NgModule,
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
                        paginator.MatPaginatorModule,
                        table.MatTableModule,
                        sort.MatSortModule,
                        tooltip.MatTooltipModule,
                        common.CommonModule,
                        icon.MatIconModule,
                        router.RouterModule,
                        badge.MatBadgeModule
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

    exports.CoreMatTable = CoreMatTable;
    exports.CustomerRankComponent = CustomerRankComponent;
    exports.DateFormatComponent = DateFormatComponent;
    exports.EquipementStatusComponent = EquipementStatusComponent;
    exports.EquipementTypeComponent = EquipementTypeComponent;
    exports.GenderComponent = GenderComponent;
    exports.IsMatIconComponent = IsMatIconComponent;
    exports.NameAvatarComponent = NameAvatarComponent;
    exports.OriginComponent = OriginComponent;
    exports.PhoneDisplayComponent = PhoneDisplayComponent;
    exports.PngIconComponent = PngIconComponent;
    exports.PngIconModule = PngIconModule;
    exports.PriorityComponent = PriorityComponent;
    exports.TableComponent = TableComponent;
    exports.TableModule = TableModule;
    exports.TableService = TableService;
    exports.YesNoComponent = YesNoComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=table.umd.js.map
