import { Injectable } from '@angular/core';

@Injectable()
export class MensagensProvider {
    constructor(private _texto:String, private _tipo:String) {

    }

    get texto() {
        return this._texto;
    }

    get tipo() {
        return this._tipo;
    }
}