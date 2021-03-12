import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class EquipementStatusComponent implements OnInit, OnChanges {
    private changeDetectorRefs;
    type: string;
    icon: string;
    size: number | string;
    css: any;
    constructor(changeDetectorRefs: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<EquipementStatusComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<EquipementStatusComponent, "app-equipement-status", never, { "type": "type"; "size": "size"; }, {}, never>;
}
