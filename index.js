import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url';
import './src/database/bdconection.js'
import ruta from './src/routes/lista.routes.js'


//1.Configurar Puerto

const app=express();

app.set('port',process.env.PORT||4000);

app.listen(app.get('port'),()=>{
    console.info("Se conecto el puerto "+app.get('port'))
});
// 2-Configurar middleware

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
console.log(__dirname)
app.use(express.static(path.join(__dirname,'/public')))








// 3-Configurar Rutas

app.use("/api",ruta)
// 4-MONGO_DB ATLAS