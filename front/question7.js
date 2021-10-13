console.log("Printer");
setTimeout(() => console.log("Ink"), 0);
Promise.resolve().then(() => console.log("Media"));
console.log("Jobs");

// Result is
// Printer
// Jobs
// Media
// Ink

// Printer and Jobs are printed directly because they are executed on the main thread
// Media is printed third since the promise resolves instantly
// Ink is printed last because the timeout is the longest one to execute