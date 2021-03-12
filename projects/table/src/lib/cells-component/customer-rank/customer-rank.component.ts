import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-customer-rank',
    templateUrl: './customer-rank.component.html',
    styleUrls: ['./customer-rank.component.scss']
})
export class CustomerRankComponent implements OnInit, OnChanges {
    @Input() type: string;
    public typeClass: string;
    private _type: string;

    constructor(private changeDetectorRefs: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this._type = (this.type || '').replace(/[^A-Z0-9]+/ig, "")
        if (this._type.toLocaleLowerCase() === 'gold') {
            this.typeClass = 'gold'
            this.type = this.type.toUpperCase()
        } else if (this._type.toLocaleLowerCase() === 'silver') {
            this.typeClass = 'silver'
            this.type = this.type.toUpperCase()
        } else if (this._type.toLocaleLowerCase() === 'bronze') {
            this.typeClass = 'bronze'
            this.type = this.type.toUpperCase()
        } else {
            this.type = 'Classic'.toUpperCase();
            this.typeClass = 'default'
        }
        this.changeDetectorRefs.detectChanges();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.ngOnInit();
    }
}
