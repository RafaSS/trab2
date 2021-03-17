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
  }

  async submitForm() {
    if (this.user.senha && this.user.email && this.user.nome) {
      this.authService.verificarEmail(this.user.email).subscribe(() => {
        this.authService.register(this.user).subscribe(user => {
          alert('Cadastrado com sucesso');
          this.navController.navigateBack('/auth/login');
        }, () => alert('Erro ao cadastrar'));
      }, () => alert('Email já existe'));
    }
  }
}
