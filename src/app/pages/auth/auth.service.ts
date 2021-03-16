import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsuarioModel} from "../../classes/Usuario.model";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }

  login(authModel: UsuarioModel): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${environment.apiUrl}public/usuarios/${authModel.email}/${authModel.senha}`);
  }

  register(usuario: UsuarioModel) {
    return this.http.post<UsuarioModel>(`${environment.apiUrl}public/usuarios/`, usuario);
  }

  verificarEmail(email: string) {
    return this.http.get<boolean>(`${environment.apiUrl}public/usuarios/${email}/exists}`);
  }

  editarSenha(usuario: UsuarioModel) {
    return this.http.put<UsuarioModel>(`${environment.apiUrl}public/usuarios/`, usuario);
  }

}
