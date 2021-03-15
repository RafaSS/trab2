import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddContaPageRoutingModule } from './add-conta-routing.module';

import { AddContaPage } from './add-conta.page';
import { BrMaskerModule } from 'br-mask';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrMaskerModule,
    AddContaPageRoutingModule
  ],
  declarations: [AddContaPage]
})
export class AddContaPageModule {}
