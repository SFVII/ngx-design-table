import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-gender',
    templateUrl: './gender.component.html',
    styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit, OnChanges {
    @Input() type: string;
    @Input() size: number;
    public icon: string;
    public css: any = {}

    constructor() {
    }

    ngOnInit(): void {
        this.css.maxWidth = String((this.size || 40)) + 'px';
        this.css.maxHeight = String((this.size || 40)) + 'px';
        const params: any = {
            "m": "/assets/icons/nowteam/salutations/man.png",
            "mme": "/assets/icons/nowteam/salutations/woman.png",
        }

        const clean: string = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        if (params[clean]) {
            this.icon = params[clean]
        } else {
            this.css.maxWidth = String(((this.size || 40) - 10)) + 'px';
            this.css.maxHeight = String(((this.size || 40) - 10)) + 'px';
            this.icon = "/assets/icons/status/HS.png";
        }
    }

    ngOnChanges(changes: SimpleChanges) {

        this.ngOnInit()
    }

}
