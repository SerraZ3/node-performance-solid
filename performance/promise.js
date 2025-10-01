console.log("=== PROMISE.ALL vs SEQUENCIAL REAL ===");

function asyncTaskHeavy(i) {
    return new Promise(resolve => setTimeout(() => resolve(i), 10)); // 10ms por task
}

const datasets = {
    small: Array.from({ length: 10 }, (_, i) => i),
    medium: Array.from({ length: 100 }, (_, i) => i),
    large: Array.from({ length: 1000 }, (_, i) => i),
};

// Sequencial
async function sequential(tasks) {
    console.time("sequential");
    const results = [];
    for (let t of tasks) results.push(await asyncTaskHeavy(t));
    console.timeEnd("sequential");
    return results;
}

// Paralelo
async function parallel(tasks) {
    console.time("parallel");
    const results = await Promise.all(tasks.map(asyncTaskHeavy));
    console.timeEnd("parallel");
    return results;
}

// Rodar benchmark
(async () => {
    for (let key in datasets) {
        console.log(`\n${key.toUpperCase()} data:`);
        await sequential(datasets[key]);
        await parallel(datasets[key]);
    }
})();