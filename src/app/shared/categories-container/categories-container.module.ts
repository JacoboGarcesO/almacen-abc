import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesContainerComponent } from './categories-container.component';
import { FormCategoryModule } from 'src/app/ui/forms/form-category/form-category.module';
import { ModalModule } from 'src/app/ui/blocks/modal/modal.module';
import { ButtonModule } from 'src/app/ui/blocks/button/button.module';
import { TableModule } from 'src/app/ui/blocks/table/table.module';

@NgModule({
  declarations: [
    CategoriesContainerComponent
  ],
  imports: [
    CommonModule,
    FormCategoryModule,
    ButtonModule,
    ModalModule,
    TableModule
  ],
  exports: [
    CategoriesContainerComponent
  ]
})
export class CategoriesContainerModule { }
