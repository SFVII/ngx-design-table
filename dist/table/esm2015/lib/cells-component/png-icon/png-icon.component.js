import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["icon"];
export class PngIconComponent {
    constructor() {
        this.fontSize = '24px';
        this._padding = '5px';
        this._display = 'inline-flex';
        this._size = 'cover';
    }
    ngOnInit() {
        if (this.src) {
            this.icon.nativeElement.style.backgroundImage = `url(${this.src})`;
            this.icon.nativeElement.style.backgroundSize = this._size;
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.padding = this._padding;
            if (this.color) {
                this.icon.nativeElement.style.color = this.color;
            }
        }
    }
}
PngIconComponent.ɵfac = function PngIconComponent_Factory(t) { return new (t || PngIconComponent)(); };
PngIconComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PngIconComponent, selectors: [["png-icon"]], viewQuery: function PngIconComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.icon = _t.first);
    } }, inputs: { src: "src", fontSize: "fontSize", color: "color" }, decls: 2, vars: 0, consts: [["icon", ""]], template: function PngIconComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "span", null, 0);
    } }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PngIconComponent, [{
        type: Component,
        args: [{
                selector: 'png-icon',
                templateUrl: './png-icon.component.html',
                styleUrls: ['./png-icon.component.scss']
            }]
    }], function () { return []; }, { src: [{
            type: Input
        }], fontSize: [{
            type: Input
        }], color: [{
            type: Input
        }], icon: [{
            type: ViewChild,
            args: ['icon', { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG5nLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGFibGUvIiwic291cmNlcyI6WyJsaWIvY2VsbHMtY29tcG9uZW50L3BuZy1pY29uL3BuZy1pY29uLmNvbXBvbmVudC50cyIsImxpYi9jZWxscy1jb21wb25lbnQvcG5nLWljb24vcG5nLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBYyxLQUFLLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFPOUUsTUFBTSxPQUFPLGdCQUFnQjtJQVN6QjtRQVBTLGFBQVEsR0FBRyxNQUFNLENBQUM7UUFHbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsYUFBYSxDQUFDO1FBQ3pCLFVBQUssR0FBRyxPQUFPLENBQUM7SUFHeEIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdEQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNwRDtTQUNKO0lBQ0wsQ0FBQzs7Z0ZBeEJRLGdCQUFnQjtxREFBaEIsZ0JBQWdCOzs7Ozs7UUNQN0IsZ0NBRU87O2tEREtNLGdCQUFnQjtjQUw1QixTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFdBQVcsRUFBRSwyQkFBMkI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQzNDOztrQkFFSSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxTQUFTO21CQUFDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdwbmctaWNvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3BuZy1pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9wbmctaWNvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBuZ0ljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZvbnRTaXplID0gJzI0cHgnO1xuICAgIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gICAgQFZpZXdDaGlsZCgnaWNvbicsIHtzdGF0aWM6IHRydWV9KSBpY29uOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgICBwcml2YXRlIF9wYWRkaW5nID0gJzVweCc7XG4gICAgcHJpdmF0ZSBfZGlzcGxheSA9ICdpbmxpbmUtZmxleCc7XG4gICAgcHJpdmF0ZSBfc2l6ZSA9ICdjb3Zlcic7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3JjKSB7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5zcmN9KWA7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IHRoaXMuX3NpemU7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fZGlzcGxheTtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5mb250U2l6ZTtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuZm9udFNpemU7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5wYWRkaW5nID0gdGhpcy5fcGFkZGluZztcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCI8c3BhbiAjaWNvbj5cblxuPC9zcGFuPiJdfQ==