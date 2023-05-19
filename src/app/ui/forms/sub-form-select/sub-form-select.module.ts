import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubFormSelectComponent } from './sub-form-select.component';
import { DropdownModule } from '../../blocks/dropdown/dropdown.module';

@NgModule({
  declarations: [
    SubFormSelectComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule,
  ],
  exports: [
    SubFormSelectComponent,
  ],
})
export class SubFormSelectModule { }
