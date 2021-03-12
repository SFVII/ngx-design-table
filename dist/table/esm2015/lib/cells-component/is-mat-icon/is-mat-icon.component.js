import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/icon";
function IsMatIconComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.display);
} }
function IsMatIconComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.display);
} }
export class IsMatIconComponent {
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
IsMatIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: IsMatIconComponent, selectors: [["app-is-mat-icon"]], inputs: { input: "input" }, decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function IsMatIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, IsMatIconComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        i0.ɵɵtemplate(1, IsMatIconComponent_ng_container_1_Template, 3, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.isIcon);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isIcon);
    } }, directives: [i1.NgIf, i2.MatIcon], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(IsMatIconComponent, [{
        type: Component,
        args: [{
                selector: 'app-is-mat-icon',
                templateUrl: './is-mat-icon.component.html',
                styleUrls: ['./is-mat-icon.component.scss']
            }]
    }], function () { return []; }, { input: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbWF0LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2lzLW1hdC1pY29uL2lzLW1hdC1pY29uLmNvbXBvbmVudC50cyIsImxpYi9jZWxscy1jb21wb25lbnQvaXMtbWF0LWljb24vaXMtbWF0LWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7Ozs7O0lDQXZELDZCQUNJO0lBQUEsNEJBQU87SUFBQSxZQUFXO0lBQUEsaUJBQU87SUFDN0IsMEJBQWU7OztJQURKLGVBQVc7SUFBWCxvQ0FBVzs7O0lBRXRCLDZCQUNJO0lBQUEsZ0NBQVU7SUFBQSxZQUFXO0lBQUEsaUJBQVc7SUFDcEMsMEJBQWU7OztJQURELGVBQVc7SUFBWCxvQ0FBVzs7QURHekIsTUFBTSxPQUFPLGtCQUFrQjtJQUszQjtRQUZPLFdBQU0sR0FBYSxLQUFLLENBQUM7SUFHaEMsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDN0I7SUFDTCxDQUFDOztvRkFqQlEsa0JBQWtCO3VEQUFsQixrQkFBa0I7UUNQL0IscUZBQ0k7UUFFSixxRkFDSTs7UUFKVSxrQ0FBZTtRQUdkLGVBQWM7UUFBZCxpQ0FBYzs7a0RESWhCLGtCQUFrQjtjQUw5QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDOUM7O2tCQUVJLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWlzLW1hdC1pY29uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaXMtbWF0LWljb24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2lzLW1hdC1pY29uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSXNNYXRJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBpbnB1dDogc3RyaW5nO1xuICAgIHB1YmxpYyBkaXNwbGF5OiBzdHJpbmc7XG4gICAgcHVibGljIGlzSWNvbiA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pbnB1dCAmJiB0aGlzLmlucHV0LmluZGV4T2YoKCdpY29uLicpKSA+IC0xKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZWhlaGVlaCcsIHRoaXMuaW5wdXQpXG4gICAgICAgICAgICB0aGlzLmlzSWNvbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0aGlzLmlucHV0LnNwbGl0KCcuJylbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzSWNvbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5pbnB1dDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc0ljb25cIj5cbiAgICA8c3BhbiA+e3tkaXNwbGF5fX08L3NwYW4+XG48L25nLWNvbnRhaW5lcj5cbjxuZy1jb250YWluZXIgICpuZ0lmPVwiaXNJY29uXCI+XG4gICAgPG1hdC1pY29uPnt7ZGlzcGxheX19PC9tYXQtaWNvbj5cbjwvbmctY29udGFpbmVyPiJdfQ==