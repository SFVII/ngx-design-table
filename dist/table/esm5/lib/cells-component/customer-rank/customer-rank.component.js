import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
    CustomerRankComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
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
    return CustomerRankComponent;
}());
export { CustomerRankComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItcmFuay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tZXItcmFuay9jdXN0b21lci1yYW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPcEc7SUFLSSwrQkFBb0Isa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7SUFDekQsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQzFELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLE1BQU0sRUFBRTtZQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQTtZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7U0FDdEM7YUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxRQUFRLEVBQUU7WUFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUE7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1NBQ3RDO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssUUFBUSxFQUFFO1lBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtTQUN0QzthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7U0FDN0I7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Z0JBdkJ1QyxpQkFBaUI7O0lBSmhEO1FBQVIsS0FBSyxFQUFFOzt1REFBYztJQURiLHFCQUFxQjtRQUxqQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLHVNQUE2Qzs7U0FFaEQsQ0FBQzt5Q0FNMEMsaUJBQWlCO09BTGhELHFCQUFxQixDQTZCakM7SUFBRCw0QkFBQztDQUFBLEFBN0JELElBNkJDO1NBN0JZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tZXItcmFuaycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLXJhbmsuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2N1c3RvbWVyLXJhbmsuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lclJhbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyB0eXBlQ2xhc3M6IHN0cmluZztcbiAgICBwcml2YXRlIF90eXBlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmczogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9ICh0aGlzLnR5cGUgfHwgJycpLnJlcGxhY2UoL1teQS1aMC05XSsvaWcsIFwiXCIpXG4gICAgICAgIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdnb2xkJykge1xuICAgICAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnZ29sZCdcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAnc2lsdmVyJykge1xuICAgICAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnc2lsdmVyJ1xuICAgICAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdicm9uemUnKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGVDbGFzcyA9ICdicm9uemUnXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGUudG9VcHBlckNhc2UoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50eXBlID0gJ0NsYXNzaWMnLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB0aGlzLnR5cGVDbGFzcyA9ICdkZWZhdWx0J1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWZzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG59XG4iXX0=