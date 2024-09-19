import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesScreenPage } from './favorites-screen.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritesScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesScreenPageRoutingModule { }
