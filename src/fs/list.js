import fs from 'fs/promises';

const list = async () => {
    // Write your code here
    const folderName = 'files';

    try {
        const files = await fs.readdir(folderName);
        files.forEach(file => console.log(file))
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();