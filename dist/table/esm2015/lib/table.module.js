import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { CustomerRankComponent } from "./cells-component/customer-rank/customer-rank.component";
import { DateFormatComponent } from "./cells-component/date-format/date-format.component";
import { EquipementStatusComponent } from "./cells-component/equipement-status/equipement-status.component";
import { EquipementTypeComponent } from "./cells-component/equipement-type/equipement-type.component";
import { GenderComponent } from "./cells-component/gender/gender.component";
import { IsMatIconComponent } from "./cells-component/is-mat-icon/is-mat-icon.component";
import { NameAvatarComponent } from "./cells-component/name-avatar/name-avatar.component";
import { OriginComponent } from "./cells-component/origin/origin.component";
import { PhoneDisplayComponent } from "./cells-component/phone-display/phone-display.component";
import { PngIconModule } from "./cells-component/png-icon/png-icon.module";
import { PriorityComponent } from "./cells-component/priority/priority.component";
import { YesNoComponent } from "./cells-component/yes-no/yes-no.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatTooltipModule } from "@angular/material/tooltip";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { MatBadgeModule } from "@angular/material/badge";
import * as i0 from "@angular/core";
export class TableModule {
}
TableModule.ɵmod = i0.ɵɵdefineNgModule({ type: TableModule });
TableModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TableModule_Factory(t) { return new (t || TableModule)(); }, imports: [[
            PngIconModule,
            MatPaginatorModule,
            MatTableModule,
            MatSortModule,
            MatTooltipModule,
            CommonModule,
            MatIconModule,
            RouterModule,
            MatBadgeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TableModule, { declarations: [TableComponent,
        CustomerRankComponent,
        DateFormatComponent,
        EquipementStatusComponent,
        EquipementTypeComponent,
        GenderComponent,
        IsMatIconComponent,
        NameAvatarComponent,
        OriginComponent,
        PhoneDisplayComponent,
        PriorityComponent,
        YesNoComponent], imports: [PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule], exports: [TableComponent,
        CustomerRankComponent,
        DateFormatComponent,
        EquipementStatusComponent,
        EquipementTypeComponent,
        GenderComponent,
        IsMatIconComponent,
        NameAvatarComponent,
        OriginComponent,
        PhoneDisplayComponent,
        PriorityComponent,
        YesNoComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    TableComponent,
                    CustomerRankComponent,
                    DateFormatComponent,
                    EquipementStatusComponent,
                    EquipementTypeComponent,
                    GenderComponent,
                    IsMatIconComponent,
                    NameAvatarComponent,
                    OriginComponent,
                    PhoneDisplayComponent,
                    PriorityComponent,
                    YesNoComponent
                ],
                imports: [
                    PngIconModule,
                    MatPaginatorModule,
                    MatTableModule,
                    MatSortModule,
                    MatTooltipModule,
                    CommonModule,
                    MatIconModule,
                    RouterModule,
                    MatBadgeModule
                ],
                exports: [
                    TableComponent,
                    CustomerRankComponent,
                    DateFormatComponent,
                    EquipementStatusComponent,
                    EquipementTypeComponent,
                    GenderComponent,
                    IsMatIconComponent,
                    NameAvatarComponent,
                    OriginComponent,
                    PhoneDisplayComponent,
                    PriorityComponent,
                    YesNoComponent
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQzlGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLGlFQUFpRSxDQUFDO0FBQzFHLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLDZEQUE2RCxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUN2RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDMUUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDOUYsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7QUEwQ3ZELE1BQU0sT0FBTyxXQUFXOzsrQ0FBWCxXQUFXO3FHQUFYLFdBQVcsa0JBekJiO1lBQ1AsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixjQUFjO1lBQ2QsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osYUFBYTtZQUNiLFlBQVk7WUFDWixjQUFjO1NBQUM7d0ZBZ0JOLFdBQVcsbUJBdENwQixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGNBQWMsYUFHZCxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixhQUFhO1FBQ2IsWUFBWTtRQUNaLGNBQWMsYUFFZCxjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGNBQWM7a0RBR0wsV0FBVztjQXhDdkIsUUFBUTtlQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixjQUFjO29CQUNkLHFCQUFxQjtvQkFDckIsbUJBQW1CO29CQUNuQix5QkFBeUI7b0JBQ3pCLHVCQUF1QjtvQkFDdkIsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtvQkFDakIsY0FBYztpQkFDZjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixZQUFZO29CQUNaLGNBQWM7aUJBQUM7Z0JBQ2pCLE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLHFCQUFxQjtvQkFDckIsbUJBQW1CO29CQUNuQix5QkFBeUI7b0JBQ3pCLHVCQUF1QjtvQkFDdkIsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZixxQkFBcUI7b0JBQ3JCLGlCQUFpQjtvQkFDakIsY0FBYztpQkFDZjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhYmxlQ29tcG9uZW50fSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQge0N1c3RvbWVyUmFua0NvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2N1c3RvbWVyLXJhbmsvY3VzdG9tZXItcmFuay5jb21wb25lbnRcIjtcbmltcG9ydCB7RGF0ZUZvcm1hdENvbXBvbmVudH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2RhdGUtZm9ybWF0L2RhdGUtZm9ybWF0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC1zdGF0dXMvZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50XCI7XG5pbXBvcnQge0VxdWlwZW1lbnRUeXBlQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC10eXBlL2VxdWlwZW1lbnQtdHlwZS5jb21wb25lbnRcIjtcbmltcG9ydCB7R2VuZGVyQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZ2VuZGVyL2dlbmRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7SXNNYXRJY29uQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvaXMtbWF0LWljb24vaXMtbWF0LWljb24uY29tcG9uZW50XCI7XG5pbXBvcnQge05hbWVBdmF0YXJDb21wb25lbnR9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9uYW1lLWF2YXRhci9uYW1lLWF2YXRhci5jb21wb25lbnRcIjtcbmltcG9ydCB7T3JpZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvb3JpZ2luL29yaWdpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7UGhvbmVEaXNwbGF5Q29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtQbmdJY29uTW9kdWxlfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvcG5nLWljb24vcG5nLWljb24ubW9kdWxlXCI7XG5pbXBvcnQge1ByaW9yaXR5Q29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvcHJpb3JpdHkvcHJpb3JpdHkuY29tcG9uZW50XCI7XG5pbXBvcnQge1llc05vQ29tcG9uZW50fSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQveWVzLW5vL3llcy1uby5jb21wb25lbnRcIjtcbmltcG9ydCB7TWF0UGFnaW5hdG9yTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yXCI7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGVcIjtcbmltcG9ydCB7TWF0U29ydE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NvcnRcIjtcbmltcG9ydCB7TWF0VG9vbHRpcE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXBcIjtcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9pY29uXCI7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtNYXRCYWRnZU1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2JhZGdlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRhYmxlQ29tcG9uZW50LFxuICAgIEN1c3RvbWVyUmFua0NvbXBvbmVudCxcbiAgICBEYXRlRm9ybWF0Q29tcG9uZW50LFxuICAgIEVxdWlwZW1lbnRTdGF0dXNDb21wb25lbnQsXG4gICAgRXF1aXBlbWVudFR5cGVDb21wb25lbnQsXG4gICAgR2VuZGVyQ29tcG9uZW50LFxuICAgIElzTWF0SWNvbkNvbXBvbmVudCxcbiAgICBOYW1lQXZhdGFyQ29tcG9uZW50LFxuICAgIE9yaWdpbkNvbXBvbmVudCxcbiAgICBQaG9uZURpc3BsYXlDb21wb25lbnQsXG4gICAgUHJpb3JpdHlDb21wb25lbnQsXG4gICAgWWVzTm9Db21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIFBuZ0ljb25Nb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGVdLFxuICBleHBvcnRzOiBbXG4gICAgVGFibGVDb21wb25lbnQsXG4gICAgQ3VzdG9tZXJSYW5rQ29tcG9uZW50LFxuICAgIERhdGVGb3JtYXRDb21wb25lbnQsXG4gICAgRXF1aXBlbWVudFN0YXR1c0NvbXBvbmVudCxcbiAgICBFcXVpcGVtZW50VHlwZUNvbXBvbmVudCxcbiAgICBHZW5kZXJDb21wb25lbnQsXG4gICAgSXNNYXRJY29uQ29tcG9uZW50LFxuICAgIE5hbWVBdmF0YXJDb21wb25lbnQsXG4gICAgT3JpZ2luQ29tcG9uZW50LFxuICAgIFBob25lRGlzcGxheUNvbXBvbmVudCxcbiAgICBQcmlvcml0eUNvbXBvbmVudCxcbiAgICBZZXNOb0NvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlTW9kdWxlIHtcbn1cbiJdfQ==