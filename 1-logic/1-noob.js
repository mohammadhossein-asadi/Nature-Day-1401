// * Before
// const toAccounting = (n) => {
//     if (n < 0) {
//         return `(${Math.abs(n)})`;
//     } else if (n >= 0) {
//         return n;
//     }
// };

// * After

const toAccounting = (n) => {
  if (n < 0) {
    return `(${Math.abs(n)})`;
  } else {
    return n.toString();
  }
};

console.log(toAccounting(5));
console.log(toAccounting(10));
console.log(toAccounting(-5));
