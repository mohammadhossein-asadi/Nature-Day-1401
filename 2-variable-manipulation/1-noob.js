const calculateTotal = (items, option) => {
  let t = 0;
  items.forEach((i) => {
    t += i.price * i.quan;
  });
  t = t - t * (option.dis || 0);
  t = t * 1.1;
  t = t + (option.ship || 5);
  return t;
};

const testItems = [
  { price: 15, quan: 2 },
  { price: 20, quan: 1 },
  { price: 5, quan: 4 },
];
