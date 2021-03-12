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
export class CustomerRankComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItcmFuay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tZXItcmFuay9jdXN0b21lci1yYW5rLmNvbXBvbmVudC50cyIsImxpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tZXItcmFuay9jdXN0b21lci1yYW5rLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0N6RCxnQ0FBcUM7SUFBQSx5QkFBUztJQUFBLGlCQUFXOztBRE1wRyxNQUFNLE9BQU8scUJBQXFCO0lBSzlCLFlBQW9CLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO0lBQ3pELENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUMxRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxNQUFNLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUE7WUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1NBQ3RDO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssUUFBUSxFQUFFO1lBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtTQUN0QzthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQTtZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7U0FDdEM7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7OzBGQTVCUSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ1BsQywrQkFDRTtRQUFBLCtCQUEwQjtRQUFBLFlBQVE7UUFBQSxpQkFBTztRQUFBLGdGQUFxQztRQUNoRixpQkFBTzs7UUFGRCw0QkFBbUI7UUFBQywyRUFBdUM7UUFDckMsZUFBUTtRQUFSLDhCQUFRO1FBQWlCLGVBQTBCO1FBQTFCLDZDQUEwQjs7a0RETWxFLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDaEQ7O2tCQUVJLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWN1c3RvbWVyLXJhbmsnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lci1yYW5rLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jdXN0b21lci1yYW5rLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJSYW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgICBwdWJsaWMgdHlwZUNsYXNzOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZnM6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSAodGhpcy50eXBlIHx8ICcnKS5yZXBsYWNlKC9bXkEtWjAtOV0rL2lnLCBcIlwiKVxuICAgICAgICBpZiAodGhpcy5fdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAnZ29sZCcpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZUNsYXNzID0gJ2dvbGQnXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGUudG9VcHBlckNhc2UoKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gJ3NpbHZlcicpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZUNsYXNzID0gJ3NpbHZlcidcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAnYnJvbnplJykge1xuICAgICAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnYnJvbnplJ1xuICAgICAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9ICdDbGFzc2ljJy50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnZGVmYXVsdCdcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxufVxuIiwiPHNwYW4gW2NsYXNzXT1cInR5cGVDbGFzc1wiIG1hdFRvb2x0aXA9XCJDb250cmF0IGRlIHR5cGUgOiB7e3R5cGV9fVwiPlxuICA8c3BhbiBzdHlsZT1cImNvbG9yOmJsYWNrXCI+e3t0eXBlfX08L3NwYW4+PG1hdC1pY29uICpuZ0lmPVwidHlwZSAhPT0gJ0NMQVNTSUMnXCI+c3Rhcl9yYXRlPC9tYXQtaWNvbj5cbjwvc3Bhbj5cbiJdfQ==