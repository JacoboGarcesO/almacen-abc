import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsContainerComponent } from './clients-container.component';
import { FormClientModule } from 'src/app/ui/forms/form-client/form-client.module';
import { ButtonModule } from 'src/app/ui/blocks/button/button.module';
import { ModalModule } from 'src/app/ui/blocks/modal/modal.module';
import { TableModule } from 'src/app/ui/blocks/table/table.module';



@NgModule({
  declarations: [
    ClientsContainerComponent
  ],
  imports: [
    CommonModule,
    FormClientModule,
    ButtonModule,
    ModalModule,
    TableModule
  ],
  exports: [
    ClientsContainerComponent
  ]
})
export class ClientsContainerModule { }
