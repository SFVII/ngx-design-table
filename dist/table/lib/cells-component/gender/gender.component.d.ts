import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class GenderComponent implements OnInit, OnChanges {
    type: string;
    size: number;
    icon: string;
    css: any;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<GenderComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GenderComponent, "app-gender", never, { "type": "type"; "size": "size"; }, {}, never>;
}
