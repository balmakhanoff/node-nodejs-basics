import {createHash} from 'crypto';
import {createReadStream} from 'fs';

const calculateHash = async () => {
    // Write your code here
    try {
        const filePath = 'files/fileToCalculateHashFor.txt';
        const hash = createHash('sha256');
        const stream = createReadStream(filePath);

        stream.on('data', (chunk) => {
            hash.update(chunk);
        })

        stream.on('end', () => {
            const finashHash = hash.digest('hex');
            console.log(`SHA256 hash: ${finashHash}`);
        })

        stream.on('error', (err) => {
            console.error('Error reading file:', err);
            throw err;
        })

    } catch (err) {
        console.error('Unexpected error:', err);
    }
};

await calculateHash();