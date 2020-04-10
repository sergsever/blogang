import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  state : string = "init";

  constructor() { }

  ngOnInit(): void {
    this.state = 'oninit';
  }

  getState(state: string) 
  {
    console.log('app: getstate():' + state);
    this.state = state;
  }

}
