const isLogged = true;

let promiseOne = new Promise((resolve, reject) => {
  if (isLogged) {
    return resolve(Math.random());
  } else {
    return reject("error");
  }
});

//console.log(promiseOne);

function promiseTwo(numberID) {
  return new Promise((resolve, reject) => {
    if (numberID > 0.5) {
      return resolve({name: "John", age: 24});
    } else {
      return reject("error");
    }
  });
}

promiseOne
  .then(promiseTwo)
  .then((result) => console.log((result)))
  .catch((err) => console.error(err));
