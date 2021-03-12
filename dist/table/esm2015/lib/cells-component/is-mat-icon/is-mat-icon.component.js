import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let IsMatIconComponent = class IsMatIconComponent {
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
export { IsMatIconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbWF0LWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2lzLW1hdC1pY29uL2lzLW1hdC1pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFPdkQsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFLM0I7UUFGTyxXQUFNLEdBQWEsS0FBSyxDQUFDO0lBR2hDLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQztZQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztDQUVKLENBQUE7QUFsQlk7SUFBUixLQUFLLEVBQUU7O2lEQUFlO0FBRGQsa0JBQWtCO0lBTDlCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IscUxBQTJDOztLQUU5QyxDQUFDOztHQUNXLGtCQUFrQixDQW1COUI7U0FuQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1pcy1tYXQtaWNvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2lzLW1hdC1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9pcy1tYXQtaWNvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIElzTWF0SWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQElucHV0KCkgaW5wdXQ6IHN0cmluZztcbiAgICBwdWJsaWMgZGlzcGxheTogc3RyaW5nO1xuICAgIHB1YmxpYyBpc0ljb24gOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5pbmRleE9mKCgnaWNvbi4nKSkgPiAtMSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGVoZWhlZWgnLCB0aGlzLmlucHV0KVxuICAgICAgICAgICAgdGhpcy5pc0ljb24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5pbnB1dC5zcGxpdCgnLicpWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0ljb24gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRoaXMuaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==