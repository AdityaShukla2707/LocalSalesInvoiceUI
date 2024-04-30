import { Component, OnInit } from '@angular/core';
import { CountryService } from '../Services/country.service';
import { Country } from '../Models/Country.Model';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css']
})
export class ListCountryComponent implements OnInit {
  Countries? : Country[];
 constructor (private countryService : CountryService ){

 }

 ngOnInit(): void {
   this.countryService.getCountryList().subscribe({
    next: (response) =>{
      this.Countries = response;
    }
   });
 }
}
