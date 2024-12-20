const {parentPort} = require('worker_threads');

const parentData = require('worker_threads').workerData

console.log(parentData) // { a: 1, b: 2 }

// envoi le résultat au parent
parentPort.postMessage({result: parentData.a + parentData.b})

//ecoute le message du parent et renvoi le double
parentPort.on('message', (nbr) => {
    parentPort.postMessage({nbr: nbr*2})   })
