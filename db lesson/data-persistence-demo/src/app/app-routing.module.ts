import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-to-team',
    loadChildren: () => import('./add-to-team/add-to-team.module').then( m => m.AddToTeamPageModule)
  },
  {
    path: 'persistence-demo',
    loadChildren: () => import('./persistence-demo/persistence-demo.module').then( m => m.PersistenceDemoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
