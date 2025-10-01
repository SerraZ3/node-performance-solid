console.log("\n=== RECURSIVA vs ITERATIVA ===");

// Função recursiva
function factorialRecursive(n) { return n <= 1 ? 1 : n * factorialRecursive(n - 1); }
// Função iterativa
function factorialIterative(n) { let res = 1; for (let i = 2; i <= n; i++) res *= i; return res; }

const datasetsFact = {
    small: 10,
    medium: 1000,
    large: 10000
};

function testFactorial(func, n, label) {
    console.time(label);
    try { func(n); } catch (e) { console.log(`${label} erro: ${e.message}`); }
    console.timeEnd(label);
}

for (let key in datasetsFact) {
    console.log(`\n${key.toUpperCase()} data:`);
    testFactorial(factorialRecursive, datasetsFact[key], `recursive-${key}`);
    testFactorial(factorialIterative, datasetsFact[key], `iterative-${key}`);
}
