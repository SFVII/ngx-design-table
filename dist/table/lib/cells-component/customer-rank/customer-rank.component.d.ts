import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CustomerRankComponent implements OnInit, OnChanges {
    private changeDetectorRefs;
    type: string;
    typeClass: string;
    private _type;
    constructor(changeDetectorRefs: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<CustomerRankComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CustomerRankComponent, "app-customer-rank", never, { "type": "type"; }, {}, never>;
}
