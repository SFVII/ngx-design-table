import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
let CustomerRankComponent = class CustomerRankComponent {
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
};
CustomerRankComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], CustomerRankComponent.prototype, "type", void 0);
CustomerRankComponent = __decorate([
    Component({
        selector: 'app-customer-rank',
        template: "<span [class]=\"typeClass\" matTooltip=\"Contrat de type : {{type}}\">\n  <span style=\"color:black\">{{type}}</span><mat-icon *ngIf=\"type !== 'CLASSIC'\">star_rate</mat-icon>\n</span>\n",
        styles: [".gold{font-size:12px;font-weight:700;color:gold!important}.silver{font-size:12px;font-weight:700;color:silver!important}.bronze{font-weight:700;font-size:12px;color:#cd7f32!important}.default{font-weight:700;font-size:12px;color:#000!important}"]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], CustomerRankComponent);
export { CustomerRankComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItcmFuay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tZXItcmFuay9jdXN0b21lci1yYW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPcEcsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFLOUIsWUFBb0Isa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7SUFDekQsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQzFELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLE1BQU0sRUFBRTtZQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQTtZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7U0FDdEM7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxRQUFRLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUE7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1NBQ3RDO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssUUFBUSxFQUFFO1lBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtTQUN0QzthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7U0FDN0I7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztDQUNKLENBQUE7O1lBeEIyQyxpQkFBaUI7O0FBSmhEO0lBQVIsS0FBSyxFQUFFOzttREFBYztBQURiLHFCQUFxQjtJQUxqQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLHVNQUE2Qzs7S0FFaEQsQ0FBQztxQ0FNMEMsaUJBQWlCO0dBTGhELHFCQUFxQixDQTZCakM7U0E3QlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1jdXN0b21lci1yYW5rJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXItcmFuay5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tZXItcmFuay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyUmFua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gICAgcHVibGljIHR5cGVDbGFzczogc3RyaW5nO1xuICAgIHByaXZhdGUgX3R5cGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWZzOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl90eXBlID0gKHRoaXMudHlwZSB8fCAnJykucmVwbGFjZSgvW15BLVowLTldKy9pZywgXCJcIilcbiAgICAgICAgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gJ2dvbGQnKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGVDbGFzcyA9ICdnb2xkJ1xuICAgICAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdzaWx2ZXInKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGVDbGFzcyA9ICdzaWx2ZXInXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGUudG9VcHBlckNhc2UoKVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gJ2Jyb256ZScpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZUNsYXNzID0gJ2Jyb256ZSdcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSAnQ2xhc3NpYycudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIHRoaXMudHlwZUNsYXNzID0gJ2RlZmF1bHQnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZnMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cbn1cbiJdfQ==