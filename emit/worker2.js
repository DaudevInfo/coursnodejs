const {parentPort} = require('worker_threads');



const startTime = new Date()
console.log(`GO Worker ${startTime.toLocaleTimeString()}`);

let result

for (let i = 0; i < 5_000_000_000; i++) {
    result += i*i
}

const endTime = new Date();
console.log(`Stop Worker fin à ${endTime.toLocaleTimeString()}`);

const duration = endTime - startTime  ;
console.log(`Durée d'exécution : ${duration} milli secondes`);
