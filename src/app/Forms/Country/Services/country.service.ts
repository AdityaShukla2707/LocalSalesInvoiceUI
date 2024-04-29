import { Injectable } from '@angular/core';
import { addCountryRequest } from '../Models/add-country-request.Model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient ) {

   }

   AddCountry(model: addCountryRequest):Observable<void>{
    console.log(model);
    return this.http.post<void>('https://localhost:7174/api/Country/CreateCountry', model)
   }
} 
