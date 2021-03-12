import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'app-phone-display',
    templateUrl: './phone-display.component.html',
    styleUrls: ['./phone-display.component.scss']
})
export class PhoneDisplayComponent implements OnInit, OnChanges {
    @Input() number: string;
    public display: string;

    constructor() {
    }

    ngOnInit(): void {
        this.display = this.normalize(this.number)
    }

    ngOnChanges(changes: SimpleChanges) {
        this.ngOnInit();
    }

    private normalize(str: string) {
        str = (str || '').replace(/[^\d]/g, "");
        if (str.length == 10) {
            //reformat and return phone number
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+33) $1.$2.$3.$4.$5");
        } else if (str.length > 10 && str.length <= 13) {
            if (str.length === 11) {
                str = '0'+str;
            }
            if ( str.length === 13 && str.includes('+')) {
                let tmp = str.slice(0, 3);
                let end = str.slice(3, str.length);
                str = tmp + '0' + end;
            }
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+$1) $2.$3.$4.$5.$6");
        }

        return null;
    }

}
