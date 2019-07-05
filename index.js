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
    return store.trips.filter(
      function(trip){
        return trip.driverId === this.id
      }.bind(this)
    );
  }

  passengers() {
    return this.trips().map(
      funtion(trip) {
        return trip.driverId === this.id
      }.bind(this)
    );
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;

    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(
      function(trip){
        return trip.passengerId === this.id
      }.bind(this)
    );
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
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId
      }.bind(this)
    );
  }

  driver() {
    return store.drivers.find(
      function (driver) {
        return driver.id === this.driverId
      }.bind(this)
    );
  }
}
