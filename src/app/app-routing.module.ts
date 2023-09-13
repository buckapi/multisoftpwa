import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule) }, 
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
