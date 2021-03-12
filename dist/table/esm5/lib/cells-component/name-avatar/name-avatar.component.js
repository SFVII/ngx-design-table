import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
var _c0 = ["avatar"];
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
    NameAvatarComponent.ɵfac = function NameAvatarComponent_Factory(t) { return new (t || NameAvatarComponent)(); };
    NameAvatarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NameAvatarComponent, selectors: [["name-avatar"]], viewQuery: function NameAvatarComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.icon = _t.first);
        } }, inputs: { src: "src", fontSize: "fontSize" }, decls: 3, vars: 1, consts: [["avatar", ""]], template: function NameAvatarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", null, 0);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.letter, "\n");
        } }, styles: ["div[_ngcontent-%COMP%]{align-items:center;justify-content:center;padding:0!important}"] });
    return NameAvatarComponent;
}());
export { NameAvatarComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NameAvatarComponent, [{
        type: Component,
        args: [{
                selector: 'name-avatar',
                templateUrl: './name-avatar.component.html',
                styleUrls: ['./name-avatar.component.scss']
            }]
    }], function () { return []; }, { src: [{
            type: Input
        }], fontSize: [{
            type: Input
        }], icon: [{
            type: ViewChild,
            args: ['avatar', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1hdmF0YXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L25hbWUtYXZhdGFyL25hbWUtYXZhdGFyLmNvbXBvbmVudC50cyIsImxpYi9jZWxscy1jb21wb25lbnQvbmFtZS1hdmF0YXIvbmFtZS1hdmF0YXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQWMsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRTdGO0lBa0JJO1FBWFMsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUduQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxNQUFNLENBQUM7UUFDdkIsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUc5QixDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNJLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksR0FBRyxHQUFXLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxxQkFBbUIsR0FBRyxxSEFDZSxDQUFDO1lBQ3RGLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ2pGLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDekcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDOUMsSUFBTSxHQUFHLEdBQWEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMzRjthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBRUQsNkNBQWUsR0FBZjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtJQUVBLENBQUM7MEZBN0NRLG1CQUFtQjs0REFBbkIsbUJBQW1COzs7Ozs7WUNQaEMsb0NBQ0k7WUFBQSxZQUNKO1lBQUEsaUJBQU07O1lBREYsZUFDSjtZQURJLDRDQUNKOzs4QkRGQTtDQXNEQyxBQXBERCxJQW9EQztTQS9DWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzlDOztrQkFFSSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxTQUFTO21CQUFDLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduYW1lLWF2YXRhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25hbWUtYXZhdGFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uYW1lLWF2YXRhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5hbWVBdmF0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZvbnRTaXplID0gJzI0cHgnO1xuICAgIEBWaWV3Q2hpbGQoJ2F2YXRhcicsIHtzdGF0aWM6IHRydWV9KSBpY29uOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgICBwdWJsaWMgbGV0dGVyOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGFkZGluZyA9ICc0cHgnO1xuICAgIHByaXZhdGUgX2Rpc3BsYXkgPSAnZmxleCc7XG4gICAgcHJpdmF0ZSBfYm9yZGVyUmFkaXVzID0gJzUwcHgnO1xuICAgIHByaXZhdGUgX3NpemUgPSAnY292ZXInO1xuICAgIHByaXZhdGUgYWZ0ZXJJbml0ID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBkZWZhdWx0Rm9udFNpemUgPSAxMjtcbiAgICBwcml2YXRlIGRlZmF1bHREaW1lbnNpb24gPSAyNDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5zcmMpIHtcbiAgICAgICAgICAgIGxldCBkZWc6IG51bWJlciA9IE1hdGgucmFuZG9tKCkgKiAoMTAgLSAzNjApICsgMTA7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KCR7ZGVnfWRlZywgIzlkMTA3ZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIzhiMzM5MSwgIzc2NDdhMCwgIzVmNTZhOCwgIzQ4NjJhYilgO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gdGhpcy5fYm9yZGVyUmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9ICcxNnB4JztcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9kaXNwbGF5O1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLmZvbnRTaXplO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5mb250U2l6ZTtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gKHBhcnNlSW50KHRoaXMuZm9udFNpemUsIDApIC8gMikgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUucGFkZGluZyA9IChwYXJzZUludCh0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5mb250U2l6ZSwgMCkgLyAzKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5mb250V2VpZ2h0ID0gJzkwMCc7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgICAgICAgICBjb25zdCB0bXA6IHN0cmluZ1tdID0gdGhpcy5zcmMuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHRoaXMubGV0dGVyID0gKHRtcFswXVswXSArICh0bXBbMV0gJiYgdG1wWzFdWzBdID8gdG1wWzFdWzBdIDogdG1wWzBdWzFdKSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFmdGVySW5pdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJJbml0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYWZ0ZXJJbml0KSB7XG4gICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRSYXRpbygpIHtcblxuICAgIH1cblxufVxuIiwiPGRpdiAjYXZhdGFyPlxuICAgIHt7bGV0dGVyfX1cbjwvZGl2PlxuIl19