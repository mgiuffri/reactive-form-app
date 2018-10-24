import {NgModule} from '@angular/core';
import {ReactiveFormComponent} from './reactive-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TextFieldComponent} from './text-field/text-field.component';
import {QuestionDirective} from './question.directive';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ReactiveFormComponent,
    QuestionDirective,
    TextFieldComponent],
  exports: [ReactiveFormComponent, TextFieldComponent],
  entryComponents: [
    TextFieldComponent
  ]
})
export class ReactiveFormModule {
}
