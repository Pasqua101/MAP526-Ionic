import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';

// NOTE: When using tabbar - children variable is only used to for whatever pages the tabbar can naviagte to/needs to be visible for. 
// For something like an onclick event in a list that navigates to another page, keep it outside of the children. 
// However, this will hide the tab bar on that other page.
const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'favorites-screen',
        loadChildren: () => import('./favorites-screen/favorites-screen.module').then( m => m.FavoritesScreenPageModule)
      },
      {
        path: 'country-detail-screen',
        loadChildren: () => import('./country-detail-screen/country-detail-screen.module').then( m => m.CountryDetailScreenPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
