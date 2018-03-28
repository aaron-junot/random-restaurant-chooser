import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LocationService } from './location.service';
import { ZomatoService } from './zomato.service';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SubmitComponent } from './submit/submit.component';
import { RestaurantComponent } from './restaurant/restaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DropdownComponent,
    SubmitComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LocationService, ZomatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
