const showCommandArgs = async (argv) => {
    for (const arg in argv) {
        const [paramKey, paramValue] = [arg, argv[arg]];
        console.log(`${paramKey} is ${paramValue}`);
    }
}

const parseArgs = async () => {
    // Write your code here 
    const args = process.argv.slice(2);
    const params = {};

    for (let i = 0; i < args.length; i += 2) {
        const key = args[i].replace(/^--/, '');
        params[key] = args[i + 1];
    }

    await showCommandArgs(params);

};

parseArgs();