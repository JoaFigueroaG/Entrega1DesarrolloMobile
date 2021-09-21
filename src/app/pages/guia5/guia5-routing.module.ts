import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Guia5Page } from './guia5.page';

const routes: Routes = [
  {
    path: '',
    component: Guia5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Guia5PageRoutingModule {}
