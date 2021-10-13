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

Promise.all([promiseNumberThree, promiseNumberFour, promiseNumberOne, promiseNumberTwo]).then(function(values) {
    const total = values.reduce((previous, current) => previous + current);

    console.log(total);
});

// The sum is "10"