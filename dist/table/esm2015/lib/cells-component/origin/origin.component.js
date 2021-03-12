import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let OriginComponent = class OriginComponent {
    constructor() {
    }
    ngOnInit() {
        const list = [{
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
        const flter = list.filter((e) => {
            return this.icon.includes(e.label);
        });
        this.iconSrc = flter && flter.length && flter[0].data ? flter[0].data : '';
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], OriginComponent.prototype, "icon", void 0);
OriginComponent = __decorate([
    Component({
        selector: 'icon-origin',
        template: "<png-icon style=\"margin : auto; text-align: center\" matTooltip=\"{{this.icon}}\" [src]=\"this.iconSrc\"></png-icon>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], OriginComponent);
export { OriginComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JpZ2luLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC9vcmlnaW4vb3JpZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFJeEI7SUFDQSxDQUFDO0lBRUQsUUFBUTtRQUNKLE1BQU0sSUFBSSxHQUFHLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsTUFBTSxFQUFFLDhCQUE4QjthQUN6QyxFQUFFO2dCQUNDLE9BQU8sRUFBRSxNQUFNO2dCQUNmLE1BQU0sRUFBRSwrQkFBK0I7YUFDMUMsRUFBRTtnQkFDQyxPQUFPLEVBQUUsTUFBTTtnQkFDZixNQUFNLEVBQUUsK0JBQStCO2FBQzFDLEVBQUU7Z0JBQ0MsT0FBTyxFQUFFLFdBQVc7Z0JBQ3BCLE1BQU0sRUFBRSxvQ0FBb0M7YUFDL0MsRUFBRTtnQkFDQyxPQUFPLEVBQUUsS0FBSztnQkFDZCxNQUFNLEVBQUUsOEJBQThCO2FBQ3pDLENBQUMsQ0FBQztRQUNILE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtZQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9FLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Q0FFSixDQUFBO0FBakNZO0lBQVIsS0FBSyxFQUFFOzs2Q0FBYztBQURiLGVBQWU7SUFMM0IsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsaUlBQXNDOztLQUV6QyxDQUFDOztHQUNXLGVBQWUsQ0FrQzNCO1NBbENZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdpY29uLW9yaWdpbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL29yaWdpbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vb3JpZ2luLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgT3JpZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMgIHtcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gICAgcHVibGljIGljb25TcmM6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBsaXN0ID0gW3tcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJXZWJcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL1dlYi5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiUFJUR1wiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vUFJURy5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTWFpbFwiLFxuICAgICAgICAgICAgXCJkYXRhXCI6IFwiYXNzZXRzL2ljb25zL25vd3RlYW0vTWFpbC5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVMOpbMOpcGhvbmVcIixcbiAgICAgICAgICAgIFwiZGF0YVwiOiBcImFzc2V0cy9pY29ucy9ub3d0ZWFtL1RlbGVwaG9uZS5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQm90XCIsXG4gICAgICAgICAgICBcImRhdGFcIjogXCJhc3NldHMvaWNvbnMvbm93dGVhbS9Cb3QucG5nXCJcbiAgICAgICAgfV07XG4gICAgICAgIGNvbnN0IGZsdGVyID0gbGlzdC5maWx0ZXIoKGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWNvbi5pbmNsdWRlcyhlLmxhYmVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaWNvblNyYyA9IGZsdGVyICYmIGZsdGVyLmxlbmd0aCAmJiBmbHRlclswXS5kYXRhID8gZmx0ZXJbMF0uZGF0YSA6ICcnO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgIH1cblxufVxuIl19