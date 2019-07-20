/**
class Car() {
}
class CarWithAC() {
}
class CarWithAutoTransmission {
}
class CarWithPowerLocks {
}
class CarWithACandPowerLocks {
}
 */

class Car {
  constructor() {
    this.cost = () => {
      return 20000;
    };
  }
}

const carWithAC = car => {
  car.hasAC = true;
  const prevCost = car.cost();
  car.cost = () => {
    return prevCost + 500;
  };
};

const carWithAutoTransmission = car => {
  car.hasAutoTransmission = true;
  const prevCost = car.cost();
  car.cost = () => {
    return prevCost + 2000;
  };
};

const carWithPowerLocks = car => {
  car.hasPowerLocks = true;
  const prevCost = car.cost();
  car.cost = () => {
    return prevCost + 500;
  };
};

// 다음과 같이 사용
const car = new Car();
console.log(car.cost());

carWithAC(car);
carWithAutoTransmission(car);
carWithPowerLocks(car);

console.log(car.cost());
