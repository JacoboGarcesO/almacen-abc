import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutMainModule } from 'src/app/ui/layout/layout-main/layout-main.module';
import { HeaderModule } from 'src/app/ui/blocks/header/header.module';
import { ProductsContainerModule } from 'src/app/shared/products-container/products-container.module';
import { ClientsContainerModule } from 'src/app/shared/clients-container/clients-container.module';
import { CategoriesContainerModule } from 'src/app/shared/categories-container/categories-container.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutMainModule,
    HeaderModule,
    ProductsContainerModule,
    ClientsContainerModule,
    CategoriesContainerModule
  ]
})
export class AdminModule { }
