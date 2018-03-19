import { MensagemComponent } from './../mensagem/mensagem.component';
import { PhotoComponent } from './../photo/photo.component';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import { map } from "rxjs/operators";
import 'rxjs/add/operator/map';
import { MensagensProvider } from '../providers/message.provider';

const PHOTO_SERVICE_URL   = 'http://localhost:3000/v1/fotos/';
const REQUEST_HEADER      = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

@Injectable()
export class PhotoService {
    msgProvider: MensagensProvider;

    constructor(private httpClient: HttpClient) {

    }

    listar(): Observable<PhotoComponent[]> {
        return this.httpClient.get<PhotoComponent[]>(PHOTO_SERVICE_URL);
    }

    cadastrar(photo: PhotoComponent): Observable<MensagensProvider> {
        return this.httpClient.post(
                    PHOTO_SERVICE_URL
                    , photo
                    , REQUEST_HEADER
                ).map(
                    response => {
                        return new MensagensProvider(`${photo.titulo} inserida com sucesso`, 'success');
                    }
                );
    }

    deletar(photo: PhotoComponent): Observable<MensagensProvider> {
        return this.httpClient.delete(
                    PHOTO_SERVICE_URL + photo._id
                    , REQUEST_HEADER
                ).map(
                    response => {
                        return new MensagensProvider(`${photo.titulo} deletada com sucesso`, 'success');
                    }
                );
    }

    atualizar(photo: PhotoComponent): Observable<MensagensProvider> {
        return this.httpClient.put(
                    PHOTO_SERVICE_URL + photo._id
                    , photo
                    , REQUEST_HEADER
                ).map(
                    response => {
                        return new MensagensProvider(`${photo.titulo} atualizada com sucesso`, 'success');
                    }
                );
    }

    pesquisar(_id: String): Observable<PhotoComponent>  {
        return this.httpClient.get<PhotoComponent>(PHOTO_SERVICE_URL + _id);
    }

};