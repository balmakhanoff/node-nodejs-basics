import {readFile} from 'fs/promises';
import {fileURLToPath} from 'url';
import path from 'path';
import {release, version} from 'os';
import {createServer as createServerHttp} from 'http';
import './files/c.cjs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3000;

const loadJson = async () => {
    if (Math.random() > 0.5) {
        return JSON.parse(await readFile('./files/a.json', 'utf-8'));
    } else {
        return JSON.parse(await readFile('./files/b.json', 'utf-8'));
    }
}

const getSystemInfo = async () => {
    console.log(`Release ${release()}`);
    console.log(`Version ${version()}`);
    console.log(`Path segment separator is "${path.sep}"`);
    console.log(`Path to current file is ${__filename}`);
    console.log(`Path to current directory is ${__dirname}`);
}

const unknownObject = await loadJson();
await getSystemInfo();
console.log(unknownObject);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {unknownObject, myServer};
