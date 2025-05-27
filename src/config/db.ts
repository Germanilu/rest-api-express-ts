import {Sequelize} from 'sequelize-typescript';
import dotenv from 'dotenv';

//Mando a llamar las variables de entorno
dotenv.config()

// Conexion al db, se le añade al final de la url ?ssl=true para que no de error al conectar(ver .env)
const db = new Sequelize(process.env.DATABASE_URL!, {
    models: [__dirname + '/../models/**/*'],
    //Evita enviar mensajes a la consola
    logging:false
})

export default db;