import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["avatar"];
export class NameAvatarComponent {
    constructor() {
        this.fontSize = '24px';
        this._padding = '4px';
        this._display = 'flex';
        this._borderRadius = '50px';
        this._size = 'cover';
        this.afterInit = false;
        this.defaultFontSize = 12;
        this.defaultDimension = 24;
    }
    ngOnInit() {
        if (this.src) {
            let deg = Math.random() * (10 - 360) + 10;
            this.icon.nativeElement.style.backgroundImage = `linear-gradient(${deg}deg, #9d107d, 
                                                             #8b3391, #7647a0, #5f56a8, #4862ab)`;
            this.icon.nativeElement.style.borderRadius = this._borderRadius;
            this.icon.nativeElement.style.marginLeft = '16px';
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.fontSize = (parseInt(this.fontSize, 0) / 2) + 'px';
            this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';
            this.icon.nativeElement.style.fontWeight = '900';
            this.icon.nativeElement.style.color = 'white';
            const tmp = this.src.split(' ');
            this.letter = (tmp[0][0] + (tmp[1] && tmp[1][0] ? tmp[1][0] : tmp[0][1])).toUpperCase();
        }
        else if (this.afterInit === false) {
            this.afterInit = true;
        }
    }
    ngAfterViewInit() {
        if (this.afterInit) {
            this.ngOnInit();
        }
    }
    getRatio() {
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1hdmF0YXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L25hbWUtYXZhdGFyL25hbWUtYXZhdGFyLmNvbXBvbmVudC50cyIsImxpYi9jZWxscy1jb21wb25lbnQvbmFtZS1hdmF0YXIvbmFtZS1hdmF0YXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQWMsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBTzdGLE1BQU0sT0FBTyxtQkFBbUI7SUFhNUI7UUFYUyxhQUFRLEdBQUcsTUFBTSxDQUFDO1FBR25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNsQixrQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUN2QixVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO0lBRzlCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1YsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLG1CQUFtQixHQUFHO2lHQUNlLENBQUM7WUFDdEYsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDakYsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUN6RyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUM5QyxNQUFNLEdBQUcsR0FBYSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzNGO2FBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUFFRCxRQUFRO0lBRVIsQ0FBQzs7c0ZBN0NRLG1CQUFtQjt3REFBbkIsbUJBQW1COzs7Ozs7UUNQaEMsb0NBQ0k7UUFBQSxZQUNKO1FBQUEsaUJBQU07O1FBREYsZUFDSjtRQURJLDRDQUNKOztrRERLYSxtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM5Qzs7a0JBRUksS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsU0FBUzttQkFBQyxRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmFtZS1hdmF0YXInLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uYW1lLWF2YXRhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbmFtZS1hdmF0YXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYW1lQXZhdGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgICBASW5wdXQoKSBzcmM6IHN0cmluZztcbiAgICBASW5wdXQoKSBmb250U2l6ZSA9ICcyNHB4JztcbiAgICBAVmlld0NoaWxkKCdhdmF0YXInLCB7c3RhdGljOiB0cnVlfSkgaWNvbjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gICAgcHVibGljIGxldHRlcjogc3RyaW5nO1xuICAgIHByaXZhdGUgX3BhZGRpbmcgPSAnNHB4JztcbiAgICBwcml2YXRlIF9kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIHByaXZhdGUgX2JvcmRlclJhZGl1cyA9ICc1MHB4JztcbiAgICBwcml2YXRlIF9zaXplID0gJ2NvdmVyJztcbiAgICBwcml2YXRlIGFmdGVySW5pdCA9IGZhbHNlO1xuICAgIHByaXZhdGUgZGVmYXVsdEZvbnRTaXplID0gMTI7XG4gICAgcHJpdmF0ZSBkZWZhdWx0RGltZW5zaW9uID0gMjQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3JjKSB7XG4gICAgICAgICAgICBsZXQgZGVnOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpICogKDEwIC0gMzYwKSArIDEwO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudCgke2RlZ31kZWcsICM5ZDEwN2QsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICM4YjMzOTEsICM3NjQ3YTAsICM1ZjU2YTgsICM0ODYyYWIpYDtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IHRoaXMuX2JvcmRlclJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSAnMTZweCc7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fZGlzcGxheTtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5mb250U2l6ZTtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuZm9udFNpemU7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IChwYXJzZUludCh0aGlzLmZvbnRTaXplLCAwKSAvIDIpICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAocGFyc2VJbnQodGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZm9udFNpemUsIDApIC8gMykgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZm9udFdlaWdodCA9ICc5MDAnO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgICAgICAgICAgY29uc3QgdG1wOiBzdHJpbmdbXSA9IHRoaXMuc3JjLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICB0aGlzLmxldHRlciA9ICh0bXBbMF1bMF0gKyAodG1wWzFdICYmIHRtcFsxXVswXSA/IHRtcFsxXVswXSA6IHRtcFswXVsxXSkpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5hZnRlckluaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmFmdGVySW5pdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmFmdGVySW5pdCkge1xuICAgICAgICAgICAgdGhpcy5uZ09uSW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmF0aW8oKSB7XG5cbiAgICB9XG5cbn1cbiIsIjxkaXYgI2F2YXRhcj5cbiAgICB7e2xldHRlcn19XG48L2Rpdj5cbiJdfQ==