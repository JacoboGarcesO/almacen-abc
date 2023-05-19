import { Component, Input, Output } from '@angular/core';
import { FormType, createForm } from 'ngx-sub-form';
import { Subject } from 'rxjs';
import { CategoryModel } from 'src/app/core/models/category.model';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.scss']
})
export class FormCategoryComponent {
  public manualSave$: Subject<void> = new Subject();
  private input$: Subject<CategoryModel> = new Subject();
  @Input() set dataInput(value: CategoryModel) {
    this.input$.next(value);
  }

  private disabled$: Subject<boolean> = new Subject();
  @Input() set disabled(value: boolean) {
    this.disabled$.next(!!value);
  }

  @Output() dataOutput: Subject<CategoryModel> = new Subject();
  form = createForm<CategoryModel>(this, {
    formType: FormType.ROOT,
    input$: this.input$,
    disabled$: this.disabled$,
    output$: this.dataOutput,
    manualSave$: this.manualSave$,
    formControls: {
      name: new UntypedFormControl(null, Validators.required),
      description: new UntypedFormControl(null, Validators.required),
      //---
      id: new UntypedFormControl(null),
    },
  });
}
