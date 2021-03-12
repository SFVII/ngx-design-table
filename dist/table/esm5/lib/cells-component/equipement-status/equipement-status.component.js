import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
var EquipementStatusComponent = /** @class */ (function () {
    function EquipementStatusComponent(changeDetectorRefs) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.css = {};
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
    }
    EquipementStatusComponent.prototype.ngOnInit = function () {
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        var params = {
            "actif": "/assets/icons/status/actif.png",
            "oui": "/assets/icons/status/actif.png",
            "hs": "/assets/icons/status/HS.png",
            "inactif": "/assets/icons/status/inactif.png",
            "non": "/assets/icons/status/inactif.png",
            "spare": "/assets/icons/status/spare.png",
        };
        var clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean];
        }
        this.changeDetectorRefs.detectChanges();
    };
    EquipementStatusComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    EquipementStatusComponent.ɵfac = function EquipementStatusComponent_Factory(t) { return new (t || EquipementStatusComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    EquipementStatusComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EquipementStatusComponent, selectors: [["app-equipement-status"]], inputs: { type: "type", size: "size" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 6, consts: [[3, "matTooltip"], [3, "src"]], template: function EquipementStatusComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵelement(1, "img", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleMap(ctx.css);
            i0.ɵɵpropertyInterpolate("matTooltip", ctx.type);
            i0.ɵɵadvance(1);
            i0.ɵɵstyleMap(ctx.css);
            i0.ɵɵproperty("src", ctx.icon, i0.ɵɵsanitizeUrl);
        } }, directives: [i1.MatTooltip], styles: [""] });
    return EquipementStatusComponent;
}());
export { EquipementStatusComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EquipementStatusComponent, [{
        type: Component,
        args: [{
                selector: 'app-equipement-status',
                templateUrl: './equipement-status.component.html',
                styleUrls: ['./equipement-status.component.scss']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { type: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2VxdWlwZW1lbnQtc3RhdHVzL2VxdWlwZW1lbnQtc3RhdHVzLmNvbXBvbmVudC50cyIsImxpYi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC1zdGF0dXMvZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXBHO0lBV0ksbUNBQW9CLGtCQUFxQztRQUFyQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBRmxELFFBQUcsR0FBUSxFQUFFLENBQUE7UUFHaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQzFELENBQUM7SUFFRCw0Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3RELElBQU0sTUFBTSxHQUFRO1lBQ2hCLE9BQU8sRUFBRSxnQ0FBZ0M7WUFDekMsS0FBSyxFQUFFLGdDQUFnQztZQUN2QyxJQUFJLEVBQUUsNkJBQTZCO1lBQ25DLFNBQVMsRUFBRSxrQ0FBa0M7WUFDN0MsS0FBSyxFQUFFLGtDQUFrQztZQUN6QyxPQUFPLEVBQUUsZ0NBQWdDO1NBQzVDLENBQUE7UUFDRCxJQUFNLEtBQUssR0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELCtDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztzR0EvQlEseUJBQXlCO2tFQUF6Qix5QkFBeUI7WUNQdEMsK0JBQ0k7WUFBQSx5QkFDSjtZQUFBLGlCQUFPOztZQUZELHNCQUFhO1lBQUMsZ0RBQXFCO1lBQ25CLGVBQWE7WUFBYixzQkFBYTtZQUExQixnREFBWTs7b0NERHJCO0NBd0NDLEFBdENELElBc0NDO1NBakNZLHlCQUF5QjtrREFBekIseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNwRDs7a0JBRUksS0FBSzs7a0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtZXF1aXBlbWVudC1zdGF0dXMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9lcXVpcGVtZW50LXN0YXR1cy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNpemU6IG51bWJlciB8IHN0cmluZztcbiAgICBwdWJsaWMgY3NzOiBhbnkgPSB7fVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZnM6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgMjIpKSArICdweCc7XG4gICAgICAgIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygodGhpcy5zaXplIHx8IDIyKSkgKyAncHgnO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNzcy5tYXhXaWR0aCA9IFN0cmluZygodGhpcy5zaXplIHx8IDIyKSkgKyAncHgnO1xuICAgICAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCAyMikpICsgJ3B4JztcbiAgICAgICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICAgICAgICBcImFjdGlmXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvYWN0aWYucG5nXCIsXG4gICAgICAgICAgICBcIm91aVwiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL2FjdGlmLnBuZ1wiLFxuICAgICAgICAgICAgXCJoc1wiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL0hTLnBuZ1wiLFxuICAgICAgICAgICAgXCJpbmFjdGlmXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvaW5hY3RpZi5wbmdcIixcbiAgICAgICAgICAgIFwibm9uXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvaW5hY3RpZi5wbmdcIixcbiAgICAgICAgICAgIFwic3BhcmVcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9zcGFyZS5wbmdcIixcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGVhbjogc3RyaW5nID0gKHRoaXMudHlwZSB8fCBcIlwiKS50b0xvY2FsZUxvd2VyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XSsvaWcsIFwiXCIpO1xuICAgICAgICBpZiAocGFyYW1zW2NsZWFuXSkge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gcGFyYW1zW2NsZWFuXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxuXG59XG4iLCI8c3BhbiBbc3R5bGVdPVwiY3NzXCIgbWF0VG9vbHRpcD1cInt7dHlwZX19XCI+XG4gICAgPGltZyBbc3JjXT1cImljb25cIiBbc3R5bGVdPVwiY3NzXCI+XG48L3NwYW4+Il19