function Car() {
    this.doors = 4
}

function Truck() {
    this.doors = 2
}

function VehicleFactory() {
    VehicleFactory.prototype.vehicleClass = Car

    VehicleFactory.prototype.createVehicle = function(options) {
	var options = options || {}
	switch (options.vehicleType) {
	    case 'car' : 
	      this.vehicleClass = Car
	      break
	    case 'truck' :
	      this.vehicleClass = Truck
	      break
	}
	return new this.vehicleClass(options)
    }
}

var vf = new VehicleFactory()

var cr = vf.createVehicle({
    vehicleType : 'car'
})

var tr = vf.createVehicle({
    vehicleType : 'truck'
})

console.log(cr instanceof Car)
console.log(tr instanceof Truck)


