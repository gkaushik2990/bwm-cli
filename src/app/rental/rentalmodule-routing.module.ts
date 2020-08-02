import { RentalComponent } from './rental.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',component:RentalComponent,
   children:[
      {path:'',component:RentalListComponent},
      {path:':rentalId',component:RentalDetailComponent}
    ]
  } 
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalmoduleRoutingModule { }
