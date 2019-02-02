import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  template: 
`
  <h1> App Components</h1>
  <a [routerLink] = "['/']">Home</a>
  <br>
  <a [routerLink] = "['users']"> Users </a>
  <router-outlet></router-outlet>
`,
  styles:["background-color:lightgreen"]
})
export class AppComponent {

  constructor(data : DataService) {
    data.getOnlineData();
  }

}
