import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalmoduleRoutingModule } from './rentalmodule-routing.module';
import { NgPipesModule } from 'ngx-pipes';


@NgModule({
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent
  ],
  imports: [
    CommonModule,
    RentalmoduleRoutingModule,
    NgPipesModule
  ],
  exports:[
  ]
})
export class RentalmoduleModule { }
