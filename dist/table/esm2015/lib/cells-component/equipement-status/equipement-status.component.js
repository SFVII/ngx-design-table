import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
export class EquipementStatusComponent {
    constructor(changeDetectorRefs) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.css = {};
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        const params = {
            "actif": "/assets/icons/status/actif.png",
            "oui": "/assets/icons/status/actif.png",
            "hs": "/assets/icons/status/HS.png",
            "inactif": "/assets/icons/status/inactif.png",
            "non": "/assets/icons/status/inactif.png",
            "spare": "/assets/icons/status/spare.png",
        };
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean];
        }
        this.changeDetectorRefs.detectChanges();
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L2VxdWlwZW1lbnQtc3RhdHVzL2VxdWlwZW1lbnQtc3RhdHVzLmNvbXBvbmVudC50cyIsImxpYi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC1zdGF0dXMvZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQzs7O0FBT3BHLE1BQU0sT0FBTyx5QkFBeUI7SUFNbEMsWUFBb0Isa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFGbEQsUUFBRyxHQUFRLEVBQUUsQ0FBQTtRQUdoQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDMUQsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdEQsTUFBTSxNQUFNLEdBQVE7WUFDaEIsT0FBTyxFQUFFLGdDQUFnQztZQUN6QyxLQUFLLEVBQUUsZ0NBQWdDO1lBQ3ZDLElBQUksRUFBRSw2QkFBNkI7WUFDbkMsU0FBUyxFQUFFLGtDQUFrQztZQUM3QyxLQUFLLEVBQUUsa0NBQWtDO1lBQ3pDLE9BQU8sRUFBRSxnQ0FBZ0M7U0FDNUMsQ0FBQTtRQUNELE1BQU0sS0FBSyxHQUFXLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEYsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDOztrR0EvQlEseUJBQXlCOzhEQUF6Qix5QkFBeUI7UUNQdEMsK0JBQ0k7UUFBQSx5QkFDSjtRQUFBLGlCQUFPOztRQUZELHNCQUFhO1FBQUMsZ0RBQXFCO1FBQ25CLGVBQWE7UUFBYixzQkFBYTtRQUExQixnREFBWTs7a0RETVIseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNwRDs7a0JBRUksS0FBSzs7a0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtZXF1aXBlbWVudC1zdGF0dXMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9lcXVpcGVtZW50LXN0YXR1cy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNpemU6IG51bWJlciB8IHN0cmluZztcbiAgICBwdWJsaWMgY3NzOiBhbnkgPSB7fVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZnM6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgMjIpKSArICdweCc7XG4gICAgICAgIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygodGhpcy5zaXplIHx8IDIyKSkgKyAncHgnO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNzcy5tYXhXaWR0aCA9IFN0cmluZygodGhpcy5zaXplIHx8IDIyKSkgKyAncHgnO1xuICAgICAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCAyMikpICsgJ3B4JztcbiAgICAgICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICAgICAgICBcImFjdGlmXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvYWN0aWYucG5nXCIsXG4gICAgICAgICAgICBcIm91aVwiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL2FjdGlmLnBuZ1wiLFxuICAgICAgICAgICAgXCJoc1wiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL0hTLnBuZ1wiLFxuICAgICAgICAgICAgXCJpbmFjdGlmXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvaW5hY3RpZi5wbmdcIixcbiAgICAgICAgICAgIFwibm9uXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvaW5hY3RpZi5wbmdcIixcbiAgICAgICAgICAgIFwic3BhcmVcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9zcGFyZS5wbmdcIixcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjbGVhbjogc3RyaW5nID0gKHRoaXMudHlwZSB8fCBcIlwiKS50b0xvY2FsZUxvd2VyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XSsvaWcsIFwiXCIpO1xuICAgICAgICBpZiAocGFyYW1zW2NsZWFuXSkge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gcGFyYW1zW2NsZWFuXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxuXG59XG4iLCI8c3BhbiBbc3R5bGVdPVwiY3NzXCIgbWF0VG9vbHRpcD1cInt7dHlwZX19XCI+XG4gICAgPGltZyBbc3JjXT1cImljb25cIiBbc3R5bGVdPVwiY3NzXCI+XG48L3NwYW4+Il19