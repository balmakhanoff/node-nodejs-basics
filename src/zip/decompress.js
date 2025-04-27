import {createReadStream, createWriteStream} from 'fs';
import {createGunzip} from 'zlib';
import {pipeline} from 'stream/promises';

const decompress = async () => {
    // Write your code here
    const inputFilePath = 'files/archive.gz';
    const outputFilePath = 'files/fileToCompress.txt';

    await pipeline(
        createReadStream(inputFilePath),
        createGunzip(),
        createWriteStream(outputFilePath)
    )
};

await decompress();