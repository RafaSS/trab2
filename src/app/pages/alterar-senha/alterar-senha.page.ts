import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {UsuarioModel} from 'src/app/classes/Usuario.model';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.page.html',
  styleUrls: ['./alterar-senha.page.scss'],
})
export class AlterarSenhaPage implements OnInit {

  senha: string;
  senha2: string;
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
    this.user = JSON.parse(localStorage.getItem('user'));
    if (!this.user) {
      this.user = null;
    }
  }

  async submitForm() {
    if (this.senha === this.senha2) {
      if (this.user) {
        this.user.senha = this.senha;
        console.log(this.user.nome, "NOME");
      }
      if (this.user.senha && this.user.nome) {
        console.log(this.user.senha);
        this.authService.editarSenha(this.user).subscribe(() => {

          alert('senha editada com sucesso');
          this.navController.navigateBack('/inicio');
        }, () => alert('Erro ao editar senha'));

      }
    } else {
      alert('Senhas não coincidem');
    }

  }

}
