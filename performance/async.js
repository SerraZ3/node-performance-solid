console.log("\n=== BLOQUEIO vs ASYNC ===");

function blockingSync(arr) {
    console.time("blockingSync");
    arr.forEach(x => { let sum = 0; for (let i = 0; i < 100; i++) sum += Math.sqrt(x + i); });
    console.timeEnd("blockingSync");
}

async function nonBlockingAsync(arr) {
    console.time("nonBlockingAsync");
    await Promise.all(arr.map(async x => { let sum = 0; for (let i = 0; i < 100; i++) sum += Math.sqrt(x + i); }));
    console.timeEnd("nonBlockingAsync");
}

const datasetsBL = {
    small: Array.from({ length: 100 }, (_, i) => i),
    medium: Array.from({ length: 100000 }, (_, i) => i),
    large: Array.from({ length: 1000000 }, (_, i) => i)
};

for (let key in datasetsBL) {
    console.log(`\n${key.toUpperCase()} data:`);
    blockingSync(datasetsBL[key].slice(0, key === 'large' ? 100000 : undefined));
    await nonBlockingAsync(datasetsBL[key]);
}
