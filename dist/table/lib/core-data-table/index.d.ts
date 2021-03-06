import { Observable } from "rxjs";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { DataSource } from "@angular/cdk/collections";
export interface Sort {
    active: string;
    direction: 'asc' | 'desc';
}
export interface PageRequest {
    page: number;
    size: number;
    sort?: Sort;
}
export interface Page {
    content: any;
}
export interface CoreMatTableInterface {
    page$: Observable<any>;
    totalElements: number;
    paginator: MatPaginator;
    number: number;
    data: any[];
    size: number;
    fetch: (page: any) => void;
    connect: () => void;
    disconnect: () => void;
    sort: MatSort;
    sortIt: (sortidea: any) => void;
    filter: (myFilter: any) => void;
    filterDate: (dateFilter: FilterDateInterface) => void;
}
export interface FilterDateInterface {
    active: string;
    valueStart: Date;
    valueEnd: Date;
}
export declare class CoreMatTable extends DataSource<Element> {
    page$: Observable<Page>;
    totalElements: number;
    number: number;
    size: any;
    sort: MatSort;
    paginator: MatPaginator;
    data: any;
    private pageNumber;
    private pageSort;
    private pageFilter;
    private pageFilterDate;
    constructor(data: any, sortRules: Sort, rangeRules: FilterDateInterface, size?: number, detailRaws?: boolean);
    filterDateRange(data: any, range: FilterDateInterface): any;
    ponderation(str: string, searchKey: string): number;
    filterData(data: any, filter: any): any;
    sortData(data: any, sortAction: any): any;
    compare(a: number | string | any[], b: number | string | any[], isAsc: boolean): number;
    fetch(page: number): void;
    sortIt(sortidea: any): void;
    filter(myFilter: any): void;
    filterDate(dateFilter: FilterDateInterface): void;
    connect(): Observable<any>;
    disconnect(): void;
    slice(data: any[], start?: number, end?: number, detailRow?: boolean): any;
}
