console.log("\n=== ACOPLADO vs MODULAR ===");

function acoplado(data) {
    console.time("acoplado");
    data.forEach(x => {
        const y = x * 2;
        const z = y + 5;
        Math.sqrt(z);
    });
    console.timeEnd("acoplado");
}

function multiplyBy2(x) { return x * 2; }
function add5(x) { return x + 5; }
function modular(data) {
    console.time("modular");
    data.forEach(x => Math.sqrt(add5(multiplyBy2(x))));
    console.timeEnd("modular");
}

const datasetsModular = {
    small: Array.from({ length: 100 }, (_, i) => i),
    medium: Array.from({ length: 100000 }, (_, i) => i),
    large: Array.from({ length: 1000000 }, (_, i) => i)
};

for (let key in datasetsModular) {
    console.log(`\n${key.toUpperCase()} data:`);
    acoplado(datasetsModular[key].slice(0, key === 'large' ? 10000 : undefined));
    modular(datasetsModular[key]);
}
