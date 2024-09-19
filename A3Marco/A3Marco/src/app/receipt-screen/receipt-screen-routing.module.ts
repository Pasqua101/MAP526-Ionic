import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceiptScreenPage } from './receipt-screen.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiptScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceiptScreenPageRoutingModule {}
