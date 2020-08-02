import { Rental } from './../shared/rental.model';
import { RentalserviceService } from './../shared/rentalservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  currentId:string;
  rentalDisp:Rental;

  constructor(private route: ActivatedRoute,
              private rentalService:RentalserviceService
              ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params)=>{
        this.currentId = params['rentalId'];
        this.rentalService.getRentalDetail(this.currentId).subscribe(
          (data)=>{
            this.rentalDisp = data;
            console.log(this.rentalDisp);
          },
          (err)=>{

          },
          ()=>{

          }
        );
      }
    );
  }

}
