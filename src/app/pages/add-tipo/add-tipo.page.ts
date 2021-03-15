import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Funcoes} from "../../services/funcoes";
import {TipoService} from "../tipo/tipo.service";
import {TipoModel} from "../../classes/Tipo.model";

@Component({
  selector: 'app-add-tipo',
  templateUrl: './add-tipo.page.html',
  styleUrls: ['./add-tipo.page.scss'],
})
export class AddTipoPage implements OnInit {
  user: any;
  id: string;
  tipo: TipoModel = {
    id: null,
    nome: null
  };


  constructor(
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private tipoService: TipoService,
    public f: Funcoes
  ) {
  }

  ionViewWillEnter() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.tipoService.obterTipoPorId(Number(this.id)).subscribe(tipo => {
        this.tipo = tipo;
      });
    }
  }

  ngOnInit() {

  }

  async submitForm() {
    if (this.tipo.nome) {
      if (this.tipo.id) {
        this.tipoService.editarTipo(this.tipo).subscribe(() => {
          alert('Tipo editado com sucesso');
          this.navController.navigateBack('/tipo');
        }, () => alert('Erro ao editar tipo'));
      } else {
        this.tipoService.cadastrarTipo(this.tipo).subscribe(() => {
          alert('Tipo cadastrado com sucesso');
          this.navController.navigateBack('/tipo');
        }, () => alert('Erro ao cadastrar tipo'));
      }
    }
  }

  deletarTipo() {
    if (this.tipo.id) {
      this.tipoService.deletarTipo(this.tipo.id).subscribe(() => {
        alert('Tipo deletado com sucesso');
        this.navController.navigateBack('/tipo');
      }, () => alert('Erro ao deletar'));
    }
  }

}
