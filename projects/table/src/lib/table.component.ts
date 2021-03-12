import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {CellsComponentList} from "./setting/CellsComponentRegistry";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

import {CoreMatTable, CoreMatTableInterface, FilterDateInterface, Page, PageRequest, Sort} from "./core-data-table";
import {animate, state, style, transition, trigger} from "@angular/animations";

interface displayedColumnsInterface {
  key: string, // object key
  value: string, // display column values
  ratio?: number,
  order?: number, // sort column
  class?: string, // css class
  module?: CellsComponentList,
  override?: string | string[], // for building url or avatar name
  display?: string, // force displaying other stuff than element[focus]
  align?: string, // cell content align 'left center right'
  sort?: boolean // 'sortable column'
}

@Component({
  selector: 'ngx-design-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [trigger('detailExpand', [
    state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
    state('expanded', style({height: '*'})),
    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ])],
  encapsulation: ViewEncapsulation.None
})
class TableComponent implements OnInit {
  @ViewChild('MatPaginatorCurrent', {static: true}) paginatorCurrent: MatPaginator;
  @ViewChild('table', {static: true}) sortCurrent: MatSort;

  @Input() columnDefinitions: [displayedColumnsInterface];
  @Input() displayDetail: boolean = false;
  @Input() displayComponent: string;
  @Input() data: CoreMatTableInterface;
  public columnsToDisplay: string[];
  public filter: Array<string> = [];
  public displayedColumns: any;
  public expandedElement: any;
  public index = 0;


  constructor() {
  }

  ngOnInit(): void {
    this.expandedElement = false;
    this.data.paginator = this.paginatorCurrent;
    this.data.sort = this.sortCurrent;
    this.buildHeaders().catch((err: any) => console.log('Error build table', err));
  }

  async buildHeaders() {
    this.displayedColumns = await this.sort();
    if (this.displayedColumns) {
      this.columnsToDisplay = [];
      for (let k of this.displayedColumns) {
        this.columnsToDisplay.push(k.key);
      }
    }
  }

  generateClass(Class: string[]) {
    const MyClass: string[] = ['default-table-class'];
    for (let c of Class) {
      if (c && c !== '') {
        MyClass.push(c);
      }
    }
    return MyClass;
  }

  async sort() {
    const compare = (a: any, b: any) => {
      return (a.order < b.order ? -1 : (a.order > b.order ? 1 : 0))
    }
    if (this.columnDefinitions) {
      return this.columnDefinitions.sort(compare);
    }
  }

  public buildLink(override: string[], element) {
    if (override.length >= 2) {
      let basePath: string = override[0];
      for (let i = 1; i < override.length; i++) {
        basePath += '/' + element[override[i]];
      }
      return basePath;
    }
  }

  public Join(elem: any, override: string[], joinKey: string = '\n'): string {
    const value: string[] = [];
    for (let x in elem) {
      if (override.indexOf(x) > -1) {
        value.push(elem[x]);
      }
    }
    return value.join(joinKey)
  }

  reset() {
    this.data.filter({
      target: {
        value: ''
      }
    });
    return true;
  }

}

export {
  CoreMatTable,
  FilterDateInterface,
  CoreMatTableInterface,
  Page,
  PageRequest,
  Sort,
  displayedColumnsInterface,
  CellsComponentList,
  TableComponent
}
