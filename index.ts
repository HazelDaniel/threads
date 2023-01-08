// DISTRIBUTING WORK BETWEEN WORKER PROCESSES.

/**NOTE:
 * WHILE WORKER THREADS SHARE MEMORY THEY DO NOT COMPLETELY REPLACE CLUSTERS .
 *  DATABASES CAN BE USED IN THAT REGARDS. 
 *  DISTRIBUTING WORKS BETWEEN THREADS FOR NETWORK REQUEST HANDLING DOES HAS TO BE IMPLEMENTED MANUALLY AS OPPOSED TO CLUSTERS 
 */

const {isMainThread,workerData,Worker:NodeWorker}=require("worker_threads")!;

if(isMainThread){
    console.log(`Main thread. Process ID: ${process.pid}`);
    new NodeWorker(__filename,{
        workerData: [1,16,2,0,5]
    });
    new NodeWorker(__filename,{
        workerData: [2,1,5,4,9,0]
    });
}else{
    console.log(`Worker thread. Process ID: ${process.pid}`);
    console.log(`worker data : ${workerData}\n. after sorting ${workerData.sort()}`)
}