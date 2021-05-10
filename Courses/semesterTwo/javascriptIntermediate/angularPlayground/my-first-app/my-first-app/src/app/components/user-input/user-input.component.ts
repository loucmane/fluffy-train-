import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent implements OnInit {
  firstname: string = '';
  lastname: string = '';
  constructor() {}

  ngOnInit(): void {}
  handleChange(userInput: KeyboardEvent): void {
    console.log(userInput);
    this.firstname = (userInput.target as HTMLInputElement).value;
  }
  handleText(userInput: string): void {
    this.lastname = userInput;
  }
}
// userinput.target as HTMLInputElement also known as casting
