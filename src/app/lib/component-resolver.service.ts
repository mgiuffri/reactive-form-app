import { Injectable } from '@angular/core';
import {TextFieldComponent} from './text-field/text-field.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentResolverService {

  constructor() { }

  private components = {
    text: TextFieldComponent
  };

  resolve(type: String): any {
    return this.components[`${type}`];
  }
}
