import { RentalComponent } from './rental/rental.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path:'',redirectTo:'rental',pathMatch:'full'},
    {
     path:'rental',
     loadChildren:
          ()=> import('./rental/rentalmodule.module')
          .then((m)=>m.RentalmoduleModule)
    }
];

// const routes: Routes = [
//   // {path:'',component:RentalComponent}
// ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
