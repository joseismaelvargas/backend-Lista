import mongoose from "mongoose";

const mongodb=process.env.MONGODB
mongoose.connect(mongodb)

const infoceonecion=mongoose.connection

infoceonecion.once('open',()=>{
console.log('Base de dato conectado')
});