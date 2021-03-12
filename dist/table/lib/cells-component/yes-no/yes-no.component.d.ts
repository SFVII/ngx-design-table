import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class YesNoComponent implements OnInit, OnChanges {
    valid: boolean;
    displayNo: boolean;
    displayYes: boolean;
    size: any;
    icon: string;
    css: any;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
