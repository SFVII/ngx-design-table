import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PhoneDisplayComponent implements OnInit, OnChanges {
    number: string;
    display: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private normalize;
    static ɵfac: i0.ɵɵFactoryDef<PhoneDisplayComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PhoneDisplayComponent, "app-phone-display", never, { "number": "number"; }, {}, never>;
}
