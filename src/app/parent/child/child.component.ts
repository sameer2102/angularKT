import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() xyzVariable:any;
  @Input() familyName:string='';
  @Output() toParent = new EventEmitter<string>();
  childName:string='';
  constructor() { }

  ngOnInit(): void {
  }

  sendDataToParent(){
    this.toParent.emit(this.childName);
  }
}
