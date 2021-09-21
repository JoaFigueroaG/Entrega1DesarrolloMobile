import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Guia3Page } from './guia3.page';

const routes: Routes = [
  {
    path: '',
    component: Guia3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Guia3PageRoutingModule {}
