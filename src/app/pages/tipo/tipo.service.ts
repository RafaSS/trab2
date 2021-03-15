import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {TipoModel} from "../../classes/Tipo.model";

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  constructor(private httpClient: HttpClient) {
  }

  obterTipos() {
    return this.httpClient.get<TipoModel[]>(`${environment.apiUrl}public/tipos/`);
  }

  obterTipoPorId(id: number) {
    return this.httpClient.get<TipoModel>(`${environment.apiUrl}public/tipos/${id}`);
  }

  deletarTipo(id: number) {
    return this.httpClient.delete<TipoModel>(`${environment.apiUrl}public/tipos/${id}`);
  }

  cadastrarTipo(tipo: TipoModel) {
    return this.httpClient.post<TipoModel>(`${environment.apiUrl}public/tipos/`, tipo);
  }

  editarTipo(tipo: TipoModel) {
    return this.httpClient.put<TipoModel>(`${environment.apiUrl}public/tipos/`, tipo);
  }
}
