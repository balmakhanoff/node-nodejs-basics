import {createReadStream, createWriteStream} from "fs";
import {createGzip} from "zlib";
import {pipeline} from "stream/promises";

const compress = async () => {
    // Write your code here
    const inputFilePath = 'files/fileToCompress.txt';
    const outputFilePath = 'files/archive.gz';

    await pipeline(
        createReadStream(inputFilePath),
        createGzip({level: 9}),
        createWriteStream(outputFilePath)
    );
};

await compress();