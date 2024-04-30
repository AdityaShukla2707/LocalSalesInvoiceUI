import { Component, OnDestroy } from '@angular/core';
import { addCountryRequest } from '../Models/add-country-request.Model';
import { CountryService } from '../Services/country.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-country-add',
  templateUrl: './country-add.component.html',
  styleUrls: ['./country-add.component.css']
})
export class CountryAddComponent implements OnDestroy {
  model: addCountryRequest;
private addCountrySubscription? : Subscription


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
    this.addCountrySubscription = this.countryService.AddCountry(this.model).subscribe({
      next : (response) =>{
      console.log('add data successfully!')
      }
    })

    
  }
  ngOnDestroy(): void {
    this.addCountrySubscription?.unsubscribe();
  }
}
