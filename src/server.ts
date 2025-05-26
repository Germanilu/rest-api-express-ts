import express from 'express';
import router from './router';
import db from './config/db';
import colors from 'colors'
import swaggerSpec from './config/swagger';
import swaggerUi from 'swagger-ui-express'
import cors, {CorsOptions} from 'cors'

//Conectar base de datos
export async function connectDB(){
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

//Permitir conexiones con CORS
const corsOptions : CorsOptions = {
    origin: function(origin, callback){
        if(origin === process.env.FRONTEND_URL){
            //El callback toma 2 parametros, el primero el error, el segundo si permitir o no la conexion
            callback(null,true)
        }else{
            callback(new Error('Error de CORS'))
        }
    }
}
server.use(cors(corsOptions))

// Leer datos de formularios
server.use(express.json())
server.use(express.urlencoded({ extended: true })); // esto también suma


// ========== Rutas ==========//
//Registro un conjunto de rutas(paths) bajo /api/products. 
server.use('/api/products', router)

//Docs 
server.use('/docs',swaggerUi.serve, swaggerUi.setup(swaggerSpec))


export default server
