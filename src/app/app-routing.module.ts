import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [

  // set the following paths for the components and set LoginComponent as initial and default component

  // Login   : LoginComponent
  // Loans   : LoansComponent
  // Profile : ProfileComponent

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
