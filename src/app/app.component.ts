import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName:string="App";
  enableButton:boolean=false;

  constructor(){
    setTimeout(() => {
      this.enableButton = true;
    }, 5000);
  }

  changeAppName(){
    this.appName = "MyApp";
  }

  onClick(){
    console.log("I am clicked!!");
  }

  showInput(event:any){
    this.appName = event.target.value
  }
}
