class Restaurant{
    constructor(params){
        this.name = params.name;
        this.tblCount = params.tblCount;
        this.reservations = [];
        this.waitList = [];
    }

    addReservation(newRes){
        this.reservations.push(newRes);
        this.tblCount = this.tblCount - 1;
        return "Reservation made"
    }

    getReservations(){
        return this.reservations;
    }

    checkAvailability(){
        return this.tblCount > 0;
    }

}

module.exports = Restaurant