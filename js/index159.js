const brand = 'brand';
const price = 'price';
const jeep = {
  brand: 'Jeep Wrangler',
  price: 34000,
  getBrand: function () {
    return(`the brand ${this.brand}`);
  },
  getCost: function () {
    return(`is ${this.price}`);
  }
}
console.log(jeep.getBrand());
console.log(jeep.getCost());