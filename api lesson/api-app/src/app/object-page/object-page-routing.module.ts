import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjectPagePage } from './object-page.page';

const routes: Routes = [
  {
    path: '',
    component: ObjectPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjectPagePageRoutingModule {}
