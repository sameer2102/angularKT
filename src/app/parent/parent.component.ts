import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  xyz:number=20;
  familyName:string='ABC';
  childData:string=''
  constructor() { }

  ngOnInit(): void {
  }

  fromChild(data:any){
    this.childData = data;
  }

}
