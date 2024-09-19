import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Reservation from '../models/Reservation';

@Component({
  selector: 'app-receipt-screen',
  templateUrl: './receipt-screen.page.html',
  styleUrls: ['./receipt-screen.page.scss'],
})
export class ReceiptScreenPage implements OnInit {

  // variables for receipt details
  reservationId: number = 0;
  carType: string = "";
  lengthOfRental: number = 0;
  pickupDate: string = "";
  carSeatRequired: string = "";
  
  // pricing for the rental
  subtotal: number = 0;
  tax: number = 0;
  total: number = 0;

  // pricing for the rental, but as a string for display purposes
  subtotalStr: string = "";
  taxStr: string = "";
  totalStr: string = "";


  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {

      if ("reservation" in params){
        let reservation: Reservation = JSON.parse(params["reservation"]);
        
        this.reservationId = reservation.reservationId;
        this.carType = reservation.carType;
        this.lengthOfRental = reservation.lengthOfRental;
        this.pickupDate = reservation.pickupDate;

        // check to see if a child's car seat is needed
        if (reservation.childsSeatRequired){
          this.carSeatRequired = "Yes";
        }
        else{
          this.carSeatRequired = "No";
        }

        this.findTotal();
      }
    })
  }

  ngOnInit() {
  }

  findSubtotal(): number {

    let rentalRate: number = 0; // stores the cost of the rental (subtotal)

    let rentedDays: number = 0; // stores number of days a car is rented for, if it's rented for more than 5 hours
    
    // variables to store daily/hourly rates of the sedan and suv. So if the rate ever changes, we can adjust it once here
    let dailySedanRate: number = 70;
    let hourlySedanRate: number = 7;

    let dailySuvRate: number = 100;
    let hourlySuvRate: number = 12;

    // variable to store the daily/hourly rate of the child's car seat
    let dailyCarSeatRate: number = 10;
    let hourlyCarSeatRate: number = 1;

    // check to see what car was selected and how many hours it is being rented for
    if (this.carType == "Sedan"){

      // check to see if rented hours is less than or equal to 5 hours. If so, charge hourly. Otherwise charge daily rate
      if (this.lengthOfRental <= 5){
        rentalRate = this.lengthOfRental * hourlySedanRate;
      }
      else{
        
        rentedDays = this.lengthOfRental / 24;

        // charge for one day if rented days is between this amount
        if (rentedDays >= 0.25 && rentedDays <= 1){
          rentalRate = dailySedanRate;
        }
        
        // if being rented for 2 days
        else if (rentedDays > 1 && rentedDays <= 2){
          rentalRate = dailySedanRate * 2;
        }

        // if being rented for 3 days (Note: 96 hours = 4 days, but customer only gets charged for 3 days according to assignment)
        else if (rentedDays > 2 && rentedDays <= 4){
          rentalRate = dailySedanRate * 3;
        }

      }
    }
    else if (this.carType == "SUV"){

      // see if rented hours is less than or equal to 5
      if (this.lengthOfRental <= 5){
        rentalRate = this.lengthOfRental * hourlySuvRate;
      }

      else {
        rentedDays = this.lengthOfRental / 24;

        // charge for one day if rented days is between this amount
        if (rentedDays >= 0.25 && rentedDays <= 1){
          rentalRate = dailySuvRate;
        }
        
        // if being rented for 2 days
        else if (rentedDays > 1 && rentedDays <= 2){
          rentalRate = dailySuvRate * 2;
        }

        // if being rented for 3 days
        else if (rentedDays > 2 && rentedDays <= 4){
          rentalRate = dailySuvRate * 3;
        }
      }
    }

    // see if a childs car seat is required
    if (this.carSeatRequired){
      
      // if being rented for less than 5 hours, charge the hourly rate.
      if (this.lengthOfRental <= 5){
        rentalRate += hourlyCarSeatRate * rentedDays;
      }

      // otherwise charge the daily rate
      else {
        // charge for one day if rented days is between this amount
        if (rentedDays >= 0.25 && rentedDays <= 1){
          rentalRate += dailyCarSeatRate;
        }
        
        // if being rented for 2 days
        else if (rentedDays > 1 && rentedDays <= 2){
          rentalRate += dailyCarSeatRate * 2;
        }

        // if being rented for 3 days
        else if (rentedDays > 2 && rentedDays <= 3){
          rentalRate += dailyCarSeatRate * 3;
        }
      }
    }

    return rentalRate;
  }

  findTax(subtotal: number): number {
    return subtotal * 0.13;
  }

  
  findTotal(){

    // 1. find subtotal
    this.subtotal = this.findSubtotal();

    // 2. take subtotal and find the tax applied to it
    this.tax = this.findTax(this.subtotal);
    
    // 3. get the total
    this.total = this.subtotal + this.tax;

    // 4. Round all valeus to 2 decimal places
    this.subtotalStr = this.subtotal.toFixed(2);
    this.taxStr = this.tax.toFixed(2);
    this.totalStr = this.total.toFixed(2);
  }

}
