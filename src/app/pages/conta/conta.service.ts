import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioModel} from "../../classes/Usuario.model";
import {environment} from "../../../environments/environment";
import {ContaModel} from "../../classes/Conta.model";

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  obterContasPorUsuario() {
    const user: UsuarioModel = JSON.parse(localStorage.getItem('user'));
    return this.httpClient.get<ContaModel[]>(`${environment.apiUrl}public/contas/usuario/${user.id}`);
  }

  obterContaPorId(id: number) {
    return this.httpClient.get<ContaModel>(`${environment.apiUrl}public/contas/${id}`);
  }

  deletarConta(id: number) {
    return this.httpClient.delete<ContaModel>(`${environment.apiUrl}public/contas/${id}`);
  }

  cadastrarConta(tipo: ContaModel) {
    return this.httpClient.post<ContaModel>(`${environment.apiUrl}public/contas/`, tipo);
  }

  editarConta(tipo: ContaModel) {
    return this.httpClient.put<ContaModel>(`${environment.apiUrl}public/contas/`, tipo);
  }
}
