import { Component } from '@angular/core';
import { addCountryRequest } from '../Models/add-country-request.Model';


@Component({
  selector: 'app-country-add',
  templateUrl: './country-add.component.html',
  styleUrls: ['./country-add.component.css']
})
export class CountryAddComponent {
  model: addCountryRequest;

  constructor(){
    this.model = {
      code :'',
      name:''
    };
  }
  onSubmit(){
    //to test on console 
    console.log(this.model);
    
  }
}
