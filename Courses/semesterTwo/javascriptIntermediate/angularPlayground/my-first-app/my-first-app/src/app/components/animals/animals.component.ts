import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
})
export class AnimalsComponent implements OnInit {
  isShowing: boolean = true;

  animals: Animal[] = [];
  animal: Animal = new Animal('Rabbit', true, 4, true);
  constructor() {}

  ngOnInit(): void {
    this.animals.push(this.animal);
    this.animals.push(new Animal('Dog', true, 4, true));
    this.animals.push(new Animal('Cat', true, 4, false));
    console.log(this.animals);
  }
}
