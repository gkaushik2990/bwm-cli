import { Rental } from './../shared/rental.model';
import { RentalserviceService } from './../shared/rentalservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  constructor(private rentalService : RentalserviceService) { }

  rentals:Rental[];

  ngOnInit(): void {
    const rentObservable = this.rentalService.getRentals();

    rentObservable.subscribe(
      (data:Rental[])=>{
          this.rentals = data;
      },
      (err)=>{

      },
      ()=>{

      }
    );
  }

  

}
