import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'icon-origin',
    templateUrl: './origin.component.html',
    styleUrls: ['./origin.component.scss']
})
export class OriginComponent implements OnInit, OnChanges  {
    @Input() icon: string;
    public iconSrc: string;

    constructor() {
    }

    ngOnInit(): void {
        const list = [{
            "label": "Web",
            "data": "assets/icons/nowteam/Web.png"
        }, {
            "label": "PRTG",
            "data": "assets/icons/nowteam/PRTG.png"
        }, {
            "label": "Mail",
            "data": "assets/icons/nowteam/Mail.png"
        }, {
            "label": "Téléphone",
            "data": "assets/icons/nowteam/Telephone.png"
        }, {
            "label": "Bot",
            "data": "assets/icons/nowteam/Bot.png"
        }];
        const flter = list.filter((e: any) => {
            return this.icon.includes(e.label);
        });
        this.iconSrc = flter && flter.length && flter[0].data ? flter[0].data : '';
    }

    ngOnChanges(changes: SimpleChanges) {
        this.ngOnInit();
    }

}
