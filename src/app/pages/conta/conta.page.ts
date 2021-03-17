import {Component, OnInit} from '@angular/core';
import {Funcoes} from "../../services/funcoes";
import {ContaService} from "./conta.service";
import {ContaModel} from "../../classes/Conta.model";

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {
  contas: ContaModel[] = [];
  user: any;

  constructor(
    public f: Funcoes,
    private contaService: ContaService
  ) {
  }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.contaService.obterContasPorUsuario().subscribe(contas => {
      this.contas = contas;
    }, () => this.contas = []);
  }
}
