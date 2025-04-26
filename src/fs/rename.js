import fs from 'fs/promises';

const fileExists = async (folderName) => {
    try {
        await fs.access(folderName);
        return true;
    } catch (error) {
        throw new Error('FS operation failed');
    }
}

const fileNotExists = async (folderName) => {
    const fileExists = await fs.access(folderName)
        .then(() => true)
        .catch(() => false);
    if (fileExists) {
        throw new Error('FS operation failed');
    }
}

const rename = async () => {
    // Write your code here
    const fileToRename = 'files/wrongFilename.txt';
    const newFileName = 'files/properFilename.md';

    await fileExists(fileToRename);
    await fileNotExists(newFileName);

    try {
        fs.rename(fileToRename, newFileName)
        console.log('Renamed');
    } catch (err) {
        console.error('Issue with renaming file. ' + err);
    }
};

await rename();