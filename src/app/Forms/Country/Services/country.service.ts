import { Injectable } from '@angular/core';
import { addCountryRequest } from '../Models/add-country-request.Model';
import { EditCountryRequest } from '../Models/edit-country-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from '../Models/Country.Model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient ) {

   }

   
   GetCountryById(id:string):Observable<EditCountryRequest>{
     return this.http.get<EditCountryRequest>(`https://localhost:7174/api/Country/GetCountryById/${id}`);
   }
   EditCountry(model: EditCountryRequest):Observable<void>{
    console.log(model);
    return this.http.put<void>('https://localhost:7174/api/Country/UpdateCountry', model)
   }
   AddCountry(model: addCountryRequest):Observable<void>{
    console.log(model);
    return this.http.post<void>('https://localhost:7174/api/Country/CreateCountry', model)
   }

   getCountryList() : Observable<Country[]>{
    return this.http.get<Country[]>('https://localhost:7174/api/Country/GetAllCountries')
   }
} 
