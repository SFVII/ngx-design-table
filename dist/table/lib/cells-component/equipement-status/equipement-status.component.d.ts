import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class EquipementStatusComponent implements OnInit, OnChanges {
    private changeDetectorRefs;
    type: string;
    icon: string;
    size: number | string;
    css: any;
    constructor(changeDetectorRefs: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
