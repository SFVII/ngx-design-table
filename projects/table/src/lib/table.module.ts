import {NgModule} from '@angular/core';
import {TableComponent} from './table.component';
import {CustomerRankComponent} from "./cells-component/customer-rank/customer-rank.component";
import {DateFormatComponent} from "./cells-component/date-format/date-format.component";
import {EquipementStatusComponent} from "./cells-component/equipement-status/equipement-status.component";
import {EquipementTypeComponent} from "./cells-component/equipement-type/equipement-type.component";
import {GenderComponent} from "./cells-component/gender/gender.component";
import {IsMatIconComponent} from "./cells-component/is-mat-icon/is-mat-icon.component";
import {NameAvatarComponent} from "./cells-component/name-avatar/name-avatar.component";
import {OriginComponent} from "./cells-component/origin/origin.component";
import {PhoneDisplayComponent} from "./cells-component/phone-display/phone-display.component";
import {PngIconModule} from "./cells-component/png-icon/png-icon.module";
import {PriorityComponent} from "./cells-component/priority/priority.component";
import {YesNoComponent} from "./cells-component/yes-no/yes-no.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatTooltipModule} from "@angular/material/tooltip";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {MatBadgeModule} from "@angular/material/badge";

@NgModule({
  declarations: [
    TableComponent,
    CustomerRankComponent,
    DateFormatComponent,
    EquipementStatusComponent,
    EquipementTypeComponent,
    GenderComponent,
    IsMatIconComponent,
    NameAvatarComponent,
    OriginComponent,
    PhoneDisplayComponent,
    PriorityComponent,
    YesNoComponent
  ],
  imports: [
    PngIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule,
    CommonModule,
    MatIconModule,
    RouterModule,
    MatBadgeModule
  ],
  exports: [
    TableComponent,
    CustomerRankComponent,
    DateFormatComponent,
    EquipementStatusComponent,
    EquipementTypeComponent,
    GenderComponent,
    IsMatIconComponent,
    NameAvatarComponent,
    OriginComponent,
    PhoneDisplayComponent,
    PriorityComponent,
    YesNoComponent,
    PngIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule,
    CommonModule,
    MatIconModule,
    RouterModule,
    MatBadgeModule
  ]
})
export class TableModule {
}
