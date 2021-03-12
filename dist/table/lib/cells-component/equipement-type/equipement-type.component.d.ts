import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class EquipementTypeComponent implements OnInit, OnChanges {
    private changeDetectorRefs;
    name: string;
    type: string;
    size: number | string;
    icon: string;
    css: any;
    constructor(changeDetectorRefs: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<EquipementTypeComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<EquipementTypeComponent, "app-equipement-type", never, { "name": "name"; "type": "type"; "size": "size"; }, {}, never>;
}
