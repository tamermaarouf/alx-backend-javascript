import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() { return this._amount; }

  set amount(setAmount) { 
    if (typeof setAmount !== 'number') {
      throw new TypeError('amount must be a number')
    } 
    this._amount = setAmount;
    }

  get currency() { return this._currency; }

  set currency(setCurrency) { 
    if (!(setCurrency instanceof Currency)) {
      throw new TypeError('currency must be a Currency')
    }
    this._currency = setCurrency; 
  }

  displayFullPrice() {
    // const cur = new Currency(this._currency.code, this._currency.name).displayFullCurrency();
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
