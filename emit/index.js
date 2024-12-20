const EventEmitter = require('events')
const em = new EventEmitter()

em.on(('greet'), () => {
    console.log("Bonjour, tout le monde")
})

em.on('customEvent', () => {
    console.log('Event triggered')
})

//em.emit('greet')


//////////////////////////////////////////////////////////////


class MyEmitter extends EventEmitter {
    constructor() {
        super()}
    
    triggerEvent = () => {
        console.log("coucou")
        this.emit('customEvent')
    }

    listen = () => {
        this.on('customEvent', () => {
            console.log('Event triggered')
        })
    }
       
}

const myEmitter = new MyEmitter()
//myEmitter.listen()
myEmitter.triggerEvent()





