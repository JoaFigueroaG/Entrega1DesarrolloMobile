import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Guia4Page } from './guia4.page';

const routes: Routes = [
  {
    path: '',
    component: Guia4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Guia4PageRoutingModule {}
