import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class GenderComponent implements OnInit, OnChanges {
    type: string;
    size: number;
    icon: string;
    css: any;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
