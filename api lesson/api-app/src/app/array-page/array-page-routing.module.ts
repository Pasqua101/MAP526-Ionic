import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArrayPagePage } from './array-page.page';

const routes: Routes = [
  {
    path: '',
    component: ArrayPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArrayPagePageRoutingModule {}
