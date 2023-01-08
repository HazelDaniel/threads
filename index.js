"use strict";
const { isMainThread, workerData, Worker: NodeWorker } = require("worker_threads");
if (isMainThread) {
    console.log(`Main thread. Process ID: ${process.pid}`);
    new NodeWorker(__filename, {
        workerData: [1, 16, 2, 0, 5]
    });
    new NodeWorker(__filename, {
        workerData: [2, 1, 5, 4, 9, 0]
    });
}
else {
    console.log(`Worker thread. Process ID: ${process.pid}`);
    console.log(`worker data : ${workerData}\n. after sorting ${workerData.sort()}`);
}
