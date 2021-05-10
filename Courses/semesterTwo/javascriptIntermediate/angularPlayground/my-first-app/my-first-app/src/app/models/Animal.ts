export class Animal {
  breed: string;
  mammal: boolean;
  legs: number;
  isFed: boolean;

  constructor(breed: string, mammal: boolean, legs: number, isfed: boolean) {
    this.breed = breed;
    this.mammal = mammal;
    this.legs = legs;
    this.isFed = isfed;
  }
}
