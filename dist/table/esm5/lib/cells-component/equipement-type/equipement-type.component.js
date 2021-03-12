import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
    EquipementTypeComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], EquipementTypeComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], EquipementTypeComponent.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], EquipementTypeComponent.prototype, "size", void 0);
    EquipementTypeComponent = __decorate([
        Component({
            selector: 'app-equipement-type',
            template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef])
    ], EquipementTypeComponent);
    return EquipementTypeComponent;
}());
export { EquipementTypeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBlbWVudC10eXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC9lcXVpcGVtZW50LXR5cGUvZXF1aXBlbWVudC10eXBlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPcEc7SUFPSSxpQ0FBb0Isa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFGbEQsUUFBRyxHQUFRLEVBQUUsQ0FBQTtRQUdoQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDMUQsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdEQsSUFBTSxNQUFNLEdBQVE7WUFDaEIsVUFBVSxFQUFFLHlDQUF5QztZQUNyRCxLQUFLLEVBQUUsb0NBQW9DO1lBQzNDLFFBQVEsRUFBRSxzQ0FBc0M7WUFDaEQsWUFBWSxFQUFFLDBDQUEwQztZQUN4RCxVQUFVLEVBQUUsMENBQTBDO1lBQ3RELGFBQWEsRUFBRSwwQ0FBMEM7WUFDekQsYUFBYSxFQUFFLDBDQUEwQztZQUN6RCxVQUFVLEVBQUUsd0NBQXdDO1lBQ3BELFNBQVMsRUFBRSxxQ0FBcUM7WUFDaEQsUUFBUSxFQUFFLHFDQUFxQztZQUMvQyxlQUFlLEVBQUUsaUNBQWlDO1lBQ2xELGdCQUFnQixFQUFFLGlDQUFpQztZQUNuRCxJQUFJLEVBQUUsaUNBQWlDO1lBQ3ZDLE1BQU0sRUFBRSxrQ0FBa0M7WUFDMUMsaUJBQWlCLEVBQUUsc0NBQXNDO1lBQ3pELHFCQUFxQixFQUFFLDBDQUEwQztZQUNqRSxZQUFZLEVBQUUscUNBQXFDO1NBQ3RELENBQUE7UUFFRCxJQUFNLEtBQUssR0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLElBQU0sTUFBTSxHQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1QjthQUFNLElBQUksTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxxQ0FBcUMsQ0FBQztTQUNyRDthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxxQ0FBcUMsQ0FBQztTQUNyRDtJQUVMLENBQUM7SUFDRCw2Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7O2dCQXpDdUMsaUJBQWlCOztJQU5oRDtRQUFSLEtBQUssRUFBRTs7eURBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTs7eURBQWM7SUFDYjtRQUFSLEtBQUssRUFBRTs7eURBQXVCO0lBSHRCLHVCQUF1QjtRQUxuQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLCtHQUErQzs7U0FFbEQsQ0FBQzt5Q0FRMEMsaUJBQWlCO09BUGhELHVCQUF1QixDQWtEbkM7SUFBRCw4QkFBQztDQUFBLEFBbERELElBa0RDO1NBbERZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtZXF1aXBlbWVudC10eXBlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXF1aXBlbWVudC10eXBlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9lcXVpcGVtZW50LXR5cGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFcXVpcGVtZW50VHlwZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNpemU6IG51bWJlciB8IHN0cmluZztcbiAgICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuICAgIHB1YmxpYyBjc3M6IGFueSA9IHt9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmczogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICAgICAgdGhpcy5jc3MubWF4V2lkdGggPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCA0MCkpICsgJ3B4JztcbiAgICAgICAgdGhpcy5jc3MubWF4SGVpZ2h0ID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XG4gICAgICAgIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xuICAgICAgICBjb25zdCBwYXJhbXM6IGFueSA9IHtcbiAgICAgICAgICAgIFwiZmlyZXdhbGxcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9maXJld2FsbG53dC5wbmdcIixcbiAgICAgICAgICAgIFwibmFzXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvbmFzbnd0LnBuZ1wiLFxuICAgICAgICAgICAgXCJwY2ZpeGVcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wY2ZpeGVfMS5wbmdcIixcbiAgICAgICAgICAgIFwicGNwb3J0YWJsZVwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3BjcG9ydGFibGVfMS5wbmdcIixcbiAgICAgICAgICAgIFwicG9ydGFibGVcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wY3BvcnRhYmxlXzEucG5nXCIsXG4gICAgICAgICAgICBcImNsaWVudGxlZ2VyXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvcGNwb3J0YWJsZV8xLnBuZ1wiLFxuICAgICAgICAgICAgXCJjbGllbnRsw6lnZXJcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wY3BvcnRhYmxlXzEucG5nXCIsXG4gICAgICAgICAgICBcIm9uZHVsZXVyXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvb25kdWxhdGV1ci5wbmdcIixcbiAgICAgICAgICAgIFwic2VydmV1clwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3NlcnZldXIucG5nXCIsXG4gICAgICAgICAgICBcInNlcnZlclwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3NlcnZldXIucG5nXCIsXG4gICAgICAgICAgICBcInNlcnZlcnZpcnR1ZWxcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC92cHMucG5nXCIsXG4gICAgICAgICAgICBcInNlcnZldXJ2aXJ0dWVsXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvdnBzLnBuZ1wiLFxuICAgICAgICAgICAgXCJ2bVwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3Zwcy5wbmdcIixcbiAgICAgICAgICAgIFwid2lmaVwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3dpZmkucG5nXCIsXG4gICAgICAgICAgICBcIndvcmtzdGF0aW9uZml4ZVwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3BjZml4ZV8xLnBuZ1wiLFxuICAgICAgICAgICAgXCJ3b3Jrc3RhdGlvbnBvcnRhYmxlXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvcGNwb3J0YWJsZV8xLnBuZ1wiLFxuICAgICAgICAgICAgXCJpbXByaW1hbnRlXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvcHJpbnRlci5wbmdcIixcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsZWFuOiBzdHJpbmcgPSAodGhpcy50eXBlIHx8IFwiXCIpLnRvTG9jYWxlTG93ZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTldKy9pZywgXCJcIik7XG4gICAgICAgIGNvbnN0IHNlcnZlcjogYm9vbGVhbiA9IHRoaXMubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpLmluY2x1ZGVzKCdzcnYnKTtcbiAgICAgICAgaWYgKHBhcmFtc1tjbGVhbl0pIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IHBhcmFtc1tjbGVhbl1cbiAgICAgICAgfSBlbHNlIGlmIChzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvc2VydmV1ci5wbmdcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvZGVmYXVsdC5wbmdcIjtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cblxufVxuIl19