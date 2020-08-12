import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalserviceService {

  constructor(private http:HttpClient) { }

    public getRentals():Observable<any>{
      // return new Observable<Rental[]>((observer)=>{
      //   setTimeout(()=>{
      //     observer.next(this.rentals);
      //   },2000) 

      // });
      return this.http.get("/api/v1/rentals");

    }
      
    public getRentalDetail(rentalID):Observable<any>{

      // return new Observable<Rental>((observer)=>{
      //     setTimeout(() => {

      //         const rentalDetail = this.rentals.find((rental)=>{
      //             return rental.id = rentalID;
      //         });
      //         observer.next(rentalDetail);
      //     }, 2000);
      // });

      return this.http.get("/api/v1/rentals/"+rentalID);
    }

}
