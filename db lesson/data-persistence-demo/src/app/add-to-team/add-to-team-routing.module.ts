import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddToTeamPage } from './add-to-team.page';

const routes: Routes = [
  {
    path: '',
    component: AddToTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddToTeamPageRoutingModule {}
