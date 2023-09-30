//will receive the message from the broker
//Will send message to broker
const amqplib = require('amqplib')

const queName = "hello" //routing id or routing key



const sendMsg = async () =>{
    const connection = await amqplib.connect('amqp://localhost')//establishing connection
    const channel = await connection.createChannel(); //creating a channel
    await channel.assertQueue(queName,{durable:false})//ensuring que exists before consuming messages

    console.log(`Waiting for messages in queue : ${queName}`)
    
    channel.consume(queName, msg=>{
        console.log("[X] Received : ",msg.content.toString());//to convert buffer to string

    },{
        noAck:true
    }//acknowledgement
    )//consuming from que

}

sendMsg();