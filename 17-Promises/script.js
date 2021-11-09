const achiles = document.querySelector('#achiles');
const turtle = document.querySelector('#turtle');

const getRandomInt = (min, max) => {
  return min + Math.ceil(Math.random() * (max - min));
}

const runPlayer = el => {
  const delay = getRandomInt(50, 400);
  return new Promise(resolve => {
    setTimeout(() => {
      el.classList.add('player_running');
      el.addEventListener('transitionend', () => {
        resolve(el.id);
      })
    }, delay);
  })
};

const achilesPromise = runPlayer(achiles);
const turtlePromise = runPlayer(turtle);

Promise.race([achilesPromise, turtlePromise])
  .then(res => {
    console.log(res, 'win!');
  })

const foo = async () => {
  // Promise.resolve(1)
  //   .then(res => {
  //     return Promise.resolve(res * 2);
  //   })
  //   .then(res => {
  //     return Promise.resolve(res * 3);
  //   })
  //   .then(res => console.log(res))
  // const res = await Promise.resolve(1);
  // const res2 = await Promise.resolve(res * 2);
  // const res3 = await Promise.resolve(res2 * 3);

  // console.log(res3);
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

foo();

// Promise.all([achilesPromise, turtlePromise])
//   .then(res => {
//     console.log(res[0]);
//     console.log(res[1]);
//   })

// runPlayer(achiles)
//   .then(res => console.log(res, 'Finished'));

// runPlayer(turtle)
//   .then(res => console.log(res, 'Finished'));

// const fs = require('fs');

// func(callback) // err или res

// function func2(param) {
//   return new Promise((resolve, reject) => {
//     func(param, (err, res) => {
//       if (err) reject(err);
//       else resolve(res);
//     })
//   })
// }

// fs.writeFile('data.txt', 'Hello', (err, res) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('Success');
// });


// const promise = new Promise((resolve, reject) => {
//   fs.writeFile('data.txt', 'Hello', (err) => {
//     if (err) {
//       reject(err);
//       return;
//     }
//     resolve('Success');
//   });
// })

// promise.then(res => console.log(res));

// Promise.resolve(1)
//   .then(res => {
//     Promise.resolve(res * 2)
//       .then(res2 => {
//         Promise.resolve(res2 * 3)
//           .then(res3 => console.log(res3))
//       })
//   })

// Promise.resolve(1)
//   .then(res => {
//     return Promise.resolve(res * 2);
//   })
//   .then(res => {
//     return Promise.resolve(res * 3);
//   })
//   .then(res => console.log(res))

// const delay = time => {
//   return new Promise(resolve => {
//     setTimeout(resolve, time);
//   });
// };

// delay(2000)
//   .then(() => console.log('Hello!'));

// console.log('work');
// const button = document.querySelector('.button');
// console.log(button);

// button.addEventListener('click', () => {
//   console.log('Clicked');
// })

// const now = Date.now();
// console.log('loop started');
// // while(Date.now() < now + 10000) {}
// console.log('loop ended');
// console.log(1);

// setTimeout(() => console.log(2), 0);

// Promise.resolve()
//   .then(() => {
//     console.log(3);
//     while (Math.random() < 0.9) {
//       queueMicrotask(() => console.log(3.5))
//     }
//   });

// console.log(4);
// while (true) {}

// Queue [() => console.log(2), ]
// Micro queue [() => console.log(3)]

// a();
// b();
// c(d);
// e(f);

// a => b => c => e => d => f
// console.log('start');
// [1,2].forEach((a) => console.log(a));
// console.log('end');
// const todosUrl = 'https://jsonplaceholder.typicode.com/todos/1';


// const myFetch = (url, { method }) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.onload = () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.response);
//       } else {
//         reject(xhr.status, xhr.response);
//       }

//     };
//     xhr.onerror = reject;
//     xhr.send();
//   });

//   // return promise;
// };

// const todoPromise = myFetch(todosUrl, { method: 'DELETE' });

// todoPromise
//   .then(res => {
//     console.log(JSON.parse(res));
//   })
//   .catch(err => console.log(err));
