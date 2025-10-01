// 05_dip.js
console.log("=== DIP - Dependency Inversion Principle ===");
console.log("#Classes de alto nível não devem depender de implementações concretas, mas de abstrações (interfaces ou contratos)#");
console.log("#Permite trocar a implementação sem modificar a classe que usa#");


// RUIM: depende de implementação concreta
class MySQLDatabase {
    save(data) { console.log("saved to MySQL:", data); }
}
class UserServiceBad {
    constructor() { this.db = new MySQLDatabase(); }
    register(user) { this.db.save(user); }
}
console.log("\n--- RUIM ---");
const userBad = new UserServiceBad();
userBad.register("João");

// BOM: depende de abstração
class UserServiceGood {
    constructor(db) { this.db = db; }
    register(user) { this.db.save(user); }
}
class PostgresDatabase {
    save(data) { console.log("saved to Postgres:", data); }
}

console.log("\n--- BOM ---");
const userGood = new UserServiceGood(new PostgresDatabase());
userGood.register("Maria");
