import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../png-icon/png-icon.component";
import * as i2 from "@angular/material/tooltip";
var PriorityComponent = /** @class */ (function () {
    function PriorityComponent() {
    }
    PriorityComponent.prototype.ngOnInit = function () {
        var _this = this;
        var list = [{
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
        var data = list.filter(function (e) {
            return _this.icon.includes(e.label);
        });
        if (data && data.length) {
            this.iconSrc = data[0].data;
        }
    };
    PriorityComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    PriorityComponent.ɵfac = function PriorityComponent_Factory(t) { return new (t || PriorityComponent)(); };
    PriorityComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PriorityComponent, selectors: [["icon-priority"]], inputs: { icon: "icon" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 2, consts: [[3, "matTooltip", "src"]], template: function PriorityComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "png-icon", 0);
        } if (rf & 2) {
            i0.ɵɵpropertyInterpolate("matTooltip", ctx.icon);
            i0.ɵɵproperty("src", ctx.iconSrc);
        } }, directives: [i1.PngIconComponent, i2.MatTooltip], styles: [""] });
    return PriorityComponent;
}());
export { PriorityComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpb3JpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L3ByaW9yaXR5L3ByaW9yaXR5LmNvbXBvbmVudC50cyIsImxpYi9jZWxscy1jb21wb25lbnQvcHJpb3JpdHkvcHJpb3JpdHkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpGO0lBU0k7SUFDQSxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUFBLGlCQXVCQztRQXRCRyxJQUFNLElBQUksR0FBRyxDQUFDO2dCQUNWLE9BQU8sRUFBRSwyQkFBMkI7Z0JBQ3BDLE1BQU0sRUFBRSx1Q0FBdUM7YUFDbEQsRUFBRTtnQkFDQyxPQUFPLEVBQUUsY0FBYztnQkFDdkIsTUFBTSxFQUFFLG1DQUFtQzthQUM5QyxFQUFFO2dCQUNDLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixNQUFNLEVBQUUsaUNBQWlDO2FBQzVDLEVBQUU7Z0JBQ0MsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLE1BQU0sRUFBRSxpQ0FBaUM7YUFDNUMsRUFBRTtnQkFDQyxPQUFPLEVBQUUsV0FBVztnQkFDcEIsTUFBTSxFQUFFLGdDQUFnQzthQUMzQyxDQUFDLENBQUM7UUFDSCxJQUFNLElBQUksR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBTTtZQUNqQyxPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO1NBQzlCO0lBQ0wsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztzRkFsQ1EsaUJBQWlCOzBEQUFqQixpQkFBaUI7WUNQOUIsOEJBQXFFOztZQUEzRCxnREFBMEI7WUFBQyxpQ0FBb0I7OzRCREF6RDtDQTJDQyxBQXpDRCxJQXlDQztTQXBDWSxpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQzNDOztrQkFFSSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaWNvbi1wcmlvcml0eScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ByaW9yaXR5LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9wcmlvcml0eS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFByaW9yaXR5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIGljb246IHN0cmluZztcbiAgICBwdWJsaWMgaWNvblNyYyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBsaXN0ID0gW3tcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCI1IC0gQ3JpdGlxdWUgKFByb2R1Y3Rpb24pXCIsXG4gICAgICAgICAgICBcImRhdGFcIjogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9jcml0aXF1ZXByb2QucG5nXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIjQgLSBDcml0aXF1ZVwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vY3JpdGlxdWUucG5nXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIjMgLSBVcmdlbnRlXCIsXG4gICAgICAgICAgICBcImRhdGFcIjogXCJhc3NldHMvaWNvbnMvbm93dGVhbS91cmdlbnQucG5nXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIjIgLSBOb3JtYWxlXCIsXG4gICAgICAgICAgICAnZGF0YSc6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vbm9ybWFsLnBuZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCIxIC0gQmFzc2VcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL2Jhc3NlLnBuZ1wiXG4gICAgICAgIH1dO1xuICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSBsaXN0LmZpbHRlcigoZTogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pY29uLmluY2x1ZGVzKGUubGFiZWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvblNyYyA9IGRhdGFbMF0uZGF0YVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxuXG59XG4iLCI8cG5nLWljb24gbWF0VG9vbHRpcD1cInt7dGhpcy5pY29ufX1cIiBbc3JjXT1cInRoaXMuaWNvblNyY1wiPjwvcG5nLWljb24+XG4iXX0=