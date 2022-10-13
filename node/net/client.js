const net = require('net');

const client = net.connect({port: 4000}, () => {
    console.log("client connected");
    client.write("world")
})

client.on("data", (data) => {
    console.log(data.toString())
    client.close();
});
client.on("end", (data) => {
    console.log('client end')
})