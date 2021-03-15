import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddTipoPageRoutingModule } from './add-tipo-routing.module';

import { AddTipoPage } from './add-tipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTipoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddTipoPage]
})
export class AddTipoPageModule {}
