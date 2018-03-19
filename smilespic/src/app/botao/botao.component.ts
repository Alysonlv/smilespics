import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alv-botao',
  template: `
  <button (click)="executaAcao()" type="{{tipo}}" class="btn btn-{{estilo}}" value="{{texto}}">
    <ng-Content></ng-Content>
  </button>`,
  styles: []
})
export class BotaoComponent {
  @Input() texto = 'OK';
  @Input() estilo = 'secondary';
  @Input() tipo = 'button';
  @Input() confirmacao = false;
  @Output() acao = new EventEmitter();
  
  executaAcao() {
    if (!this.confirmacao || confirm('Are you sure?')) {
      this.acao.emit();
    }
  }

}
