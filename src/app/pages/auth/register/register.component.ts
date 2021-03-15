import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {AuthService} from "../auth.service";
import {UsuarioModel} from "../../../classes/Usuario.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  users: any[] = [];
  user: UsuarioModel = {
    nome: null,
    senha: null,
    email: null
  };

  constructor(
    private navController: NavController,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.users = JSON.parse(localStorage.getItem('users'));
    if (!this.users) {
      this.users = [];
    }
  }

  async submitForm() {
    if (this.user.senha && this.user.nome) {
      this.authService.verificarEmail(this.user.email).subscribe(() => {
        this.authService.register(this.user).subscribe(user => {
          localStorage.setItem('user', JSON.stringify(user));
          this.navController.navigateBack('/auth/login');
        }, () => alert('Erro ao cadastrar'));
      }, () => alert('Email já existe'));
    }
  }
}
