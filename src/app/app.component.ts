import { Component, OnInit, AfterContentInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'test-AppPedidosNew';

  pokemon: any;

  public showDiv: boolean = false;

  constructor() {
    setTimeout(() => {
      this.showDiv = true;
    }, 5000);
  }
  ngOnInit(): void {

  }



}





