import {ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Question} from './models/question.model';
import {ComponentResolverService} from './component-resolver.service';

@Directive({
  selector: '[appQuestion]'
})
export class QuestionDirective implements OnInit {
  @Input() question: Question;
  @Input() formGroup: FormGroup;
  componentRef: any;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    private componentResolverService: ComponentResolverService
  ) {}
  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      this.componentResolverService.resolve(this.question.type)
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.question = this.question;
    this.componentRef.instance.group = this.formGroup;
  }
}
