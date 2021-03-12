import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
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
}
