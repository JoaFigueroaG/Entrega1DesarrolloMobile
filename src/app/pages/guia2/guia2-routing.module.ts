import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Guia2Page } from './guia2.page';

const routes: Routes = [
  {
    path: '',
    component: Guia2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Guia2PageRoutingModule {}
