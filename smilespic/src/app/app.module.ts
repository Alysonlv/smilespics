import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { roteamento } from './app.route'

import { AppComponent } from './app.component';
import { PhotoModule } from './photo/photo.module';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { TmpltBaseComponent } from './tmplt-base/tmplt-base.component';

import { PhotoService } from './servicos/photo.service';
import { MensagemComponent } from './mensagem/mensagem.component';
import { DataProvider } from './providers/data.providers';
import { FilterByTitle } from "./listagem/filterByTitle.pipe";
import { MensagensProvider } from './providers/message.provider';
import { BotaoComponent } from './botao/botao.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent,
    TmpltBaseComponent,
    MensagemComponent,
    FilterByTitle,
    BotaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    
    PhotoModule,
    PainelModule,
    roteamento
  ],
  providers: [
    PhotoService,
    DataProvider,
    MensagensProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
