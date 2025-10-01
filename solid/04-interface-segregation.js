// 04_isp.js
console.log("=== ISP - Interface Segregation Principle ===");
console.log("#É melhor ter interfaces pequenas e específicas do que uma grande que obriga a implementar métodos desnecessários#");

// RUIM: interface grande
class Worker {
    work() { }
    eat() { }
    sleep() { }
}
class Robot extends Worker {
    eat() { } // não faz sentido
}

console.log("\n--- RUIM ---");
const robo = new Robot();
robo.work();
robo.eat();

// BOM: interfaces pequenas
class Workable { work() { } }
class Feedable { eat() { } }

class Human extends Workable { work() { } eat() { } }
class Machine extends Workable { work() { } }

console.log("\n--- BOM ---");
const human = new Human();
human.work();
human.eat();
const machine = new Machine();
machine.work();
