import { Injectable } from '@angular/core';
import { addCountryRequest } from '../Models/add-country-request.Model';
import { EditCountryRequest } from '../Models/edit-country-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from '../Models/Country.Model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient ) {

   }

   
   GetCountryById(id:string):Observable<EditCountryRequest>{
     return this.http.get<EditCountryRequest>(`${environment.apiPath}/Country/GetCountryById/${id}`);
   }
   EditCountry(model: EditCountryRequest):Observable<void>{
    console.log(model);
    return this.http.put<void>(`${environment.apiPath}/Country/UpdateCountry`, model)
   }
   AddCountry(model: addCountryRequest):Observable<void>{
    console.log(model);
    return this.http.post<void>(`${environment.apiPath}/Country/CreateCountry`, model)
   }

   getCountryList() : Observable<Country[]>{
    return this.http.get<Country[]>(`${environment.apiPath}/Country/GetAllCountries`)
   }

   DelateCountry(id:string):Observable<Country>{
    return this.http.delete<Country>(`${environment.apiPath}/Country/DeleteCountry/${id}`);
  }
} 
