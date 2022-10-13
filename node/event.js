const EventEmitter = require('events');
const E = new EventEmitter()

console.log(E)

E.once( 'start', () => {
    console.log(1)
})
E.once( 'start', () => {
    console.log(12)
})

E.emit("start")

E.emit("start")

E.on()