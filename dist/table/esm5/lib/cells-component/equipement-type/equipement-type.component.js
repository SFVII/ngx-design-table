import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
var EquipementTypeComponent = /** @class */ (function () {
    function EquipementTypeComponent(changeDetectorRefs) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.css = {};
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
    }
    EquipementTypeComponent.prototype.ngOnInit = function () {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        var params = {
            "firewall": "/assets/icons/equipment/firewallnwt.png",
            "nas": "/assets/icons/equipment/nasnwt.png",
            "pcfixe": "/assets/icons/equipment/pcfixe_1.png",
            "pcportable": "/assets/icons/equipment/pcportable_1.png",
            "portable": "/assets/icons/equipment/pcportable_1.png",
            "clientleger": "/assets/icons/equipment/pcportable_1.png",
            "clientléger": "/assets/icons/equipment/pcportable_1.png",
            "onduleur": "/assets/icons/equipment/ondulateur.png",
            "serveur": "/assets/icons/equipment/serveur.png",
            "server": "/assets/icons/equipment/serveur.png",
            "servervirtuel": "/assets/icons/equipment/vps.png",
            "serveurvirtuel": "/assets/icons/equipment/vps.png",
            "vm": "/assets/icons/equipment/vps.png",
            "wifi": "/assets/icons/equipment/wifi.png",
            "workstationfixe": "/assets/icons/equipment/pcfixe_1.png",
            "workstationportable": "/assets/icons/equipment/pcportable_1.png",
            "imprimante": "/assets/icons/equipment/printer.png",
        };
        var clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        var server = this.name.toLocaleLowerCase().includes('srv');
        if (params[clean]) {
            this.icon = params[clean];
        }
        else if (server) {
            this.icon = "/assets/icons/equipment/serveur.png";
        }
        else {
            this.icon = "/assets/icons/equipment/default.png";
        }
    };
    EquipementTypeComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    EquipementTypeComponent.ɵfac = function EquipementTypeComponent_Factory(t) { return new (t || EquipementTypeComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    EquipementTypeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EquipementTypeComponent, selectors: [["app-equipement-type"]], inputs: { name: "name", type: "type", size: "size" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 6, consts: [[3, "matTooltip"], [3, "src"]], template: function EquipementTypeComponent_Template(rf, ctx) { if (rf & 1) {
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
    return EquipementTypeComponent;
}());
export { EquipementTypeComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EquipementTypeComponent, [{
        type: Component,
        args: [{
                selector: 'app-equipement-type',
                templateUrl: './equipement-type.component.html',
                styleUrls: ['./equipement-type.component.scss']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { name: [{
            type: Input
        }], type: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBlbWVudC10eXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC9lcXVpcGVtZW50LXR5cGUvZXF1aXBlbWVudC10eXBlLmNvbXBvbmVudC50cyIsImxpYi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC10eXBlL2VxdWlwZW1lbnQtdHlwZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW9CLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDOzs7QUFFcEc7SUFZSSxpQ0FBb0Isa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFGbEQsUUFBRyxHQUFRLEVBQUUsQ0FBQTtRQUdoQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDMUQsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdEQsSUFBTSxNQUFNLEdBQVE7WUFDaEIsVUFBVSxFQUFFLHlDQUF5QztZQUNyRCxLQUFLLEVBQUUsb0NBQW9DO1lBQzNDLFFBQVEsRUFBRSxzQ0FBc0M7WUFDaEQsWUFBWSxFQUFFLDBDQUEwQztZQUN4RCxVQUFVLEVBQUUsMENBQTBDO1lBQ3RELGFBQWEsRUFBRSwwQ0FBMEM7WUFDekQsYUFBYSxFQUFFLDBDQUEwQztZQUN6RCxVQUFVLEVBQUUsd0NBQXdDO1lBQ3BELFNBQVMsRUFBRSxxQ0FBcUM7WUFDaEQsUUFBUSxFQUFFLHFDQUFxQztZQUMvQyxlQUFlLEVBQUUsaUNBQWlDO1lBQ2xELGdCQUFnQixFQUFFLGlDQUFpQztZQUNuRCxJQUFJLEVBQUUsaUNBQWlDO1lBQ3ZDLE1BQU0sRUFBRSxrQ0FBa0M7WUFDMUMsaUJBQWlCLEVBQUUsc0NBQXNDO1lBQ3pELHFCQUFxQixFQUFFLDBDQUEwQztZQUNqRSxZQUFZLEVBQUUscUNBQXFDO1NBQ3RELENBQUE7UUFFRCxJQUFNLEtBQUssR0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLElBQU0sTUFBTSxHQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1QjthQUFNLElBQUksTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxxQ0FBcUMsQ0FBQztTQUNyRDthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxxQ0FBcUMsQ0FBQztTQUNyRDtJQUVMLENBQUM7SUFDRCw2Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7a0dBaERRLHVCQUF1QjtnRUFBdkIsdUJBQXVCO1lDUHBDLCtCQUNJO1lBQUEseUJBQ0o7WUFBQSxpQkFBTzs7WUFGRCxzQkFBYTtZQUFDLGdEQUFxQjtZQUNuQixlQUFhO1lBQWIsc0JBQWE7WUFBMUIsZ0RBQVk7O2tDRERyQjtDQXlEQyxBQXZERCxJQXVEQztTQWxEWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDbEQ7O2tCQUVJLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWVxdWlwZW1lbnQtdHlwZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2VxdWlwZW1lbnQtdHlwZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZXF1aXBlbWVudC10eXBlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRXF1aXBlbWVudFR5cGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBzaXplOiBudW1iZXIgfCBzdHJpbmc7XG4gICAgcHVibGljIGljb246IHN0cmluZztcbiAgICBwdWJsaWMgY3NzOiBhbnkgPSB7fVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZnM6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XG4gICAgICAgIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNzcy5tYXhXaWR0aCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xuICAgICAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCA0MCkpICsgJ3B4JztcbiAgICAgICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICAgICAgICBcImZpcmV3YWxsXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvZmlyZXdhbGxud3QucG5nXCIsXG4gICAgICAgICAgICBcIm5hc1wiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L25hc253dC5wbmdcIixcbiAgICAgICAgICAgIFwicGNmaXhlXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvcGNmaXhlXzEucG5nXCIsXG4gICAgICAgICAgICBcInBjcG9ydGFibGVcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wY3BvcnRhYmxlXzEucG5nXCIsXG4gICAgICAgICAgICBcInBvcnRhYmxlXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvcGNwb3J0YWJsZV8xLnBuZ1wiLFxuICAgICAgICAgICAgXCJjbGllbnRsZWdlclwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3BjcG9ydGFibGVfMS5wbmdcIixcbiAgICAgICAgICAgIFwiY2xpZW50bMOpZ2VyXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvcGNwb3J0YWJsZV8xLnBuZ1wiLFxuICAgICAgICAgICAgXCJvbmR1bGV1clwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L29uZHVsYXRldXIucG5nXCIsXG4gICAgICAgICAgICBcInNlcnZldXJcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9zZXJ2ZXVyLnBuZ1wiLFxuICAgICAgICAgICAgXCJzZXJ2ZXJcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9zZXJ2ZXVyLnBuZ1wiLFxuICAgICAgICAgICAgXCJzZXJ2ZXJ2aXJ0dWVsXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvdnBzLnBuZ1wiLFxuICAgICAgICAgICAgXCJzZXJ2ZXVydmlydHVlbFwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3Zwcy5wbmdcIixcbiAgICAgICAgICAgIFwidm1cIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC92cHMucG5nXCIsXG4gICAgICAgICAgICBcIndpZmlcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC93aWZpLnBuZ1wiLFxuICAgICAgICAgICAgXCJ3b3Jrc3RhdGlvbmZpeGVcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wY2ZpeGVfMS5wbmdcIixcbiAgICAgICAgICAgIFwid29ya3N0YXRpb25wb3J0YWJsZVwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3BjcG9ydGFibGVfMS5wbmdcIixcbiAgICAgICAgICAgIFwiaW1wcmltYW50ZVwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3ByaW50ZXIucG5nXCIsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbGVhbjogc3RyaW5nID0gKHRoaXMudHlwZSB8fCBcIlwiKS50b0xvY2FsZUxvd2VyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XSsvaWcsIFwiXCIpO1xuICAgICAgICBjb25zdCBzZXJ2ZXI6IGJvb2xlYW4gPSB0aGlzLm5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKS5pbmNsdWRlcygnc3J2Jyk7XG4gICAgICAgIGlmIChwYXJhbXNbY2xlYW5dKSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBwYXJhbXNbY2xlYW5dXG4gICAgICAgIH0gZWxzZSBpZiAoc2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3NlcnZldXIucG5nXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L2RlZmF1bHQucG5nXCI7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG5cbn1cbiIsIjxzcGFuIFtzdHlsZV09XCJjc3NcIiBtYXRUb29sdGlwPVwie3t0eXBlfX1cIj5cbiAgICA8aW1nIFtzcmNdPVwiaWNvblwiIFtzdHlsZV09XCJjc3NcIj5cbjwvc3Bhbj5cbiJdfQ==