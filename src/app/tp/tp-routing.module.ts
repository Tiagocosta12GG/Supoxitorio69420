import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TpPage } from './tp.page';

const routes: Routes = [
  {
    path: '',
    component: TpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TpPageRoutingModule {}
