import { Component } from '@angular/core';
import { addCountryRequest } from '../Models/add-country-request.Model';
import { CountryService } from '../Services/country.service';


@Component({
  selector: 'app-country-add',
  templateUrl: './country-add.component.html',
  styleUrls: ['./country-add.component.css']
})
export class CountryAddComponent {
  model: addCountryRequest;

  constructor(private countryService : CountryService){
    this.model = {
      CountryCode :'',
      name:'',
      Description:''
    };
  }
  onSubmit(){
    //to test on console 
    console.log(this.model);
    if(this.model.Description == '' ||this.model.Description ==null){
      this.model.Description = 'Same For ALL';
    }
    this.countryService.AddCountry(this.model).subscribe({
      next : (response) =>{
      alert('data saved');
      }
    })

    
  }
}
