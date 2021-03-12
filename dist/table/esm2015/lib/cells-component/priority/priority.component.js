import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../png-icon/png-icon.component";
import * as i2 from "@angular/material/tooltip";
export class PriorityComponent {
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
}
PriorityComponent.ɵfac = function PriorityComponent_Factory(t) { return new (t || PriorityComponent)(); };
PriorityComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PriorityComponent, selectors: [["icon-priority"]], inputs: { icon: "icon" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 2, consts: [[3, "matTooltip", "src"]], template: function PriorityComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "png-icon", 0);
    } if (rf & 2) {
        i0.ɵɵpropertyInterpolate("matTooltip", ctx.icon);
        i0.ɵɵproperty("src", ctx.iconSrc);
    } }, directives: [i1.PngIconComponent, i2.MatTooltip], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PriorityComponent, [{
        type: Component,
        args: [{
                selector: 'icon-priority',
                templateUrl: './priority.component.html',
                styleUrls: ['./priority.component.scss']
            }]
    }], function () { return []; }, { icon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpb3JpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L3ByaW9yaXR5L3ByaW9yaXR5LmNvbXBvbmVudC50cyIsImxpYi9jZWxscy1jb21wb25lbnQvcHJpb3JpdHkvcHJpb3JpdHkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDOzs7O0FBT2pGLE1BQU0sT0FBTyxpQkFBaUI7SUFJMUI7SUFDQSxDQUFDO0lBRUQsUUFBUTtRQUNKLE1BQU0sSUFBSSxHQUFHLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLDJCQUEyQjtnQkFDcEMsTUFBTSxFQUFFLHVDQUF1QzthQUNsRCxFQUFFO2dCQUNDLE9BQU8sRUFBRSxjQUFjO2dCQUN2QixNQUFNLEVBQUUsbUNBQW1DO2FBQzlDLEVBQUU7Z0JBQ0MsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLE1BQU0sRUFBRSxpQ0FBaUM7YUFDNUMsRUFBRTtnQkFDQyxPQUFPLEVBQUUsYUFBYTtnQkFDdEIsTUFBTSxFQUFFLGlDQUFpQzthQUM1QyxFQUFFO2dCQUNDLE9BQU8sRUFBRSxXQUFXO2dCQUNwQixNQUFNLEVBQUUsZ0NBQWdDO2FBQzNDLENBQUMsQ0FBQztRQUNILE1BQU0sSUFBSSxHQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUNyQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO1NBQzlCO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7a0ZBbENRLGlCQUFpQjtzREFBakIsaUJBQWlCO1FDUDlCLDhCQUFxRTs7UUFBM0QsZ0RBQTBCO1FBQUMsaUNBQW9COztrRERPNUMsaUJBQWlCO2NBTDdCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDM0M7O2tCQUVJLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpY29uLXByaW9yaXR5JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcHJpb3JpdHkuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3ByaW9yaXR5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJpb3JpdHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgaWNvbjogc3RyaW5nO1xuICAgIHB1YmxpYyBpY29uU3JjIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBbe1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIjUgLSBDcml0aXF1ZSAoUHJvZHVjdGlvbilcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL2NyaXRpcXVlcHJvZC5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiNCAtIENyaXRpcXVlXCIsXG4gICAgICAgICAgICBcImRhdGFcIjogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9jcml0aXF1ZS5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiMyAtIFVyZ2VudGVcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL3VyZ2VudC5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiMiAtIE5vcm1hbGVcIixcbiAgICAgICAgICAgICdkYXRhJzogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9ub3JtYWwucG5nXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIjEgLSBCYXNzZVwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vYmFzc2UucG5nXCJcbiAgICAgICAgfV07XG4gICAgICAgIGNvbnN0IGRhdGE6IGFueSA9IGxpc3QuZmlsdGVyKChlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmljb24uaW5jbHVkZXMoZS5sYWJlbCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pY29uU3JjID0gZGF0YVswXS5kYXRhXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG5cbn1cbiIsIjxwbmctaWNvbiBtYXRUb29sdGlwPVwie3t0aGlzLmljb259fVwiIFtzcmNdPVwidGhpcy5pY29uU3JjXCI+PC9wbmctaWNvbj5cbiJdfQ==