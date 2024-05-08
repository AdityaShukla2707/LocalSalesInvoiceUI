import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCountryComponent } from './Forms/Country/list-country/list-country.component';
import { CountryAddComponent } from './Forms/Country/country-add/country-add.component';
import { CountryEditComponent } from './Forms/Country/country-edit/country-edit.component';

const routes: Routes = [
  {
    path:'Forms/CountryList',
    component : ListCountryComponent    
  },
  {
    path :'Forms/Countries/add',
    component : CountryAddComponent
  },
  {
    path :'Forms/Countries/edit/:id',
    component : CountryEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
