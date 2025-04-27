import {createWriteStream} from 'fs';
import {pipeline} from 'stream/promises';


const write = async () => {
    // Write your code here
    const filePath = 'files/fileToWrite.txt';
    const writeStream = await createWriteStream(filePath, 'utf-8');

    await pipeline(process.stdin, writeStream);
};

// ctr + c прерывает выполнение программы
await write().catch(console.error);