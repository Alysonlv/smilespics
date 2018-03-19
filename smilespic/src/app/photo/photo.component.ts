import { Component, Input } from '@angular/core';

@Component({
    selector: 'photo',
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
    @Input() url = '';
    @Input() titulo = '';
    @Input() descricao = '';
    @Input() _id = '';

    constructor() {}
}