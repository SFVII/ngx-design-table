import { OnInit } from '@angular/core';
import { CellsComponentList } from "./setting/CellsComponentRegistry";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { CoreMatTable, CoreMatTableInterface, FilterDateInterface, Page, PageRequest, Sort } from "./core-data-table";
import * as i0 from "@angular/core";
interface displayedColumnsInterface {
    key: string;
    value: string;
    ratio?: number;
    order?: number;
    class?: string;
    module?: CellsComponentList;
    override?: string | string[];
    display?: string;
    align?: string;
    sort?: boolean;
}
declare class TableComponent implements OnInit {
    paginatorCurrent: MatPaginator;
    sortCurrent: MatSort;
    columnDefinitions: [displayedColumnsInterface];
    displayDetail: boolean;
    displayComponent: string;
    data: CoreMatTableInterface;
    columnsToDisplay: string[];
    filter: Array<string>;
    displayedColumns: any;
    expandedElement: any;
    index: number;
    constructor();
    ngOnInit(): void;
    buildHeaders(): Promise<void>;
    generateClass(Class: string[]): string[];
    sort(): Promise<[displayedColumnsInterface]>;
    buildLink(override: string[], element: any): string;
    Join(elem: any, override: string[], joinKey?: string): string;
    reset(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<TableComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TableComponent, "ngx-design-table", never, { "columnDefinitions": "columnDefinitions"; "displayDetail": "displayDetail"; "displayComponent": "displayComponent"; "data": "data"; }, {}, never>;
}
export { CoreMatTable, FilterDateInterface, Page, PageRequest, Sort, displayedColumnsInterface, CellsComponentList, TableComponent };
