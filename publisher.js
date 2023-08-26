const redis=require("redis");
const client=redis.createClient();

client.on("error",(error)=>{
    console.error(error)
})
client.publish("merndeveloper","app üzerinden gönderilen veri",(e,number)=>{
    console.log(`Mesaj ${number} kişiye gönderildi`)
})



