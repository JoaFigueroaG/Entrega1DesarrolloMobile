import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Guia1Page } from './guia1.page';

const routes: Routes = [
  {
    path: '',
    component: Guia1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Guia1PageRoutingModule {}
