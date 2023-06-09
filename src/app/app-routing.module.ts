import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public.module')
      .then((module) => module.PublicModule),
  },
  {
    path: '',
    loadChildren: () => import('./private/private.module')
      .then((module) => module.PrivateModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
  })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
