let driverId = 0;
let passengerId = 0;

let store = {drivers = []; passengers = [], trips = []}

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;

    store.drivers.push(this);
  }
}

class Passenger {

}

class Trip {

}
