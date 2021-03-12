import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
}
