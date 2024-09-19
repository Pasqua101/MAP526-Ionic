import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailScreenPage } from './country-detail-screen.page';

const routes: Routes = [
  {
    path: '',
    component: CountryDetailScreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryDetailScreenPageRoutingModule { }
