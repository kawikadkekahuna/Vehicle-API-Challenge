function Vehicle(make, model, year) {
  this.make = make;
}

  Vehicle.prototype.getMake = function() {
    return this.make;
  }

  Vehicle.prototype.setMake = function(make) {
    var make = make;

  }

  this.getModel = function() {
    return this.model;
  }

  this.setModel = function(model) {
    this.model = model;
  }

  this.getYear = function() {
    return this.year;
  }

  this.setYear = function(year) {
    this.year = year;

  }





Vehicle.create = function(type) {

  if (typeof(type) !== 'string') {

    throw new TypeError('invalid input');

  }

  switch (type) {


    case 'car':
      return new Car();

    case 'truck':
      return new Truck();

    case ' minivan':
      return new Minivan();
  }
}

Vehicle.prototype.readMake = function(){
  return this.make;
}