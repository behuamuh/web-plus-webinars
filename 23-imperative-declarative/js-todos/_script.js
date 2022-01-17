const arr = [2,4,6,9];

// imperative
const double = [];

for (let i = 0; i < arr.length; i++) {
  double[i] = arr[i] ** 2;
}

// declarative
const decDouble = arr.map(el => el ** 2);

// imperative
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
}

// declarative
const decMax = Math.max(...arr);

// imperative
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

// declarative
const decSum = arr.reduce((acc, item) => acc + item);

console.log(sum, decSum);
