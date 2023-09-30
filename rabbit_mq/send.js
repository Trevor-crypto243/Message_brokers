//Will send message to broker
const amqplib = require('amqplib')

const queName = "hello_two" //routing id or routing key

const msg = "Hello World"

const sendMsg = async () =>{
    const connection = await amqplib.connect('amqp://localhost')
    const channel = await connection.createChannel(); 
    await channel.assertQueue(queName,{durable:false})//creates que if it is non existent
    
    channel.sendToQueue(queName, Buffer.from(msg))//Sending to que

    console.log("Sent", msg)

    setTimeout(()=>{
        connection.close()
        process.exit(0)
    },500)
}

sendMsg();