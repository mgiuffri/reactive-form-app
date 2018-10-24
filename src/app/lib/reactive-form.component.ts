import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Question} from './models/question.model';
import {Validator} from './models/validator.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: []
})
export class ReactiveFormComponent implements OnInit {

  @Output()
  submit = new EventEmitter<any>();

  @Input()
  questions: Question[];

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.buildForm();
  }

  buildForm() {
    const group = this.fb.group({});
    this.questions.forEach(question => {
      const control = this.fb.control(
        question.initialValue,
        this.buildValidators(question.validations || [])
      );
      group.addControl(question.name, control);
    });
    return group;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.formGroup.valid) {
      this.submit.emit(this.formGroup.value);
    }
  }

  private buildValidators(validators: Validator[]) {
    if (validators.length === 0) {
      return null;
    }
    const list = [];
    validators.forEach(v => {
      list.push(v.validator);
    });
    return Validators.compose(list);
  }

  private extractErrorsFromFormGroup(formGroup: FormGroup, errors: any = {}) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        errors[field] = control.errors;
      } else if (control instanceof FormGroup) {
        errors[field] = this.extractErrorsFromFormGroup(control);
      }
    });
    return errors;
  }
}
