import express from 'express';
import router from './router';
import db from './config/db';
import colors from 'colors'

//Creo una instancia de la app de express 
const server = express();

//Registro el router para manejar las solicitudes 
server.use('/api/products', router)

//Conectar base de datos
async function connectDB(){
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.magenta('conecxion exitosa a la DB'))
    } catch (error) {
        // console.log(error)
        console.log(colors.bgRed.white("Hubo un error al conectar al DB"))
    }
}
connectDB()

export default server
