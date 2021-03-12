import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'icon-priority',
    templateUrl: './priority.component.html',
    styleUrls: ['./priority.component.scss']
})
export class PriorityComponent implements OnInit, OnChanges {
    @Input() icon: string;
    public iconSrc : string;

    constructor() {
    }

    ngOnInit(): void {
        const list = [{
            "label": "5 - Critique (Production)",
            "data": "assets/icons/nowteam/critiqueprod.png"
        }, {
            "label": "4 - Critique",
            "data": "assets/icons/nowteam/critique.png"
        }, {
            "label": "3 - Urgente",
            "data": "assets/icons/nowteam/urgent.png"
        }, {
            "label": "2 - Normale",
            'data': "assets/icons/nowteam/normal.png"
        }, {
            "label": "1 - Basse",
            "data": "assets/icons/nowteam/basse.png"
        }];
        const data: any = list.filter((e: any) => {
            return this.icon.includes(e.label);
        });
        if (data && data.length) {
            this.iconSrc = data[0].data
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        this.ngOnInit();
    }

}
