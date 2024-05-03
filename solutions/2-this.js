// BEGIN
const make = (numer = 0, denom = 1) => {
    const number = {numer, denom}

    number.setNumer = function setNumer(num) {
        this.numer = num;
    }

    number.setDenom = function setDenom(den) {
        this.denom = den;
    }

    number.getNumer = function getNumer() {
        return this.numer;
    }

    number.getDenom = function getDenom() {
        return this.denom;
    }

    number.toString = function toString() {
        return `${this.numer}/${this.denom}`;
    }

    number.add = function add(otherRational) {
        const newNumer = this.numer * otherRational.getDenom() + this.denom * otherRational.getNumer();
        const newDenom = this.denom * otherRational.getDenom();
        return make(newNumer, newDenom);
    };

    return number;

};

export default make;
// END