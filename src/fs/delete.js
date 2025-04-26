import fs from 'fs/promises';

const fileExists = async (folderName) => {
    try {
        await fs.access(folderName);
        return true;
    } catch (error) {
        throw new Error('FS operation failed');
    }
}

const remove = async () => {
    // Write your code here
    const fileToRemove = 'files/fileToRemove.txt';

    await fileExists(fileToRemove);

    fs.unlink(fileToRemove)
        .then(() => console.log('File deleted successfully'))
        .catch((err) => console.error('Error while trying to remove file: ' + err));
};

await remove();