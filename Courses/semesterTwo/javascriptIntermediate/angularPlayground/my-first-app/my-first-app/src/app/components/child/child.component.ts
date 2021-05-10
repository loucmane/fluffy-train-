import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() firstname: string; //input needs a value. property binding. in this case we make firstname take the value of name from the app component.
  constructor() {}

  ngOnInit(): void {}
}
