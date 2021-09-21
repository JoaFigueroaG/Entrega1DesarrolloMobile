import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'guia1',
    loadChildren: () => import('./pages/guia1/guia1.module').then( m => m.Guia1PageModule)
  },
  {
    path: 'guia2',
    loadChildren: () => import('./pages/guia2/guia2.module').then( m => m.Guia2PageModule)
  },
  {
    path: 'guia3',
    loadChildren: () => import('./pages/guia3/guia3.module').then( m => m.Guia3PageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'guia4',
    loadChildren: () => import('./pages/guia4/guia4.module').then( m => m.Guia4PageModule)
  },
  {
    path: 'guia5',
    loadChildren: () => import('./pages/guia5/guia5.module').then( m => m.Guia5PageModule)
  },
  {
    path: 'guia6',
    loadChildren: () => import('./pages/guia6/guia6.module').then( m => m.Guia6PageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
