import express from 'express';
import router from './router';
import db from './config/db';
import colors from 'colors'

//Conectar base de datos
async function connectDB(){
    try { 
        await db.authenticate()
        db.sync()
        // console.log(colors.magenta('conecxion exitosa a la DB'))
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


// ========== Rutas ==========//
//Registro un conjunto de rutas(paths) bajo /api/products. 
server.use('/api/products', router)

server.get('/api',(req,res) => {
    res.json({msg: 'Desde API'})
})


export default server
