import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Guia6Page } from './guia6.page';

const routes: Routes = [
  {
    path: '',
    component: Guia6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Guia6PageRoutingModule {}
