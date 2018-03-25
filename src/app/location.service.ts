import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LocationService {

  constructor(private http: HttpClient) { }

  locationURL = `https://maps.googleapis.com/maps/api/geocode/json`;

  getLocationData (key, zipcode) {
    const fullURL = `${this.locationURL}?address=${zipcode}&key=${key}`
    return this.http.get(fullURL);
  }

}
