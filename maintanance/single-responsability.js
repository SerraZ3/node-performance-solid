console.log("\n=== FUNÇÃO LONGA vs FUNÇÕES PEQUENAS ===");

function longFunction(arr) {
    console.time("longFunction");
    arr.forEach(x => {
        const y = x * 2;
        const z = Math.sqrt(y + 5);
        const w = z.toFixed(2);
    });
    console.timeEnd("longFunction");
}

function processStep1(x) { return x * 2; }
function processStep2(x) { return Math.sqrt(x + 5); }
function processStep3(x) { return x.toFixed(2); }

function smallFunctions(arr) {
    console.time("smallFunctions");
    arr.forEach(x => processStep3(processStep2(processStep1(x))));
    console.timeEnd("smallFunctions");
}

const datasetsFunc = {
    small: Array.from({ length: 100 }, (_, i) => i),
    medium: Array.from({ length: 100000 }, (_, i) => i),
    large: Array.from({ length: 1000000 }, (_, i) => i)
};

for (let key in datasetsFunc) {
    console.log(`\n${key.toUpperCase()} data:`);
    longFunction(datasetsFunc[key].slice(0, key === 'large' ? 10000 : undefined));
    smallFunctions(datasetsFunc[key]);
}
