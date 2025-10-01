// 03_lsp.js
console.log("=== LSP - Liskov Substitution Principle ===");
console.log("#Subclasses devem poder ser substituídas pelas classes base sem alterar o comportamento esperado.#");

// RUIM: subclasse quebra base
class Bird {
    fly() { console.log("voando"); }
}
class Penguin extends Bird {
    fly() { throw new Error("Não voa"); }
}

console.log("\n--- RUIM ---");
try {
    const p = new Penguin();
    p.fly();
} catch (e) { console.log("Erro:", e.message); }

// BOM: respeita LSP
class FlyingBird extends Bird {
    fly() { console.log("voando"); }
}
class GoodPenguin extends Bird { } // não implementa fly

console.log("\n--- BOM ---");
const fb = new FlyingBird();
fb.fly();
const gp = new GoodPenguin();
console.log("Pinguim não voa mas não quebra o código");
