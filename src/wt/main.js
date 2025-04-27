import { Worker, isMainThread } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const performCalculations = async () => {
    const numbers = [10, 11, 12, 13];

    const results = await Promise.all(numbers.map((n) => {
        return new Promise((resolve) => {
            const worker = new Worker(path.join(__dirname, 'worker.js'), {
                workerData: n
            });

            worker.on('message', (msg) => {
                resolve({
                    status: 'resolved',
                    data: msg.result
                });
            });

            worker.on('error', () => {
                resolve({
                    status: 'error',
                    data: null
                });
            });
        });
    }));

    console.log(results);
};

// Запускайте через node src/wt/main.js
if (isMainThread) {
    await performCalculations();
}