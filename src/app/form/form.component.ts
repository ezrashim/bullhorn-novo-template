import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NovoFormGroup, TextBoxControl, FormUtils } from 'novo-elements';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public textForm: NovoFormGroup;
  public textControl: TextBoxControl;
  public formControls: any;

  constructor(public formUtils: FormUtils) { }

  public ngOnInit(): void {
    this.setupForm();
  }

  public setupForm(): void {
    this.formControls = [];
    this.textControl = new TextBoxControl({
      label: 'Text',
      key: 'textKey',
      required: true,
    };
    this.emailControl = new TextBoxControl({
      label: 'Email',
      key: 'emailKey',
      required: true,
    })
    this.formControls.push(this.textControl, this.emailControl);
    this.textForm = this.formUtils.toFormGroup(this.formControls);
  }
}
