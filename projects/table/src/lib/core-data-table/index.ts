import {from, Observable, Subject} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {debounceTime, pluck, share, startWith, switchMap} from "rxjs/operators";
import {DataSource} from "@angular/cdk/collections";

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


export class CoreMatTable extends DataSource<Element> {
    public page$: Observable<Page>;
    public totalElements: number;
    public number = 0;
    public size: any;
    public sort: MatSort;
    public paginator: MatPaginator;
    public data: any;
    private pageNumber = new Subject<number>();
    private pageSort = new Subject<Sort>();
    private pageFilter = new Subject<any>();
    private pageFilterDate = new Subject<FilterDateInterface>();

    constructor(data: any, sortRules: Sort,
                rangeRules: FilterDateInterface, size = 20, detailRaws: boolean = true) {
        super();
        this.size = size;
        this.data = [...data];
        this.totalElements = data.length;
        this.page$ = this.pageFilterDate.pipe(
            startWith(rangeRules),
            switchMap(range => this.pageFilter.pipe(debounceTime(500)).pipe(
                startWith(''),
                switchMap(filter => this.pageSort.pipe(
                    startWith(sortRules),
                    switchMap(sortAction => this.pageNumber.pipe(
                        startWith(0),
                        switchMap(page => from([{
                            content: this.slice(
                                this.sortData(
                                    this.filterData(
                                        this.filterDateRange(
                                            this.data, range
                                        ), filter
                                    ), sortAction
                                ), page, this.size, detailRaws)
                        }])),
                        share()
                    ))))
            )));
    }

    filterDateRange(data: any, range: FilterDateInterface) {
        if (!range.valueStart && !range.valueEnd) {
            return data;
        } else {
            return data.filter((e: any) => {
                if (range.valueStart && range.valueEnd) {
                    return new Date(e[range.active]) >= new Date(range.valueStart)
                        && new Date(e[range.active]) <= new Date(range.valueEnd);
                } else if (range.valueStart && !range.valueEnd) {
                    return new Date(e[range.active]) >= new Date(range.valueStart);
                } else if (!range.valueStart && range.valueEnd) {
                    return new Date(e[range.active]) <= new Date(range.valueEnd);
                }
            });
        }
    }

    ponderation(str: string, searchKey: string) {
        let stack: string[] = str.split(' ');
        let pond: number = 0;
        for (let s of stack) {
            let search: string = s.replace(new RegExp(' ', 'g'), '')
            if (search && search.includes(searchKey)) {
                pond++;
            }
        }
        return pond;
    }

    filterData(data: any, filter: any) {
        const result: any[] = [];
        if (filter && filter.replace(/[^a-zA-Z ]/g, " ")) {
            for (let e of data) {
                e.pond = 0;
                const dataRaw: string = JSON.stringify(e).toLowerCase()
                    .replace(/[^a-zA-Z0-9 ]/g, " ");
                const stack: string[] = filter.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, " ")
                    .split(' ');
                let combination: number = 0;
                for (let k of stack) {
                    if (dataRaw.includes(k)) {
                        const pond: number = this.ponderation(dataRaw, k);
                        if (!e.pond) {
                            e.pond = 0;
                        }
                        e.pond += pond;
                        combination++;
                    }
                }
                if (e.pond && combination === stack.length) {
                    result.push(e)
                }

            }
            return result.filter((e => e.pond)).sort((a, b) => a > b ? 1 : (a < b ? -1 : 0));
        } else {
            return data;
        }
    }

    sortData(data: any, sortAction: any) {
        if (sortAction.direction !== '') {
            return data.sort((a: any, b: any) => {
                return this.compare(a[sortAction.active], b[sortAction.active], sortAction.direction === 'asc');
            });
        } else {
            return data;
        }
    }

    compare(a: number | string | any[], b: number | string | any[], isAsc: boolean) {
        if (!a) {
            a = null;
        }
        if (!b) {
            b = null;
        }
        return (((Array.isArray(a) ? a.length : a) > ((Array.isArray(b) ? b.length : b)) ? -1 : 1) * (isAsc ? 1 : -1));
    }

    fetch(page: number): void {
        this.pageNumber.next(page);
    }

    sortIt(sortidea: any): void {
        this.pageSort.next(sortidea);
    }

    filter(myFilter: any): void {
        this.pageFilter.next(myFilter.target.value);
    }

    filterDate(dateFilter: FilterDateInterface): void {
        this.pageFilterDate.next(dateFilter);
    }

    connect(): Observable<any> {
        return this.page$.pipe(pluck('content'));
    }

    disconnect(): void {
    }

    slice(data: any[], start: number = 0, end: number = 20, detailRow: boolean = true): any {
        const rows = [];
        this.totalElements = data.length;
        data = data.slice(start * end, (start * end) + end);
        if (detailRow) {
            data.forEach(element => rows.push(element));
            return rows;
        } else {
            return data;
        }
    }
}
