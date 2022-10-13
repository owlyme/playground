
setImmediate(() => {
    console.log('setImmediate1')
    process.nextTick(() => {
        console.log('nextTick2')
    })
})
setImmediate(() => {
    console.log('setImmediate2')
})

process.nextTick(() => {
    console.log('nextTick1')
})
