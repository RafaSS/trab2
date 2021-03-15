import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {UsuarioModel} from "../../../classes/Usuario.model";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users: any[] = [];
  user: UsuarioModel = {
    nome: null,
    senha: null,
    email: null
  };

  constructor(
    private navController: NavController,
    private loginService: AuthService,
    private router: Router
  ) {
  }

  ionViewWillEnter() {

  }

  async submitForm() {
    if (this.user.senha && this.user.email) {
      this.loginService.login(this.user).subscribe(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/inicio']);
      }, () => alert('Usuário não encontrado'));
    }
  }

  ngOnInit(): void {
  }

}
