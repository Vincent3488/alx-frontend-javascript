// 10-car.js
class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const ClonedCar = this.constructor[Symbol.species] || this.constructor;
    return new ClonedCar();
  }

  static get [Symbol.species]() {
    return this;
  }
}

export default Car;

