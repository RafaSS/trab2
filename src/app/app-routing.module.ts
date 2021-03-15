import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {CanActiveService} from './services/can-active.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule),
    canActivate: [CanActiveService]
  },
  {
    path: 'tipo',
    loadChildren: () => import('./pages/tipo/tipo.module').then(m => m.TipoPageModule),
    canActivate: [CanActiveService]
  },
  {
    path: 'tipo/:id',
    loadChildren: () => import('./pages/tipo/tipo.module').then(m => m.TipoPageModule),
    canActivate: [CanActiveService]
  },
  {
    path: 'add-tipo',
    loadChildren: () => import('./pages/add-tipo/add-tipo.module').then(m => m.AddTipoPageModule),
    canActivate: [CanActiveService]
  },
  {
    path: 'add-tipo/:id',
    loadChildren: () => import('./pages/add-tipo/add-tipo.module').then(m => m.AddTipoPageModule),
    canActivate: [CanActiveService]
  },
  {
    path: 'conta',
    loadChildren: () => import('./pages/conta/conta.module').then(m => m.ContaPageModule),
    canActivate: [CanActiveService]
  },

  {
    path: 'conta/:id',
    loadChildren: () => import('./pages/conta/conta.module').then(m => m.ContaPageModule),
    canActivate: [CanActiveService]
  },
  {
    path: 'add-conta',
    loadChildren: () => import('./pages/add-conta/add-conta.module').then(m => m.AddContaPageModule),
    canActivate: [CanActiveService]
  },
  {
    path: 'add-conta/:id',
    loadChildren: () => import('./pages/add-conta/add-conta.module').then(m => m.AddContaPageModule),
    canActivate: [CanActiveService]
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
    canActivate: [CanActiveService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
