import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let PriorityComponent = class PriorityComponent {
    constructor() {
    }
    ngOnInit() {
        const list = [{
                "label": "5 - Critique (Production)",
                "data": "assets/icons/nowteam/critiqueprod.png"
            }, {
                "label": "4 - Critique",
                "data": "assets/icons/nowteam/critique.png"
            }, {
                "label": "3 - Urgente",
                "data": "assets/icons/nowteam/urgent.png"
            }, {
                "label": "2 - Normale",
                'data': "assets/icons/nowteam/normal.png"
            }, {
                "label": "1 - Basse",
                "data": "assets/icons/nowteam/basse.png"
            }];
        const data = list.filter((e) => {
            return this.icon.includes(e.label);
        });
        if (data && data.length) {
            this.iconSrc = data[0].data;
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], PriorityComponent.prototype, "icon", void 0);
PriorityComponent = __decorate([
    Component({
        selector: 'icon-priority',
        template: "<png-icon matTooltip=\"{{this.icon}}\" [src]=\"this.iconSrc\"></png-icon>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], PriorityComponent);
export { PriorityComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpb3JpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L3ByaW9yaXR5L3ByaW9yaXR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBSTFCO0lBQ0EsQ0FBQztJQUVELFFBQVE7UUFDSixNQUFNLElBQUksR0FBRyxDQUFDO2dCQUNWLE9BQU8sRUFBRSwyQkFBMkI7Z0JBQ3BDLE1BQU0sRUFBRSx1Q0FBdUM7YUFDbEQsRUFBRTtnQkFDQyxPQUFPLEVBQUUsY0FBYztnQkFDdkIsTUFBTSxFQUFFLG1DQUFtQzthQUM5QyxFQUFFO2dCQUNDLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixNQUFNLEVBQUUsaUNBQWlDO2FBQzVDLEVBQUU7Z0JBQ0MsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLE1BQU0sRUFBRSxpQ0FBaUM7YUFDNUMsRUFBRTtnQkFDQyxPQUFPLEVBQUUsV0FBVztnQkFDcEIsTUFBTSxFQUFFLGdDQUFnQzthQUMzQyxDQUFDLENBQUM7UUFDSCxNQUFNLElBQUksR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBTSxFQUFFLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtTQUM5QjtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Q0FFSixDQUFBO0FBbkNZO0lBQVIsS0FBSyxFQUFFOzsrQ0FBYztBQURiLGlCQUFpQjtJQUw3QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6Qix1RkFBd0M7O0tBRTNDLENBQUM7O0dBQ1csaUJBQWlCLENBb0M3QjtTQXBDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpY29uLXByaW9yaXR5JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcHJpb3JpdHkuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3ByaW9yaXR5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJpb3JpdHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICAgIHB1YmxpYyBpY29uU3JjIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBbe1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIjUgLSBDcml0aXF1ZSAoUHJvZHVjdGlvbilcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL2NyaXRpcXVlcHJvZC5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiNCAtIENyaXRpcXVlXCIsXG4gICAgICAgICAgICBcImRhdGFcIjogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9jcml0aXF1ZS5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiMyAtIFVyZ2VudGVcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL3VyZ2VudC5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiMiAtIE5vcm1hbGVcIixcbiAgICAgICAgICAgICdkYXRhJzogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9ub3JtYWwucG5nXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIjEgLSBCYXNzZVwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vYmFzc2UucG5nXCJcbiAgICAgICAgfV07XG4gICAgICAgIGNvbnN0IGRhdGE6IGFueSA9IGxpc3QuZmlsdGVyKChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmljb24uaW5jbHVkZXMoZS5sYWJlbCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pY29uU3JjID0gZGF0YVswXS5kYXRhXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG5cbn1cbiJdfQ==