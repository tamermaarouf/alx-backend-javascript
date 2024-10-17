export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() { return this._size; }

  set size(setSize) { this._size = setSize; }

  get location() { return this._location; }

  set location(setloc) { this._location = setloc; }

  [Symbol.toPrimitive](hint) {
    return hint === 'string' ? this._location : this._size;
  }
}
