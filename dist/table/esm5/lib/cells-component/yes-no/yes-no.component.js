import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
var YesNoComponent = /** @class */ (function () {
    function YesNoComponent() {
        this.displayNo = false;
        this.displayYes = true;
        this.css = {};
    }
    YesNoComponent.prototype.ngOnInit = function () {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        var params = {
            "true": "/assets/icons/status/actif.png",
            "false": "/assets/icons/status/incatif.png"
        };
        if (this.valid && this.displayYes) {
            this.icon = params["true"];
        }
        else if (this.displayNo) {
            this.icon = params["false"];
        }
    };
    YesNoComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], YesNoComponent.prototype, "valid", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], YesNoComponent.prototype, "displayNo", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], YesNoComponent.prototype, "displayYes", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], YesNoComponent.prototype, "size", void 0);
    YesNoComponent = __decorate([
        Component({
            selector: 'app-yes-nox',
            template: "<span [style]=\"css\" >\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n",
            styles: [""]
        }),
        __metadata("design:paramtypes", [])
    ], YesNoComponent);
    return YesNoComponent;
}());
export { YesNoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVzLW5vLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC95ZXMtbm8veWVzLW5vLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGO0lBUUk7UUFOUyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFHN0IsUUFBRyxHQUFRLEVBQUUsQ0FBQztJQUdyQixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN0RCxJQUFNLE1BQU0sR0FBUTtZQUNoQixNQUFNLEVBQUUsZ0NBQWdDO1lBQ3hDLE9BQU8sRUFBRSxrQ0FBa0M7U0FDOUMsQ0FBQTtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQzdCO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQzlCO0lBQ0wsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQTNCUTtRQUFSLEtBQUssRUFBRTs7aURBQWdCO0lBQ2Y7UUFBUixLQUFLLEVBQUU7O3FEQUE0QjtJQUMzQjtRQUFSLEtBQUssRUFBRTs7c0RBQTRCO0lBQzNCO1FBQVIsS0FBSyxFQUFFOztnREFBTTtJQUpMLGNBQWM7UUFMMUIsU0FBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsd0ZBQXNDOztTQUV6QyxDQUFDOztPQUNXLGNBQWMsQ0E4QjFCO0lBQUQscUJBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTlCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXllcy1ub3gnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi95ZXMtbm8uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3llcy1uby5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFllc05vQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIHZhbGlkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGRpc3BsYXlObzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGRpc3BsYXlZZXM6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIHNpemU7XG4gICAgcHVibGljIGljb246IHN0cmluZztcbiAgICBwdWJsaWMgY3NzOiBhbnkgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNzcy5tYXhXaWR0aCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xuICAgICAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCA0MCkpICsgJ3B4JztcbiAgICAgICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICAgICAgICBcInRydWVcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9hY3RpZi5wbmdcIixcbiAgICAgICAgICAgIFwiZmFsc2VcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9pbmNhdGlmLnBuZ1wiXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy52YWxpZCAmJiB0aGlzLmRpc3BsYXlZZXMpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IHBhcmFtc1tcInRydWVcIl1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRpc3BsYXlObykge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gcGFyYW1zW1wiZmFsc2VcIl1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cblxufVxuIl19