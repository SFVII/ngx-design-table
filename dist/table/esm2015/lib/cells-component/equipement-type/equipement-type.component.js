import { __decorate, __metadata } from "tslib";
import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
let EquipementTypeComponent = class EquipementTypeComponent {
    constructor(changeDetectorRefs) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.css = {};
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = {
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
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        const server = this.name.toLocaleLowerCase().includes('srv');
        if (params[clean]) {
            this.icon = params[clean];
        }
        else if (server) {
            this.icon = "/assets/icons/equipment/serveur.png";
        }
        else {
            this.icon = "/assets/icons/equipment/default.png";
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
EquipementTypeComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
export { EquipementTypeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBlbWVudC10eXBlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC9lcXVpcGVtZW50LXR5cGUvZXF1aXBlbWVudC10eXBlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPcEcsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFPaEMsWUFBb0Isa0JBQXFDO1FBQXJDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFGbEQsUUFBRyxHQUFRLEVBQUUsQ0FBQTtRQUdoQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDMUQsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdEQsTUFBTSxNQUFNLEdBQVE7WUFDaEIsVUFBVSxFQUFFLHlDQUF5QztZQUNyRCxLQUFLLEVBQUUsb0NBQW9DO1lBQzNDLFFBQVEsRUFBRSxzQ0FBc0M7WUFDaEQsWUFBWSxFQUFFLDBDQUEwQztZQUN4RCxVQUFVLEVBQUUsMENBQTBDO1lBQ3RELGFBQWEsRUFBRSwwQ0FBMEM7WUFDekQsYUFBYSxFQUFFLDBDQUEwQztZQUN6RCxVQUFVLEVBQUUsd0NBQXdDO1lBQ3BELFNBQVMsRUFBRSxxQ0FBcUM7WUFDaEQsUUFBUSxFQUFFLHFDQUFxQztZQUMvQyxlQUFlLEVBQUUsaUNBQWlDO1lBQ2xELGdCQUFnQixFQUFFLGlDQUFpQztZQUNuRCxJQUFJLEVBQUUsaUNBQWlDO1lBQ3ZDLE1BQU0sRUFBRSxrQ0FBa0M7WUFDMUMsaUJBQWlCLEVBQUUsc0NBQXNDO1lBQ3pELHFCQUFxQixFQUFFLDBDQUEwQztZQUNqRSxZQUFZLEVBQUUscUNBQXFDO1NBQ3RELENBQUE7UUFFRCxNQUFNLEtBQUssR0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hGLE1BQU0sTUFBTSxHQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1QjthQUFNLElBQUksTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxxQ0FBcUMsQ0FBQztTQUNyRDthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxxQ0FBcUMsQ0FBQztTQUNyRDtJQUVMLENBQUM7SUFDRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Q0FFSixDQUFBOztZQTNDMkMsaUJBQWlCOztBQU5oRDtJQUFSLEtBQUssRUFBRTs7cURBQWM7QUFDYjtJQUFSLEtBQUssRUFBRTs7cURBQWM7QUFDYjtJQUFSLEtBQUssRUFBRTs7cURBQXVCO0FBSHRCLHVCQUF1QjtJQUxuQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUscUJBQXFCO1FBQy9CLCtHQUErQzs7S0FFbEQsQ0FBQztxQ0FRMEMsaUJBQWlCO0dBUGhELHVCQUF1QixDQWtEbkM7U0FsRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1lcXVpcGVtZW50LXR5cGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9lcXVpcGVtZW50LXR5cGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2VxdWlwZW1lbnQtdHlwZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVxdWlwZW1lbnRUeXBlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc2l6ZTogbnVtYmVyIHwgc3RyaW5nO1xuICAgIHB1YmxpYyBpY29uOiBzdHJpbmc7XG4gICAgcHVibGljIGNzczogYW55ID0ge31cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWZzOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICB0aGlzLmNzcy5tYXhXaWR0aCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xuICAgICAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCA0MCkpICsgJ3B4JztcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jc3MubWF4V2lkdGggPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCA0MCkpICsgJ3B4JztcbiAgICAgICAgdGhpcy5jc3MubWF4SGVpZ2h0ID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XG4gICAgICAgIGNvbnN0IHBhcmFtczogYW55ID0ge1xuICAgICAgICAgICAgXCJmaXJld2FsbFwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L2ZpcmV3YWxsbnd0LnBuZ1wiLFxuICAgICAgICAgICAgXCJuYXNcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9uYXNud3QucG5nXCIsXG4gICAgICAgICAgICBcInBjZml4ZVwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3BjZml4ZV8xLnBuZ1wiLFxuICAgICAgICAgICAgXCJwY3BvcnRhYmxlXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvcGNwb3J0YWJsZV8xLnBuZ1wiLFxuICAgICAgICAgICAgXCJwb3J0YWJsZVwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3BjcG9ydGFibGVfMS5wbmdcIixcbiAgICAgICAgICAgIFwiY2xpZW50bGVnZXJcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wY3BvcnRhYmxlXzEucG5nXCIsXG4gICAgICAgICAgICBcImNsaWVudGzDqWdlclwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3BjcG9ydGFibGVfMS5wbmdcIixcbiAgICAgICAgICAgIFwib25kdWxldXJcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9vbmR1bGF0ZXVyLnBuZ1wiLFxuICAgICAgICAgICAgXCJzZXJ2ZXVyXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvc2VydmV1ci5wbmdcIixcbiAgICAgICAgICAgIFwic2VydmVyXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvc2VydmV1ci5wbmdcIixcbiAgICAgICAgICAgIFwic2VydmVydmlydHVlbFwiOiBcIi9hc3NldHMvaWNvbnMvZXF1aXBtZW50L3Zwcy5wbmdcIixcbiAgICAgICAgICAgIFwic2VydmV1cnZpcnR1ZWxcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC92cHMucG5nXCIsXG4gICAgICAgICAgICBcInZtXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvdnBzLnBuZ1wiLFxuICAgICAgICAgICAgXCJ3aWZpXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvd2lmaS5wbmdcIixcbiAgICAgICAgICAgIFwid29ya3N0YXRpb25maXhlXCI6IFwiL2Fzc2V0cy9pY29ucy9lcXVpcG1lbnQvcGNmaXhlXzEucG5nXCIsXG4gICAgICAgICAgICBcIndvcmtzdGF0aW9ucG9ydGFibGVcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wY3BvcnRhYmxlXzEucG5nXCIsXG4gICAgICAgICAgICBcImltcHJpbWFudGVcIjogXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9wcmludGVyLnBuZ1wiLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xlYW46IHN0cmluZyA9ICh0aGlzLnR5cGUgfHwgXCJcIikudG9Mb2NhbGVMb3dlckNhc2UoKS5yZXBsYWNlKC9bXkEtWjAtOV0rL2lnLCBcIlwiKTtcbiAgICAgICAgY29uc3Qgc2VydmVyOiBib29sZWFuID0gdGhpcy5uYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3NydicpO1xuICAgICAgICBpZiAocGFyYW1zW2NsZWFuXSkge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gcGFyYW1zW2NsZWFuXVxuICAgICAgICB9IGVsc2UgaWYgKHNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9zZXJ2ZXVyLnBuZ1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gXCIvYXNzZXRzL2ljb25zL2VxdWlwbWVudC9kZWZhdWx0LnBuZ1wiO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxuXG59XG4iXX0=