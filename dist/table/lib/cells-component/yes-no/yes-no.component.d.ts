import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
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
    static ɵfac: i0.ɵɵFactoryDef<YesNoComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<YesNoComponent, "app-yes-nox", never, { "valid": "valid"; "displayNo": "displayNo"; "displayYes": "displayYes"; "size": "size"; }, {}, never>;
}
