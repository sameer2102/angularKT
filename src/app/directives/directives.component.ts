import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  hobby:string='';
  hobbies:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  addHobby(){
    this.hobbies.push(this.hobby);
    console.log(this.hobbies);
  }

}
