import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubFormTextareaComponent } from './sub-form-textarea.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SubFormTextareaComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    SubFormTextareaComponent,
  ],
})
export class SubFormTextareaModule { }
