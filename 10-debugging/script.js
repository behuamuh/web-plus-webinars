// Дан массив с числами.
// С помощью цикла найдите сумму элементов этого массива. Показать решение.

const numbers = [4, 57, 2, 12, 3, 7];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
  // debugger;
  // console.log(numbers[i], sum);
}

console.log(sum);

// Дан массив с числами.
// С помощью цикла найдите сумму четных элементов этого массива. Показать решение.

let even = 0;

for (let i = 0; i <= numbers.length; i++) {
  const num = numbers[i];
  // console.log(num.toFixed(2));
  if (num % 2 === 0) {
    even = even + num;
    console.log({ even, num });
  }
}

console.error(even);
console.table(numbers);

// console.log(odd);

let odd = 13;
// console.log(od);

// bar();

const bar = () => console.log('bar');

bar();

// odd();

// function bar() {
//   console.log('bar');
// }
// <
const arr = new Array(Infinity);
