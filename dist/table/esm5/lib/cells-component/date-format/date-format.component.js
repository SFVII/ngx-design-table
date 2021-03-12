import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
import * as i2 from "@angular/common";
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
    DateFormatComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateFormatComponent, selectors: [["date-format"]], inputs: { date: "date", timezone: "timezone" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 10, consts: [[3, "matTooltip", "innerHTML"]], template: function DateFormatComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "span", 0);
            i0.ɵɵpipe(1, "date");
            i0.ɵɵpipe(2, "date");
        } if (rf & 2) {
            i0.ɵɵpropertyInterpolate("matTooltip", i0.ɵɵpipeBind3(1, 2, ctx.date, "short", ctx.timezone));
            i0.ɵɵproperty("innerHTML", ctx.run(i0.ɵɵpipeBind3(2, 6, ctx.date, "short", ctx.timezone)), i0.ɵɵsanitizeHtml);
        } }, directives: [i1.MatTooltip], pipes: [i2.DatePipe], styles: ["span.time-badge[_ngcontent-%COMP%]{display:block;text-align:center!important;padding-right:25px}span.time-badge[_ngcontent-%COMP%]   .hour[_ngcontent-%COMP%]{display:block;font-weight:900;font-size:12px}span.time-badge[_ngcontent-%COMP%]   .minute[_ngcontent-%COMP%]{display:block;font-weight:300;font-size:10px}"] });
    return DateFormatComponent;
}());
export { DateFormatComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateFormatComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2RhdGUtZm9ybWF0L2RhdGUtZm9ybWF0LmNvbXBvbmVudC50cyIsImxpYi9jZWxscy1jb21wb25lbnQvZGF0ZS1mb3JtYXQvZGF0ZS1mb3JtYXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpGO0lBVUk7UUFIUyxhQUFRLEdBQVksSUFBSSxDQUFBO0lBSWpDLENBQUM7SUFFRCxzQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGlDQUFHLEdBQUgsVUFBSSxJQUFXO1FBQ1gsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsR0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLE9BQVEsMkVBQ3FCLENBQUMsQ0FBQyxDQUFDLENBQUMsNERBQ0YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQ0FDdkIsQ0FBQztTQUNoQjthQUFNO1lBQ0gsT0FBTyw2SkFHSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxPQUFzQjtJQUVsQyxDQUFDOzBGQTVCUSxtQkFBbUI7NERBQW5CLG1CQUFtQjtZQ1BoQywwQkFBcUg7Ozs7WUFBL0csNkZBQWtEO1lBQUMsNkdBQW9EOzs4QkRBN0c7Q0FxQ0MsQUFuQ0QsSUFtQ0M7U0E5QlksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM5Qzs7a0JBRUksS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RhdGUtZm9ybWF0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1mb3JtYXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2RhdGUtZm9ybWF0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1hdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBkYXRlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGltZXpvbmUgOiBzdHJpbmcgPSAnZnInXG4gICAgcHVibGljIGRpc3BsYXk6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIHJ1bihkYXRlOnN0cmluZykge1xuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgbGV0IHQ6IHN0cmluZ1tdID0gZGF0ZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgcmV0dXJuICBgPHNwYW4gY2xhc3M9XCJ0aW1lLWJhZGdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaG91clwiPiR7dFswXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWludXRlXCI+JHt0WzFdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCJ0aW1lLWJhZGdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaG91clwiPi08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWludXRlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG4gICAgfVxuXG59XG4iLCI8c3BhbiBtYXRUb29sdGlwPVwie3soZGF0ZXwgZGF0ZSA6ICdzaG9ydCcgOiB0aW1lem9uZSl9fVwiIFtpbm5lckhUTUxdPVwicnVuKChkYXRlfCBkYXRlIDogJ3Nob3J0JyA6IHRpbWV6b25lKSlcIj48L3NwYW4+XG4iXX0=