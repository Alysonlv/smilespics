import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alv-mensagem',
  templateUrl: './mensagem.component.html',
  styles: []
})
export class MensagemComponent implements OnInit {
  @Input('texto') texto:String;
  @Input('tipo') tipo:String;

  constructor() {}

  ngOnInit() {
  }

}
