import { workerData, parentPort } from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

if (parentPort) {
    const sendResult = () => {
        const result = nthFibonacci(workerData);
        parentPort.postMessage({ result });
    };
    sendResult();
}