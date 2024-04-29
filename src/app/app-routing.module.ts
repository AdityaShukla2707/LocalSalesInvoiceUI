import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCountryComponent } from './Forms/Country/list-country/list-country.component';
import { CountryAddComponent } from './Forms/Country/country-add/country-add.component';

const routes: Routes = [
  {
    path:'Forms/CountryList',
    component : ListCountryComponent    
  },
  {
    path :'Forms/Countries/add',
    component : CountryAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
