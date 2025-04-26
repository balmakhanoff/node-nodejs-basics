import fs from 'fs/promises';

const createFolder = async (path) => {
    try {
        await fs.mkdir(path);
        console.log('Directory created successfully');
    } catch (err) {
        throw new Error('FS operation failed');
    }
}

const copyFiles = async (from, to) => {
    try {
        await fs.cp(from, to, {recursive: true});
        console.log('Files copied successfully');
    } catch (err) {
        console.log('Something went wrong while copying files. ' + err);
    }
}

const copy = async () => {
    // Write your code here
    const sourceFolderName = 'files';
    const newFolderName = 'files_copy';

    await createFolder(newFolderName);
    await copyFiles(sourceFolderName, newFolderName);
};

await copy();
