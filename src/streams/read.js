import fs from 'fs';

const read = async () => {
    // Write your code here
    const filePath = 'files/fileToRead.txt';

    try {
        const textFromFile = await new Promise((resolve, reject) => {
            const chunks = [];
            const streamReader = fs.createReadStream(filePath, 'utf-8');

            streamReader.on('data', (chunk) => chunks.push(chunk));
            streamReader.on('end', () => resolve(chunks.join('')));
            streamReader.on('error', (err) => reject(err));
        });

        process.stdout.write(textFromFile);
    } catch (err) {
        console.error('Error reading file:', err);
        throw err;
    }
};

await read();