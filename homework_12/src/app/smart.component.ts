import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <p>
        <app-dumb [data]="names"></app-dumb>
      </p>
      <input #val (click)='0'  />
      <p #dval (click)='0'>div element has been clicked</p>
   
<p isvisible [result]=true >paragraph is visible or not</p>
  `,
  styles: []
})
export class SmartComponent implements OnInit {
public names=['Petros', 'Selina', 'Mike'];
  constructor() { }


  ngOnInit() {
  }

  onClick(dval) {
    
    console.log(dval);
  }
}