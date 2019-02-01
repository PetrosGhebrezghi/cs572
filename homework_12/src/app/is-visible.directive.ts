import { Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[isVisible]'
})
export class IsVisibleDirective {

  constructor(private templateRef:TemplateRef<any>,private container:ViewContainerRef) { }

 @Input() set myIf(condition:boolean){
    if(condition){
      this.container.createEmbeddedView(this.templateRef)
    }else{
      this.container.clear()
    }
 }

}
