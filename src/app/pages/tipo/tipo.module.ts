import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TipoPageRoutingModule } from './tipo-routing.module';

import { TipoPage } from './tipo.page';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    TipoPageRoutingModule
  ],
  declarations: [TipoPage]
})
export class TipoPageModule {}
