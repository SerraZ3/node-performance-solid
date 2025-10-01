console.log("\n=== DB LOOP vs QUERY ÚNICA ===");

const fakeDB = {
    getUser: async id => new Promise(resolve => setTimeout(() => resolve({ id }), 1))
};

const datasetsDB = {
    small: Array.from({ length: 100 }, (_, i) => i),
    medium: Array.from({ length: 100000 }, (_, i) => i),
    large: Array.from({ length: 1000000 }, (_, i) => i)
};

async function dbLoop(ids) {
    console.time("dbLoop");
    const results = [];
    for (let id of ids) results.push(await fakeDB.getUser(id));
    console.timeEnd("dbLoop");
}

async function dbBatch(ids) {
    console.time("dbBatch");
    const results = await Promise.all(ids.map(fakeDB.getUser));
    console.timeEnd("dbBatch");
}

(async () => {
    for (let key in datasetsDB) {
        console.log(`\n${key.toUpperCase()} data:`);
        // Limitar loop sequencial para não travar com dados grandes
        await dbLoop(datasetsDB[key].slice(0, key === 'large' ? 1000 : undefined));
        await dbBatch(datasetsDB[key]);
    }
})();
