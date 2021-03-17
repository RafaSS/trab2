import {Component, OnInit} from '@angular/core';
import {Funcoes} from "../../services/funcoes";
import {ContaService} from "../conta/conta.service";
import {ContaModel} from "../../classes/Conta.model";
import {TipoService} from "../tipo/tipo.service";
import {TipoModel} from "../../classes/Tipo.model";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  user: any;
  contas: ContaModel[] = [];
  tipos: TipoModel[] = [];

  constructor(
    public f: Funcoes,
    private contaService: ContaService,
    private tipoService: TipoService
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.contaService.obterContasPorUsuario().subscribe(contas => {
      if (contas) {
        this.contas = contas;
      } else {
        this.contas = [];
      }
    });
    this.tipoService.obterTipos().subscribe(tipos => {
      if (tipos) {
        this.tipos = tipos;
      } else {
        this.tipos = [];
      }
    });
  }
}
