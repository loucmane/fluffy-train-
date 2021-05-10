import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  firstname: string = 'Melina';
  isShowing: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggle(): void {
    this.isShowing = !this.isShowing;
  }
}
// när typear man en funktion som void och vilka andra typer kan man lägga på funktioner

//void används när vi inte får tillbaka något värde från en funktion. Utan de ändrar egenskaper på klasserna tex.

//
