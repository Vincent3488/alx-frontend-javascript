export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (new.target === Building) {
      throw new TypeError('Cannot construct Building instances directly');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Square footage must be a number');
    }
    this._sqft = value;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

