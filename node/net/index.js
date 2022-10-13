const net = require('net');

const server = net.createServer((socket) => {
    socket.on("data", (data) => {
        console.log(data.toString())
        socket.write('hello')
    });
    socket.on("end", (data) => {
        socket.write('end')
    })

    socket.write('欢迎')
})

server.listen(4000, () => {
    console.log("server bound")
})