import {Component} from '@angular/core';
import {Validators} from '@angular/forms';

class Questions {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questions: Questions[] = [
    {
      type: 'text',
      name: 'name',
      questionText: 'What\'s your name?',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Name Required'
        },
        {
          name: 'minlength',
          validator: Validators.minLength(4),
          message: 'Name is too short'
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Accept only letters'
        }
      ]
    },
    {
      type: 'text',
      name: 'surname',
      questionText: 'What\'s your family name?',
      validations: [
        {
          name: 'required',
          validator: Validators.required,
          message: 'Name Required'
        },
        {
          name: 'pattern',
          validator: Validators.pattern('^[a-zA-Z]+$'),
          message: 'Accept only letters'
        }
      ]
    }
  ];

  onSubmit($event) {
    console.log($event);
  }
}
