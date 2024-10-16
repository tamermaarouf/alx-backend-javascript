import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() { return this._amount; }

  set amount(setAmount) { this._amount = setAmount; }

  get currency() { return this.currency; }

  set currency(setCurrency) { this._currency = setCurrency; }

  displayFullPrice() {
    const cur = new Currency(this._currency.code, this._currency.name).displayFullCurrency();
    return `${this._amount} ${cur}`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
