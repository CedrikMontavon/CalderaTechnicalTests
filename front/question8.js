const promiseNumberOne = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 950);
});

const promiseNumberTwo = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(2), 1800);
});

const promiseNumberThree = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(3), 600);
});

const promiseNumberFour = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(4), 980);
});

Promise.race([promiseNumberThree, promiseNumberFour, promiseNumberOne, promiseNumberTwo]).then(function(promiseCode) {
    console.log(promiseCode);
});

// The value displayed is "3"
// The reason is the Promise.race call returns the promise that is fulfilled or rejected as soon as possible
// It will return the promiseNumberThree and the value "3" will be displayed in 600ms