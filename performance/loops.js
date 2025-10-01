console.log("=== LOOP MAL vs OTIMIZADO ===");

const datasets = {
    small: Array.from({ length: 1000 }, (_, i) => i),
    medium: Array.from({ length: 100000 }, (_, i) => i),
    large: Array.from({ length: 1000000 }, (_, i) => i),
};

// Loop mal otimizado (loop dentro de loop desnecessário)
function badLoop(data) {
    let sum = 0;
    console.time("badLoop");
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (i === j) sum += data[i];
        }
    }
    console.timeEnd("badLoop");
}

// Loop otimizado
function goodLoop(data) {
    let sum = 0;
    console.time("goodLoop");
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    console.timeEnd("goodLoop");
}

for (let key in datasets) {
    console.log(`\n${key.toUpperCase()} data:`);
    badLoop(datasets[key].slice(0, key === 'large' ? 10000 : undefined)); // limitar para loop ruim
    goodLoop(datasets[key]);
}
