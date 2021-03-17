import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Funcoes} from "../../services/funcoes";
import {ContaService} from "../conta/conta.service";
import {ContaModel} from "../../classes/Conta.model";
import {UsuarioModel} from "../../classes/Usuario.model";
import {TipoService} from "../tipo/tipo.service";
import {TipoModel} from "../../classes/Tipo.model";
import * as moment from "moment";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-conta',
  templateUrl: './add-conta.page.html',
  styleUrls: ['./add-conta.page.scss'],
})
export class AddContaPage implements OnInit {
  id: string;
  user: UsuarioModel;
  tipos: TipoModel[] = [];
  conta: ContaModel = {
    id: null,
    tipo: {
      id: null,
      nome: null
    },
    valor: null,
    dataVencimento: null,
    situacao: null,
    descricao: null,
    usuario: null
  };

  valor = new FormControl('', Validators.required);
  dataVencimento = new FormControl('', Validators.required);
  situacao = new FormControl('', Validators.required);
  nadescricaome = new FormControl('', Validators.required);
  usuario = new FormControl('', Validators.required);

  constructor(
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private contaService: ContaService,
    private tipoService: TipoService,
    public f: Funcoes
  ) {
  }

  ionViewWillEnter() {
    this.tipoService.obterTipos().subscribe(tipos => {
      this.tipos = tipos;
    });
    this.user = JSON.parse(localStorage.getItem('user'));
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.contaService.obterContaPorId(Number(this.id)).subscribe(conta => {
        this.conta = conta;
        this.conta.dataVencimento = moment(this.conta.dataVencimento).format('yyyy-MM-DD');
      });
    }
  }

  ngOnInit() {
  }

  async submitForm() {
    this.conta.dataVencimento = moment(this.conta.dataVencimento);
    if (this.id) {
      this.contaService.editarConta(this.conta).subscribe(() => {
        alert('Conta editada com sucesso');
        this.navController.navigateBack('/conta');
      }, () => alert('Erro ao editar conta'));
    } else {
      this.conta.usuario = this.user;
      this.conta.id = undefined;
      this.contaService.cadastrarConta(this.conta).subscribe(() => {
        alert('Conta cadastrada com sucesso');
        this.navController.navigateBack('/conta');
      }, () => alert('Erro ao cadastrar conta'));
    }
  }

  deletarConta() {
    if (this.conta.id) {
      this.contaService.deletarConta(this.conta.id).subscribe(() => {
        alert('Conta deletada com sucesso');
        this.navController.navigateBack('/conta');
      }, () => alert('Erro ao deletar conta'));
    }
  }

}
