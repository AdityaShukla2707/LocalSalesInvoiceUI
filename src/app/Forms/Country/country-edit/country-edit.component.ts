import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CountryService } from '../Services/country.service';
import { EditCountryRequest } from '../Models/edit-country-request.model';

@Component({
  selector: 'app-country-edit',
  templateUrl: './country-edit.component.html',
  styleUrls: ['./country-edit.component.css']
})
export class CountryEditComponent implements OnInit, OnDestroy {
  model: EditCountryRequest;
  id : string | null = null;
  parSub? : Subscription;

  constructor (private countryService : CountryService, private route :ActivatedRoute, private router: Router){
    this.model = {
      id:0,
      countryCode :'',
      name:'',
      description:''
    };
  }
  
  ngOnInit(): void {
    
   this.parSub =  this.route.paramMap.subscribe({
      next:(params) =>{
        this.id= params.get('id');
        if(this.id){
          this.countryService.GetCountryById(this.id).subscribe({
            next : (response)=>{
              this.model = response;
            }
          });
          
        }
      }

    });

    
  }
  onSubmit(){
    //to test on console 
    console.log(this.model);
    if(this.model.description == '' ||this.model.description ==null){
      this.model.description = 'Same For ALL';
    }
    this.parSub = this.countryService.EditCountry(this.model).subscribe({
      next : (response) =>{
      this.router.navigateByUrl("/Forms/CountryList");
      }
    })

    
  }

  ngOnDestroy(): void {
    this.parSub?.unsubscribe();
  }
}
