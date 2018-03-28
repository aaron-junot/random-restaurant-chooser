import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationService } from '../location.service';
import { ZomatoService } from '../zomato.service';
import { LocationData } from '../locationdata';
import { RestaurantComponent } from '../restaurant/restaurant.component';
import { environment } from '../../environments/environment.prod';
declare var System: any;

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  @Input() restaurant: RestaurantComponent;

  numClicks = 0;

  constructor(
    private locationService: LocationService,
    private zomatoService: ZomatoService) {}

  ngOnInit() {
  }

  onSubmit() {
    this.numClicks++;
    if (this.numClicks > 6)
    {
      alert("You can only view up to 6 random restaurants");
      return;
    }

    const zipcode = ((document.getElementById("zipcode") as HTMLInputElement).value);
    const zip = parseInt(zipcode);
    const dist = ((document.getElementById("distance") as HTMLInputElement).value);
    const distance = parseInt(dist);

    const zKey = environment.zomatoKey;
    const gKey = environment.googleKey;

    console.log(zKey)
    console.log(gKey)

    // this.locationService.getLocationData(gKey, zip)
    // .subscribe((data: LocationData) => {
    //   const lat = data.results[0].geometry.location.lat;
    //   const lng = data.results[0].geometry.location.lng;
    //   const radius = distance*1609.344; // convert miles to meters
    //
    //   this.zomatoService.getRestaurantData(zKey, lat, lng, radius)
    //   .subscribe(data => {
    //     const restaurant = data.restaurants[Math.floor(Math.random()*data.restaurants.length)];
    //     this.restaurant.setChoice(restaurant);
    //   })
    // })
  }

}
