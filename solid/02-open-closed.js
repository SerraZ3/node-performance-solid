// 02_ocp.js
console.log("=== OCP - Open/Closed Principle ===");
console.log("#O código deve estar aberto para extensão, mas fechado para modificação.#");
console.log("##-Você não deve alterar código existente para adicionar funcionalidades#");
console.log("##-Deve conseguir estender o comportamento sem quebrar o código antigo#");





// RUIM: código fechado à extensão
class Discount {
    calculate(user) {
        if (user.type === 'VIP') return 0.2;
        if (user.type === 'Regular') return 0.1;
        return 0;
    }
}
console.log("\n--- RUIM ---");
const disc1 = new Discount();
console.log("VIP discount:", disc1.calculate({ type: 'VIP' }));
console.log("Regular discount:", disc1.calculate({ type: 'Regular' }));

// BOM: aberto a extensão, fechado a modificação
class DiscountGood {
    constructor(strategy) { this.strategy = strategy; }
    calculate(user) { return this.strategy(user); }
}
const vipStrategy = user => user.type === 'VIP' ? 0.2 : 0;
const regularStrategy = user => user.type === 'Regular' ? 0.1 : 0;

console.log("\n--- BOM ---");
const discVIP = new DiscountGood(vipStrategy);
console.log("VIP discount:", discVIP.calculate({ type: 'VIP' }));
const discRegular = new DiscountGood(regularStrategy);
console.log("Regular discount:", discRegular.calculate({ type: 'Regular' }));
