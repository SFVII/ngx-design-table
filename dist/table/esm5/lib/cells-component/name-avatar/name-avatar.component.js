import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
var NameAvatarComponent = /** @class */ (function () {
    function NameAvatarComponent() {
        this.fontSize = '24px';
        this._padding = '4px';
        this._display = 'flex';
        this._borderRadius = '50px';
        this._size = 'cover';
        this.afterInit = false;
        this.defaultFontSize = 12;
        this.defaultDimension = 24;
    }
    NameAvatarComponent.prototype.ngOnInit = function () {
        if (this.src) {
            var deg = Math.random() * (10 - 360) + 10;
            this.icon.nativeElement.style.backgroundImage = "linear-gradient(" + deg + "deg, #9d107d, \n                                                             #8b3391, #7647a0, #5f56a8, #4862ab)";
            this.icon.nativeElement.style.borderRadius = this._borderRadius;
            this.icon.nativeElement.style.marginLeft = '16px';
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.fontSize = (parseInt(this.fontSize, 0) / 2) + 'px';
            this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';
            this.icon.nativeElement.style.fontWeight = '900';
            this.icon.nativeElement.style.color = 'white';
            var tmp = this.src.split(' ');
            this.letter = (tmp[0][0] + (tmp[1] && tmp[1][0] ? tmp[1][0] : tmp[0][1])).toUpperCase();
        }
        else if (this.afterInit === false) {
            this.afterInit = true;
        }
    };
    NameAvatarComponent.prototype.ngAfterViewInit = function () {
        if (this.afterInit) {
            this.ngOnInit();
        }
    };
    NameAvatarComponent.prototype.getRatio = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NameAvatarComponent.prototype, "src", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NameAvatarComponent.prototype, "fontSize", void 0);
    __decorate([
        ViewChild('avatar', { static: true }),
        __metadata("design:type", ElementRef)
    ], NameAvatarComponent.prototype, "icon", void 0);
    NameAvatarComponent = __decorate([
        Component({
            selector: 'name-avatar',
            template: "<div #avatar>\n    {{letter}}\n</div>\n",
            styles: ["div{align-items:center;justify-content:center;padding:0!important}"]
        }),
        __metadata("design:paramtypes", [])
    ], NameAvatarComponent);
    return NameAvatarComponent;
}());
export { NameAvatarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1hdmF0YXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L25hbWUtYXZhdGFyL25hbWUtYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPN0Y7SUFhSTtRQVhTLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFHbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixxQkFBZ0IsR0FBRyxFQUFFLENBQUM7SUFHOUIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVixJQUFJLEdBQUcsR0FBVyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcscUJBQW1CLEdBQUcscUhBQ2UsQ0FBQztZQUN0RixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUNqRixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3pHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1lBQzlDLElBQU0sR0FBRyxHQUFhLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVELDZDQUFlLEdBQWY7UUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO0lBQ0wsQ0FBQztJQUVELHNDQUFRLEdBQVI7SUFFQSxDQUFDO0lBNUNRO1FBQVIsS0FBSyxFQUFFOztvREFBYTtJQUNaO1FBQVIsS0FBSyxFQUFFOzt5REFBbUI7SUFDVTtRQUFwQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDO2tDQUFPLFVBQVU7cURBQWM7SUFIMUQsbUJBQW1CO1FBTC9CLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLG1EQUEyQzs7U0FFOUMsQ0FBQzs7T0FDVyxtQkFBbUIsQ0ErQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQS9DRCxJQStDQztTQS9DWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduYW1lLWF2YXRhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25hbWUtYXZhdGFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uYW1lLWF2YXRhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5hbWVBdmF0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZvbnRTaXplID0gJzI0cHgnO1xuICAgIEBWaWV3Q2hpbGQoJ2F2YXRhcicsIHtzdGF0aWM6IHRydWV9KSBpY29uOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgICBwdWJsaWMgbGV0dGVyOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGFkZGluZyA9ICc0cHgnO1xuICAgIHByaXZhdGUgX2Rpc3BsYXkgPSAnZmxleCc7XG4gICAgcHJpdmF0ZSBfYm9yZGVyUmFkaXVzID0gJzUwcHgnO1xuICAgIHByaXZhdGUgX3NpemUgPSAnY292ZXInO1xuICAgIHByaXZhdGUgYWZ0ZXJJbml0ID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBkZWZhdWx0Rm9udFNpemUgPSAxMjtcbiAgICBwcml2YXRlIGRlZmF1bHREaW1lbnNpb24gPSAyNDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5zcmMpIHtcbiAgICAgICAgICAgIGxldCBkZWc6IG51bWJlciA9IE1hdGgucmFuZG9tKCkgKiAoMTAgLSAzNjApICsgMTA7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KCR7ZGVnfWRlZywgIzlkMTA3ZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIzhiMzM5MSwgIzc2NDdhMCwgIzVmNTZhOCwgIzQ4NjJhYilgO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gdGhpcy5fYm9yZGVyUmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9ICcxNnB4JztcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9kaXNwbGF5O1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLmZvbnRTaXplO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5mb250U2l6ZTtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gKHBhcnNlSW50KHRoaXMuZm9udFNpemUsIDApIC8gMikgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUucGFkZGluZyA9IChwYXJzZUludCh0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5mb250U2l6ZSwgMCkgLyAzKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5mb250V2VpZ2h0ID0gJzkwMCc7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICBjb25zdCB0bXA6IHN0cmluZ1tdID0gdGhpcy5zcmMuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHRoaXMubGV0dGVyID0gKHRtcFswXVswXSArICh0bXBbMV0gJiYgdG1wWzFdWzBdID8gdG1wWzFdWzBdIDogdG1wWzBdWzFdKSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFmdGVySW5pdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJJbml0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYWZ0ZXJJbml0KSB7XG4gICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRSYXRpbygpIHtcblxuICAgIH1cblxufVxuIl19