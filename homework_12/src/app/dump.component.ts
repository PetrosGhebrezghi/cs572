import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-dump',
  template: `
    <app-dump [names]="names"></app-dump>
  `,
  styles: []
})
export class SmartComponent implements OnInit {

  @Input() names: string[];
  constructor() { }

  ngOnInit() {
    
  }

}
