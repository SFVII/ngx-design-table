import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class YesNoComponent {
    constructor() {
        this.displayNo = false;
        this.displayYes = true;
        this.css = {};
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = {
            "true": "/assets/icons/status/actif.png",
            "false": "/assets/icons/status/incatif.png"
        };
        if (this.valid && this.displayYes) {
            this.icon = params["true"];
        }
        else if (this.displayNo) {
            this.icon = params["false"];
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVzLW5vLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC95ZXMtbm8veWVzLW5vLmNvbXBvbmVudC50cyIsImxpYi9jZWxscy1jb21wb25lbnQveWVzLW5vL3llcy1uby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7O0FBT2pGLE1BQU0sT0FBTyxjQUFjO0lBUXZCO1FBTlMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRzdCLFFBQUcsR0FBUSxFQUFFLENBQUM7SUFHckIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdEQsTUFBTSxNQUFNLEdBQVE7WUFDaEIsTUFBTSxFQUFFLGdDQUFnQztZQUN4QyxPQUFPLEVBQUUsa0NBQWtDO1NBQzlDLENBQUE7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtTQUM3QjthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUM5QjtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7OzRFQTVCUSxjQUFjO21EQUFkLGNBQWM7UUNQM0IsNEJBQ0k7UUFBQSx5QkFDSjtRQUFBLGlCQUFPOztRQUZELHNCQUFhO1FBQ0csZUFBYTtRQUFiLHNCQUFhO1FBQTFCLGdEQUFZOztrRERNUixjQUFjO2NBTDFCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDekM7O2tCQUVJLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAteWVzLW5veCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3llcy1uby5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4veWVzLW5vLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgWWVzTm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgdmFsaWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgZGlzcGxheU5vOiBib29sZWFuID0gZmFsc2U7XG4gICAgQElucHV0KCkgZGlzcGxheVllczogYm9vbGVhbiA9IHRydWU7XG4gICAgQElucHV0KCkgc2l6ZTtcbiAgICBwdWJsaWMgaWNvbjogc3RyaW5nO1xuICAgIHB1YmxpYyBjc3M6IGFueSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XG4gICAgICAgIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xuICAgICAgICBjb25zdCBwYXJhbXM6IGFueSA9IHtcbiAgICAgICAgICAgIFwidHJ1ZVwiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL2FjdGlmLnBuZ1wiLFxuICAgICAgICAgICAgXCJmYWxzZVwiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL2luY2F0aWYucG5nXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnZhbGlkICYmIHRoaXMuZGlzcGxheVllcykge1xuICAgICAgICAgICAgdGhpcy5pY29uID0gcGFyYW1zW1widHJ1ZVwiXVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlzcGxheU5vKSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBwYXJhbXNbXCJmYWxzZVwiXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgfVxuXG59XG4iLCI8c3BhbiBbc3R5bGVdPVwiY3NzXCIgPlxuICAgIDxpbWcgW3NyY109XCJpY29uXCIgW3N0eWxlXT1cImNzc1wiPlxuPC9zcGFuPlxuIl19