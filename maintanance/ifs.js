console.log("\n=== IFS BAGUNÇADOS vs ORGANIZADOS ===");

const datasetsIf = {
    small: [0, 1, 2, 3, 4],
    medium: Array.from({ length: 100000 }, (_, i) => i % 5),
    large: Array.from({ length: 1000000 }, (_, i) => i % 5)
};

function messyIf(arr) {
    console.time("messyIf");
    arr.forEach(x => {
        if (x === 0) Math.sqrt(x);
        else if (x === 1) Math.sqrt(x);
        else if (x === 2) Math.sqrt(x);
        else if (x === 3) Math.sqrt(x);
        else if (x === 4) Math.sqrt(x);
    });
    console.timeEnd("messyIf");
}

function organizedIf(arr) {
    const map = {
        0: x => Math.sqrt(x),
        1: x => Math.sqrt(x),
        2: x => Math.sqrt(x),
        3: x => Math.sqrt(x),
        4: x => Math.sqrt(x),
    };
    console.time("organizedIf");
    arr.forEach(x => map[x](x));
    console.timeEnd("organizedIf");
}

for (let key in datasetsIf) {
    console.log(`\n${key.toUpperCase()} data:`);
    messyIf(datasetsIf[key].slice(0, key === 'large' ? 100000 : undefined)); // limitar para loop ruim
    organizedIf(datasetsIf[key]);
}
