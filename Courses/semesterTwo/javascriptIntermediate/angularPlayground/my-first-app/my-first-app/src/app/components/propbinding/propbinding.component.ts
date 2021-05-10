import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propbinding',
  templateUrl: './propbinding.component.html',
  styleUrls: ['./propbinding.component.scss'],
})
export class PropbindingComponent implements OnInit {
  imageUrl: string =
    'https://t2.genius.com/unsafe/220x0/https%3A%2F%2Fimages.genius.com%2F7a13f619ead13f4218161cbf706a596b.1000x1000x1.png';
  constructor() {}

  imageSize: string = 'small';

  boxBind: string = 'greenBox';

  ngOnInit(): void {}
}
