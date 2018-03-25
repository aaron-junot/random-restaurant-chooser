import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ZomatoService {

  constructor(private http: HttpClient) { }

  zomatoURL = `https://developers.zomato.com/api/v2.1/search`;

  getRestaurantData (key, latitude, longitude, radius) {
    const fullURL = `${this.zomatoURL}?lat=${latitude}&lon=${longitude}&radius=${radius}`
    return this.http.get(fullURL, {
      headers: {'user-key': key}
    });
  }

}
