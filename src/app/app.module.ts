import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { LocationService } from './location.service';
import { ZomatoService } from './zomato.service';


import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SubmitComponent } from './submit/submit.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DropdownComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LocationService, ZomatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
