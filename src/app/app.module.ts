import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NevbarComponent } from './core/Component/nevbar/nevbar.component';
import { ListCountryComponent } from './Forms/Country/list-country/list-country.component';
import { CountryAddComponent } from './Forms/Country/country-add/country-add.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NevbarComponent,
    ListCountryComponent,
    CountryAddComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
