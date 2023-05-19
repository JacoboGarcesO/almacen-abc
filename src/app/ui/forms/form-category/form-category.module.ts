import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCategoryComponent } from './form-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../blocks/button/button.module';
import { SubFormInputModule } from '../sub-form-input/sub-form-input.module';
import { SubFormTextareaModule } from '../sub-form-textarea/sub-form-textarea.module';

@NgModule({
  declarations: [
    FormCategoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    SubFormInputModule,
    SubFormTextareaModule,
  ],
  exports: [
    FormCategoryComponent
  ]
})
export class FormCategoryModule { }
