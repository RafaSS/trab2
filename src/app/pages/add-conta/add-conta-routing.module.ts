import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddContaPage } from './add-conta.page';

const routes: Routes = [
  {
    path: '',
    component: AddContaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddContaPageRoutingModule {}
