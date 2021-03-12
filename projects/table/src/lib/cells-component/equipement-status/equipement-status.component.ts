import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-equipement-status',
    templateUrl: './equipement-status.component.html',
    styleUrls: ['./equipement-status.component.scss']
})
export class EquipementStatusComponent implements OnInit, OnChanges {
    @Input() type: string;
    public icon: string;
    @Input() size: number | string;
    public css: any = {}

    constructor(private changeDetectorRefs: ChangeDetectorRef) {
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
    }

    ngOnInit(): void {
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        const params: any = {
            "actif": "/assets/icons/status/actif.png",
            "oui": "/assets/icons/status/actif.png",
            "hs": "/assets/icons/status/HS.png",
            "inactif": "/assets/icons/status/inactif.png",
            "non": "/assets/icons/status/inactif.png",
            "spare": "/assets/icons/status/spare.png",
        }
        const clean: string = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean];
        }
        this.changeDetectorRefs.detectChanges();
    }

    ngOnChanges(changes: SimpleChanges) {
        this.ngOnInit();
    }

}
