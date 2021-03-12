import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
var GenderComponent = /** @class */ (function () {
    function GenderComponent() {
        this.css = {};
    }
    GenderComponent.prototype.ngOnInit = function () {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        var params = {
            "m": "/assets/icons/nowteam/salutations/man.png",
            "mme": "/assets/icons/nowteam/salutations/woman.png",
        };
        var clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.css.maxWidth = String(((this.size || 40) - 10)) + 'px';
            this.css.maxHeight = String(((this.size || 40) - 10)) + 'px';
            this.icon = "/assets/icons/status/HS.png";
        }
    };
    GenderComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    GenderComponent.ɵfac = function GenderComponent_Factory(t) { return new (t || GenderComponent)(); };
    GenderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GenderComponent, selectors: [["app-gender"]], inputs: { type: "type", size: "size" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 6, consts: [[3, "matTooltip"], [3, "src"]], template: function GenderComponent_Template(rf, ctx) { if (rf & 1) {
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
    return GenderComponent;
}());
export { GenderComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GenderComponent, [{
        type: Component,
        args: [{
                selector: 'app-gender',
                templateUrl: './gender.component.html',
                styleUrls: ['./gender.component.scss']
            }]
    }], function () { return []; }, { type: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC9nZW5kZXIvZ2VuZGVyLmNvbXBvbmVudC50cyIsImxpYi9jZWxscy1jb21wb25lbnQvZ2VuZGVyL2dlbmRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7OztBQUVqRjtJQVdJO1FBRk8sUUFBRyxHQUFRLEVBQUUsQ0FBQTtJQUdwQixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN0RCxJQUFNLE1BQU0sR0FBUTtZQUNoQixHQUFHLEVBQUUsMkNBQTJDO1lBQ2hELEtBQUssRUFBRSw2Q0FBNkM7U0FDdkQsQ0FBQTtRQUVELElBQU0sS0FBSyxHQUFXLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEYsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1QjthQUFNO1lBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzVELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUM3RCxJQUFJLENBQUMsSUFBSSxHQUFHLDZCQUE2QixDQUFDO1NBQzdDO0lBQ0wsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUU5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDbkIsQ0FBQztrRkE5QlEsZUFBZTt3REFBZixlQUFlO1lDUDVCLCtCQUNJO1lBQUEseUJBQ0o7WUFBQSxpQkFBTzs7WUFGRCxzQkFBYTtZQUFDLGdEQUFxQjtZQUNuQixlQUFhO1lBQWIsc0JBQWE7WUFBMUIsZ0RBQVk7OzBCRERyQjtDQXVDQyxBQXJDRCxJQXFDQztTQWhDWSxlQUFlO2tEQUFmLGVBQWU7Y0FMM0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUN6Qzs7a0JBRUksS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1nZW5kZXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9nZW5kZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2dlbmRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdlbmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc2l6ZTogbnVtYmVyO1xuICAgIHB1YmxpYyBpY29uOiBzdHJpbmc7XG4gICAgcHVibGljIGNzczogYW55ID0ge31cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNzcy5tYXhXaWR0aCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xuICAgICAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKHRoaXMuc2l6ZSB8fCA0MCkpICsgJ3B4JztcbiAgICAgICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICAgICAgICBcIm1cIjogXCIvYXNzZXRzL2ljb25zL25vd3RlYW0vc2FsdXRhdGlvbnMvbWFuLnBuZ1wiLFxuICAgICAgICAgICAgXCJtbWVcIjogXCIvYXNzZXRzL2ljb25zL25vd3RlYW0vc2FsdXRhdGlvbnMvd29tYW4ucG5nXCIsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjbGVhbjogc3RyaW5nID0gKHRoaXMudHlwZSB8fCBcIlwiKS50b0xvY2FsZUxvd2VyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XSsvaWcsIFwiXCIpO1xuICAgICAgICBpZiAocGFyYW1zW2NsZWFuXSkge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gcGFyYW1zW2NsZWFuXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jc3MubWF4V2lkdGggPSBTdHJpbmcoKCh0aGlzLnNpemUgfHwgNDApIC0gMTApKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLmNzcy5tYXhIZWlnaHQgPSBTdHJpbmcoKCh0aGlzLnNpemUgfHwgNDApIC0gMTApKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL0hTLnBuZ1wiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG4gICAgICAgIHRoaXMubmdPbkluaXQoKVxuICAgIH1cblxufVxuIiwiPHNwYW4gW3N0eWxlXT1cImNzc1wiIG1hdFRvb2x0aXA9XCJ7e3R5cGV9fVwiPlxuICAgIDxpbWcgW3NyY109XCJpY29uXCIgW3N0eWxlXT1cImNzc1wiPlxuPC9zcGFuPlxuIl19