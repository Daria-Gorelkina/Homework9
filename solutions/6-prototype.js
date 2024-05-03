// BEGIN
function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
}

Money.prototype.getValue = function() {
    return this.value;
};

Money.prototype.getCurrency = function() {
    return this.currency;
};

Money.prototype.exchangeTo = function(currency) {
    const exchangeRates = {
        'usd': { 'eur': 0.7 },
        'eur': { 'usd': 1.2 }
    };

    if (this.currency === currency) {
        return new Money(this.value, currency);
    } else {
        const newValue = this.value * exchangeRates[this.currency][currency];
        return new Money(newValue, currency);
    }
};

Money.prototype.add = function(money) {
    const newValue = this.currency === money.currency ? this.value + money.value :
        this.value + money.exchangeTo(this.currency).value;
    return new Money(newValue, this.currency);
};

Money.prototype.format = function() {
    const formattedValue = this.value.toLocaleString(undefined, { style: 'currency', currency: this.currency });
    return formattedValue;
};

export default Money;
// END
