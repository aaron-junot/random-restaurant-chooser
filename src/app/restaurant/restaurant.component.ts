import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  chosenRestaurant: Restaurant;

  constructor() { }

  ngOnInit() {
  }

  setChoice(choice) {
    this.chosenRestaurant = choice.restaurant;
  }

  setURL() {
    const aTag = (<HTMLInputElement>document.getElementById("url"));
    aTag.setAttribute("href", this.chosenRestaurant.url);
  }

}
