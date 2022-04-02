const taxRate = 1.1;
const shippingDefault = 5;

function calculateTotal(items, options = {}) {
  if (items == null || items.length === 0) return 0;
  let total = 0;
  items.forEach((item) => {
    total += item.price * item.quantity;
  });

  total = total - total * (options.discount || 0);
  total = total * taxRate;
  if (options.shipping !== 0) {
    total = total + (options.shipping || shippingDefault);
  }
  return total;
}


const testItems = [
  { price: 15, quantity: 2 },
  { price: 20, quantity: 1 },
  { price: 5, quantity: 4 },
];

 
// console.log(calculateTotal());
// console.log(calculateTotal(testItems));
// console.log(calculateTotal(undefined, {}));
// console.log(calculateTotal([], {}));

console.log(calculateTotal(testItems, {}));
console.log(calculateTotal(testItems, { shipping: 0 }));
console.log(calculateTotal(testItems, { discount: 0.75 }));
console.log(calculateTotal(testItems, { shipping: 12 }));