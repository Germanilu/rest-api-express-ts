import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';

//Mando a llamar las variables de entorno
dotenv.config()

// Conexion al db, se le añade al final de la url ?ssl=true para que no de error al conectar(ver .env)
const db = new Sequelize(process.env.DATABASE_URL!)

export default db;