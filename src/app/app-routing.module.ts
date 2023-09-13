import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  { path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule) }, 
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }, 
  { path: 'capacitaciones', loadChildren: () => import('./components/capacitaciones/capacitaciones.module').then(m => m.HomeModule) }, 
  { path: 'blog', loadChildren: () => import('./components/blog/blog.module').then(m => m.HomeModule) }, 
  { path: 'clientes', loadChildren: () => import('./components/clientes/clientes.module').then(m => m.HomeModule) }, 
  { path: 'contact', loadChildren: () => import('./components/contact/contact.module').then(m => m.HomeModule) }, 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
