export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() { return this._code; }

  set code(setCode) { this._code = setCode; }

  get name() { return this._name; }

  set name(setName) { this._name = setName; }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
