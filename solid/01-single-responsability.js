
console.log("=== SRP - Single Responsibility Principle ===");
console.log("#Uma classe ou função deve ter apenas uma razão para mudar, ou seja, deve fazer apenas uma coisa.#");
// * Uma classe ou função deve ter apenas uma razão para mudar, ou seja, deve fazer apenas uma coisa.

// RUIM: classe faz várias coisas
class UserManager {
    register(user) { console.log("salvando no DB", user); }
    authenticate(user) { console.log("autenticando", user); }
    sendWelcomeEmail(user) { console.log("enviando email para", user); }
}
console.log("\n--- RUIM ---");
const um = new UserManager();
um.register("João");
um.authenticate("João");
um.sendWelcomeEmail("João");

// BOM: responsabilidades separadas
class UserService {
    register(user) { console.log("salvando no DB", user); }
    authenticate(user) { console.log("autenticando", user); }
}

class EmailService {
    sendWelcomeEmail(user) { console.log("enviando email para", user); }
}

console.log("\n--- BOM ---");
const userService = new UserService();
userService.register("Maria");
userService.authenticate("Maria");

const emailService = new EmailService();
emailService.sendWelcomeEmail("Maria");
