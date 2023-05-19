import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormProductComponent } from './form-product.component';
import { ButtonModule } from '../../blocks/button/button.module';
import { SubFormInputModule } from '../sub-form-input/sub-form-input.module';
import { SubFormSelectModule } from '../sub-form-select/sub-form-select.module';
import { SubFormTextareaModule } from '../sub-form-textarea/sub-form-textarea.module';

@NgModule({
  declarations: [
    FormProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    SubFormInputModule,
    SubFormSelectModule,
    SubFormTextareaModule,
  ],
  exports: [
    FormProductComponent
  ]
})
export class FormProductModule { }
