import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class CustomerRankComponent implements OnInit, OnChanges {
    private changeDetectorRefs;
    type: string;
    typeClass: string;
    private _type;
    constructor(changeDetectorRefs: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
