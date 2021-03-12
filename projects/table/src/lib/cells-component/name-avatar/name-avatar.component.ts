import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'name-avatar',
    templateUrl: './name-avatar.component.html',
    styleUrls: ['./name-avatar.component.scss']
})
export class NameAvatarComponent implements OnInit, AfterViewInit {
    @Input() src: string;
    @Input() fontSize = '24px';
    @ViewChild('avatar', {static: true}) icon: ElementRef<HTMLElement>;
    public letter: string;
    private _padding = '4px';
    private _display = 'flex';
    private _borderRadius = '50px';
    private _size = 'cover';
    private afterInit = false;
    private defaultFontSize = 12;
    private defaultDimension = 24;

    constructor() {
    }

    ngOnInit() {
        if (this.src) {
            let deg: number = Math.random() * (10 - 360) + 10;
            this.icon.nativeElement.style.backgroundImage = `linear-gradient(${deg}deg, #9d107d, 
                                                             #8b3391, #7647a0, #5f56a8, #4862ab)`;
            this.icon.nativeElement.style.borderRadius = this._borderRadius;
            this.icon.nativeElement.style.marginLeft = '16px';
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.fontSize = (parseInt(this.fontSize, 0) / 2) + 'px';
            this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';
            this.icon.nativeElement.style.fontWeight = '900';
            this.icon.nativeElement.style.color = 'white';
            const tmp: string[] = this.src.split(' ');
            this.letter = (tmp[0][0] + (tmp[1] && tmp[1][0] ? tmp[1][0] : tmp[0][1])).toUpperCase();
        } else if (this.afterInit === false) {
            this.afterInit = true;
        }
    }

    ngAfterViewInit(): void {
        if (this.afterInit) {
            this.ngOnInit();
        }
    }

    getRatio() {

    }

}
