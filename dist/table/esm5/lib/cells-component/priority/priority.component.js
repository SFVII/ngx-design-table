import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
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
    return PriorityComponent;
}());
export { PriorityComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpb3JpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L3ByaW9yaXR5L3ByaW9yaXR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGO0lBSUk7SUFDQSxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUFBLGlCQXVCQztRQXRCRyxJQUFNLElBQUksR0FBRyxDQUFDO2dCQUNWLE9BQU8sRUFBRSwyQkFBMkI7Z0JBQ3BDLE1BQU0sRUFBRSx1Q0FBdUM7YUFDbEQsRUFBRTtnQkFDQyxPQUFPLEVBQUUsY0FBYztnQkFDdkIsTUFBTSxFQUFFLG1DQUFtQzthQUM5QyxFQUFFO2dCQUNDLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixNQUFNLEVBQUUsaUNBQWlDO2FBQzVDLEVBQUU7Z0JBQ0MsT0FBTyxFQUFFLGFBQWE7Z0JBQ3RCLE1BQU0sRUFBRSxpQ0FBaUM7YUFDNUMsRUFBRTtnQkFDQyxPQUFPLEVBQUUsV0FBVztnQkFDcEIsTUFBTSxFQUFFLGdDQUFnQzthQUMzQyxDQUFDLENBQUM7UUFDSCxJQUFNLElBQUksR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBTTtZQUNqQyxPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO1NBQzlCO0lBQ0wsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQWpDUTtRQUFSLEtBQUssRUFBRTs7bURBQWM7SUFEYixpQkFBaUI7UUFMN0IsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsdUZBQXdDOztTQUUzQyxDQUFDOztPQUNXLGlCQUFpQixDQW9DN0I7SUFBRCx3QkFBQztDQUFBLEFBcENELElBb0NDO1NBcENZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ljb24tcHJpb3JpdHknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wcmlvcml0eS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vcHJpb3JpdHkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcmlvcml0eUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gICAgcHVibGljIGljb25TcmMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IFt7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiNSAtIENyaXRpcXVlIChQcm9kdWN0aW9uKVwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vY3JpdGlxdWVwcm9kLnBuZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCI0IC0gQ3JpdGlxdWVcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL2NyaXRpcXVlLnBuZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCIzIC0gVXJnZW50ZVwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vdXJnZW50LnBuZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCIyIC0gTm9ybWFsZVwiLFxuICAgICAgICAgICAgJ2RhdGEnOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL25vcm1hbC5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiMSAtIEJhc3NlXCIsXG4gICAgICAgICAgICBcImRhdGFcIjogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9iYXNzZS5wbmdcIlxuICAgICAgICB9XTtcbiAgICAgICAgY29uc3QgZGF0YTogYW55ID0gbGlzdC5maWx0ZXIoKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWNvbi5pbmNsdWRlcyhlLmxhYmVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmljb25TcmMgPSBkYXRhWzBdLmRhdGFcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cblxufVxuIl19