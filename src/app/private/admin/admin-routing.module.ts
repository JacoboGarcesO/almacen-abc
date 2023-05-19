import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesContainerComponent } from 'src/app/shared/categories-container/categories-container.component';
import { ClientsContainerComponent } from 'src/app/shared/clients-container/clients-container.component';
import { ProductsContainerComponent } from 'src/app/shared/products-container/products-container.component';
import { HeaderComponent } from 'src/app/ui/blocks/header/header.component';
import { LayoutMainComponent } from 'src/app/ui/layout/layout-main/layout-main.component';

const routes: Routes = [
  {
    path: 'products',
    component: LayoutMainComponent,
    children: [
      { path: '', component: HeaderComponent, outlet: 'aside' },
      { path: '', component: ProductsContainerComponent },
    ],
    canActivate: [],
  },
  {
    path: 'categories',
    component: LayoutMainComponent,
    children: [
      { path: '', component: HeaderComponent, outlet: 'aside' },
      { path: '', component: CategoriesContainerComponent },
    ],
    canActivate: [],
  },
  {
    path: 'clients',
    component: LayoutMainComponent,
    children: [
      { path: '', component: HeaderComponent, outlet: 'aside' },
      { path: '', component: ClientsContainerComponent },
    ],
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
