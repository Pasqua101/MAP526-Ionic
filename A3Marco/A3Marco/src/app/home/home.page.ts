import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Reservation from '../models/Reservation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedHours: number = 1;
  carType: string = "";
  reservationDate: string = "";
  childsSeatRequired: boolean = false;

  constructor(private router: Router) {}

  decreaseStepper(){
    // if selected hours does not equal one then decrease. Otherwise don't
    if (this.selectedHours != 1){
      this.selectedHours--;
    }
  }

  increaseStepper(){
    // if selected hours does not equal 96 then increase. Otherwise don't
    if (this.selectedHours != 96){
      this.selectedHours++;
    }
  }
  
  resetClicked(){
    // hide all errors
    this.resetErrorDiv()

    // resets all fields
    this.selectedHours = 1;
    this.carType = "";
    this.reservationDate = "";
    this.childsSeatRequired = false;
  }

  reserveClicked(){
    // If there are any visible errors hide them so we can changed the div if any previous errors were fixed
    this.resetErrorDiv();

    // array to hold all errors
    let errorArr: string[] =[];

    // Check to see if all required fields are filled 
    if (this.carType == ""){
      errorArr.push("car-type-error");
    }

    // See if selected hours is less than 1 or more than 96
    if (this.selectedHours < 1 || this.selectedHours > 96) {
      errorArr.push("hours-error")
    }

    const selectedDate: Date = this.stripTime(this.parseLocalDate(this.reservationDate));
    const today: Date = this.stripTime(new Date());

    if (selectedDate.getTime() >= today.getTime()) { //selectedDate.getTime() === today.getTime() || 

      // do a quick check to see if any errors were triggered before pushing the user to the next screen
      if (errorArr.length != 0) {
        this.displayErrorDiv(errorArr);
      }

      else {

        this.resetErrorDiv();

        // generating a 4 digit number
        const reservationId = Math.floor(1000 + Math.random() * 9000); // generates a random 4 digit number between 1000 and 9999

        let reservation: Reservation = {
          reservationId: reservationId,
          carType: this.carType,
          lengthOfRental: this.selectedHours,
          pickupDate: this.reservationDate,
          childsSeatRequired: this.childsSeatRequired
        }

        // proceed to the next screen
        this.router.navigate(['/receipt-screen'], {
          queryParams: {
            reservation: JSON.stringify(reservation),
          }
        });
      }
    }

    else{
      errorArr.push("reservation-error");
    }

    // see if any errors got triggered, if the date or anything else was wrong
    if (errorArr.length != 0){
      this.displayErrorDiv(errorArr);
    }
  }


  // helper functions
  stripTime(date: Date){ // strips time from a date and returns a date object with time set to midnight
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
  }

  // Parses the entered reservation date as a local date
  parseLocalDate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day); // Month is 0-based in Date constructor
  }

  displayErrorDiv(errorArr: string[]){

    const errorDiv = document.getElementById("error-div");
    const carTypeError = document.getElementById("car-type-error");
    const hoursError = document.getElementById("hours-error");
    const reservationError = document.getElementById("reservation-error");

    for (let i in errorArr){
      
      // if a car type error was triggered, display it
      if (errorArr[i] == "car-type-error") {
        if (carTypeError) {
          carTypeError.removeAttribute("hidden");
        }
      }
      // if an hours selected error was triggered, display it
      if (errorArr[i] == "hours-error") {
        if(hoursError){
          hoursError.removeAttribute("hidden");
        }
      }
      // if a reservation error was triggered, display it
      if (errorArr[i] == "reservation-error") {
        if(reservationError){
          reservationError.removeAttribute("hidden");
        }
      }
    }
    // make the div visible
    if (errorDiv){
      errorDiv.removeAttribute("hidden");
    }
  }

  // hides all errors
  resetErrorDiv(){
    const errorDiv = document.getElementById("error-div");
    const carTypeError = document.getElementById("car-type-error");
    const hoursError = document.getElementById("hours-error");
    const reservationError = document.getElementById("reservation-error");

    if (errorDiv){
      errorDiv.setAttribute("hidden", "");
    }

    if (carTypeError) {
      carTypeError.setAttribute("hidden", "");
    }

    if(hoursError){
      hoursError.setAttribute("hidden", "");
    }  

    if(reservationError){
      reservationError.setAttribute("hidden", "");
    }
  }
}
