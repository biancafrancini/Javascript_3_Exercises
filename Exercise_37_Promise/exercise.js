const number = 15;

let myFirstPromise = new Promise((resolve, reject) => {
    if(number > 10){
        resolve(number);
    } else {
        reject(number);
    }
})

myFirstPromise
.then((value) => console.log(value))
.catch((err) => console.error(err))