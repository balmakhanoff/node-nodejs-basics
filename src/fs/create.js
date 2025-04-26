import fs from 'fs/promises';

const isFileExists = async (filePath) => {
    const fileExists = await fs.access(filePath)
        .then(() => true)
        .catch(() => false);
    if (fileExists) {
        throw new Error('FS operation failed');
    }
};

const create = async () => {
    // Write your code here
    const staticSourcePath = 'files/';
    const fileName = 'fresh.txt';
    const fileText = 'I am fresh and young';
    const relativePathToFile = staticSourcePath + fileName;

    await isFileExists(relativePathToFile);

    await fs.appendFile(relativePathToFile, fileText, function (err) {
        if (err) {
            console.log('Err: ' + err);
        } else {
            console.log('Saved!');
        }
    })
};

await create();