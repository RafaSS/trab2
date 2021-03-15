import {Moment} from "moment";
import {TipoModel} from "./Tipo.model";
import {UsuarioModel} from "./Usuario.model";

export interface ContaModel {
  id: number;
  dataVencimento: Moment;
  situacao: boolean;
  usuario: UsuarioModel;
  descricao: string;
  tipo: TipoModel;
  valor: string;
}
