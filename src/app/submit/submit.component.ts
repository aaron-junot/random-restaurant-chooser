import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationService } from '../location.service';
import { ZomatoService } from '../zomato.service';
declare var System: any;

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(
    private locationService: LocationService,
    private zomatoService: ZomatoService) {}

  ngOnInit() {
  }

  onSubmit() {
    let zKey;
    let gKey;

    const zip = (<HTMLInputElement>document.getElementById("zipcode")).value;
    const distance = (<HTMLInputElement>document.getElementById("distance")).value;

    System.import('../../assets/apikeys.json').then((file)=> {
      zKey = file['zomato-key'];
      gKey = file['google-key'];

      this.locationService.getLocationData(gKey, zip)
      .subscribe(data => {
        const lat = data.results[0].geometry.location.lat;
        const lng = data.results[0].geometry.location.lng;
        const radius = distance*1609.344; // convert miles to meters

        this.zomatoService.getRestaurantData(zKey, lat, lng, radius)
        .subscribe(data => {
          const restaurant = data.restaurants[Math.floor(Math.random()*data.restaurants.length)];
          console.log(restaurant)
        })
      })
    })
  }

}
