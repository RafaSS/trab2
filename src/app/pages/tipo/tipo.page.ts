import {Component, OnInit} from '@angular/core';
import {Funcoes} from "../../services/funcoes";
import {TipoService} from "./tipo.service";
import {TipoModel} from "../../classes/Tipo.model";

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.page.html',
  styleUrls: ['./tipo.page.scss'],
})
export class TipoPage implements OnInit {
  tipos: TipoModel[] = [];
  user: any;

  constructor(
    public f: Funcoes,
    private tipoService: TipoService
  ) {
  }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.tipoService.obterTipos().subscribe(tipos => {
      this.tipos = tipos;
    });
  }

}
