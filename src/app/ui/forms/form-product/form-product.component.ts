import { Component, Input, Output } from '@angular/core';
import { FormType, createForm } from 'ngx-sub-form';
import { Subject } from 'rxjs';
import { UntypedFormControl, Validators } from '@angular/forms';
import { ProductModel } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent {
  public manualSave$: Subject<void> = new Subject();
  private input$: Subject<ProductModel> = new Subject();
  @Input() set dataInput(value: ProductModel) {
    this.input$.next(value);
  }

  private disabled$: Subject<boolean> = new Subject();
  @Input() set disabled(value: boolean) {
    this.disabled$.next(!!value);
  }

  @Output() dataOutput: Subject<ProductModel> = new Subject();
  form = createForm<ProductModel>(this, {
    formType: FormType.ROOT,
    input$: this.input$,
    disabled$: this.disabled$,
    output$: this.dataOutput,
    manualSave$: this.manualSave$,
    formControls: {
      name: new UntypedFormControl(null, Validators.required),
      description: new UntypedFormControl(null, Validators.required),
      price: new UntypedFormControl(null, Validators.required),
      categoryId: new UntypedFormControl(null, Validators.required),
      //---
      id: new UntypedFormControl(null),
    },
  });
}
