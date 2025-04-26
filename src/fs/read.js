import fs from 'fs/promises';

const read = async () => {
    // Write your code here
    const fileForRead = 'files/fileToRead.txt';

    try {
        const dataFromFile = await fs.readFile(fileForRead, 'utf8');
        console.log(dataFromFile);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();