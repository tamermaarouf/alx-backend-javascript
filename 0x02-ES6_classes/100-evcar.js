import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    /* eslint new-cap: ["error", { "newIsCap": false  }] */
    const newClone = super.constructor[Symbol.species];
    return new newClone();
  }
}
