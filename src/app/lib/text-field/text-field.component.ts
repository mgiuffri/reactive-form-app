import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Question} from '../models/question.model';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})
export class TextFieldComponent implements OnInit {
  question: Question;
  group: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
