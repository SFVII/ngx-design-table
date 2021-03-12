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
    var ctx_r79 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r79.display);
} }
function IsMatIconComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r80 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r80.display);
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
    IsMatIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: IsMatIconComponent, selectors: [["app-is-mat-icon"]], inputs: { input: "input" }, decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function IsMatIconComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, IsMatIconComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
            i0.ɵɵtemplate(1, IsMatIconComponent_ng_container_1_Template, 3, 1, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.isIcon);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isIcon);
        } }, directives: [i1.NgIf, i2.MatIcon], styles: [""] });
    return IsMatIconComponent;
}());
export { IsMatIconComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbWF0LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2lzLW1hdC1pY29uL2lzLW1hdC1pY29uLmNvbXBvbmVudC50cyIsImxpYi9jZWxscy1jb21wb25lbnQvaXMtbWF0LWljb24vaXMtbWF0LWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7Ozs7O0lDQXZELDZCQUNJO0lBQUEsNEJBQU87SUFBQSxZQUFXO0lBQUEsaUJBQU87SUFDN0IsMEJBQWU7OztJQURKLGVBQVc7SUFBWCxxQ0FBVzs7O0lBRXRCLDZCQUNJO0lBQUEsZ0NBQVU7SUFBQSxZQUFXO0lBQUEsaUJBQVc7SUFDcEMsMEJBQWU7OztJQURELGVBQVc7SUFBWCxxQ0FBVzs7QURGekI7SUFVSTtRQUZPLFdBQU0sR0FBYSxLQUFLLENBQUM7SUFHaEMsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDN0I7SUFDTCxDQUFDO3dGQWpCUSxrQkFBa0I7MkRBQWxCLGtCQUFrQjtZQ1AvQixxRkFDSTtZQUVKLHFGQUNJOztZQUpVLGtDQUFlO1lBR2QsZUFBYztZQUFkLGlDQUFjOzs2QkRIN0I7Q0EwQkMsQUF4QkQsSUF3QkM7U0FuQlksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FMOUIsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzlDOztrQkFFSSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1pcy1tYXQtaWNvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2lzLW1hdC1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9pcy1tYXQtaWNvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIElzTWF0SWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgaW5wdXQ6IHN0cmluZztcbiAgICBwdWJsaWMgZGlzcGxheTogc3RyaW5nO1xuICAgIHB1YmxpYyBpc0ljb24gOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5pbmRleE9mKCgnaWNvbi4nKSkgPiAtMSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGVoZWhlZWgnLCB0aGlzLmlucHV0KVxuICAgICAgICAgICAgdGhpcy5pc0ljb24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5pbnB1dC5zcGxpdCgnLicpWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0ljb24gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRoaXMuaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNJY29uXCI+XG4gICAgPHNwYW4gPnt7ZGlzcGxheX19PC9zcGFuPlxuPC9uZy1jb250YWluZXI+XG48bmctY29udGFpbmVyICAqbmdJZj1cImlzSWNvblwiPlxuICAgIDxtYXQtaWNvbj57e2Rpc3BsYXl9fTwvbWF0LWljb24+XG48L25nLWNvbnRhaW5lcj4iXX0=