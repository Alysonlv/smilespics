import { PhotoComponent } from './../photo/photo.component';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from "../servicos/photo.service";
import { DataProvider } from "../providers/data.providers";

@Component({
  selector: 'alv-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {
  titulo = 'Listagem de Fotos';
  
  photos:PhotoComponent[] = [];

  tmpltitulo = 'Listagem de Fotos';

  mensagem:String;

  msgServico: any;

  constructor(private photoService: PhotoService, private dataProvider: DataProvider) {
    this.photoService.listar().subscribe(
      response => this.photos = response
      , error => console.error(error)
      , function() {
        console.log('carregado com sucesso')
      }
    );

    console.log(dataProvider);
    this.msgServico = dataProvider.storage;
  }

  ngOnInit() {
  }

  apagar(photo:PhotoComponent) {
    this.photoService.deletar(photo).subscribe(
      () => {
        this.photos = this.photos.filter(e => e !== photo);
        
        this.mensagem  = `${photo.titulo} apagada com sucesso`;

        setTimeout(() => this.mensagem = '', 2000);
      }
      , error => console.error('error ao remover foto: ' + photo._id)
    );
    console.info('removido com sucesso');
  }

}
