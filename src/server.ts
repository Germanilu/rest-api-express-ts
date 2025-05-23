import express from 'express';
import router from './router';
import db from './config/db';
import colors from 'colors'

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

//Creo una instancia de la app de express 
const server = express();
// Leer datos de formularios
server.use(express.json())
server.use(express.urlencoded({ extended: true })); // esto también suma


//Registro el router para manejar las solicitudes 
server.use('/api/products', router)


export default server
