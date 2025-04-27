import {Transform} from 'stream';
import {pipeline} from 'stream/promises';

const transform = async () => {
    // Write your code here
    const reverser = new Transform({
        transform(chunk, _, callback) {
            const text = chunk.toString().replace(/\r?\n$/, '');
            const reversedText = text.toString().split('').reverse().join('');
            this.push(reversedText + '\n');
            callback();
        }
    })

    await pipeline(
        process.stdin,
        reverser,
        process.stdout
    );
};

// ctr + c прерывает выполнение программы
await transform();