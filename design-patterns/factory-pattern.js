// Factory Pattern은 객체가 만들어질 정확한 클래스나 생성자 함수를 명시하지 않고
// 객체를 만드는 factory 메서드를 사용하는 패턴이다.

class Car {
  constructor(options) {
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "white";
  }
}

class Truck {
  constructor(options) {
    this.doors = options.doors || 4;
    this.state = options.state || "used";
    this.color = options.color || "black";
  }
}

class VecicleFactory {
  createVehicle(options) {
    if (options.vehicleType === "car") {
      return new Car(options);
    } else if (options.vehicleType === "truck") {
      return new Truck(options);
    }
  }
}

const factory = new VecicleFactory();

const car = factory.createVehicle({
  vehicleType: "car"
});

const truck = factory.createVehicle({
  vehicleType: "truck"
});

console.log(car);
console.log(truck);
