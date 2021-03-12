import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-is-mat-icon',
    templateUrl: './is-mat-icon.component.html',
    styleUrls: ['./is-mat-icon.component.scss']
})
export class IsMatIconComponent implements OnInit {
    @Input() input: string;
    public display: string;
    public isIcon : boolean = false;

    constructor() {
    }

    ngOnInit(): void {
        if (this.input && this.input.indexOf(('icon.')) > -1){
            console.log('heheheeh', this.input)
            this.isIcon = true;
            this.display = this.input.split('.')[1];
        } else {
            this.isIcon = false;
            this.display = this.input;
        }
    }

}
