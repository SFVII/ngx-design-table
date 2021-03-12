import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../png-icon/png-icon.component";
import * as i2 from "@angular/material/tooltip";
var OriginComponent = /** @class */ (function () {
    function OriginComponent() {
    }
    OriginComponent.prototype.ngOnInit = function () {
        var _this = this;
        var list = [{
                "label": "Web",
                "data": "assets/icons/nowteam/Web.png"
            }, {
                "label": "PRTG",
                "data": "assets/icons/nowteam/PRTG.png"
            }, {
                "label": "Mail",
                "data": "assets/icons/nowteam/Mail.png"
            }, {
                "label": "Téléphone",
                "data": "assets/icons/nowteam/Telephone.png"
            }, {
                "label": "Bot",
                "data": "assets/icons/nowteam/Bot.png"
            }];
        var flter = list.filter(function (e) {
            return _this.icon.includes(e.label);
        });
        this.iconSrc = flter && flter.length && flter[0].data ? flter[0].data : '';
    };
    OriginComponent.prototype.ngOnChanges = function (changes) {
        this.ngOnInit();
    };
    OriginComponent.ɵfac = function OriginComponent_Factory(t) { return new (t || OriginComponent)(); };
    OriginComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OriginComponent, selectors: [["icon-origin"]], inputs: { icon: "icon" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 2, consts: [[2, "margin", "auto", "text-align", "center", 3, "matTooltip", "src"]], template: function OriginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "png-icon", 0);
        } if (rf & 2) {
            i0.ɵɵpropertyInterpolate("matTooltip", ctx.icon);
            i0.ɵɵproperty("src", ctx.iconSrc);
        } }, directives: [i1.PngIconComponent, i2.MatTooltip], styles: [""] });
    return OriginComponent;
}());
export { OriginComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OriginComponent, [{
        type: Component,
        args: [{
                selector: 'icon-origin',
                templateUrl: './origin.component.html',
                styleUrls: ['./origin.component.scss']
            }]
    }], function () { return []; }, { icon: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC9vcmlnaW4vb3JpZ2luLmNvbXBvbmVudC50cyIsImxpYi9jZWxscy1jb21wb25lbnQvb3JpZ2luL29yaWdpbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFakY7SUFTSTtJQUNBLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBcUJDO1FBcEJHLElBQU0sSUFBSSxHQUFHLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsTUFBTSxFQUFFLDhCQUE4QjthQUN6QyxFQUFFO2dCQUNDLE9BQU8sRUFBRSxNQUFNO2dCQUNmLE1BQU0sRUFBRSwrQkFBK0I7YUFDMUMsRUFBRTtnQkFDQyxPQUFPLEVBQUUsTUFBTTtnQkFDZixNQUFNLEVBQUUsK0JBQStCO2FBQzFDLEVBQUU7Z0JBQ0MsT0FBTyxFQUFFLFdBQVc7Z0JBQ3BCLE1BQU0sRUFBRSxvQ0FBb0M7YUFDL0MsRUFBRTtnQkFDQyxPQUFPLEVBQUUsS0FBSztnQkFDZCxNQUFNLEVBQUUsOEJBQThCO2FBQ3pDLENBQUMsQ0FBQztRQUNILElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFNO1lBQzdCLE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDL0UsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUM5QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztrRkFoQ1EsZUFBZTt3REFBZixlQUFlO1lDUDVCLDhCQUErRzs7WUFBM0QsZ0RBQTBCO1lBQUMsaUNBQW9COzswQkRBbkc7Q0F5Q0MsQUF2Q0QsSUF1Q0M7U0FsQ1ksZUFBZTtrREFBZixlQUFlO2NBTDNCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDekM7O2tCQUVJLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpY29uLW9yaWdpbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL29yaWdpbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vb3JpZ2luLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT3JpZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMgIHtcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gICAgcHVibGljIGljb25TcmM6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBsaXN0ID0gW3tcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJXZWJcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL1dlYi5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUFJUR1wiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vUFJURy5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTWFpbFwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vTWFpbC5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVMOpbMOpcGhvbmVcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL1RlbGVwaG9uZS5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQm90XCIsXG4gICAgICAgICAgICBcImRhdGFcIjogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9Cb3QucG5nXCJcbiAgICAgICAgfV07XG4gICAgICAgIGNvbnN0IGZsdGVyID0gbGlzdC5maWx0ZXIoKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWNvbi5pbmNsdWRlcyhlLmxhYmVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaWNvblNyYyA9IGZsdGVyICYmIGZsdGVyLmxlbmd0aCAmJiBmbHRlclswXS5kYXRhID8gZmx0ZXJbMF0uZGF0YSA6ICcnO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cblxufVxuIiwiPHBuZy1pY29uIHN0eWxlPVwibWFyZ2luIDogYXV0bzsgdGV4dC1hbGlnbjogY2VudGVyXCIgbWF0VG9vbHRpcD1cInt7dGhpcy5pY29ufX1cIiBbc3JjXT1cInRoaXMuaWNvblNyY1wiPjwvcG5nLWljb24+Il19