import { Component, Input, Output } from '@angular/core';
import { FormType, createForm } from 'ngx-sub-form';
import { Subject } from 'rxjs';
import { UntypedFormControl, Validators } from '@angular/forms';
import { ClientModel } from 'src/app/core/models/client.model';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent {
  public manualSave$: Subject<void> = new Subject();
  private input$: Subject<ClientModel> = new Subject();
  @Input() set dataInput(value: ClientModel) {
    this.input$.next(value);
  }

  private disabled$: Subject<boolean> = new Subject();
  @Input() set disabled(value: boolean) {
    this.disabled$.next(!!value);
  }

  @Output() dataOutput: Subject<ClientModel> = new Subject();
  form = createForm<ClientModel>(this, {
    formType: FormType.ROOT,
    input$: this.input$,
    disabled$: this.disabled$,
    output$: this.dataOutput,
    manualSave$: this.manualSave$,
    formControls: {
      lastName: new UntypedFormControl(null, Validators.required),
      firstName: new UntypedFormControl(null, Validators.required),
      phone: new UntypedFormControl(null, Validators.required),
      address: new UntypedFormControl(null, Validators.required),
      //---
      document: new UntypedFormControl(null),
    },
  });
}
