import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
let GenderComponent = class GenderComponent {
    constructor() {
        this.css = {};
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params = {
            "m": "/assets/icons/nowteam/salutations/man.png",
            "mme": "/assets/icons/nowteam/salutations/woman.png",
        };
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.css.maxWidth = String(((this.size || 40) - 10)) + 'px';
            this.css.maxHeight = String(((this.size || 40) - 10)) + 'px';
            this.icon = "/assets/icons/status/HS.png";
        }
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], GenderComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], GenderComponent.prototype, "size", void 0);
GenderComponent = __decorate([
    Component({
        selector: 'app-gender',
        template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\">\n</span>\n",
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], GenderComponent);
export { GenderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RhYmxlLyIsInNvdXJjZXMiOlsibGliL2NlbGxzLWNvbXBvbmVudC9nZW5kZXIvZ2VuZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDO0FBT2pGLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFNeEI7UUFGTyxRQUFHLEdBQVEsRUFBRSxDQUFBO0lBR3BCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3RELE1BQU0sTUFBTSxHQUFRO1lBQ2hCLEdBQUcsRUFBRSwyQ0FBMkM7WUFDaEQsS0FBSyxFQUFFLDZDQUE2QztTQUN2RCxDQUFBO1FBRUQsTUFBTSxLQUFLLEdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4RixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzVCO2FBQU07WUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDNUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzdELElBQUksQ0FBQyxJQUFJLEdBQUcsNkJBQTZCLENBQUM7U0FDN0M7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBRTlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0NBRUosQ0FBQTtBQS9CWTtJQUFSLEtBQUssRUFBRTs7NkNBQWM7QUFDYjtJQUFSLEtBQUssRUFBRTs7NkNBQWM7QUFGYixlQUFlO0lBTDNCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLCtHQUFzQzs7S0FFekMsQ0FBQzs7R0FDVyxlQUFlLENBZ0MzQjtTQWhDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLWdlbmRlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dlbmRlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZ2VuZGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2VuZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBzaXplOiBudW1iZXI7XG4gICAgcHVibGljIGljb246IHN0cmluZztcbiAgICBwdWJsaWMgY3NzOiBhbnkgPSB7fVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgNDApKSArICdweCc7XG4gICAgICAgIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygodGhpcy5zaXplIHx8IDQwKSkgKyAncHgnO1xuICAgICAgICBjb25zdCBwYXJhbXM6IGFueSA9IHtcbiAgICAgICAgICAgIFwibVwiOiBcIi9hc3NldHMvaWNvbnMvbm93dGVhbS9zYWx1dGF0aW9ucy9tYW4ucG5nXCIsXG4gICAgICAgICAgICBcIm1tZVwiOiBcIi9hc3NldHMvaWNvbnMvbm93dGVhbS9zYWx1dGF0aW9ucy93b21hbi5wbmdcIixcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNsZWFuOiBzdHJpbmcgPSAodGhpcy50eXBlIHx8IFwiXCIpLnRvTG9jYWxlTG93ZXJDYXNlKCkucmVwbGFjZSgvW15BLVowLTldKy9pZywgXCJcIik7XG4gICAgICAgIGlmIChwYXJhbXNbY2xlYW5dKSB7XG4gICAgICAgICAgICB0aGlzLmljb24gPSBwYXJhbXNbY2xlYW5dXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNzcy5tYXhXaWR0aCA9IFN0cmluZygoKHRoaXMuc2l6ZSB8fCA0MCkgLSAxMCkpICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY3NzLm1heEhlaWdodCA9IFN0cmluZygoKHRoaXMuc2l6ZSB8fCA0MCkgLSAxMCkpICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuaWNvbiA9IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvSFMucG5nXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cbiAgICAgICAgdGhpcy5uZ09uSW5pdCgpXG4gICAgfVxuXG59XG4iXX0=