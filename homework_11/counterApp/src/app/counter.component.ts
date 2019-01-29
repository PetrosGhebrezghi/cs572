import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<div>
  <button (click)="decrease()">-</button>
  {{counterValue}}<button (click)="increase()">+</button>
  </div>`,
  styles: ['div{border:1px solid blue;width:30%;box-sizing: border-box;padding:20px;text-align:center;}']
})
export class CounterComponent implements OnInit {
  @Input() counterValue:number=5;
  @Output() counterchange;

  constructor() { 
    this.counterchange=new EventEmitter<Number>();
  }

  ngOnInit() {
  }
  increase():void{
    this.counterValue++;
    this.counterchange.emit(this.counterValue);
   
  }

  decrease():void{
    this.counterValue--;
       this.counterchange.emit(this.counterValue);
   

  }

}
