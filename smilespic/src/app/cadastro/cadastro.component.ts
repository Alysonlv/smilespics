import { MensagemComponent } from './../mensagem/mensagem.component';
import { PhotoService } from './../servicos/photo.service';
import { Component, OnInit } from '@angular/core';
import { PhotoComponent } from './../photo/photo.component';
import { ActivatedRoute, Router } from "@angular/router";
import { DataProvider } from "../providers/data.providers";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MensagensProvider } from '../providers/message.provider';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {
  valor = 'Cadastro de Fotos';
  foto = new PhotoComponent();
  msgProvider: MensagensProvider;

  formCadastro: FormGroup;

  constructor(private photoService: PhotoService, private activeRoute:ActivatedRoute, private router: Router
          , private dataProvider: DataProvider
          , private formBuilder: FormBuilder) {

            this.formCadastro = formBuilder.group({
              titulo: ['', [Validators.required, Validators.minLength(3)]],
              url: ['', Validators.required],
              descricao: ''
            });
  }

  ngOnInit() {
    if (this.foto._id) {  
      this.activeRoute.params.subscribe(
        routeParameters => {
          this.photoService.pesquisar(routeParameters._id).subscribe(
            photo => { this.foto = photo; }
          );
        }
      );
    }    
  }

  salvar() {
console.log(this.foto);
    if (this.foto._id) {
      this.photoService.atualizar(this.foto).subscribe(
        response => {
          this.msgProvider = response;
          setTimeout(() => this.router.navigate(['']), 2000);          
        }
      );
      this.dataProvider.storage = "alson";
    } else {
      this.photoService.cadastrar(this.foto).subscribe(
        response => {
          this.msgProvider = response;
          setTimeout(() => this.router.navigate(['']), 2000);
        }
      );
    }

  }

}
