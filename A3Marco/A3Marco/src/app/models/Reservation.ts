interface Reservation {
    reservationId: number; // displayed as RES-XXXX 'X's are randomly generated 4 digit number
    
    //rental details starts
    carType: string;
    lengthOfRental: number;
    pickupDate: string;
    childsSeatRequired: boolean;
    //rental details ends
}

export default Reservation;