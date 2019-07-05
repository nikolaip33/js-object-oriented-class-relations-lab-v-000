let driverId = 0;
let passengerId = 0;
let tripId = 0;

let store = {drivers: [], passengers: [], trips: [] };

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;

    store.drivers.push(this);
  }

  trips() {

  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;

    store.passengers.push(this);
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this);
  }
  passenger() {

  }
}
