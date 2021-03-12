import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
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
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], IsMatIconComponent.prototype, "input", void 0);
    IsMatIconComponent = __decorate([
        Component({
            selector: 'app-is-mat-icon',
            template: "<ng-container *ngIf=\"!isIcon\">\n    <span >{{display}}</span>\n</ng-container>\n<ng-container  *ngIf=\"isIcon\">\n    <mat-icon>{{display}}</mat-icon>\n</ng-container>",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], IsMatIconComponent);
    return IsMatIconComponent;
}());
export { IsMatIconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbWF0LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2lzLW1hdC1pY29uL2lzLW1hdC1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFPdkQ7SUFLSTtRQUZPLFdBQU0sR0FBYSxLQUFLLENBQUM7SUFHaEMsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBaEJRO1FBQVIsS0FBSyxFQUFFOztxREFBZTtJQURkLGtCQUFrQjtRQUw5QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLHFMQUEyQzs7U0FFOUMsQ0FBQzs7T0FDVyxrQkFBa0IsQ0FtQjlCO0lBQUQseUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQW5CWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWlzLW1hdC1pY29uJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vaXMtbWF0LWljb24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2lzLW1hdC1pY29uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSXNNYXRJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBpbnB1dDogc3RyaW5nO1xuICAgIHB1YmxpYyBkaXNwbGF5OiBzdHJpbmc7XG4gICAgcHVibGljIGlzSWNvbiA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5pbnB1dCAmJiB0aGlzLmlucHV0LmluZGV4T2YoKCdpY29uLicpKSA+IC0xKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZWhlaGVlaCcsIHRoaXMuaW5wdXQpXG4gICAgICAgICAgICB0aGlzLmlzSWNvbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0aGlzLmlucHV0LnNwbGl0KCcuJylbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzSWNvbiA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5pbnB1dDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19