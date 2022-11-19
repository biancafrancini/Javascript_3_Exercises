const isLogged = true;

let promiseOne = new Promise((resolve, reject) => {
  if (isLogged === true) {
    return resolve(Math.random());
  } else {
    return reject(new Error("Log in data are not valid. Please, try again."));
  }
});

console.log(promiseOne);

function promiseTwo(numberID) {
  return new Promise((resolve, reject) => {
    if (numberID > 0.5) {
      return resolve({ name: "John", age: 24 });
    } else {
      return reject(new Error("No storaged data matches the provided ID. Please, try again."));
    }
  });
}

promiseOne
  .then(promiseTwo)
  .then((result) => console.log(result))
  .catch((err) => console.error(err))
  .finally(() => console.log("Your data have been processed. Thank you."));
