import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
import * as i2 from "@angular/common";
export class DateFormatComponent {
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
DateFormatComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateFormatComponent, selectors: [["date-format"]], inputs: { date: "date", timezone: "timezone" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 10, consts: [[3, "matTooltip", "innerHTML"]], template: function DateFormatComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "span", 0);
        i0.ɵɵpipe(1, "date");
        i0.ɵɵpipe(2, "date");
    } if (rf & 2) {
        i0.ɵɵpropertyInterpolate("matTooltip", i0.ɵɵpipeBind3(1, 2, ctx.date, "short", ctx.timezone));
        i0.ɵɵproperty("innerHTML", ctx.run(i0.ɵɵpipeBind3(2, 6, ctx.date, "short", ctx.timezone)), i0.ɵɵsanitizeHtml);
    } }, directives: [i1.MatTooltip], pipes: [i2.DatePipe], styles: ["span.time-badge[_ngcontent-%COMP%]{display:block;text-align:center!important;padding-right:25px}span.time-badge[_ngcontent-%COMP%]   .hour[_ngcontent-%COMP%]{display:block;font-weight:900;font-size:12px}span.time-badge[_ngcontent-%COMP%]   .minute[_ngcontent-%COMP%]{display:block;font-weight:300;font-size:10px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2RhdGUtZm9ybWF0L2RhdGUtZm9ybWF0LmNvbXBvbmVudC50cyIsImxpYi9jZWxscy1jb21wb25lbnQvZGF0ZS1mb3JtYXQvZGF0ZS1mb3JtYXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDOzs7O0FBT2pGLE1BQU0sT0FBTyxtQkFBbUI7SUFLNUI7UUFIUyxhQUFRLEdBQVksSUFBSSxDQUFBO0lBSWpDLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFXO1FBQ1gsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsR0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLE9BQVE7eUNBQ3FCLENBQUMsQ0FBQyxDQUFDLENBQUM7MkNBQ0YsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsQ0FBQztTQUNoQjthQUFNO1lBQ0gsT0FBTzs7O3dCQUdLLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO0lBRWxDLENBQUM7O3NGQTVCUSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtRQ1BoQywwQkFBcUg7Ozs7UUFBL0csNkZBQWtEO1FBQUMsNkdBQW9EOztrRERPaEcsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDOUM7O2tCQUVJLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkYXRlLWZvcm1hdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtZm9ybWF0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kYXRlLWZvcm1hdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgZGF0ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRpbWV6b25lIDogc3RyaW5nID0gJ2ZyJ1xuICAgIHB1YmxpYyBkaXNwbGF5OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBydW4oZGF0ZTpzdHJpbmcpIHtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIGxldCB0OiBzdHJpbmdbXSA9IGRhdGUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHJldHVybiAgYDxzcGFuIGNsYXNzPVwidGltZS1iYWRnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdXJcIj4ke3RbMF19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbnV0ZVwiPiR7dFsxXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwidGltZS1iYWRnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdXJcIj4tPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbnV0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuICAgIH1cblxufVxuIiwiPHNwYW4gbWF0VG9vbHRpcD1cInt7KGRhdGV8IGRhdGUgOiAnc2hvcnQnIDogdGltZXpvbmUpfX1cIiBbaW5uZXJIVE1MXT1cInJ1bigoZGF0ZXwgZGF0ZSA6ICdzaG9ydCcgOiB0aW1lem9uZSkpXCI+PC9zcGFuPlxuIl19