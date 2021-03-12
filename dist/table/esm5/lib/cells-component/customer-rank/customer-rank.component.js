import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/icon";
function CustomerRankComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "star_rate");
    i0.ɵɵelementEnd();
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
    CustomerRankComponent.ɵfac = function CustomerRankComponent_Factory(t) { return new (t || CustomerRankComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    CustomerRankComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CustomerRankComponent, selectors: [["app-customer-rank"]], inputs: { type: "type" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 5, consts: [[3, "matTooltip"], [2, "color", "black"], [4, "ngIf"]], template: function CustomerRankComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵelementStart(1, "span", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, CustomerRankComponent_mat_icon_3_Template, 2, 0, "mat-icon", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx.typeClass);
            i0.ɵɵpropertyInterpolate1("matTooltip", "Contrat de type : ", ctx.type, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.type);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.type !== "CLASSIC");
        } }, directives: [i1.MatTooltip, i2.NgIf, i3.MatIcon], styles: [".gold[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:gold!important}.silver[_ngcontent-%COMP%]{font-size:12px;font-weight:700;color:silver!important}.bronze[_ngcontent-%COMP%]{font-weight:700;font-size:12px;color:#cd7f32!important}.default[_ngcontent-%COMP%]{font-weight:700;font-size:12px;color:#000!important}"] });
    return CustomerRankComponent;
}());
export { CustomerRankComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomerRankComponent, [{
        type: Component,
        args: [{
                selector: 'app-customer-rank',
                templateUrl: './customer-rank.component.html',
                styleUrls: ['./customer-rank.component.scss']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { type: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItcmFuay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tZXItcmFuay9jdXN0b21lci1yYW5rLmNvbXBvbmVudC50cyIsImxpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tZXItcmFuay9jdXN0b21lci1yYW5rLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0N6RCxnQ0FBcUM7SUFBQSx5QkFBUztJQUFBLGlCQUFXOztBRENwRztJQVVJLCtCQUFvQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUN6RCxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDMUQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssTUFBTSxFQUFFO1lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFBO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtTQUN0QzthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQTtZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7U0FDdEM7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxRQUFRLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUE7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1NBQ3RDO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTtTQUM3QjtRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMkNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDOzhGQTVCUSxxQkFBcUI7OERBQXJCLHFCQUFxQjtZQ1BsQywrQkFDRTtZQUFBLCtCQUEwQjtZQUFBLFlBQVE7WUFBQSxpQkFBTztZQUFBLGdGQUFxQztZQUNoRixpQkFBTzs7WUFGRCw0QkFBbUI7WUFBQywyRUFBdUM7WUFDckMsZUFBUTtZQUFSLDhCQUFRO1lBQWlCLGVBQTBCO1lBQTFCLDZDQUEwQjs7Z0NERC9FO0NBb0NDLEFBbENELElBa0NDO1NBN0JZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUNoRDs7a0JBRUksS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tZXItcmFuaycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLXJhbmsuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2N1c3RvbWVyLXJhbmsuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lclJhbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyB0eXBlQ2xhc3M6IHN0cmluZztcbiAgICBwcml2YXRlIF90eXBlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmczogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9ICh0aGlzLnR5cGUgfHwgJycpLnJlcGxhY2UoL1teQS1aMC05XSsvaWcsIFwiXCIpXG4gICAgICAgIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdnb2xkJykge1xuICAgICAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnZ29sZCdcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAnc2lsdmVyJykge1xuICAgICAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnc2lsdmVyJ1xuICAgICAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdicm9uemUnKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGVDbGFzcyA9ICdicm9uemUnXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGUudG9VcHBlckNhc2UoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50eXBlID0gJ0NsYXNzaWMnLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB0aGlzLnR5cGVDbGFzcyA9ICdkZWZhdWx0J1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWZzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG59XG4iLCI8c3BhbiBbY2xhc3NdPVwidHlwZUNsYXNzXCIgbWF0VG9vbHRpcD1cIkNvbnRyYXQgZGUgdHlwZSA6IHt7dHlwZX19XCI+XG4gIDxzcGFuIHN0eWxlPVwiY29sb3I6YmxhY2tcIj57e3R5cGV9fTwvc3Bhbj48bWF0LWljb24gKm5nSWY9XCJ0eXBlICE9PSAnQ0xBU1NJQydcIj5zdGFyX3JhdGU8L21hdC1pY29uPlxuPC9zcGFuPlxuIl19