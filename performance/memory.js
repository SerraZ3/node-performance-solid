console.log("\n=== MEMÓRIA PESADA vs OTIMIZADA ===");

function heavyMemory(n) {
    console.time("heavyMemory");
    let arr = Array.from({ length: n }, (_, i) => i);
    let arr2 = JSON.parse(JSON.stringify(arr)); // clone pesado
    console.timeEnd("heavyMemory");
}

function optimizedMemory(n) {
    console.time("optimizedMemory");
    let arr = Array.from({ length: n }, (_, i) => i);
    arr = arr.map(x => x); // manipulação direta sem clone
    console.timeEnd("optimizedMemory");
}

const datasetsMem = {
    small: 100,
    medium: 100000,
    large: 1000000
};

for (let key in datasetsMem) {
    console.log(`\n${key.toUpperCase()} data:`);
    heavyMemory(datasetsMem[key]);
    optimizedMemory(datasetsMem[key]);
}
