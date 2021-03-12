import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
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
    YesNoComponent.ɵfac = function YesNoComponent_Factory(t) { return new (t || YesNoComponent)(); };
    YesNoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: YesNoComponent, selectors: [["app-yes-nox"]], inputs: { valid: "valid", displayNo: "displayNo", displayYes: "displayYes", size: "size" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 5, consts: [[3, "src"]], template: function YesNoComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelement(1, "img", 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleMap(ctx.css);
            i0.ɵɵadvance(1);
            i0.ɵɵstyleMap(ctx.css);
            i0.ɵɵproperty("src", ctx.icon, i0.ɵɵsanitizeUrl);
        } }, styles: [""] });
    return YesNoComponent;
}());
export { YesNoComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(YesNoComponent, [{
        type: Component,
        args: [{
                selector: 'app-yes-nox',
                templateUrl: './yes-no.component.html',
                styleUrls: ['./yes-no.component.scss']
            }]
    }], function () { return []; }, { valid: [{
            type: Input
        }], displayNo: [{
            type: Input
        }], displayYes: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVzLW5vLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC95ZXMtbm8veWVzLW5vLmNvbXBvbmVudC50cyIsImxpYi9jZWxscy1jb21wb25lbnQveWVzLW5vL3llcy1uby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7O0FBRWpGO0lBYUk7UUFOUyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFHN0IsUUFBRyxHQUFRLEVBQUUsQ0FBQztJQUdyQixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN0RCxJQUFNLE1BQU0sR0FBUTtZQUNoQixNQUFNLEVBQUUsZ0NBQWdDO1lBQ3hDLE9BQU8sRUFBRSxrQ0FBa0M7U0FDOUMsQ0FBQTtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQzdCO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQzlCO0lBQ0wsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztnRkE1QlEsY0FBYzt1REFBZCxjQUFjO1lDUDNCLDRCQUNJO1lBQUEseUJBQ0o7WUFBQSxpQkFBTzs7WUFGRCxzQkFBYTtZQUNHLGVBQWE7WUFBYixzQkFBYTtZQUExQixnREFBWTs7eUJERHJCO0NBcUNDLEFBbkNELElBbUNDO1NBOUJZLGNBQWM7a0RBQWQsY0FBYztjQUwxQixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3pDOztrQkFFSSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXllcy1ub3gnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi95ZXMtbm8uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3llcy1uby5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFllc05vQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIHZhbGlkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGRpc3BsYXlObzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGRpc3BsYXlZZXM6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBJbnB1dCgpIHNpemU7XG4gICAgcHVibGljIGljb246IHN0cmluZztcbiAgICBwdWJsaWMgY3NzOiBhbnkgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNzcy5tYXhXaWR0aCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xuICAgICAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCA0MCkpICsgJ3B4JztcbiAgICAgICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICAgICAgICBcInRydWVcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9hY3RpZi5wbmdcIixcbiAgICAgICAgICAgIFwiZmFsc2VcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9pbmNhdGlmLnBuZ1wiXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy52YWxpZCAmJiB0aGlzLmRpc3BsYXlZZXMpIHtcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IHBhcmFtc1tcInRydWVcIl1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRpc3BsYXlObykge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gcGFyYW1zW1wiZmFsc2VcIl1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cblxufVxuIiwiPHNwYW4gW3N0eWxlXT1cImNzc1wiID5cbiAgICA8aW1nIFtzcmNdPVwiaWNvblwiIFtzdHlsZV09XCJjc3NcIj5cbjwvc3Bhbj5cbiJdfQ==