// price
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = typeof amount === 'number' ? amount : (() => { throw new Error('Amount must be a number'); })();
    this._currency = currency instanceof Currency ? currency : (() => { throw new Error('Currency must be a Currency'); })();
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = typeof amount === 'number' ? amount : (() => { throw new Error('Amount must be a number'); })();
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency instanceof Currency ? currency : (() => { throw new Error('Currency must be a Currency'); })();
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }
}
