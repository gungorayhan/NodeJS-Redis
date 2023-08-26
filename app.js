
 const redis = require("redis")
 var client = redis.createClient();

 client.on("error",(error)=>{
   
    console.log(error);
 })

 client.set("user_name","ayhan",(error,message)=>{
    if(error){
        console.log(error)
    }
    console.log(message)
 })


 client.get("user_name",(error,message)=>{
    if(error){
        console.log(error)
    }
    console.log("Message", message);
 })

 client.exists("user_name",(error,message)=>{
    if(error){
        console.log(error)
    }
    console.log("Exists", message) //1 or 0 
 })

 client.del("user_name",(error,message)=>{
    if(error){
        console.log("Delete",message)
    }
    console.log(message);
 })

 client.append("last_name","gungor",(error,message)=>{
    if(error){
        console.log(error)
    }
    console.log("Append",message) //true or false

    client.get("last_name",(e,m)=>{
        if(error){
            console.log(e)
        }
        console.log("Okunan veri", m)
    })
 })


 client.on("message",(channel,message)=>{
    console.log(`${channel} isimli kanala ${message} geldi`)
 })

 client.subscribe("merndeveloper")
