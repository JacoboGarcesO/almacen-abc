import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { FloatingCardModule } from '../floating-card/floating-card.module';


@NgModule({
  declarations: [
    DropdownComponent,
  ],
  imports: [
    CommonModule,
    FloatingCardModule,
  ],
  exports: [
    DropdownComponent,
  ],
})
export class DropdownModule { }
