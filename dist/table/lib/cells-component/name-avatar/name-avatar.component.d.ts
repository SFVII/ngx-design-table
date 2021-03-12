import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NameAvatarComponent implements OnInit, AfterViewInit {
    src: string;
    fontSize: string;
    icon: ElementRef<HTMLElement>;
    letter: string;
    private _padding;
    private _display;
    private _borderRadius;
    private _size;
    private afterInit;
    private defaultFontSize;
    private defaultDimension;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    getRatio(): void;
    static ɵfac: i0.ɵɵFactoryDef<NameAvatarComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NameAvatarComponent, "name-avatar", never, { "src": "src"; "fontSize": "fontSize"; }, {}, never>;
}
