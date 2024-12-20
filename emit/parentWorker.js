const {Worker} = require('worker_threads')

const worker = new Worker('./worker.js', 
    { workerData: { a: 1 ,
                    b: 2    
    } })

worker.on('message', (resulat)  => {
    console.log(resulat)
})   

console.log("coucou" +worker.postMessage(10))// { nbr: 20 }
console.log(worker.postMessage(20))// { nbr: 20 }
console.log(worker.postMessage(20))// { nbr: 20 }
console.log(worker.postMessage(40))// { nbr: 20 }

const startTime = new Date()
console.log(`Go parent début à ${startTime.toLocaleTimeString()}`);

const worker2 = new Worker('./worker2.js');

const endTime = new Date()
console.log(`Stop parent fin à ${endTime.toLocaleTimeString()}`);

const duration = endTime - startTime  ;
console.log(`Durée d'exécution : ${duration} milli secondes`);


