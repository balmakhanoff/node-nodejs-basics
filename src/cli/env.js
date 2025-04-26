import {env} from 'node:process';

const parseEnv = () => {
    for (const [key, value] of Object.entries(env)) {
        console.log(`RSS_${key}=${value}`);
    }
};

parseEnv();