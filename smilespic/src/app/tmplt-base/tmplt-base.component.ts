import { Component, OnInit, Input, Directive } from '@angular/core';

@Component({
  selector: 'alv-tmplt-base',
  templateUrl: './tmplt-base.component.html',
  styles: []
})
export class TmpltBaseComponent {
  @Input('tmpltitulo') titulo: String

  constructor() {
    //console.log('tmpltitulo = ' + this.tmpltitulo);
    //this.titulo = this.tmpltitulo;
  }

}
