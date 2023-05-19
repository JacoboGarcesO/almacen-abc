import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsContainerComponent } from './products-container.component';
import { FormProductModule } from 'src/app/ui/forms/form-product/form-product.module';
import { ButtonModule } from 'src/app/ui/blocks/button/button.module';
import { ModalModule } from 'src/app/ui/blocks/modal/modal.module';
import { TableModule } from 'src/app/ui/blocks/table/table.module';

@NgModule({
  declarations: [
    ProductsContainerComponent
  ],
  imports: [
    CommonModule,
    FormProductModule,
    ButtonModule,
    ModalModule,
    TableModule
  ],
  exports: [
    ProductsContainerComponent
  ]
})
export class ProductsContainerModule { }
