import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersistenceDemoPage } from './persistence-demo.page';

const routes: Routes = [
  {
    path: '',
    component: PersistenceDemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersistenceDemoPageRoutingModule {}
