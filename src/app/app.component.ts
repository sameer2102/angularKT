import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName:string="App";
  enableButton:boolean=false;
  arrNumber:number[]= [23,12,543,542,56,75,23];
  employees:any[] = [
    {employeeNo:'123',Name:"abc"},
    {employeeNo:'1435',Name:"sdf"},
    {employeeNo:'1543',Name:"gdf"},
    {employeeNo:'123423',Name:"dfs"}
  ];
//if-else
//forEach
//map
// filter

  constructor(){
    setTimeout(() => {
      this.enableButton = true;
    }, 5000);

    //ForEach
    this.arrNumber.forEach(item => {
        console.log(item);
    });

    this.employees.forEach(employee => {
      console.log("Employee No is "+ employee.employeeNo + " and Employee Name is "+employee.Name);
    });

    let newArray = this.arrNumber.map(item =>{
      return item * 2;
    });
    console.log(newArray);

   let evenArray =  this.arrNumber.filter(item =>{
      return item%2==0;
    });
    console.log(evenArray);

   let newEmployee =  this.employees.filter(employee =>{
      return employee.employeeNo == '1435';
    });
    console.log(newEmployee);
  }

  changeAppName(){
    this.appName = "MyApp";
  }

  onClick(){
    console.log("I am clicked!!");
    if(this.appName == 'App'){
      alert('Application name is App');
    }else{
      alert('Application name is not App, it is '+ this.appName);
    }
  }

  showInput(event:any){
    this.appName = event.target.value;

  }
}
