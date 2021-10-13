const printOneJob = () => new Promise( (resolve, reject) => {
    setTimeout(() => {
        return resolve("This job has been printed. ", 200);
    });
});

const printAnotherJob = () => new Promise( (resolve, reject) => {
    setTimeout(() => {
        return reject("Another job hasn't been printed : there is no paper in the printer anymore. ", 450);
    });
});

// const printJobs = () => {
//     printOneJob().then((result) => {
//         return printAnotherJob();
//     }).then((result) => {
//         return result;
//     }).catch((error) => {
//         console.warn(error);
//     });
// }

const printJobs = async () => {
    try {
        await printOneJob();
        await printAnotherJob();
    } catch (error) {
        console.warn(error);
    }
}

printJobs();